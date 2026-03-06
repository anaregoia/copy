# SKILL: Análise e Spy de Copy Concorrente
> Baseado na metodologia Clayton Makepeace

---

## PROMPT 1 — Ativar Modo Analista de Copy

```
Olá claude, a partir de agora você é um copywriter profissional especializado na escrita de campanhas de marketing de resposta direta. O seu objetivo principal é melhorar a conversão de um texto analisando informações das copies de concorrentes.

Neste exercício eu quero que você processe os dados de uma copy para prompts futuros, é importante que você faça uma análise linha por linha usando todas as teorias que você aprendeu com clayton makepeace.

Processe essas informações e me diga se você está pronto para receber o texto.
```

---

## PROMPT 1.2 — Extrair Dores, Desejos e Gatilhos

> Use após enviar o texto da copy (cole ou suba o arquivo)

```
Aqui está o texto, claude.

Agora quero que você liste detalhadamente, em ordem de importância no texto, as dores, desejos, medos, objeções, crenças, sonhos, soluções usadas e provas que ele usou para tornar essa copy mais persuasiva.

Não esqueça de listar todos eles em detalhes, usando a teoria de clayton makepeace.
```

**O que será extraído:**
- Dores (em ordem de importância)
- Desejos
- Medos
- Objeções
- Crenças
- Sonhos
- Soluções usadas
- Provas de persuasão

---

## PROMPT 2 — Extrair Estrutura Invisível da Copy

> Analisa a arquitetura completa da VSL/copy

```
Agora preciso que você analise esse texto dentro do padrão abaixo:

**Ângulo da Lead:**
- Qual é o ângulo da lead (tema principal em que começa)
- Em uma frase: por que esse ângulo é bom para abrir uma VSL

**Estrutura da Lead:**
- Defina a estrutura em blocos (Promessa, Segmentação, Provas sociais, Dores, etc.)

**Hook/Apelido Curioso:**
- Copie o hook ou apelido usado na lead (com exemplos do texto)
- Se for quebra de padrão, mostre a quebra ou link
- Em uma frase: por que esse hook funciona

**Promessa Principal:**
- Qual é a promessa central da copy

**Resumo da História:**
- Resumo da história usada
- Qual é o fundo do poço da história
- As 3 dores que mais se repetem no texto
- Os 3 benefícios/desejos que mais se repetem no texto

**Mecanismo Problema:**
- O que impede o avatar de resolver o problema sozinho

**Mecanismo Solução:**
- Como o produto resolve esse problema
- O que é mais surpreendente no mecanismo (com exemplos do texto)

**Objeções:**
- As 5 maiores objeções que o público teria ao ler
- Como cada uma foi quebrada (ou como quebrar)

**A Oferta:**
- O que é o produto principal
- Todos os bônus (listados)
- Preço
- Garantia

**Ancoragens Emocionais:**
- Liste todas as ancoragens usadas antes de revelar o preço (com frases da própria copy)

**Elementos de Prova:**
- Liste todos os elementos de prova usados na copy
```

---

## COMO USAR

### Fluxo completo de spy:

1. Rode o **Prompt 1** para ativar o modo analista
2. Cole ou suba o texto da copy concorrente
3. Rode o **Prompt 1.2** para extrair dores, desejos e gatilhos
4. Rode o **Prompt 2** para mapear a estrutura invisível completa
5. Salve a análise em `analises/[nome-do-concorrente].md`

### Comando rápido:
`/spy-copy [cole a copy aqui]` — roda o fluxo completo automaticamente

---

## REFERÊNCIA TEÓRICA

Metodologia baseada em **Clayton Makepeace** — um dos maiores copywriters de resposta direta da história.

Elementos centrais da teoria:
- Copy deve falar com a emoção dominante do avatar
- Cada linha deve ter um único trabalho: fazer ler a próxima
- O mecanismo exclusivo é o coração da conversão
- Prova é o que converte céticos em compradores
