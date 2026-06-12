// ============================================================
// Lupa GMN — Diagnóstico de Google Meu Negócio com comparação
// de concorrentes e estimativa de receita perdida.
// ============================================================

const GPT_URL = "https://chatgpt.com/g/g-695098ab8d888191bd7f69f5fb864dee-lupa-gmn-diagnostico-score";
const WHATSAPP = ""; // ex.: "5511999999999" — preencha para ativar o CTA do WhatsApp
const LEAD_WEBHOOK = ""; // ex.: URL de webhook do Make/Zapier/Sheets para capturar leads

// CTR médio por posição no pacote local / Maps (estimativas de mercado)
const CTR_BY_RANK = [0.33, 0.22, 0.13, 0.07, 0.05, 0.04, 0.03, 0.02, 0.015, 0.01];
const MONTHLY_SEARCHES_DEFAULT = 900; // buscas/mês estimadas para a categoria na região
const CONVERSION_RATE = 0.25; // % de quem clica/liga que vira cliente (negócio local)

const $ = (id) => document.getElementById(id);
let mapsReady = false;
let lastReport = null;

// ---------- Google Maps loader (chave fica no localStorage) ----------
function getApiKey() { return localStorage.getItem("gmaps_key") || ""; }

async function loadMaps() {
  if (mapsReady) return true;
  const key = getApiKey();
  if (!key) return false;
  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async&libraries=places&language=pt-BR&callback=__mapsReady`;
    window.__mapsReady = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  mapsReady = true;
  return true;
}

// ---------- Coleta de dados ----------
const PLACE_FIELDS = [
  "id", "displayName", "formattedAddress", "location", "rating",
  "userRatingCount", "photos", "websiteURI", "regularOpeningHours",
  "nationalPhoneNumber", "types", "primaryType", "businessStatus",
];

async function fetchBusinessAndCompetitors(query) {
  const { Place } = await google.maps.importLibrary("places");

  const { places } = await Place.searchByText({
    textQuery: query,
    fields: PLACE_FIELDS,
    maxResultCount: 1,
    language: "pt-BR",
    region: "br",
  });
  if (!places || !places.length) throw new Error("Negócio não encontrado. Tente \"nome + cidade\".");
  const me = places[0];

  const { places: nearby } = await Place.searchNearby({
    fields: PLACE_FIELDS,
    locationRestriction: { center: me.location, radius: 5000 },
    includedPrimaryTypes: me.primaryType ? [me.primaryType] : undefined,
    maxResultCount: 10,
    language: "pt-BR",
    rankPreference: "POPULARITY",
  });

  const competitors = (nearby || [])
    .filter((p) => p.id !== me.id)
    .sort((a, b) => visibilityIndex(b) - visibilityIndex(a))
    .slice(0, 5);

  return { me: normalize(me), competitors: competitors.map(normalize) };
}

function normalize(p) {
  return {
    name: p.displayName?.text || p.displayName || "—",
    rating: p.rating || 0,
    reviews: p.userRatingCount || 0,
    photos: p.photos ? p.photos.length : 0,
    website: !!p.websiteURI,
    hours: !!p.regularOpeningHours,
    phone: !!p.nationalPhoneNumber,
    address: p.formattedAddress || "",
  };
}

// Índice simples de "força" no pacote local: nota × confiança no volume de avaliações
function visibilityIndex(p) {
  const rating = p.rating || 0;
  const reviews = p.userRatingCount ?? p.reviews ?? 0;
  return rating * Math.log10(reviews + 1);
}

// ---------- Score (mesma lógica do GPT Lupa GMN, versão automática) ----------
function computeScore(me, competitors) {
  const best = competitors[0] || me;
  const items = [];
  const add = (label, points, max, verdict) => items.push({ label, points: Math.round(points), max, verdict });

  // Nota média (0–25)
  const ratingPts = Math.max(0, ((me.rating - 3) / 2)) * 25;
  add("Nota média", Math.min(25, ratingPts), 25,
    me.rating >= (best.rating || 0)
      ? `Sua nota ${me.rating.toFixed(1)}★ está à altura dos líderes. Único ponto em que você não está apanhando.`
      : `Sua nota é ${me.rating.toFixed(1)}★. ${best.name} tem ${best.rating.toFixed(1)}★. O cliente escolhe pela estrelinha — e não é a sua.`);

  // Volume de avaliações (0–25), relativo ao líder
  const revRatio = me.reviews / Math.max(1, best.reviews);
  add("Volume de avaliações", Math.min(1, revRatio) * 25, 25,
    revRatio >= 1
      ? "Você lidera em avaliações. Mantenha o ritmo ou alguém te alcança."
      : `${best.name} tem ${best.reviews} avaliações. Você tem ${me.reviews} (${Math.round(revRatio * 100)}% do líder). O Google não confia em quem o público não avalia.`);

  // Fotos (0–15)
  const photoPts = Math.min(1, me.photos / 20) * 15;
  add("Fotos no perfil", photoPts, 15,
    me.photos >= 20
      ? "Bom volume de fotos. Perfis com fotos recebem até 42% mais pedidos de rota."
      : `Apenas ${me.photos} foto(s) visível(is). Perfil sem foto é vitrine com a luz apagada.`);

  // Site (0–10)
  add("Site cadastrado", me.website ? 10 : 0, 10,
    me.website ? "Site cadastrado. ✔" : "Sem site no perfil. Você está mandando o cliente procurar o concorrente que tem.");

  // Horários (0–10)
  add("Horário de funcionamento", me.hours ? 10 : 0, 10,
    me.hours ? "Horários preenchidos. ✔" : "Sem horários. \"Será que está aberto?\" = cliente que liga para o próximo da lista.");

  // Telefone (0–5)
  add("Telefone", me.phone ? 5 : 0, 5,
    me.phone ? "Telefone cadastrado. ✔" : "Sem telefone no perfil. O cliente não vai te caçar — ele liga para quem aparece.");

  // Itens que a API não enxerga → empurram para o GPT (0–10 simbólico)
  add("Posts, descrição e respostas a avaliações", 0, 10,
    `Estes 3 itens só o diagnóstico completo verifica — e é onde a maioria perde pontos. Faça a análise completa no Lupa GMN.`);

  const total = items.reduce((s, i) => s + i.points, 0);
  const max = items.reduce((s, i) => s + i.max, 0);
  return { items, total: Math.round((total / max) * 100) };
}

// ---------- Estimativa de dinheiro perdido ----------
function computeLoss(me, competitors, ticket, capacidade) {
  const all = [...competitors, me].sort((a, b) => visibilityIndex(b) - visibilityIndex(a));
  const myRank = all.findIndex((p) => p === me) + 1;

  const myCtr = CTR_BY_RANK[Math.min(myRank - 1, CTR_BY_RANK.length - 1)];
  const top3Ctr = (CTR_BY_RANK[0] + CTR_BY_RANK[1] + CTR_BY_RANK[2]) / 3;

  const myClients = MONTHLY_SEARCHES_DEFAULT * myCtr * CONVERSION_RATE;
  const top3Clients = Math.min(capacidade, MONTHLY_SEARCHES_DEFAULT * top3Ctr * CONVERSION_RATE);
  const lostClients = Math.max(0, Math.round(top3Clients - myClients));
  const lostMoney = Math.round(lostClients * ticket);

  return { myRank, totalRanked: all.length, lostClients, lostMoney, yearlyLoss: lostMoney * 12 };
}

// ---------- Render ----------
const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function render(report) {
  const { me, competitors, score, loss } = report;
  const scoreColor = score.total >= 70 ? "text-emerald-400" : score.total >= 45 ? "text-amber-400" : "text-red-500";

  $("result").innerHTML = `
    <div class="text-center">
      <h2 class="text-2xl font-bold">${me.name}</h2>
      <p class="text-slate-500 text-sm">${me.address}</p>
      <div class="mt-6 inline-block bg-slate-900 border border-slate-800 rounded-2xl px-10 py-6">
        <p class="text-slate-400 text-sm uppercase tracking-wide">Score Lupa GMN</p>
        <p class="text-6xl font-extrabold ${scoreColor}">${score.total}<span class="text-2xl text-slate-500">/100</span></p>
        <p class="text-slate-400 text-sm mt-1">Você está em <strong class="text-slate-200">${loss.myRank}º lugar</strong> entre ${loss.totalRanked} concorrentes da sua região.</p>
      </div>
    </div>

    <div class="mt-8 bg-red-950/40 border border-red-900 rounded-2xl p-6 text-center">
      <p class="text-red-400 font-semibold uppercase text-xs tracking-widest losing">💸 Estimativa de dinheiro deixado na mesa</p>
      <p class="text-4xl sm:text-5xl font-extrabold text-red-400 mt-2">${fmtBRL(loss.lostMoney)}<span class="text-lg text-red-300">/mês</span></p>
      <p class="text-slate-400 mt-2 text-sm">≈ ${loss.lostClients} clientes/mês indo para o concorrente · ${fmtBRL(loss.yearlyLoss)} por ano</p>
    </div>

    <h3 class="mt-10 font-bold text-lg">⚔️ Quem está comendo o seu almoço</h3>
    <div class="mt-3 overflow-x-auto">
      <table class="w-full text-sm border-separate border-spacing-y-1">
        <thead class="text-slate-500 text-left">
          <tr><th class="px-3">#</th><th class="px-3">Negócio</th><th class="px-3">Nota</th><th class="px-3">Avaliações</th><th class="px-3">Por que está na sua frente</th></tr>
        </thead>
        <tbody>
          ${competitors.map((c, i) => `
            <tr class="bg-slate-900">
              <td class="px-3 py-2 rounded-l-lg text-slate-500">${i + 1}º</td>
              <td class="px-3 py-2 font-semibold">${c.name}</td>
              <td class="px-3 py-2">${c.rating.toFixed(1)}★</td>
              <td class="px-3 py-2">${c.reviews}</td>
              <td class="px-3 py-2 rounded-r-lg text-slate-400">${whyBetter(c, me)}</td>
            </tr>`).join("")}
          <tr class="bg-red-950/50 border border-red-900">
            <td class="px-3 py-2 rounded-l-lg text-red-400 font-bold">${loss.myRank}º</td>
            <td class="px-3 py-2 font-bold text-red-300">${me.name} (você)</td>
            <td class="px-3 py-2">${me.rating.toFixed(1)}★</td>
            <td class="px-3 py-2">${me.reviews}</td>
            <td class="px-3 py-2 rounded-r-lg text-red-400">É aqui que o dinheiro vaza.</td>
          </tr>
        </tbody>
      </table>
    </div>

    ${fomoBlock(me, competitors)}

    <h3 class="mt-10 font-bold text-lg">🩺 Diagnóstico item por item</h3>
    <div class="mt-3 space-y-2">
      ${score.items.map((i) => `
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
          <div class="text-center min-w-[64px]">
            <p class="text-xl font-bold ${i.points >= i.max * 0.7 ? "text-emerald-400" : i.points >= i.max * 0.4 ? "text-amber-400" : "text-red-500"}">${i.points}/${i.max}</p>
          </div>
          <div>
            <p class="font-semibold">${i.label}</p>
            <p class="text-slate-400 text-sm mt-0.5">${i.verdict}</p>
          </div>
        </div>`).join("")}
    </div>

    <div class="mt-10 bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 rounded-2xl p-7 text-center">
      <h3 class="text-2xl font-extrabold">Quer parar de perder ${fmtBRL(loss.lostMoney)} por mês?</h3>
      <p class="mt-2 font-medium">Continue no Lupa GMN: ele recebe este diagnóstico pronto e devolve a análise dos 21 fatores, plano de ação semana a semana e os textos para corrigir cada item.</p>
      <div class="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="${gptDeepLink(me, score, loss)}" target="_blank" rel="noopener" class="bg-slate-950 text-amber-300 font-bold px-6 py-3 rounded-lg">🤖 Continuar diagnóstico no Lupa GMN →</a>
        <button id="btnCopyReport" class="bg-slate-950/20 border border-slate-950 font-bold px-6 py-3 rounded-lg">📋 Copiar resumo</button>
        ${WHATSAPP ? `<a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Fiz o diagnóstico do ${me.name} (score ${score.total}/100) e quero corrigir meu perfil.`)}" target="_blank" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg">💬 Falar com especialista</a>` : ""}
      </div>
      <p class="mt-4 text-xs text-slate-800">Sem promessa de "1º lugar no Google". A promessa é outra: seu perfil deixar de ser o motivo de o cliente escolher o concorrente.</p>
    </div>`;

  $("result").classList.remove("hidden");
  $("result").scrollIntoView({ behavior: "smooth" });

  $("btnCopyReport")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(reportSummary(me, score, loss));
    $("btnCopyReport").textContent = "✅ Copiado! Cole no Lupa GMN";
  });
}

// ---------- Integração com o GPT Lupa GMN ----------
// Resumo do pré-diagnóstico que o GPT recebe para continuar a análise
function reportSummary(me, score, loss) {
  return [
    `Fiz o pré-diagnóstico do meu negócio "${me.name}" na ferramenta Lupa GMN:`,
    `- Score: ${score.total}/100`,
    `- Posição: ${loss.myRank}º entre ${loss.totalRanked} concorrentes da região`,
    `- Perda estimada: ${fmtBRL(loss.lostMoney)}/mês`,
    `- Nota: ${me.rating.toFixed(1)}★ com ${me.reviews} avaliações, ${me.photos} fotos`,
    `- Site: ${me.website ? "sim" : "não"} | Horários: ${me.hours ? "sim" : "não"} | Telefone: ${me.phone ? "sim" : "não"}`,
    `Itens com pior pontuação: ${score.items.filter((i) => i.points < i.max * 0.5).map((i) => i.label).join(", ")}.`,
    `Quero o diagnóstico completo dos 21 fatores e o plano de ação para corrigir meu perfil.`,
  ].join("\n");
}

// Abre o GPT com a mensagem já preenchida na caixa de texto (parâmetro ?q=)
function gptDeepLink(me, score, loss) {
  return `${GPT_URL}?q=${encodeURIComponent(reportSummary(me, score, loss))}`;
}

// Bloco de FOMO: o que os líderes têm que faz o cliente (e o dono) pensar "bah, eu quero isso"
function fomoBlock(me, competitors) {
  const top = competitors.slice(0, 3);
  const real = top.length > 0 && !top.some((c) => c.assumed);
  const best = top[0] || me;
  const rows = [];

  if (!me.website) rows.push({
    icon: "🌐", label: "Site profissional",
    them: real ? `${top.filter((c) => c.website).length} de ${top.length} líderes têm` : "padrão entre os líderes da categoria",
    you: "você não tem",
    desire: "bah, quero um site",
  });
  if (me.photos < 20) rows.push({
    icon: "📸", label: "Vitrine de fotos",
    them: "os líderes exibem dezenas de fotos do espaço, do trabalho, da equipe",
    you: `você tem ${me.photos}`,
    desire: "bah, quero um perfil bonito desses",
  });
  if (best.reviews > me.reviews * 1.4) rows.push({
    icon: "⭐", label: "Prova social",
    them: `${best.name} acumula ${best.reviews} avaliações`,
    you: `você tem ${me.reviews}`,
    desire: "bah, quero essa fila de elogios",
  });
  rows.push({
    icon: "📝", label: "Conteúdo ativo (posts e novidades)",
    them: "líderes publicam toda semana e aparecem sempre \"vivos\" para o Google e para o cliente",
    you: "quando foi seu último post?",
    desire: "bah, quero aparecer assim",
  });

  if (!rows.length) return "";
  return `
    <h3 class="mt-10 font-bold text-lg">😮‍💨 O efeito vitrine — o que eles têm</h3>
    <p class="text-slate-500 text-sm mt-1">O cliente compara os perfis lado a lado antes de escolher. Compare você também:</p>
    <div class="mt-3 grid sm:grid-cols-2 gap-3">
      ${rows.map((r) => `
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <p class="font-semibold">${r.icon} ${r.label}</p>
          <p class="text-sm mt-1"><span class="text-emerald-400">Eles:</span> <span class="text-slate-300">${r.them}</span></p>
          <p class="text-sm"><span class="text-red-400">Você:</span> <span class="text-slate-400">${r.you}</span></p>
          <p class="text-amber-300 italic text-sm mt-2">“${r.desire}.”</p>
        </div>`).join("")}
    </div>`;
}

function whyBetter(c, me) {
  const reasons = [];
  if (c.reviews > me.reviews * 1.5) reasons.push(`${Math.round(c.reviews / Math.max(1, me.reviews))}x mais avaliações`);
  if (c.rating > me.rating) reasons.push(`nota maior (${c.rating.toFixed(1)} vs ${me.rating.toFixed(1)})`);
  if (!c.assumed && c.website && !me.website) reasons.push("tem site, você não");
  if (!c.assumed && c.hours && !me.hours) reasons.push("horários completos");
  return reasons.length ? reasons.join(" · ") : "perfil mais completo e ativo";
}

// ---------- Demo (sem chave de API) ----------
const DEMO = {
  me: { name: "Barbearia do João", rating: 4.2, reviews: 31, photos: 4, website: false, hours: true, phone: true, address: "R. das Acácias, 120 — Campinas/SP" },
  competitors: [
    { name: "Navalha de Ouro Barber Club", rating: 4.9, reviews: 412, photos: 87, website: true, hours: true, phone: true, address: "" },
    { name: "Don Corte Barbearia", rating: 4.8, reviews: 297, photos: 54, website: true, hours: true, phone: true, address: "" },
    { name: "Barber House Premium", rating: 4.7, reviews: 188, photos: 31, website: true, hours: true, phone: true, address: "" },
    { name: "Estilo Macho Barbearia", rating: 4.6, reviews: 95, photos: 22, website: false, hours: true, phone: true, address: "" },
  ],
};

// ---------- Fluxo ----------
async function runDiagnosis(demo = false) {
  const status = $("status");
  const ticket = Number($("ticket").value) || 80;
  const capacidade = Number($("capacidade").value) || 60;

  try {
    let data;
    if (demo) {
      data = DEMO;
    } else {
      const query = $("businessQuery").value.trim();
      if (!query) { status.textContent = "Digite o nome do negócio + cidade."; return; }
      status.textContent = "🔎 Procurando seu negócio no Google…";
      if (!(await loadMaps())) {
        status.textContent = "Sem chave de API configurada — mostrando o diagnóstico de exemplo.";
        data = DEMO;
      } else {
        data = await fetchBusinessAndCompetitors(query);
        status.textContent = "";
      }
    }

    const score = computeScore(data.me, data.competitors);
    const loss = computeLoss(data.me, data.competitors, ticket, capacidade);
    lastReport = { ...data, score, loss };

    if (LEAD_WEBHOOK && !demo) $("leadGate").classList.remove("hidden");
    else render(lastReport);
  } catch (e) {
    status.textContent = "⚠️ " + (e.message || "Erro ao buscar dados. Tente novamente.");
  }
}

// ---------- Modo manual (sem chave de API) ----------
function runManualDiagnosis() {
  const status = $("status");
  const ticket = Number($("ticket").value) || 80;
  const capacidade = Number($("capacidade").value) || 60;

  const me = {
    name: $("mMeName").value.trim() || "Seu negócio",
    rating: Number($("mMeRating").value) || 0,
    reviews: Number($("mMeReviews").value) || 0,
    photos: Number($("mMePhotos").value) || 0,
    website: $("mMeWebsite").checked,
    hours: $("mMeHours").checked,
    phone: $("mMePhone").checked,
    address: "",
  };
  if (!me.rating) { status.textContent = "Preencha pelo menos a sua nota (★)."; return; }

  const rows = [...$("mCompetitors").children];
  const competitors = rows.map((row) => {
    const get = (k) => row.querySelector(`[data-c="${k}"]`).value;
    return {
      name: get("name").trim(), rating: Number(get("rating")) || 0,
      reviews: Number(get("reviews")) || 0,
      // Campos não visíveis na busca: assume o cenário típico dos líderes
      photos: 30, website: true, hours: true, phone: true, address: "", assumed: true,
    };
  }).filter((c) => c.name && c.rating)
    .sort((a, b) => visibilityIndex(b) - visibilityIndex(a));

  if (!competitors.length) { status.textContent = "Preencha pelo menos 1 concorrente (nome + nota)."; return; }

  status.textContent = "";
  const score = computeScore(me, competitors);
  const loss = computeLoss(me, competitors, ticket, capacidade);
  lastReport = { me, competitors, score, loss };

  if (LEAD_WEBHOOK) $("leadGate").classList.remove("hidden");
  else render(lastReport);
}

$("btnDiagnose").addEventListener("click", () => runDiagnosis(false));
$("btnDemo").addEventListener("click", () => runDiagnosis(true));
$("btnManual").addEventListener("click", () => {
  $("manualForm").classList.toggle("hidden");
  $("mMeName").value ||= $("businessQuery").value.replace(/,.*$/, "").trim();
});
$("btnRunManual").addEventListener("click", runManualDiagnosis);
$("btnSaveKey").addEventListener("click", () => {
  localStorage.setItem("gmaps_key", $("apiKey").value.trim());
  $("status").textContent = "Chave salva neste navegador.";
});
$("businessQuery").addEventListener("keydown", (e) => { if (e.key === "Enter") runDiagnosis(false); });

$("btnLead").addEventListener("click", async () => {
  const payload = {
    nome: $("leadName").value, whatsapp: $("leadWhats").value,
    negocio: lastReport?.me?.name, score: lastReport?.score?.total,
    perdaMensal: lastReport?.loss?.lostMoney, data: new Date().toISOString(),
  };
  if (LEAD_WEBHOOK) {
    try { await fetch(LEAD_WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); } catch (_) {}
  }
  $("leadGate").classList.add("hidden");
  render(lastReport);
});
$("btnSkipLead").addEventListener("click", () => { $("leadGate").classList.add("hidden"); render(lastReport); });
