# Bússola Local — Panorama consolidado + plano de simplificação

> Objetivo declarado: tornar o desafio de 7 dias **extremamente fácil e prático**.
> Este documento junta tudo que foi analisado até agora (Notion, site, ebook, apps, GPTs) e vira o roteiro de execução quando você quiser seguir.

---

## 1. O ecossistema real (o que existe hoje)

| Peça | Onde vive | Status da análise |
|---|---|---|
| Hub "Bússola Local \| Google Meu Negócio que vende" | Notion | ✅ lido completo |
| "Mapa de Navegação" / "Mapa de Execução" | Notion | ✅ lido completo |
| 7 dias + Dia 8 (bônus IA/GEO) + Módulo 2 (3 pilares de manutenção) + Checklist semanal | Notion | ✅ lido Dia 1, 3, 7, 8 na íntegra (padrão se repete nos outros) |
| Site de vendas (R$67) | `bussolalocal.lovable.app` | ✅ copy completa (via projeto irmão no Lovable) |
| Remix do site | `bussolalocal1.lovable.app` | ⚠️ existe, não analisado — provável duplicata |
| "GMB Navigator" | `gmb-bussolalocal.lovable.app` | ⚠️ existe, não analisado — nome sugere sobreposição |
| "Bússola & Lupa" (upsell da mentoria) | `lupadigital.lovable.app` | ✅ copy completa — upsell de R$47/mês, exclusivo pra quem já comprou a Bússola |
| GMB Otimizador PRO (app com rotas `/Checklist`, `/GMB7Dias`, `/AnalisarGMB`) | base44.app | ⛔ bloqueado (403 em todas as rotas) — estrutura inferida pelas URLs |
| GMB 7 Dias (app solo) | base44.app | ⛔ bloqueado — provável versão solta/anterior do que já existe dentro do Otimizador PRO |
| Lupa GMN Diagnóstico Score (GPT) | ChatGPT | ⛔ bloqueado — nome sugere ferramenta de diagnóstico/score, gratuita ou de prospecção |
| Lupa Digital GMN — especialista SEO/GEO/AEO (GPT) | ChatGPT | ⛔ bloqueado — citada dentro dos prompts do Notion como alternativa ao ChatGPT cru |
| Ebook "O Poder do Google Meu Negócio" | `anarego.com.br/ebook/poder-google-meu-negocio` (Lovable) | ✅ lido completo |

**Pendente de print** (bloqueados por proteção anti-bot, não é falha passageira): os 2 apps do base44 e os 2 GPTs. Assim que você mandar telas/textos, entro com a análise específica deles.

---

## 2. O achado principal: duplicação dentro de cada dia

Cada dia do Notion tem, nessa ordem: capa → link do app → 6-7 prompts de ChatGPT (15-20 linhas cada) → **Resumo do dia (5 linhas, ótimo)** → **Checklist do dia** → o guia completo de novo, com exemplo e validação → **um checklist final que repete o checklist anterior quase igual**.

Isso contradiz a promessa de venda ("5 a 15 minutos por dia") e o pedido de hoje ("extremamente fácil"). O conteúdo em si é bom — o problema é a embalagem redundante.

**Correção proposta por dia:**
1. Resumo (5 linhas) — fica igual, é o que já funciona.
2. Um checklist único de execução — remove o segundo checklist duplicado.
3. O guia longo + exemplo + prompts viram uma seção recolhível **opcional** ("quer entender o porquê / ver modelo pronto"), não o caminho obrigatório.
4. Um único link de ferramenta por dia (ver seção 4), não a escolha entre app + prompt cru + GPT.

---

## 3. Dois hubs concorrentes no Notion

Hoje existem **duas portas de entrada** pro mesmo conteúdo: a página principal "Bússola Local" e a página "Mapa de Navegação / Mapa de Execução". A segunda é melhor (tem as "3 regras anti-paralisia", seleção por nível, links diretos aos 7 dias, checklist semanal e Dia 8). 

**Proposta:** o Mapa de Execução vira a única porta de entrada. A página principal existe só como capa/link único pra ele.

---

## 4. Apps: provável duplicação a resolver

O **GMB Otimizador PRO** já tem 3 seções internas (`/Checklist`, `/GMB7Dias`, `/AnalisarGMB`) — ou seja, ele já parece ser um app relativamente completo: diagnóstico + protocolo de 7 dias + checklist, tudo num lugar só. O app solo **GMB 7 Dias** provavelmente é uma versão anterior ou solta dessa mesma seção.

Do lado do Lovable, também existem 3 projetos com nomes sobrepostos: `bussolalocal` (principal, 191 edições — o mais maduro), `bussolalocal1` (remix) e `gmb-bussolalocal` / "GMB Navigator". Isso é o mesmo padrão de sprawl.

**Proposta (pendente de confirmação por print):**
- Manter só o **GMB Otimizador PRO** como app de execução; aposentar `gmb7dias.base44.app`.
- Manter só o projeto Lovable `bussolalocal` (o mais editado) como site oficial; arquivar `bussolalocal1` e `gmb-bussolalocal`.

---

## 5. Os 2 GPTs — papel provável de cada um

Os prompts do Notion dizem "cole no ChatGPT **ou na Lupa Digital**" — confirmando que a **Lupa Digital GMN** é a mentora guiada, isso bate com o upsell de R$47/mês descrito no projeto "Bússola & Lupa": mentoria contínua, exclusiva pra quem já comprou a Bússola.

O nome **Lupa GMN Diagnóstico Score** sugere outra função: uma ferramenta de diagnóstico/pontuação, possivelmente **gratuita ou usada como isca** — o que bate com o sistema de prospecção manual (rodar diagnóstico nas 3 IAs, anotar concorrentes) descrito no seu material de saúde. Se for isso, essa GPT pode **automatizar o diagnóstico de prospecção** que hoje você faz na mão, um ganho de eficiência real, não só de organização.

**Preciso confirmar com print/texto das instruções de cada GPT** pra validar essa hipótese antes de recomendar qualquer mudança nela.

---

## 6. O ebook — onde ele entra na esteira de valor

O ebook cobre o mesmo terreno da Bússola (perfil completo, fotos, categorias, descrição, postagens, reputação, métricas), só que em formato estático em vez de guiado. Hoje os dois parecem competir pelo mesmo cliente, sem hierarquia clara.

**Esteira de valor proposta:**

```
Ebook (entrada, mais barato/isca)
   ↓
Bússola Local — R$67 (execução guiada, 7 dias)
   ↓
Lupa Digital — R$47/mês (mentoria contínua, exclusiva pra quem comprou a Bússola)
   ↓
[se aplicável] Consultoria de alto ticket (nicho saúde) — R$747 a R$1.997
```

**Pendente de você:** preço atual do ebook e se ele já entra antes ou depois da Bússola na sua sequência de vendas hoje.

---

## 7. Plano de execução — STATUS

### Já executado direto no Notion (produto ao vivo)

Cortei a duplicação em cada dia: manteve-se **Resumo do dia** + **Checklist do dia (execução)** como caminho obrigatório; o guia longo, os passos repetidos, os exemplos e os "checklist final" duplicados viraram **um único toggle opcional** ("Modelo pronto / Passo a passo detalhado — opcional") no fim de cada dia, preservando templates e exemplos reais reutilizáveis.

| Dia | Status |
|---|---|
| Dia 1 | Já estava enxuto (sem duplicação) — nenhuma mudança necessária |
| Dia 2 (NAPW) | ✅ Corrigido |
| Dia 3 (Descrição) | ✅ Corrigido |
| Dia 4 (Fotos) | ✅ Corrigido |
| Dia 5 (Serviços) | ⏳ Editado, mas a tarefa assíncrona do Notion ficou "running" por vários minutos — confirmar se aplicou antes de seguir |
| Dia 6 (Postagem) | ✅ Corrigido |
| Dia 7 (Avaliações) | ⏳ Editado, mas a tarefa assíncrona do Notion ficou "running" por vários minutos — confirmar se aplicou antes de seguir |
| Dia 8 (bônus IA/GEO) | Já estava enxuto (sem duplicação) — nenhuma mudança necessária |
| Módulo 2 — Pilar 1, 2, 3 (manutenção) | Já bem estruturados (tabela-resumo + detalhe, sem duplicação) — nenhuma mudança necessária |

**Ação pendente:** reabrir o Notion (Dia 5 e Dia 7) e conferir visualmente se o toggle "opcional" está no lugar certo. Se as tarefas travadas não tiverem aplicado, repito a edição.

### Ainda não executado (depende de você)

1. Prints do GMB Otimizador PRO (dashboard + `/GMB7Dias` + `/AnalisarGMB`) e texto de instruções dos 2 GPTs.
2. Confirmar preço/posição do ebook na esteira de venda.
3. Confirmar se pode arquivar os projetos Lovable duplicados (`bussolalocal1`, `gmb-bussolalocal`) e o app solo `gmb7dias`.
4. Ajustar o Mapa de Execução pra virar a única porta de entrada (hoje ainda há 2 hubs).
5. Alinhar os CTAs cruzados da esteira de valor (ebook → Bússola → Lupa Digital).
