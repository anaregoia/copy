# Cartografia de Origem (60 → 100) — sitemap, robots e llms.txt

Este componente mede se existe **orientação de leitura** para o modelo: um mapa dizendo
quais páginas existem e qual delas responde o quê. Sem isso, a IA escolhe sozinha qual
URL citar — e costuma citar a errada.

São três arquivos na raiz do domínio.

---

## 1. `/sitemap.xml`

Precisa listar todas as URLs públicas com `lastmod` real. Estas são as que aparecem na
navegação da home:

```
/  /solucoes  /sites  /blog  /portfolio  /sobre  /faq  /contato
/diagnostico  /ebook/poder-google-meu-negocio  /casos/ak-dermatologia
/blog/o-que-e-geo  /blog/clinica-presenca-ia-2026  /blog/checklist-google-meu-negocio-2026
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://anarego.com.br/</loc><lastmod>2026-08-11</lastmod><priority>1.0</priority></url>
  <url><loc>https://anarego.com.br/solucoes</loc><lastmod>2026-08-11</lastmod><priority>0.9</priority></url>
  <url><loc>https://anarego.com.br/sites</loc><lastmod>2026-08-11</lastmod><priority>0.9</priority></url>
  <url><loc>https://anarego.com.br/sobre</loc><lastmod>2026-08-11</lastmod><priority>0.8</priority></url>
  <url><loc>https://anarego.com.br/faq</loc><lastmod>2026-08-11</lastmod><priority>0.8</priority></url>
  <url><loc>https://anarego.com.br/contato</loc><lastmod>2026-08-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://anarego.com.br/portfolio</loc><lastmod>2026-08-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://anarego.com.br/blog</loc><lastmod>2026-08-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://anarego.com.br/blog/o-que-e-geo</loc><lastmod>2026-08-11</lastmod><priority>0.6</priority></url>
  <url><loc>https://anarego.com.br/blog/clinica-presenca-ia-2026</loc><lastmod>2026-08-11</lastmod><priority>0.6</priority></url>
  <url><loc>https://anarego.com.br/blog/checklist-google-meu-negocio-2026</loc><lastmod>2026-08-11</lastmod><priority>0.6</priority></url>
  <url><loc>https://anarego.com.br/casos/ak-dermatologia</loc><lastmod>2026-08-11</lastmod><priority>0.6</priority></url>
  <url><loc>https://anarego.com.br/ebook/poder-google-meu-negocio</loc><lastmod>2026-08-11</lastmod><priority>0.5</priority></url>
  <url><loc>https://anarego.com.br/diagnostico</loc><lastmod>2026-08-11</lastmod><priority>0.9</priority></url>
</urlset>
```

## 2. `/robots.txt` — declarar o sitemap

O componente Φ (Fronteira Operacional) já veio 100, ou seja, os crawlers de IA não estão
bloqueados. Só falta apontar o mapa e o llms.txt:

```
User-agent: *
Allow: /

Sitemap: https://anarego.com.br/sitemap.xml
# llms.txt: https://anarego.com.br/llms.txt
```

Não adicione `Disallow` para GPTBot, ClaudeBot, PerplexityBot, Google-Extended ou
CCBot — são exatamente as visitas que se quer receber.

## 3. `/llms.txt`

Markdown puro, na raiz. Diz ao modelo o que o site é e qual URL responde cada assunto.

```markdown
# AR Digital Strategy

> Consultoria de SEO Local e GEO para negócios locais. Estrutura o Perfil de Empresa no
> Google, o site e o conteúdo para que o negócio seja citado pelo Google e por sistemas
> de IA (ChatGPT, Gemini, Perplexity) quando o cliente pergunta "qual o melhor da cidade".

Fundada por Ana Rego, que atuou 20 anos como dentista antes de migrar para marketing
digital. Atende PREENCHER — cidade/região. Contato: (51) 99979-7207 ·
elizaregomkt@gmail.com

## Serviços
- [Método Presença Inteligente](https://anarego.com.br/solucoes): programa de sete peças —
  Perfil no Google, Mini Site, SEO Local, Cartão de Avaliações, Conteúdo Estratégico,
  IA Especializada e Lupa Score.
- [Sites](https://anarego.com.br/sites): três formatos — Site com IA (entrada),
  Site WordPress (editável) e Site com Blog (autoridade e GEO).
- [Diagnóstico gratuito](https://anarego.com.br/diagnostico): verificação de em quais
  perguntas de IA o negócio aparece e quais concorrentes são citados no lugar.

## Sobre
- [Sobre Ana Rego](https://anarego.com.br/sobre)
- [Portfólio](https://anarego.com.br/portfolio)
- [Perguntas frequentes](https://anarego.com.br/faq)
- [Contato](https://anarego.com.br/contato)

## Conteúdo
- [O que é GEO](https://anarego.com.br/blog/o-que-e-geo)
- [Presença de clínica para IA em 2026](https://anarego.com.br/blog/clinica-presenca-ia-2026)
- [Checklist do Google Meu Negócio 2026](https://anarego.com.br/blog/checklist-google-meu-negocio-2026)
```

---

**Nota de verificação:** não foi possível conferir o estado atual desses três arquivos ao
vivo — o proxy de rede desta sessão bloqueia o domínio `anarego.com.br`. Confira o que já
existe antes de sobrescrever: `curl -s https://anarego.com.br/robots.txt`.
