# Speranza Eventos — Wireframe Textual da Página "Debutantes"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Executa a arquitetura definida em [DEBUTANTES_PAGE_STRATEGY.md](DEBUTANTES_PAGE_STRATEGY.md) — leia aquele documento primeiro; este assume a metáfora (A Estreia), a jornada emocional, a diferenciação frente a Casamentos e as regras de fotografia/copy já decididas ali.
**Base fotográfica:** vocabulário de [ART_DIRECTION.md](ART_DIRECTION.md), recalibrado para esta página em `DEBUTANTES_PAGE_STRATEGY.md` §5 (~45% arquitetura / ~25% detalhe / ~30% pessoas, com a fatia humana concentrada numa única protagonista, não distribuída).
**Sem código:** nenhuma classe, tag ou propriedade CSS é definida aqui — proporções e prioridades descrevem intenção visual, não implementação.
**Regra herdada e não reaberta:** a metáfora existe só na organização narrativa. Nenhuma seção abaixo descreve cenografia de teatro literal (holofote colorido, cortina, tablado) — só estrutura de revelação.
**Nove seções, cada uma existindo por uma razão narrativa específica, não por convenção de template** — nenhuma seção de "Localização" foi incluída nesta passada por decisão deliberada: o objetivo desta etapa é a arquitetura narrativa mínima que a metáfora exige, não a paridade automática de seções com as outras páginas (ver revisão crítica, item de gaps).

---

## Como ler este documento

Cada seção é descrita em dez camadas: **Objetivo**, **Intenção emocional**, **Função narrativa**, **Hierarquia visual**, **Conteúdo esperado**, **Estratégia fotográfica** (enquadramento, lente equivalente, altura de câmera, profundidade de campo, proporção arquitetura/pessoas/detalhe, prioridade visual — sempre a partir de `ART_DIRECTION.md`), **Microcopy** (ilustrativo, não copy final — mesmo princípio de `COPY_GUIDE.md` §7), **Ritmo de leitura**, **Comportamento no mobile**, **Observações de implementação futura**.

---

## Seção 1 — Hero

**Objetivo:** estabelecer expectativa contida sem revelar a protagonista e sem qualquer argumento — o ponto zero do arco inteiro.

**Intenção emocional:** Primeiro Impacto (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 1) — expectativa contida, quase silêncio.

**Função narrativa:** abre a página; não recebe nada de antes; entrega, ao final, o silêncio que Bastidores vai quebrar. **Por que precisa ser silencioso:** qualquer argumento, fato ou — principalmente — qualquer fragmento da debutante nesta dobra esvaziaria o mecanismo de ocultação que sustenta toda a tensão da metáfora (`DEBUTANTES_PAGE_STRATEGY.md` §3). O Hero não é decoração de abertura — é a primeira peça do dispositivo de revelação controlada.

**Hierarquia visual:** fotografia em largura de viewport (full-bleed), texto mínimo (eyebrow + H1 de uma linha) posicionado num terço inferior com véu de legibilidade, nenhum CTA (o WhatsApp flutuante e o CTA do header já cobrem quem quiser agir).

**Conteúdo esperado:** eyebrow curto ("Debutantes"), H1 de uma linha, sem subheadline — o silêncio mais rígido de qualquer Hero do site.

**Estratégia fotográfica:**
- Enquadramento: plano geral arquitetural do salão já preparado — mesas montadas, iluminação de destaque testada mas ainda apagada ou neutra — **nenhuma pessoa em cena, em nenhuma hipótese**.
- Lente equivalente: 35mm.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: fechada (f/5.6–f/8) — a foto prova escala e prontidão, não atmosfera difusa.
- Proporção arquitetura/pessoas/detalhe: **100% / 0% / 0%** — a única seção do site inteiro com zero exceção à ausência humana, incluindo silhuetas distantes.
- Prioridade visual: máxima.

**Microcopy ilustrativo:** eyebrow *"Debutantes"*; H1 *"Uma estreia começa aqui."*

**Ritmo de leitura:** quase instantâneo — eyebrow e título, nada mais.

**Comportamento no mobile:** mesma foto-base, recorte adaptativo para proporção mais vertical (mesmo padrão já usado em todo o site), sem cortar a linha de fuga arquitetural que dá escala à composição.

**Observações de implementação futura:** nenhum placeholder, mesmo temporário, pode incluir figura humana — nem borrada, nem ao fundo. **Diferença do Hero de `/casamentos/`:** aquele Hero já permite uma presença humana discreta e distante desde a primeira dobra, porque narra um dia vivido por pessoas reais (`WEDDING_PAGE_WIREFRAME.md` § Seção 1); este Hero não permite nenhuma, porque a página inteira é construída sobre reter a imagem da protagonista até o momento estruturalmente certo (a Entrada, Seção 3) — revelar qualquer fragmento dela aqui, mesmo um vulto, adiantaria o clímax e quebraria a lógica de tensão que a metáfora exige.

---

## Seção 2 — Bastidores

**Objetivo:** primeira grande seção narrativa — quebra o silêncio do Hero, nomeia o conceito de estreia e aproxima a página, pela primeira vez, de uma pessoa real se preparando.

**Intenção emocional:** esta seção sozinha carrega três estados da jornada de `DEBUTANTES_PAGE_STRATEGY.md` §2 — **Curiosidade** (abertura: "o que é isso, exatamente?"), **Identificação** (núcleo: "isso é sobre uma pessoa real"), **Expectativa** (fechamento: a tensão no ponto mais alto, imediatamente antes da Entrada). Não são três seções — é uma seção com um arco interno próprio.

**Função narrativa:** por que esta abertura cria tensão — porque mostra tudo, exceto o que mais se quer ver. A câmera se aproxima de gestos, texturas e objetos pessoais dela (joia, sapato, um reflexo parcial em espelho, uma mão ajustando algo), mas nunca entrega seu rosto de frente. Quanto mais próxima e íntima a fotografia, maior a curiosidade retida — é o mecanismo de ocultação (`DEBUTANTES_PAGE_STRATEGY.md` §3) em sua forma mais concentrada. O camarim aqui não é conforto logístico (papel que tem em `/espaco/`) nem recompensa tardia de intimidade (papel que tem em `/casamentos/`, revelado só perto do fim) — é o último instante em que ela ainda é só dela, e por isso precisa vir cedo, não como segredo guardado para o final.

**Hierarquia visual:** composição íntima, pouco espaço negativo (o quadro "abraça" o ambiente pequeno, mesma lógica de intimidade já usada para camarins no site), still-life de objetos pessoais e detalhe humano parcial dominando o quadro; texto mais presente que no Hero, ainda contido.

**Conteúdo esperado:** eyebrow de transição nomeando o conceito central ("Antes de todos verem" ou equivalente), um título curto, uma ou duas frases sensoriais, e a fotografia (still-life de objeto pessoal + detalhe humano parcial).

**Estratégia fotográfica:**
- Enquadramento: plano médio ambientado e still-life de objeto pessoal (joia, sapato, o vestido em repouso antes de ser vestido) + um detalhe humano parcial (mão, reflexo parcial em espelho — nunca rosto de frente, regra absoluta de `ART_DIRECTION.md` §1.6/§1.9).
- Lente equivalente: 50–85mm no plano médio; 85–105mm no still-life de objeto.
- Altura da câmera: nível dos olhos no plano médio; não aplicável no still-life.
- Profundidade de campo: intermediária a aberta (f/2.8–f/4 no gesto humano parcial, isolando-o sem cortar abruptamente o ambiente; mais aberta ainda, f/1.8–f/2.8, no still-life de objeto).
- Proporção arquitetura/pessoas/detalhe: ~20% / ~40% (presença humana parcial) / ~40% (still-life de objeto pessoal) — a fatia de "pessoas" aqui é deliberadamente incompleta (mão, reflexo), nunca um retrato pleno.
- Proporção de composição: 3:4 (retrato) — mesma lógica de intimidade já usada para o camarim em `/espaco/` e `/casamentos/`.
- Prioridade visual: média-alta — não é o pico da página, mas é a primeira aproximação humana, carregando peso emocional real.

**Microcopy ilustrativo:** eyebrow *"Antes de todos verem"*; título *"O último instante que ainda é só dela."*; frase de apoio: *"A luz da tarde entra pela janela do camarim, antes de qualquer outro olhar."*

**Ritmo de leitura:** mais lento que o Hero — a primeira "respiração" de leitura real da página, ainda com poucas palavras.

**Comportamento no mobile:** empilha imagem → texto, mesma lógica de todas as páginas; still-life de objeto pode aparecer como inserto pequeno abaixo do plano médio principal.

**Observações de implementação futura:** os objetos fotografados aqui são pessoais e específicos dela (joia, sapato, preparação individual) — **nunca os mesmos objetos que aparecerão em Os Detalhes (Seção 5)**, que fotografa a produção da festa (mesa, flores, decoração), não a preparação pessoal. Essa distinção precisa ficar explícita no briefing fotográfico para evitar redundância entre as duas seções de still-life da página.

---

## Seção 3 — A Entrada

**Objetivo:** o momento de maior escala visual da página inteira — a revelação da protagonista.

**Intenção emocional:** Confirmação (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 5) — ápice de reconhecimento mútuo.

**Função narrativa:** recebe a tensão construída em Bastidores e entrega o único pico absoluto da página — nenhuma outra seção pode competir nesta escala. Diferente do pico de `/casamentos/` (a Cerimônia, suspensão de um "sim" compartilhado entre iguais), aqui o pico é o reconhecimento de uma identidade individual sendo revelada a quem ama — um retrato, não um relato.

**Hierarquia visual:** a maior composição fotográfica da página, quase full-bleed; texto reduzido a eyebrow + uma linha curta — mesma disciplina de silêncio no pico já usada em `/casamentos/` § Cerimônia, aplicada aqui a um assunto diferente (uma pessoa sendo vista, não um casal se casando).

**Conteúdo esperado:** eyebrow curto, uma frase.

**Estratégia fotográfica:**
- Enquadramento: plano geral com ela em movimento de entrada — silhueta, movimento de virada, ou foco seletivo que a revela sem posá-la; nunca de frente parada olhando para a câmera.
- Lente equivalente: 35–50mm — equilibra mostrar o ambiente inteiro (prova de que é *este* salão) e a figura em movimento.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: intermediária (f/2.8–f/4) — ela reconhecível e em foco, o ambiente ao redor ainda legível, nem still-life isolado nem arquitetura fria demais.
- Proporção arquitetura/pessoas/detalhe: **~20% / ~80% / 0%** — a única seção da página em que a presença humana domina o quadro; exceção deliberada à média geral (`DEBUTANTES_PAGE_STRATEGY.md` §5), porque este é o único momento em que a protagonista, e não o espaço, é o assunto central.
- Proporção de composição: mais cinematográfica (16:9 ou 21:9 no desktop, ecoando o registro do Hero de `/espaco/`, mas aqui com ela presente pela primeira vez).
- Prioridade visual: máxima absoluta — o pico único da página inteira.

**Quantidade de texto:** a menor da página depois do Hero — eyebrow e uma frase, nada além disso. Qualquer parágrafo aqui competiria com a imagem no momento em que ela menos pode competir.

**Microcopy ilustrativo:** eyebrow *"A entrada"*; frase: *"O salão inteiro se vira para ela."*

**Ritmo de leitura:** visualmente instantâneo (uma imagem, texto mínimo), mas emocionalmente é onde o olhar do visitante permanece mais tempo — o ritmo de leitura *sente-se* mais lento mesmo sendo o mais econômico em palavras.

**Comportamento no mobile:** full-bleed mantendo a proporção mais vertical adaptada; texto permanece no terço inferior, nunca sobreposto ao rosto/figura principal da composição.

**Observações de implementação futura:** regra absoluta — nenhuma pose olhando diretamente para a câmera (`ART_DIRECTION.md` §1.6/§1.9); movimento ou silhueta são sempre preferíveis a um retrato posado e parado, mesmo elegante.

---

## Seção 4 — A Celebração

**Objetivo:** mostrar convidados, pista e convivência como resposta ao que acabou de ser revelado — sem se transformar numa galeria solta de fotos de festa.

**Intenção emocional:** Celebração (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 6) — alegria coletiva, seguida de ternura intergeracional.

**Função narrativa:** "testemunho, não relato de evento" (`DEBUTANTES_PAGE_STRATEGY.md` §3) — esta seção não continua contando "o que aconteceu na festa" em ordem cronológica (isso seria o eixo de Jornada, já ocupado por Casamentos); ela mostra a resposta de quem testemunhou o reconhecimento da Seção 3.

**O equilíbrio que evita virar galeria:** a diferença entre "Celebração" e a "Galeria Editorial" (Seção 7) é a diferença entre **curadoria narrativa** e **abundância como prova**. Aqui, duas fotografias, no máximo — uma cena específica, com peso e composição deliberados, contando um momento único (a plateia respondendo, depois um gesto intergeracional específico). A Galeria, mais adiante, existe para provar volume e repetição entre famílias diferentes; misturar as duas funções na mesma seção diluiria ambas.

**Hierarquia visual:** uma foto dominante (a plateia/pista respondendo, plano mais aberto) + uma foto menor (o gesto intergeracional — valsa ou brinde pai/mãe-filha), como "dupla de página" contida, não um grid.

**Conteúdo esperado:** eyebrow, título curto, foto dominante + insert do gesto intergeracional.

**Estratégia fotográfica:**
- Enquadramento: plano médio candid da pista/plateia respondendo (foto dominante); plano fechado do gesto intergeracional específico (insert).
- Lente equivalente: 35–50mm na foto dominante; 50–85mm no insert.
- Altura da câmera: nível dos olhos.
- Profundidade de campo: intermediária (f/2.8–f/4) nas duas.
- Proporção arquitetura/pessoas/detalhe: ~20% / ~70% / ~10% — presença humana coletiva e distribuída na foto dominante, mais próxima em escala à proporção que `/casamentos/` usa em sua Recepção, mas aqui seguida por um segundo momento mais próximo e pessoal (o insert).
- Proporção de composição: 4:3 ou 16:9 na foto dominante; 4:5 (retrato) no insert.
- Prioridade visual: alta, um degrau abaixo da Entrada — mesmo princípio de escala relativa que `/casamentos/` aplica entre Cerimônia e Recepção (`WEDDING_PAGE_STRATEGY.md` §6).

**Microcopy ilustrativo:** eyebrow *"A celebração"*; título *"A festa responde ao que acabou de acontecer."*; legenda do insert: *"Um brinde, só entre os dois."*

**Ritmo de leitura:** mais denso visualmente que as seções anteriores (duas imagens), mas ainda contido — nunca um mosaico de muitas fotos pequenas.

**Comportamento no mobile:** empilha foto dominante → texto → insert.

**Observações de implementação futura:** nenhuma fileira de convidados posando/sorrindo para a câmera; candid genuíno em ambas as fotos. O limite de duas fotografias nesta seção não é arbitrário — é o que impede a leitura de "galeria antecipada".

---

## Seção 5 — Os Detalhes

**Objetivo:** uma pausa deliberada de ritmo depois do pico (Entrada) e do calor coletivo (Celebração).

**Intenção emocional:** quietude, cuidado percebido através do objeto — um contraponto silencioso a duas seções consecutivas de alta energia visual e emocional.

**Por que esta seção desacelera a página:** depois de um crescendo contínuo (Hero → Bastidores → Entrada) e de um pico de energia coletiva (Celebração), o olho — e a emoção — precisam de uma pausa antes da seção tipográfica de reassurance (Estrutura). Still-life quieto e uniforme é o mecanismo de pausa já validado em outras páginas do site (`SPACE_PAGE_STRATEGY.md` §2, `WEDDING_PAGE_WIREFRAME.md` § Momentos, `CORPORATE_PAGE_WIREFRAME.md` § Seção 4) — aqui ele ganha, além da função de ritmo, uma função de conteúdo: prova que o cuidado do Speranza chega até o que não é o pico da festa.

**Diferença de Bastidores:** Bastidores fotografa objetos **pessoais dela** (preparação individual); Os Detalhes fotografa objetos **da produção da festa** — vestido em exibição (não sendo vestido), mesa posta, arranjo floral, ponto de luz, decoração pontual. Nenhum objeto se repete entre as duas seções.

**Hierarquia visual:** grid pequeno e uniforme (4 a 6 imagens, todas quadradas), texto reduzido a rótulos mínimos de uma palavra — mesmo dispositivo já usado em `/espaco/` § Detalhe, `/casamentos/` § Momentos e `/corporativo/` § Detalhe (Seção 4), aplicado aqui a um vocabulário de objeto específico desta página.

**Conteúdo esperado:** eyebrow, título curto, 4–6 still-life com rótulo de uma palavra cada.

**Estratégia fotográfica:**
- Enquadramento: still-life de perto, sempre.
- Lente equivalente: 85–105mm (ou macro real para objetos pequenos, como joia de mesa ou detalhe floral).
- Altura da câmera: não aplicável.
- Profundidade de campo: aberta (f/1.8–f/2.8) — objeto em foco nítido, fundo dissolvido em desfoque suave.
- Proporção arquitetura/pessoas/detalhe: **0% / 0% / 100%** — nenhuma pessoa nesta seção, decisão deliberada que reforça a pausa.
- Proporção de composição: 1:1 (quadrada) em todas as imagens — uniformidade deliberada, mesmo princípio de todas as outras seções de "Detalhe" do site.
- Prioridade visual: baixa individualmente, alta coletivamente (o conjunto, por acumulação, comunica cuidado).

**Microcopy ilustrativo:** eyebrow *"Os detalhes"*; título *"Nos pequenos detalhes, o mesmo cuidado."*; rótulos: *"Vestido"*, *"Mesa"*, *"Flores"*, *"Luz"*.

**Ritmo de leitura:** o mais quieto da página depois do Hero — silêncio visual deliberado, sem texto corrido.

**Comportamento no mobile:** grid de 2 colunas, mantendo a proporção quadrada.

**Observações de implementação futura:** confirmar, na curadoria fotográfica real, que nenhum objeto aqui duplica um já mostrado em Bastidores — a checagem cruzada entre as duas seções de still-life é uma etapa de revisão específica desta página, sem precedente direto nas outras (que só têm uma seção de still-life cada).

---

## Seção 6 — Estrutura

**Objetivo:** entregar a reassurance factual que os pais esperam, reagrupada com vocabulário próprio desta página — mesmo princípio adotado em todas as outras páginas de segmento, nenhuma informação nova em relação aos 12 itens já mapeados (`INVENTARIO-SITE-ATUAL.md` §3).

**Intenção emocional:** Segurança (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 7) — alívio racional dos pais, chegando só depois do arco emocional completo, nunca antes.

**Função narrativa:** pivô de tom deliberado — de sensação para informação, sinalizado por um eyebrow de transição (mesmo dispositivo já usado em todas as páginas de segmento). Numa apresentação real, ninguém fala de logística durante o espetáculo; a ficha técnica só faz sentido depois que a plateia já respondeu (Seção 4).

**Reagrupamento por blocos temáticos, não lista burocrática:**

| Cluster | Itens |
|---|---|
| **Para a entrada** | Sistema de som e iluminação, camarim privativo |
| **Para os convidados** | Segurança, estacionamento gratuito e exclusivo |
| **Para o conforto** | Climatização em todo o salão, mobiliário incluso |
| **Para o sabor** | Cozinha equipada, buffet parceiro (Combinatto Buffet) |

**Hierarquia visual:** seção majoritariamente tipográfica, segunda pausa da página (a primeira foi visual/silenciosa em Os Detalhes; esta é textual/informativa) — 4 clusters, não uma lista plana de 12 itens.

**Conteúdo esperado:** eyebrow de transição, título curto, os 4 clusters, link discreto de fechamento.

**Estratégia fotográfica:** nenhuma foto nova — seção tipográfica por decisão de sistema, mesma escolha de todas as páginas equivalentes.

**Microcopy ilustrativo:** eyebrow *"Estrutura para a sua estreia"*; título *"Tudo já resolvido, para vocês aproveitarem cada instante."*; link de fechamento: *"Ainda tem dúvidas? Fale com nossa equipe →"*.

**Ritmo de leitura:** pausa tipográfica — texto mais denso que qualquer seção anterior, mas ainda em frases curtas, uma ideia por linha.

**Comportamento no mobile:** 1 coluna; 2 colunas em tablet; 4 em desktop — mesmo breakpoint já usado em `/espaco/` e `/casamentos/`.

**Observações de implementação futura:** **TODO** — segurança para público jovem já é item confirmado do inventário geral, mas a calibração específica (ex. presença de equipe de apoio dedicada a convidados menores de idade) depende de validação com o cliente. **TODO** — capacidade de convidados por formato de festa segue pendente (mesma pendência geral já registrada em `ESTRATEGIA.md` § Dados a validar); não inventar número.

---

## Seção 7 — Galeria Editorial

**Objetivo:** confirmação por abundância — provar que o padrão de qualidade se repete em famílias diferentes, não foi sorte de uma única festa bem fotografada.

**Intenção emocional:** Confirmação coletiva (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 8) — confiança reforçada por repetição.

**Por que existe separadamente da Celebração (Seção 4):** a Celebração é uma cena única, curada, contando um momento específico com duas fotografias no máximo (registro de impacto). A Galeria Editorial é registro de **volume** — muitas estreias diferentes, mostrando que a mesma qualidade de cuidado se repete de família para família, não uma fórmula aplicada uma vez e reaproveitada como prova geral. Misturar as duas geraria uma seção nem curada nem abundante — a pior combinação possível.

**Composição:** grid assimétrico editorial — uma prancha dominante, uma tira panorâmica, inserts de tamanhos variados, como uma sessão fotográfica real com enquadramentos distintos (mesmo espírito de `.gallery-editorial` da Home e da Galeria de `/casamentos/`, sem lightbox — registro de fotografia impressa, cantos retos).

**Quantidade:** 4 a 6 imagens — suficiente para comunicar variedade sem diluir a curadoria em volume genérico.

**Ordem:** da mais arquitetural (o salão montado para uma estreia diferente da já vista na página) para a mais próxima (still-life ou detalhe humano parcial de outra família) — eco discreto da lógica de aproximação progressiva já usada no resto da página, mas em miniatura e sem revelar rosto de ninguém de frente.

**Ritmo:** o mais denso visualmente da página em número de imagens, mas organizado por proporções variadas deliberadas — nunca um mosaico uniforme (isso pertence só a Os Detalhes).

**Conteúdo esperado:** eyebrow, título curto, grid assimétrico de 4–6 fotografias reais (quando existirem) de diferentes celebrações.

**Estratégia fotográfica:**
- Enquadramento: mistura de plano geral, plano médio e still-life, conforme a imagem disponível.
- Lente equivalente: variável, 35–105mm conforme o tipo de plano.
- Altura da câmera: nível dos olhos nos planos gerais/médios.
- Profundidade de campo: fechada nos planos gerais, aberta nos still-life — mesma regra geral de `ART_DIRECTION.md` §1.5.
- Proporção arquitetura/pessoas/detalhe: mistura equilibrada, mais próxima da média geral da página (~45/25/30) do que qualquer seção individual — é a única seção que existe para representar o *conjunto*, não um momento específico.
- Proporção de composição: variada (4:3, 3:4, 16:9), nunca uniforme.
- Prioridade visual: média-alta coletivamente, sem pico único — o oposto deliberado da Entrada.

**Microcopy ilustrativo:** eyebrow *"Muitas estreias"*; título *"Cada família, a sua própria estreia."*

**Comportamento no mobile:** 2 colunas com faixas largas alternadas, mesma lógica adaptativa já usada na Galeria de `/casamentos/`.

**Observações de implementação futura:** sem lightbox — mesma decisão da Galeria assimétrica de `/casamentos/`, reservado só para grids quadrados uniformes (Os Detalhes). Sem fotografia real disponível, usar o mesmo estado de placeholder disciplinado já exigido em qualquer outra página (`ART_DIRECTION.md` §6) — nunca fabricar ou implicar uma família real sem autorização.

---

## Seção 8 — FAQ

**Objetivo:** fechar as dúvidas realmente específicas de uma festa de debutante — não as perguntas genéricas já respondidas em Home ou as perguntas específicas de casamento que não se aplicam aqui.

**Por que não copiar Casamentos nem Home:** "posso levar fornecedores externos?" e "o buffet é obrigatório?" pertencem ao repertório de decisão de casamento (fornecedor externo de cerimônia, etc.); "quais tipos de evento o espaço recebe?" pertence à Home (pergunta de triagem, não de aprofundamento). As perguntas aqui só fazem sentido para quem já decidiu que é uma festa de debutante e está avaliando detalhes daquele formato específico.

**Perguntas específicas desta página:**
1. *"Há serviço de segurança para os convidados mais jovens?"* — resposta factual, apoiada no item confirmado do inventário (serviço de segurança).
2. *"Posso contratar decoração temática própria?"* — resposta conservadora, redireciona para a equipe (dado de política de fornecedor externo não confirmado para este segmento).
3. *"Até que horas a festa pode acontecer?"* — mesma resposta conservadora já usada em `/casamentos/` (horário combinado na visita; dado geral não informado).
4. *"Quantos convidados o salão recebe numa festa de debutante?"* — resposta conservadora (capacidade por formato ainda não confirmada).
5. *"É possível ter um momento de entrada com destaque de luz?"* — pergunta específica desta página (ecoa a Seção 3) — resposta conservadora até confirmação de capacidade técnica de iluminação cênica pontual.

**Hierarquia visual:** tipográfica, calma — mesmo componente `.faq-item`/`<details>`/`<summary>` já usado em todo o site, sem novo padrão.

**Estratégia fotográfica:** nenhuma.

**Microcopy ilustrativo:** eyebrow *"Perguntas frequentes"*; título *"Algumas respostas antes da sua estreia."*

**Ritmo de leitura:** direto, factual — mesma régua de `COPY_GUIDE.md`, sem menção a valores nas respostas.

**Comportamento no mobile:** 1 coluna; 2 colunas em desktop (breakpoint 1024px), mesmo padrão já usado em `/casamentos/`.

**Observações de implementação futura:** **TODO** nas perguntas 2, 3, 4 e 5 — todas dependem de validação do cliente (política de fornecedor externo de decoração, horário de atendimento, capacidade por formato, capacidade técnica de iluminação de destaque). Nenhuma resposta deve especular número ou política não confirmada.

---

## Seção 9 — CTA Final

**Objetivo:** fechar o arco teatral inteiro com um convite calmo, dirigido às duas partes da decisão.

**Intenção emocional:** Ação (`DEBUTANTES_PAGE_STRATEGY.md` §2, item 9) — convite calmo, sem urgência.

**Por que "Agende uma visita", não orçamento:** a família — como o casal em `/casamentos/` — só sabe se o lugar é "certo" depois de senti-lo fisicamente, e a debutante especificamente só pode dar sua própria aprovação emocional estando presente (`DEBUTANTES_PAGE_STRATEGY.md` §7). Pedir orçamento antes da visita inverteria a ordem que a própria metáfora exige: ninguém aprova uma estreia sem ver o palco primeiro.

**Por que sem urgência:** a mesma regra geral de todo o site (`ESTRATEGIA.md` §6, nunca escassez falsa) tem, aqui, um motivo adicional: uma página que passou o arco inteiro construindo reconhecimento cuidadoso não pode terminar contradizendo esse cuidado com pressa artificial ("garanta sua data", "vagas limitadas"). Isso reintroduziria, na última respiração da página, exatamente o registro de ansiedade que a estratégia inteira existe para dissolver.

**Por que a página termina de forma calma:** o arco dramatúrgico (bastidor → entrada → celebração) já entregou seu clímax na Seção 3; o CTA Final não compete com esse pico, nem tenta recriar energia — ele é o equivalente a uma plateia de pé, silenciosa por um instante antes do aplauso, convidando a família a viver a cena de verdade.

**Hierarquia visual:** container estreito, texto centralizado, sem foto/textura/caixa/sombra — mesmo espírito do CTA Final de todas as outras páginas do site.

**Conteúdo esperado:** eyebrow curto, título breve, uma frase de apoio dirigida às duas partes da decisão (não só a quem paga — nuance registrada em `DEBUTANTES_PAGE_STRATEGY.md` §7), CTA primário "Agende uma visita", CTA secundário um link para `/espaco/` quando fizer sentido de navegação.

**Estratégia fotográfica:** nenhuma — consistente com o CTA Final do resto do site, 100% tipográfico por decisão de sistema.

**Microcopy ilustrativo:** eyebrow *"Vamos conversar"*; título *"A estreia dela merece ser vista de perto."*; frase de apoio: *"Agende uma visita e sintam juntos se este é o lugar certo."*

**Ritmo de leitura:** calmo, direto — mesma régua de qualquer CTA Final do site.

**Comportamento no mobile:** mesma lógica de empilhamento de botões já estabelecida (`flex-wrap`, sem nova regra).

**Observações de implementação futura:** o texto de apoio precisa, na fase de copy final, reconhecer implicitamente as duas partes da decisão sem virar dois botões — um único CTA, uma frase que funcione para mãe/pai e para a debutante ao mesmo tempo.

---

## Resumo de proporções por seção (referência rápida)

| Seção | Proporção dominante (desktop) | Pessoas | Prioridade visual |
|---|---|---|---|
| 1. Hero | 16:9 / 4:5 | 0% | Máxima |
| 2. Bastidores | 3:4 | ~40% (parcial, sem rosto) | Média-alta |
| 3. A Entrada | 21:9 ou 16:9 | ~80% | Máxima absoluta |
| 4. A Celebração | 4:3/16:9 + insert 4:5 | ~70% | Alta (um degrau abaixo da Entrada) |
| 5. Os Detalhes | 1:1 (todas) | 0% | Baixa individual / alta coletiva |
| 6. Estrutura | — (tipográfica) | — | Baixa |
| 7. Galeria Editorial | Variada (4:3/3:4/16:9) | Mista | Média-alta, sem pico único |
| 8. FAQ | — (tipográfica) | — | — |
| 9. CTA Final | — (tipográfica) | — | — |

A curva de presença humana (0% → 40% parcial → 80% → 70% → 0%) é, por si só, o gráfico da metáfora: ocultação total, aproximação parcial, revelação plena, resposta coletiva, silêncio de novo. Nenhuma outra página do site tem esse desenho específico de curva.

---

# Revisão crítica

**A metáfora continua consistente até a última seção?** Sim, com um ponto de atenção: a partir da Seção 6 (Estrutura), a página se torna predominantemente tipográfica e funcional — o mesmo que acontece em todas as outras páginas do site depois do pivô de tom. A consistência da metáfora nessas seções finais não está na fotografia (que praticamente desaparece), mas na ordem e no motivo dramatúrgico já explicado seção a seção (reassurance só depois do aplauso, prova de abundância antes do convite final). Isso é suficiente para manter a metáfora como princípio organizador, mesmo sem imagens teatrais explícitas — mas vale registrar que a "textura" de Estreia é mais sentida nas Seções 1–5 do que nas 6–9.

**Alguma parte lembra Casamentos?** O maior risco está na Seção 4 (A Celebração) — se a curadoria fotográfica não respeitar o limite de duas imagens e a diferença de função frente à Galeria Editorial (Seção 7), ela pode escorregar visualmente para a Recepção de `/casamentos/`. A mitigação já está registrada na própria seção (o limite deliberado de duas fotos, a explicação do equilíbrio) — mas é o ponto do documento que mais depende de disciplina na implementação real, não de uma regra automática.

**Alguma seção virou catálogo?** Não, por construção — tanto a Celebração (curadoria de duas imagens) quanto a Galeria Editorial (assimétrica, sem grid uniforme) foram desenhadas especificamente para evitar isso. O único ponto de vigilância é Os Detalhes (Seção 5), que por ser um grid uniforme de still-life poderia, em excesso de itens (mais de 6), começar a ler como catálogo de produto — o limite de 4–6 imagens existe para isso.

**Existe excesso de teatralidade?** Nenhuma seção descreve elementos cênicos literais (holofote colorido, cortina, tablado) — a linguagem teatral permanece só no vocabulário de raciocínio interno (bastidor, entrada, plateia), nunca na direção de arte ou no copy ilustrativo, que usam sempre descrição observável e concreta. O risco real de teatralidade excessiva está inteiramente na fase de execução fotográfica (já sinalizado em `DEBUTANTES_PAGE_STRATEGY.md` §9), não neste documento.

**Há repetição de ritmo?** Não — a curva de proporção humana na tabela acima (0/40/80/70/0) é deliberadamente não-monótona, e a alternância entre seções densas em imagem (1, 3, 4, 7) e seções quietas (2 em parte, 5, 6, 8, 9) segue o mesmo mecanismo geral do site (nunca duas seções do mesmo peso em sequência), com a variação adicional de que as três primeiras seções crescem em intensidade de propósito (crescendo dramatúrgico), diferente da alternância mais "neutra" de outras páginas.

**Onde a direção de arte será decisiva?** Três pontos, por ordem de risco: (1) a curadoria da Seção 3 (Entrada) — se a foto não conseguir mostrar movimento/revelação sem posar, o pico da página inteira fica comprometido; (2) o registro fotográfico da protagonista em todas as seções onde ela aparece parcial ou totalmente — precisa manter dignidade de retrato editorial, nunca deslizar para estética de "photoshoot" adulto (`DEBUTANTES_PAGE_STRATEGY.md` §8); (3) a distinção real de objetos entre Bastidores e Os Detalhes, que depende inteiramente de planejamento de sessão fotográfica, não de qualquer regra de código.

**Quais dados ainda dependem do cliente?** Capacidade por formato de festa (Seções 2/6/8), existência real de um momento de entrada com destaque de luz/iluminação cênica pontual (Seções 3/8), política de fornecedores externos de decoração temática (Seção 8), calibração de segurança para público jovem (Seção 6), e existência de registro fotográfico real de debutantes anteriores com autorização de uso (Seção 7) — todos já marcados como TODO nas seções correspondentes.

**Quais riscos permanecem antes da implementação?** Os três já nomeados em `DEBUTANTES_PAGE_STRATEGY.md` §9 continuam valendo integralmente (dissolução por comitê, ocultação lida como lacuna em vez de decisão, nuance do CTA perdida na fase de copy) — este wireframe não os resolve, só os localiza precisamente: a dissolução por comitê ameaça principalmente a Seção 9 (CTA Final); a leitura errada da ocultação ameaça principalmente a Seção 1 (Hero) e o início da Seção 2; a nuance do CTA ameaça só a Seção 9. Localizar o risco por seção é o que permite à próxima fase (copy final) saber exatamente onde reforçar a disciplina.

**Gap registrado, não resolvido:** esta página não tem uma seção de Localização e Acesso, presente em todas as outras páginas do site. A omissão foi deliberada nesta passada (seguindo a instrução de não adicionar seção por convenção), mas fica como ponto em aberto para a fase de implementação decidir se essa informação entra como uma seção própria, se é absorvida pelo footer com mais destaque, ou se de fato não faz falta nesta página especificamente.

---

**Este documento e o `DEBUTANTES_PAGE_STRATEGY.md` juntos são a autoridade para a implementação de `/debutantes/`.** As únicas decisões que restam à próxima fase são de execução — HTML, CSS, componentes e conteúdo definitivo — nunca de arquitetura narrativa.
