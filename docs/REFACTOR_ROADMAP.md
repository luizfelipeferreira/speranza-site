# Speranza Eventos — Auditoria Técnica Completa e Roadmap de Refatoração

**Status:** documento de auditoria — nenhum arquivo de código foi alterado para produzir isto. Cobre o estado real do repositório após Home, `/espaco/` e `/casamentos/` estarem implementadas.
**Escopo:** todo o projeto — as 3 páginas construídas, os 4 stubs ainda não elevados (Debutantes, Corporativo, Aniversários, Contato), CSS/JS compartilhado, assets, SEO, acessibilidade.
**Legenda:** 🔴 Crítico (bloqueia produção ou quebra algo visível) · 🟠 Importante (não quebra nada hoje, mas custa caro se ignorado) · 🟡 Melhoria (vale fazer, não urgente) · 🟢 Cosmético (polimento, baixo impacto).

---

# 1. Achados por severidade

## 🔴 Crítico

**1.1 — Assets de marca ausentes (bloqueia produção)**
`assets/images/brand/` está vazia (só `.gitkeep`). `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` e `og-image.jpg` são referenciados no HTML/manifest de **todas** as páginas, mas não existem em disco. Efeito real: ícone de aba quebrado, PWA/"adicionar à tela inicial" quebrado, e o preview de link no WhatsApp/Instagram/Facebook/Google (o canal onde a reputação do Speranza mais circula, per `ESTRATEGIA.md` §2) mostra card sem imagem. Não é um bug de código — é arte de marca real que precisa ser produzida/entregue.

**1.2 — Três páginas (Debutantes, Corporativo, Aniversários) e o Contato têm o header quebrado**
`debutantes/index.html`, `corporativo/index.html`, `aniversarios/index.html` e `contato/index.html` ainda usam `<img src="/assets/images/brand/logo.svg">` no header — arquivo inexistente (ver 1.1), então o logo aparece quebrado nessas 4 páginas **hoje, em produção**. Home, `/espaco/` e `/casamentos/` já foram corrigidas para o wordmark em texto (Fraunces) durante as respectivas implementações; essas 4 não.

**1.3 — As mesmas 4 páginas nunca carregam Fraunces/Manrope**
Nenhuma delas tem `<link>` para `fonts.googleapis.com` — `tokens.css` define as variáveis de fonte, mas o `@font-face` real nunca chega ao navegador nessas páginas. Elas renderizam em fonte de sistema (Georgia/Arial), quebrando a identidade visual descrita em `DESIGN_SYSTEM.md` § Tipografia. Mesma causa-raiz do item 1.2 (páginas nunca receberam a atualização que Home/Espaço/Casamentos já tiveram).

**1.4 — Fotografia profissional 100% pendente em todo o site**
Não é um bug — é a maior dependência do projeto inteiro, já registrada desde `ESTRATEGIA.md` §5 ("maior risco de execução"). Hoje, Home, `/espaco/` e `/casamentos/` rodam inteiramente em placeholders (divs com grain ou fotos de banco temporárias, todas marcadas como tal). Nenhuma quantidade de refino de código substitui isso — está aqui porque é o item que mais afeta a "sensação premium" que todo o resto do trabalho tenta construir.

## 🟠 Importante

**2.1 — CSS duplicado, e a duplicação está se multiplicando por página**
Três padrões visuais idênticos são reimplementados independentemente em `home.css`, `espaco.css` e agora também `casamentos.css`, sem nenhum componente compartilhado:
- **"Link com seta"** (`.hero__cta-link`, `.structure__cta`, `.gallery-editorial__cta` em `home.css`; `.space-structure__cta`, `.space-location__cta` em `espaco.css`; `.wedding-structure__cta` em `casamentos.css`) — 6 implementações do mesmo componente.
- **Grain-texture SVG em base64** (~330 caracteres cada) — duplicado 3× em `home.css`, mais 4× em `espaco.css`, mais 3× em `casamentos.css` — 10 cópias do mesmo dado no repositório.
- **Bloco `__intro`** (`max-width: 34rem; margin-bottom: var(--space-2xl)`) — repetido em praticamente toda seção das 3 páginas.

Cada página nova que reaproveita o mesmo "olhar" do sistema visual, mas reimplementa o CSS do zero, aumenta essa dívida. Ainda não quebrou nada — mas cada consolidação futura fica mais arriscada quanto mais cópias existirem para sincronizar.

**2.2 — Home ainda tem 3 seções do wireframe original não implementadas**
Barra de Confiança (#2), Sobre o Speranza (#4) e Localização (#10) — ver comentário no topo de `index.html`. A Home hoje pula direto de Hero para Tipos de Evento, e termina sem mapa/endereço embutido (só o footer tem o endereço em texto).

**2.3 — Debutantes, Corporativo e Aniversários ainda são stubs no template genérico**
Usam `landing.css` compartilhado e um Hero raso (`<h1>` vazio com TODO). Depois de Home/Espaço/Casamentos terem ganhado identidade bespoke, esses 3 stubs destoam — e correm o risco, já registrado em `WEDDING_PAGE_WIREFRAME.md` § Revisão Crítica, de serem construídos copiando o esqueleto de Casamentos sem reconsiderar se cada público merece sua própria metáfora estrutural.

**2.4 — `sitemap.xml`/`robots.txt` com domínio e datas pendentes**
Ambos têm `TODO` explícito pedindo confirmação do domínio de produção antes do lançamento; `sitemap.xml` não tem nenhum `<lastmod>`. Decisão do cliente, não de código — mas é um item de checklist de lançamento real.

## 🟡 Melhoria

**3.1 — `config.js` órfão**
`assets/js/config.js` nunca é importado por nenhum outro arquivo — carrega zero bytes hoje. Além disso, seu próprio `WHATSAPP_MESSAGES` está fora de sincronia com os `data-wa` reais em uso (`cta-final`, `depoimentos`, `estrutura`, `casamentos-estrutura` etc. não existem no mapa). Ou vira a fonte única de verdade de verdade (com os links `wa.me` gerados a partir dele), ou é removido.

**3.2 — `.site-header--overlay` e ramos mortos em `hero.js`**
Documentados como dormentes desde que o Hero da Home virou duas colunas. `hero.js` ainda checa `[data-header-sentinel]` e `[data-scroll-cue]`, que não existem em nenhuma página construída hoje.

**3.3 — Convenção de `data-wa` inconsistente entre páginas**
Espaço usa `data-wa="estrutura"` (sem prefixo de página); Casamentos usa `data-wa="casamentos-estrutura"` (com prefixo). Isso dificulta análise por seção no futuro (`ESTRATEGIA.md` §1 pede "cliques em WhatsApp por seção" como KPI) — os nomes deveriam seguir um padrão único antes que mais páginas acumulem chaves inconsistentes.

**3.4 — Ausência de `data-scroll-depth` em `/espaco/` e `/casamentos/`**
Só a Depoimentos da Home tem esse atributo (`data-scroll-depth="depoimentos"`). O KPI de "scroll depth" do `ESTRATEGIA.md` §1 não está sendo medido nas duas páginas mais novas e mais longas do site.

**3.5 — `.trust-bar__number` reprova contraste AA**
Componente em `components.css`, não usado ainda (esperando a seção "Barra de Confiança"). Usa `--color-accent` (sage claro) como cor de texto — reprovado pela própria tabela de contraste do `DESIGN_SYSTEM.md`. Vale corrigir antes de alguém implementar essa seção copiando o componente como está.

**3.6 — Repetição literal do CTA "Agende uma visita"**
Aparece em Hero, Como Funciona, Depoimentos e CTA Final da Home, mais os CTAs finais de Espaço e Casamentos — 6+ ocorrências do mesmo texto exato no site. É o padrão canônico do `COPY_GUIDE.md` §9 (portanto não é erro), mas em escala de 3 páginas já vale uma pequena variação de superfície para quem lê o site inteiro de uma vez.

**3.7 — Sem `FAQPage` (JSON-LD) em nenhuma das 3 FAQs já construídas**
Home, Espaço (não tem FAQ própria) e Casamentos têm conteúdo de FAQ real e confirmado — candidato natural a rich snippet no Google, ainda não implementado.

## 🟢 Cosmético

**4.1 — `<title>` da Home com 83 caracteres** — acima do recomendado (~60), risco de truncamento no SERP. Mais sensível que meta description (aparece em aba/favoritos), por isso nunca foi alterado sem decisão explícita.

**4.2 — Proporção da imagem "Mesa posta" já corrigida, mas o padrão de curadoria não tem checklist automatizado** — a correção já foi feita manualmente (Home + Espaço), mas nada impede o mesmo tipo de erro (legenda ≠ imagem) de acontecer de novo em Casamentos/Debutantes/Corporativo/Aniversários sem uma verificação visual deliberada a cada novo placeholder.

**4.3 — `.about-section` (home.css) e `.ambiente-tour`/`.spec-sheet`/`.map-embed` (antigo `espaco.css`, já substituído)** — a primeira é scaffold válido para uma seção futura (Sobre o Speranza); a segunda já foi completamente substituída durante a implementação de `/espaco/` e não deixou resíduo. Mencionado aqui só para registro, não é ação pendente.

---

# 2. O que já foi corrigido (não entra no roadmap abaixo)

Para não duplicar trabalho: os itens a seguir já foram resolvidos durante as sessões anteriores e **não precisam reaparecer em nenhum sprint**:
- Meta description da Home encurtada; `gallery.css` removido do carregamento da Home.
- Google Fonts com eixo itálico do Fraunces + peso Manrope 500 removido (Home, Espaço e Casamentos já nascem com a URL corrigida).
- `preconnect` para `images.unsplash.com` (Home, Espaço, Casamentos).
- H3 em peso 500 (era 600), `hero__subheadline` em 38ch, espaçamento do CTA de Como Funciona, alternância de fundo FAQ↔CTA Final da Home.
- Foto "Mesa posta" incorreta (mostrava fogueira) corrigida na Home e em `/espaco/`.
- Bugs de implementação (posicionamento do Hero de `/espaco/`, legibilidade do véu escuro, tamanho da imagem de Bastidores em `/casamentos/`, mismatches de imagem em ambas as páginas) — todos encontrados e corrigidos durante os próprios builds.

---

# 3. Roadmap de Refatoração

## Sprint 1 — Higiene de produção (bloqueadores e inconsistências visíveis)

| Item | Esforço | Benefício | Risco |
|---|---|---|---|
| 1.2/1.3 — Corrigir header (wordmark) + adicionar Google Fonts nas 4 páginas stub (Debutantes, Corporativo, Aniversários, Contato) | **Baixo** — mecânico, mesmo padrão já aplicado 3×, sem decisão de design nova | **Alto** — elimina um logo quebrado e uma fonte errada rodando em produção agora | **Baixo** — mudança isolada de `<head>`/header, já validada 3 vezes |
| 1.1 — Produzir/entregar os 5 assets de marca ausentes | **Alto** (não é código — é produção de arte/logo real) | **Alto** — desbloqueia favicon, PWA e preview social em todo o site | **Baixo** tecnicamente, mas depende de terceiro (designer/cliente) |
| 2.4 — Confirmar domínio de produção e preencher `<lastmod>` do sitemap | **Baixo** | **Médio** — necessário para o lançamento, mas não afeta experiência hoje | **Baixo** |
| 3.5 — Corrigir contraste de `.trust-bar__number` | **Baixo** (uma linha de CSS) | **Médio** — evita herdar um bug de acessibilidade quando a seção for construída | **Baixo** |

**Por que primeiro:** são os únicos itens desta lista com um problema **visível hoje** em produção (logo quebrado, fonte errada) ou que bloqueiam lançamento de fato (assets, domínio). Todo o resto é dívida que ainda não incomodou ninguém.

## Sprint 2 — Consolidação de sistema (antes de construir mais páginas)

| Item | Esforço | Benefício | Risco |
|---|---|---|---|
| 2.1 — Extrair `.link-arrow` (ou nome equivalente) para `components.css`, migrar as 6 chamadas já existentes | **Médio** — precisa tocar 3 arquivos CSS + 3 HTMLs, testar visualmente cada ponto | **Alto** — para a duplicação de crescer a cada nova página; um lugar só para ajustar a microinteração no futuro | **Médio** — risco de regressão visual sutil em 6 lugares diferentes se não for testado com cuidado |
| 2.1 — Consolidar o grain-texture SVG num único ponto reutilizável | **Médio** — mesma lógica, mais pontos de uso (10 cópias) | **Médio** — reduz peso do arquivo CSS, facilita trocar o efeito de textura no futuro | **Baixo** — é puramente visual/idêntico, fácil de validar antes/depois |
| 2.1 — Consolidar o bloco `__intro` num utilitário compartilhado | **Baixo–Médio** | **Médio** — mesma lógica dos itens acima | **Baixo** |
| 3.1 — Decidir o destino de `config.js` (virar fonte real ou ser removido) | **Baixo** (remover) a **Médio** (integrar de verdade aos links `wa.me`) | **Baixo-Médio** — hoje é só confusão de manutenção, não afeta o usuário final | **Baixo** se remover; **Médio** se integrar (toca todo link `wa.me` do site) |
| 3.2 — Remover `.site-header--overlay` e os ramos mortos de `hero.js`, ou documentá-los como scaffold intencional para um Hero futuro | **Baixo** | **Baixo** — só limpeza, sem efeito visível | **Baixo** |
| 3.3 — Padronizar convenção de `data-wa` em todas as páginas | **Baixo** | **Médio** — necessário para o KPI de "cliques por seção" do `ESTRATEGIA.md` funcionar de forma comparável entre páginas | **Baixo** |
| 3.4 — Adicionar `data-scroll-depth` em marcos relevantes de `/espaco/` e `/casamentos/` | **Baixo** | **Médio** — fecha uma lacuna de medição já pedida pela estratégia | **Baixo** |

**Por que agora:** Debutantes, Corporativo e Aniversários ainda não foram construídas — este é o momento mais barato para consolidar os padrões repetidos, antes de uma 4ª e 5ª cópia de cada componente nascerem nessas páginas.

## Sprint 3 — Conteúdo e expansão estratégica

| Item | Esforço | Benefício | Risco |
|---|---|---|---|
| 2.2 — Construir Barra de Confiança, Sobre o Speranza e Localização na Home | **Médio** (cada seção é um esforço de design+copy próprio, como as já construídas) | **Alto** — fecha o wireframe original da Home, adiciona mapa/endereço embutido que hoje só existe em texto no footer | **Baixo** — mesmo processo (estratégia → wireframe → implementação) já validado 2 vezes |
| 2.3 — Decidir a metáfora estrutural de Debutantes, Corporativo e Aniversários (cada uma pode não ser um clone de Casamentos) **antes** de escrever qualquer wireframe | **Baixo** (é uma decisão, não código) | **Alto** — evita que o site inteiro pareça um template aplicado a 4 públicos, risco já registrado em `WEDDING_PAGE_WIREFRAME.md` | **Baixo** — é só uma etapa de reflexão a mais antes da fase de estratégia de cada página |
| 3.7 — Implementar `FAQPage` (JSON-LD) nas 3 FAQs já construídas | **Baixo–Médio** | **Médio** — elegibilidade a rich snippet no Google, conteúdo já é real e confirmado | **Baixo** — estrutura de dados aditiva, não visível na página |
| 1.4 — Sessão fotográfica profissional + substituição de todos os placeholders (Home, Espaço, Casamentos) | **Alto** (não é código — produção fotográfica real) | **Altíssimo** — é o item que mais eleva a "sensação premium" do site inteiro | **Baixo** tecnicamente (todo TODO já documenta exatamente qual foto entra onde, ver `ART_DIRECTION.md`) — o risco real é de calendário/orçamento, não técnico |
| 4.1 — Revisar `<title>` da Home (e das páginas novas) para ficar dentro de ~60 caracteres | **Baixo** | **Baixo–Médio** | **Baixo** |

**Por que por último:** são itens de expansão de conteúdo/estratégia (novas seções, novas páginas, nova sessão de fotos) — dependem de decisões de negócio (orçamento de fotografia, prioridade de qual página construir a seguir) mais do que de disponibilidade técnica.

---

**Nenhum código foi alterado para produzir este documento.** Cada item do roadmap, quando priorizado, deve seguir o mesmo processo já validado no projeto: estratégia/wireframe documentado primeiro (quando for seção ou página nova) → implementação → verificação visual e de acessibilidade antes de considerar concluído.
