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

**Revisão de direção (substitui a paleta original bordô/vinho).** A paleta é intencionalmente **restrita**: um verde oliva profundo carrega a identidade, o latão/dourado aparece só em doses mínimas e pontuais, e o resto é neutro. Isso é uma decisão de marca — a referência deixou de ser "salão de festas premium" e passou a ser hospitalidade de alto padrão (Fasano, Rosewood, Six Senses, Aman): tons de matéria natural (folhagem, latão, pedra clara) em vez de cores com conotação de convite de casamento (o bordô/vinho, mesmo bem executado, ainda carregava esse peso cultural).

| Papel | Cor | Hex | Por quê |
|---|---|---|---|
| **Primary** | Verde oliva profundo | `#31473a` | Cor autoral de apoio que carrega a identidade da marca. Um verde de folhagem escura — a mesma família cromática que Aman usa na própria marca — em vez de qualquer cor com conotação romântica/nupcial. Usada em CTAs primários, links de destaque, ícones de numeração. |
| **Primary Hover** | Verde oliva escuro | `#24342b` | Estado de hover/pressed do Primary, e superfície escura "de assinatura" (footer, painel de menu mobile) — o mesmo papel que `bordeaux-900` tinha antes. |
| **Secondary** | Off-white | `#f8f6f2` | Base neutra quente (não um branco frio de hospital). Comunica sofisticação por espaço em branco generoso — o "respiro" que hotéis boutique usam para deixar a arquitetura/fotografia ser protagonista. É o fundo padrão do site. |
| **Accent** | Latão / Dourado | `#b6935c` | Acento **pontual apenas** — bordas finas, ícones, numeração, divisores. Nunca cor dominante nem de texto corrido (ver nota de contraste abaixo). Ainda mais raro do que na paleta anterior: é "um detalhe elegante", não um segundo protagonista. |
| **Background** | Off-white | `#f8f6f2` (`--color-bg`) | Fundo padrão de página. Mesma cor do Secondary — a distinção existe para nomear a função, não para introduzir uma cor nova. |
| **Surface** | Branco | `#ffffff` (`--color-bg-elevated`) | Superfícies elevadas sobre o fundo off-white: cards, header, modais/lightbox. O contraste sutil off-white→branco cria hierarquia sem precisar de sombra pesada. |
| **Text** | Ink / Ink-soft / Ink-on-dark | `#222222` / `#66615a` / `#f8f6f2` | Um cinza-carvão neutro (não mais um marrom quente) — mais próximo da tinta/grafite usada em identidade de arquitetura do que de um tom terroso de convite. `ink` para texto principal, `ink-soft` para texto secundário/legendas, `ink-on-dark` (mesmo tom do off-white) para texto sobre fundos escuros (footer, overlays). |
| **Border** | Hairline neutro / Hairline dourado | `#e5e0d7` / `#b6935c` | Divisores sutis. O hairline neutro é o padrão (cards, tabelas, seções); o hairline dourado é reservado para pontos de destaque intencional (ex. numeração, badges), reforçando o dourado como acento raro. |
| **Success** | Verde-azulado (teal) musgo | `#3b6b6b` | Confirmação (formulário enviado, disponibilidade). Deliberadamente **não** é outro verde próximo do Primary — precisa ser distinguível de "essa é a cor da marca" — por isso pende para teal, ainda dentro de uma família natural/terrosa. |
| **Warning** | Terracota escuro | `#96562c` | Avisos honestos de urgência (ex. "agenda com poucas datas disponíveis" — só quando for fato real, nunca escassez falsa; ver `ESTRATEGIA.md` §6). Terracota permanece — já era suficientemente distinto do bordô e continua distinto do verde. |

### Notas de uso

- **Dourado nunca é cor de texto corrido.** Contraste `#b6935c` sobre `#f8f6f2` ≈ **2,7:1** — abaixo do mínimo AA mesmo para texto grande (3:1). Uso exclusivo: ícones (`stroke`/`fill` decorativo, sempre `aria-hidden`), bordas finas, numeração — nunca a única forma de transmitir informação.
- **Verde oliva é a cor "acionável"** — todo elemento primário de interação (CTA, link ativo, foco de marca) usa Primary, não dourado. Isso mantém o dourado raro e, por isso, elegante — ainda mais do que na versão anterior da paleta.
- **Sem gradientes decorativos.** Fundos de Hero, cards de galeria e superfícies grandes usam **cor sólida chapada**, nunca um gradiente multi-tom simulando iluminação/profundidade fotográfica. A única exceção são véus de opacidade de uma única cor (ex. legibilidade de texto sobre uma superfície), que são máscara funcional, não decoração.
- **Sombras extremamente discretas.** Hierarquia se comunica com espaço em branco e linha fina (hairline), não com `box-shadow` pronunciado — ver tokens de elevação em `tokens.css` (opacidades entre 0,05 e 0,09).
- Success/Warning seguem o mesmo padrão de par "soft + strong" do Primary, para uso em badges e alertas com fundo tintado e texto de alto contraste.

### CSS Variables

```css
:root {
  /* Primary — verde oliva profundo */
  --color-primary: #31473a;
  --color-primary-hover: #24342b;
  --color-primary-soft: #e3e8e2;

  /* Secondary — base off-white */
  --color-cream: #f8f6f2;
  --color-cream-soft: #fbfaf7;
  --color-white: #ffffff;

  /* Accent — latão/dourado (uso pontual, "um detalhe elegante") */
  --color-gold: #b6935c;
  --color-gold-soft: #d8c39d;

  /* Text */
  --color-ink: #222222;
  --color-ink-soft: #66615a;
  --color-ink-on-dark: #f8f6f2;

  /* Border */
  --color-border: #e5e0d7;
  --color-border-accent: var(--color-gold);

  /* Success 🆕 (ainda não implementado em componente algum) */
  --color-success: #3b6b6b;
  --color-success-soft: #e1eaea;
  --color-success-strong: #1f3d3d;

  /* Warning 🆕 (ainda não implementado em componente algum) */
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
  --color-accent: var(--color-primary);
  --color-accent-strong: var(--color-primary-hover);
  --color-accent-soft: var(--color-primary-soft);
  --color-on-accent: var(--color-cream);
}
```

### Contraste (WCAG 2.1)

| Par | Contraste | Nível |
|---|---|---|
| `ink` sobre `cream` (texto principal) | 14,7:1 | AAA |
| `ink-soft` sobre `cream` (texto secundário) | 5,7:1 | AA |
| `primary` sobre `cream` (links/títulos) | 9,3:1 | AAA |
| `white` sobre `primary` (botão primário) | 10,0:1 | AAA |
| `ink-on-dark` (off-white) sobre `primary-hover` (footer) | 12,2:1 | AAA |
| `white` sobre `success` (badge sólido) | 6,0:1 | AA |
| `warning-strong` sobre `warning-soft` (badge) | 7,5:1 | AAA |
| `white` sobre `warning` (botão/badge sólido) | 5,7:1 | AA |
| `gold` sobre `cream` (texto) | 2,7:1 | **Reprovado — não usar como texto** |

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

- **Anatomia:** retangular de cantos discretos (`--radius-sm`, não mais pill — arquitetura contemporânea prefere linhas retas a formas 100% arredondadas), altura mínima `--tap-target-min` (44px), padding `--space-sm` × `--space-lg`, ícone opcional à esquerda.
- **Variantes:**
  - `Primary` — fundo `--color-accent` (verde oliva), texto `--color-on-accent` (off-white). Ação principal (WhatsApp, CTA de conversão). Hover troca para `--color-accent-strong`, não só levanta.
  - `Secondary` — transparente, borda `--color-accent`, texto `--color-accent-strong`. Ação alternativa. Hover preenche sutilmente com `currentColor` a 8% de opacidade (não muda de cor abruptamente).
  - `Gold-outline` — transparente, borda `--color-gold`, texto `--color-accent-strong`. Reservado para contextos de menor ênfase (footer) — reforça o dourado como acento raro, "um detalhe elegante".
- **Hover:** `translateY(-1px)` + preenchimento/troca de tom (ver variantes acima), `--duration-fast`/`--duration-base`.
- **Focus:** anel `:focus-visible` em `--color-focus`, nunca removido.
- **Disabled:** opacidade 0.5, `cursor: not-allowed`, sem hover.

### Cards

- **Card genérico:** fundo `--color-bg-elevated`, `--radius-md`, `--shadow-sm`, padding `--space-lg`.
- **Card de evento** (`.event-card` — Casamentos/Debutantes/Corporativo/Aniversários): imagem `aspect-ratio: 4/3`, `--radius-lg`, hover eleva (`--shadow-lg` + `translateY(-4px)`). É o componente de maior peso visual da Home — a foto/imagem é sempre protagonista, texto mínimo (título + 1 gancho).

### Navbar

- Header `sticky` (ou `fixed` transparente sobre o Hero na Home — ver `.site-header--overlay`), fundo `--color-bg-elevated`, hairline inferior `--color-border` (não sombra), altura mínima 72px — encolhe para 60px quando o header transparente vira sólido no scroll.
- Menu horizontal ≥1280px (Desktop) em versalete rastreada; abaixo disso (incluindo Notebook), menu hambúrguer em overlay full-screen — sete itens em versalete não cabem com folga a partir de 1024px.
- Link ativo/hover: sublinhado de 1px que "desenha" da esquerda (`scaleX`), não uma borda estática — evita o hover genérico de framework CSS.
- CTA de WhatsApp sempre visível no header, em qualquer breakpoint — nunca escondido atrás do menu; é discreto (outline, versalete), a logo continua sendo o elemento de maior peso da barra.

### Footer

- Fundo `--color-accent-strong` (verde oliva escuro), texto `--color-ink-on-dark`. É a única superfície do site com fundo escuro — reforça a cor de apoio como "assinatura" no fechamento de cada página.
- Grid de 3 colunas (contato / redes sociais / CTA) em tablet+; empilhado em mobile.

### Galeria

- Grid responsivo (2 colunas mobile → 4 colunas tablet+), itens quadrados (`aspect-ratio: 1/1`), `object-fit: cover`.
- Hover: leve zoom da imagem (`scale(1.04)`), nunca do container (evita reflow/corte abrupto).
- Lightbox: overlay escuro (`rgba(ink, 0.92)`), navegação prev/next e fechar sempre com alvo de toque ≥44px, `aria-label` em todos os controles.

### FAQ

- `<details>/<summary>` nativo — zero JavaScript, acessível por padrão (funciona com teclado e leitor de tela sem esforço extra).
- Indicador visual `+`/`−` via `::after`, nunca a única pista de estado (o navegador já expõe `aria-expanded` nativamente via `<details>`).

### Depoimentos

- Citação em Fraunces itálico, autor em `--color-accent` (verde oliva), metadados (tipo de evento) em `ink-soft`.
- **Estado placeholder obrigatório** enquanto não houver depoimentos reais: borda tracejada em `--color-gold`, nunca fabricar nome ou depoimento fictício (regra herdada de `components.css`).

### Badges

- Pill pequeno, fundo `--color-accent-soft`, texto `--color-accent-strong`, `--step--1`, peso 600.
- Variantes semânticas usam o mesmo padrão com os pares `success-soft`/`success-strong` e `warning-soft`/`warning-strong`.

### Ícones

- Sprite SVG único (`assets/images/icons/icons.svg`), line icons finos (`stroke-width: 1.6–1.8`, `stroke-linecap: round`), sem preenchimento sólido exceto detalhes pequenos (ex. bolinha do Instagram).
- Cor via `currentColor` — herda do contexto (ink, verde oliva ou off-white conforme o fundo).
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
| **Notebook** | `1024px – 1279px` | Ainda usa o menu hambúrguer (o menu horizontal completo só aparece em Desktop, ≥1280px — ver `.site-nav` em `layout.css`); grids de 3–4 colunas |
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
