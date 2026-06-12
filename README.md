# Lupa GMN — Diagnóstico que mostra quanto dinheiro o negócio está perdendo

App web (HTML + JS puro, sem build) que faz o papel de "porta de entrada" do funil:
o dono do negócio digita o nome da empresa, o app puxa os dados reais do Google,
compara com os concorrentes da região e entrega um diagnóstico desconfortável:
**posição no ranking, score 0–100 e estimativa de R$ perdidos por mês** — com CTA
para o diagnóstico completo no GPT [Lupa GMN](https://chatgpt.com/g/g-695098ab8d888191bd7f69f5fb864dee-lupa-gmn-diagnostico-score).

## Como rodar

1. Abra o `index.html` em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify) ou localmente.
2. **Modo manual (100% grátis, sem chave):** a pessoa abre o Google Maps, copia nota e nº de
   avaliações dos 3 primeiros concorrentes e digita no formulário — o diagnóstico sai igual.
3. **Modo demo:** dados fictícios para validar copy e layout.
4. **Modo automático (opcional):** chave do [Google Cloud Console](https://console.cloud.google.com/)
   com **Places API (New)** + **Maps JavaScript API**. A camada gratuita cobre ~5.000
   diagnósticos/mês, mas exige cadastrar cartão no billing — trave a cota no painel para
   garantir custo zero. Restrinja a chave por domínio (HTTP referrer) e cole no campo
   "⚙️ Configurar chave" da página (fica no `localStorage`).

## Posicionamento da copy

- **FOMO, não promessa:** o bloco "😮‍💨 O efeito vitrine" mostra o que os líderes têm
  (site, fotos, prova social, conteúdo ativo) e provoca o "bah, quero um site / quero um
  perfil desses". Nenhum texto promete "1º lugar no Google" — o CTA diz isso explicitamente.

## Integração com o GPT Lupa GMN

O botão final usa deep link com `?q=`: abre o GPT **com o pré-diagnóstico já preenchido**
na caixa de mensagem (score, posição, perda estimada, itens piores) — a pessoa só aperta
enviar e o GPT continua de onde o app parou. Há também um botão "📋 Copiar resumo" como
alternativa. Nas instruções do GPT, vale adicionar: *"Quando receber uma mensagem iniciada
por 'Fiz o pré-diagnóstico do meu negócio', use esses dados como entrada e vá direto para
a análise completa dos 21 fatores."*

## A estratégia do funil

```
Ferramenta grátis (este app)          →  dor visível + número em R$
        ↓
GPT Lupa GMN (diagnóstico completo)   →  profundidade + plano de ação
        ↓
Lead no WhatsApp / e-mail             →  venda do serviço de otimização GMN
```

**Por que funciona:** o Localo cobra para mostrar isso. Você entrega de graça a parte
que dói (ranking + R$ perdido) e usa o GPT para a parte que demora (análise dos 21
fatores, textos prontos, plano semanal). O custo marginal dos dois é quase zero.

## Divisão de papéis: app × GPT

| | App (este repo) | GPT Lupa GMN |
|---|---|---|
| Dados | Reais, via Places API (nota, avaliações, fotos, site, horários, concorrentes) | O que o usuário cola/descreve |
| Entrega | Score automático + ranking + **R$ perdido/mês** | Análise profunda, posts, respostas a avaliações, plano de ação |
| Função no funil | Choque + captura de lead | Nutrição + demonstração de competência |

**Ponte entre os dois:** o CTA final do app manda para o GPT já com contexto
("score X/100, perdendo R$ Y/mês"). No GPT, configure as *conversation starters*
para receber esse contexto e continuar de onde o app parou.

## Onde editar

- `app.js` topo do arquivo: `GPT_URL`, `WHATSAPP` (ativa o botão de WhatsApp no CTA) e
  `LEAD_WEBHOOK` (ativa o gate de captura de lead antes de mostrar o resultado — aponte
  para um webhook do Make/Zapier/Google Sheets).
- Premissas do cálculo de perda em `app.js`: `CTR_BY_RANK`, `MONTHLY_SEARCHES_DEFAULT`, `CONVERSION_RATE`.
- Copy "que humilha": função `computeScore` (veredito de cada item) e `whyBetter` (coluna
  "por que está na sua frente").

## Itens gratuitos do funil (seção "Ferramentas gratuitas")

1. **Diagnóstico + score** (este app) — a isca principal.
2. **Gerador de resposta a avaliações** — hoje aponta para o GPT; pode virar um GPT separado.
3. **30 ideias de posts GMN** — idem.
4. **Checklist GMN com os 21 fatores** — PDF para troca por e-mail/WhatsApp.

## Roadmap sugerido (v2)

- [ ] Backend leve (Cloudflare Worker/Vercel Function) para esconder a chave da API e somar
      dados que o front não alcança (respostas do dono a avaliações, posts, recência).
- [ ] Geração do laudo em texto via API de LLM no servidor (o mesmo prompt do GPT),
      entregue como PDF personalizado por e-mail → captura de lead obrigatória.
- [ ] Monitoramento mensal automático ("seu concorrente passou você esta semana") por
      e-mail/WhatsApp — é a feature paga do Localo e o gancho natural de recorrência.
- [ ] Página de resultado compartilhável (`?negocio=...`) para viralização.
