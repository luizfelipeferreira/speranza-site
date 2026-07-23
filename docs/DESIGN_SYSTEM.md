# Speranza Eventos — Design System

**Status:** Fonte de verdade da identidade visual. Toda decisão de UI do projeto (páginas, componentes, novas seções) deve derivar deste documento.
**Base:** [ESTRATEGIA.md](ESTRATEGIA.md) (posicionamento, tom de voz, direção visual) + `assets/css/tokens.css` (implementação atual dos tokens).
**Escopo deste documento:** especificação de identidade visual. Não altera nenhum `.html`/`.css` existente — é a referência para a próxima fase de implementação.

---

## Princípio de marca

Speranza Eventos vende **sofisticação acessível** em Jundiaí-SP, para um público de classe média/média-alta que já conhece — ou vai pesquisar — o padrão de salões de festas genéricos da região. Duas armadilhas guiam toda decisão visual abaixo:

1. **Fugir do clichê "dourado + branco" de salão de festas** — o padrão visual saturado do segmento, que hoje comunica "genérico", não "premium".
2. **Fugir da estética de template WordPress de casamento** — fontes script/cursivas, ícones grandes demais, gradientes decorativos, tudo centralizado. Essa estética é o oposto de sofisticação contemporânea.

A referência real é **hotelaria boutique e arquitetura de interiores de alto padrão**: paleta contida, tipografia com peso editorial, espaço em branco generoso, motion discreto. Luxo se comunica por respiro visual e por poucas decisões bem executadas — não por densidade de elementos decorativos.

---

## Cores

A paleta é intencionalmente **restrita**: uma cor de apoio autoral (vinho/bordô) carrega a identidade, o dourado aparece só em doses pequenas e pontuais, e o resto é neutro. Isso é uma decisão de marca, não uma limitação — é o que separa Speranza do salão de festas genérico "dourado por toda parte".

| Papel | Cor | Hex | Por quê |
|---|---|---|---|
| **Primary** | Bordô / Vinho | `#6e1b2e` | Cor autoral de apoio que carrega a identidade da marca. Substitui o dourado-dominante clichê do segmento por uma cor mais rara em salões de festa, com profundidade emocional (calor, tradição, elegância) sem cair em "romance genérico". Usada em CTAs primários, links de destaque, ícones de numeração. |
| **Secondary** | Creme / Off-white | `#f7f1e8` | Base neutra quente (não um branco frio de hospital). Comunica sofisticação por espaço em branco generoso — o "respiro" que hotéis boutique usam para deixar a arquitetura/fotografia ser protagonista. É o fundo padrão do site. |
| **Accent** | Dourado | `#b08d57` | Acento **pontual apenas** — bordas finas, ícones, numeração de passos, divisores. Nunca cor dominante nem de texto corrido (ver nota de contraste abaixo). É o que resta do "dourado de salão de festas" depois de domesticado: um traço fino, não um banho de cor. |
| **Background** | Creme | `#f7f1e8` (`--color-bg`) | Fundo padrão de página. Mesma cor do Secondary — o Secondary *é* o Background em uso; a distinção existe para nomear a função, não para introduzir uma cor nova. |
| **Surface** | Branco | `#ffffff` (`--color-bg-elevated`) | Superfícies elevadas sobre o fundo creme: cards, header, modais/lightbox. O contraste sutil creme→branco cria hierarquia sem precisar de sombra pesada. |
| **Text** | Ink / Ink-soft / Ink-on-dark | `#2a2320` / `#5c5450` / `#f7f1e8` | Nunca preto puro — um marrom-carvão quente que combina com a paleta terrosa em vez de um preto frio de interface de software. `ink` para texto principal, `ink-soft` para texto secundário/legendas, `ink-on-dark` (mesmo tom do creme) para texto sobre fundos escuros (footer, overlays). |
| **Border** | Hairline neutro / Hairline dourado | `#e4dccc` / `#b08d57` | Divisores sutis. O hairline neutro é o padrão (cards, tabelas, seções); o hairline dourado é reservado para pontos de destaque intencional (ex. numeração de passos, badges), reforçando o dourado como acento raro, não onipresente. |
| **Success** | Verde terroso | `#3f6c4e` | Confirmação (formulário enviado, disponibilidade). Um verde musgo/floresta, não o verde saturado de UI genérica — mantém a paleta terrosa mesmo em estado de feedback. |
| **Warning** | Terracota escuro | `#96562c` | Avisos honestos de urgência (ex. "agenda com poucas datas disponíveis" — só quando for fato real, nunca escassez falsa; ver `ESTRATEGIA.md` §6). Terracota em vez de âmbar/amarelo de alerta genérico, porque o tom continua pertencendo à mesma família cromática do site. |

### Notas de uso

- **Dourado nunca é cor de texto corrido.** Contraste `#b08d57` sobre `#f7f1e8` ≈ **2,8:1** — abaixo do mínimo AA mesmo para texto grande (3:1). Uso exclusivo: ícones (`stroke`/`fill` decorativo, sempre `aria-hidden`), bordas finas, numeração — nunca a única forma de transmitir informação.
- **Bordô é a cor "acionável"** — todo elemento primário de interação (CTA, link ativo, foco de marca) usa bordô, não dourado. Isso mantém o dourado raro e, por isso, elegante.
- Success/Warning seguem o mesmo padrão de par "soft + strong" do bordô (`accent-soft`/`accent-strong`), para uso em badges e alertas com fundo tintado e texto de alto contraste — ver tokens abaixo.

### CSS Variables

Os tokens abaixo já existem em `assets/css/tokens.css`; os marcados com 🆕 são extensões propostas para a próxima fase de implementação (ainda não presentes no arquivo).

```css
:root {
  /* Primary — bordô */
  --color-bordeaux-900: #3c0f1a;
  --color-bordeaux-700: #6e1b2e;
  --color-bordeaux-600: #7f2236;
  --color-bordeaux-500: #8c2a40;
  --color-bordeaux-100: #f3e2e6;

  /* Secondary — base creme */
  --color-cream: #f7f1e8;
  --color-cream-soft: #fbf8f3;
  --color-white: #ffffff;

  /* Accent — dourado (uso pontual) */
  --color-gold: #b08d57;
  --color-gold-soft: #d9c49a;

  /* Text */
  --color-ink: #2a2320;
  --color-ink-soft: #5c5450;
  --color-ink-on-dark: #f7f1e8;

  /* Border 🆕 */
  --color-border: #e4dccc;
  --color-border-accent: var(--color-gold);

  /* Success 🆕 */
  --color-success: #3f6c4e;
  --color-success-soft: #e2ede4;
  --color-success-strong: #24402e;

  /* Warning 🆕 */
  --color-warning: #96562c;
  --color-warning-soft: #f3e6d8;
  --color-warning-strong: #6b3c1c;

  /* Estado — uso mínimo (foco, erro de formulário) */
  --color-focus: #2a6bd9;
  --color-error: #b3261e;

  /* Papéis semânticos */
  --color-bg: var(--color-cream);
  --color-bg-elevated: var(--color-white);
  --color-text: var(--color-ink);
  --color-text-soft: var(--color-ink-soft);
  --color-accent: var(--color-bordeaux-700);
  --color-accent-strong: var(--color-bordeaux-900);
  --color-accent-soft: var(--color-bordeaux-100);
  --color-on-accent: var(--color-cream);
}
```

### Contraste (WCAG 2.1)

| Par | Contraste | Nível |
|---|---|---|
| `ink` sobre `cream` (texto principal) | 13,7:1 | AAA |
| `ink-soft` sobre `cream` (texto secundário) | 6,6:1 | AA |
| `bordeaux-700` sobre `cream` (links/títulos) | 10,1:1 | AAA |
| `white` sobre `bordeaux-700` (botão primário) | 11,3:1 | AAA |
| `ink-on-dark` (creme) sobre `bordeaux-900` (footer) | 14,7:1 | AAA |
| `success-strong` sobre `success-soft` (badge) | 9,5:1 | AAA |
| `warning-strong` sobre `warning-soft` (badge) | 7,5:1 | AAA |
| `white` sobre `warning` (botão/badge sólido) | 5,7:1 | AA |
| `gold` sobre `cream` (texto) | 2,8:1 | **Reprovado — não usar como texto** |

---

## Tipografia

**Apenas Google Fonts**, self-hostável posteriormente sem redesenho (mesma lógica de "ponto único de ajuste" já usada em `tokens.css`).

- **Títulos / Hero — [Fraunces](https://fonts.google.com/specimen/Fraunces):** serifada contemporânea de família variável, com presença editorial usada por marcas de hospitalidade boutique. Foge deliberadamente do par "serifada clássica + script" que qualquer convite de casamento genérico usa — Fraunces tem caráter autoral sem parecer convite.
- **Corpo / UI / Botões / Labels — [Manrope](https://fonts.google.com/specimen/Manrope):** sans geométrica com terminações levemente arredondadas — moderna, calorosa, alta legibilidade em pt-BR (bom suporte a acentuação) mesmo em textos longos no mobile.
- **Proibido:** fontes script/cursivas em qualquer contexto (títulos, citações, botões) — é o principal sinal visual de "convite de casamento genérico" que o posicionamento da marca precisa evitar (ver `ESTRATEGIA.md` §5).

### Import de referência

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

```css
--font-heading: "Fraunces", Georgia, "Iowan Old Style", serif;
--font-body: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Escala tipográfica

Fluida via `clamp()`, mobile-first, compatível com a escala `--step` já existente em `tokens.css` — apenas com um nível **Hero** adicionado acima do `--step-4` atual.

| Nível | Token | `clamp()` | Fonte | Peso | Line-height | Uso |
|---|---|---|---|---|---|---|
| Hero 🆕 | `--step-5` | `clamp(2.6rem, 2rem + 3vw, 4.2rem)` | Fraunces | 500 | 1.05 | Headline do hero, uma vez por página |
| H1 | `--step-4` | `clamp(2.2rem, 1.7rem + 2vw, 3.4rem)` | Fraunces | 600 | 1.15 | Título principal de seção/página |
| H2 | `--step-3` | `clamp(1.8rem, 1.5rem + 1.2vw, 2.6rem)` | Fraunces | 600 | 1.15 | Subtítulo de seção |
| H3 | `--step-2` | `clamp(1.44rem, 1.3rem + 0.7vw, 1.9rem)` | Fraunces | 500 | 1.2 | Título de card/bloco |
| Texto | `--step-0` | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` | Manrope | 400 | 1.6 | Corpo de texto corrido |
| Texto pequeno | `--step--1` | `clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem)` | Manrope | 400 | 1.5 | Legendas, metadados (ex. autor de depoimento) |
| Botões | `--step-0` | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` | Manrope | 600 | 1 | Texto de `.btn`, CTAs |
| Labels | `--step--1` | `clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem)` | Manrope | 600, uppercase, `letter-spacing: 0.04em` | 1.2 | Rótulos de formulário, badges, categorias de galeria |

```css
--step--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);
--step-0: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--step-1: clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem);
--step-2: clamp(1.44rem, 1.3rem + 0.7vw, 1.9rem);
--step-3: clamp(1.8rem, 1.5rem + 1.2vw, 2.6rem);
--step-4: clamp(2.2rem, 1.7rem + 2vw, 3.4rem);
--step-5: clamp(2.6rem, 2rem + 3vw, 4.2rem); /* 🆕 Hero */

--line-height-base: 1.6;
--line-height-heading: 1.15;
```

---

## Grid

Reaproveita integralmente os tokens de espaçamento e container já implementados em `tokens.css`/`layout.css`.

- **Container máximo:** `--container-max: 72rem` (1152px) — largura de leitura confortável, evita linhas de texto longas demais em telas ultra-wide.
- **Sistema de 8 pontos:** toda a escala de espaçamento é múltipla de 8px (em `rem`), garantindo ritmo vertical consistente entre seções, cards e componentes.

```css
--space-2xs: 0.25rem;  /* 4px  — ajuste fino (gap de ícone+texto) */
--space-xs:  0.5rem;   /* 8px  — unidade base */
--space-sm:  0.75rem;  /* 12px — gap entre elementos relacionados */
--space-md:  1rem;     /* 16px — padding padrão de componente */
--space-lg:  1.5rem;   /* 24px — padding de card, gap de grid */
--space-xl:  2.5rem;   /* 40px — respiro entre blocos dentro de uma seção */
--space-2xl: 4rem;     /* 64px — padding vertical de seção (mobile) */
--space-3xl: 6rem;     /* 96px — padding vertical de seção (tablet+) */
```

### Padding de container por breakpoint

| Breakpoint | `--container-padding` | Padding vertical de seção (`section`) |
|---|---|---|
| Mobile (<480px) | `--space-md` (16px) | `--space-2xl` (64px) |
| Tablet (480–1023px) | `--space-md` (16px) | `--space-2xl` → `--space-3xl` a partir de 768px |
| Notebook (1024–1279px) | `--space-md` (16px) | `--space-3xl` (96px) |
| Desktop (≥1280px) | `--space-md` (16px), limitado pelo `--container-max` | `--space-3xl` (96px) |

O padding inline do container permanece fixo (`--space-md`) em todos os breakpoints — é o `--container-max` que cresce/limita a largura, não o padding. Isso evita conteúdo "grudado" na borda em mobile sem exigir um token por breakpoint.

---

## Componentes

Todos os componentes abaixo já têm uma primeira implementação em `assets/css/components.css`, `layout.css` e `gallery.css`. Esta seção formaliza a especificação de referência.

### Botões

- **Anatomia:** pill (`--radius-pill`), altura mínima `--tap-target-min` (44px), padding `--space-sm` × `--space-lg`, ícone opcional à esquerda.
- **Variantes:**
  - `Primary` — fundo `--color-accent` (bordô), texto `--color-on-accent` (creme). Ação principal (WhatsApp, CTA de conversão).
  - `Secondary` — transparente, borda `--color-accent`, texto `--color-accent-strong`. Ação alternativa ("Conheça o espaço").
  - `Gold-outline` — transparente, borda `--color-gold`, texto `--color-accent-strong`. Reservado para contextos de menor ênfase (footer) — reforça o dourado como acento raro.
- **Hover:** `translateY(-1px)`, `--duration-fast`.
- **Focus:** anel `:focus-visible` em `--color-focus`, nunca removido.
- **Disabled:** opacidade 0.5, `cursor: not-allowed`, sem hover.

### Cards

- **Card genérico:** fundo `--color-bg-elevated`, `--radius-md`, `--shadow-sm`, padding `--space-lg`.
- **Card de evento** (`.event-card` — Casamentos/Debutantes/Corporativo/Aniversários): imagem `aspect-ratio: 4/3`, `--radius-lg`, hover eleva (`--shadow-lg` + `translateY(-4px)`). É o componente de maior peso visual da Home — a foto/imagem é sempre protagonista, texto mínimo (título + 1 gancho).

### Navbar

- Header `sticky`, fundo `--color-bg-elevated`, `--shadow-sm`, altura mínima 64px.
- Menu horizontal ≥1024px (Notebook+); abaixo disso, menu hambúrguer em overlay full-screen.
- Link ativo/hover: sublinhado de 2px em `--color-accent` (não muda cor de texto — evita ruído visual).
- CTA de WhatsApp sempre visível no header, em qualquer breakpoint — nunca escondido atrás do menu.

### Footer

- Fundo `--color-accent-strong` (bordô escuro), texto `--color-ink-on-dark`. É a única superfície do site com fundo escuro — reforça o bordô como cor de "assinatura" no fechamento de cada página.
- Grid de 3 colunas (contato / redes sociais / CTA) em tablet+; empilhado em mobile.

### Galeria

- Grid responsivo (2 colunas mobile → 4 colunas tablet+), itens quadrados (`aspect-ratio: 1/1`), `object-fit: cover`.
- Hover: leve zoom da imagem (`scale(1.04)`), nunca do container (evita reflow/corte abrupto).
- Lightbox: overlay escuro (`rgba(ink, 0.92)`), navegação prev/next e fechar sempre com alvo de toque ≥44px, `aria-label` em todos os controles.

### FAQ

- `<details>/<summary>` nativo — zero JavaScript, acessível por padrão (funciona com teclado e leitor de tela sem esforço extra).
- Indicador visual `+`/`−` via `::after`, nunca a única pista de estado (o navegador já expõe `aria-expanded` nativamente via `<details>`).

### Depoimentos

- Citação em Fraunces itálico, autor em bordô, metadados (tipo de evento) em `ink-soft`.
- **Estado placeholder obrigatório** enquanto não houver depoimentos reais: borda tracejada em `--color-gold`, nunca fabricar nome ou depoimento fictício (regra herdada de `components.css`).

### Badges

- Pill pequeno, fundo `--color-accent-soft`, texto `--color-accent-strong`, `--step--1`, peso 600.
- Variantes semânticas usam o mesmo padrão com os pares `success-soft`/`success-strong` e `warning-soft`/`warning-strong`.

### Ícones

- Sprite SVG único (`assets/images/icons/icons.svg`), line icons finos (`stroke-width: 1.6–1.8`, `stroke-linecap: round`), sem preenchimento sólido exceto detalhes pequenos (ex. bolinha do Instagram).
- Cor via `currentColor` — herda do contexto (ink, bordô ou creme conforme o fundo).
- Tamanho padrão 18–24px; nunca ícones grandes decorativos (evita a estética de template genérico).
- Sempre `aria-hidden="true"` quando acompanhado de texto visível; `aria-label` no elemento pai quando o ícone é o único conteúdo (ex. redes sociais do footer).

---

## Motion

Motion é **sutil e funcional** — nunca decorativo por si só. Isso é uma decisão de marca (ver `ESTRATEGIA.md` §5: "sofisticação pede discrição, não efeitos").

```css
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--duration-fast: 150ms;  /* hover, foco, toggle */
--duration-base: 300ms;  /* transições de estado (sombra, cor) */
--duration-slow: 500ms;  /* scroll reveal */
```

- **Hover:** deslocamento vertical pequeno (`translateY(-1px)` em botões, `-4px` em cards) + mudança de sombra. Nunca escala agressiva, nunca rotação.
- **Scroll reveal:** fade + slide de 16px (`[data-reveal]`), acionado via `IntersectionObserver`, `--duration-slow`. Conteúdo **nunca** fica preso em `opacity: 0` sem JS (fallback `.no-js` e `prefers-reduced-motion` sempre visíveis).
- **Focus:** transição instantânea de outline (sem `transition-delay`) — foco precisa aparecer imediatamente, nunca ser "suavizado" a ponto de atrasar a percepção.
- **Estados:** toda transição de estado (hover → active → disabled) usa `--ease-standard` para manter a mesma "personalidade" de movimento em todo o site.

---

## Responsividade

| Nome | Faixa | Uso típico |
|---|---|---|
| **Mobile** | `< 480px` | Smartphones — layout de coluna única, menu hambúrguer, galeria 2 colunas |
| **Tablet** | `480px – 1023px` | Tablets e mobile grande — grids de 2–3 colunas, `section` já usa padding `--space-3xl` a partir de 768px |
| **Notebook** | `1024px – 1279px` | Menu horizontal completo passa a aparecer (breakpoint atual de `.site-nav` em `layout.css`), grids de 3–4 colunas |
| **Desktop** | `≥ 1280px` | Largura de conteúdo estabiliza no `--container-max` (72rem); ganho de espaço vira margem lateral, não mais colunas |

Mobile-first em toda a base: estilos default assumem a tela menor, `min-width` adiciona complexidade progressivamente (padrão já seguido em `layout.css`/`gallery.css`).

---

## Acessibilidade

- **Contraste:** mínimo AA (4,5:1 texto normal, 3:1 texto grande/UI) em todo par texto/fundo — ver tabela de contraste na seção Cores. Dourado nunca é usado como cor de texto.
- **Foco:** `:focus-visible` com anel de 3px em `--color-focus`, `outline-offset: 2px`, nunca removido via `outline: none` sem substituto.
- **ARIA:** landmarks nativos (`<header>`, `<nav aria-label="…">`, `<main>`, `<footer>`) em vez de `<div>` genérico; `aria-current="page"` no link ativo do menu; `aria-expanded`/`aria-controls` no toggle do menu mobile; `aria-label` em todo botão/link que só tem ícone.
- **Navegação por teclado:** toda ação de mouse (hover de card, abrir lightbox, expandir FAQ) tem equivalente por teclado; ordem de tabulação segue a ordem visual; alvo de toque mínimo 44×44px em qualquer elemento interativo.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` remove toda animação/transição não essencial e força `scroll-behavior: auto` — já implementado em `base.css` e `animations.css`, deve ser replicado em qualquer motion novo.

---

## Performance

Boas práticas para o stack estático (HTML5/CSS3/JS vanilla, sem build step, hospedagem Railway):

- **Lazy loading:** `loading="lazy"` nativo em toda imagem abaixo da dobra (galeria, cards secundários); hero e logo carregam eager (são LCP candidates).
- **WebP:** todas as imagens em WebP com fallback `<picture>`/JPEG apenas se necessário para compatibilidade; meta de LCP < 2.5s (já definida em `ESTRATEGIA.md` §7).
- **Preload:** fontes críticas (Fraunces peso 600, Manrope peso 400/600) e a imagem do hero via `<link rel="preload">`, para evitar FOIT/CLS no maior elemento visível.
- **Preconnect:** `fonts.googleapis.com` e `fonts.gstatic.com` (ver snippet de import acima); qualquer domínio de terceiro adicional (ex. Google Maps embed) só entra em preconnect se for usado acima da dobra.
- **Critical CSS:** manter a separação modular já existente — `tokens.css` + `base.css` + `layout.css` carregam em toda página (pequenos, cacheáveis, definem o essencial acima da dobra); `components.css`/`gallery.css`/CSS específico de página (`home.css`, `landing.css`, `espaco.css`, `contato.css`) só carrega na página que precisa. Evitar um bundle único — o modelo atual já está correto, apenas manter a disciplina ao adicionar CSS novo.
