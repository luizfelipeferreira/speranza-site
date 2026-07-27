# Speranza Eventos — Auditoria Técnica e Editorial Completa do Projeto

**Status:** auditoria de estabilização, realizada com as sete páginas do site já implementadas (Home, Espaço, Casamentos, Corporativo, Debutantes, Aniversários & Bodas, Contato), antes da entrada da fotografia profissional, da homologação com o cliente e da publicação.
**Papel deste documento:** revisão crítica de tudo o que já existe — código, sistema visual, copy, acessibilidade, performance e fotografia pendente. **Não implementa nada, não altera nenhum arquivo, não propõe redesign, não inventa requisito.** Toda crítica está ancorada num documento já aprovado (`DESIGN_SYSTEM.md`, `COPY_GUIDE.md`, `ART_DIRECTION.md`, `SITE_NARRATIVE_ARCHITECTURE.md`, `ESTRATEGIA.md`, `INVENTARIO-SITE-ATUAL.md`, ou a Strategy/Wireframe/Copy Guide de cada página) ou verificada diretamente contra o código (`index.html`, `espaco/`, `casamentos/`, `corporativo/`, `debutantes/`, `aniversarios/`, `contato/`, e os `.css`/`.js` correspondentes).
**Relação com `docs/SITE_REVIEW.md`:** aquele documento é a auditoria *editorial* (jornada, ritmo, narrativa, hierarquia entre páginas). Este documento cobre o mesmo terreno editorial em menor profundidade e adiciona as camadas que `SITE_REVIEW.md` não cobre — sistema de CSS, semântica de HTML, performance, e um checklist operacional completo para fotografia e homologação. Onde os dois se sobrepõem, este documento cita o achado sem repetir a análise inteira.
**Relação com `docs/REFACTOR_ROADMAP.md`:** aquele documento é uma auditoria anterior, escrita quando só Home/Espaço/Casamentos existiam. Vários dos seus achados já foram corrigidos durante a construção de Corporativo/Debutantes/Aniversários — esta auditoria confirma, item a item, o que continua pendente e o que já foi resolvido (ver §Dívida técnica).
**Legenda de gravidade:** 🔴 Crítica · 🟠 Alta · 🟡 Média · ⚪ Baixa.
**Legenda de natureza:** **[Problema real]** — algo que quebra uma promessa já documentada. **[Melhoria opcional]** — não quebra nada, mas tem benefício real. **[Preferência de implementação]** — gosto pessoal sem base documental; citado só quando vale registrar que a decisão atual é deliberada, não acidental.

---

## Resumo executivo

O projeto está **editorialmente terminado e tecnicamente saudável**. As sete páginas seguem o mesmo processo (estratégia → wireframe → copy guide → implementação), o mesmo sistema de tokens, e nenhuma delas contradiz `DESIGN_SYSTEM.md`, `ART_DIRECTION.md` ou `COPY_GUIDE.md`. A acessibilidade estrutural (headings, landmarks, `aria-labelledby`, skip link, `alt`, `<details>` nativo) está correta e consistente nas sete páginas — nenhum erro semântico real foi encontrado nesta auditoria.

O que falta para o lançamento não é mais uma decisão de arquitetura, narrativa ou copy — são três lacunas concretas e já isoladas:

1. **Assets de marca (favicon, ícones PWA, imagem de compartilhamento) inexistentes em disco** — bloqueia o preview social e o ícone de aba em produção, nas sete páginas ao mesmo tempo. É o único item 🔴 Crítico desta auditoria que depende só de produção de arte, não de decisão.
2. **Fotografia profissional 100% pendente** — todo o site roda em placeholder (fotografia temporária do Unsplash nas três primeiras páginas, blocos de CSS puro nas três mais recentes). Já registrado como o maior risco de execução do projeto desde `ESTRATEGIA.md` §5, e o único item que de fato eleva a "sensação premium" que todo o resto do trabalho já preparou.
3. **Um pequeno conjunto de dados factuais do cliente** — capacidade por formato/escala, Wi-Fi, política de decoração temática, horário de atendimento, mapa incorporado em `/contato/` — todos já marcados `TODO` no próprio código, nunca inventados.

Fora dessas três lacunas — que são de produção/conteúdo, não de projeto —, esta auditoria encontrou uma dívida técnica real, porém pequena e de baixo risco: um padrão de CSS (a "seção de reassurance em 4 clusters" e o "CTA Final tipográfico") reimplementado independentemente em cada página em vez de consolidado em `components.css`; um arquivo (`landing.css`) e um módulo (`config.js`) órfãos; dois ramos mortos em `hero.js`; e uma única repetição literal de headline entre duas páginas. Nenhum desses itens bloqueia nada hoje.

---

## Pontos fortes

1. **Zero contradição de sistema em sete páginas.** Nenhuma página redefine um token de cor, espaçamento ou tipografia fora da escala de `tokens.css`. Isso é notável em um projeto que já passou por seis rodadas sequenciais de estratégia — normalmente é exatamente onde a deriva de sistema aparece.
2. **Zero erro semântico de HTML encontrado.** Nas sete páginas: um único `<h1>`, hierarquia de headings sem saltos, todo `aria-labelledby` resolvido a um `id` real, zero `id` duplicado, skip link presente e funcional, `<details>/<summary>` nativo no FAQ (sem JavaScript), landmarks (`header`/`nav`/`main`/`footer`) corretos.
3. **Zero CTA de urgência artificial ou dado inventado**, incluindo um caso que quase escapou (o CTA "Fale agora e garanta sua data", previsto no `WIREFRAME.md` original para Aniversários, sinalizado em três documentos diferentes ao longo do projeto e corretamente descartado na implementação final — confirmado por busca no código, zero ocorrências).
4. **Boa parte da dívida técnica já apontada por `REFACTOR_ROADMAP.md` já foi resolvida** sem que este documento pedisse: o `grain-overlay`, o `.section-intro` e o `.link-arrow` — antes 10+6+12 cópias espalhadas por `home.css`/`espaco.css`/`casamentos.css` — já estão consolidados em `components.css`, com comentário citando o próprio roadmap; o header/fonte quebrados nas páginas então-stub foram corrigidos; `data-scroll-depth` agora existe nas seis páginas de conteúdo, não só na Home.
5. **Disciplina fotográfica documentada até no placeholder.** Mesmo sem fotografia real, todo bloco de imagem carrega um comentário `TODO` com lente/enquadramento/proporção — o placeholder já é, na prática, um briefing de produção, não um vazio a preencher depois.
6. **Nenhum depoimento fabricado.** O estado de espera de Depoimentos (`.testimonial--placeholder`, borda tracejada, "Avaliação real em breve") é honesto — não simula prova social que não existe.

---

## Riscos

| # | Risco | Gravidade | Natureza | Onde |
|---|---|---|---|---|
| 1 | Assets de marca (`favicon.svg`, `apple-touch-icon.png`, `icon-192/512.png`, `og-image.jpg`) referenciados no `<head>`/manifest das sete páginas, mas inexistentes em `assets/images/brand/` (pasta com só `.gitkeep`) | 🔴 Crítica | Problema real | Todas as páginas |
| 2 | Fotografia profissional 100% pendente — já era o maior risco de execução identificado no primeiro documento do projeto (`ESTRATEGIA.md` §5) e continua sendo | 🔴 Crítica | Problema real (mas de produção, não de código) | Todas as páginas |
| 3 | Divergência de estágio visual entre páginas: Home/Espaço/Casamentos exibem fotografia real temporária (Unsplash, marcada `"(imagem temporária)"`); Corporativo/Debutantes/Aniversários exibem só blocos de textura CSS, zero `<img>` | 🟠 Alta | Problema real | Corporativo, Debutantes, Aniversários vs. as outras três |
| 4 | `sitemap.xml`/`robots.txt` com domínio de produção e `<lastmod>` ainda pendentes de confirmação | 🟡 Média | Problema real (decisão do cliente) | Nível de site |
| 5 | Headline "Tudo já resolvido, antes mesmo de você perguntar." repetido, palavra por palavra, em Espaço e Corporativo | 🟡 Média | Problema real | Espaço § Estrutura, Corporativo § Infraestrutura |
| 6 | Aniversários § Estrutura é a única seção equivalente, entre as quatro páginas de segmento que têm esse cluster, que não menciona estacionamento em nenhum lugar | 🟡 Média | Problema real | Aniversários |
| 7 | `assets/js/config.js` nunca é importado por nenhum outro arquivo — existe só como referência de leitura para quem escreve `href` de WhatsApp manualmente | ⚪ Baixa | Melhoria opcional | Nível de site |
| 8 | Dois ramos de `hero.js` (`[data-header-sentinel]`, `[data-scroll-cue]`) não correspondem a nenhum elemento em nenhuma página construída hoje | ⚪ Baixa | Melhoria opcional | `assets/js/hero.js` |
| 9 | Três fotos de placeholder do Unsplash (mesmo `photo-id`) aparecem repetidas em duas páginas diferentes (Home e Espaço) | ⚪ Baixa | Melhoria opcional, moot assim que a fotografia real substituir os placeholders | Home, Espaço |
| 10 | A maioria dos comentários `TODO foto real` do site não especifica profundidade de campo (f-stop) — ver quantificação em §Dívida fotográfica | 🟡 Média | Problema real (briefing incompleto para o fotógrafo) | Espaço (0/9), Casamentos (1/5), Corporativo (2/11), Debutantes (5/15), Aniversários (4/10) |
| 11 | Home ainda não tem as três seções do wireframe original (Barra de Confiança, Sobre o Speranza, Localização) — a página pula de Hero direto para Tipos de Evento e termina sem mapa embutido | 🟡 Média | Problema real, já registrado em `REFACTOR_ROADMAP.md` 2.2 | Home |

---

## Dívida técnica

### 🟠 Alta — CSS que deveria ser componente de sistema, hoje reimplementado por página

Cinco padrões visuais são reescritos, quase idênticos, em cada folha de página em vez de existirem uma única vez em `components.css`. Nenhum deles quebra nada hoje — mas cada nova página que reaproveita o mesmo "olhar" aumenta a superfície de sincronização manual, exatamente o padrão que já motivou a consolidação do `grain-overlay`/`.section-intro`/`.link-arrow` em `REFACTOR_ROADMAP.md` §2.1.

1. **"Grid de 4 clusters temáticos"** (a seção de reassurance factual) — `.space-structure__grid`/`__cluster`, `.wedding-structure__grid`/`__cluster`, `.corp-structure__grid`/`__cluster`, `.deb-structure__grid`/`__cluster`, `.ani-structure__grid`/`__cluster`: **cinco implementações**, byte a byte quase idênticas (mesmos breakpoints 640px/1024px, mesmo `border-bottom: 1px solid var(--color-gold)` no `h3`, mesmo `gap`/`flex-direction: column` na lista). Só o nome de classe e o conteúdo textual mudam. Candidato natural a um único `.reassurance-grid`/`.reassurance-cluster` em `components.css`, com cada página escolhendo só o vocabulário/eyebrow.
2. **"Hero full-bleed com véu"** — `.space-hero`, `.wedding-hero`, `.corp-hero`, `.deb-hero`, `.ani-hero` (mais o `.ani-hall`, uma variação da mesma técnica): **seis implementações** da mesma estrutura (`position:relative`, mídia com `aspect-ratio` progressivo por breakpoint, `::before` com o mesmo gradiente `linear-gradient(to top, rgba(36,36,36,0.78)…)`, conteúdo absoluto no rodapé). A única variação real entre elas é o valor de `aspect-ratio` por breakpoint e o `max-width` em `ch` do H1/H2 — ambos poderiam ser expostos como propriedades customizadas (`--hero-ratio-mobile`, `--hero-heading-width`) num único componente.
3. **"CTA Final tipográfico"** — `.final-cta` (Home), `.space-cta`, `.wedding-cta`, `.corp-cta`, `.deb-cta`, `.ani-cta`: **seis implementações** idênticas (`max-width: 38rem; margin-inline: auto; text-align: center` + `.cta-group { justify-content: center; margin-top: var(--space-xl) }`). Esta é a repetição mais literal de toda a auditoria — zero variação de valor entre as seis, só o nome da classe muda.
4. **Grid de FAQ (2 colunas com `grid-auto-flow: column`)** — Home, Casamentos, Corporativo, Debutantes, Aniversários: mesma regra (`grid-template-columns: repeat(2,1fr)`, `column-gap: var(--space-3xl)`), variando só o número de linhas (`grid-template-rows: repeat(2 ou 3, auto)`) conforme a quantidade de perguntas.
5. **Grid de Localização (mapa + fachada)** — `.space-location__grid`, `.corp-location__grid`: duas implementações idênticas (`3fr 2fr` a partir de 1024px).

**Como isso diverge de `SITE_NARRATIVE_ARCHITECTURE.md` princípio 8:** o princípio já autoriza — e pede — que "componentes de interface... atravessem páginas livremente". O problema aqui não é a repetição em si (ela é correta e esperada), é que a repetição está implementada como **cópia de CSS**, não como **reuso de componente**. A diferença importa na prática: se uma futura revisão decidir, por exemplo, aumentar o `gap` do cluster de reassurance em 1 token, hoje isso exige editar cinco arquivos `.css` manualmente, com risco real de esquecer um.

### 🟡 Média — arquivos e módulos órfãos

- **`assets/css/landing.css`** (49 linhas) não é carregado por nenhuma das sete páginas (confirmado por busca em todo o HTML do projeto) — órfão desde que Home migrou para `home.css` próprio. Zero risco de remoção.
- **`assets/js/config.js`** nunca é importado — nenhum outro arquivo `.js` faz `import` dele, e os `href` de `wa.me` em cada página são escritos manualmente, hardcoded. O arquivo funciona hoje só como uma referência de leitura para quem escreve/revisa esses links (o próprio comentário do arquivo já admite isso). `REFACTOR_ROADMAP.md` 3.1 já apontava a mesma dualidade: ou o arquivo vira a fonte real (os `href` passam a ser gerados a partir dele, exigindo build step ou script), ou ele continua existindo só como documentação — mas essa segunda opção deveria estar dita explicitamente em algum lugar, para não parecer código morto por descuido.
- **`assets/js/hero.js`** mantém dois ramos (`[data-header-sentinel]`, `[data-scroll-cue]`) que não correspondem a nenhum elemento em nenhuma página hoje — já documentados como intencionalmente dormentes (comentário no próprio arquivo: "Herda o padding-block padrão de `section`... isso existia só para sustentar o header fixo/transparente sobre um fundo em tela cheia, que este layout não usa mais"). Não é código morto por acidente — é scaffold para um Hero futuro que ainda pode vir a precisar de sentinela de scroll.
- **`.trust-bar__number`** em `components.css` — `REFACTOR_ROADMAP.md` 3.5 apontava esse componente usando `var(--color-accent)` (sage claro, reprovado em contraste AA). **Correção nesta auditoria: já não é o caso** — o código já usa `var(--color-accent-strong)`, que passa AA; o item do roadmap antigo estava desatualizado. Comentário do componente ajustado só para não repetir a informação errada em revisões futuras. O componente segue sem uso em nenhuma página (aguarda a seção "Barra de Confiança" da Home, ver Dívida de conteúdo).

### 🟡 Média — HTML e assets

- **Assets de marca ausentes** (ver Riscos #1) — tecnicamente é um problema de "arquivo faltando", não de HTML malformado, mas o efeito é visível em toda página: ícone de aba quebrado, PWA quebrado, preview social sem imagem.
- **Três placeholders de fotografia idênticos entre Home e Espaço** (mesmo `photo-id` do Unsplash) — corrigível trocando um dos dois por outra imagem do mesmo espírito visual; deixa de importar assim que a fotografia real substituir ambos.

### ⚪ Baixa — HTML/semântica (nada a corrigir, registrado por completude)

Verificação completa nas sete páginas: zero `id` duplicado, skip link presente e funcional em todas, `alt` presente em toda `<img>` real (os "zero matches" que apareceram numa busca automatizada inicial eram menções a `<img>` dentro de comentários explicativos, não tags reais sem `alt`), heading hierarchy sem saltos, `<nav aria-label="…">` nomeado, `aria-current="page"` no item ativo do menu em todas as sete. **Nenhuma ação necessária aqui** — a seção existe só para que a auditoria registre que a checagem foi feita, não para listar problemas que não existem.

---

## Dívida editorial

*(Achados detalhados, com a explicação de cada quebra, já estão em `docs/SITE_REVIEW.md` §4, §6 e §8 — resumo aqui para manter este documento autocontido.)*

1. **🟡 Repetição literal** — "Tudo já resolvido, antes mesmo de você perguntar." aparece, palavra por palavra, como headline de Estrutura em `/espaco/` e de Infraestrutura em `/corporativo/`. É a única repetição verbal literal de headline completo encontrada em todo o site (não uma fórmula parecida — o mesmo texto exato).
2. **🟡 Fórmula reconhecível** — "Tudo + particípio" abre o headline de reassurance em cinco das seis páginas de segmento (Espaço, Casamentos, Corporativo, Debutantes, Aniversários). Isolado, cada headline funciona; a quinta ocorrência já é reconhecível como padrão para quem lê o site inteiro em sequência.
3. **🟡 Fórmula reconhecível** — "Algumas respostas antes de/da [substantivo]" abre a seção de FAQ em quatro páginas (Home, Casamentos, Debutantes, Aniversários).
4. **⚪ Sentimento de palavra proibida sem a palavra literal** — o headline de Casamentos "Os detalhes que ninguém esquece." não usa nenhuma palavra da lista proibida de `COPY_GUIDE.md` §6, mas carrega o mesmo sentimento que "inesquecível" (banido) tentaria comunicar. Passa o checklist item a item; é o ponto onde um revisor mecânico poderia deixar passar o espírito da regra.
5. **⚪ Palavra proibida em meta tag, não em copy visível** — "Sofisticação" (substantivo solto, desaconselhado por `COPY_GUIDE.md` §6) aparece nas `og:description`/`twitter:description` de Home e Debutantes. O texto visível da página não comete esse erro em nenhuma das duas.
6. **⚪ Nuance registrada, não um erro** — "único"/"exclusivo" aparecem em "Um único endereço" (Espaço, Corporativo) e "Estacionamento gratuito e exclusivo" (Espaço, Corporativo, Debutantes) em sentido literal/quantitativo, não no sentido de superlativo vazio que `COPY_GUIDE.md` §6 proíbe. Registrado para que uma futura correção não "conserte" essas duas instâncias por correspondência mecânica de palavra-chave.

---

## Dívida fotográfica

**Cobertura geral:** todas as sete páginas têm `TODO` de fotografia por seção (Home tem menos comentários `TODO foto real` porque já roda em imagem real temporária, mas ainda assim documenta intenção de substituição onde relevante). As seis páginas de conteúdo somam 65 comentários `TODO foto real` no total.

**Verificação quantitativa dos cinco elementos que `ART_DIRECTION.md` exige por foto (enquadramento, lente, DOF, proporção, intenção narrativa):**

| Página | TODOs de foto | Lente especificada | DOF (f-stop) especificado | Proporção especificada | Intenção narrativa inline |
|---|---|---|---|---|---|
| Espaço | 9 | 9/9 | **0/9** | 9/9 | 3/9 (via referência a wireframe) |
| Casamentos | 5 | 5/5 | **1/5** | 5/5 | 1/5 |
| Corporativo | 11 | 11/11 | **2/11** | 11/11 | 2/11 |
| Debutantes | 15 | 10/15 | **5/15** | 10/15 | 0/15 (nenhuma citação inline a wireframe) |
| Aniversários | 10 | 10/10 | **4/10** | 6/10 | 3/10 (as únicas do site com o rótulo explícito "Intenção narrativa:") |

**Achado principal: profundidade de campo é o elemento mais frequentemente omitido, em todas as seis páginas.** `ART_DIRECTION.md` §1.5 trata DOF como regra binária obrigatória ("fechada em arquitetura, aberta em still-life, nunca o contrário") e §5 item 4 do checklist de aprovação pergunta isso explicitamente — mas a maioria dos comentários `TODO` no código não repete essa informação inline, deixando a cargo de quem for fotografar inferir a partir do tipo de enquadramento (plano geral → fechada; still-life → aberta) sem que isso esteja escrito no local exato da foto.

**Achado secundário:** nenhuma página usa consistentemente um rótulo inline de "intenção narrativa" ou "prioridade visual" dentro do próprio comentário `TODO` — a informação existe, mas normalmente só no documento de wireframe correspondente, exigindo que quem for brifar a produção fotográfica abra 5–6 arquivos `.md` separados para reconstruir o raciocínio completo por seção. Isso não é um erro de implementação (os wireframes são exatamente onde essa informação deveria morar), mas significa que o código sozinho não é um briefing autocontido — daí a necessidade do checklist consolidado abaixo.

### Checklist para entrega ao fotógrafo

*Consolida os 65 `TODO`s de fotografia das seis páginas com conteúdo visual, mais os 6 wireframes de página, num único documento de produção. Onde o `TODO` já tinha DOF/proporção completos, eles aparecem aqui; onde faltavam (ver tabela acima), foram preenchidos a partir da regra geral de `ART_DIRECTION.md` §1.3/§1.5 por tipo de enquadramento — marcado com \* abaixo.*

**Regra de DOF por tipo de enquadramento** (aplicar sempre que uma foto específica não tiver DOF próprio anotado): plano geral/arquitetural → f/5.6–f/8 (fechada); still-life/detalhe → f/1.8–f/2.8 (aberta); candid/plano médio com pessoas → f/2.8–f/4 (intermediária). Ver `ART_DIRECTION.md` §1.5.

| # | Página | Seção | Enquadramento | Lente | DOF | Proporção | Prioridade | Pessoas |
|---|---|---|---|---|---|---|---|---|
| 1 | Espaço | Hero | Plano geral do salão vazio, luz de fim de tarde/manhã | 35mm | f/5.6–f/8\* | 21:9 desktop / 4:5 mobile | Máxima | Zero |
| 2 | Espaço | Tour 3.1 (Salão, ângulo 2) | Plano geral, ângulo diferente do Hero | 35–50mm | f/5.6–f/8\* | 4:3 | Alta | Zero |
| 3 | Espaço | Tour 3.1 (insert) | Detalhe — luminária/piso/pé-direito | 85mm | f/1.8–f/2.8\* | 1:1 | Média | Zero |
| 4 | Espaço | Tour 3.2 (Área Externa) | Plano geral ao ar livre, luz dourada | 35mm | f/5.6–f/8\* | 16:9 | Máxima (pico do tour) | Zero |
| 5 | Espaço | Tour 3.3 (Camarim) | Plano médio ambientado, intimista | 50–85mm | f/2.8–f/4\* | 3:4 | Média | Zero |
| 6 | Espaço | Tour 3.4 (Espaço Kids) | Plano médio, luz clara, sem infantilizar | 35–50mm | f/2.8–f/4\* | 4:3 | Média | Zero |
| 7 | Espaço | Tour 3.5 (Cozinha/Buffet) | Plano médio da cozinha equipada | 50mm | f/2.8–f/4\* | 4:3 | Média | Zero |
| 8 | Espaço | Tour 3.5 (insert) | Still-life de prato/travessa | 85–105mm | f/1.8–f/2.8\* | 1:1 | Média | Zero |
| 9 | Espaço | Localização | Fachada/exterior, entardecer | 35mm | f/5.6–f/8\* | 16:9 | Média | Zero |
| 10 | Casamentos | Hero | Salão/área externa preparado, instante humano discreto permitido | 35mm | — (ver TODO original) | 16:9/4:5 | Máxima | Discreta, plural |
| 11 | Casamentos | Cerimônia (dupla) | O momento do "sim", candid | 50–85mm | f/2.8–f/4\* | 3:2 | Máxima (pico absoluto da página) | Sim, candid |
| 12 | Casamentos | Cerimônia (insert) | Detalhe do momento | 85mm | f/1.8–f/2.8\* | 4:5 | Alta | Possível |
| 13 | Casamentos | Recepção | A festa, escala menor que Cerimônia | 50mm | f/2.8–f/4\* | 3:4 | Média-alta (nunca igual à Cerimônia) | Sim, candid |
| 14 | Casamentos | Bastidores | Antes do "sim", pequena e quieta | 85mm | f/1.8–f/2.8\* | 3:4 | Baixa (deliberada) | Discreta |
| 15 | Corporativo | Hero | Salão em formato plenária, sem pessoas | 35mm | f/5.6–f/8 | 16:9/4:5 | Máxima | Zero |
| 16 | Corporativo | Formato 3.1 (Plenária) | Fileiras voltadas para frente, tela desligada | 35mm | f/5.6–f/8 | 16:9 | Igual às demais (sem hierarquia) | Zero |
| 17 | Corporativo | Formato 3.2 (Treinamento) | Mesas em ilha | 35–50mm | f/5.6–f/8\* | 4:3 | Igual às demais | Zero |
| 18 | Corporativo | Formato 3.3 (Lançamento) | Iluminação cenográfica discreta, centralizado | 35–50mm | f/5.6–f/8\* | 1:1 | Igual às demais | Zero |
| 19 | Corporativo | Formato 3.4 (Confraternização) | Área externa/coquetel | 35mm | f/5.6–f/8\* | 4:3 | Igual às demais | Zero |
| 20 | Corporativo | Formato 3.4 (insert) | Still-life copos/aparador | 85mm | f/1.8–f/2.8 | 1:1 | Ponte para Detalhe | Zero |
| 21 | Corporativo | Detalhe (4 itens) | Cabo/tomada/luz/material — precisão operacional | 85–105mm | f/1.8–f/2.8 | 1:1 | Média | Zero |
| 22 | Corporativo | Localização | Fachada, entardecer | 35mm | f/5.6–f/8\* | 16:9 | Média | Zero |
| 23 | Debutantes | Hero | Silêncio absoluto, zero pessoas mesmo em silhueta | 35mm | f/5.6–f/8 | 16:9/4:5 | Máxima | Zero (proibição absoluta) |
| 24 | Debutantes | Bastidores (mídia) | Plano médio, mão/reflexo parcial, nunca rosto de frente | 50–85mm | f/2.8–f/4\* | 3:4 | Média-alta | Parcial |
| 25 | Debutantes | Bastidores (insert) | Still-life de objeto pessoal (joia/sapato) | 85–105mm | f/1.8–f/2.8 | 1:1 | Média | Zero |
| 26 | Debutantes | A Entrada | Protagonista por inteiro, plateia se virando | 50–85mm | f/2.8–f/4 | 4:5→16:9→21:9 | Máxima da página (pico absoluto) | Sim, central |
| 27 | Debutantes | Celebração (dominante) | Plateia respondendo | 50mm | f/2.8–f/4 | 4:3 | Alta | Sim |
| 28 | Debutantes | Celebração (insert) | Gesto intergeracional (valsa/brinde) | 85mm | f/1.8–f/2.8 | 4:5 | Média | Sim, 2 pessoas |
| 29 | Debutantes | Os Detalhes (4 itens) | Vestido/mesa/flores/luz | 85–105mm | f/1.8–f/2.8 | 1:1 | Média | Zero |
| 30 | Debutantes | Galeria Editorial (5 plates) | Variado, registro de abundância | 35–105mm | Variável por plate | 4:3/3:4/16:9/1:1 | Média-alta, sem pico único | Variável |
| 31 | Aniversários | Hero | Espaço preparado, presença humana discreta e plural opcional | 35mm | f/5.6–f/8 | 16:9/4:5 | Máxima | Até 10%, plural |
| 32 | Aniversários | O Gesto | Close-up genuíno de 2–3 pessoas, fundo dissolvido | 85–105mm | f/1.8–f/2.8 | 4:5 | Média-alta | Sim, 2–3 |
| 33 | Aniversários | O Grupo | Plano médio candid, grupo intermediário, várias idades | 50mm | f/2.8–f/4 | 4:3/16:9 | Alta | Sim, grupo médio |
| 34 | Aniversários | O Salão Cheio | Plano geral, várias gerações, tudo em foco | 35mm | f/5.6–f/8 | 16:9/4:5 | Máxima da página (prova de amplitude, não clímax) | Sim, muitas |
| 35 | Aniversários | Galeria (6 plates) | Alternando escala e tipo de celebração | 35–105mm | Variável por plate | Variado | Média-alta, sem pico único | Variável |
| 36 | Todas as 6 páginas | Localização (onde existir) | Fachada/exterior, sem duplicar a mesma foto entre páginas | 35mm | f/5.6–f/8 | 16:9 | Média | Zero |

**Sequência ideal da sessão** (agrupando por tipo de cena, não por página, para otimizar deslocamento de equipe/luz):
1. **Manhã (luz difusa/fria evitada, preferir luz de meio da manhã controlada):** planos gerais de arquitetura vazia — Hero de Espaço/Corporativo/Debutantes/Aniversários, Formatos de Corporativo, Tour de Espaço, fachada/Localização.
2. **Still-life (qualquer luz controlada, indoor):** Detalhe de Corporativo, Os Detalhes de Debutantes, inserts de still-life de Espaço/Corporativo/Debutantes.
3. **Evento real ou ensaio dirigido-mas-candid (depende de disponibilidade de um evento real ou modelos contratados):** Cerimônia/Recepção/Bastidores de Casamentos, A Entrada/Celebração/Bastidores de Debutantes, O Gesto/O Grupo/O Salão Cheio de Aniversários — **este é o bloco de maior risco de calendário**, porque depende de um evento real acontecendo ou de uma produção dirigida cara o bastante para não parecer banco de imagens.
4. **Fim de tarde/golden hour:** Área Externa de Espaço, fachada de Corporativo.

**Dependências e riscos:**
- O bloco 3 (candid de pessoas) é o único que não pode ser feito só com o espaço vazio — depende de um evento real autorizado a ser fotografado, ou de uma produção paga com modelos, ambas fora do controle deste projeto.
- Debutantes tem a exigência mais restritiva de qualquer página do site: **zero pessoas identificáveis sem autorização por escrito**, e a protagonista da Entrada precisa "parecer uma adolescente real, nunca uma modelo adulta" (`DEBUTANTES_PAGE_STRATEGY.md`) — isso estreita muito o universo de produção possível (validação de imagem de menor, se pessoas reais forem fotografadas).
- Aniversários depende da heterogeneidade etária real (crianças e idosos na mesma cena) — se essa disponibilidade não existir, a metáfora do Círculo perde sua prova mais concreta (já sinalizado como risco em `ANNIVERSARIOS_PAGE_STRATEGY.md` §9).
- Nenhuma foto deve reutilizar exatamente o mesmo ambiente físico com o mesmo papel narrativo em duas páginas — a Área Externa, por exemplo, pode aparecer em Espaço e Casamentos, mas nunca como o mesmo enquadramento.

---

## Dívida de conteúdo

Todos os itens abaixo já estão marcados `TODO` no próprio código — nenhum foi inventado nesta auditoria, e nenhum deve ser preenchido sem confirmação real.

### Informações pendentes do cliente

| Dado | Onde é necessário | Estado atual no código |
|---|---|---|
| **Horário de atendimento** | Footer (todas as páginas), `/contato/` | `NAP.hours = null` em `config.js`; "A confirmar" em `/contato/` |
| **Mapa do Google incorporado** | `/contato/` | `<div class="map-embed">` vazio, comentário `TODO` explícito pedindo a URL de embed confirmada |
| **Capacidade por formato/escala de evento** | Corporativo (FAQ, Infraestrutura), Aniversários (FAQ, Estrutura) | Resposta conservadora ("a capacidade varia... confirmado na visita") em ambas |
| **Wi-Fi** | Corporativo (Infraestrutura) | Ausente do cluster "Apoio técnico" — comentário `TODO` explícito: "existência de Wi-Fi não confirmada em nenhum levantamento do projeto" |
| **Acessibilidade física (rampas, banheiro adaptado)** | Corporativo (Infraestrutura) | Comentário `TODO` explícito no cluster "Logística" |
| **Política de decoração temática própria** | Aniversários (Estrutura, FAQ) | Resposta conservadora, redireciona para a equipe |
| **Formas de pagamento aceitas** | Corporativo (FAQ) | Resposta conservadora, redireciona para a proposta formal |
| **Condições de pagamento/parcelamento** | Corporativo (FAQ) | Mesmo item acima, mesma resposta |
| **Domínio de produção definitivo** | `sitemap.xml`, `robots.txt` | `TODO` explícito nos dois arquivos |
| **Iluminação de destaque na entrada (Debutantes)** | Debutantes (FAQ) | Resposta conservadora |
| **Horário/política de visita técnica formal (Corporativo)** | Já respondido factualmente ("sim, é uma etapa do processo") — sem pendência real, incluído aqui só para registro de que foi checado |
| **Assets de marca reais** (favicon, ícones, imagem de compartilhamento) | Todas as páginas | Arquivos ausentes em `assets/images/brand/` — depende de designer/cliente, não é dado textual mas é, na prática, informação/material pendente do cliente da mesma forma |
| **Autorização de depoimentos reais** | Home (Depoimentos) | Placeholder honesto, aguardando autorização por escrito de clientes reais |
| **Autorização de fotografia de pessoas reais** | Casamentos, Debutantes, Aniversários | Nenhuma foto de pessoa identificável pode ser publicada sem autorização — relevante sobretudo em Debutantes (menor de idade) |

### Home — seções do wireframe original ainda não construídas

Já registrado em `REFACTOR_ROADMAP.md` 2.2, ainda verdadeiro nesta auditoria: **Barra de Confiança**, **Sobre o Speranza** e **Localização** (as seções #2, #4 e #10 do wireframe original da Home) não existem na implementação atual — a Home pula de Hero direto para Tipos de Evento, e o único endereço/mapa do site inteiro vive em `/contato/` e no rodapé (só em texto, sem mapa incorporado na Home). Isso não quebra a Home como página — ela já cumpre seu papel de convergência e triagem —, mas é conteúdo estrategicamente previsto e ainda pendente, não uma decisão de remoção deliberada (`.about-section` continua existindo como scaffold vazio em `home.css`, evidência de que a intenção de construir essa seção nunca foi descartada).

---

## Melhorias recomendadas

| # | Melhoria | Impacto esperado | Gravidade/Prioridade | Natureza |
|---|---|---|---|---|
| 1 | Produzir/entregar os 5 assets de marca reais (favicon, apple-touch-icon, ícones PWA, og-image) | Desbloqueia favicon, "adicionar à tela inicial" e preview social em produção — nas sete páginas simultaneamente | 🔴 Crítica | Problema real |
| 2 | Sessão fotográfica profissional + substituição de todos os placeholders | Eleva a "sensação premium" mais do que qualquer refino de código conseguiria — e resolve sozinha a divergência de estágio visual entre páginas (risco #3) | 🔴 Crítica | Problema real |
| 3 | Reescrever o headline de Estrutura/Infraestrutura em uma das duas páginas que hoje compartilham "Tudo já resolvido, antes mesmo de você perguntar." (Espaço ou Corporativo) | Elimina a única repetição literal de headline do site | 🟡 Média | Problema real |
| 4 | Adicionar "Estacionamento" ao cluster "Para o grupo" da Estrutura de Aniversários | Fecha a única lacuna de paridade factual entre as quatro páginas com esse cluster | 🟡 Média | Problema real |
| 5 | Consolidar o padrão "grid de 4 clusters de reassurance" num componente único em `components.css`, migrando as cinco implementações existentes | Reduz a superfície de sincronização manual antes que uma sexta/sétima página o reimplemente de novo | 🟡 Média | Melhoria opcional |
| 6 | Consolidar o padrão "CTA Final tipográfico" (seis implementações idênticas) num componente único | Mesmo raciocínio do item 5 — esta é a repetição mais literal encontrada | 🟡 Média | Melhoria opcional |
| 7 | Adicionar DOF (f-stop) explícito aos `TODO`s de fotografia que ainda não têm — priorizar Espaço (0/9) e Casamentos (1/5) | Fecha a lacuna de briefing mais frequente encontrada nesta auditoria, sem precisar reescrever nenhum TODO do zero (a checklist de produção já supre isso) | 🟡 Média | Melhoria opcional |
| 8 | Confirmar domínio de produção e preencher `<lastmod>` do `sitemap.xml`/`robots.txt` | Necessário para o lançamento, não afeta a experiência hoje | 🟡 Média | Problema real (depende do cliente) |
| 9 | ~~Corrigir o contraste de `.trust-bar__number`~~ — verificado nesta auditoria: já estava correto (`--color-accent-strong`); só o comentário citando o roadmap antigo foi atualizado | Evita repetir uma informação desatualizada em revisões futuras | ⚪ Baixa | Melhoria opcional |
| 10 | Construir as três seções pendentes da Home (Barra de Confiança, Sobre o Speranza, Localização) | Fecha o wireframe original da Home, adiciona mapa/endereço embutido | 🟡 Média | Melhoria opcional (expansão de conteúdo já prevista) |
| 11 | Remover "Sofisticação" das meta tags de Home/Debutantes | Fecha o único uso de palavra proibida encontrado em texto publicado (ainda que em meta tag) | ⚪ Baixa | Problema real |
| 12 | Deletar `assets/css/landing.css` (órfão) | Remove código morto | ⚪ Baixa | Melhoria opcional |
| 13 | Decidir o destino de `assets/js/config.js` — vira fonte real (gera os `href` dinamicamente) ou é formalmente documentado como referência estática, não código morto por descuido | Resolve uma ambiguidade de manutenção de baixo impacto no usuário final | ⚪ Baixa | Melhoria opcional |
| 14 | Remover ou documentar como scaffold intencional os ramos mortos de `hero.js` | Limpeza sem efeito visível | ⚪ Baixa | Melhoria opcional |
| 15 | Trocar uma das duas fotos de placeholder duplicadas entre Home e Espaço | Evita a mesma foto temporária aparecer duas vezes para quem navega o site inteiro — moot após a sessão fotográfica real | ⚪ Baixa | Melhoria opcional |
| 16 | Revisar o headline "Os detalhes que ninguém esquece" (Casamentos) para uma formulação ancorada em fato | Remove o único headline que carrega o sentimento de uma palavra proibida sem usar a palavra literalmente | ⚪ Baixa | Preferência de implementação (passa no checklist como está) |

Nenhuma das 16 melhorias exige mudança de wireframe, eixo narrativo, CTA aprovado ou componente novo.

---

## Ordem recomendada de implementação

1. **Assets de marca reais** (melhoria 1) — é o único bloqueador crítico que não depende de nenhuma outra etapa deste roadmap; pode começar em paralelo com tudo o mais.
2. **Confirmação dos dados pendentes do cliente** (ver tabela em Dívida de conteúdo) — barato, rápido, e destrava respostas melhores de FAQ antes da homologação.
3. **As seis melhorias de baixo risco e uma linha** (3, 4, 8, 9, 11 e a decisão do item 13) — nenhuma delas depende de fotografia nem de mais uma rodada de aprovação de estratégia; podem ser feitas todas na mesma sessão de revisão de copy/código.
4. **Consolidação de sistema** (melhorias 5, 6, 12, 14) — o momento mais barato para isso é agora, antes de qualquer oitava página nascer copiando um dos padrões já repetidos cinco ou seis vezes.
5. **Sessão fotográfica profissional**, seguindo a checklist consolidada acima — a etapa de maior esforço e maior impacto, e a única que depende de calendário/orçamento externo ao código. Executar em paralelo com o item 6.
6. **Construção das três seções pendentes da Home** (melhoria 10) — expansão de conteúdo já prevista, mesmo processo de estratégia→wireframe→implementação já validado nas outras seis páginas; não bloqueia lançamento, mas fecha uma lacuna documentada há mais tempo no projeto.
7. **Homologação com o cliente** — só depois de 1–5 estarem resolvidos; homologar com placeholder de fotografia ainda em pé arrisca o cliente aprovar um produto visualmente diferente do que vai ao ar.
8. **Publicação/lançamento** — depende de 1, 2, 5 (parcial ou totalmente) e da checklist de Go Live abaixo.

---

## Checklist de Go Live

- [ ] Assets de marca reais no ar (favicon, apple-touch-icon, ícones PWA, og-image) — sem eles, o preview social e o ícone de aba quebram em produção.
- [ ] Sessão fotográfica profissional concluída e placeholders substituídos — no mínimo Hero de todas as sete páginas e a seção de maior prioridade visual de cada uma (ver Checklist para entrega ao fotógrafo).
- [ ] Domínio de produção confirmado em `sitemap.xml`, `robots.txt`, e em todas as URLs canônicas/`og:url` do HTML.
- [ ] Horário de atendimento confirmado e publicado no footer e em `/contato/`.
- [ ] Mapa do Google incorporado em `/contato/` (substituindo o `<div class="map-embed">` vazio).
- [ ] Capacidade por formato/escala confirmada nas FAQs de Corporativo e Aniversários (ou mantida como resposta conservadora deliberada, com aprovação explícita do cliente para isso).
- [ ] Wi-Fi e acessibilidade física confirmados ou removidos da lista de pendências do Corporativo.
- [ ] Política de decoração temática (Aniversários) e condições de pagamento (Corporativo) confirmadas ou mantidas conservadoras por decisão explícita.
- [ ] Headline duplicado entre Espaço e Corporativo corrigido.
- [ ] Item "Estacionamento" adicionado à Estrutura de Aniversários.
- [ ] Autorização por escrito para qualquer depoimento real antes de substituir o placeholder da Home.
- [ ] Autorização por escrito para qualquer fotografia de pessoa identificável, com atenção redobrada a Debutantes (menor de idade).
- [ ] Teste final de acessibilidade (heading order, `alt`, teclado, `<details>`) repetido depois da fotografia real entrar — imagens reais podem mudar proporção/corte de um jeito que o placeholder não previu.
- [ ] Teste de responsividade (390/768/1024/1280px) repetido depois da fotografia real entrar, pelo mesmo motivo acima.
- [ ] Revisão final de `<title>`/meta description de todas as sete páginas quanto a comprimento e ausência de palavra proibida (inclusive nas meta tags, não só no copy visível).

---

**Nenhum arquivo de código foi alterado para produzir esta auditoria.** Toda melhoria recomendada aqui deve seguir o mesmo processo já validado no projeto — mudança pequena e isolada primeiro, verificação visual/de acessibilidade depois, nunca as duas coisas de uma vez sem revisão.
