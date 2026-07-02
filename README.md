# Site AR Digital — SEO Local & GEO para profissionais de saúde

Site estático completo da AR Digital (anarego.com.br), pronto pra publicar. Sem build, sem dependências: é só servir os arquivos.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Home (hero, dor, por que a AR, como funciona, provas, escassez, planos, garantia, sobre, FAQ, formulário de diagnóstico) |
| `diagnostico/` | Página de captura do diagnóstico grátis |
| `planos/` | Planos e preços (implementação única + trimestral + semestral) |
| `sobre/` | Sobre a Ana + FAQ (com Schema FAQPage) |
| `blog/` | Listagem do blog + 10 posts otimizados pra AEO (Schema Article + FAQPage em cada um) |
| `ferramentas/template-diagnostico.html` | Template editável do diagnóstico de prospecção (uso interno — exporta PDF pelo botão; bloqueado no robots.txt) |
| `robots.txt` | Libera GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, Google-Extended e Bingbot |
| `sitemap.xml` | Todas as páginas públicas |

## Como visualizar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Depois de publicar (checklist AEO)

1. Entrar em bing.com/webmasters, adicionar o domínio, verificar a propriedade e enviar o `sitemap.xml` (o ChatGPT usa o índice do Bing).
2. Ativar o IndexNow pra indexar posts novos em minutos.
3. Publicar 2 a 3 posts novos por semana — a IA prefere conteúdo recente, site parado some.
4. Conferir o link do WhatsApp (wa.me/5551999797207) e os dados de contato.
