# Arquitetura do novo site AR Digital

Proposta de reorganização completa de anarego.com.br. Documento de aprovação, anterior à construção.

Data: 29 de julho de 2026.

---

## 1. Decisões que orientam esta proposta

**Plataforma.** Institucional no Lovable, blog no WordPress. O site atual já roda em Lovable (projeto `www-anarego-com-br`), com TanStack Router, rotas de blog, sitemap e formulário de leads ligado ao Supabase. Nada disso precisa ser refeito. O blog ganha WordPress próprio, em `blog.anarego.com.br`.

**Referência visual.** O projeto `ar-digital-saude-rascunho` entra como sistema visual, não como conteúdo. Fundo claro, azul `#1A4FD6`, cartões arredondados, botões em pílula, tipografia Inter. O site atual é escuro. A troca de tema é a mudança visual mais visível deste projeto.

**Produto de entrada.** Sites. A maioria das empresas prospectadas ainda não tem site profissional, então essa é a porta de entrada apresentada ao visitante. O Método Presença Inteligente vem logo em seguida, como o passo completo.

**Sem preços no site.** Os três níveis do Método aparecem com foco, entregáveis e público-alvo. O valor vai na proposta, depois do briefing. A seção de planos e preços do rascunho não entra.

**O que sai do site.**

| Página atual | Destino |
| :---- | :---- |
| `/catalogo` | Removida. Substituída por Nossas Soluções e Sites. |
| `/servicos/[9 páginas]` | Removidas. Os serviços passam a ser componentes do Método. |
| `/bussola-local` | Removida de dentro do site. |
| Serviços soltos na Home | Removidos. Passam a viver dentro das páginas certas. |
| Planos e preços do rascunho | Não entram. |

**O que fica fora do menu.**

| Página | Por quê |
| :---- | :---- |
| `/ebook/poder-google-meu-negocio` | Isca de captação. Vive de link direto no Instagram, WhatsApp e anúncio. |
| `/diagnostico` e `/diagnostico/obrigado` | É o formulário que alimenta a base de leads hoje. Sugiro manter no ar como landing de campanha, fora da navegação. Confirmar. |

Nenhuma página nova além das oito listadas.

---

## 2. Mapa do site

```
/                       Home
/solucoes               Nossas Soluções (Método Presença Inteligente)
/sites                  Sites
blog.anarego.com.br     Blog (WordPress)
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

Botão fixo à direita: **Solicitar proposta**, apontando para `/contato`.

No celular, menu sanduíche com os oito itens e o botão de proposta no fim da lista.

O menu atual tem Início, Sobre, Catálogo, Bússola Local, Ebook e Instagram. Catálogo, Bússola Local, Ebook e Instagram saem da barra. Instagram e LinkedIn vão para o rodapé.

### Rodapé

Três colunas e uma linha final.

- Coluna 1: logo, a frase "Presença local que faz seu negócio ser encontrado, escolhido e confiado no Google" e o WhatsApp.
- Coluna 2: navegação repetida (as oito páginas).
- Coluna 3: redes. Instagram @ardigitalstrategy, Instagram @ancorrearego, LinkedIn, e-mail comercial.
- Linha final: razão social, CNPJ e o ano.

### Botão flutuante

WhatsApp fixo no canto inferior direito, em todas as páginas. Já existe no site atual.

### Regra de CTA

Cada página termina com um destino só. Nada de três botões competindo.

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

## 3. Como unir o site atual com o layout do rascunho

O site atual tem o conteúdo certo em quase tudo. O rascunho tem a forma certa. A fusão é essa.

| Vem do site atual | Vem do rascunho |
| :---- | :---- |
| Posicionamento de SEO Local e GEO | Tema claro, azul `#1A4FD6`, fundo `#F6F8FC` |
| Texto de autoridade da Ana | Cartões `card-soft`, borda suave, raio de 20px |
| Cases com números reais | Botões em pílula, primário sólido e contorno |
| Lista de clientes reais | Selo de seção (`badge-tag`) antes de cada título |
| Formulário de leads e Supabase | Grade de três colunas para pilares e passos |
| Sitemap, robots e `llms.txt` | Tipografia Inter, títulos peso 800 |
| Logo e foto da Ana | Faixa escura de contraste em blocos de dor |
| WhatsApp flutuante | Palavra rotativa no hero |

**Três ajustes de conteúdo antes de publicar.**

1. Os cases de Salão de Beleza e Loja de iPhone que estão na Home hoje usam números que não constam em nenhum material validado. Ou entram com dado conferido, ou saem. Ficam os três cases documentados.
2. A faixa de logos de clientes está com seis caixas escritas "Cliente 1", "Cliente 2". Substituir pelos nomes reais ou remover a seção.
3. O rascunho fala com profissional de saúde. O site novo fala com negócio local em geral, com saúde como nicho prioritário. A copy do rascunho precisa desse alargamento.

---

## 4. HOME

Objetivo: em quinze segundos o visitante entende o que a AR faz, para quem, e qual o primeiro passo.

### 4.1 Hero

Selo: Presença local para negócios · SEO Local, AEO e GEO

Headline:

> Seu cliente perguntou pro Google, pro ChatGPT e pro Gemini qual o melhor da região. Seu nome não estava na resposta.

A palavra rotativa do rascunho entra aqui, alternando Google, ChatGPT, Gemini e Perplexity.

Subheadline:

> A maioria dos negócios locais bons ainda não tem site e tem um perfil no Google pela metade. É por isso que perde cliente para concorrente pior. A AR organiza as duas coisas.

Botão principal: **Quero meu site**, para `/sites`.
Botão secundário: **Conhecer o Método**, para `/solucoes`.

Apoio visual: mockup de um site no notebook ao lado de um perfil do Google no celular. As duas entregas na mesma imagem.

Linha de reforço abaixo dos botões: Sites · Perfil no Google · SEO Local · Otimização para IA

### 4.2 Institucional

Selo: Quem é a AR

> A AR Digital organiza o que o seu negócio já deveria ter funcionando no Google.

> Não somos agência. Não vendemos promessa. Entregamos execução, com método e prazo. Trabalhamos com quem atende cliente na própria cidade: clínicas e consultórios, escritórios de advocacia, estética e bem-estar, pousadas e hotéis, salões e lojas de bairro.

> No fim da entrega, o ativo é seu. Você sai com autonomia, não com dependência de agência.

Três cartões:

- **Justiça.** Bom profissional merece ser encontrado. Competência não pode ser silenciada por invisibilidade digital.
- **Clareza.** Você entende o que foi feito, por que foi feito e o que fazer depois.
- **Antecipação.** Enquanto o mercado discute Google, a AR já trabalha para o ChatGPT e o Gemini recomendarem seu negócio.

### 4.3 Sites, prévia

Vem antes das Soluções, porque é o produto de entrada.

Selo: Sites

Título: **Seu negócio ainda não tem casa própria na internet.**

Texto: Perfil no Google sem site é meio caminho. O site é onde o cliente confirma que você existe, entende o que você faz e decide falar com você.

Três cartões, um por formato:

| Cartão | Uma linha |
| :---- | :---- |
| Site com IA | Rápido, enxuto, feito para converter no WhatsApp e para a IA entender seu negócio. |
| Site WordPress | Site que você mesmo administra depois, com estrutura preparada para crescer. |
| Site com Blog | Todos os serviços em páginas próprias e conteúdo que responde o que seu cliente pergunta. |

Botão: **Ver as três opções de site**, para `/sites`.

### 4.4 Nossas Soluções, prévia

Selo: Método Presença Inteligente

Título: **Site sozinho não coloca você no mapa.**

Texto: O Método Presença Inteligente organiza a presença inteira: o Perfil da Empresa no Google, o site, o SEO local, as avaliações, o conteúdo e a camada de IA. Tudo em ordem, porque ordem é o que a maioria erra.

Fileira com os sete componentes em ícone e nome: Perfil no Google · Mini Site · SEO Local · Cartão de Avaliações · Conteúdo Estratégico · IA Especializada · Lupa Score

Botão: **Conhecer o Método completo**, para `/solucoes`.

### 4.5 Resultados

Selo: Resultados reais

Título: **Perfis que saíram do lugar**

Três cartões, apenas com números documentados:

| Cartão | Números |
| :---- | :---- |
| Clínica odontológica | +218% ligações via Google · +147% rotas pedidas no Maps · Top 3 no pack local |
| Perfil otimizado em 30 dias | 1.240 para 4.870 visualizações · 12 para 47 ligações · score de 47 para 98 |
| Clínica de estética, São Paulo | Da página 2 para a página 1 do Maps em 14 dias · 23 para 68 avaliações · 89 para 312 cliques |

Rodapé da seção, em letra pequena: Resultados de casos reais. O desempenho de cada perfil depende do segmento, da concorrência local e da consistência na execução.

### 4.6 Portfólio, prévia

Três projetos em cartão, com imagem e uma linha de resultado. Botão **Ver portfólio** para `/portfolio`.

### 4.7 Blog, prévia

Três artigos mais recentes puxados do WordPress, com imagem, categoria, título e data. Botão **Ver todos os artigos** para `blog.anarego.com.br`.

### 4.8 CTA final

Bloco escuro, contraste com o resto da página.

> Seu concorrente não precisa ser melhor que você. Ele só precisa ser mais fácil de entender pelo Google.

Botão: **Solicitar proposta**, para `/contato`.
Botão secundário: **Falar no WhatsApp**.

---

## 5. NOSSAS SOLUÇÕES

Página comercial principal. Slug `/solucoes`. Título da aba: Método Presença Inteligente, presença local completa para o Google e para as IAs.

### 5.1 Hero

Selo: Método Presença Inteligente

Headline: **Sua empresa pronta para a nova era da busca local.**

Subheadline: Não basta ter perfil no Google. É preciso ser encontrado, compreendido e recomendado. O Método Presença Inteligente organiza a sua presença inteira, em ordem, com prazo e entregáveis definidos.

Botão: **Solicitar proposta**.

### 5.2 O problema

Título: **A busca mudou de lugar.**

Dois blocos lado a lado:

| Antes | Hoje |
| :---- | :---- |
| Ranquear mais alto | Ser a resposta |
| Conseguir cliques | Receber recomendação |
| Talvez converter | Ganhar a venda |

Texto:

> O cliente abre o Google antes de ligar. Só que agora ele também pergunta pro ChatGPT e pro Gemini qual o melhor da região. As duas respostas vêm de lugares que você pode organizar.

Quatro cartões explicando as siglas sem jargão:

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

Sete cartões:

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

Sem preço. Cada cartão traz foco principal, entregáveis e público-alvo. Botão igual nos três: **Solicitar proposta**.

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

O cartão do meio recebe o destaque visual, com borda azul e selo "Mais contratado".

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

Detalhamento em acordeão, um item por entregável. Abre fechado, para não alongar a página.

- **Perfil da Empresa no Google.** Todas as áreas preenchidas com foco em SEO local. Categorias e atributos escolhidos com critério. Fotos e vídeos com metadados de localização. Posts iniciais que apresentam quem você é, o que faz e cada serviço.
- **Mini Site.** Design responsivo, carregamento rápido, botão de WhatsApp em destaque, informação clara de serviço e endereço, ligado ao perfil do Google.
- **Site com Blog.** Todos os serviços em páginas próprias, mais artigos que respondem as dúvidas reais do seu cliente e sustentam a autoridade do domínio.
- **SEO Local.** Palavras-chave da sua região aplicadas no perfil e no site, com orientação de acompanhamento.
- **IA Especializada.** Assistente treinado com seus serviços, seu público e seu tom. Gera post, resposta de avaliação, ideia de artigo e pergunta frequente.
- **Conteúdo Estratégico.** Posts iniciais no perfil e guia de temas para você continuar sozinho.
- **Lupa Score.** Nota da presença digital, pontos fortes, oportunidades e plano de ação por escrito.
- **Manual da IA.** Documento com instruções de uso, para o ativo continuar rendendo depois da entrega.

### 5.8 CTA final

> Seu concorrente não precisa ser melhor que você. Ele só precisa ser mais fácil de entender pelo Google e pelas IAs.

Botão: **Solicitar proposta**.

---

## 6. SITES

Slug `/sites`. É a porta de entrada da prospecção. A página existe para quem ainda não tem site.

### 6.1 Hero

Selo: Sites

Headline: **Seu negócio precisa de um lugar oficial na internet.**

Subheadline: A maioria dos negócios locais depende só do Instagram e de um perfil do Google pela metade. Sem site, o cliente que pesquisa antes de comprar não encontra onde confirmar que você existe. São três formatos. Você escolhe pelo tamanho do seu negócio, não pelo tamanho do orçamento.

Botão: **Quero meu site**.

Âncoras internas: Site com IA · Site WordPress · Site com Blog

### 6.2 Site com IA

Descrição:

> Site construído com inteligência artificial e otimizado para inteligência artificial. Enxuto, rápido, focado em um serviço principal e em uma ação: falar com você no WhatsApp. É o mesmo Mini Site que entra no Método Presença Inteligente.

Benefícios:

- Vai ao ar rápido, sem projeto de três meses.
- Carrega em instantes, inclusive no celular do cliente na rua.
- Estruturado para o ChatGPT e o Gemini entenderem o que você faz e onde atende.
- Botão de WhatsApp em destaque em todas as seções.
- Ligado ao seu Perfil da Empresa no Google.
- Preparado para SEO local desde o primeiro dia.

Aviso, em caixa de destaque com borda:

> **Importante.** O domínio é contratado separadamente. A hospedagem tem cobrança mensal.

### 6.3 Site WordPress

Descrição:

> Site em WordPress, a plataforma mais usada do mundo. Indicado para quem quer administrar o próprio site depois da entrega, trocar textos e imagens sem depender de ninguém, e ter estrutura pronta para crescer.

Benefícios:

- Você administra o conteúdo depois, pelo painel.
- Estrutura preparada para receber blog e novas páginas.
- Compatível com as ferramentas de SEO mais usadas.
- Responsivo, do celular ao desktop.
- Otimizado para busca local.
- Entrega com orientação de uso do painel.

Aviso, em caixa de destaque com borda:

> **Importante.** O domínio é contratado separadamente. A hospedagem tem cobrança mensal.

### 6.4 Site com Blog

Descrição:

> Site completo, com página própria para cada serviço e um blog que responde as perguntas que o seu cliente faz antes de contratar. É o formato para quem quer construir autoridade e aparecer em busca que não é só o nome da empresa.

Benefícios:

- Uma página por serviço, cada uma com chance própria de ranquear.
- Artigos estruturados para responder pergunta direta (AEO).
- Conteúdo que as IAs conseguem citar quando recomendam um negócio (GEO).
- Autoridade que se acumula, em vez de depender de anúncio todo mês.
- Base pronta para publicar sozinha depois.

Sem aviso de domínio e hospedagem nesta seção, conforme definido.

### 6.5 Comparativo

Tabela de três colunas para ajudar a escolher, sem preço.

| | Site com IA | Site WordPress | Site com Blog |
| :---- | :---- | :---- | :---- |
| Melhor para | Sair do zero rápido | Quem quer autonomia no painel | Quem quer autoridade e busca orgânica |
| Foco | Um serviço principal | Serviços e páginas fixas | Todos os serviços mais blog |
| Você administra depois | Com apoio | Sim | Sim |
| Preparado para IA | Sim | Sim | Sim, com camada de conteúdo |
| Blog incluso | Não | Não | Sim |

### 6.6 CTA final

> Site não é vaidade. É o endereço que o Google e a IA usam para confirmar que seu negócio existe.

Botão: **Quero meu site**, para `/contato` com o assunto já preenchido.

---

## 7. BLOG

WordPress em `blog.anarego.com.br`, com o mesmo tema visual do site.

**Sobre a escolha.** Subpasta `anarego.com.br/blog` concentra melhor a autoridade de domínio, mas o Lovable não faz proxy reverso para o WordPress. Então o caminho realista é subdomínio. Para compensar, o site principal linka o blog em três lugares (menu, prévia na Home e rodapé) e cada artigo linka de volta para `/solucoes` e `/sites`.

Estrutura da listagem:

- Cabeçalho com título e uma linha de posicionamento.
- Filtro por categoria em pílulas.
- Grade de cartões: imagem, categoria, título, resumo de duas linhas e data.
- Paginação simples.
- Bloco de captação no fim da listagem, ligado ao ebook.

Categorias:

Google Meu Negócio · SEO Local · AEO · GEO · Inteligência Artificial · Marketing Local · Método Presença Inteligente · Estudos de caso · Conteúdo educativo

Cada artigo leva: título em H1, sumário, imagem de capa, subtítulos em H2, bloco de resposta direta no topo (importante para AEO), autora com foto e CTA final para `/contato`.

O artigo que já existe no site atual, sobre SEO local para pequenas empresas, migra para o WordPress com redirecionamento.

---

## 8. PORTFÓLIO

Slug `/portfolio`.

Hero curto: **Projetos que saíram do papel**, com uma linha de contexto.

Grade de cartões. Ao clicar, abre painel lateral ou página do projeto com quatro blocos fixos:

1. **Imagens.** Print do site, print do perfil do Google, print do mapa antes e depois.
2. **Descrição.** Quem é o cliente e o que faz.
3. **Objetivo.** O que precisava mudar.
4. **Solução aplicada.** O que foi entregue, com os componentes do Método nomeados.

Base inicial de projetos, todos com autorização confirmada antes de publicar: Simple 3D, Faces Odontologia, Nitz Odontologia, Facies, Andréia Lustosa, Juliana Teixeira, Roberta Kapper, Thiago Carneiro, Marcelo Rodrigues.

Regra: número só entra no portfólio com print que comprove. Sem print, o caso entra sem número.

CTA final: **Solicitar proposta**.

---

## 9. SOBRE MIM

Slug `/sobre`.

**Quem é Ana Eliza.** Foto ao lado do texto, no formato do rascunho.

> Sou Ana Eliza Rego. Fui cirurgiã-dentista por 20 anos antes de migrar para o digital.

**História profissional.**

> Por anos, meu consultório esteve entre os primeiros resultados do bairro no Google. Dezenas de pacientes chegavam todo mês. Sem agência. Sem anúncio.

> O que eu fazia era simples: mantinha o perfil organizado, completo e ativo.

> Quando comecei a ajudar outros profissionais, vi o mesmo padrão se repetindo. Perfis bagunçados, descrições genéricas, fotos ruins, avaliações sem resposta. Não adianta anunciar para uma vitrine bagunçada.

**Experiência.** 20 anos de consultório próprio. Certificação do Google em marketing digital e SEO. Atendimento a clínicas, consultórios, estética, escritórios e comércio local.

**Especializações.** SEO Local. Perfil da Empresa no Google. AEO. GEO. Construção de sites para negócio local. Conteúdo estratégico com IA.

**Posicionamento.**

> Não sou agência. Não crio dependência. Monto o sistema, entrego o ativo e ensino a manter.

> Existo para dar visibilidade justa a quem é bom no que faz.

CTA: **Falar comigo no WhatsApp**.

---

## 10. FAQ

Slug `/faq`. Acordeão, tudo fechado ao abrir. Marcação de dados estruturados de FAQ, porque essa página é a que mais tende a ser citada por IA.

Três grupos.

**Sobre sites**

- Preciso ter domínio próprio? Sim. O domínio é contratado separadamente, no seu nome, e continua seu.
- A hospedagem é cobrada à parte? Sim. A hospedagem tem cobrança mensal, também no seu nome.
- Qual a diferença entre o Site com IA e o Site WordPress? O Site com IA é mais enxuto e vai ao ar mais rápido. O WordPress é para quem quer administrar o conteúdo depois, pelo painel.
- Quando preciso de blog? Quando você quer aparecer em buscas que não são o nome da sua empresa e construir autoridade ao longo do tempo.
- Depois de pronto, eu consigo mexer sozinha? Sim. Você recebe orientação de uso e o ativo é seu.

**Sobre o Método Presença Inteligente**

- Preciso entender de marketing? Não. O trabalho é executado. Você acompanha.
- Quanto tempo leva? Depende do nível contratado. O escopo e o prazo vão por escrito na proposta.
- Serve para o meu negócio? Se você atende cliente na sua cidade ou região, serve.
- Qual a diferença entre os três níveis? O Básico tira você da invisibilidade. O Médio adiciona site, SEO local e IA. O Premium adiciona blog, gestão por três meses e relatórios.
- Vocês garantem primeira posição no Google? Não. Ninguém pode garantir posição. O que se garante é a execução correta do que o Google e as IAs avaliam.
- O que é o Lupa Score? O diagnóstico técnico com nota da sua presença digital, pontos fortes, oportunidades e plano de ação.
- O que é a IA Especializada? Um assistente treinado com o seu negócio, que gera post, responde avaliação e cria ideia de conteúdo.

**Sobre contratação**

- Como funciona a proposta? Você preenche o formulário, recebe uma análise inicial e a proposta com escopo e prazo.
- Precisa de reunião? Só se você quiser. O fluxo padrão é assíncrono.
- O que acontece depois da entrega? Você recebe os acessos, o manual da IA e a orientação de gestão contínua.

CTA final: **Solicitar proposta**.

---

## 11. CONTATO

Slug `/contato`. Duas colunas.

**Coluna esquerda: formulário.** Reaproveita o endpoint `/api/leads` que já existe.

Campos: nome, WhatsApp, e-mail, nome do negócio, cidade, link do Instagram ou do Google (opcional), e um seletor de interesse com as opções Site com IA, Site WordPress, Site com Blog, Método Presença Inteligente e Não sei ainda. Campo livre de mensagem.

Texto acima do formulário:

> Me conta do seu negócio. Eu olho sua presença no Google e volto com uma análise e uma proposta.

Botão: **Solicitar proposta**. Depois do envio, redireciona para a página de obrigado que já existe.

**Coluna direita: canais diretos.**

- WhatsApp, com link direto.
- E-mail comercial (definir qual endereço vai no site).
- Instagram @ardigitalstrategy e @ancorrearego.
- LinkedIn.
- Região de atendimento e observação de que o atendimento é remoto para todo o Brasil.

Sem mapa e sem endereço físico, a menos que exista endereço comercial para divulgar.

---

## 12. Para onde foi cada serviço

Tradução do que existe hoje para a nova arquitetura. Nenhum serviço novo foi criado.

| Serviço no catálogo atual | Onde passa a viver |
| :---- | :---- |
| Perfil Google Autoridade | Nossas Soluções, componente Perfil da Empresa no Google |
| Sistema de Avaliações | Nossas Soluções, componente Cartão de Avaliações |
| Calendário de Conteúdo | Nossas Soluções, componente Conteúdo Estratégico |
| Gestão de Conteúdo Local | Nossas Soluções, nível Premium, gestão mensal |
| Consultoria de Posicionamento | Absorvida pelas etapas de Proposta e Briefing |
| Site Institucional | Página Sites |
| WhatsApp Business Profissional | Não entra. Não consta no escopo dos três níveis. |
| Cartão Digital e Bio de Links | Não entra. Não consta no escopo dos três níveis. |
| Vídeo para Sala de Espera | Não entra. Não consta no escopo dos três níveis. |
| Bússola Local, produto de R$67 | Sai do site. |

Os três serviços que não entram continuam vendáveis no atendimento. Só não ocupam espaço na arquitetura pública, que precisa ficar focada em site e Método.

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

Atualizar `sitemap.xml`, `robots.txt` e `llms.txt` com as oito páginas novas. O `llms.txt` importa: é o arquivo que orienta as IAs sobre o que o site oferece.

---

## 14. Sistema visual

Tokens herdados do rascunho, já prontos em `src/styles.css`.

| Token | Valor |
| :---- | :---- |
| Fundo | `#F6F8FC` |
| Superfície e cartão | `#FFFFFF` |
| Texto principal | `#0E1326` |
| Texto secundário | `#5B6478` |
| Primária | `#1A4FD6` |
| Primária hover | `#143FB0` |
| Borda | `#E2E7F0` |
| Sucesso | `#16A34A` |
| Raio base | 1rem, cartões em 20px |
| Fonte | Inter |

Componentes reaproveitados: `container-page`, `btn-primary`, `btn-outline`, `card-soft`, `badge-tag`, palavra rotativa do hero, faixa escura de contraste.

Regras: largura máxima de 1180px, títulos em peso 800 com espaçamento negativo, uma ideia por seção, respiro generoso entre blocos, imagem sempre com dimensão definida para não pular o layout no carregamento.

Desempenho: imagens em WebP, carregamento adiado abaixo da dobra, fontes com `display: swap`, nada de biblioteca pesada para animação.

---

## 15. Ordem de execução sugerida

1. Aprovar esta arquitetura.
2. Aplicar o tema claro do rascunho no projeto do site atual.
3. Construir Sites e Nossas Soluções, que são as páginas que vendem.
4. Reescrever a Home com as prévias apontando para elas.
5. Publicar Sobre Mim, FAQ e Contato.
6. Montar Portfólio conforme os prints forem autorizados.
7. Subir o WordPress do blog e migrar o artigo existente.
8. Publicar os redirecionamentos e atualizar sitemap, robots e `llms.txt`.
9. Remover catálogo, páginas de serviço e Bússola Local do site.

Os passos 3 e 4 são o que muda a taxa de conversão. O resto sustenta.

---

## 16. Pontos que precisam da sua decisão

1. **Diagnóstico.** A página `/diagnostico` fica no ar fora do menu ou sai junto com as outras? Ela é o formulário que alimenta os leads hoje.
2. **Nome Bússola Local.** Dentro de Nossas Soluções, Bússola Local aparece como o conjunto de componentes do Método. Só que Bússola Local também é o nome do produto de R$67 que sai do site. Se o produto ainda vai ser vendido em outro lugar, vale decidir se o nome fica com o método ou com o produto, para não confundir quem chega pelos dois caminhos.
3. **E-mail comercial.** Qual endereço entra no rodapé e na página de contato.
4. **Cases sem comprovação.** Confirmar se os números de Salão de Beleza e Loja de iPhone podem ser comprovados. Se não, saem.
5. **Autorização dos clientes.** Quais dos nove nomes podem aparecer no portfólio com print.
