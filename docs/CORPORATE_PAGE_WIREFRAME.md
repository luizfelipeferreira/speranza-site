# Speranza Eventos — Wireframe Textual da Página "Corporativo"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Executa a arquitetura definida em [CORPORATE_PAGE_STRATEGY.md](CORPORATE_PAGE_STRATEGY.md) — leia aquele documento primeiro; este assume a jornada emocional, a diferenciação frente a Home/Espaço/Casamentos e as regras de fotografia/copy já decididas ali.
**Base fotográfica:** vocabulário de [ART_DIRECTION.md](ART_DIRECTION.md), recalibrado para esta página em `CORPORATE_PAGE_STRATEGY.md` §8 (quase nenhuma presença humana — o inverso da recalibração feita para Casamentos).
**Sem código:** nenhuma classe, tag ou propriedade CSS é definida aqui — proporções e prioridades descrevem intenção visual.
**Dispositivo central da página inteira:** o mesmo espaço físico do Speranza, mostrado reconfigurado para quatro formatos de uso corporativo distintos — não um tour de ambientes (Espaço), não o fotoensaio de um dia (Casamentos). Cada seção visual prova capacidade e precisão; cada seção tipográfica remove uma dúvida prática específica de quem decide sozinho.

---

## Como ler este documento

Cada seção é descrita em nove camadas: **Objetivo**, **Narrativa**, **Hierarquia visual**, **Fotografia**, **Conteúdo**, **Microcopy** (ilustrativo, não copy final — mesmo princípio de `COPY_GUIDE.md` §7), **Composição**, **Responsividade**, **Transição** para a seção seguinte.

---

## Seção 1 — Hero

**Objetivo:** competência silenciosa — "isso já está pronto para funcionar". Sem argumento, sem qualificação de formato ainda, sem pessoas. É a mesma disciplina de silêncio do Hero de `/espaco/`, com um detalhe a mais: o ambiente precisa parecer **prestes a ser usado**, não vazio por abandono.

**Narrativa:** abre a página inteira, sem receber nada de antes. Entrega, ao fim, o primeiro fato concreto que a Abertura Conceitual (Seção 2) vai nomear.

**Hierarquia visual:** fotografia em largura de viewport (full-bleed), mesmo princípio do Hero de `/espaco/`. Texto mínimo (eyebrow + H1 de uma linha), posicionado num terço da composição com espaço negativo generoso, nunca sobre o centro do quadro. Nenhum CTA dentro do Hero — o WhatsApp flutuante e o CTA do header já cobrem quem quiser agir de imediato (`CORPORATE_PAGE_STRATEGY.md` §12).

**Fotografia:** plano geral do salão principal montado em formato plenária — cadeiras alinhadas com pequena variação humana real (não perfeitamente em fila, como se alguém tivesse acabado de ajustar a última), luz natural de manhã entrando pelas janelas, nenhuma pessoa em cena. Lente 35mm equivalente (mesma lógica de `ART_DIRECTION.md` §1.3 — mostra o ambiente inteiro sem distorção). Composição assimétrica, linha de fuga real (fileiras de cadeira conduzindo o olhar), profundidade de campo fechada (f/5.6–f/8, tudo em foco — a foto precisa provar escala, `ART_DIRECTION.md` §1.5). Luz quente-neutra, nunca fria.

**Conteúdo:** eyebrow curto ("Eventos Corporativos" ou equivalente), H1 de uma linha, sem subheadline (mesmo padrão de silêncio do Hero de `/espaco/`).

**Microcopy:** eyebrow *"Corporativo"*; H1 *"Estrutura pronta para reunir sua empresa inteira."* — eco deliberado de um dos headlines de referência já calibrados em `COPY_GUIDE.md` §7 (item 7), fechando o ciclo entre o guia geral e esta página específica.

**Composição:** 16:9 em desktop (mesma proporção do Hero de `/casamentos/` — nem o 21:9 cinematográfico de `/espaco/`, nem uma proporção mais fechada; 16:9 comunica "sala de trabalho real", não "showreel de hotel de lazer"). Mobile: 4:5, mesmo recorte adaptativo (mesma foto-base, reenquadrada).

**Responsividade:** idêntica ao padrão já estabelecido em `/espaco/` e `/casamentos/` — a foto não muda, o enquadramento recorta para vertical.

**Transição:** o silêncio do Hero é quebrado pela Abertura Conceitual — a primeira frase da página nomeia o que a foto acabou de provar (escala, prontidão).

---

## Seção 2 — Abertura Conceitual

**Objetivo:** ancoragem rápida — "esse lugar tem escala e endereço reais, e já resolve o básico". Ao contrário da Abertura Conceitual de `/espaco/` (que também traz o 450m² cedo, mas dentro de uma jornada de admiração), aqui o fato chega ainda mais cedo em relação ao volume total da página, porque este público verifica antes de se deixar seduzir (`CORPORATE_PAGE_STRATEGY.md` §5).

**Narrativa:** recebe o silêncio do Hero e entrega o primeiro dado duro da página. Termina apontando para a Seção 3 ("veja os formatos que o espaço atende").

**Hierarquia visual:** 100% tipográfica, mesmo dispositivo de `/espaco/` § Abertura Conceitual — o número (450m²) tratado com peso tipográfico de "dado", não escondido num parágrafo (mesmo benchmark com Apple já registrado em `SPACE_PAGE_STRATEGY.md` §5). Diferente de `/espaco/`, aqui o parágrafo pode conter um segundo dado curto ao lado do metro quadrado (ex. localização em Jundiaí, ou capacidade quando o número for confirmado — ver nota de dado pendente abaixo), porque a mente racional deste público absorve dois fatos numa só respirada sem que isso pareça denso.

**Conteúdo:** um parágrafo curto (2–3 frases) situando o espaço (endereço/bairro, propósito), o número de metragem como elemento gráfico, uma frase de transição para os formatos.

**Estratégia fotográfica:** nenhuma foto nova, mesmo padrão de `/espaco/` § Abertura Conceitual — a seção é uma pausa tipográfica deliberada logo após o impacto visual do Hero.

**Microcopy:** *"O Speranza reúne 450m² num único endereço no Bairro Caxambú, pronto para receber desde uma confraternização de equipe até uma convenção formal."* seguido do número **450m²** tratado como elemento gráfico, seguido de *"Veja como o espaço se adapta ao formato do seu evento."*

*(Nota de dado pendente: a capacidade por formato — sentado, plenária, coquetel — segue sem confirmação do cliente, ver `WIREFRAME.md` § Dados a validar. Enquanto o número exato não existir, esta seção usa só o metro quadrado, já confirmado; a capacidade por formato entra na Seção 5 assim que validada, nunca estimada.)*

**Responsividade:** o número 450m² mantém peso tipográfico grande proporcional ao texto, mesma regra de `/espaco/`.

**Transição:** a frase final da seção já nomeia "formato" — a palavra que abre a Seção 3.

---

## Seção 3 — Formatos de Evento

**Objetivo:** o corpo da página e o dispositivo estrutural central. Prova, com o mesmo espaço mostrado quatro vezes, que o Speranza atende qualquer configuração de evento corporativo sem depender de imaginação por parte de quem decide.

**Narrativa:** recebe o fato de escala da Abertura Conceitual e entrega, formato a formato, a resposta para "isso serve para o meu tipo de evento?". Termina no formato mais informal (Confraternização), que é a ponte natural para o still-life de precisão da Seção 4 (a mesa de coquetel/coffee break puxa a câmera para o detalhe).

### Os 4 formatos — e por que essa ordem

| # | Formato | Por que aqui |
|---|---|---|
| 3.1 | **Plenária / Palestra** | O formato mais formal e mais exigente em infraestrutura (som, imagem, fileiras de cadeira) — abre a seção pelo caso mais rigoroso, para que os formatos seguintes leiam como "ainda mais fácil", não o contrário. |
| 3.2 | **Treinamento / Workshop** | Variação do mesmo espaço em configuração de mesas agrupadas — mostra que o salão não é fixo em fileira, reforçando o argumento central da seção (reconfiguração real, não teórica). |
| 3.3 | **Lançamento de produto** | Introduz o registro mais cenográfico dos quatro (iluminação de destaque, ambientação), sem cruzar para o clichê de evento social — é o ponto da seção com mais "produção", ainda contido pela mesma disciplina de luz natural/quente de `ART_DIRECTION.md`. |
| 3.4 | **Confraternização de equipe** | Fecha no registro mais informal e social — ponte direta para o still-life de mesa/coquetel da Seção 4. |

*(Mesma ressalva de `SPACE_PAGE_WIREFRAME.md` § Tour: esta é uma ordem de storytelling — do mais formal ao mais social — não uma hierarquia de importância comercial. Os quatro formatos têm peso visual equivalente, ver `CORPORATE_PAGE_STRATEGY.md` §6.)*

**Hierarquia visual:** cada formato é uma pequena "dupla de página" (mesmo dispositivo de `/espaco/` § Tour): uma foto grande do ambiente reconfigurado + um título curto (o nome do formato) + uma frase de apoio factual. Diferente do Tour de `/espaco/`, aqui **nenhum formato recebe proporção maior que os outros de forma consistente** (ver `CORPORATE_PAGE_STRATEGY.md` §6 — peso visual distribuído de propósito) — a variação de proporção entre os quatro é pequena e alternada, não hierárquica.

**Fotografia (por formato):**

**3.1 Plenária/Palestra**
- Foto: plano geral do salão em fileiras voltadas para uma frente com tela desligada mas visível, luz de manhã.
- Lente: 35mm. Composição: assimétrica, linha de fuga real. Profundidade de campo fechada.
- Proporção: 16:9. Prioridade: equivalente aos demais formatos (não é o "hero" do conjunto).

**3.2 Treinamento/Workshop**
- Foto: mesmo salão, mesas agrupadas em ilhas, cadeiras ao redor, material de apoio (bloco, caneta) discreto sobre a mesa — sem pessoas.
- Lente: 35–50mm. Composição: leve variação de ângulo em relação a 3.1, para não repetir o mesmo ponto de vista do salão duas vezes seguidas.
- Proporção: 4:3.

**3.3 Lançamento de produto**
- Foto: ambiente com iluminação cenográfica discreta (nunca neon, nunca luz azul de balada — `ART_DIRECTION.md` §4), um elemento de destaque centralizado (mesa/pedestal vazio, pronto para receber um produto), still preservando luz quente-neutra.
- Lente: 35–50mm. Composição: mais centralizada que as demais (exceção deliberada, mesmo princípio de exceção pontual já usado na fachada de `/espaco/` § Localização) — um lançamento pede uma composição que sugira "palco", ainda que discreto.
- Proporção: 4:3 ou 1:1.

**3.4 Confraternização de equipe**
- Foto: área externa ou salão em configuração de coquetel — mesas altas, sem toalha decorativa exagerada, luz de fim de tarde.
- Foto de detalhe (insert, ponte para a Seção 4): still de copos/aparador organizado, sem pessoas.
- Lente: 35mm no ambiente, 85mm no insert.
- Proporção: 4:3 no ambiente, 1:1 no insert.

**Conteúdo:** por formato, um título curto (nome do formato), uma frase de apoio factual (nunca adjetivo vazio), e a(s) fotografia(s) correspondente(s).

**Microcopy:** uma frase factual por formato. Exemplos ilustrativos:
- Plenária: *"Fileiras para até [capacidade a confirmar] pessoas, som e projeção prontos."*
- Treinamento: *"Mesas em grupo, espaço para dinâmica, luz natural o dia inteiro."*
- Lançamento: *"Um ponto de destaque, iluminação sob controle, sem depender de improviso."*
- Confraternização: *"Área externa ou salão, num só endereço, para o fim do trimestre da equipe."*

**Composição:** grid de 2 colunas (desktop) / empilhado (mobile), cada card com proporção levemente distinta (16:9 / 4:3 / 4:3 ou 1:1 / 4:3) — variação pequena, não hierárquica (reforça "quatro formatos igualmente resolvidos", ver `CORPORATE_PAGE_STRATEGY.md` §6).

**Responsividade:** mobile empilha os 4 formatos em sequência única, mantendo a pequena variação de proporção entre eles para o ritmo não desaparecer em coluna única (mesmo princípio de `SPACE_PAGE_WIREFRAME.md` § Tour).

**Transição:** o insert de still-life da Confraternização (3.4) já antecipa visualmente a linguagem de still-life que domina a Seção 4 — mesmo corte de "plano geral para close-up" usado em `/espaco/` § Tour→Detalhe.

---

## Seção 4 — Detalhe (precisão)

**Objetivo:** pausa de ritmo depois dos quatro formatos — a câmera se aproxima de objetos que garantem que nada saia do previsto, não de objetos que emocionam. É o equivalente funcional do still-life afetivo de `/espaco/`/`/casamentos/`, mas fotografando controle operacional.

**Narrativa:** começa exatamente onde a Confraternização (3.4) terminou — um corte de plano geral para close-up. Entrega, ao final, a pausa necessária antes do pivô de tom que abre a Seção 5.

**Hierarquia visual:** conjunto pequeno (4 a 6 still-life), todas em proporção quadrada — mesmo dispositivo de uniformidade de `/espaco/` § Seção 4 e `/casamentos/` § Momentos (depois da variação de proporção na seção anterior, esta seção "acalma" com uniformidade). Texto reduzido a rótulos de uma palavra.

**Fotografia:** still-life de precisão — cabo de energia organizado, tomada disponível ao lado de um assento, copo d'água sobre mesa arrumada, luz natural sobre uma superfície de trabalho limpa, textura de material do mobiliário (madeira, linho, metal escovado). **Nunca** still-life de mesa posta afetiva (louça decorada, arranjo floral) — esse vocabulário pertence a `/espaco/`/`/casamentos/`, não aqui (`CORPORATE_PAGE_STRATEGY.md` §10). Lente 85–105mm equivalente, profundidade de campo aberta (f/1.8–f/2.8), muito espaço negativo ao redor do objeto, luz suave lateral.

**Conteúdo:** 4 a 6 still-life, nenhum texto corrido — só rótulos mínimos.

**Microcopy:** silêncio quase total. Rótulos de uma palavra só: *"Energia"*, *"Preparo"*, *"Luz"*, *"Material"* — nunca uma frase completa.

**Composição:** proporção 1:1 em todas as imagens do conjunto.

**Responsividade:** mobile: grid 2 colunas mantendo proporção quadrada; desktop pode variar levemente (uma imagem um pouco maior), desde que a maioria permaneça quadrada — mesma regra de `/espaco/` § Detalhe.

**Transição:** pivô de tom deliberado — de sensação para informação, sinalizado por um eyebrow de transição (mesmo dispositivo já usado em `/espaco/` § Detalhe→Estrutura e `/casamentos/` § Bastidores→Estrutura). A página pausa o registro visual; a partir daqui, ela responde perguntas práticas.

---

## Seção 5 — Infraestrutura Completa

**Objetivo:** o alívio racional que este público espera desde o início — entregue aqui, não escondido no fim, porque a jornada informacional desta página é mais longa que a de Espaço/Casamentos (`CORPORATE_PAGE_STRATEGY.md` §7). Nenhuma informação nova em relação aos 12 itens já mapeados (`INVENTARIO-SITE-ATUAL.md` §3) — mudança de agrupamento e vocabulário, não de conteúdo.

**Narrativa:** ecoa o pivô de tom que fechou a Seção 4. Termina entregando o primeiro CTA discreto da página (um link, não um botão sólido), preparando a transição para "Como Funciona".

**Hierarquia visual:** seção majoritariamente tipográfica, segunda pausa visual da página (padrão de ritmo: 1-grande, 2-pequeno, 3-grande×4, 4-médio-uniforme, 5-pequeno — mesma lógica de alternância de `SPACE_PAGE_WIREFRAME.md`). Os 12 itens reagrupados em **4 clusters temáticos com vocabulário corporativo**, não em lista plana:

| Cluster | Itens |
|---|---|
| **Conectividade e apoio técnico** | Sistema de som e imagem, Wi-Fi (dado a confirmar — ver nota abaixo), equipe de apoio treinada |
| **Logística** | Estacionamento gratuito, segurança, acessibilidade (dado a confirmar) |
| **Conforto** | Climatização, mobiliário incluso |
| **Alimentação** | Cozinha equipada, buffet parceiro (Combinatto Buffet), coffee break/almoço corporativo |

*(Nota de dado pendente: a existência de Wi-Fi não consta em nenhum levantamento anterior do site — `WIREFRAME.md` § Dados a validar já sinalizava isso como item a confirmar com o cliente antes de qualquer publicação. Este cluster não pode entrar em produção com Wi-Fi afirmado sem essa confirmação; se não houver Wi-Fi, o cluster se chama só "Apoio técnico" e o item sai da lista, nunca é mantido como afirmação vaga.)*

**Conteúdo:** eyebrow de transição, título de seção curto, os 4 clusters (título + itens em uma linha factual cada), link discreto de fechamento.

**Fotografia:** nenhuma nova — mesma decisão de `/espaco/` § Estrutura Completa e `/casamentos/` § Estrutura para Casamentos (seção tipográfica por completo).

**Microcopy:** eyebrow *"Infraestrutura completa"*; título *"Tudo já resolvido, antes mesmo de você perguntar."* — mesmo eco textual do eyebrow equivalente de `/espaco/`, aplicado ao vocabulário corporativo. Item factual: *"Estacionamento gratuito para todos os participantes."* Link de fechamento: *"Ainda tem uma dúvida específica? Fale com nossa equipe →"*.

**Composição:** 4 clusters em 2 colunas (tablet+) / 4 colunas (desktop) — mesmo breakpoint de `/espaco/` e `/casamentos/`.

**Responsividade:** 1 coluna no mobile.

**Transição:** do "o que já está incluso" para "como formalizar isso" — a Infraestrutura fecha a reassurance técnica, "Como Funciona" abre o caminho prático até a proposta.

---

## Seção 6 — Como Funciona (processo de proposta)

**Objetivo:** clareza de próximo passo — "eu sei exatamente o que fazer para levar isso adiante". Seção com peso próprio nesta página (diferente de Espaço/Casamentos, onde "como funciona" é reforço secundário, `CORPORATE_PAGE_STRATEGY.md` §5), porque o processo de contratação corporativa é mais formal e passa, tipicamente, por aprovação interna do lado do cliente.

**Narrativa:** recebe o "está tudo resolvido" da Infraestrutura e entrega o caminho concreto até a proposta. Termina no CTA mais completo do corpo da página — o segundo ponto de conversão explícito, antes do CTA final.

**Hierarquia visual:** tipográfica, com 4 passos numerados horizontalmente (desktop) — dispositivo simples, sem fotografia nova, ecoando "Como Funciona" da Home mas com vocabulário e passos próprios desta página.

**Conteúdo:** 4 passos — Solicitação de contato → Visita técnica ao espaço → Proposta formal → Confirmação de data — cada um com uma frase curta de apoio.

**Fotografia:** nenhuma — seção tipográfica, mesma disciplina das seções informacionais desta página.

**Microcopy:** título *"Do primeiro contato à data confirmada."* Passos: *"Você fala com a gente"* / *"Agendamos uma visita técnica"* / *"Você recebe uma proposta formal"* / *"A data é confirmada"*.

**Composição:** 4 passos em linha horizontal (desktop, com numeral editorial grande por passo, mesmo vocabulário tipográfico de dado já usado na Abertura Conceitual) / empilhados (mobile).

**Responsividade:** 1 coluna mobile, numerais mantêm peso visual proporcional.

**Transição:** o processo termina em "data confirmada" — a página volta ao concreto: onde isso acontece.

---

## Seção 7 — Localização e Acesso

**Objetivo:** provar que o lugar é real, acessível, dirigível — mesma função de `/espaco/` § Localização, com um dado adicional de peso específico para este público: estacionamento.

**Narrativa:** recebe o "processo resolvido" da Seção 6 e entrega a última peça prática antes do convite final.

**Hierarquia visual:** mapa incorporado (Google Maps) como elemento dominante, com uma fotografia de apoio da fachada/chegada — mesmo dispositivo de `/espaco/` § Localização (a única vez na página em que o espaço é visto de fora).

**Fotografia:** fachada/exterior do prédio, entardecer, plano geral arquitetural, lente 35mm, composição simétrica (mesma exceção deliberada de `/espaco/` § Localização — fachada de frente comunica solidez).

**Conteúdo:** endereço completo (Av. Humberto Cereser, nº 3970, Bairro Caxambú, Jundiaí/SP), mapa incorporado, uma frase curta destacando estacionamento gratuito, CTA secundário "Como chegar".

**Microcopy:** *"Av. Humberto Cereser, nº 3970 — Bairro Caxambú, Jundiaí/SP. Estacionamento gratuito para todos os participantes do seu evento."*

**Composição:** 16:9 na foto de apoio, mapa ocupando a maior área da seção.

**Responsividade:** mobile: mapa primeiro, foto depois (função antes de atmosfera, mesma regra de `/espaco/`).

**Transição:** localização resolvida — a página converge para a pergunta final, "vamos formalizar isso?".

---

## Seção 8 — FAQ Corporativo

**Objetivo:** fechar as últimas dúvidas administrativas antes do convite final — o registro mais "processual" de qualquer FAQ do site, porque este público faz perguntas de compra, não de logística de festa.

**Narrativa:** mesma função das FAQs de Home/Espaço/Casamentos — reaproveita integralmente o componente `.faq-item`/`<details>`/`<summary>` já construído, sem inventar novo padrão.

**Hierarquia visual:** tipográfica, calma — última pausa visual antes do fechamento.

**Fotografia:** nenhuma.

**Conteúdo:** perguntas específicas já previstas em `WIREFRAME.md` § PÁGINA: Corporativo: *"Emitem nota fiscal?"*, *"Quais formas de pagamento vocês aceitam?"*, *"Qual a capacidade para formato coquetel x sentado?"* (resposta condicionada à confirmação de dado, ver Seção 5), *"É possível uma visita técnica antes de fechar?"*.

**Microcopy:** direto, factual — sem menção a valores no corpo da resposta (perguntas sobre preço redirecionam para o WhatsApp/canal de contato, mesma regra de `/casamentos/` § FAQ).

**Composição:** grid de 2 colunas desktop / 1 coluna mobile — mesmo dispositivo do FAQ da Home.

**Responsividade:** breakpoint em 1024px, idêntico aos FAQs já construídos.

**Transição:** última dúvida respondida — a página converge para o convite final.

---

## Seção 9 — CTA Final

**Objetivo:** convite objetivo — "quero levar isso para dentro da empresa". Sem urgência emocional, mas com um grau de formalidade de canal que nenhuma outra página do site oferece (`CORPORATE_PAGE_STRATEGY.md` §12).

**Narrativa:** recebe tudo — formatos, precisão, infraestrutura, processo, logística — e não adiciona informação nova. Só pergunta, e oferece o canal certo para quem precisa formalizar a resposta.

**Hierarquia visual:** container estreito, texto centralizado — mesmo espírito do CTA Final de Home/Espaço/Casamentos —, mas com uma variação estrutural única: **abaixo do par de CTAs, telefone e e-mail aparecem como texto simples, lado a lado com o WhatsApp**, não escondidos só no rodapé (`.cta-final__channels`, já reservado em `landing.css`).

**Conteúdo:** eyebrow curto, título breve, frase de apoio, CTA primário "Solicitar proposta" (WhatsApp), e os canais adicionais (telefone, e-mail) como texto/link secundário na mesma seção.

**Fotografia:** nenhuma — consistente com o CTA Final do resto do site, 100% tipográfico por decisão de sistema.

**Microcopy:** eyebrow *"Vamos conversar"*; título *"O evento da sua empresa, sem depender de improviso."*; texto de apoio *"Fale com a gente e receba uma proposta objetiva."*; canais: *"(11) 4584-2441 · contato@speranzaeventos.com.br"*.

**Composição:** idêntica à estrutura do CTA Final de Home/Espaço/Casamentos, mais a linha de canais adicionais abaixo do par de botões.

**Responsividade:** mesma lógica de empilhamento de botões já estabelecida; a linha de canais adicionais empilha em texto centralizado no mobile.

**Transição:** nenhuma — é o fim da página.

---

## Resumo de proporções por seção (referência rápida)

| Seção | Proporção dominante (desktop) | Prioridade visual |
|---|---|---|
| 1. Hero | 16:9 | Alta |
| 2. Abertura conceitual | — (tipográfica) | Baixa (texto domina) |
| 3.1 Plenária/Palestra | 16:9 | Equivalente aos demais formatos |
| 3.2 Treinamento/Workshop | 4:3 | Equivalente |
| 3.3 Lançamento de produto | 4:3 / 1:1 | Equivalente |
| 3.4 Confraternização | 4:3 (+ insert 1:1) | Equivalente |
| 4. Detalhe (precisão) | 1:1 (todas) | Baixa individual / alta coletiva |
| 5. Infraestrutura completa | — (tipográfica) | Baixa |
| 6. Como funciona | — (tipográfica) | Baixa |
| 7. Localização | 16:9 | Média |
| 8. FAQ | — (tipográfica) | — |
| 9. CTA final | — (tipográfica) | — |

A ausência deliberada de um pico único (diferente de `/espaco/` e `/casamentos/`, que têm cada uma o seu) é o mecanismo visual que sustenta o argumento central da página: os quatro formatos são igualmente resolvidos, não há um "evento mais importante" entre eles.

---

# Revisão crítica

## Repetição
O dispositivo "pivô de tom por eyebrow" (sensação → informação), o grid de 4 clusters e o padrão de still-life em 1:1 já apareceram em `/espaco/` e `/casamentos/`. Aqui isso é reaproveito de sistema — os três dispositivos são genuinamente adequados a qualquer página que precise alternar entre registro sensorial e registro informacional, e reinventá-los a cada página seria inconsistência, não originalidade. O risco real de repetição nesta página não está nesses dispositivos de sistema — está em garantir que "Formatos de Evento" não leia como um Tour de Ambientes disfarçado. A mitigação aplicada: o Tour de `/espaco/` organiza por **sala** (Salão, Camarim, Kids...); Formatos organiza por **uso** (Plenária, Treinamento, Lançamento, Confraternização) — o mesmo salão físico pode aparecer nas quatro fotos da Seção 3, o que é precisamente a prova de que o eixo organizador mudou de espaço para função.

## Ritmo
Risco identificado durante a composição: a Seção 3 tem quatro sub-blocos de peso visual equivalente — diferente de Casamentos (Cerimônia >> Recepção) e Espaço (Salão/Área Externa > Camarim/Kids/Cozinha), aqui não há hierarquia interna deliberada. Isso é uma decisão consciente (`CORPORATE_PAGE_STRATEGY.md` §6), mas carrega um risco genuíno: quatro blocos "iguais" em sequência podem ler como monótonos se a variação de proporção entre eles (16:9 / 4:3 / 4:3-1:1 / 4:3) não for suficiente para o olho perceber ritmo. Mitigação: a pequena alternância de proporção e ângulo de câmera entre os 4 formatos (já especificada seção a seção acima) é o que impede a leitura de "grid genérico repetido 4 vezes" — mas esse é o ponto do documento que mais depende de execução cuidadosa na hora da curadoria fotográfica real, mais do que qualquer outra seção desta página.

## Narrativa
A decisão de organizar por formato de uso, e não por ambiente nem por cronologia de um dia, é a aposta estrutural central deste documento. Ela resolve de forma limpa a exigência do brief de não repetir Casamentos nem virar tour de Espaço — mas depende de uma premissa física que ainda não foi validada: que o salão do Speranza realmente comporta as quatro configurações descritas (fileiras de plenária, mesas de treinamento em ilha, cenário de lançamento, coquetel) sem contradizer a estrutura real do prédio. Se, na prática, o espaço não suporta alguma dessas configurações com facilidade, a lista de 4 formatos deve ser ajustada para refletir o que é fisicamente verdadeiro — nunca a página deve sugerir uma reconfiguração que a operação real não consegue entregar (mesmo princípio de honestidade factual de `ESTRATEGIA.md` §6).

## Originalidade
A metáfora central (espaço reconfigurável por formato de uso) é genuinamente distinta, dentro do sistema do site, das metáforas já usadas em Espaço (tour espacial) e Casamentos (fotoensaio cronológico) — cobre o terceiro eixo narrativo possível (espaço / tempo / função) sem repetir nenhum dos dois primeiros. Fora do site, a ideia de "um espaço, vários formatos" não é original — é como qualquer centro de convenções ou hotel com "meetings & events" já se apresenta. A diferenciação real do Speranza aqui não é a estrutura em si, é a mesma disciplina de execução das outras páginas: zero clichê fotográfico de banco de imagens corporativo, zero adjetivo vazio, fatos sempre concretos (mesmo quando alguns ainda dependem de confirmação do cliente, ver notas de dado pendente nas Seções 2 e 5).

## Equilíbrio
70% ambiente / 30% detalhe / presença humana como exceção rara (`CORPORATE_PAGE_STRATEGY.md` §8) é a proporção mais conservadora de presença humana de todo o site — mais restritiva até que o próprio piso geral de `ART_DIRECTION.md` (até 10%). Isso é proposital: esta é a página de maior risco de deslizar para o clichê "aperto de mão/reunião de banco de imagens", então o equilíbrio pende deliberadamente para o lado mais seguro (zero pessoas) em vez de arriscar uma presença humana malfeita. O contraponto é que uma página inteira sem nenhuma presença humana pode, em excesso, parecer fria — a mitigação é a luz quente-neutra obrigatória (`ART_DIRECTION.md` §2) e os sinais implícitos de uso (cadeira levemente fora de fila, material sobre a mesa) que substituem pessoas como prova de vida sem recorrer a gente posando.

## Fadiga visual
A sequência Hero → Abertura Conceitual → Formatos (4 blocos) → Detalhe é, em volume, comparável à sequência de quatro seções narrativas seguidas identificada como risco em `WEDDING_PAGE_WIREFRAME.md` § Fadiga visual. Mitigado por: (1) a alternância de proporção entre os 4 formatos, (2) a pausa tipográfica intermediária da Abertura Conceitual logo no início (diferente de Casamentos, que só pausa depois de 4 seções visuais — aqui a pausa vem mais cedo, no segundo bloco), (3) o corte de escala em Detalhe. Diferente de Casamentos, esta página tem uma segunda vantagem estrutural contra fadiga: a partir da Seção 5, ela se torna predominantemente tipográfica (Infraestrutura, Como Funciona, FAQ) — o risco de fadiga visual desta página é concentrado na primeira metade, não distribuído ao longo de toda a rolagem.

## Sensação premium
Sustentada por precisão e restrição (silêncio editorial, still-life funcional, ausência total de clichê corporativo), não por opulência nem por emoção — consistente com o resto do site, mas com uma nuance própria: aqui, "premium" se traduz como "nada é deixado ao acaso", não como "isso é bonito o suficiente para impressionar". É a variação mais racional da mesma identidade de marca.

## Clareza
Os 4 clusters de Infraestrutura Completa usam os mesmos 12 itens físicos já usados em `/espaco/` e `/casamentos/`, reagrupados por vocabulário corporativo (Conectividade, Logística, Conforto, Alimentação) em vez de categoria genérica ou momento de casamento. Isso é aceitável pelo mesmo motivo já registrado em `WEDDING_PAGE_WIREFRAME.md` § Clareza — são páginas raramente lidas lado a lado — mas fica registrado aqui como sobreposição consciente, não coincidência.

## Coerência com a Home
O Hero ecoa um dos headlines de referência já calibrados em `COPY_GUIDE.md` §7 ("Estrutura pronta para reunir sua empresa inteira") — a página cumpre a promessa que a Home faz ao card de Corporativo. Voz, restrição verbal e ausência de clichê seguem o padrão já estabelecido, com o ajuste de densidade textual já justificado em `CORPORATE_PAGE_STRATEGY.md` §11.

## Coerência com o Espaço e com Casamentos
Compartilha dispositivos de sistema (clusters temáticos, pivô de tom por eyebrow, still-life uniforme em 1:1, componente de FAQ, CTA Final) com as duas páginas anteriores — o mesmo salão principal e a mesma área externa aparecem nas três páginas, cada vez com um papel narrativo diferente e explicitamente justificado (espaço em `/espaco/`, momento em `/casamentos/`, formato aqui). A coerência de sistema é alta por design; a diferenciação de metáfora estrutural (o item que `REFACTOR_ROADMAP.md` §2.3 pedia que fosse decidido antes do wireframe) está resolvida por esta página organizar por função de uso, não por ambiente nem por cronologia.

## Pontos fracos
1. A Seção 3 (Formatos) depende de uma validação física ainda não confirmada — se o espaço real não comporta alguma das quatro configurações descritas com facilidade, a lista precisa ser ajustada antes da curadoria fotográfica (ver § Narrativa acima).
2. Dois dados centrais da página (capacidade por formato, existência de Wi-Fi) seguem pendentes de confirmação do cliente — a página não pode ir ao ar com esses itens afirmados sem validação, mesmo que sua ausência deixe a Seção 5 e o FAQ momentaneamente menos completos.
3. A ausência deliberada de hierarquia visual entre os 4 formatos é uma aposta que só se prova certa ou errada na curadoria fotográfica real — é o ponto do documento com menor margem de erro de execução.

## Oportunidades
1. Quando existir um registro real de um evento corporativo realizado no Speranza (com autorização do cliente/empresa), a Seção 3 ou a Localização são candidatas naturais para incorporar uma prova social nomeada (nome da empresa, tipo de evento) — mesmo princípio de prova social de `DESIGN_SYSTEM.md` § Depoimentos, hoje ausente nesta página por falta de dado real, não por decisão de design.
2. A seção "Como Funciona" desta página, uma vez validada, pode servir de referência para uma futura seção equivalente na página de Aniversários & Bodas, cujo público (decisão rápida, sensível a preço) também se beneficia de um processo claramente nomeado — decisão de conteúdo a avaliar quando aquela página for estratégiada, não parte deste blueprint.
3. Assim como recomendado em `WEDDING_PAGE_WIREFRAME.md` § Oportunidades, a metáfora estrutural de Debutantes e Aniversários & Bodas ainda precisa ser decidida deliberadamente — com Espaço (espaço), Casamentos (tempo) e Corporativo (função) já ocupando os três eixos narrativos mais óbvios, essas duas páginas provavelmente pedem uma quarta lente distinta (por exemplo, Debutantes poderia se organizar por "convidados"/papéis sociais da festa, não repetir nenhum dos três eixos já usados) — decisão a tomar antes do próximo par de documentos.

---

**Este documento e o `CORPORATE_PAGE_STRATEGY.md` juntos são a autoridade para a implementação de `/corporativo/`.** Nenhum HTML/CSS começa antes dos dois estarem aprovados.
