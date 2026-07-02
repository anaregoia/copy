# Status do rascunho no Lovable — AR Digital Saúde

## O que já está pronto e publicado

- **Projeto Lovable:** `AR Digital: IA Indicação`
- **ID do projeto:** `a06edbd4-151e-4819-a474-4cfa7c47116a`
- **Workspace:** `Agência's Lovable` (id `ywaMXFrh3xGBeLF01RvW`)
- **URL pública (ao vivo agora):** https://ar-digital-saude-rascunho.lovable.app
- **Editor:** https://lovable.dev/projects/a06edbd4-151e-4819-a474-4cfa7c47116a

Conteúdo já implementado no projeto (rotas e textos completos): Home, `/diagnostico`, `/planos`, `/sobre`, `/blog` + 10 artigos AEO, Schema.org, formulário de diagnóstico, botão flutuante de WhatsApp. Isso está no ar e **não depende de crédito** — só fica visível assim, sem receber atualizações, até você recarregar o workspace.

## Pendência: identidade visual errada

O rascunho foi gerado com uma paleta azul/clara genérica. **A identidade visual correta é a do anarego.com.br** (projeto Lovable `AR Local SEO`, id `50cd8aa4-8e91-4512-acae-d8bc0c255023`, publicado em https://www-anarego-com-br.lovable.app): fundo escuro esverdeado, verde neon como destaque, tipografia Sora/Inter, botões em pílula.

**Motivo de não ter sido aplicado ainda:** o workspace `Agência's Lovable` ficou sem créditos no momento de mandar a correção. Assim que houver crédito, é só mandar a mensagem abaixo pro projeto `a06edbd4-151e-4819-a474-4cfa7c47116a` (via chat do Lovable ou me pedindo pra reenviar).

### Tokens de design extraídos do site real (anarego.com.br)

```css
:root {
  --radius: 0.75rem;

  /* Preto / Branco / Verde neon suave */
  --background: oklch(0.16 0.02 150);
  --foreground: oklch(0.98 0.005 150);
  --card: oklch(0.20 0.025 150);
  --card-foreground: oklch(0.98 0.005 150);
  --popover: oklch(0.20 0.025 150);
  --popover-foreground: oklch(0.98 0.005 150);

  --primary: oklch(0.86 0.18 145);          /* verde neon suave */
  --primary-foreground: oklch(0.16 0.02 150);
  --secondary: oklch(0.24 0.025 150);
  --secondary-foreground: oklch(0.98 0.005 150);
  --muted: oklch(0.24 0.025 150);
  --muted-foreground: oklch(0.72 0.02 150);
  --accent: oklch(0.30 0.04 150);
  --accent-foreground: oklch(0.98 0.005 150);
  --destructive: oklch(0.62 0.22 27);
  --destructive-foreground: oklch(0.98 0.005 150);
  --border: oklch(0.30 0.03 150 / 60%);
  --input: oklch(0.26 0.03 150);
  --ring: oklch(0.86 0.18 145);

  --neon: oklch(0.86 0.18 145);
  --neon-soft: oklch(0.78 0.14 145);
  --surface: oklch(0.18 0.02 150);
  --surface-elevated: oklch(0.22 0.025 150);

  --gradient-hero: radial-gradient(
      ellipse 80% 60% at 50% 0%,
      color-mix(in oklab, var(--neon) 22%, transparent),
      transparent 70%
    ),
    linear-gradient(180deg, oklch(0.18 0.025 150), oklch(0.13 0.015 150));
  --gradient-panel: linear-gradient(
    135deg,
    color-mix(in oklab, var(--neon) 14%, var(--surface-elevated)),
    var(--surface-elevated)
  );
  --shadow-neon: 0 0 0 1px color-mix(in oklab, var(--neon) 30%, transparent),
    0 20px 60px -20px color-mix(in oklab, var(--neon) 40%, transparent);
}

/* Fontes: Sora (títulos H1–H4, letter-spacing -0.02em) + Inter (corpo) */
```

Grid de fundo sutil (opcional, usado atrás do hero): duas linhas repetidas a cada 56px com `color-mix(in oklab, var(--neon) 8%, transparent) 1px, transparent 1px`, nas direções horizontal e vertical.

### Mensagem pronta pra mandar ao Lovable (retomar aqui)

> A identidade visual atual está ERRADA. Substitua completamente pela identidade visual real da AR Digital (a mesma usada em anarego.com.br), que é escura com verde neon — não azul claro. Aplique exatamente estes tokens de design (copiados do projeto original em produção):
>
> [colar o bloco CSS acima]
>
> === TIPOGRAFIA ===
> - Fonte de títulos (H1, H2, H3, H4): "Sora" (Google Font), com letter-spacing -0.02em.
> - Fonte de corpo/parágrafos: "Inter" (Google Font).
> - Importar as duas do Google Fonts.
>
> === COMPONENTES E PADRÕES VISUAIS ===
> - Botões primários em formato PÍLULA (rounded-full), fundo verde neon (--primary), texto escuro (--primary-foreground), sem sombra pesada — clean.
> - Botões secundários/outline em pílula também, fundo transparente ou --secondary, borda sutil, texto claro.
> - Badge/tag no topo do hero: pequena pílula escura com leve destaque neon, pode incluir estrelas de avaliação (5 estrelas verdes) como no site original.
> - Ícones de checklist: círculo com check verde neon (não texto genérico).
> - Cards com fundo --card, borda sutil --border, cantos arredondados (--radius), e nos cards de destaque (planos, "mais escolhido") aplicar --shadow-neon como glow.
> - Botão flutuante de WhatsApp: mantém verde, mas ajustar o tom pro verde neon da paleta (--neon).
> - Fundo geral do site inteiro é ESCURO (dark mode como padrão único). Todas as seções — hero, cards, planos, FAQ, blog — usam esse fundo escuro com variações sutis de --surface e --surface-elevated, nunca fundo branco ou cinza claro.
> - Textos secundários usam --muted-foreground (cinza esverdeado claro), não cinza puro.
>
> Aplique isso em TODAS as páginas (home, /diagnostico, /planos, /sobre, /blog e cada artigo do blog), incluindo Header, Footer, formulários, tabelas de comparação de planos, e os cards de FAQ. O conteúdo e a estrutura das páginas continuam os mesmos — é só a pele visual que precisa virar essa identidade escura com verde neon.

## Próximos passos (quando houver crédito)

1. Adicionar créditos em https://lovable.dev/settings/billing (workspace "Agência's Lovable").
2. Mandar a mensagem de restyle acima pro projeto `a06edbd4-151e-4819-a474-4cfa7c47116a`.
3. Revisar o preview em https://ar-digital-saude-rascunho.lovable.app.
4. Decidir sobre domínio definitivo (manter `.lovable.app` de rascunho, ou apontar `anarego.com.br` quando estiver satisfeita).
