# Speranza Eventos — Guia de Copy da Página Corporativo

**Status:** normativo — complementa `COPY_GUIDE.md` especificamente para `/corporativo/`. Não repete as regras gerais de tom, vocabulário proibido ou estrutura de seção já definidas lá — assume tudo isso como base e define só o que muda quando o leitor é alguém decidindo em nome de uma empresa, não por si mesmo.
**Base:** [CORPORATE_PAGE_STRATEGY.md](CORPORATE_PAGE_STRATEGY.md), [CORPORATE_PAGE_WIREFRAME.md](CORPORATE_PAGE_WIREFRAME.md), [COPY_GUIDE.md](COPY_GUIDE.md), [ART_DIRECTION.md](ART_DIRECTION.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [ESTRATEGIA.md](ESTRATEGIA.md).
**Escopo:** só a linguagem verbal de `/corporativo/`. Não define layout, componente visual ou fotografia — isso já está resolvido no par estratégia/wireframe da página. Nenhuma classe, tag ou propriedade CSS aparece aqui.
**Por que este documento existe:** as quatro páginas centrais do site falam registros diferentes da mesma marca — a Home comunica posicionamento, o Espaço comunica atmosfera, Casamentos comunica emoção, Corporativo comunica **competência**. `COPY_GUIDE.md` já cobre o "português certo" para o site inteiro; este documento cobre o "registro certo" para quem decide um evento em nome de uma empresa, não em nome do próprio coração.

---

## 1. Papel da linguagem

A página precisa transmitir, nesta ordem de prioridade: **organização, clareza, controle, ausência de improviso, profissionalismo silencioso**. "Silencioso" é a palavra que diferencia isso de "profissionalismo anunciado" — a página não deve *dizer* que é profissional (`COPY_GUIDE.md` §6 já proíbe "excelência" por esse motivo exato), deve **soar** profissional pela forma como a frase é construída: curta, factual, sem adorno.

Por quê: o leitor desta página não está comprando uma experiência para si — está comprando uma garantia que vai defender para outra pessoa (um superior, um departamento financeiro, uma diretoria). `CORPORATE_PAGE_STRATEGY.md` §1 já define o teste central da página: *isso reduz uma incerteza real de quem decide sozinho?* Aplicado à linguagem, esse teste vira: **cada frase precisa poder ser repetida, palavra por palavra, numa reunião interna, sem soar como propaganda.** Uma frase bonita que não sobrevive a essa repetição falhou, mesmo que passe em todos os outros critérios do site.

Isso não significa texto frio. Significa texto **preciso** — o mesmo princípio de "emoção sem sentimentalismo" da arquitetura narrativa do site (`SITE_NARRATIVE_ARCHITECTURE.md` §2, princípio 5) aplicado à linguagem: a confiança nasce do fato certo, entregue rápido, nunca da palavra que tenta parecer confiável.

---

## 2. Quem está lendo

Diferente das outras páginas do site (uma pessoa ou um casal decidindo por si), `/corporativo/` é lida por perfis diferentes dentro da mesma decisão de compra — cada um verificando algo distinto antes de aprovar. A linguagem precisa satisfazer os cinco ao mesmo tempo, sem escrever cinco páginas.

| Perfil | O que procura | O que teme | O que quer validar |
|---|---|---|---|
| **RH** | Um evento que funcione sem gerar reclamação de colaborador (integração, treinamento, festa de fim de ano) | Imprevisto no dia — som que falha, estacionamento insuficiente, criança sem onde ficar num evento família | Que a equipe do espaço já conduz esse tipo de evento sem precisar de microgerenciamento dele |
| **Marketing** | Um cenário que sustente a narrativa de marca de um lançamento sem parecer "salão de festas" genérico | Um ambiente que descaracterize a marca do próprio evento (excesso de identidade visual do salão competindo com a da empresa) | Que o espaço aceita alguma composição cenográfica própria sem perder a base arquitetônica |
| **Eventos** *(coordenador interno)* | Dados operacionais exatos — capacidade por formato, dimensões, tempo de montagem, o que já está incluso | Informação incompleta que force um telefonema para cada pergunta básica antes de conseguir orçar internamente | Que a ficha técnica é completa o suficiente para montar uma proposta interna sem precisar de visita prévia |
| **Diretoria** | Sinal rápido de que o espaço está à altura do padrão que a empresa quer projetar | Expor a empresa a um ambiente que pareça informal, datado ou "qualquer salão da região" | Percepção de padrão + localização (perto o bastante para não virar motivo de reclamação de deslocamento) |
| **Compras** | Processo formal — emissão de nota fiscal, condições de pagamento, prazos de confirmação | Fornecedor informal que trave a aprovação interna por falta de processo claro | Que existe um caminho formal (proposta → contrato) e não só uma conversa de WhatsApp |

**Regra derivada:** a página nunca escreve *para* um desses perfis isoladamente — ela escreve de um jeito que qualquer um deles consiga, sozinho, extrair o dado que precisa e levar adiante. É por isso que a Seção 5 do wireframe (Infraestrutura) e a Seção 8 (FAQ) carregam mais peso informativo que qualquer seção equivalente das outras páginas (`CORPORATE_PAGE_STRATEGY.md` §11) — múltiplos leitores, cada um verificando um fato diferente, exigem mais fatos disponíveis, não mais texto de venda.

---

## 3. Tom de voz

### Fazer
- Frase curta, um fato por vez — a mesma regra geral de `COPY_GUIDE.md` §4, aqui sem exceção nem para as seções mais "editoriais" da página (diferente de Casamentos, que ganha licença sensorial em algumas seções — Corporativo nunca ganha essa licença).
- Verbo de ação concreto e operacional: **organizar, receber, equipar, resolver, montar, coordenar** — no lugar de verbo abstrato de brochure (proporcionar, oferecer, disponibilizar — já proibidos em `COPY_GUIDE.md` §4, reforçados aqui).
- Números e unidades reais sempre que existirem (m², vagas, formatos, capacidade) — e claramente marcados como pendentes quando ainda não confirmados (nunca estimados, princípio 10 de `SITE_NARRATIVE_ARCHITECTURE.md`).
- Nome técnico correto do que está sendo descrito — "plenária", "formato coquetel", "montagem em U" — no lugar de "um jeito bacana de organizar as cadeiras".

### Evitar
- Qualquer palavra do vocabulário de casamento/festa afetiva — mesmo que não estejam na lista geral de `COPY_GUIDE.md` §6, aqui são proibidas por extensão (ver §9 abaixo).
- Ponto de exclamação — **sempre**, sem exceção. `COPY_GUIDE.md` §4 já diz que é "raro" no site inteiro; nesta página é **zero**, porque entusiasmo performático é o oposto exato do registro que este leitor testa (§2 — ele está verificando risco, não se deixando empolgar).
- Metáfora poética ou sensorial — a licença que `WEDDING_PAGE_STRATEGY.md` §4 dá a Casamentos ("a luz da tarde entra pelas janelas altas") não se aplica aqui. Se uma frase desta página poderia aparecer em `/casamentos/` sem soar estranha, ela está no registro errado.
- Jargão corporativo vazio — "sinergia", "soluções sob medida", "parceiro estratégico" falham no mesmo teste que "excelência" falha em `COPY_GUIDE.md` §6: adjetivo sem prova atrás.

### Exemplos — antes / depois

| Evitar | Preferir |
|---|---|
| "Um espaço mágico para o evento inesquecível da sua empresa!" | "Estrutura para até 300 pessoas, pronta para o formato do seu evento." |
| "Nossa equipe vai encantar seus convidados." | "Equipe de apoio treinada acompanha a montagem e a execução do evento." |
| "O cenário perfeito para celebrar as conquistas da sua empresa." | "Um espaço para reconhecer o trimestre da equipe, sem depender de improviso." |
| "Viva um momento único de conexão corporativa." | "Confraternização de equipe, num só endereço, com estacionamento incluso." |

---

## 4. Regras de headline

- **Máximo de 8 palavras corridas** — mais curto que isso é preferível; mais longo que isso quebra o escaneio rápido que este leitor faz (`CORPORATE_PAGE_STRATEGY.md` §1, "decide rápido").
- **Verbo é bem-vindo, não obrigatório** — diferente do tom mais "frase-poema" das outras páginas, aqui uma frase com verbo declarativo ("reúne", "recebe", "atende") costuma soar mais competente que uma frase só de substantivos, porque comunica ação operacional, não atmosfera.
- **No máximo um adjetivo, e só se for factual** — "climatizado", "equipada", "gratuito" contam como fato (descrevem uma condição verificável), não como adjetivo decorativo; "incrível", "excepcional", "sofisticado" nunca entram, mesmo sozinhos.
- **Nunca abre com pergunta retórica nem gerúndio** — mesma regra geral de `COPY_GUIDE.md` §7, sem exceção aqui.
- **Zero palavra da lista proibida** (§9) e zero palavra da lista geral de `COPY_GUIDE.md` §6.
- **Teste de sanidade específico desta página:** se a headline poderia anunciar um casamento trocando só o substantivo ("evento" → "casamento"), ela não é específica o bastante para Corporativo — precisa nomear escala, estrutura ou previsibilidade, não sentimento.

**Exemplos bons:**
- "Estrutura pronta para reunir sua empresa inteira."
- "Capacidade e previsibilidade para o seu evento corporativo."
- "Um espaço, quatro formatos, nenhum imprevisto."

**Exemplos ruins (e por quê):**
- "O espaço perfeito para o evento inesquecível da sua empresa" — "perfeito" e "inesquecível" são proibidos (§9); a frase também passaria no teste de sanidade ao contrário (serviria para um casamento).
- "Venha viver uma experiência corporativa incrível!" — abre com convite vago, tem ponto de exclamação, "incrível" é adjetivo sem prova.
- "Onde grandes negócios acontecem" — soa a slogan de banco de imagens, zero fato concreto, zero especificidade do Speranza.

---

## 5. Subheadlines

O papel da subheadline aqui é o mesmo princípio geral de `COPY_GUIDE.md` §8 (complementar, nunca repetir o headline) — com uma inflexão: **na maioria das seções desta página, a subheadline carrega o número que a headline não carregou.** Como este público verifica rápido (§1), a dupla headline+subheadline funciona como manchete + primeira linha de um press release, não como título + clima de um convite.

- Se a headline é uma promessa de capacidade ("Estrutura pronta para reunir sua empresa inteira"), a subheadline entrega o dado que sustenta isso ("450m² no Bairro Caxambú, prontos para plenária, treinamento, lançamento ou confraternização").
- Se a headline já é factual, a subheadline traz o benefício prático que falta (ex.: quem decide o formato, qual o próximo passo) — nunca repete o mesmo fato em outra ordem de palavras.
- Comprimento: confortável em uma linha, no máximo duas — mais curta, em geral, que a subheadline de Casamentos, porque aqui ela é complemento factual, não construção de clima.

---

## 6. CTA

Três CTAs aprovados para esta página, cada um com uma função e um momento específicos — nunca intercambiáveis.

| CTA | Papel | Quando usar |
|---|---|---|
| **"Solicitar proposta"** | Primário — a ação de conversão central da página | Hero, final da Seção 3 (Formatos), CTA Final (Seção 9). É o único CTA desta página que assume peso de botão sólido em mais de um ponto — mesma decisão já registrada em `CORPORATE_PAGE_STRATEGY.md` §12: este é o único público do site para quem pedir orçamento *é* remover fricção, não adicionar. |
| **"Agendar visita técnica"** | Secundário — um passo dentro do processo, não o pedido principal | Só dentro da Seção 6 (Como Funciona), como a segunda etapa do processo (Solicitação → **Visita técnica** → Proposta → Confirmação). Nunca aparece como botão primário nesta página — diferente de Espaço/Casamentos, onde "agende uma visita" é o próprio objetivo da página. |
| **"Falar com nossa equipe"** | Terciário — link discreto de menor compromisso | Fecha a Seção 5 (Infraestrutura) como um link de texto, não um botão sólido — para quem tem uma dúvida pontual e ainda não quer pedir uma proposta formal. Mesmo papel do link discreto que fecha a Estrutura Completa em `/espaco/` e `/casamentos/`. |

**Por que esta distribuição, e não uma só variante repetida:** os cinco perfis do §2 entram na página em estágios diferentes de decisão. Quem já decidiu pede proposta direto (Hero). Quem ainda está avaliando formato quer uma dúvida pontual resolvida sem se comprometer (link "Falar com nossa equipe"). Quem está perto de fechar quer entender o processo formal antes de dar o próximo passo (a sequência de "Como Funciona", que termina oferecendo a visita técnica como etapa, não como pedido isolado). Um único CTA repetido em todo lugar ignoraria que esses três momentos de decisão coexistem na mesma visita à página.

**CTA Final — variação exclusiva desta página:** ao contrário de Espaço/Casamentos, o CTA Final aqui expõe telefone e e-mail ao lado do WhatsApp (`CORPORATE_PAGE_STRATEGY.md` §12) — o texto ao redor desses canais adicionais é sempre neutro e informativo ("(11) 4584-2441 · contato@speranzaeventos.com.br"), nunca um segundo CTA com verbo próprio disputando atenção com "Solicitar proposta".

---

## 7. Linguagem por seção

| Seção | Objetivo | Intensidade | Comprimento esperado | Vocabulário |
|---|---|---|---|---|
| **Hero** | Ancorar competência e prontidão em uma leitura de 2 segundos | Mínima — eyebrow + H1, nada mais (mesmo silêncio editorial do Hero de `/espaco/`) | H1 ≤ 8 palavras, sem subheadline | Substantivo de estrutura/capacidade; zero adjetivo decorativo |
| **Formatos** | Nomear, para cada um dos 4 formatos, o que o espaço resolve naquela configuração | Baixa — uma frase de apoio por formato, nunca um parágrafo | Título do formato (2–3 palavras) + 1 frase factual (≤ 14 palavras) | Nome técnico do formato (plenária, coquetel, treinamento); verbo de capacidade ("recebe", "comporta") |
| **Estrutura** *(Infraestrutura Completa)* | Entregar a ficha técnica reagrupada, sem parecer lista fria | Baixa/tipográfica — a seção com mais densidade de texto da página, mas frase por frase continua curta | Um título de cluster (2–4 palavras) + itens em linha única cada | Substantivo técnico (climatização, estacionamento, Wi-Fi); nunca dois fatos costurados por vírgula |
| **Localização** | Confirmar viabilidade logística — endereço, mapa, estacionamento | Baixa — texto de apoio ao mapa, não o contrário | 1–2 frases curtas | Endereço literal, bairro, referência de acesso; "estacionamento gratuito" sempre nomeado aqui |
| **FAQ** | Resolver dúvida administrativa antes do contato (nota fiscal, pagamento, capacidade por formato) | Baixa/factual, tom de resposta direta | Pergunta curta + resposta em 1–2 frases, sem redirecionar para "fale conosco" quando a resposta cabe ali | Vocabulário processual: nota fiscal, condição de pagamento, confirmação, capacidade |
| **CTA Final** | Fechar com convite objetivo, sem urgência emocional | Baixa — calma, direta | Eyebrow + título curto + 1 frase de apoio + canais | "Proposta", "equipe", "evento" — nunca "aproveite" ou variação de urgência fabricada |

*As seções Abertura Conceitual, Detalhe e Como Funciona (ver `CORPORATE_PAGE_WIREFRAME.md`) seguem as mesmas regras gerais deste guia sem exigir calibração própria — a primeira e a última são predominantemente factuais (mesmo registro de Estrutura/Localização), a de Detalhe é quase muda por design (`CORPORATE_PAGE_STRATEGY.md` §10), então não há vocabulário específico a documentar além do que §8/§9 já cobrem.*

---

## 8. Palavras preferidas

| Palavra | Quando usar |
|---|---|
| **Estrutura** | Referência geral à capacidade física do espaço — substitui "ambiente incrível"/"espaço maravilhoso". |
| **Montagem** | Descrever a configuração física de um formato ("montagem em plenária", "montagem em U"). |
| **Layout** | Sinônimo técnico de configuração, quando "montagem" já apareceu na mesma frase/seção. |
| **Plenária** | Nome técnico do formato de palestra/convenção — nunca "auditório" (o Speranza não tem um auditório dedicado, é o salão reconfigurado). |
| **Recepção** | Momento de chegada/acolhida em qualquer formato — mais neutro que "boas-vindas". |
| **Capacidade** | Sempre que houver (ou vier a haver) um número confirmado de pessoas por formato. |
| **Apoio** | Equipe, estrutura ou serviço de suporte operacional ("equipe de apoio", "apoio técnico"). |
| **Evento** | Termo neutro padrão — substitui "celebração"/"festa" no contexto corporativo. |
| **Configuração** | Sinônimo de "formato" quando a frase já usou "formato" antes, para variar sem repetir. |
| **Acesso** | Logística de chegada — estacionamento, entrada, proximidade de rodovia. |
| **Equipamento** | Som, projeção, mobiliário técnico — nunca "aparelhagem". |
| **Fluxo** | Circulação de pessoas dentro do espaço (relevante em coquetel/confraternização). |
| **Coordenação** | Papel da equipe do Speranza durante o evento — mais preciso que "cuidado" (reservado ao tom afetivo de Casamentos/Espaço). |

---

## 9. Palavras proibidas

Além de toda a lista geral de `COPY_GUIDE.md` §6 (que já proíbe "realize seu sonho", "inesquecível", "o lugar perfeito", "magia" etc. em qualquer página do site), esta tabela reforça e estende o princípio especificamente para `/corporativo/` — o vocabulário abaixo é o de casamento/celebração afetiva, o gênero mais fácil de vazar para esta página por reaproveitamento acidental de frases de outras seções do site.

| Proibido | Por que enfraquece aqui |
|---|---|
| "sonho" / "dos sonhos" | Vocabulário de projeção pessoal (Casamentos/Debutantes) — não existe "sonho corporativo" que soe sério. |
| "encantar" / "encantador" | Promete emoção estética, não resolve a pergunta real deste leitor (risco, previsibilidade). |
| "romântico" | Pertence a outro gênero de página inteiramente — sinal de reaproveitamento de copy errado. |
| "amor" | Idem — nenhuma leitura corporativa desta palavra soa profissional. |
| "conto de fadas" | Clichê de casamento por excelência; quebra qualquer leitura de competência instantaneamente. |
| "felizes para sempre" | Mesmo problema — horizonte de tempo emocional, não operacional. |
| "emoção" / "emocionante" | A página vende alívio racional, não emoção (`CORPORATE_PAGE_STRATEGY.md` §4) — usar a palavra contradiz o próprio objetivo da seção. |
| "inesquecível" | Proibida no site inteiro (`COPY_GUIDE.md` §6); aqui o risco de reaparecer é maior por vir de copy adaptada de Casamentos. |
| "perfeito" | Subjetivo e não-verificável — o oposto do "fato antes de adjetivo" que este público exige. |
| "celebre" / "celebração" (como verbo/abertura de frase) | Tom de convite de festa social — "confraternização" ou "evento" são os termos corretos aqui. |
| "momento único" | Vago, não-específico, aplicável a qualquer evento de qualquer fornecedor — falha o teste de `COPY_GUIDE.md` §12. |
| "mágico" / "magia" | Já proibida no geral; reforçada aqui por ser o oposto exato de "previsibilidade". |

---

## 10. Exemplos completos

*Ilustrativos — calibram o tom, não são copy final aprovado (mesmo princípio de `COPY_GUIDE.md` §7).*

**Hero**
> Eyebrow: "Corporativo"
> H1: "Estrutura pronta para reunir sua empresa inteira."

**Headline (variação para seção interna)**
> "Um espaço, quatro formatos, nenhum imprevisto."

**Subheadline**
> "450m² no Bairro Caxambú, prontos para plenária, treinamento, lançamento de produto ou confraternização de equipe."

**CTA**
> Primário: "Solicitar proposta"
> Secundário (dentro do processo): "Agendar visita técnica"
> Terciário (link de dúvida pontual): "Falar com nossa equipe →"

**Formato (Plenária/Palestra)**
> Título: "Plenária"
> Apoio: "Fileiras para até [capacidade a confirmar] pessoas, som e projeção prontos."

**FAQ**
> P: "Emitem nota fiscal?"
> R: "Sim. A emissão de nota fiscal faz parte do processo formal de contratação, junto com a proposta e a confirmação de data."

**CTA Final**
> Eyebrow: "Vamos conversar"
> Título: "O evento da sua empresa, sem depender de improviso."
> Apoio: "Fale com a gente e receba uma proposta objetiva."
> Canais: "(11) 4584-2441 · contato@speranzaeventos.com.br"

---

## 11. Checklist editorial

Todo texto desta página passa por esta lista antes de publicado — além do checklist geral de `COPY_GUIDE.md` §12, que continua valendo integralmente.

1. Existe um fato concreto sustentando a frase principal da seção?
2. A frase sobreviveria a ser repetida numa reunião interna, sem soar como propaganda?
3. Há alguma promessa impossível de verificar ("o melhor", "sempre", "nunca falha")?
4. Existe algum clichê de evento social (festa, celebração, romance) nesta seção?
5. Essa frase serviria igualmente para `/casamentos/` trocando só o substantivo?
6. O texto transmite competência ou está tentando parecer entusiasmado?
7. Há algum ponto de exclamação em qualquer lugar da página?
8. Existe alguma palavra da tabela §9 (ou da lista geral de `COPY_GUIDE.md` §6)?
9. O visitante entende, em poucos segundos, quais formatos de evento o espaço atende?
10. Algum dado (capacidade, Wi-Fi, horário) está afirmado sem confirmação real do cliente?
11. A headline tem 8 palavras ou menos?
12. A headline usa mais de um adjetivo, ou algum adjetivo não-factual?
13. A subheadline repete o headline em vez de complementá-lo?
14. O CTA usado é o correto para o momento da seção (§6) — "Solicitar proposta" só nos pontos certos?
15. Algum CTA promete algo que a seção não entrega (ex. "fale agora" sem seção de contato correspondente)?
16. Existe urgência fabricada em qualquer frase ("últimas datas", "garanta já")?
17. O vocabulário técnico (plenária, montagem, layout) está usado corretamente, não como decoração?
18. Alguma frase tem duas ideias costuradas por vírgula, quando deveria ser duas frases?
19. O texto usa "você" ou cai em "sua empresa"/terceira pessoa distante além do necessário?
20. A seção de Formatos trata os quatro formatos com peso de linguagem equivalente, sem um soar mais "importante" que outro?
21. A seção de Infraestrutura agrupa os itens por cluster, ou virou lista solta de novo?
22. O FAQ responde a pergunta diretamente, sem redirecionar ao WhatsApp quando a resposta cabia ali?
23. Alguma resposta do FAQ menciona valor/preço em vez de direcionar ao canal de contato?
24. A seção de Localização nomeia o estacionamento explicitamente?
25. O CTA Final expõe telefone e e-mail junto do WhatsApp, sem transformar isso em um segundo CTA com verbo próprio?
26. Alguma frase usa jargão corporativo vazio ("sinergia", "soluções sob medida", "parceiro estratégico")?
27. O texto desta página poderia ser confundido com o de um fornecedor B2B genérico, sem nenhuma especificidade do Speranza?
28. Toda seção termina sabendo o próximo passo (link, CTA ou resposta clara), mesmo que o peso desse fechamento varie por seção?
29. A quantidade de texto por seção está de acordo com a calibração do §7 (mais densa em Estrutura/FAQ, mínima em Hero/Formatos)?
30. Lido em voz alta para um RH, um diretor e um comprador ao mesmo tempo, o texto soa igualmente claro para os três?

---

**Este documento é o par verbal do `CORPORATE_PAGE_STRATEGY.md`/`CORPORATE_PAGE_WIREFRAME.md`.** Nenhum copy final de `/corporativo/` é escrito sem passar pelo checklist acima.
