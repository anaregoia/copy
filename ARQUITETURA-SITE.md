# Arquitetura do novo site AR Digital

Proposta de reorganização completa de anarego.com.br. Documento de aprovação, anterior à construção.

Data: 29 de julho de 2026. Versão 2, com as correções da Ana.

---

## 0. A correção que reorganizou este documento

A versão 1 tratava o rascunho como referência visual e o site atual como fonte de conteúdo. É o inverso.

**A relação correta é esta:**

| O que entra | De onde vem |
| :---- | :---- |
| Estrutura, blocos e copy da Home | `ar-digital-saude-rascunho` |
| Página de blog | `ar-digital-saude-rascunho` |
| Identidade visual: cores, tipografia, fotos, logo | `anarego.com.br` |

O rascunho entra **como Home**, bloco a bloco. O site atual entra **como pele**. Nada de tema claro azul: o site continua preto com verde neon.

---

## 1. Decisões que orientam esta proposta

**Plataforma.** Institucional no Lovable, blog no WordPress. O site atual já roda em Lovable (projeto `www-anarego-com-br`), com TanStack Router, sitemap, `llms.txt` e formulário de leads ligado ao Supabase. Nada disso precisa ser refeito. O blog ganha WordPress próprio em `blog.anarego.com.br`, usando como modelo de layout a página de blog do rascunho.

**Home.** É a Home do rascunho, na ordem dela, com os ajustes da seção 4. Não é uma Home nova.

**Identidade visual.** É a do anarego.com.br. Fundo quase preto, verde neon como primária, títulos em Sora, corpo em Inter, foto da Ana e logo atuais. Os tokens já existem em `src/styles.css` e não mudam.

**Produto de entrada.** Sites. A maioria das empresas prospectadas ainda não tem site profissional, então essa é a porta de entrada. O Método Presença Inteligente vem em seguida, como o passo completo.

**Sem preços no site.** O bloco "Dois caminhos. Você escolhe.", com R$ 1.997, R$ 747 e R$ 897, sai da Home. O **formato** dos três cartões é reaproveitado na apresentação final dos serviços, sem valores. O preço vai na proposta, depois do briefing.

**O que sai do site.**

| Página atual | Destino |
| :---- | :---- |
| `/catalogo` | Removida. Substituída por Nossas Soluções e Sites. |
| `/servicos/[9 páginas]` | Removidas. Os serviços viram componentes do Método. |
| `/bussola-local` | Removida de dentro do site. |
| Serviços soltos na Home | Removidos. Passam a viver dentro das páginas certas. |
| Bloco de planos e preços do rascunho | Sai. Só o formato dos cartões sobrevive. |

**O que fica fora do menu.**

| Página | Por quê |
| :---- | :---- |
| `/ebook/poder-google-meu-negocio` | Isca de captação. Vive de link direto no Instagram, WhatsApp e anúncio. |
| `/diagnostico` e `/diagnostico/obrigado` | Confirmado: fica no ar. É o formulário que alimenta a base de leads. Landing de campanha, fora da navegação. |

Nenhuma página nova além das oito do menu.

---

## 2. Mapa do site

```
/                       Home
/solucoes               Nossas Soluções (Método Presença Inteligente)
/sites                  Sites
blog.anarego.com.br     Blog (WordPress, layout do rascunho)
/portfolio              Portfólio
/sobre                  Sobre Mim
/faq                    FAQ
/contato                Contato

Fora do menu
/ebook/poder-google-meu-negocio
/diagnostico
/diagnostico/obrigado
```

### Menu principal

Início · Nossas Soluções · Sites · Blog · Portfólio · Sobre Mim · FAQ · Contato

Botão fixo à direita: **Solicitar proposta**, para `/contato`.

No celular, menu sanduíche com os oito itens e o botão de proposta no fim.

O menu atual tem Início, Sobre, Catálogo, Bússola Local, Ebook e Instagram. Catálogo, Bússola Local, Ebook e Instagram saem da barra. Instagram e LinkedIn vão para o rodapé.

### Rodapé

Três colunas e uma linha final.

- Coluna 1: logo, a frase "Presença local que faz seu negócio ser encontrado, escolhido e confiado no Google" e o WhatsApp.
- Coluna 2: navegação repetida (as oito páginas).
- Coluna 3: Instagram @ardigitalstrategy, Instagram @ancorrearego, LinkedIn e **elizaregomkt@gmail.com**.
- Linha final: razão social, CNPJ e o ano.

### Botão flutuante

WhatsApp fixo no canto inferior direito, em todas as páginas. Já existe no site atual.

### Regra de CTA

Cada página termina com um destino só.

| Página | CTA final |
| :---- | :---- |
| Home | Solicitar proposta |
| Nossas Soluções | Solicitar proposta |
| Sites | Quero meu site |
| Portfólio | Solicitar proposta |
| Sobre Mim | Falar comigo no WhatsApp |
| FAQ | Solicitar proposta |
| Blog | Assinar ou falar no WhatsApp |

---

## 3. Como unir os dois projetos

| Vem do rascunho | Vem do anarego.com.br |
| :---- | :---- |
| A Home inteira, bloco a bloco | Fundo `oklch(0.16 0.02 150)`, quase preto |
| A página de blog e o formato dos cartões | Verde neon `oklch(0.86 0.18 145)` como primária |
| O H1 do hero e a palavra rotativa | Títulos em **Sora**, corpo em **Inter** |
| A sequência das seções | Foto da Ana e logo atuais |
| Os três passos do "Como funciona" | Gradiente radial do hero, `grid-bg`, `shadow-neon` |
| Os três cases documentados | Raio de 0.75rem |
| O formato dos três cartões de plano | Formulário de leads e Supabase |
| A estrutura de FAQ em acordeão | Sitemap, robots e `llms.txt` |

### A consequência visual que precisa de atenção

O rascunho é uma página clara com **faixas escuras** para dar contraste: `DarkPainBanner`, `FinalCta` e o bloco de captação do blog usam `bg-ink`. Num site que já é escuro, essas faixas somem: escuro sobre escuro não contrasta.

Na conversão, elas viram o oposto: **painéis elevados com borda neon**, usando `--surface-elevated` e `shadow-neon`, que é o recurso de destaque que o site atual já tem. O efeito de "parada de respiro" se mantém, invertendo o meio.

### Dois ajustes de conteúdo antes de publicar

1. Os cases de Salão de Beleza e Loja de iPhone saem. Os números não têm comprovação. Ficam os três cases documentados.
2. A faixa de logos está com seis caixas escritas "Cliente 1", "Cliente 2". Substituir pelos nomes reais.

---

## 4. HOME

A Home do rascunho, na ordem dela. Abaixo, bloco a bloco, o que fica, o que muda e o que sai.

### 4.1 Hero — **fica, H1 mantido**

Selo: Presença local · SEO Local & IA

H1, mantido conforme sua instrução:

> Seu paciente perguntou pra **[IA · ChatGPT · Gemini · Perplexity]** qual o melhor da cidade. Seu nome não estava na resposta.

A palavra rotativa continua funcionando como está.

Subheadline do rascunho, mantida.

Botões: **Descobrir se a IA indica meu negócio** para `/diagnostico`, e **Ver como funciona** para a âncora.

Linha de apoio: "Leva 2 minutos. Sem cartão."

> **Uma palavra para você decidir.** O H1 diz "paciente". O site novo fala com negócio local em geral — clínica, escritório, salão, loja, pousada — com saúde como nicho prioritário. Trocar "paciente" por "cliente" mantém o H1 inteiro e abre para todos. É a única palavra em questão, e a decisão é sua.

### 4.2 "Ser o melhor parou de ser suficiente" — **fica**

O bloco de dor do rascunho, com o texto do ChatGPT citando três nomes. Vira painel elevado com borda neon, pelo motivo da seção 3.

### 4.3 Sobre + as 5 IAs — **mesclado, conforme sua instrução**

Um bloco só, no lugar dos dois. Selo: Por que a AR.

Título mantido do rascunho:

> Eu fui dentista por 20 anos. Eu sei como o cliente escolhe.

Texto de autoridade do rascunho, seguido dos três cartões que já existem: Foco em resultado, Especialista em SEO Local, Pioneira em GEO.

E, no mesmo bloco, a fileira das **5 IAs** onde o negócio precisa aparecer, com os logos em linha — que é o que dá lastro concreto à autoridade e ao que os planos prometem monitorar.

> **Preciso que você nomeie as cinco.** O rascunho se contradiz: a página de diagnóstico fala em "três principais IAs (ChatGPT, Gemini, Perplexity)", enquanto os planos e o FAQ falam em "5 IAs mais usadas no Brasil". São textos do mesmo site brigando entre si. Para o bloco mesclado, me diga quais são as cinco e eu fecho a inconsistência em todas as páginas de uma vez.

### 4.4 Sites, prévia — **entra, novo bloco**

Vem antes do Método, porque é o produto de entrada.

Título: **Seu negócio ainda não tem casa própria na internet.**

Texto: Perfil no Google sem site é meio caminho. O site é onde o cliente confirma que você existe, entende o que você faz e decide falar com você.

Três cartões, no formato herdado dos cartões de plano, sem preço:

| Cartão | Uma linha |
| :---- | :---- |
| Site com IA | Rápido, enxuto, feito para converter no WhatsApp e para a IA entender seu negócio. |
| Site WordPress | Site que você mesmo administra depois, com estrutura preparada para crescer. |
| Site com Blog | Todos os serviços em páginas próprias e conteúdo que responde o que seu cliente pergunta. |

Botão: **Ver as três opções de site**, para `/sites`.

### 4.5 Método Presença Inteligente, prévia — **entra, novo bloco**

Título: **Site sozinho não coloca você no mapa.**

Texto: O Método organiza a presença inteira: o Perfil da Empresa no Google, o site, o SEO local, as avaliações, o conteúdo e a camada de IA. Tudo em ordem, porque ordem é o que a maioria erra.

Fileira com os sete componentes em ícone e nome: Perfil no Google · Mini Site · SEO Local · Cartão de Avaliações · Conteúdo Estratégico · IA Especializada · Lupa Score

Botão: **Conhecer o Método completo**, para `/solucoes`.

### 4.6 Como funciona — **fica**

Os três passos do rascunho, sem alteração de texto:

1. Você vê onde aparece e onde fica de fora.
2. A gente arruma seu Google, seu site e sua presença.
3. Você acompanha seu nome subir nas indicações.

### 4.7 Resultados — **fica**

Os três cartões do rascunho, que são exatamente os três cases documentados:

| Cartão | Números |
| :---- | :---- |
| SEO Local · Clínica Odontológica | +218% ligações via Google · +147% rotas no Maps · Top 3 no pack local |
| Perfil otimizado · 30 dias | +292% visualizações (1.240 → 4.870) · +291% ligações (12 → 47) · score 47 → 98 |
| Clínica de estética · SP | 14 dias da página 2 para a 1ª do Maps · +195% avaliações (23 → 68) · +250% cliques (89 → 312) |

Linha pequena no rodapé da seção: Resultados de casos reais. O desempenho depende do segmento, da concorrência local e da consistência na execução.

### 4.8 Escassez e Garantia — **precisam da sua decisão**

O rascunho tem dois blocos que existem para sustentar a venda de um plano com preço na página: "Um profissional por especialidade em cada cidade" e "Se a IA não passar a te indicar, você não paga", com devolução em 7 e 90 dias.

Sem preço na página, os dois ficam sem âncora. A garantia, em especial, promete devolução de valores que o site não mostra mais, e cita "planos de acompanhamento" que saíram.

Três caminhos: os dois saem; a escassez fica e a garantia vai para a proposta; ou os dois ficam com texto reescrito para um site sem preço. **Minha sugestão: escassez fica, garantia vai para a proposta comercial.** Ela é um argumento de fechamento, não de vitrine.

### 4.9 Portfólio, prévia — **entra, novo bloco**

Três projetos em cartão, com imagem e uma linha de resultado. Botão **Ver portfólio** para `/portfolio`.

### 4.10 Blog, prévia — **entra, novo bloco**

Três artigos mais recentes puxados do WordPress: imagem, categoria, título e data. Botão **Ver todos os artigos**.

### 4.11 Planos e preços — **SAI**

O bloco "Dois caminhos. Você escolhe." sai da Home inteiro, com os três valores.

O que sobrevive é o **formato**: cartão com selo de categoria, título, lista de bullets com marcador neon, cartão do meio destacado com borda e selo "Mais escolhido", botão no rodapé de cada cartão. Esse formato é reaproveitado em:

- os três tipos de site, na página Sites;
- os três níveis do Método, na página Nossas Soluções;
- a prévia de Sites na Home (4.4).

Em todos, o lugar do preço fica com o **público-alvo**. O cartão passa a responder "isso é para mim?" em vez de "quanto custa?".

### 4.12 CTA final — **fica**

> A IA vai indicar alguém. Que seja você.

Texto do rascunho, mantido. Botões: **Solicitar proposta** e **Falar no WhatsApp**, no lugar de "Ver planos" e "Diagnóstico grátis".

---

## 5. NOSSAS SOLUÇÕES

Página comercial principal. Slug `/solucoes`. Título da aba: Método Presença Inteligente, presença local completa para o Google e para as IAs.

### 5.1 Hero

Selo: Método Presença Inteligente

Headline: **Sua empresa pronta para a nova era da busca local.**

Subheadline: Não basta ter perfil no Google. É preciso ser encontrado, compreendido e recomendado. O Método organiza a sua presença inteira, em ordem, com prazo e entregáveis definidos.

Botão: **Solicitar proposta**.

### 5.2 O problema

Título: **A busca mudou de lugar.**

| Antes | Hoje |
| :---- | :---- |
| Ranquear mais alto | Ser a resposta |
| Conseguir cliques | Receber recomendação |
| Talvez converter | Ganhar a venda |

> O cliente abre o Google antes de ligar. Só que agora ele também pergunta pro ChatGPT e pro Gemini qual o melhor da região. As duas respostas vêm de lugares que você pode organizar.

Quatro cartões, sem jargão:

- **Google.** O buscador ainda decide quem aparece no mapa e no 3-Pack.
- **SEO.** Organizar seu negócio para o buscador entender o que você faz e onde atende.
- **AEO.** Estruturar seu conteúdo para responder direto a pergunta que o cliente digita.
- **GEO.** Preparar as informações para que as IAs generativas citem e recomendem seu negócio.

Fecho: **Perfil parado hoje é invisibilidade crescente amanhã.**

### 5.3 O Método

Título: **Ordem é o que a maioria erra.**

> Criar o perfil é 5% do caminho. A maioria para aí e se pergunta por que não aparece. O Método Presença Inteligente é a ordem certa de execução: o que fazer, quando fazer e por quê.

> O resultado não depende de você virar especialista em marketing. Depende do sistema estar montado.

### 5.4 Bússola Local: os componentes

Título: **O que compõe a Bússola Local**

| Componente | Descrição |
| :---- | :---- |
| Perfil da Empresa no Google estruturado | Categorias, serviços, produtos, horários, atributos, fotos e vídeos com geolocalização. Tudo preenchido com palavra-chave local. |
| Mini Site | Site profissional, rápido, focado em conversão via WhatsApp, ligado ao seu perfil do Google. |
| SEO Local | Pesquisa de palavras-chave da sua região e otimização aplicada no perfil e no site. |
| Cartão de Avaliações | Cartão com QR Code que leva direto à sua página de avaliação, com script de solicitação e orientação de resposta. |
| Conteúdo Estratégico | Posts iniciais no Perfil do Google, com fotos e vídeos, que dão sinal de atividade e mostram cada serviço. |
| IA Especializada | Assistente treinado com o seu negócio, que gera posts, responde avaliações e cria ideias de conteúdo. |
| Lupa Score | Diagnóstico técnico com nota da sua presença digital, pontos fortes, oportunidades e plano de ação. |

### 5.5 Os três níveis

Título: **Três níveis de contratação**

No formato dos cartões de plano, sem preço. O lugar do valor fica com o público-alvo. Botão igual nos três: **Solicitar proposta**.

**Básico: Ativação Essencial**

- Foco principal: sair da invisibilidade técnica imediata.
- Entregáveis: otimização do Perfil da Empresa no Google, categorias e serviços estruturados, Cartão de Avaliações digital, Lupa Score inicial.
- Para quem: pequenos negócios começando no digital.

**Médio: Presença Inteligente**

- Foco principal: dominação local e preparação para IA (AEO e GEO).
- Entregáveis: tudo do Básico, mais Mini Site, SEO Local, 5 posts no Perfil do Google e IA personalizada.
- Para quem: profissionais liberais e clínicas em crescimento.

**Premium: Autoridade Bússola**

- Foco principal: onipresença e liderança de mercado.
- Entregáveis: tudo do Médio, mais site com blog, otimização da IA personalizada, gestão mensal por 3 meses e relatórios de performance.
- Para quem: empresas consolidadas que querem ser a referência da região.

O cartão do meio recebe o destaque, com borda neon e selo "Mais contratado".

### 5.6 Como funciona

Seis passos numerados, em linha do tempo vertical no celular e horizontal no desktop.

| Passo | O que acontece |
| :---- | :---- |
| 1. Proposta | Você recebe a proposta com escopo e prazo. Sem reunião longa. |
| 2. Briefing | Coleta de informações, fotos, vídeos e acessos. Análise do perfil e da concorrência local. |
| 3. Otimização do Google Meu Negócio | Perfil inteiro otimizado. Fotos e vídeos com geolocalização. Posts iniciais publicados. |
| 4. Construção do site | Site simples ou site com blog, conforme o nível contratado. |
| 5. Otimização para IA | Perfil e site estruturados para AEO e GEO, para que a IA entenda e recomende. |
| 6. Análise final e entrega | Lupa Score final, relatório de métricas, manual da IA e orientação para a gestão contínua. |

### 5.7 O que é entregue

Acordeão, um item por entregável, tudo fechado ao abrir.

- **Perfil da Empresa no Google.** Todas as áreas preenchidas com foco em SEO local. Categorias e atributos escolhidos com critério. Fotos e vídeos com metadados de localização. Posts iniciais que apresentam quem você é, o que faz e cada serviço.
- **Mini Site.** Design responsivo, carregamento rápido, botão de WhatsApp em destaque, informação clara de serviço e endereço, ligado ao perfil do Google.
- **Site com Blog.** Todos os serviços em páginas próprias, mais artigos que respondem as dúvidas reais do seu cliente e sustentam a autoridade do domínio.
- **SEO Local.** Palavras-chave da sua região aplicadas no perfil e no site, com orientação de acompanhamento.
- **IA Especializada.** Assistente treinado com seus serviços, seu público e seu tom. Gera post, resposta de avaliação, ideia de artigo e pergunta frequente.
- **Conteúdo Estratégico.** Posts iniciais no perfil e guia de temas para você continuar sozinha.
- **Lupa Score.** Nota da presença digital, pontos fortes, oportunidades e plano de ação por escrito.
- **Manual da IA.** Documento com instruções de uso, para o ativo continuar rendendo depois da entrega.

### 5.8 CTA final

> Seu concorrente não precisa ser melhor que você. Ele só precisa ser mais fácil de entender pelo Google e pelas IAs.

Botão: **Solicitar proposta**.

---

## 6. SITES

Slug `/sites`. É a porta de entrada da prospecção. Existe para quem ainda não tem site.

### 6.1 Hero

Selo: Sites

Headline: **Seu negócio precisa de um lugar oficial na internet.**

Subheadline: A maioria dos negócios locais depende só do Instagram e de um perfil do Google pela metade. Sem site, o cliente que pesquisa antes de comprar não encontra onde confirmar que você existe. São três formatos. Você escolhe pelo tamanho do seu negócio, não pelo tamanho do orçamento.

Botão: **Quero meu site**.

Âncoras internas: Site com IA · Site WordPress · Site com Blog

### 6.2 Site com IA

> Site construído com inteligência artificial e otimizado para inteligência artificial. Enxuto, rápido, focado em um serviço principal e em uma ação: falar com você no WhatsApp. É o mesmo Mini Site que entra no Método Presença Inteligente.

Benefícios:

- Vai ao ar rápido, sem projeto de três meses.
- Carrega em instantes, inclusive no celular do cliente na rua.
- Estruturado para o ChatGPT e o Gemini entenderem o que você faz e onde atende.
- Botão de WhatsApp em destaque em todas as seções.
- Ligado ao seu Perfil da Empresa no Google.
- Preparado para SEO local desde o primeiro dia.

Aviso, em caixa de destaque com borda neon:

> **Importante.** O domínio é contratado separadamente. A hospedagem tem cobrança mensal.

### 6.3 Site WordPress

> Site em WordPress, a plataforma mais usada do mundo. Indicado para quem quer administrar o próprio site depois da entrega, trocar textos e imagens sem depender de ninguém, e ter estrutura pronta para crescer.

Benefícios:

- Você administra o conteúdo depois, pelo painel.
- Estrutura preparada para receber blog e novas páginas.
- Compatível com as ferramentas de SEO mais usadas.
- Responsivo, do celular ao desktop.
- Otimizado para busca local.
- Entrega com orientação de uso do painel.

Aviso, em caixa de destaque com borda neon:

> **Importante.** O domínio é contratado separadamente. A hospedagem tem cobrança mensal.

### 6.4 Site com Blog

> Site completo, com página própria para cada serviço e um blog que responde as perguntas que o seu cliente faz antes de contratar. É o formato para quem quer construir autoridade e aparecer em busca que não é só o nome da empresa.

Benefícios:

- Uma página por serviço, cada uma com chance própria de ranquear.
- Artigos estruturados para responder pergunta direta (AEO).
- Conteúdo que as IAs conseguem citar quando recomendam um negócio (GEO).
- Autoridade que se acumula, em vez de depender de anúncio todo mês.
- Base pronta para publicar sozinha depois.

Sem aviso de domínio e hospedagem nesta seção, conforme definido.

### 6.5 Comparativo

| | Site com IA | Site WordPress | Site com Blog |
| :---- | :---- | :---- | :---- |
| Melhor para | Sair do zero rápido | Quem quer autonomia no painel | Quem quer autoridade e busca orgânica |
| Foco | Um serviço principal | Serviços e páginas fixas | Todos os serviços mais blog |
| Você administra depois | Com apoio | Sim | Sim |
| Preparado para IA | Sim | Sim | Sim, com camada de conteúdo |
| Blog incluso | Não | Não | Sim |

### 6.6 CTA final

> Site não é vaidade. É o endereço que o Google e a IA usam para confirmar que seu negócio existe.

Botão: **Quero meu site**, para `/contato` com o assunto preenchido.

---

## 7. BLOG

WordPress em `blog.anarego.com.br`. **O layout é o da página de blog do rascunho**, repintado na identidade do site atual.

**Sobre a escolha do endereço.** Subpasta `anarego.com.br/blog` concentra melhor a autoridade de domínio, mas o Lovable não faz proxy reverso para o WordPress. O caminho realista é subdomínio. Para compensar, o site principal linka o blog em três lugares (menu, prévia na Home e rodapé) e cada artigo linka de volta para `/solucoes` e `/sites`.

Layout herdado do rascunho:

- Cabeçalho com selo, H1 e uma linha de posicionamento.
- Grade de dois cartões por linha no desktop.
- Cada cartão: pílulas de categoria no topo, título grande, resumo de até três linhas, data à esquerda e "Ler →" à direita, com o título mudando para neon no hover.
- Bloco de captação no fim da listagem, que no rascunho é escuro e aqui vira painel elevado com borda neon.

Acréscimos: filtro por categoria em pílulas e paginação simples, que o rascunho não tem porque tem poucos artigos.

Categorias:

Google Meu Negócio · SEO Local · AEO · GEO · Inteligência Artificial · Marketing Local · Método Presença Inteligente · Estudos de caso · Conteúdo educativo

Cada artigo leva: H1, sumário, imagem de capa, subtítulos em H2, **bloco de resposta direta no topo** (o rascunho já faz isso com o campo `answer` de cada artigo, e é o que faz a IA citar), autora com foto e CTA final para `/contato`.

Os artigos que já existem no rascunho e o artigo de SEO local do site atual migram para o WordPress com redirecionamento.

---

## 8. PORTFÓLIO

Slug `/portfolio`.

Hero curto: **Projetos que saíram do papel**, com uma linha de contexto.

Grade de cartões. Ao clicar, abre painel lateral ou página do projeto com quatro blocos fixos:

1. **Imagens.** Print do site, print do perfil do Google, print do mapa antes e depois.
2. **Descrição.** Quem é o cliente e o que faz.
3. **Objetivo.** O que precisava mudar.
4. **Solução aplicada.** O que foi entregue, com os componentes do Método nomeados.

Base inicial, mantida conforme sua decisão: Simple 3D, Faces Odontologia, Nitz Odontologia, Facies, Andréia Lustosa, Juliana Teixeira, Roberta Kapper, Thiago Carneiro, Marcelo Rodrigues.

As fotos e documentos de comprovação você sobe depois, nesta página.

Regra: número só entra com print que comprove. Sem print, o caso entra sem número.

CTA final: **Solicitar proposta**.

---

## 9. SOBRE MIM

Slug `/sobre`. O texto do rascunho já está pronto e entra praticamente inteiro.

**Quem é Ana Eliza.** Foto atual do site ao lado do texto.

H1: **Eu fui dentista por 20 anos. Hoje eu faço a IA indicar negócios como o seu.**

**História profissional.** Os seis parágrafos do rascunho: as duas décadas de consultório, o perfil que se mantinha nas primeiras posições sem agência e sem anúncio, o padrão que se repetia nos outros profissionais, a virada de 2026 com o cliente perguntando para a IA, e o fecho de que não é agência e não vende promessa mágica.

**Experiência.** 20 anos de consultório próprio. Certificação do Google. Atendimento a clínicas, consultórios, estética, escritórios e comércio local.

**Especializações.** SEO Local. Perfil da Empresa no Google. AEO. GEO. Construção de sites para negócio local. Conteúdo estratégico com IA.

**Posicionamento.**

> Não sou agência. Não crio dependência. Monto o sistema, entrego o ativo e ensino a manter.

> Existo para dar visibilidade justa a quem é bom no que faz.

Cartão de assinatura: Ana Rego · Certificada pelo Google · Referência em SEO Local e GEO.

CTA: **Falar comigo no WhatsApp**.

**Uma observação.** No rascunho, o FAQ mora dentro do Sobre. Na nova arquitetura o FAQ tem página própria, então sai daqui. O acordeão e os dados estruturados vão junto para `/faq`.

---

## 10. FAQ

Slug `/faq`. Acordeão, tudo fechado ao abrir. Dados estruturados de FAQ, porque é a página que mais tende a ser citada por IA. O componente já existe no rascunho.

Três grupos.

**Sobre sites**

- Preciso ter domínio próprio? Sim. Contratado separadamente, no seu nome, e continua seu.
- A hospedagem é cobrada à parte? Sim. Cobrança mensal, também no seu nome.
- Qual a diferença entre o Site com IA e o Site WordPress? O Site com IA é mais enxuto e vai ao ar mais rápido. O WordPress é para quem quer administrar o conteúdo depois, pelo painel.
- Quando preciso de blog? Quando você quer aparecer em buscas que não são o nome da sua empresa e construir autoridade ao longo do tempo.
- Depois de pronto, eu consigo mexer sozinha? Sim. Você recebe orientação de uso e o ativo é seu.

**Sobre o Método Presença Inteligente** (as sete perguntas do rascunho, adaptadas de paciente para cliente)

- Para quem é a AR? Negócios que dependem de cliente novo chegando. Se você é bom no que faz e some das respostas da IA, é para você.
- Preciso entender de marketing ou mexer em ferramenta? Não. Eu executo. Você acompanha.
- E se eu já apareço em algumas respostas? Melhor ainda. Dá para subir de posição e aparecer em mais perguntas.
- Quanto tempo até ver resultado? O monitoramento é semanal e as primeiras mudanças aparecem em semanas.
- Você cria avaliações ou citações falsas? Nunca. É ilegal e o Google pune.
- Como você mede se eu apareço? Toda semana eu testo as perguntas reais que os clientes fazem, nas IAs mais usadas no Brasil, e registro se o seu nome aparece e em que posição.
- Por que a IA indica um negócio e não outro? A IA cruza Google, site, diretórios e avaliações para decidir em quem confiar. Quem tem presença completa e consistente aparece.
- Vocês garantem primeira posição? Não. Ninguém pode garantir posição. Garante-se a execução correta do que o Google e as IAs avaliam.
- O que é o Lupa Score? O diagnóstico técnico com nota da sua presença digital, pontos fortes, oportunidades e plano de ação.
- O que é a IA Especializada? Um assistente treinado com o seu negócio, que gera post, responde avaliação e cria ideia de conteúdo.

**Sobre contratação**

- Como funciona a proposta? Você preenche o formulário, recebe uma análise inicial e a proposta com escopo e prazo.
- Precisa de reunião? Só se você quiser. O fluxo padrão é assíncrono.
- O que acontece depois da entrega? Você recebe os acessos, o manual da IA e a orientação de gestão contínua.

> **Duas perguntas do rascunho pedem decisão.** A que diz "Dá para fazer isso sozinho?" termina oferecendo a Bússola Local como guia de execução — e a Bússola Local sai do site. E a que compara "implementação única" com "acompanhamento" descreve os planos que saíram. Ou saem, ou são reescritas sem citar produto que não está mais na página.

CTA final: **Solicitar proposta**.

---

## 11. CONTATO

Slug `/contato`. Duas colunas.

**Coluna esquerda: formulário.** Reaproveita o endpoint `/api/leads` que já existe.

Campos: nome, WhatsApp, e-mail, nome do negócio, cidade, link do Instagram ou do Google (opcional), seletor de interesse com Site com IA, Site WordPress, Site com Blog, Método Presença Inteligente e Não sei ainda. Campo livre de mensagem.

Texto acima do formulário:

> Me conta do seu negócio. Eu olho sua presença no Google e volto com uma análise e uma proposta.

Botão: **Solicitar proposta**. Depois do envio, redireciona para a página de obrigado que já existe.

**Coluna direita: canais diretos.**

- WhatsApp, com link direto.
- **elizaregomkt@gmail.com**
- Instagram @ardigitalstrategy e @ancorrearego.
- LinkedIn.
- Atendimento remoto para todo o Brasil.

Sem mapa e sem endereço físico.

---

## 12. Para onde foi cada serviço

Nenhum serviço novo foi criado.

| Serviço no catálogo atual | Onde passa a viver |
| :---- | :---- |
| Perfil Google Autoridade | Nossas Soluções, componente Perfil da Empresa no Google |
| Sistema de Avaliações | Nossas Soluções, componente Cartão de Avaliações |
| Calendário de Conteúdo | Nossas Soluções, componente Conteúdo Estratégico |
| Gestão de Conteúdo Local | Nossas Soluções, nível Premium, gestão mensal |
| Consultoria de Posicionamento | Absorvida pelas etapas de Proposta e Briefing |
| Site Institucional | Página Sites |
| WhatsApp Business Profissional | Não entra. Fora do escopo dos três níveis. |
| Cartão Digital e Bio de Links | Não entra. Fora do escopo dos três níveis. |
| Vídeo para Sala de Espera | Não entra. Fora do escopo dos três níveis. |
| Bússola Local, produto de R$67 | Sai do site. |

Os três que não entram continuam vendáveis no atendimento. Só não ocupam espaço na arquitetura pública.

---

## 13. Redirecionamentos

Obrigatório publicar junto com o site, senão o Google mantém páginas mortas indexadas.

| De | Para | Tipo |
| :---- | :---- | :---- |
| `/catalogo` | `/solucoes` | 301 |
| `/servicos/perfil-google-autoridade` | `/solucoes` | 301 |
| `/servicos/sistema-de-avaliacoes` | `/solucoes` | 301 |
| `/servicos/calendario-de-conteudo` | `/solucoes` | 301 |
| `/servicos/gestao-de-conteudo-local` | `/solucoes` | 301 |
| `/servicos/consultoria-de-posicionamento` | `/solucoes` | 301 |
| `/servicos/site-institucional` | `/sites` | 301 |
| `/servicos/whatsapp-business-profissional` | `/contato` | 301 |
| `/servicos/cartao-digital-e-bio-de-links` | `/contato` | 301 |
| `/servicos/video-para-sala-de-espera` | `/contato` | 301 |
| `/bussola-local` | `/solucoes` | 301 |
| `/blog/seo-local-pequenas-empresas` | artigo no WordPress | 301 |

Atualizar `sitemap.xml`, `robots.txt` e `llms.txt` com as oito páginas. O `llms.txt` importa: é o arquivo que orienta as IAs sobre o que o site oferece.

---

## 14. Sistema visual

**Fonte da verdade: `src/styles.css` do `www-anarego-com-br`.** Os tokens abaixo já existem e não mudam. O que muda é que as estruturas do rascunho passam a usá-los.

| Token | Valor | Aproximado |
| :---- | :---- | :---- |
| Fundo | `oklch(0.16 0.02 150)` | preto esverdeado |
| Superfície | `oklch(0.18 0.02 150)` | |
| Superfície elevada | `oklch(0.22 0.025 150)` | |
| Cartão | `oklch(0.20 0.025 150)` | |
| Texto | `oklch(0.98 0.005 150)` | branco |
| Texto secundário | `oklch(0.72 0.02 150)` | cinza claro |
| **Primária** | `oklch(0.86 0.18 145)` | **verde neon** |
| Borda | `oklch(0.30 0.03 150 / 60%)` | |
| Raio | 0.75rem | |
| Títulos | **Sora**, `-0.02em` | |
| Corpo | **Inter** | |

Recursos visuais do site atual que ficam: `bg-hero` (gradiente radial neon no topo), `grid-bg` (grade sutil), `shadow-neon`, `bg-panel`.

Fotos e logo: os arquivos atuais, `ana-rego.jpeg` e `logo.png`.

**Conversão das estruturas do rascunho:**

| No rascunho | No site novo |
| :---- | :---- |
| `card-soft` branco sobre fundo claro | Cartão `--card` com borda sutil sobre fundo escuro |
| `badge-tag` azul claro | Selo com fundo neon a 10% e texto neon |
| `btn-primary` azul sólido | Botão neon com texto escuro (`--primary-foreground`) |
| `btn-outline` | Contorno neon a 40%, texto branco |
| Faixas `bg-ink` escuras | Painéis elevados com `shadow-neon` |
| Marcador de bullet azul | Marcador neon |
| Destaque do cartão do meio | Borda neon e `shadow-neon` |
| Inter em tudo | Sora nos títulos, Inter no corpo |

Regras: largura máxima de 1180px, uma ideia por seção, respiro generoso, imagem sempre com dimensão definida.

Desempenho: imagens em WebP, carregamento adiado abaixo da dobra, fontes com `display: swap`, nada de biblioteca pesada de animação.

---

## 15. Ordem de execução sugerida

1. Aprovar esta arquitetura e fechar os três pontos da seção 16.
2. Portar a Home do rascunho para o projeto do site atual, repintada nos tokens escuros.
3. Inserir na Home os blocos novos: prévia de Sites, prévia do Método, prévia de Portfólio, prévia de Blog. Remover o bloco de planos.
4. Construir Sites e Nossas Soluções, que são as páginas que vendem, com o formato de cartão herdado.
5. Publicar Sobre Mim, FAQ e Contato, aproveitando os textos do rascunho.
6. Montar Portfólio conforme os prints forem subindo.
7. Subir o WordPress do blog com o layout do rascunho e migrar os artigos.
8. Publicar os redirecionamentos e atualizar sitemap, robots e `llms.txt`.
9. Remover catálogo, páginas de serviço e Bússola Local.

Os passos 3 e 4 são o que muda a conversão. O resto sustenta.

---

## 16. O que ainda depende de você

Três pontos, todos pequenos, todos bloqueantes para a escrita final.

1. **As cinco IAs.** Quais são? O rascunho fala em três num lugar e cinco em outro. Preciso do nome das cinco para fechar o bloco mesclado do Sobre e alinhar todas as páginas.
2. **"Paciente" ou "cliente" no H1.** O H1 fica como está, conforme você decidiu. A pergunta é só se a palavra "paciente" abre para "cliente", já que o site fala com negócio local em geral.
3. **Escassez e Garantia.** Minha sugestão é escassez fica na Home, garantia vai para a proposta comercial. Confirma ou prefere diferente?

### Já decidido nesta rodada

- A Home é a do rascunho. O blog também.
- A identidade visual é a do anarego.com.br: preto, verde neon, Sora, fotos atuais.
- O H1 do hero fica.
- O Sobre mescla com as 5 IAs.
- O bloco de planos e preços sai; o formato dos cartões é reaproveitado na apresentação dos serviços.
- `/diagnostico` fica no ar, fora do menu.
- O nome Bússola Local fica com o conjunto de componentes do Método.
- E-mail comercial: elizaregomkt@gmail.com
- Cases de Salão de Beleza e Loja de iPhone saem.
- Os nove nomes ficam no portfólio; prints e documentos você sobe depois.
