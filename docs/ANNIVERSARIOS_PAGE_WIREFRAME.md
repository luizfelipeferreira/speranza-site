# Speranza Eventos — Wireframe Textual da Página "Aniversários & Bodas"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Executa a arquitetura definida em [ANNIVERSARIOS_PAGE_STRATEGY.md](ANNIVERSARIOS_PAGE_STRATEGY.md) — leia aquele documento primeiro; este assume a metáfora (O Círculo), a jornada emocional e a diferenciação frente às outras páginas já decididas ali.
**Base fotográfica:** vocabulário de [ART_DIRECTION.md](ART_DIRECTION.md), recalibrado para esta página em `ANNIVERSARIOS_PAGE_STRATEGY.md` §5 (~30% arquitetura / ~15% detalhe / ~55% pessoas — a maior proporção humana do site).
**Sem código:** nenhuma classe, tag ou propriedade CSS é definida aqui.
**Nove seções, cada uma existindo por uma razão narrativa específica:** o Círculo dita a ordem — cada seção central é literalmente um raio maior de proximidade que a anterior. Nenhuma seção foi incluída "porque toda página tem".

---

## Como ler este documento

Cada seção é descrita em dez camadas: **Objetivo**, **Intenção emocional**, **Função narrativa**, **Hierarquia visual**, **Conteúdo esperado**, **Estratégia fotográfica** (enquadramento, lente equivalente, altura de câmera, profundidade de campo, proporção arquitetura/pessoas/detalhe, prioridade visual), **Microcopy** (ilustrativo, não copy final), **Ritmo de leitura**, **Comportamento no mobile**, **Observações de implementação futura**.

---

## Seção 1 — Hero

**Objetivo:** apresentar o espaço em silêncio, antes de qualquer grupo chegar — o ponto zero do Círculo, o raio ainda em zero.

**Intenção emocional:** Estado inicial (`ANNIVERSARIOS_PAGE_STRATEGY.md` §2, item 1) — neutro, ainda avaliando, sem carga emocional específica.

**Função narrativa e relação com a metáfora:** diferente de Debutantes (silêncio absoluto, zero pessoas, mecanismo de ocultação de uma protagonista), este Hero não precisa ocultar ninguém — não há protagonista a proteger. O silêncio aqui existe pelo mesmo motivo editorial geral do site (a primeira impressão não compete com argumento nenhum), não por um dispositivo de tensão dramática. Por isso, uma presença humana muito discreta e não identificável ao fundo é aceitável (mesma regra já usada no Hero de `/casamentos/`), diferente da proibição absoluta de Debutantes.

**Hierarquia visual:** foto full-bleed do espaço preparado para receber um grupo (mesas ainda vazias ou sendo arrumadas), texto mínimo (eyebrow + H1), sem CTA.

**Conteúdo esperado:** eyebrow ("Aniversários & Bodas"), H1 de uma linha, sem subheadline.

**Estratégia fotográfica:**
- Enquadramento: plano geral do salão ou área externa, preparado, luz natural.
- Lente equivalente: 35mm.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: fechada (f/5.6–f/8).
- Proporção arquitetura/pessoas/detalhe: ~90% / ~10% (presença humana discreta e distante, opcional) / 0%.
- Prioridade visual: máxima.

**Microcopy ilustrativo:** eyebrow *"Aniversários & Bodas"*; H1 *"Um espaço para reunir quem você ama."*

**Ritmo de leitura:** instantâneo — eyebrow e título, nada mais.

**Comportamento no mobile:** mesma foto-base, recorte adaptativo (4:5), mesmo padrão do site.

**Observações de implementação futura:** se houver presença humana discreta ao fundo, ela precisa ser plural (duas ou mais silhuetas), nunca um indivíduo isolado e identificável — reforça que esta página nunca é sobre uma pessoa só, desde o primeiro quadro.

---

## Seção 2 — Abertura Conceitual

**Objetivo:** nomear o conceito central antes de mostrar qualquer cena específica — "este espaço acolhe qualquer escala e tipo de celebração".

**Intenção emocional:** Curiosidade (§2, item 2) — "que tipo de lugar é este, exatamente?".

**Função narrativa:** ancora o fato de escala (450m²) cedo, pelo mesmo motivo que `/corporativo/` faz isso (`CORPORATE_PAGE_WIREFRAME.md` § Seção 2) — este público decide rápido e verifica antes de se deixar levar por qualquer narrativa. Termina apontando para a primeira camada do Círculo.

**Hierarquia visual:** 100% tipográfica, mesma pausa editorial já usada em `/espaco/` e `/corporativo/` logo após o Hero.

**Conteúdo esperado:** um parágrafo curto situando o espaço (endereço/bairro, propósito), o número de metragem como elemento gráfico, uma frase de transição para a primeira camada do Círculo.

**Estratégia fotográfica:** nenhuma foto nova — seção tipográfica por decisão de sistema.

**Microcopy ilustrativo:** eyebrow *"Qualquer motivo, qualquer tamanho"*; texto: *"O Speranza reúne 450m² no Bairro Caxambú, prontos para um jantar entre poucos ou um grande encontro de família."* seguido do número **450m²**, seguido de *"Veja como isso funciona, de perto para todos."*

**Ritmo de leitura:** pausa curta, poucas frases.

**Comportamento no mobile:** número mantém peso tipográfico proporcional, mesmo padrão do site.

**Observações de implementação futura:** nenhuma menção a capacidade numérica específica ainda (dado pendente, tratado na Seção 6).

---

## Seção 3 — O Gesto (primeira camada do Círculo)

**Objetivo:** o centro do Círculo — o raio mais próximo, um gesto entre poucas pessoas.

**Intenção emocional:** Identificação (§2, item 3) — reconhecimento pessoal em escala pequena: "isso poderia ser a minha mesa".

**O que revela:** o primeiro plano fechado da página — duas ou três pessoas, um gesto genuíno (um brinde, uma vela sendo assoprada, mãos se cumprimentando), nunca posado.

**Por que revela neste momento:** depois do fato de escala (Seção 2), o visitante precisa ver, antes de qualquer prova de amplitude, que o espaço também funciona no menor raio possível — isso desarma a suspeita de que "um salão de 450m²" só serve para eventos grandes, resolvendo uma ponta específica do medo central (desproporção para cima).

**Como prepara a próxima:** a composição fechada aqui é o ponto de partida da progressão de enquadramento que vai se abrindo nas duas seções seguintes — o leitor sente, sem que isso seja dito, que a câmera vai se afastando à medida que a página avança.

**Hierarquia visual:** uma foto dominante, fechada, com bastante espaço negativo ao redor do gesto — texto mínimo ao lado.

**Conteúdo esperado:** eyebrow, título curto, uma frase de apoio sensorial.

**Estratégia fotográfica:**
- Enquadramento: close-up genuíno de um gesto entre duas ou três pessoas.
- Lente equivalente: 85–105mm.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: aberta (f/1.8–f/2.8) — isola o gesto, fundo dissolvido.
- Proporção arquitetura/pessoas/detalhe: ~10% / ~70% / ~20%.
- Proporção de composição: 4:5 (retrato) — reforça intimidade.
- Prioridade visual: média-alta.

**Microcopy ilustrativo:** eyebrow *"De perto"*; título *"Às vezes, é só um brinde entre poucos."*

**Ritmo de leitura:** contido, poucas palavras.

**Comportamento no mobile:** imagem primeiro, texto abaixo.

**Observações de implementação futura:** nenhuma pose olhando para a câmera; o gesto precisa ser candid, capturado, não dirigido.

---

## Seção 4 — O Grupo (segunda camada do Círculo)

**Objetivo:** expandir o raio — um grupo pequeno-médio, convivência visível.

**Intenção emocional:** Projeção (§2, item 4) — "consigo me imaginar expandindo isso para o meu grupo".

**O que revela:** a câmera se afasta; agora é um grupo de tamanho médio (uma mesa de família, um grupo de amigos), ainda candid, ainda sem pose.

**Por que revela neste momento:** depois de provar que o espaço funciona no menor raio (Seção 3), esta seção mostra o próximo degrau de escala — a maioria dos aniversários reais (adultos, marcos redondos, reuniões de família comuns) se encaixa exatamente neste raio intermediário, então esta seção carrega o maior peso de identificação prática da página.

**Como prepara a próxima:** a escala continua crescendo, preparando o salto final para o salão cheio.

**Hierarquia visual:** foto dominante em plano médio, texto ao lado ou abaixo.

**Conteúdo esperado:** eyebrow, título curto, frase de apoio.

**Estratégia fotográfica:**
- Enquadramento: plano médio candid de um grupo de tamanho intermediário.
- Lente equivalente: 50mm.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: intermediária (f/2.8–f/4).
- Proporção arquitetura/pessoas/detalhe: ~20% / ~65% / ~15%.
- Proporção de composição: 4:3 ou 16:9.
- Prioridade visual: alta.

**Microcopy ilustrativo:** eyebrow *"Em família, entre amigos"*; título *"Do jeito que o seu grupo se reúne de verdade."*

**Ritmo de leitura:** um pouco mais denso que a Seção 3, ainda contido.

**Comportamento no mobile:** empilha imagem → texto.

**Observações de implementação futura:** variar a composição etária desta cena (não só adultos, não só idosos) para refletir a heterogeneidade real do público-alvo, sem forçar uma "foto de propaganda de inclusão" — precisa continuar candid.

---

## Seção 5 — O Salão Cheio (terceira camada do Círculo)

**Objetivo:** a prova de amplitude máxima — o maior raio do Círculo.

**Intenção emocional:** Confirmação (§2, item 5) — prova de que o mesmo cuidado se sustenta em escala máxima, sem virar um pico dramático (isso pertence a Casamentos/Debutantes).

**O que revela:** o salão em seu maior uso — várias gerações, muitas pessoas, o ambiente inteiro em uso.

**Por que revela neste momento:** é o ponto de maior densidade visual da página, mas sua função é **provar amplitude**, não gerar um clímax emocional — por isso vem depois das duas camadas menores, fechando a progressão de escala de forma lógica (pequeno → médio → grande), não construindo tensão para este momento como Debutantes faz para a Entrada.

**Como prepara a próxima:** depois de provar a amplitude máxima, a página está pronta para a reassurance prática (Estrutura) — a mente racional, que ficou em segundo plano durante as três camadas, recebe agora sua vez.

**Hierarquia visual:** a maior composição fotográfica da página, mas sem o silêncio editorial extremo que marcaria um "pico" — pode conter uma frase de apoio um pouco mais presente que nas seções anteriores.

**Conteúdo esperado:** eyebrow, título curto, uma frase de apoio.

**Estratégia fotográfica:**
- Enquadramento: plano geral do salão em uso máximo, várias gerações visíveis.
- Lente equivalente: 35mm.
- Altura da câmera: nível dos olhos, ou levemente elevada (~2m) para mostrar a disposição do grupo — nunca ângulo de drone.
- Profundidade de campo: fechada (f/5.6–f/8) — tudo em foco, prova de escala.
- Proporção arquitetura/pessoas/detalhe: ~25% / ~70% / ~5%.
- Proporção de composição: 16:9.
- Prioridade visual: máxima da página (mas não um "clímax dramático" — uma prova ampla).

**Microcopy ilustrativo:** eyebrow *"E também para os grandes encontros"*; título *"O mesmo cuidado, em qualquer escala."*

**Ritmo de leitura:** visualmente denso, mas o texto continua curto.

**Comportamento no mobile:** full-bleed adaptado, texto no terço inferior.

**Observações de implementação futura:** evitar a todo custo a composição de "fileira de convidados sorrindo para a câmera" — o registro precisa continuar candid mesmo em escala ampla.

---

## Seção 6 — Estrutura

**Objetivo:** entregar a reassurance factual, reagrupada em blocos temáticos — nenhuma informação nova em relação aos 12 itens já mapeados.

**Intenção emocional:** Tranquilidade (§2, item 6) — alívio prático, chegando só depois da progressão de escala completa.

**Reagrupamento por blocos:**

| Cluster | Itens |
|---|---|
| **Para o grupo** | Mobiliário incluso (mesas e cadeiras), climatização em todo o salão |
| **Para todas as idades** | Espaço Kids, serviço de segurança |
| **Para a comemoração** | Sistema de som e iluminação, decoração |
| **Para o sabor** | Cozinha equipada, buffet parceiro (Combinatto Buffet) |

**Hierarquia visual:** tipográfica, 4 clusters, mesmo dispositivo já usado em todas as páginas de segmento.

**Conteúdo esperado:** eyebrow de transição, título curto, os 4 clusters, link discreto de fechamento.

**Estratégia fotográfica:** nenhuma foto nova.

**Microcopy ilustrativo:** eyebrow *"Estrutura para a sua comemoração"*; título *"Tudo pronto, para qualquer tamanho de grupo."*; link *"Ainda tem dúvidas? Fale com nossa equipe →"*.

**Ritmo de leitura:** pausa tipográfica, frases curtas.

**Comportamento no mobile:** 1 coluna; 2 em tablet; 4 em desktop.

**Observações de implementação futura:** **TODO** — capacidade por escala de grupo ainda não confirmada (mesma pendência geral de `ESTRATEGIA.md`); **TODO** — política de decoração temática própria (frequente em aniversário infantil) depende de confirmação do cliente.

---

## Seção 7 — Galeria

**Objetivo:** confirmação por abundância — muitas celebrações diferentes, não uma fórmula única.

**Papel:** diferente das Seções 3–5 (que mostram UMA progressão conceitual de escala), a Galeria mostra **muitas instâncias diferentes** — tipos de celebração variados (infantil, adulto, marco redondo, bodas, reunião de família), provando que o Círculo funciona na prática, não só como conceito.

**Relação com as seções anteriores:** as Seções 3–5 provam a lógica; a Galeria prova a variedade real. Sem essa separação de função, a página teria só uma progressão conceitual sem prova concreta de aplicação a diferentes públicos.

**Composição:** grid assimétrico editorial — mistura de planos e proporções, mesmo espírito da Galeria de `/casamentos/`, sem lightbox.

**Quantidade:** 5–6 imagens — suficiente para variedade sem diluir curadoria.

**Ordem:** alternando escala e tipo de celebração deliberadamente (não agrupar todas as fotos "grandes" juntas nem todas as "pequenas" juntas) — reforça que qualquer combinação de escala e motivo já está coberta.

**Ritmo:** o mais denso em número de imagens da página, mas organizado por proporções variadas, nunca um mosaico uniforme.

**Estratégia fotográfica:**
- Enquadramento: mistura de planos gerais, médios e still-life, conforme a imagem disponível.
- Lente equivalente: variável, 35–105mm.
- Proporção arquitetura/pessoas/detalhe: mistura equilibrada, mais próxima da média geral da página.
- Proporção de composição: variada (4:3, 3:4, 16:9).
- Prioridade visual: média-alta coletivamente, sem pico único.

**Microcopy ilustrativo:** eyebrow *"Muitas comemorações"*; título *"Cada motivo, a sua própria forma de celebrar."*

**Comportamento no mobile:** 2 colunas com faixas largas alternadas.

**Observações de implementação futura:** sem lightbox, mesma decisão da Galeria assimétrica de `/casamentos/`. Sem fotografia real disponível, placeholder disciplinado (`ART_DIRECTION.md` §6), nunca implicar família real sem autorização.

---

## Seção 8 — FAQ

**Objetivo:** fechar dúvidas específicas de comemorações sociais — não copiar Casamentos nem Home.

**Por que não copiar:** "posso levar fornecedores externos de cerimônia?" pertence a Casamentos; "quais tipos de evento o espaço recebe?" pertence à Home (pergunta de triagem). Aqui as perguntas são específicas de quem já decidiu que é uma comemoração social e está avaliando os detalhes práticos daquele formato.

**Perguntas específicas desta página:**
1. *"O espaço recebe festas infantis e reuniões de adultos com a mesma estrutura?"* — resposta factual, referenciando espaço kids e climatização.
2. *"Posso levar decoração temática própria?"* — **TODO** resposta conservadora, redireciona para a equipe (política não confirmada).
3. *"Qual a capacidade para grupos pequenos e grandes?"* — **TODO** resposta conservadora (capacidade por escala ainda não confirmada).
4. *"Há espaço e segurança adequados para convidados de todas as idades, incluindo crianças e idosos?"* — resposta factual, apoiada em itens confirmados (espaço kids, segurança).
5. *"É possível fazer uma comemoração mais simples, sem grande estrutura?"* — resposta que reforça a flexibilidade de escala sem soar como "oferecemos pacote básico" genérico.

**Hierarquia visual:** tipográfica, mesmo componente `.faq-item` do site inteiro.

**Estratégia fotográfica:** nenhuma.

**Microcopy ilustrativo:** eyebrow *"Perguntas frequentes"*; título *"Algumas respostas antes da sua comemoração."*

**Ritmo de leitura:** direto, factual.

**Comportamento no mobile:** 1 coluna; 2 em desktop.

**Observações de implementação futura:** perguntas 2 e 3 marcadas como TODO — não inventar política nem número.

---

## Seção 9 — CTA Final

**Objetivo:** fechar com um convite calmo, coerente com a decisão rápida e de baixa fricção que esta persona busca.

**Posição:** depois da Galeria e do FAQ — mesma disciplina de todas as páginas (reassurance e prova antes do convite final).

**Tom:** calmo, direto — nunca eufórico, nunca urgente.

**CTA escolhido:** "Agende uma visita" — primário; "Conheça o espaço" (link para `/espaco/`) — secundário.

**Por que sem urgência:** o CTA "Fale agora e garanta sua data", previsto no `WIREFRAME.md` original, é **explicitamente descartado aqui** — contradiz a regra geral do site e, especificamente, contradiz o próprio território desta página (`ANNIVERSARIOS_PAGE_STRATEGY.md` §7): quem já decide rápido não precisa de pressão para agir, precisa de clareza e ausência de fricção.

**Conteúdo esperado:** eyebrow, título breve, frase de apoio, par de CTAs.

**Estratégia fotográfica:** nenhuma — tipográfica, mesmo padrão do site.

**Microcopy ilustrativo:** eyebrow *"Vamos conversar"*; título *"Reúna quem você ama, do jeito certo."*; apoio: *"Agende uma visita e veja se o espaço combina com a sua comemoração."*

**Ritmo de leitura:** calmo, direto.

**Comportamento no mobile:** mesma lógica de empilhamento de botões já estabelecida.

**Observações de implementação futura:** nenhuma.

---

## Resumo de proporções por seção

| Seção | Enquadramento dominante | Pessoas | Prioridade visual |
|---|---|---|---|
| 1. Hero | Plano geral, vazio ou quase | ~10% | Máxima |
| 2. Abertura Conceitual | — (tipográfica) | — | Baixa |
| 3. O Gesto | Close-up (85–105mm) | ~70% | Média-alta |
| 4. O Grupo | Plano médio (50mm) | ~65% | Alta |
| 5. O Salão Cheio | Plano geral (35mm) | ~70% | Máxima da página |
| 6. Estrutura | — (tipográfica) | — | Baixa |
| 7. Galeria | Variado | Mista | Média-alta |
| 8. FAQ | — (tipográfica) | — | — |
| 9. CTA Final | — (tipográfica) | — | — |

A progressão de lente (85–105mm → 50mm → 35mm) nas Seções 3–5 é, literalmente, o gráfico da metáfora: o raio do Círculo se expandindo, enquadramento por enquadramento.

---

# Revisão crítica

**A metáfora continua consistente até o fim?** Sim — a progressão de escala (Seções 3-4-5) é seguida pela reassurance (Seção 6) que traduz "qualquer raio de grupo" em termos práticos (mobiliário flexível, espaço kids, segurança), mantendo o fio condutor mesmo depois que a fotografia se torna tipográfica.

**Existe repetição com alguma outra página?** O maior ponto de atenção é a Seção 5 (Salão Cheio) frente à Recepção de Casamentos — ambas são planos gerais de salão em uso. A diferença pretendida é de **função** (aqui é prova de amplitude sem clímax; lá é o segundo pico emocional da página) — essa diferença precisa ficar evidente na execução fotográfica (menos "festa em clímax", mais "convivência ampla e tranquila"), não é garantida só pela intenção escrita aqui.

**Alguma seção virou catálogo?** A Galeria é a de maior risco, por reunir várias celebrações diferentes — mitigado pelo limite de 5-6 imagens e pela composição assimétrica deliberada (nunca grid uniforme).

**Onde a direção de arte será decisiva?** (1) evitar o clichê de "família de banco de imagens" em qualquer uma das três camadas do Círculo; (2) garantir que a progressão de lente/escala entre as Seções 3-4-5 seja perceptível e não pareça três fotos aleatórias de festa; (3) diferenciar visualmente a Seção 5 da Recepção de Casamentos, apesar da similaridade estrutural de enquadramento.

**Quais informações ainda dependem do cliente?** Capacidade por escala de grupo, política de decoração temática própria, disponibilidade real de fotografia em múltiplas escalas de proximidade sem pose.

**Quais riscos permanecem antes da implementação?** Os mesmos três já nomeados em `ANNIVERSARIOS_PAGE_STRATEGY.md` §9 (clichê de banco de imagens, disponibilidade fotográfica, diferenciação de tom para bodas) — este wireframe os localiza por seção, mas não os resolve; a resolução real depende da curadoria fotográfica e de copy da próxima fase.

---

**Este documento e o `ANNIVERSARIOS_PAGE_STRATEGY.md` juntos são a autoridade para a implementação de `/aniversarios/`.** As únicas decisões que restam à próxima fase são de execução — HTML, CSS, componentes e conteúdo definitivo — nunca de arquitetura narrativa.
