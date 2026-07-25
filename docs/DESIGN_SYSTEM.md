# Speranza Eventos — Design System

**Status:** fonte única de verdade da identidade visual e de interface. Toda decisão de UI do projeto — páginas novas, componentes, ajustes de copy visual — deriva deste documento, não do gosto pontual de quem está codando naquele dia.
**Base:** [ESTRATEGIA.md](ESTRATEGIA.md) (posicionamento, público, tom de voz) + `assets/css/tokens.css` (implementação atual dos tokens abaixo).
**Como usar:** se uma decisão de UI não está coberta aqui, ela não deve ser inventada ad-hoc — volte a este documento, decida o princípio, documente, só então implemente.

---

# Conceito

**Speranza não é um salão de festas. É um espaço premium para experiências.**

Essa frase não é só uma escolha de vocabulário — ela previne uma cadeia inteira de decisões visuais ruins. "Salão de festas" carrega um padrão estético já saturado no mercado brasileiro: dourado e branco em toda superfície, colunas gregas, fontes cursivas, tudo simétrico e centralizado, luz quente amarelada, referência estética de convite de casamento genérico. Esse padrão hoje **comunica "genérico"**, não "premium" — mesmo quando o espaço físico por trás dele é excelente. Um visitante que já visitou dez sites de salão de festas na região reconhece esse padrão em meio segundo e o associa ao que já viu.

A referência real do Speranza é outra: **hotelaria boutique, arquitetura contemporânea, interiores minimalistas, hospitalidade de alto padrão.** Pense em como uma Aman, uma Rosewood ou um Fasano constroem a própria comunicação visual — não vendem "festa", vendem um padrão de experiência. Paleta contida. Tipografia com peso editorial, não decorativo. Espaço em branco generoso, porque luxo se comunica por respiro, não por densidade de elementos. Motion discreto, quase imperceptível. E acima de tudo: **a fotografia do espaço é a protagonista — a cor só apoia a experiência**, nunca compete com ela.

Isso não é estética pela estética. Conecta direto com o posicionamento estratégico do Speranza (ver `ESTRATEGIA.md` §3): "sofisticação de espaço de grande cidade, sem sair de Jundiaí". Se o visual do site parece um salão de festas regional qualquer, essa promessa desmorona antes mesmo do primeiro contato via WhatsApp. Se o visual parece hospitalidade de alto padrão, a promessa já está confirmada visualmente antes de qualquer palavra ser lida.

**Na prática, essa direção proíbe:**
- Dourado e branco como paleta dominante (ver seção Paleta oficial — o acento é raro, não estrutural).
- Fontes script/cursivas em qualquer contexto.
- Ícones grandes decorativos, centralizados, "flat design" genérico de landing page.
- Gradientes decorativos simulando luz/profundidade.
- Grade uniforme de cards idênticos com sombra padrão — a marca de qualquer gerador automático de site.
- Composição inteiramente centralizada, sem tensão nem hierarquia editorial.

**E exige:**
- Fotografia (quando existir) sempre como elemento dominante da composição, nunca substituída por ilustração decorativa.
- Composição assimétrica e editorial — como uma revista de arquitetura, não um slide de apresentação.
- Decisões visuais deliberadas e escassas, em vez de muitos elementos decorativos médios.

---

# Personalidade

Se a marca fosse uma pessoa, seria isto — e cada atributo tem uma implicação de design direta, não é só um adjetivo bonito:

**Sofisticado**
Decisões visuais com intenção, nunca "porque é bonito". Paleta contida, tipografia com peso editorial (Fraunces nos títulos), ausência de elementos decorativos gratuitos. Sofisticação aqui não é opulência — é precisão: cada elemento na tela justifica sua presença.

**Acolhedor**
Sofisticação sem ficar fria ou intimidadora — o Speranza atende famílias de Jundiaí e região, não um público que precisa ser impressionado com distância. Isso se traduz em: tom de voz caloroso no copy (ver `ESTRATEGIA.md` §3, "você" em vez de "V.Sa."), off-white quente em vez de branco/cinza frio de clínica, cantos discretamente arredondados em vez de retos-cortantes em todo componente.

**Contemporâneo**
Nada que pareça "convite de casamento de 2010". Tipografia atual (Fraunces é uma serifada variável contemporânea, não uma clássica engessada), grid assimétrico em vez de simétrico tradicional, motion sutil típico de produto digital bem-feito, não de site institucional datado.

**Atemporal**
O oposto de modismo. Evita-se qualquer elemento visual que grite "tendência de 2024" e vá parecer datado em dois anos — por isso a paleta é neutra e natural (sage/champagne/off-white), não uma cor de tendência sazonal; por isso a tipografia é clássica-com-caráter, não uma fonte experimental do momento.

**Elegante**
Menos é mais, aplicado literalmente: um CTA sólido + um link de texto, não uma fileira de botões. Uma foto grande bem escolhida, não uma grade de doze fotos médias. Uma linha fina em champagne como assinatura visual recorrente, não um elemento decorativo em cada seção.

**Leve**
Espaço em branco generoso, hierarquia clara, ritmo de leitura confortável. "Leve" também é performance: motion nunca trava a rolagem, nenhuma seção satura a tela com informação. O visitante nunca sente que está "trabalhando" para entender a página.

---

# Paleta oficial

Identidade **"Soft Sage"**: grandes áreas em off-white deixam a arquitetura e a fotografia respirarem; o sage aparece só em pontos funcionais (botões, links, estados ativos); o champagne é reservado a detalhes — linhas, ícones, numerais, divisores. **O sage nunca deve dominar a interface.** Ele marca "isto é clicável / isto está ativo", não "isto é a cor da marca estampada em tudo".

| Papel | Cor | Hex | Quando usar |
|---|---|---|---|
| **Primary** | Sage | `#7A867B` | Só em elementos de ação: fundo de botão primário, borda/ícone em estado ativo, foco de marca. Nunca como fundo de seção, nunca preenchendo áreas grandes. |
| **Primary Hover** | Sage escuro | `#667264` | Hover/pressed do Primary. Também a **única superfície escura do site** (footer, painel de menu mobile) e a cor seleta para texto/link pequeno sobre fundo claro — o sage claro reprova contraste em texto (ver Acessibilidade). |
| **Accent** | Champagne | `#C2A36B` | Acento pontual e raro: linha vertical de abertura de seção, numeração editorial, hairline de destaque, ícone em estado neutro. Nunca cor de texto corrido, nunca fundo de área grande. |
| **Background** | Off-white | `#F8F7F4` | Fundo padrão de toda página. A grande área neutra sobre a qual tudo o resto ganha destaque. |
| **Surface** | Branco | `#FFFFFF` | Superfícies elevadas: cards, header quando sólido, modais/lightbox. O contraste sutil off-white → branco já cria hierarquia, sem precisar de sombra. |
| **Surface Alt** | Off-white profundo | `#F2F1EC` | Segunda tonalidade de off-white, ligeiramente mais funda — para alternar entre seções adjacentes (dá ritmo vertical sem borda nem sombra nova). |
| **Text** | Ink | `#242424` | Texto principal. Um cinza-carvão neutro, não preto puro — mais próximo de tinta/grafite de identidade arquitetônica do que de um preto digital duro. |
| **Text Soft** | Ink soft | `#66645F` | Texto secundário: legendas, metadados, subheadline, parágrafo de apoio. |
| **Border** | Hairline | `#E6E3DC` | Divisor sutil padrão — cards, seções, tabelas. Ver seção Bordas para a variante em champagne. |

**Regra de ouro:** ao decidir a cor de qualquer elemento novo, pergunte primeiro "isto é uma ação, uma superfície ou um detalhe?" — ação usa sage, superfície usa a família off-white/branco, detalhe usa champagne com extrema moderação. Se a resposta não for nenhuma dessas três, provavelmente o elemento não deveria ter cor própria — deve herdar `Text`/`Text Soft`.

### Cores de estado (uso restrito a feedback, não a marca)

| Papel | Cor | Hex | Uso |
|---|---|---|---|
| Success | Teal musgo | `#3B6B6B` | Confirmação (formulário enviado, disponibilidade) — deliberadamente distinto do sage, para não ser lido como "cor da marca". |
| Warning | Terracota | `#96562C` | Avisos honestos de urgência real (ex. "poucas datas disponíveis" — só se for fato, nunca escassez falsa). |
| Focus | Azul | `#2A6BD9` | Anel de foco de teclado — único lugar do site com uma cor fria, por convenção de acessibilidade. |
| Error | Vermelho | `#B3261E` | Erro de formulário curto. |

### CSS Variables

```css
:root {
  /* Primary — sage */
  --color-primary: #7a867b;
  --color-primary-hover: #667264;
  --color-primary-soft: #e7eae5;

  /* Base — off-white */
  --color-cream: #f8f7f4;        /* Background */
  --color-cream-soft: #fbfaf9;
  --color-white: #ffffff;        /* Surface */
  --color-surface-alt: #f2f1ec;  /* Surface Alt */

  /* Accent — champagne (uso pontual: linhas, ícones, numerais, divisores) */
  --color-gold: #c2a36b;
  --color-gold-soft: #d9c49f;

  /* Text */
  --color-ink: #242424;          /* Text */
  --color-ink-soft: #66645f;     /* Text Soft */
  --color-ink-on-dark: #f8f7f4;

  /* Border */
  --color-border: #e6e3dc;
  --color-border-accent: var(--color-gold);

  /* Estado */
  --color-success: #3b6b6b;
  --color-success-soft: #e1eaea;
  --color-success-strong: #1f3d3d;
  --color-warning: #96562c;
  --color-warning-soft: #f3e6d8;
  --color-warning-strong: #6b3c1c;
  --color-focus: #2a6bd9;
  --color-error: #b3261e;

  /* Papéis semânticos — o resto do CSS consome estes, não os hex direto */
  --color-bg: var(--color-cream);
  --color-bg-elevated: var(--color-white);
  --color-bg-alt: var(--color-surface-alt);
  --color-text: var(--color-ink);
  --color-text-soft: var(--color-ink-soft);
  --color-accent: var(--color-primary);
  --color-accent-strong: var(--color-primary-hover);
  --color-accent-soft: var(--color-primary-soft);
  --color-on-accent: var(--color-cream);
}
```

---

# Tipografia

**Apenas Google Fonts**, self-hostável depois sem redesenho.

### Fontes

- **Títulos / Hero — [Fraunces](https://fonts.google.com/specimen/Fraunces):** serifada contemporânea de família variável, com presença editorial de marca de hospitalidade boutique. Foge do par "serifada clássica + script" de convite de casamento genérico.
- **Corpo / UI / Botões / Labels — [Manrope](https://fonts.google.com/specimen/Manrope):** sans geométrica de terminações levemente arredondadas — moderna, calorosa, boa legibilidade em pt-BR mesmo em textos longos no mobile.
- **Proibido:** fontes script/cursivas em qualquer contexto (títulos, citações, botões) — o principal sinal visual de "convite de casamento genérico" que a marca precisa evitar.

```css
--font-heading: "Fraunces", Georgia, "Iowan Old Style", serif;
--font-body: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Escala

Fluida via `clamp()`, mobile-first — cresce com a viewport sem *breakpoints* fixos por tamanho de fonte.

```css
--step--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);
--step-0:  clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--step-1:  clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem);
--step-2:  clamp(1.44rem, 1.3rem + 0.7vw, 1.9rem);
--step-3:  clamp(1.8rem, 1.5rem + 1.2vw, 2.6rem);
--step-4:  clamp(2.2rem, 1.7rem + 2vw, 3.4rem);
--step-5:  clamp(2.6rem, 2rem + 3vw, 4.2rem); /* Hero — uma vez por página */
```

### Hierarquia, peso e altura de linha

| Nível | Token | Fonte | Peso | Line-height | Uso |
|---|---|---|---|---|---|
| Hero | `--step-5` | Fraunces | 500 | 1.05 | Headline do hero, uma vez por página |
| H1 | `--step-4` | Fraunces | 600 | 1.15 | Título principal de seção/página |
| H2 | `--step-3` | Fraunces | 600 | 1.15 | Subtítulo de seção |
| H3 | `--step-2` | Fraunces | 500 | 1.2 | Título de card/bloco |
| Texto | `--step-0` | Manrope | 400 | 1.6 | Corpo de texto corrido |
| Texto pequeno | `--step--1` | Manrope | 400 | 1.5 | Legendas, metadados |
| Botões | fixo `1.1875rem` | Manrope | 700 | 1 | Texto de `.btn` — ver Botões para o porquê do tamanho fixo |
| Labels/Eyebrow | `--step--1` | Manrope | 600, uppercase, `letter-spacing: 0.24em` | 1.2 | Rótulo acima de título de seção, categorias de galeria |

**Regra prática:** quanto menor o texto, maior o peso de contraste que ele precisa carregar (letter-spacing, uppercase, peso 600+) para não parecer "esquecido" na hierarquia — é assim que um eyebrow de 13px ainda lê como intencional ao lado de um H1 gigante.

### Espaçamento entre letras

Só aplicar `letter-spacing` positivo em texto **pequeno e uppercase** (eyebrows, labels, navegação, botão do header) — entre `0.04em` e `0.24em` conforme o peso visual desejado. Nunca em corpo de texto normal ou títulos grandes: letter-spacing positivo em texto grande em Fraunces briga com o desenho da própria fonte.

### Comprimento ideal de linha

Texto corrido deve ficar entre **45–75 caracteres por linha** (a medida clássica de legibilidade) — na prática do código, isso é controlado por `max-width` em unidades `ch`, não em `%` ou `px` fixo, porque `ch` acompanha o tamanho da fonte:

| Elemento | `max-width` | Por quê |
|---|---|---|
| H1 do Hero | `16ch` | Título curto, força quebra de linha deliberada, nunca uma linha corrida gigante |
| Subheadline | `38ch` | Frase de apoio, uma ou duas linhas |
| Parágrafo de corpo | `46–60ch` | Zona de conforto de leitura contínua |
| Título de seção (H2) | `22ch` | Mesmo raciocínio do H1 — força quebra intencional |

Nunca deixar um parágrafo de corpo esticar até a largura total do container em telas largas — isso é o erro de legibilidade mais comum em site institucional.

---

# Espaçamento

Escala de **8 pontos** (tudo múltiplo de 8px, em `rem`) — garante ritmo vertical consistente entre seções, cards e componentes, sem números arbitrários se acumulando pelo CSS.

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

**Ritmo entre seções não é uniforme de propósito.** Uma seção que termina com folga própria (ex. o Hero em tela cheia) pode ter menos padding no topo da seção seguinte; uma transição visualmente mais densa pode pedir mais respiro antes e depois. Ritmo idêntico entre todas as seções é, ironicamente, um dos sinais mais fortes de "template genérico" — o objetivo é ritmo deliberado, não uma régua repetida sem variação.

### Grid e container

- **Container máximo:** `--container-max: 72rem` (1152px) — largura de leitura confortável, evita linhas de texto esticadas em telas ultra-wide.
- **Padding inline do container** fica fixo em `--space-md` (16px) em todos os breakpoints — é o `--container-max` que cresce/limita a largura, não o padding, evitando conteúdo "grudado" na borda em mobile.

### Breakpoints

| Nome | Faixa | Uso típico |
|---|---|---|
| Mobile | `< 480px` | Coluna única, menu hambúrguer, galeria 2 colunas |
| Tablet | `480–1023px` | Grids de 2–3 colunas; `section` já usa padding `--space-3xl` a partir de 768px |
| Notebook | `1024–1279px` | Ainda usa o menu hambúrguer — o menu horizontal completo só aparece em Desktop |
| Desktop | `≥ 1280px` | Largura de conteúdo estabiliza no `--container-max`; ganho de espaço vira margem, não mais colunas |

Mobile-first em toda a base: estilo default assume a tela menor, `min-width` adiciona complexidade progressivamente.

---

# Bordas

Bordas são o principal recurso de hierarquia visual do sistema — substituem boa parte do trabalho que sombra faria em outro design system.

- **Radius:** `--radius-sm` (4px) em botões e inputs — cantos discretos, não pill; `--radius-md` (10px) em cards genéricos e imagens de galeria; `--radius-lg` (20px) em cards de evento, o componente de maior peso visual. **Nunca 100% arredondado** (`--radius-pill`), exceto no botão flutuante de WhatsApp e badges — pill em todo o resto é a estética de app genérico que o projeto evita.
- **Hairline neutro** (`--color-border`, `#E6E3DC`): o padrão para qualquer divisor — entre cards, dentro de tabelas, na base do header sólido. Sutil o bastante para nunca competir com o conteúdo.
- **Hairline champagne** (`--color-gold`): reservado a pontos de destaque intencional — numeração editorial, borda de card no hover, badge de placeholder. Usar em todo lugar mataria o efeito; é precisamente por ser raro que funciona como assinatura visual.
- **Cantos retos** (sem `border-radius`) aparecem de propósito em elementos que citam fotografia impressa — como as pranchas da galeria editorial: uma foto revelada não tem cantos arredondados, e essa escolha reforça a leitura "isto é uma fotografia", não "isto é um card de app".

---

# Sombras

**Extremamente discretas — quase imperceptíveis.** Hierarquia neste sistema se comunica primeiro por espaço em branco, depois por borda hairline, e só por último (e minimamente) por sombra. Um `box-shadow` pronunciado é o jeito mais rápido de fazer o site parecer um dashboard de SaaS em vez de um site de hospitalidade.

```css
--shadow-sm: 0 1px 2px rgba(36, 36, 36, 0.04);
--shadow-md: 0 4px 12px rgba(36, 36, 36, 0.05);
--shadow-lg: 0 8px 24px rgba(36, 36, 36, 0.06);
```

- `--shadow-sm` é praticamente a única sombra usada em repouso (card genérico, depoimento) — quase não se percebe conscientemente, só suaviza o corte entre superfície e fundo.
- `--shadow-md`/`--shadow-lg` existem para casos pontuais (lightbox, menu mobile), não para elevação de hover — **elevação de hover é resolvida com `translateY` + borda ganhando presença**, não com sombra crescendo (ver `.event-card:hover` em Cards).
- Nunca combinar sombra pronunciada com borda visível no mesmo elemento — escolha uma linguagem de profundidade por componente, não as duas competindo.

---

# Botões

### Anatomia

Retangular de cantos discretos (`--radius-sm`), altura mínima `--tap-target-min` (44px, alvo de toque acessível), padding `--space-sm` × `--space-lg`, ícone opcional à esquerda.

### Variantes

| Variante | Fundo | Texto | Borda | Quando usar |
|---|---|---|---|---|
| **Primary** | `--color-accent` (sage) | `--color-on-accent` (off-white), `font-weight: 700`, `1.1875rem` fixo | — | Ação principal — WhatsApp, CTA de conversão. Uma por bloco de decisão, nunca mais de uma disputando atenção. |
| **Secondary** | transparente | `--color-accent-strong` | `--color-accent` | Ação alternativa ao lado da primária. |
| **Gold-outline** | transparente | `--color-accent-strong` (ou `--color-ink-on-dark` sobre fundo escuro) | `--color-gold` | Contexto de menor ênfase (ex. footer). |

O texto do botão primário usa peso 700 e tamanho fixo (não fluido) por um motivo técnico, não estético: texto claro sobre o sage (`#7A867B`) dá 3,8:1 de contraste — só entra na faixa "texto grande" do WCAG AA (≥18,66px em negrito). Fixar o tamanho garante que o botão nunca caia abaixo desse piso em telas pequenas, sem precisar trocar a cor que a marca define.

### Estados

- **Default:** conforme a variante acima.
- **Hover:** `translateY(-1px)` em todas as variantes. Primary troca de tom (`--color-accent` → `--color-accent-strong`), não só levanta. Secondary/Gold-outline preenchem sutilmente da esquerda com `currentColor` a 8% de opacidade (`scaleX(0)` → `scaleX(1)`) — nunca uma troca abrupta de cor de fundo. **Toda variante outline do site usa esse mesmo mecanismo de preenchimento**, inclusive o CTA do header — inconsistência de hover entre botões do mesmo papel é um dos sinais mais claros de "componente remendado".
- **Focus:** anel `:focus-visible` de 3px em `--color-focus`, `outline-offset: 2px`. Nunca removido sem substituto equivalente.
- **Disabled:** opacidade 0.5, `cursor: not-allowed`, sem hover.

Transições usam `--duration-fast` (150ms) para transform e `--duration-base` (300ms) para cor/fundo, sempre com `--ease-standard`.

---

# Cards

**Não queremos aparência de dashboard.** Isso significa evitar especificamente: grade uniforme onde todo card tem o mesmo peso visual, ícone grande centralizado no topo, sombra idêntica em todos, bloco de texto denso abaixo de cada imagem. Esse é o padrão de card de produto SaaS — funcional para um painel de métricas, errado para um espaço que vende experiência.

- **Card genérico:** fundo `--color-bg-elevated`, `--radius-md`, `--shadow-sm` (quase imperceptível), padding `--space-lg`.
- **Card de evento** (Casamentos / Debutantes / Corporativo / Aniversários): o componente de maior peso visual da Home — pensado como um "convite", não um card de serviço. Imagem `aspect-ratio: 3/4` (retrato — reforça a leitura de "porta de entrada", não thumbnail de artigo) sempre protagonista, `--radius-lg`, borda hairline `--color-border` em repouso; `overflow: hidden` fica só na imagem, nunca no card inteiro, para o anel de foco do teclado não ser cortado. Categoria (rótulo pequeno) + título + uma linha de apoio — nunca um parágrafo. Hover eleva por espaçamento (`translateY(-4px)`) e a borda ganha presença em champagne, **não por sombra crescendo** — profundidade por movimento e linha, não por `box-shadow` pesado. Zoom leve (`scale(1.03)`) só no preenchimento da imagem, nunca no card.
- **Nunca:** ícone grande centralizado, badge decorativo sem função, mesma proporção de imagem em todos os cards de uma grade só porque "é mais fácil de grid" — pequenas variações de proporção/composição entre cards vizinhos comunicam curadoria editorial, uniformidade total comunica gerador automático.

---

# Galeria

A galeria existe para deixar a fotografia real do espaço ser a protagonista da página — a composição precisa parecer uma dupla de página de revista de arquitetura, não um grid de miniaturas de app de fotos.

- **Composição assimétrica**, não um grid uniforme N×N: uma prancha dominante, uma tira panorâmica, inserts de tamanhos variados ao redor — como uma sessão fotográfica editorial real, com enquadramentos distintos, não fotos recortadas à força no mesmo formato.
- **Cantos retos** nas pranchas (sem `border-radius`) — reforça a leitura de fotografia impressa, não de card de interface.
- **Hover:** zoom leve só da imagem (`scale(1.045)`), nunca do container — evita reflow e corte abrupto de borda. A legenda (numeral + rótulo) reage junto: o véu escurece um pouco mais no hover, reforçando a sensação de "revelar detalhe" em vez de ficar inerte enquanto só a imagem se move.
- **Legenda:** numeral editorial + rótulo curto, sobrepostos na base da imagem com um véu de opacidade única (nunca gradiente multi-tom) só para garantir legibilidade — função, não decoração.
- **Galeria completa** (página `/espaco/`): grid responsivo 2 colunas mobile → 4 colunas tablet+, itens quadrados (`aspect-ratio: 1/1`), com lightbox em overlay escuro, navegação prev/next e fechar sempre com alvo de toque ≥44px e `aria-label` em todo controle.
- **Sem imagem real ainda:** placeholder em tons neutros claros da paleta (Surface/Surface Alt/Border), nunca em sage saturado preenchendo a prancha inteira — cor grande demais em 8 painéis contradiz a própria regra de "cor só apoia".

---

# Motion

**Nada exagerado.** Motion aqui é sutil e funcional — nunca decorativo por si só. Se uma animação existe só porque "fica bonito", ela não deveria existir.

```css
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--duration-fast: 150ms;  /* hover, foco, toggle */
--duration-base: 300ms;  /* transições de estado (cor, fundo, borda) */
--duration-slow: 500ms;  /* scroll reveal, entrada de hero */
```

- **Hover:** deslocamento vertical pequeno (`translateY(-1px)` em botões, `-4px` em cards) + mudança de cor/borda. Nunca escala agressiva, nunca rotação — esses dois são o vocabulário visual de banner promocional, o oposto do tom do site.
- **Scroll reveal:** fade + slide de 16px (`[data-reveal]`), via `IntersectionObserver`, `--duration-slow`. Conteúdo **nunca** fica preso em `opacity: 0` sem JS — fallback `.no-js` e `prefers-reduced-motion` sempre mostram tudo visível.
- **Header ao rolar:** transição de fundo/blur em `--duration-base` — nunca instantânea, nunca mais lenta que isso (um header que troca de estado devagar demais parece truncado).
- **Focus:** transição instantânea de outline, sem `transition-delay` — foco precisa aparecer imediatamente, nunca "suavizado" a ponto de atrasar a percepção de onde o teclado está.
- **Consistência:** toda transição de estado usa `--ease-standard`, para manter a mesma "personalidade" de movimento em qualquer componente do site.

---

# Acessibilidade

### Contraste (WCAG 2.1 AA)

| Par | Contraste | Nível |
|---|---|---|
| `Text` sobre `Background` | 14,5:1 | AAA |
| `Text Soft` sobre `Background` | 5,5:1 | AA |
| `Primary` sobre `Background` (texto pequeno) | 3,55:1 | **Reprovado — usar `Primary Hover` em texto/link pequeno** |
| `Primary Hover` sobre `Background` (texto/link pequeno) | 4,72:1 | AA |
| `Ink-on-dark` sobre `Primary Hover` (footer) | 5,05:1 | AA |
| Texto claro sobre `Primary` (botão, negrito ≥18,66px) | 3,80:1 | AA — faixa "texto grande" |
| `Accent`/champagne sobre `Background` (texto) | 2,2:1 | **Reprovado — nunca usar como texto** |

Regra derivada: **sage claro (`Primary`) nunca é cor de texto pequeno.** Ele é seguro para fundo de botão (com o ajuste tipográfico da seção Botões), borda/ícone de estado ativo (3:1 já basta para elemento gráfico) e texto grande. Qualquer link, eyebrow, rótulo ou texto corrido usa `Primary Hover`. Champagne nunca é texto — só decoração (`aria-hidden` quando for ícone).

### Tap targets

Alvo de toque mínimo **44×44px** em qualquer elemento interativo (botão, link de ícone, controle de lightbox, item de FAQ). `--tap-target-min: 44px` é o token de referência — nenhum componente novo deve ficar abaixo disso, mesmo em contextos visualmente "pequenos" como ícones sociais do footer.

### Regras gerais WCAG AA

- **Foco:** `:focus-visible` com anel de 3px em `--color-focus`, `outline-offset: 2px`, nunca removido via `outline: none` sem substituto equivalente.
- **ARIA:** landmarks nativos (`<header>`, `<nav aria-label="…">`, `<main>`, `<footer>`) em vez de `<div>` genérico; `aria-current="page"` no link ativo do menu; `aria-expanded`/`aria-controls` no toggle mobile; `aria-label` em todo botão/link que só tem ícone.
- **Teclado:** toda ação de mouse (hover de card, abrir lightbox, expandir FAQ) tem equivalente por teclado; ordem de tabulação segue a ordem visual.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` remove toda animação/transição não essencial e força `scroll-behavior: auto` — obrigatório replicar em qualquer motion novo, não é opcional.
- **Sem JS:** nenhum conteúdo pode depender de JavaScript para ficar visível (`.no-js` sempre mostra o estado final, nunca `opacity: 0` travado).

---

# Referência técnica complementar

Specs de componentes que já têm implementação em `assets/css/components.css`/`layout.css`/`gallery.css` e não couberam nas seções acima, mas seguem os mesmos princípios.

**Navbar** — `sticky`, mesmo comportamento em toda página (a variante `fixed` transparente sobre o Hero, `.site-header--overlay`, ficou dormente desde que o Hero da Home passou a ser um layout editorial de duas colunas, sem fundo em tela cheia atrás do header). Ao rolar, ganha vidro fosco (`rgba(255,255,255,0.72)` + `backdrop-filter: blur(10px)`) em vez de branco opaco, em qualquer página. Menu horizontal só a partir de 1280px (Desktop) — sete itens em versalete não cabem com folga antes disso; abaixo, hambúrguer em overlay full-screen. Link ativo/hover: sublinhado que "desenha" da esquerda (`scaleX`), não borda estática. CTA de WhatsApp sempre visível, nunca escondido atrás do menu.

**Footer** — única superfície escura do site (`--color-accent-strong`), texto `--color-ink-on-dark`. Grid de 3 colunas (contato / redes sociais / CTA) em tablet+, empilhado em mobile. Ícones sociais ganham leve elevação (`translateY(-2px)` + opacidade) no hover.

**FAQ** — `<details>/<summary>` nativo, zero JavaScript. Indicador `+`/`−` via `::after`, nunca a única pista de estado (o navegador já expõe `aria-expanded`).

**Depoimentos** — citação em Fraunces itálico, autor em `--color-accent-strong`, metadados em `Text Soft`. Estado placeholder obrigatório enquanto não houver depoimentos reais (borda tracejada em champagne) — nunca fabricar nome ou depoimento fictício.

**Badges** — pill pequeno, fundo `--color-accent-soft`, texto `--color-accent-strong`, `--step--1`, peso 600. Variantes semânticas usam os pares `success-soft`/`success-strong` e `warning-soft`/`warning-strong`.

**Ícones** — sprite SVG único (`assets/images/icons/icons.svg`), line icons finos (`stroke-width: 1.6–1.8`), sem preenchimento sólido exceto detalhes pequenos. Cor via `currentColor`. Tamanho 18–24px, nunca ícones grandes decorativos. `aria-hidden="true"` quando acompanhado de texto; `aria-label` no pai quando o ícone é o único conteúdo.

**Performance** — stack estático sem build step (Railway): `loading="lazy"` em toda imagem abaixo da dobra; WebP com fallback JPEG só se necessário; `<link rel="preload">` nas fontes críticas e na imagem do hero; `preconnect` para `fonts.googleapis.com`/`fonts.gstatic.com`; CSS modular por página (`tokens`/`base`/`layout` carregam sempre, o resto só onde é usado) — meta de LCP < 2.5s.

---

**Este documento substitui qualquer decisão visual anterior não documentada aqui.** Qualquer novo componente ou seção deve primeiro encontrar seu lugar nesta estrutura — se não encontrar, o documento precisa crescer antes do código.
