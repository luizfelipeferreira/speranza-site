# Speranza Eventos — Wireframe Textual da Página "Casamentos"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Executa a arquitetura definida em [WEDDING_PAGE_STRATEGY.md](WEDDING_PAGE_STRATEGY.md) — leia aquele documento primeiro; este assume a jornada emocional, a diferenciação frente a Home/Espaço e as regras de fotografia/copy já decididas ali.
**Base fotográfica:** vocabulário de [ART_DIRECTION.md](ART_DIRECTION.md), recalibrado para esta página em `WEDDING_PAGE_STRATEGY.md` §7 (mais presença humana candid que qualquer outra página do site, ainda minoritária).
**Sem código:** nenhuma classe, tag ou propriedade CSS é definida aqui — proporções e prioridades descrevem intenção visual.
**Dispositivo central da página inteira:** ela é editada como o fotoensaio de um casamento real do início ao fim — cerimônia, festa, os pequenos gestos, o que aconteceu antes de tudo — não como um tour de ambientes. Cada seção é um momento do dia, não um cômodo do prédio.

---

## Como ler este documento

Cada seção é descrita em nove camadas: **Objetivo**, **Narrativa**, **Hierarquia visual**, **Fotografia**, **Conteúdo**, **Microcopy** (ilustrativo, não copy final — mesmo princípio de `COPY_GUIDE.md` §7), **Composição**, **Responsividade**, **Transição** para a seção seguinte.

---

## Seção 1 — Hero

**Objetivo:** plantar a primeira semente de projeção — calma, sem argumento, sem pico emocional ainda. O visitante precisa sentir "isso poderia ser o meu casamento" antes de qualquer prova.

**Narrativa:** abre o fotoensaio inteiro. Diferente do Hero de `/espaco/` (arquitetura pura, sem pessoas), aqui pode haver uma presença humana muito discreta e não-identificável — silhueta distante, de costas, fora de foco — o primeiro indício de que esta página é sobre um dia vivido, não sobre um prédio.

**Hierarquia visual:** foto dominante, texto mínimo (eyebrow + H1 curto), mesmo princípio de silêncio do Hero de `/espaco/`.

**Fotografia:** plano geral do espaço de cerimônia ou recepção em luz de fim de tarde, com uma presença humana pequena e ambígua ao fundo (nunca o foco do quadro). Lente 35mm equivalente, profundidade de campo intermediária (f/4–5.6 — ambiente legível, figura humana não nitidamente identificável), composição assimétrica com espaço negativo para o texto.

**Conteúdo:** eyebrow "Casamentos", H1 de uma linha.

**Microcopy:** eyebrow *"Casamentos"*; H1 *"Cerimônia e festa, no mesmo endereço."* — eco deliberado do título do card de Casamentos na Home (`event-card__title`), fechando o ciclo que a Home abriu.

**Composição:** full-bleed, 16:9 (desktop) — menos extremo que o 21:9 do Hero de `/espaco/`, porque esta página já começa com uma escala mais humana, não puramente arquitetural. Mobile: 4:5.

**Responsividade:** mesmo recorte adaptativo do Hero de `/espaco/` — a mesma foto-base, reenquadrada para vertical em mobile, não uma segunda foto.

**Transição:** o silêncio do Hero é quebrado pela Cerimônia — sem parágrafo de transição, corte direto (o próprio corte é a transição: do "isso poderia ser" ao "aqui está").

---

## Seção 2 — Cerimônia

**Objetivo:** o pico emocional de toda a página — "eu me vejo caminhando até aqui." Esta é, deliberadamente, a seção de maior peso visual do fotoensaio inteiro — nenhuma outra seção deve competir em escala com esta.

**Narrativa:** recebe a calma do Hero e escala para o ápice. Termina exatamente onde a Recepção começa — a festa que acontece depois do "sim".

**Hierarquia visual:** a maior composição fotográfica da página — quase full-bleed, texto reduzido a eyebrow + uma linha curta. Nenhuma outra seção deve reutilizar esta escala.

**Fotografia:** plano geral da área externa do Speranza (o mesmo ambiente de `/espaco/` § Tour 3.2, aqui fotografado como cena de cerimônia real, não como "ambiente do prédio") em luz de entardecer, lente 35mm, linha de fuga real (corredor entre assentos, arco). Insert secundário opcional: um detalhe candid da cerimônia (mãos dadas, verso de um convidado sentado) — nunca rosto voltado para a câmera. Referência de luz: José Villa (luz macia, contida) — ver `WEDDING_PAGE_STRATEGY.md` §7.

**Conteúdo:** eyebrow "Cerimônia", uma frase curta.

**Microcopy:** *"Sob o céu de Jundiaí, o sim."*

**Composição:** dupla de página — foto dominante (paisagem, 3:2 ou 16:9) + insert pequeno (retrato, 4:5), mesma gramática de "prancha + detalhe" já usada em `/espaco/` § 3.1/3.5, aplicada aqui a um momento, não a um ambiente.

**Responsividade:** empilha, insert abaixo da foto dominante.

**Transição:** corte direto e cronológico — a cerimônia termina, a festa começa. É a transição mais natural de toda a página (não precisa de dispositivo narrativo, a sequência real do dia já faz o trabalho).

---

## Seção 3 — Recepção

**Objetivo:** "a festa depois do sim" — calor, alívio, mudança de registro depois da contenção da Cerimônia.

**Narrativa:** recebe o pico emocional da Cerimônia e muda o tom (de suspensão para celebração), sem tentar igualar sua escala — esta seção é deliberadamente **um degrau abaixo** da Cerimônia em peso visual (ver revisão crítica ao final deste documento: duas seções do mesmo tamanho lado a lado quebrariam o princípio de alternância de ritmo já estabelecido em `SPACE_PAGE_STRATEGY.md` §3).

**Hierarquia visual:** grande, mas visivelmente secundária à Cerimônia — uma foto dominante (não uma dupla de página completa) + texto curto. A diferença de escala entre Cerimônia e Recepção precisa ser perceptível no primeiro relance, não sutil.

**Fotografia:** salão à noite, luz quente de velas/iluminação de cena (nunca flash direto), lente 35–50mm. Se houver presença humana em movimento genuíno (pista de dança, brinde), sempre candid, nunca posada, em conformidade com a referência documental de Norman & Blake (`WEDDING_PAGE_STRATEGY.md` §7) — mas em quantidade mínima (uma cena, não uma sequência).

**Conteúdo:** eyebrow "Recepção", uma frase curta.

**Microcopy:** *"A festa começa onde a cerimônia termina."*

**Composição:** uma foto dominante, 4:3 ou 16:9 — sem insert (reforça a diferença de peso em relação à Cerimônia, que tem dupla de página completa).

**Responsividade:** padrão, sem complexidade adicional.

**Transição:** da escala grande (Cerimônia + Recepção) para a escala pequena — um corte de "plano geral para close-up", mesmo dispositivo já usado em `/espaco/` § Tour→Detalhe, aqui narrado como "no meio da festa, os pequenos gestos".

---

## Seção 4 — Momentos

**Objetivo:** intimidade e reconhecimento — "são os pequenos gestos que eu vou lembrar." Depois de duas seções grandes, esta é a primeira respirada visual real da página.

**Narrativa:** zoom de plano geral (Cerimônia, Recepção) para still-life/detalhe candid — mesmo mecanismo de ritmo do Tour→Detalhe de `/espaco/`, mas aqui o assunto é o gesto humano, não o objeto de mesa.

**Hierarquia visual:** grid uniforme pequeno (4–6 imagens), quadrado — reaproveita integralmente o dispositivo `.gallery-grid`/`.lightbox` já usado em `/espaco/` § Seção 4 (mesmo componente, novo conteúdo). Texto reduzido a rótulos de uma palavra.

**Fotografia:** mistura de still-life (alianças, papelaria, tecido do vestido) e detalhe humano candid (mãos, um brinde, um sorriso de perfil — nunca de frente para a câmera). Lente 85–105mm, profundidade de campo aberta, proporção 1:1 em todas as imagens.

**Conteúdo:** eyebrow "Momentos", sem parágrafo — só rótulos mínimos por imagem.

**Microcopy:** rótulos como *"Alianças"*, *"Brinde"*, *"Sorriso"*, *"Detalhe"* — mesmo padrão de numeral/palavra única já usado em `/espaco/` § Detalhe.

**Composição:** grid quadrado uniforme, 2 colunas mobile → 4 desktop.

**Responsividade:** idêntica ao grid de Detalhe de `/espaco/`.

**Transição:** de gestos pequenos e humanos para o único espaço que ainda não apareceu no fotoensaio — onde tudo começou, antes da cerimônia: os Bastidores.

---

## Seção 5 — Bastidores

**Objetivo:** confiança e segredo compartilhado — "cuidam até do que ninguém vê." O momento mais íntimo da página, revelado tarde de propósito (ver `WEDDING_PAGE_STRATEGY.md` §5 para a justificativa completa de por que esta seção não abre a página, mesmo sendo cronologicamente anterior à Cerimônia).

**Narrativa:** reaparece o camarim — o mesmo ambiente físico de `/espaco/` § Tour 3.3 — mas aqui reenquadrado como cena, não como ambiente. Depois do grid pequeno e múltiplo de Momentos, esta seção volta a uma única imagem — mas continua deliberadamente **quieta**, não um terceiro pico: a página já teve seu ápice (Cerimônia) e seu degrau secundário (Recepção); Bastidores precisa ler como uma pausa nova, não como mais um crescendo.

**Hierarquia visual:** uma imagem só, retrato, bastante espaço negativo ao redor, texto curto ao lado — escala visual próxima à de Momentos (pequena/quieta), não à de Cerimônia/Recepção.

**Fotografia:** camarim em luz de janela suave, um gesto candid de preparação (mão ajustando algo, reflexo parcial em espelho — nunca rosto de frente para a câmera). Lente 50–85mm, composição intimista, proporção 3:4 (retrato) — mesma proporção usada para o camarim em `/espaco/`, reforçando que é o mesmo espaço físico visto por outra lente.

**Conteúdo:** eyebrow "Bastidores", uma frase curta.

**Microcopy:** *"Antes do 'sim', um espaço só seu."* — eco deliberado da copy do camarim já usada na Home e em `/espaco/`.

**Composição:** uma imagem dominante + legenda, sem insert.

**Responsividade:** empilha, imagem primeiro.

**Transição:** pivô de tom deliberado — de sensação para informação, sinalizado por um eyebrow de transição (mesmo dispositivo de `/espaco/` § Detalhe→Estrutura Completa). O fotoensaio pausa; a página começa a responder perguntas práticas.

---

## Seção 6 — Estrutura para Casamentos

**Objetivo:** alívio racional — "tudo que eu ia perguntar já está resolvido." Mesma função da Estrutura Completa de `/espaco/`, mas reagrupada com vocabulário de casamento, não de ficha técnica genérica.

**Narrativa:** único ponto da página 100% tipográfico — a segunda pausa visual (a primeira foi o corte de escala em Momentos). Fecha o "o que já está resolvido" e abre caminho para a Galeria, que devolve a página ao registro visual antes do fechamento.

**Hierarquia visual:** tipográfica, 4 clusters temáticos (não lista plana), mesmo dispositivo de `/espaco/` § Estrutura Completa — mesma informação factual, vocabulário reagrupado por momento do casamento, não por categoria de instalação:

| Cluster | Itens |
|---|---|
| **Para o "sim"** | Cerimônia externa, decoração, som e imagem |
| **Para os preparativos** | Camarim privativo, estacionamento gratuito |
| **Para a festa** | Climatização, mobiliário incluso |
| **Para o sabor** | Cozinha equipada, buffet parceiro (Combinatto Buffet) |

**Fotografia:** nenhuma — seção deliberadamente tipográfica (mesma decisão de `/espaco/` § Estrutura Completa).

**Conteúdo:** eyebrow "Estrutura para casamentos", H2 curto, os 4 clusters, link discreto de fechamento.

**Microcopy:** H2 *"Tudo pensado para o seu casamento, do início ao fim."*; link *"Ainda tem dúvidas? Fale com nossa equipe →"*.

**Composição:** grid de 4 clusters, 2 colunas tablet+ / 4 desktop — mesmo breakpoint de `/espaco/`.

**Responsividade:** 1 coluna mobile.

**Transição:** do "está tudo resolvido" para "veja com os próprios olhos" — a Estrutura fecha a razão, a Galeria reabre o desejo antes do fechamento final.

---

## Seção 7 — Galeria

**Objetivo:** confirmação por abundância — "isso não foi sorte de uma foto boa, é assim sempre." Prova de consistência, não um momento único.

**Narrativa:** depois da pausa tipográfica da Estrutura, a página volta ao registro visual — mas em modo diferente de Cerimônia/Recepção (which were curated, singular, "aqui está o momento"): aqui o registro é de **volume**, muitos casamentos reais, não um só.

**Hierarquia visual:** a composição mais densa da página — reaproveita o dispositivo de grid assimétrico editorial já construído na Galeria da Home (`.gallery-editorial`, prancha dominante + inserts variados), não o grid quadrado uniforme de Momentos/Detalhe — a variedade de proporção aqui é o que comunica "muitos casamentos diferentes", enquanto a uniformidade de Momentos comunicava "um só dia, em detalhe". São dois dispositivos do mesmo sistema, usados com propósitos opostos de propósito.

**Fotografia:** mistura ampla de cerimônia, recepção e detalhe de múltiplos casamentos reais (quando existirem) — todas as regras de `ART_DIRECTION.md`/`WEDDING_PAGE_STRATEGY.md` §11 valem integralmente, sem exceção por volume.

**Conteúdo:** eyebrow "Galeria de casamentos", H2 curto.

**Microcopy:** H2 *"Casamentos reais, no Speranza."*

**Composição:** grid assimétrico (mesmo espírito do `.gallery-editorial` da Home), proporções variadas (4:3, 3:4, 16:9, 21:9).

**Responsividade:** mesmo padrão da Galeria da Home (2 colunas com faixas largas no mobile, composição fixa em `grid-template-areas` no desktop).

**Transição:** depois de ver "muitos casamentos", as últimas dúvidas práticas que ainda restam — FAQ.

---

## Seção 8 — FAQ

**Objetivo:** fechamento de dúvida antes do convite final.

**Narrativa:** mesma função das FAQs de Home/`/espaco/` — reaproveita integralmente o componente `.faq-item`/`<details>`/`<summary>` já construído, sem inventar novo padrão.

**Hierarquia visual:** tipográfica, calma — terceira e última pausa visual da página antes do fechamento.

**Fotografia:** nenhuma.

**Conteúdo:** perguntas específicas de casamento (já previstas em `WIREFRAME.md` § PÁGINA: Casamentos): *"Posso levar fornecedores externos?"*, *"O buffet é obrigatório?"*, *"Até que horas posso usar o espaço?"*, *"Quantos convidados cabem?"*.

**Microcopy:** direto, factual — mesma régua de `COPY_GUIDE.md`, sem menção a valores/orçamento nas respostas (redireciona para WhatsApp quando a pergunta for sobre preço).

**Composição:** grid de 2 colunas desktop (leitura por coluna, mesmo dispositivo de `home.css` § FAQ) / 1 coluna mobile e tablet.

**Responsividade:** breakpoint em 1024px, idêntico ao FAQ da Home.

**Transição:** última pergunta respondida — nada mais a esclarecer. A página converge para o convite final.

---

## Seção 9 — CTA Final

**Objetivo:** convite calmo — "quero conversar sobre o meu dia." Fecha a jornada emocional inteira sem adicionar informação nova.

**Narrativa:** recebe tudo — projeção, prova, reassurance — e só pergunta.

**Hierarquia visual:** container estreito, texto centralizado, sem foto/textura/caixa/sombra — mesmo espírito do CTA Final de Home/`/espaco/`.

**Fotografia:** nenhuma.

**Conteúdo:** eyebrow, H2 curto, par de CTAs — primário "Agende uma visita" (WhatsApp, mensagem já contextual a casamento em `assets/js/config.js`), secundário um link para `/espaco/` ("Ver o espaço completo") para quem quiser ver o prédio antes de decidir.

**Microcopy:** eyebrow *"Vamos conversar"*; H2 *"Cada casamento é um só. O seu merece um espaço à altura dele."*

**Composição:** idêntica ao CTA Final de Home/`/espaco/` — nenhuma decisão nova de layout.

**Responsividade:** mesma lógica de empilhamento de botões já estabelecida.

**Transição:** nenhuma — é o fim do fotoensaio.

---

# Revisão crítica

## Repetição
O dispositivo "pivô de tom por eyebrow" (sensação → informação) e o grid de 4 clusters já apareceram em `/espaco/`. Aqui isso é reaproveito de sistema, não falha — mas é um risco real para as próximas páginas de segmento (Debutantes, Corporativo, Aniversários): se todas as quatro replicarem o mesmo esqueleto (fotoensaio → pivô → 4 clusters → FAQ → CTA) sem reconsiderar, o site inteiro corre o risco de parecer um template aplicado a quatro públicos, não quatro páginas pensadas. Recomendação: antes de iniciar Debutantes/Corporativo/Aniversários, decidir deliberadamente se cada uma merece sua própria metáfora estrutural (o Corporativo, por exemplo, provavelmente não se beneficia da metáfora "fotoensaio de um dia" da mesma forma que Casamentos).

## Ritmo
Risco identificado durante a composição: Cerimônia e Recepção são as duas seções mais dominantes da página, adjacentes. Se tivessem o mesmo peso visual, quebrariam a regra de alternância já estabelecida (nunca duas seções do mesmo peso em sequência). **Ajuste já aplicado no wireframe acima:** Recepção foi deliberadamente reduzida a uma foto dominante sem dupla de página (diferente da Cerimônia, que tem prancha + insert), criando uma diferença perceptível de escala mesmo as duas sendo "grandes".

## Narrativa
A ordem cronológica real (bastidores → cerimônia → recepção) foi conscientemente invertida para ordem editorial (cerimônia → recepção → momentos → bastidores) — já justificado em `WEDDING_PAGE_STRATEGY.md` §5. É a decisão estrutural mais arriscada do documento; se a implementação real mostrar que os visitantes esperam ver os bastidores primeiro (teste de usabilidade, se houver), vale reconsiderar — mas a lógica editorial (acesso íntimo como recompensa, não como abertura) tem precedente forte em revistas de casamento reais.

## Originalidade
A metáfora central (dia como fotoensaio, não prédio como tour) é genuinamente diferente de `/espaco/` dentro do sistema do site — mas não é uma invenção de gênero: sites de casamento já tentam (mal, geralmente) fazer isso. A diferenciação real do Speranza não é a estrutura em si, é a disciplina de execução — zero clichê, zero hipérbole, silêncio editorial onde a maioria dos concorrentes da região usaria adjetivo. Vale não superestimar a "originalidade estrutural" e focar a energia de implementação na disciplina de restrição.

## Equilíbrio
40% ambiente/35% detalhe/25% pessoas (`WEDDING_PAGE_STRATEGY.md` §7) é a proporção mais arriscada de todo o site — presença humana é o elemento mais fácil de escorregar para "banco de imagens genérico". Nenhuma outra página do site pede tanto rigor de curadoria fotográfica quanto esta.

## Fadiga visual
Quatro seções narrativas seguidas (Cerimônia, Recepção, Momentos, Bastidores) antes da primeira pausa tipográfica (Estrutura) é uma sequência longa em "modo fotoensaio". Mitigado por: (1) variação de escala entre as quatro (grande/médio/pequeno-grid/pequeno-único), (2) variação de luz (dia exterior → noite interior → luz suave de still-life → luz de janela), (3) o corte de ritmo em Momentos (grid pequeno) já funciona como uma respirada no meio do bloco. Se, na implementação real, essa sequência ainda parecer longa, a Estrutura para Casamentos pode ser adiantada para logo depois de Recepção — mas isso romantiza menos a página (entrega o "checklist" mais cedo) e não é a recomendação default.

## Sensação premium
Sustentada por restrição (silêncio, luz natural, ausência de adjetivo), não por opulência — consistente com o resto do site. O maior risco a essa sensação não é uma decisão estrutural, é a curadoria fotográfica de pessoas (ver Equilíbrio acima).

## Clareza
Os 4 clusters de Estrutura para Casamentos usam os mesmos fatos físicos dos 4 clusters de `/espaco/`, só reagrupados por momento em vez de categoria. Isso é aceitável — são páginas diferentes na jornada de decisão, raramente lidas lado a lado — mas vale registrar como sobreposição consciente, não coincidência.

## Coerência com a Home
O Hero ecoa literalmente o título do card de Casamentos da Home ("Cerimônia e festa, no mesmo endereço") — a página cumpre a promessa que a Home fez. Voz, restrição verbal e ausência de clichê seguem exatamente o padrão já estabelecido.

## Coerência com o Espaço
Compartilha dispositivos de sistema (clusters, pivô de tom, CTA Final, grid quadrado com lightbox) — o mesmo camarim e a mesma área externa aparecem nas duas páginas, com papéis narrativos diferentes e explicitamente justificados (§2 do documento de estratégia). A coerência é alta por design; o risco correspondente (repetição de esqueleto nas próximas páginas de segmento) já está registrado acima.

## Pontos fracos
1. Cerimônia + Recepção adjacentes, mesmo com mitigação de escala aplicada, seguem sendo o trecho de maior risco de "duas seções parecidas" da página.
2. Presença humana candid é o elemento fotográfico mais difícil de executar sem escorregar para clichê — nenhuma quantidade de documentação substitui uma curadoria rigorosa na hora da escolha real das fotos.
3. Risco de template nas próximas páginas de segmento se o esqueleto for copiado sem reconsideração.

## Oportunidades
1. Quando existir autorização, um depoimento nomeado de um casal real poderia ancorar Bastidores ou Galeria — mesmo princípio de prova social de `DESIGN_SYSTEM.md` § Depoimentos.
2. A Galeria desta página é candidata natural a, futuramente, linkar para o Instagram do Speranza como "veja mais" — canal já ativo (`docs/INVENTARIO-SITE-ATUAL.md` §5) — decisão de conteúdo a avaliar depois, não parte deste blueprint.
3. Decidir agora, antes de Debutantes/Corporativo/Aniversários, se cada uma merece sua própria metáfora estrutural em vez de herdar esta por padrão.

---

**Este documento e o `WEDDING_PAGE_STRATEGY.md` juntos são a autoridade para a implementação de `/casamentos/`.** Nenhum HTML/CSS começa antes dos dois estarem aprovados.
