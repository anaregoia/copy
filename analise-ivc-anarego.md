# Auditoria da análise "Índice de Visibilidade Cognitiva" — anarego.com.br

Ferramenta: `ivc.koibee.tech` · Nota recebida: **81/100** · Data do snapshot: 11/08/2026

Verificação feita contra o HTML real do site, capturado dentro do próprio snapshot MHTML
(parte 5 do arquivo, `https://anarego.com.br/`, 57.618 bytes).

---

## 1. A nota faz sentido? Sim — e dá pra provar de onde ela vem

A ferramenta mostra os cinco componentes com peso. Fazendo a conta:

| Componente | Peso | Nota | Contribuição |
|---|---|---|---|
| Λ Latência Cognitiva | 35 | 100 | 35,0 |
| Φ Fronteira Operacional | 25 | 100 | 25,0 |
| Ψ Cartografia de Origem | 10 | 60 | 6,0 |
| Δ Densidade Declarativa | 15 | 0 | 0,0 |
| Σ Coerência de Sinal | 15 | 100 | 15,0 |
| **Total** | | | **81,0** |

Bate exatamente com os 81 exibidos. Não é número aleatório nem chute: é média ponderada
de cinco checagens objetivas. **O diagnóstico é honesto na mecânica.**

## 2. Onde a apresentação exagera

Três pontos de alarme na tela não se sustentam nos próprios dados da ferramenta:

**"Atenção: sua página tem dados importantes invisíveis para IA."**
Não é o caso. A ferramenta declara "5.999 caracteres recebidos". O texto visível real da
home, extraído do HTML, tem **6.094 caracteres**. Ou seja: a IA recebeu praticamente 100%
do conteúdo. Nada está sendo escondido por JavaScript — a página é pré-renderizada e os
dois componentes de maior peso (Λ e Φ, 60% da nota) vieram 100.

**"15 pontos de diferença" entre o que uma pessoa vê e o que a IA vê.**
Isso é simplesmente `100 − 81`. Não mede diferença de conteúdo entre as duas colunas.

**"Nada do que sua página promete existe como fato para a máquina" (Δ = 0, CRÍTICO).**
A frase é dramática, mas o fato por trás é verdadeiro e é o achado que vale: o site não
tem **nenhum** bloco de dados estruturados.

E o contexto importa: a página do teste termina em "quero o plano de correção". É um
diagnóstico real embalado como isca de captação. O laudo serve; a urgência, não.

## 3. Os dois problemas reais confirmados no HTML

### 3.1 Densidade Declarativa = 0 → zero Schema.org (prioridade máxima)

Busca por `application/ld+json` no HTML da home: **0 ocorrências**.

Não existe `Organization`, `LocalBusiness`/`ProfessionalService`, `Person`, `Service`,
`Offer`, `FAQPage`, `Article` nem `BreadcrumbList`. Toda a oferta — o que faz, para quem,
por quanto, em qual prazo — está só em prosa. Um modelo consegue ler, mas precisa
interpretar; e interpretação é onde o preço, o formato e a promessa se perdem.

Impacto na nota: recuperar esse componente sozinho vale **+15 pontos** (0 → 100).

### 3.2 Cartografia de Origem = 60 → falta orientação de leitura

Não consegui checar `robots.txt`, `sitemap.xml` e `llms.txt` ao vivo (o proxy de rede
desta sessão bloqueia o domínio), então este item fica como hipótese forte, não como fato
verificado. A nota 60 com Φ (robots) em 100 aponta para sitemap ausente/não declarado no
robots.txt e ausência de `llms.txt`.

Impacto na nota: **+4 pontos** (60 → 100).

Corrigindo 3.1 e 3.2: **81 → 100**.

## 4. O que a ferramenta NÃO viu — e pesa mais que a nota

Estes achados saíram da leitura do HTML, não do laudo. Para uma consultoria que vende
SEO Local e GEO, são os mais caros.

### 4.1 Sobras do Lovable na identidade da marca

```html
<meta name="author" content="Lovable">
<meta name="twitter:site" content="@Lovable">
<meta name="twitter:title" content="AR Digital Strategy">
<meta name="twitter:description" content="A AR Local SEO é uma agência de marketing digital
      especializada em serviços de SEO local para aumentar a visibilidade dos negócios.">
<meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/...">
```

Quatro problemas de uma vez:
- autoria da página atribuída a outra empresa;
- conta de Twitter/X da marca apontando para `@Lovable`;
- `twitter:description` com posicionamento antigo ("AR Local SEO é uma agência") que
  **contradiz** o `og:description` atual ("A consultoria de SEO Local e GEO que faz o
  ChatGPT... citarem o seu negócio"). Dois nomes e duas descrições diferentes para a mesma
  URL é ruído de entidade — exatamente o que Σ Coerência de Sinal deveria pegar e não pegou;
- imagem de compartilhamento hospedada em `gpt-engineer-file-uploads`, fora do domínio.

### 4.2 O site nunca diz onde o negócio fica nem quem ele atende

Busca no texto da home: nenhuma cidade, estado, endereço, área de atendimento ou horário
referente à AR Digital. As únicas localidades citadas são de **clientes** (Cataguases,
Porto Alegre). O telefone (51) 99979-7207 aparece solto, sem `tel:` semântico e sem NAP.

Consequência direta: quando alguém pergunta a uma IA "melhor consultoria de SEO local em
[cidade]", não existe geografia para ancorar o nome. A empresa que vende presença local
não declarou a própria presença local.

### 4.3 Placeholders publicados em produção

- Rodapé: `AR Digital Strategy · Razão social a definir · CNPJ a definir · © 2026`
- Seção de resultados: **6 ocorrências** de "a definir" — "resultado em vendas: a definir",
  "Novo case — em breve", "a definir resultado" ×3.

Um humano entende que é rascunho. Um modelo lê como fato e pode reproduzir "resultado a
definir" ao resumir a empresa. É o pior tipo de conteúdo: ocupa espaço e enfraquece prova.

### 4.4 Oferta sem números declarados

Zero ocorrências de "R$" na página. Os três planos de site (Entrada / WordPress / Blog)
não têm preço, faixa de preço, prazo de entrega ou escopo em formato de fato. É a causa
raiz do Δ = 0 — não basta adicionar JSON-LD vazio, é preciso ter o que declarar.

### 4.5 H1 concatenado pelo rotador de palavras

O H1 renderizado sai como:

> "Seu cliente perguntou pra IAChatGPTGeminiPerplexity qual o melhor da cidade. Seu nome
> não estava na resposta."

Sem espaço entre "IA", "ChatGPT", "Gemini" e "Perplexity" — o widget de palavras rotativas
gruda os termos no texto extraído. Além disso, o H1 é uma provocação de copy, não uma
identificação: não diz o que a empresa é nem onde atua. O H1 é o rótulo mais forte que
uma máquina usa para classificar a página.

---

## 5. Ordem de correção

| # | Correção | Esforço | Ganho |
|---|---|---|---|
| 1 | Limpar metas do Lovable (author, twitter:site, twitter:description, og:image própria) | 10 min | Coerência de entidade |
| 2 | Remover os 6 "a definir" e o "Razão social/CNPJ a definir" (ou preencher) | 15 min | Credibilidade + prova |
| 3 | Definir cidade-sede e áreas atendidas no texto e no rodapé | 30 min | Base do SEO Local |
| 4 | Publicar JSON-LD (ver `correcoes/schema-jsonld.html`) | 1-2 h | **+15 na nota** |
| 5 | `sitemap.xml` + referência no `robots.txt` + `llms.txt` | 30 min | **+4 na nota** |
| 6 | Preço/faixa e prazo dos 3 planos, no texto e como `Offer` | depende | Sustenta o Δ = 100 |
| 7 | Corrigir espaçamento do rotador no H1 e acrescentar identificação | 20 min | Classificação da página |

Itens 1, 2, 3 e 5 são mecânicos. O 4 depende do 3 e do 6 — schema com campo vazio ou
inventado é pior que schema nenhum.
