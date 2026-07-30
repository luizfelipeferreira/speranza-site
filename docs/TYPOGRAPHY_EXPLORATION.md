# Speranza Eventos — Exploração Tipográfica

**Status:** exploração concluída e implementada. A tipografia oficial do site mudou de Fraunces + Manrope para **Newsreader + Karla** ("Hotel Boutique", Fase 6) após duas rodadas de protótipo (Fase 7) e validação final em produção (Fase 8) — ver Registro de decisão ao final.
**Escopo:** avaliar se a combinação tipográfica atual (Fraunces + Manrope) deve permanecer, evoluir ou ser substituída, para aumentar a percepção de sofisticação editorial sem comprometer legibilidade nem descaracterizar o Design System já construído.
**Base:** [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) (paleta, escala, hierarquia, componentes) + [ESTRATEGIA.md](ESTRATEGIA.md) (posicionamento, personas, tom de voz).
**Restrição fixa:** apenas Google Fonts (self-hostável depois sem redesenho) — herdada do Design System, não renegociada aqui.

---

## Fase 1 — Auditoria crítica da combinação atual (Fraunces + Manrope)

### Pontos fortes

- Fraunces evita ativamente o par "serifada clássica + script" que satura o segmento de salões de festa — já é uma escolha estruturalmente melhor que a média do mercado regional.
- A família é variável (peso, eixo óptico, contraste), o que dá flexibilidade real de hierarquia (Hero → H3) sem precisar carregar múltiplas famílias.
- Manrope tem excelente legibilidade em pt-BR em blocos longos no mobile — x-height generosa, sem ambiguidade em acentuação.
- O par já está implementado, testado em produção, e documentado — zero custo de migração, zero risco de regressão.

### Onde transmite personalidade

- No Hero, em `--step-5`, com peso 500 e `line-height: 1.05` — é onde Fraunces tem espaço para mostrar seu caráter "soft"/editorial. É o único ponto do site onde a tipografia comunica marca antes do conteúdo.
- Nos numerais editoriais da galeria e nas legendas de depoimento em itálico — o itálico de Fraunces é genuinamente bonito e diferenciado, um dos poucos lugares onde a fonte "aparece" como decisão de design, não só como veículo de texto.

### Onde parece comum

- No corpo de texto corrido (parágrafos de "Sobre o Speranza", FAQ, descrições de card): Manrope, em peso 400 e tamanho padrão, é visualmente indistinguível de qualquer landing page de produto digital feita em 2023–2025. Não há nada na configuração atual (peso, tamanho, tracking) que sinalize "hospitalidade editorial" nesse texto — ele poderia estar em qualquer SaaS.
- Em H3 de card (`--step-2`, peso 500): Fraunces nesse tamanho perde grande parte do contraste óptico que a torna interessante em tamanhos grandes — a diferença para uma serifada genérica fica pequena.
- Nos botões (Manrope 700, `1.1875rem` fixo): funcional, mas neutro — não há assinatura tipográfica de marca no elemento de conversão mais importante do site.

### Em quais seções perde força

- **Cards de "Tipos de evento"**: título em Fraunces H3 + uma linha de apoio em Manrope — nessa combinação de tamanhos pequenos-a-médios, o contraste entre as duas famílias quase desaparece; um visitante rápido não percebe que há duas famílias tipográficas em jogo, o que dilui a intenção editorial.
- **FAQ**: `<summary>` em corpo padrão, sem tratamento tipográfico diferenciado — a seção inteira lê como lista de perguntas genérica, não como parte de uma experiência editorial.
- **Footer**: texto pequeno em Manrope sobre fundo escuro (`--color-accent-strong`) — funcional, mas é o ponto do site com menor personalidade tipográfica, justamente onde a última impressão é formada.

### Limitações em desktop vs. mobile

- **Desktop:** o Hero em `--step-5` tem espaço de sobra para Fraunces mostrar contraste e peso — funciona bem. Mas em telas largas (`≥1280px`), o corpo de texto em Manrope a `46–60ch` de largura fica visualmente "solto" sem o suporte de um título com mais presença ao lado, porque a diferença de peso visual entre título e corpo não escala proporcionalmente.
- **Mobile:** Fraunces no Hero (`clamp` até `2.6rem` no piso) perde parte do contraste que a torna distintiva — em telas pequenas ela se aproxima visualmente de qualquer serifada de sistema. Manrope no corpo se comporta bem, mas exatamente por isso: no mobile, a diferença entre "atual" e "uma sans qualquer" é a que menos se percebe, porque é onde a maioria do tráfego (mobile-first, conforme ESTRATEGIA.md §2) de fato lê o site.

**Síntese da auditoria:** a combinação atual funciona tecnicamente em toda a superfície do site, mas comunica personalidade de marca em pouquíssimos pontos (Hero, itálico de depoimento) e vira "tipografia neutra de produto digital" em todo o resto — que é, em volume de texto, a maior parte da experiência real do usuário.

---

## Fase 2 — Benchmark de referências

**Nota de método:** marcas como Aman, Four Seasons, Rosewood e Edition usam, em grande parte, tipografia proprietária ou licenciada sob exclusividade — não é possível (nem responsável) afirmar com certeza qual fonte comercial exata cada uma usa. O valor aqui está em identificar **padrões estilísticos observáveis** na comunicação visual dessas marcas, não em replicar uma fonte específica.

| Referência | Padrão observado |
|---|---|
| **Aman / Rosewood** | Serifada de baixo a médio contraste, peso moderado, quase nunca em negrito pesado — comunica calma, não impacto. Tracking levemente positivo em labels/wayfinding, sempre versalete. Sans de apoio quase invisível — a hierarquia é feita por espaço em branco, não por diferença de peso agressiva. |
| **Four Seasons / Edition** | Serifada com mais presença editorial que Aman/Rosewood, mas ainda contida — nunca um contraste dramático de traço. Eyebrows em versalete com tracking generoso (0.15–0.25em), o mesmo território já usado no Design System do Speranza. |
| **Soho House** | Mais quente e "clubby" que as anteriores — serifada com leve caráter vintage, tom menos minimalista, mais "biblioteca particular" que "spa branco". Referência útil para lembrar que "editorial" não precisa ser frio. |
| **Architectural Digest** | Serifada de alto contraste e escala tipográfica ousada — saltos grandes entre títulos e legendas, para comunicar autoridade editorial. É a referência que mais se aproxima do território "fashion-editorial" (ver Alternativa "Luxo Minimalista" abaixo). |
| **Kinfolk / Cereal Magazine** | Serifada de texto (não display), corpo generoso, muitíssimo espaço em branco, tom "quiet luxury" — a referência mais alinhada ao pilar "Atemporal" do Speranza, porque prioriza legibilidade de leitura longa sobre impacto visual imediato. |
| **Monocle** | Foge do padrão: é a referência mais **sans-driven** da lista, com um grotesk customizado e uso extensivo de versalete tracked para categorização editorial — mostra que um sistema majoritariamente sans pode comunicar sofisticação, se a disciplina tipográfica (tracking, escala, alinhamento) for rigorosa. |
| **Apple** | Zero serifada, uma única família sans em toda a superfície, tracking neutro a levemente negativo em títulos grandes, hierarquia inteira resolvida por peso + tamanho + espaço em branco. Representa o extremo oposto do Fraunces atual — útil como baliza para a proposta "Modernismo Europeu" (Fase 3F), não como caminho recomendado. |

**Padrões que se repetem entre as referências mais alinhadas ao Speranza (Aman, Rosewood, Four Seasons, Kinfolk, Cereal):**
- Contraste de traço **moderado**, nunca extremo — didones de alto contraste (Architectural Digest) aparecem só na referência mais "fashion", não na mais "hospitalidade".
- Peso de título raramente ultrapassa semibold — negrito pesado em serifada lê como "anúncio", não como "hospitalidade".
- Tracking positivo (0.1–0.25em) reservado estritamente a versalete pequeno (eyebrows, wayfinding) — nunca em corpo de texto, o mesmo princípio que já está no Design System do Speranza.
- Escala tipográfica com saltos generosos entre Hero e corpo, mas hierarquia intermediária (H2/H3) discreta — a distinção "isto é uma seção" vs. "isto é um título de card" é sutil, não gritada.

---

## Fase 3 — Seis sistemas tipográficos completos

Cada sistema especifica os seis papéis pedidos: Heading, Body, Navegação, Botões, Eyebrows, Textos pequenos.

### A. Editorial Contemporâneo

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Fraunces (mantida) | 500–600, eixo óptico alto em Hero |
| Body | Public Sans | 400, `line-height: 1.6` |
| Navegação | Public Sans | 500, sem tracking |
| Botões | Public Sans | 700, tamanho fixo (mesma lógica de contraste WCAG já documentada) |
| Eyebrows | Public Sans | 600, versalete, `letter-spacing: 0.2em` |
| Textos pequenos | Public Sans | 400, `--step--1` |

**Justificativa:** resolve o único ponto fraco real da auditoria (corpo "cheirando a produto digital") sem tocar na identidade de título já reconhecível.
**Vantagens:** menor risco de toda a lista, migração de uma única variável CSS, zero retrabalho de escala ou componente.
**Riscos:** ganho perceptível é pequeno — quem já acha a marca "genérica" não vai notar diferença no primeiro relance, só em leitura atenta do corpo.
**Onde supera a atual:** parágrafos longos (Sobre, FAQ), legibilidade em telas pequenas, remoção do risco "SaaS" do corpo.
**Impacto na identidade:** neutro a levemente positivo — reforça o que já funciona, não abre nova narrativa de marca.

---

### B. Hotel Boutique

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Newsreader | 500 (600 só no Hero), itálico para ênfase editorial |
| Body | Karla | 400, `line-height: 1.65` |
| Navegação | Karla | 500 |
| Botões | Karla | 700, tamanho fixo |
| Eyebrows | Karla | 600, versalete, `letter-spacing: 0.22em` |
| Textos pequenos | Karla | 400, `--step--1` |

**Justificativa:** é a combinação mais próxima do padrão Kinfolk/Cereal/Aman-Rosewood identificado na Fase 2 — serifada de texto, contida, pensada para leitura longa, não para impacto.
**Vantagens:** altíssima atemporalidade (Newsreader foi desenhada para durar, não para tendência), legibilidade muito alta em ambas as famílias, itálico genuinamente elegante para depoimentos.
**Riscos:** Newsreader no Hero tem menos impacto imediato que Fraunces — exige aumentar peso/tamanho no `--step-5` ou usar itálico para recuperar presença de marca.
**Onde supera a atual:** exatamente o território que a marca mais precisa ocupar (hospitalidade boutique silenciosa) — sem nenhum dos riscos de cliché "casamento" ou "hotel genérico".
**Impacto na identidade:** desloca o tom de "editorial vibrante" para "editorial silencioso" — uma mudança de personalidade real, não só de fonte, coerente com o próprio pilar "Atemporal" do Design System.

---

### C. Luxo Minimalista

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Bodoni Moda | 500 no corpo de título, 600 só no Hero, eixo óptico alto |
| Body | Manrope (mantida) | 400 |
| Navegação | Manrope | 500 |
| Botões | Manrope | 700, tamanho fixo |
| Eyebrows | Manrope | 600, versalete, `letter-spacing: 0.2em` |
| Textos pequenos | Manrope | 400 |

**Justificativa:** é a leitura mais próxima de Architectural Digest — alto contraste editorial, o pivô com maior teto de sofisticação percebida desta lista.
**Vantagens:** sofisticação e exclusividade imediatas, altíssima diferenciação regional (nenhum concorrente local usaria um didone de alto contraste), pareamento excelente com fotografia em preto e branco ou de baixa saturação.
**Riscos:** hairlines finíssimos fragilizam em telas de baixa densidade — maior risco de legibilidade/rendering de toda a lista; contraste alto lê como "moda", não "acolhedor", tensionando com o pilar Acolhedor do Design System.
**Onde supera a atual:** percepção de exclusividade e de "revista de arquitetura" — nenhuma outra proposta chega perto nesse eixo específico.
**Impacto na identidade:** desloca o Speranza do território "hospitalidade calorosa" para "fashion-editorial" — mudança de gênero de marca, não incremento.

---

### D. Arquitetura Italiana

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Piazzolla | 500–600, itálico para citações |
| Body | Jost | 400, `line-height: 1.6` |
| Navegação | Jost | 500 |
| Botões | Jost | 600, tamanho fixo |
| Eyebrows | Jost | 500, versalete, `letter-spacing: 0.18em` |
| Textos pequenos | Jost | 400 |

**Justificativa:** referencia o nome italiano da marca sem recorrer a clichê visual — Piazzolla é uma serifada de texto com boa herança latina, Jost é geometricamente próxima do design gráfico modernista europeu (Bauhaus/Kabel) sem ser fria como um grotesk suíço puro.
**Vantagens:** identidade coesa com a narrativa "Speranza" (italiano, esperança, capítulo novo — ver ESTRATEGIA.md §3), boa performance web, ambas variáveis.
**Riscos:** Jost tem geometria muito circular/regular — pode ler mais "Bauhaus alemão" que "arquitetura italiana contemporânea" se não for tratado com cuidado no tracking; é o sistema mais "neutro" da lista em termos de personalidade percebida.
**Onde supera a atual:** coerência narrativa com o nome da marca — nenhuma outra proposta amarra isso tipograficamente.
**Impacto na identidade:** reforço conceitual sutil, mas o ganho de sofisticação percebida é o mais modesto desta lista.

---

### E. Galeria de Arte

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Instrument Serif | único peso disponível (400), itálico nativo para variação |
| Body | Instrument Sans | 400–500 |
| Navegação | Instrument Sans | 500 |
| Botões | Instrument Sans | 600, tamanho fixo |
| Eyebrows | Instrument Sans | 600, versalete, `letter-spacing: 0.2em` |
| Textos pequenos | Instrument Sans | 400 |

**Justificativa:** é o par mais próximo da estética "portfólio/galeria contemporânea" de marcas de design premium recentes.
**Vantagens:** alto calor e contemporaneidade, boa companhia visual entre as duas famílias (desenhadas como par).
**Riscos:** viola diretamente o pilar Atemporal — é a combinação mais "na moda agora" da lista inteira, com risco real de datar em 18–24 meses; Instrument Serif **só existe em um peso** (400 + itálico), o que limita a criação de hierarquia por peso dentro da própria família de título — uma restrição técnica real, não só estética.
**Onde supera a atual:** contemporaneidade imediata, se o objetivo fosse parecer "agora" a qualquer custo — não é o objetivo declarado do projeto.
**Impacto na identidade:** risco de a marca parecer "seguindo tendência de design" em vez de "atemporal", o oposto do que ESTRATEGIA.md define.

---

### F. Modernismo Europeu

| Papel | Fonte | Peso/tratamento |
|---|---|---|
| Heading | Archivo (sem serifada — 100% sans) | 600–700, eixo expandido só no Hero |
| Body | Work Sans | 400 |
| Navegação | Work Sans | 500 |
| Botões | Work Sans | 700, tamanho fixo |
| Eyebrows | Work Sans | 600, versalete, `letter-spacing: 0.16em` |
| Textos pequenos | Work Sans | 400 |

**Justificativa:** representa o extremo "Apple" da Fase 2 — hierarquia resolvida inteiramente por peso/tamanho/espaço em branco, sem serifada nenhuma.
**Vantagens:** performance excelente (fontes variáveis robustas, menos peculiaridades de rendering que qualquer serifada de alto contraste), legibilidade muito alta, atemporalidade alta (grotescos bem desenhados não datam como serifadas na moda).
**Riscos:** contradiz uma exigência explícita do próprio Design System — "tipografia com peso editorial, não decorativo" e "Fraunces nos títulos" aparecem como requisito de personalidade, não como preferência solta; abandonar a serifada é a mudança mais radical desta lista e a que mais se afasta do "peso editorial" que a marca definiu como parte da própria personalidade.
**Onde supera a atual:** performance técnica e consistência de rendering entre plataformas — nenhuma outra proposta chega perto nesse eixo.
**Impacto na identidade:** o mais disruptivo de todos — deixaria de comunicar "hospitalidade boutique com peso editorial" e passaria a comunicar "produto digital moderno", o oposto do posicionamento. Entra na lista como baliza experimental, não como candidata real.

---

## Fase 4 — Compatibilidade técnica

| Sistema | Legibilidade | Performance web | Google Fonts | Self-host | Suporte pt-BR | Qualidade do itálico | Qualidade dos numerais | Rendering Windows | Rendering macOS | Rendering mobile |
|---|---|---|---|---|---|---|---|---|---|---|
| **A — Editorial Contemporâneo** | Alta | Alta (2 variáveis já em uso/próximas) | Sim | Sim | Boa em ambas | Fraunces: itálico expressivo e já validado em produção | Lining, consistentes entre as duas famílias | Estável — sem traços finos críticos | Estável | Estável |
| **B — Hotel Boutique** | Muito alta (ambas desenhadas para texto corrido) | Alta | Sim | Sim | Boa em ambas | Newsreader: itálico verdadeiro, desenhado para citação/ênfase editorial — um dos melhores da lista | Newsreader oferece oldstyle via OpenType; Karla lining por padrão | Estável | Estável | Estável |
| **C — Luxo Minimalista** | Média — depende de peso mínimo nos títulos | Média (eixo óptico variável de Bodoni Moda é mais pesado) | Sim | Sim | Boa | Itálico de Bodoni Moda é elegante, mas ainda mais fino que o peso normal — usar com cautela em tamanhos pequenos | Lining, elegantes, mas finos | **Risco real**: hairlines podem perder definição em ClearType/telas de baixa densidade | Geralmente mais estável (antialiasing do CoreText suaviza melhor traços finos) | Estável em telas retina; risco em Android de baixo custo com telas de baixa densidade |
| **D — Arquitetura Italiana** | Alta | Alta | Sim | Sim | Boa (Piazzolla foi desenhada com atenção a diacríticos latino-americanos) | Piazzolla tem itálico verdadeiro e bem desenhado | Piazzolla oferece oldstyle opcional; Jost é lining geométrico | Estável | Estável | Estável |
| **E — Galeria de Arte** | Média — Instrument Serif é fonte de exibição, não de leitura longa | Alta (poucos pesos = arquivos leves) | Sim | Sim | Boa | Itálico é a essência do desenho da fonte — muito bem resolvido | Lining simples, sem grandes variações | Estável | Estável | Estável |
| **F — Modernismo Europeu** | Alta | **A mais alta da lista** (grotescos variáveis robustos, sem eixo óptico complexo) | Sim | Sim | Excelente em ambas | Work Sans tem itálico verdadeiro; Archivo também — mas o sistema não usa itálico como elemento de marca | Tabular e proporcional disponíveis em ambas — a opção mais flexível tecnicamente | Muito estável — grotescos sem contraste extremo raramente têm problema de rendering | Muito estável | Muito estável |

**Nota geral sobre rendering entre sistemas operacionais:** todas as fontes acima são renderizadas pelo próprio motor de texto do navegador (DirectWrite no Windows, CoreText no macOS, Skia em Chrome/Android) — a variável real não é o SO, é o **contraste de traço** da fonte. Serifadas de alto contraste (Bodoni Moda, e em menor grau Cormorant Garamond) são as únicas com risco real de inconsistência visual entre plataformas; grotescos/humanistas (Manrope, Public Sans, Karla, Work Sans, Jost, Archivo, Instrument Sans) não têm esse problema por desenho.

---

## Fase 5 — Ranking comparativo

Escala 0–10. Linha "Atual" incluída como referência, não como candidata.

| Sistema | Elegância | Exclusividade | Atemporalidade | Legibilidade | Performance | Compat. fotografia planejada | Compat. Design System |
|---|---|---|---|---|---|---|---|
| Atual (Fraunces + Manrope, sem ajuste) | 7 | 5 | 6 | 8 | 8 | 7 | 10 |
| **A — Editorial Contemporâneo** | 8 | 6 | 7 | 9 | 8 | 8 | 10 |
| **B — Hotel Boutique** | 8 | 6 | 9 | 9 | 8 | 8 | 6 |
| **C — Luxo Minimalista** | 9 | 8 | 8 | 6 | 7 | 9 | 6 |
| **D — Arquitetura Italiana** | 7 | 7 | 7 | 7 | 8 | 7 | 6 |
| **E — Galeria de Arte** | 7 | 6 | 3 | 6 | 7 | 7 | 5 |
| **F — Modernismo Europeu** | 6 | 5 | 8 | 9 | 9 | 6 | 4 |

**Leitura da tabela:** nenhum sistema vence em todos os eixos — é o resultado esperado de uma decisão de marca real. C lidera em Elegância/Exclusividade/Compatibilidade com fotografia, mas paga o preço em Legibilidade e Compatibilidade com o Design System (a exigência documentada de tom "acolhedor" e cantos discretos). B lidera em Atemporalidade e empata no topo em Legibilidade, com o menor custo de implementação entre as propostas que de fato mudam a percepção de marca. F é tecnicamente a mais performática e legível, mas é a que mais contradiz requisitos já documentados (serifada como parte da personalidade).

---

## Fase 6 — Recomendação

### Vencedora: B — Hotel Boutique (Newsreader + Karla)

É o único sistema que entrega um aumento real e defensável de sofisticação editorial (o objetivo declarado desta exploração) sem cair em nenhum dos riscos eliminatórios já mapeados (cliché nupcial, cliché neoclássico, modismo passageiro, fragilidade de rendering). Empata no topo em Legibilidade, lidera isolado em Atemporalidade, e o custo de implementação é conhecido e contido: retrabalhar peso/tamanho do Hero para compensar a discrição natural de Newsreader nesse tamanho. É a escolha certa se o objetivo é elevar a marca com o menor risco por unidade de ganho.

### Segunda opção: A — Editorial Contemporâneo (Fraunces mantida + Public Sans)

Se o apetite para mudança de Hero/identidade visual for baixo neste momento, esta é a rede de segurança: resolve o único ponto fraco real e documentado da auditoria (corpo de texto "cheirando a produto digital") com o menor risco de execução de toda a lista — troca de uma única variável CSS, zero retrabalho de componente. Não é a opção que mais eleva a percepção de sofisticação, mas é a que garante ganho líquido positivo sem exposição.

### Opção experimental: C — Luxo Minimalista (Bodoni Moda + Manrope)

Tem o maior teto de sofisticação e exclusividade percebida de toda a lista — e o benchmark da Fase 2 (Architectural Digest) confirma que esse território existe e funciona para marcas editoriais de prestígio. Mas carrega o risco mais concreto (legibilidade em telas de baixa densidade, tensão com o pilar Acolhedor, mudança de gênero de marca para "fashion"). Não deve ser adotada sem prototipar e testar visualmente primeiro — é candidata a protótipo exploratório paralelo, não a substituição direta.

---

## Fase 7 — Protótipo (executado, código revertido)

Sistema aprovado para prototipar: **B — Hotel Boutique (Newsreader + Karla)**. Escopo seguido à risca: troca isolada de `--font-heading`/`--font-body` em `body.page-home`, sem tocar em espaçamento, hierarquia ou componentes — nem no peso/tamanho do Hero (deliberadamente não ajustado, para isolar a variável "só fonte" e medir o efeito puro da troca).

**Método:** servidor estático local (`npm start`) + Playwright, screenshots reais da Home renderizada, antes e depois da troca, em 1440×900 (desktop) e 390×844 (mobile — Hero). Código revertido ao baseline imediatamente após a captura — nada do protótipo permanece no repositório.

**Comparação visual completa (Header, Hero desktop/mobile, Cards, CTA, Footer):**
👉 [Fase 7 — Hotel Boutique vs. Atual](https://claude.ai/code/artifact/3403b725-a5df-44d8-8565-99fbfe2b3638)

### Análise crítica

**A nova tipografia elevou a marca de forma perceptível, ou a atual continua superior?** Resposta honesta, sem arredondar para o resultado que seria mais confortável: **depende da seção, e no ponto mais importante da página, a atual venceu.**

- **Onde Newsreader supera Fraunces, de verdade:** nos cards de "Tipos de evento" e no CTA final (tamanhos H3/H2), a leitura fica mais quieta e editorial, exatamente o território Kinfolk/Cereal mapeado no benchmark da Fase 2 — e os títulos quebram em menos linhas, um ganho incidental de composição. Isso confirma que a aposta da Fase 6 tinha fundamento real, não só teórico.
- **Onde a troca piora, sem ambiguidade:** o Hero — o único momento do site em que a tipografia sozinha forma a primeira impressão de marca. Sem o peso/tamanho maior que a Fase 3 já previa ser necessário, "Cada evento pede um espaço à altura dele." perde presença visível em Newsreader, no desktop e mais ainda no mobile (onde a auditoria da Fase 1 já apontava que está a maioria do tráfego real). Uma tipografia mais "quieta" no Hero não lê como sofisticação — lê como menos confiança.
- **Achado que não estava previsto:** no footer, o indicador ordinal "nº" do endereço perde definição no itálico de Karla, ficando visualmente ambíguo (quase "n°"/"no"), enquanto o itálico de Fraunces mantém o símbolo nítido. É um problema concreto de qualidade de glifo em pt-BR que só aparece testando com conteúdo real — a Fase 4 já sinalizava esse tipo de risco em abstrato; agora há um caso real documentado.

**Veredito da rodada 1:** a versão atual (Fraunces + Manrope) continuava superior **no estado em que o protótipo foi testado** — um swap 1:1 de fonte, sem mais nenhum ajuste. Isso não derrubou a direção "Hotel Boutique" em si: derrubou a ideia de que bastaria trocar a variável CSS.

### Rodada 2 — Hero corrigido

Executada em seguida, testando exatamente o ajuste que a rodada 1 apontou como necessário: `font-weight: 600` (em vez de 500) e um leve aumento no topo do `clamp()` do Hero (`3.4rem` → `3.6rem`), mantendo Cards e CTA como já validados na rodada 1 (não precisavam de novo teste).

**Resultado:** o ajuste funciona. Com peso 600, o Hero em Newsreader recupera presença comparável à do Fraunces atual — tanto no desktop quanto no mobile (ver [artefato atualizado](https://claude.ai/code/artifact/3403b725-a5df-44d8-8565-99fbfe2b3638), seções "Hero (desktop)" e "Hero (mobile)", agora com as três versões lado a lado). Combinado ao ganho já confirmado em Cards/CTA, a direção "Hotel Boutique" passa a ser uma substituta defensável para a tipografia atual.

**Fix do glifo "nº":** resolvido, e já aplicado permanentemente em produção (`assets/css/layout.css`, regra `.site-footer address { font-style: normal; }`) — a causa raiz era o navegador aplicar itálico por padrão a `<address>`, não uma escolha do Design System. Corrigido nas 7 páginas do site, independente de qual tipografia vencer esta exploração.

**Veredito final:** Hotel Boutique (Newsreader + Karla), com o Hero em peso 600, elevou a marca de forma real, sem os custos identificados na rodada 1.

---

## Fase 8 — Implementação em produção (concluída)

Com a rodada 2 validada, os dois itens pendentes foram executados e a troca deixou de ser protótipo:

1. **Breakpoint intermediário (tablet/notebook, 768–1279px):** testado em 820px (tablet, ainda coluna única) e 1100px (notebook, grid de duas colunas) — Hero mantém presença em ambos, sem quebra de layout. Screenshots na seção "Validação final" do [artefato](https://claude.ai/code/artifact/3403b725-a5df-44d8-8565-99fbfe2b3638).
2. **6 páginas internas:** 5 delas (casamentos, debutantes, corporativo, aniversários, espaço) têm hero próprio com o mesmo padrão que a Home tinha antes da correção (`font-weight: 500`, clamp até `3.4rem`, texto cream sobre foto) — todas receberam o mesmo ajuste (`600`, clamp até `3.6rem`). A 6ª (contato) já herdava o H1 padrão (peso 600 via `base.css`), não precisou de ajuste específico. Validado visualmente em Casamentos (desktop e mobile) — hero cinematográfico com texto cream mantém a mesma presença que no padrão claro da Home.

**Mudanças aplicadas em produção:**
- `assets/css/tokens.css`: `--font-heading`/`--font-body` trocados de Fraunces/Manrope para Newsreader/Karla (fonte de verdade agora, não mais um override scoped).
- `index.html` + 6 páginas internas: `<link>` do Google Fonts trocado para `Newsreader:ital,opsz,wght@...` + `Karla:ital,wght@...`.
- `assets/css/home.css` e `casamentos.css`/`debutantes.css`/`corporativo.css`/`aniversarios.css`/`espaco.css`: peso do H1 de hero de `500` → `600`, clamp ajustado para compensar a discrição de Newsreader nesse tamanho (mesma correção da rodada 2, generalizada).
- `assets/css/layout.css`: fix permanente do glifo "nº" (`.site-footer address { font-style: normal; }`), já coberto na Fase 7.

**O que ainda não foi feito, por ser trabalho de acabamento e não bloqueador de decisão:** revisar eyebrows/botões/textos pequenos de cada página interna individualmente em busca de algum ajuste fino equivalente ao do Hero — a auditoria visual cobriu os pontos de maior risco (Hero, breakpoints, um hero de página interna), não todos os componentes de todas as 7 páginas.

---

## Registro de decisão

| Data | Sistema testado | Resultado dos screenshots | Decisão final |
|---|---|---|---|
| 2026-07-30 | Rodada 1 — B, Newsreader+Karla, swap puro sem ajuste de Hero | Ganho real em Cards/CTA; perda real no Hero (desktop e mobile); regressão de glifo "nº" no footer em itálico | Não substituir nesse estado. Autorizado um segundo protótipo com Hero corrigido. |
| 2026-07-30 | Rodada 2 — B, Newsreader+Karla, Hero em peso 600 + leve aumento de tamanho | Hero recupera presença comparável ao Fraunces atual; Cards/CTA mantêm o ganho da rodada 1; glifo "nº" corrigido permanentemente | Aprovado em princípio. Autorizado validar breakpoint + replicar nas páginas internas. |
| 2026-07-30 | Fase 8 — mesmo sistema, validado em tablet/notebook + replicado nas 5 páginas internas com hero próprio | Sem quebra de layout em nenhum breakpoint; padrão generaliza para o hero cinematográfico das páginas internas | **Implementado em produção.** Newsreader + Karla é a tipografia oficial do Speranza Eventos a partir desta exploração. |
