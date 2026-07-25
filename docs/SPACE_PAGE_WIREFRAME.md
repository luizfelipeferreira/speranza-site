# Speranza Eventos — Wireframe Textual da Página "O Espaço"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Executa a arquitetura definida em [SPACE_PAGE_STRATEGY.md](SPACE_PAGE_STRATEGY.md) — leia aquele documento primeiro; este assume a jornada emocional, a ordem de seções e a voz já decididas ali.
**Base fotográfica:** todo enquadramento/lente/composição abaixo segue o vocabulário definido em [ART_DIRECTION.md](ART_DIRECTION.md) — este documento não repete os critérios gerais (o que nunca usar, tratamento de cor, checklist de aprovação), só aplica esse vocabulário a cada seção específica.
**Sem código:** nenhuma classe, tag ou propriedade CSS é definida aqui — proporções e prioridades descrevem intenção visual, não implementação.

---

## Como ler este documento

Cada seção é descrita em sete camadas:

1. **Intenção** — o que essa seção precisa provar ou fazer sentir, sozinha.
2. **Narrativa** — como ela recebe o que veio antes e entrega o que vem depois.
3. **Hierarquia visual** — o que domina a tela, o que é secundário, o que é silêncio.
4. **Conteúdo** — o que aparece, em prosa (não em código).
5. **Estratégia fotográfica** — foto, enquadramento, lente equivalente, composição, proporção, prioridade visual.
6. **Microcopy** — tom e um exemplo ilustrativo de calibração (não é copy final aprovado — mesmo princípio de `COPY_GUIDE.md` §7, "ilustram o padrão").
7. **Notas de responsividade** — o que muda entre mobile e desktop, em intenção, não em `px`.

---

## Seção 1 — Hero

### Intenção
A primeira impressão precisa ser puramente visual — o espaço se apresentando sozinho, sem argumento, sem prova, sem qualificação de público. É o único momento da página (e um dos poucos do site inteiro) em que a foto não divide a tela com nada além do mínimo de texto.

### Narrativa
Abre a página inteira. Não recebe nada de antes — é o ponto zero. Entrega o silêncio que a Abertura Conceitual (Seção 2) vai quebrar com a primeira frase.

### Hierarquia visual
A fotografia ocupa a largura inteira da viewport (diferente do Hero da Home, que divide a tela em duas colunas texto/imagem) — aqui a foto *é* a página no primeiro momento. O texto (eyebrow + headline curto) é pequeno, posicionado num terço inferior ou lateral da composição, nunca centralizado sobre o rosto principal da imagem. Nenhum CTA aparece dentro do próprio Hero — o botão de WhatsApp flutuante (persistente em toda página) já cobre quem quiser agir imediatamente; forçar um CTA aqui competiria com o silêncio que esta seção existe para proteger.

### Conteúdo
Eyebrow curto ("O Espaço" ou equivalente), um headline de uma linha só (regra de `COPY_GUIDE.md` §7 vale aqui, talvez ainda mais rígida que os 16ch do Hero da Home, já que o texto é ainda mais coadjuvante nesta página). Nenhuma subheadline — o parágrafo vem só na Seção 2.

### Estratégia fotográfica
- **Foto:** plano geral do salão principal vazio, arquitetura como protagonista.
- **Enquadramento:** plano geral arquitetural (ver `ART_DIRECTION.md` §1.2) — mostra o ambiente inteiro, linhas de arquitetura visíveis (colunas, pé-direito, vãos).
- **Lente equivalente:** 35mm — mostra o espaço inteiro sem a distorção de uma grande-angular mais aberta.
- **Composição:** assimétrica, com uma linha de fuga real da arquitetura conduzindo o olhar — nunca simetria central perfeita. Espaço negativo generoso no terço onde o texto vai repousar.
- **Luz:** natural, entrando pelas janelas/vãos, de preferência fim de manhã ou entardecer (ver `ART_DIRECTION.md` §1.9 e §2).
- **Proporção:** mais cinematográfica que o resto do site — recomendo 21:9 ou 16:9 em desktop (diferente do 4:5 do Hero da Home), para o primeiro instante desta página já se anunciar como "showreel de espaço", não como repetição do Hero institucional. Em mobile, cai para 4:5 ou 3:4 (retrato), já que a proporção wide não sobrevive a uma tela estreita sem perder o assunto principal.
- **Prioridade visual:** máxima — 90%+ da tela.

### Microcopy
Tom: silêncio quase total. Exemplo ilustrativo (não copy final): eyebrow *"O Espaço"*, headline *"Um salão pensado para durar mais que um evento."* — uma frase, sem vírgula, sem adjetivo empilhado.

### Notas de responsividade
Em mobile, a proporção wide do desktop não cabe sem cortar o assunto principal — a imagem recorta para um formato mais vertical, mantendo a mesma foto-base mas reenquadrada (não é uma segunda foto, é o mesmo still recortado diferente, prática padrão de arte-finalização editorial).

---

## Seção 2 — Abertura Conceitual

### Intenção
Dar linguagem ao que a foto do Hero acabou de fazer sentir, e ancorar essa sensação em um fato real de escala (450m²) — a admiração emocional confirmada por um número, não substituída por ele.

### Narrativa
Recebe o silêncio do Hero e o quebra com a primeira frase da página. Entrega o convite para "entrar" — esta seção termina exatamente onde o Tour (Seção 3) começa, como quem termina de ouvir a apresentação e é convidado a andar pelo espaço.

### Hierarquia visual
Seção deliberadamente **100% tipográfica** — nenhuma foto nova aqui (ou, no máximo, um detalhe pequeno e discreto ao lado, nunca competindo com o texto). É a primeira pausa de ritmo da página: depois do impacto visual do Hero, o olho descansa em texto antes de mergulhar de novo em imagem no Tour. O número 450m² recebe tratamento tipográfico próprio — grande, com peso visual de "dado", não escondido dentro de uma frase corrida (mesma lógica do benchmark com a Apple, ver `SPACE_PAGE_STRATEGY.md` §5).

### Conteúdo
Um parágrafo curto (2–3 frases, nunca um bloco de texto longo) apresentando o conceito do espaço, seguido do número de metragem tratado como elemento visual próprio, seguido de uma frase de transição que já aponta para o tour ("cada ambiente tem seu papel" ou equivalente).

### Estratégia fotográfica
- Nenhuma foto nova nesta seção — ou, como variante mais discreta, um único detalhe de textura/material (ex. uma coluna, um piso) pequeno e lateral, nunca dominante.
- Se optar pela variante com imagem: enquadramento de detalhe, lente 85mm equivalente, proporção quadrada (1:1), prioridade visual baixa (menor elemento da seção, o texto continua sendo o centro).

### Microcopy
Tom: uma frase de apresentação, depois o número, depois uma frase de ponte. Exemplo ilustrativo: *"O Speranza reúne salão, área externa e apoio completo em um único endereço no Bairro Caxambú."* seguido do número **450m²** tratado como elemento gráfico, seguido de *"Cada ambiente tem um papel — veja cada um deles."*

### Notas de responsividade
Em mobile, o número 450m² mantém o mesmo peso tipográfico relativo (proporcionalmente grande em relação ao corpo de texto) — não pode encolher a ponto de virar só mais uma palavra no parágrafo.

---

## Seção 3 — Tour por Ambientes

### Intenção
O corpo da página. Cada ambiente é mostrado como uma cena possível de projeção pessoal ("eu me vejo aqui"), na ordem em que uma visita guiada real aconteceria — não em ordem alfabética, nem por importância comercial.

### Narrativa
Recebe o convite da Abertura Conceitual e entrega, ambiente a ambiente, a experiência de "andar pelo espaço". Termina na Cozinha e Buffet, que é a ponte natural para o close-up de mesa da Seção 4.

### Ordem dos 5 ambientes — e por que cada um está nessa posição

| # | Ambiente | Por que aqui |
|---|---|---|
| 3.1 | **Salão principal** | Primeira parada de qualquer visita real — é o coração do espaço, a primeira coisa que justifica a grandiosidade já sugerida no Hero. |
| 3.2 | **Área externa (cerimônia)** | Depois do salão (o espaço "de festa"), a área externa introduz o outro polo emocional do Speranza — a cerimônia ao ar livre, luz natural, romance. É o ponto mais alto da curva emocional do tour. |
| 3.3 | **Camarim privativo** | Depois da grandiosidade pública do salão e do ar livre da cerimônia, o camarim é o primeiro momento íntimo da página — o contraste de escala (de um salão de 450m² para um cômodo pessoal) é o que dá ritmo ao tour. |
| 3.4 | **Espaço Kids** | Estende o cuidado do camarim (espaço pensado para uma pessoa específica) para o cuidado com a família inteira — é o momento "o Speranza pensa em todo mundo", não só no casal/aniversariante. |
| 3.5 | **Cozinha e Buffet** | Fecha o tour no registro mais sensorial e prático ao mesmo tempo — cozinha equipada + parceria com o Combinatto Buffet — e serve de ponte direta para o still-life de mesa posta da Seção 4. |

*(Esta sequência é uma recomendação de storytelling, não um levantamento do trajeto físico real do prédio — validar a ordem contra a planta real do espaço quando a sessão fotográfica profissional acontecer; se o trajeto físico divergir muito desta ordem narrativa, a ordem narrativa vence, mas vale conferir se alguma adjacência real ajuda a reforçar a lógica acima.)*

### Hierarquia visual
Cada ambiente é tratado como uma pequena "dupla de página" própria (benchmark com Architectural Digest, ver `SPACE_PAGE_STRATEGY.md` §5): uma foto grande e dominante + um texto curto de apoio + (nos ambientes 3.1, 3.2 e 3.5) uma segunda foto menor de detalhe/insert. Nenhum ambiente usa o mesmo layout do anterior de forma idêntica — pequenas variações de proporção/posição entre eles comunicam curadoria editorial, não grid genérico (mesmo princípio já aplicado em `DESIGN_SYSTEM.md` § Cards).

### Conteúdo
Por ambiente: um título curto (nome do ambiente), uma frase de apoio sensorial e concreta (luz, uso, material — nunca adjetivo vazio), e a(s) fotografia(s) correspondentes.

### Estratégia fotográfica (por ambiente)

**3.1 Salão principal**
- Foto dominante: plano geral arquitetural, mesmo espírito do Hero mas de um ângulo diferente (mostrando profundidade/lateral, não repetindo o enquadramento do Hero).
- Foto de detalhe (insert menor): um elemento do salão — luminária, piso, pé-direito visto de baixo sem distorção.
- Lente: 35–50mm no geral, 85mm no detalhe.
- Composição: assimétrica, linha de fuga real.
- Proporção: 16:9 ou 4:3 na foto dominante; 4:5 ou 1:1 no insert.
- Prioridade: máxima do tour — é o primeiro ambiente, ganha o maior espaço.

**3.2 Área externa**
- Foto: plano geral ao ar livre, luz de fim de tarde/dourada controlada.
- Lente: 35mm.
- Composição: linha de fuga real (caminho, arco estrutural, fileira de assentos/cadeiras se houver), muito céu/espaço negativo acima.
- Proporção: 3:2 ou 16:9 (paisagem — reforça amplitude ao ar livre).
- Prioridade: alta — segundo ambiente mais importante do tour (ponto emocional mais alto, ver ordem acima).

**3.3 Camarim privativo**
- Foto: plano médio ambientado, mais fechado/aconchegante que os dois anteriores.
- Lente: 50–85mm.
- Composição: mais intimista, menos espaço negativo — o quadro "abraça" o ambiente pequeno em vez de mostrá-lo solto no vazio.
- Proporção: 4:5 ou 3:4 (retrato — reforça intimidade, contraste deliberado com as proporções paisagem dos ambientes 3.1/3.2).
- Prioridade: média.

**3.4 Espaço Kids**
- Foto: plano médio ambientado, luz clara e alegre, sem infantilizar (nada de cores berrantes ou decoração de festa infantil genérica — ver `ART_DIRECTION.md` §4).
- Lente: 35–50mm.
- Composição: simples e direta, sem elementos decorativos exagerados no quadro.
- Proporção: 4:3.
- Prioridade: média-baixa — é um "extra de cuidado", não um clímax do tour.

**3.5 Cozinha e Buffet**
- Foto dominante: plano médio da cozinha equipada.
- Foto de detalhe (insert, ponte para a Seção 4): still-life de um prato/travessa do buffet.
- Lente: 50mm no ambiente, 85–105mm no still-life.
- Composição: o insert já antecipa visualmente a linguagem de still-life que domina a próxima seção.
- Proporção: 4:3 no ambiente; 1:1 no still-life.
- Prioridade: média — seu papel principal é narrativo (fechar o tour, abrir a ponte), não ser o pico visual do conjunto.

### Microcopy
Tom: uma frase sensorial curta por ambiente, sempre ancorada em algo observável. Exemplos ilustrativos:
- Salão: *"Luz natural o dia inteiro, teto alto, espaço para qualquer formato de festa."*
- Área externa: *"Cerimônia ao ar livre, sob o céu de Jundiaí."*
- Camarim: *"Um espaço só seu, para os últimos retoques antes da festa."*
- Espaço Kids: *"Os pequenos com espaço garantido — os pais aproveitam sem pausa."*
- Cozinha e Buffet: *"Cozinha equipada, em parceria com o Combinatto Buffet."*

### Notas de responsividade
Em mobile, cada "dupla de página" empilha (foto grande, depois texto, depois insert quando houver) — a alternância de proporção entre ambientes (paisagem/retrato/quadrado) se mantém mesmo empilhada, para o ritmo visual não desaparecer só porque virou coluna única.

---

## Seção 4 — Detalhe (still-life)

### Intenção
Pausa de ritmo depois da amplitude dos 5 ambientes — a câmera se aproxima de objetos (mesa posta, tecido, louça, talher) para comunicar cuidado através do detalhe, não da escala.

### Narrativa
Começa exatamente onde a Cozinha e Buffet (3.5) terminou — um corte de plano geral para close-up, não uma nova seção temática. Entrega, ao final, a "pausa" necessária antes do pivô de tom que abre a Seção 5.

### Hierarquia visual
Um conjunto pequeno de still-life (4 a 6 imagens), todas na mesma proporção quadrada — depois da variação proposital de proporções no Tour, esta seção "acalma" com uniformidade, o mesmo tipo de alternância de ritmo (variação → uniformidade → variação) que sustenta qualquer boa paginação editorial. Texto reduzido ao mínimo — no máximo um rótulo curto por imagem (mesmo padrão de numeral + palavra única já em uso na Galeria da Home), nunca uma legenda explicativa.

### Conteúdo
4 a 6 still-life: mesa posta, talher, tecido/toalha, arranjo floral discreto, taça, detalhe de luz (vela ou luminária). Nenhum texto corrido — só rótulos mínimos, se houver.

### Estratégia fotográfica
- Enquadramento: still-life de perto, sempre.
- Lente: 85–105mm equivalente (ou macro real para objetos pequenos).
- Composição: muito espaço negativo ao redor do objeto, luz suave lateral, nunca still-life "cheio" com múltiplos objetos competindo no mesmo quadro.
- Proporção: 1:1 (quadrada) em todas as imagens do conjunto — uniformidade deliberada.
- Prioridade: baixa individualmente (cada imagem é modesta), alta coletivamente (o conjunto, por acumulação, comunica cuidado).

### Microcopy
Tom: silêncio quase total, igual ao Hero. Se houver rótulo, uma palavra só ("Mesa", "Detalhe", "Luz") — nunca uma frase completa.

### Notas de responsividade
Mobile: grid de 2 colunas (mantendo a proporção quadrada); desktop pode variar para uma composição levemente assimétrica dentro do conjunto (uma imagem levemente maior que as outras), desde que a maioria continue quadrada — o objetivo é uniformidade predominante, não rigidez absoluta.

---

## Seção 5 — Estrutura Completa (ficha técnica reformulada)

### Intenção
A reassurance racional que a mente do visitante estava esperando desde o início, entregue só agora — depois que o desejo (Hero, Tour) e o cuidado (Detalhe) já foram estabelecidos. Nenhuma informação nova em relação aos 12 itens já mapeados (`INVENTARIO-SITE-ATUAL.md` §3) — a mudança é de agrupamento e apresentação, não de conteúdo.

### Narrativa
Marca o único pivô de tom deliberadamente perceptível da página — um eyebrow sinaliza a mudança de "sensação" para "informação" sem que pareça um corte abrupto (ver `SPACE_PAGE_STRATEGY.md` §3). Termina entregando o primeiro CTA discreto da página (um link, não um botão sólido), preparando a transição para a Localização.

### Hierarquia visual
Seção majoritariamente tipográfica, ecoando a Abertura Conceitual (Seção 2) — a segunda pausa visual da página (padrão de ritmo grande/pequeno já estabelecido: 1-grande, 2-pequeno, 3-grande, 4-médio-uniforme, 5-pequeno). Os 12 itens não aparecem como uma lista plana — são reagrupados em **4 clusters temáticos**, cada um com um título curto, para a leitura ser por benefício, não por checklist:

| Cluster | Itens |
|---|---|
| **Conforto** | Climatização, mobiliário incluso, decoração |
| **Cerimônia e festa** | Cerimônia externa, sistema de som e imagem, camarim |
| **Apoio** | Espaço kids, equipe de apoio treinada, segurança |
| **Praticidade** | Estacionamento gratuito, cozinha equipada, buffet parceiro (Combinatto) |

### Conteúdo
Um eyebrow de transição, um título de seção curto, os 4 clusters (título + itens, texto mínimo por item — uma linha, não um parágrafo), e um link discreto de fechamento.

### Estratégia fotográfica
Nenhuma foto nova — ou, no máximo, uma imagem pequena de apoio para o cluster "Praticidade" (ex. o estacionamento, único item do conjunto sem fotografia própria em nenhuma outra seção da página). Se usada: plano geral simples, lente 35mm, proporção 4:3, prioridade baixa (a seção continua sendo tipográfica em essência).

### Microcopy
Tom: frase curta, uma ideia por linha, sem adorno — o oposto do tom sensorial do Tour. Exemplo ilustrativo: eyebrow *"Estrutura completa"*, título *"Tudo já resolvido, antes mesmo de você perguntar."*, cada item descrito em uma linha factual ("Estacionamento gratuito para todos os convidados").

### Notas de responsividade
Os 4 clusters ficam em 2 colunas no desktop, 1 coluna no mobile — mesma lógica de grid já usada na FAQ da Home (`docs` já documentam esse padrão de breakpoint em 1024px para conteúdo tipográfico organizado em clusters).

---

## Seção 6 — Localização e Acesso

### Intenção
Trazer a página de volta ao concreto depois do pico de informação da Seção 5 — provar que o lugar é real, acessível, dirigível, não uma fantasia editorial flutuando sem endereço.

### Narrativa
Recebe o "tudo resolvido" da Estrutura Completa e entrega a última peça prática antes do convite final — fecha o "o que você ganha" (Seção 5) com "onde isso acontece" (Seção 6), a mesma ordem que uma pessoa realmente decidida seguiria (decidir, depois checar como chegar).

### Hierarquia visual
Mapa incorporado (Google Maps) como elemento dominante, com uma fotografia de apoio da fachada/chegada do prédio ao lado ou acima — a única vez na página em que o espaço é mostrado **de fora**, o inverso do Hero (que abriu de dentro). Essa simetria (a página abre de dentro do espaço e fecha, pouco antes do CTA, com uma vista de fora) é um fechamento narrativo deliberado — o "livro se fechando" antes do convite final.

### Conteúdo
Endereço completo (Av. Humberto Cereser, nº 3970, Bairro Caxambú, Jundiaí/SP), mapa incorporado, uma frase curta de referência de acesso, CTA secundário "Como chegar".

### Estratégia fotográfica
- Foto: fachada/exterior do prédio, de preferência ao entardecer (luz quente, mesma temperatura de cor do resto do banco de imagens).
- Enquadramento: plano geral arquitetural, de fora.
- Lente: 35mm.
- Composição: simétrica é aceitável aqui (exceção deliberada à regra geral de composição assimétrica) — uma fachada fotografada de frente, centralizada, comunica solidez e chegada, não timidez de composição.
- Proporção: 16:9.
- Prioridade: média — divide a atenção com o mapa, que é funcionalmente mais importante nesta seção.

### Microcopy
Tom: direto e factual, como a Seção 5. Exemplo ilustrativo: *"Av. Humberto Cereser, nº 3970 — Bairro Caxambú, Jundiaí/SP."* seguido de uma frase curta de referência regional, se necessário.

### Notas de responsividade
Mobile: mapa e foto empilham, mapa primeiro (função antes de atmosfera, já que em mobile o visitante frequentemente já está pensando em rota real).

---

## Seção 7 — CTA Final

### Intenção
Fechar a jornada emocional inteira (`SPACE_PAGE_STRATEGY.md` §1) com um único convite calmo — não uma venda, um convite. É o momento em que a pergunta implícita do Hero ("quer ver isso de perto?") finalmente recebe um botão para responder "sim".

### Narrativa
Recebe tudo — desejo, detalhe, fato, logística — e não adiciona informação nova. Só pergunta.

### Hierarquia visual
Igual em espírito ao CTA Final da Home: container estreito, texto centralizado, sem foto, sem textura, sem caixa, sem sombra — a seção respira. Nenhuma urgência artificial (mesma regra do CTA Final da Home, e reforçada aqui pela premissa central deste documento: orçamento é consequência, não o pedido desta página).

### Conteúdo
Eyebrow curto, um título breve reafirmando o convite à visita, uma frase de apoio, e o par de CTAs: primário "Agende uma visita" (WhatsApp), secundário um link de volta a alguma landing de segmento relevante quando fizer sentido de navegação (não obrigatório).

### Estratégia fotográfica
Nenhuma foto — consistente com o CTA Final da Home, que é 100% tipográfico por decisão de sistema (`docs/` já estabelecem isso).

### Microcopy
Tom: calmo, sem gatilho de urgência artificial — mesma régua do CTA Final da Home (nenhuma variação de "garanta sua data"/"últimas vagas"/"aproveite"). Exemplo ilustrativo: *"Fotografia mostra o espaço. Só uma visita mostra como ele combina com o seu evento."* seguido do par de CTAs.

### Notas de responsividade
Mesma lógica de empilhamento de botões do CTA Final da Home (`flex-wrap`, sem necessidade de nova regra) — nenhuma decisão nova de layout aqui, reaproveita o padrão já estabelecido.

---

## Resumo de proporções por seção (referência rápida)

| Seção | Proporção dominante (desktop) | Prioridade visual |
|---|---|---|
| 1. Hero | 21:9 ou 16:9 | Máxima |
| 2. Abertura conceitual | — (tipográfica) | Baixa (texto domina) |
| 3.1 Salão principal | 16:9 / 4:3 | Máxima do tour |
| 3.2 Área externa | 3:2 / 16:9 | Alta |
| 3.3 Camarim | 4:5 / 3:4 | Média |
| 3.4 Espaço Kids | 4:3 | Média-baixa |
| 3.5 Cozinha e Buffet | 4:3 | Média |
| 4. Detalhe | 1:1 (todas) | Baixa individual / alta coletiva |
| 5. Estrutura completa | — (tipográfica) | Baixa |
| 6. Localização | 16:9 | Média |
| 7. CTA final | — (tipográfica) | — |

A alternância de proporções entre ambientes do Tour (paisagem → paisagem → retrato → paisagem → paisagem) e a uniformidade quadrada da Seção 4 não são acidentes — são o mecanismo visual que sustenta a variação de ritmo descrita em `SPACE_PAGE_STRATEGY.md` §3.

---

**Aprovação deste documento + `SPACE_PAGE_STRATEGY.md` libera o início da implementação em HTML/CSS.**
