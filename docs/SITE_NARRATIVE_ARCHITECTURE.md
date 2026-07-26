# Speranza Eventos — Arquitetura Narrativa do Site

**Status:** constituição narrativa do projeto — referência permanente para toda página atual e futura. Não substitui os documentos de estratégia por página; define as regras que fazem esses documentos parecerem parte do mesmo projeto.
**Base:** [ESTRATEGIA.md](ESTRATEGIA.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [COPY_GUIDE.md](COPY_GUIDE.md), [ART_DIRECTION.md](ART_DIRECTION.md), [SPACE_PAGE_STRATEGY.md](SPACE_PAGE_STRATEGY.md), [WEDDING_PAGE_STRATEGY.md](WEDDING_PAGE_STRATEGY.md), [CORPORATE_PAGE_STRATEGY.md](CORPORATE_PAGE_STRATEGY.md).
**Como usar:** nenhuma página nova (wireframe ou implementação) começa sem primeiro confrontar sua proposta contra este documento. Se uma decisão de página contradiz um princípio aqui, o princípio vence — ou o princípio precisa ser revisado aqui, nunca ignorado em silêncio numa página só.

---

## 1. Objetivo

O Speranza não é publicado como um conjunto de landing pages paralelas competindo pela mesma atenção — é uma única experiência de marca, com múltiplas portas de entrada. Um visitante pode chegar direto a `/casamentos/` vindo de uma busca no Google sem nunca ter visto a Home, e a página precisa funcionar sozinha para essa pessoa. Mas se a mesma pessoa depois visitar `/espaco/` ou `/contato/`, cada página precisa **acrescentar uma camada de confiança que a anterior ainda não deu**, nunca repetir a mesma prova com roupagem diferente.

Isso só funciona se cada página responder a **uma pergunta que nenhuma outra faz sentido de responder**. Home responde "qual desses é para mim?"; Espaço responde "vale a pena ir ver pessoalmente?"; Casamentos responde "esse poderia ser o meu dia?"; Corporativo responde "o que pode dar errado, e já está resolvido?". Nenhuma dessas perguntas se sobrepõe — e é exatamente essa não-sobreposição, não o header/footer compartilhado, que faz o site parecer um projeto único.

Este documento não repete o conteúdo de `ESTRATEGIA.md`, `DESIGN_SYSTEM.md`, `COPY_GUIDE.md` ou `ART_DIRECTION.md` — assume tudo isso como base e formaliza a camada que ainda não existia por escrito: as regras que decidem se uma página nova está *narrativamente* certa, antes mesmo de qualquer wireframe.

---

## 2. Princípios Fundamentais

1. **Eixo narrativo exclusivo** — cada página organiza-se por um eixo próprio (ver mapa §3); nenhum eixo já usado por outra página pode ser reaproveitado por uma nova.
2. **Curva de intensidade deliberada** — toda página escolhe, conscientemente, entre pico único (um momento que domina todos os outros) ou platô controlado (vários momentos de peso equivalente, por uma razão argumentada); o que nunca é aceitável é ritmo acidental, sem nenhuma das duas escolhas ter sido feita de propósito.
3. **Arquitetura antes de decoração** — a fotografia vende estrutura, luz e material antes de vender adorno; decoração aparece como acento pontual, nunca como assunto principal do quadro.
4. **Fato antes de adjetivo** — toda promessa relevante se apoia em algo verificável (número, material, distância, item real); adjetivo isolado nunca sustenta uma afirmação central.
5. **Emoção sem sentimentalismo** — a emoção nasce do fato concreto e da composição, nunca da palavra que tenta produzi-la à força; hipérbole, clichê de segmento e urgência fabricada são sempre proibidos, em qualquer página.
6. **Silêncio editorial é conteúdo** — espaço em branco, pausas sem texto, still-life sem legenda longa são decisões de design deliberadas, não lacunas a preencher com mais texto.
7. **Teste da cópia** — se uma seção pudesse ser copiada de outra página trocando só a foto e a legenda, ela nasceu do molde errado; toda seção precisa nascer da pergunta específica da própria página.
8. **Sistema é reaproveitável, narrativa não é** — componentes de interface e dispositivos editoriais (clusters temáticos, pivô de tom por eyebrow, grid de still-life uniforme, `.faq-item`, CTA Final tipográfico) atravessam páginas livremente; eixo narrativo, metáfora e curva de intensidade nunca são herdados de outra página.
9. **CTA obedece ao critério de decisão do público, não a um padrão fixo** — verbo, canal e grau de urgência mudam conforme quem decide (ex.: "agende uma visita" vs. "solicite uma proposta"; WhatsApp único vs. WhatsApp + telefone + e-mail lado a lado).
10. **Nenhum dado é inventado** — informação pendente de confirmação real (capacidade, Wi-Fi, horário de atendimento) permanece marcada como pendente até validação; nunca é estimada só para a página "parecer completa".
11. **Toda página termina sabendo o próximo passo**, mas o peso desse encerramento é calibrado à página — nunca um CTA final herdado por padrão sem revisar se o verbo e o canal ainda fazem sentido para aquele público.

---

## 3. Mapa Narrativo do Site

| Página | Papel | Pergunta respondida | Metáfora narrativa (eixo) | Emoção dominante | CTA principal |
|---|---|---|---|---|---|
| **Home** | Ponto de convergência e triagem de público | "Qual desses é para mim?" | **Descoberta** — porta de entrada, organiza por segmentação, não por espaço/tempo/função | Reconhecimento | WhatsApp genérico + 4 portas de entrada |
| **Espaço** | Showreel institucional do prédio | "Vale a pena ir ver pessoalmente?" | **Visita** — tour espacial, sala a sala, ordem de uma visita guiada | Impacto silencioso → desejo de visitar | "Agende uma visita" |
| **Casamentos** | Projeção emocional de um dia específico | "Esse poderia ser o meu dia?" | **Jornada** — fotoensaio cronológico, momento a momento de um dia vivido | Projeção / romance contido | "Agende uma visita" |
| **Corporativo** | Redução de risco para decisão racional e solitária | "O que pode dar errado, e já está resolvido?" | **Função** — reconfiguração funcional, o mesmo espaço em formatos de uso distintos | Alívio racional / controle | "Solicite uma proposta" |
| **Debutantes** | Celebração de passagem, decisão mãe + filha | "Esse lugar tem a elegância certa, sem exagero?" | **Em aberto** — não pode reutilizar descoberta/visita/jornada/função (ver §7) | Orgulho contido | A definir junto com a metáfora |
| **Aniversários & Bodas** | Celebração social diversa, decisão rápida | "Isso atende o que eu preciso, com agilidade?" | **Em aberto** — não pode reutilizar descoberta/visita/jornada/função (ver §7) | Praticidade calorosa | A definir junto com a metáfora |
| **Contato** | Fechamento prático para quem já decidiu | "Como eu falo com vocês agora?" | **Utilitária** — página de ação, deliberadamente sem metáfora narrativa própria | Praticidade / clareza | Todos os canais lado a lado |

*Nota: o CTA "Fale agora e garanta sua data", previsto para Aniversários em `WIREFRAME.md`, usa linguagem de urgência que contradiz o princípio 10 e `ESTRATEGIA.md` §6 — sinalizado aqui para revisão quando aquela página for estratégiada, sem alterar o documento original agora.*

---

## 4. Matriz de Diferenciação

| Critério | Home | Espaço | Casamentos | Corporativo |
|---|---|---|---|---|
| **Ritmo** | Alternância de conversão, sem pico | Crescente até a Área Externa, depois informativo | Pico único (Cerimônia), depois decrescente | Platô (4 formatos equivalentes), informativo na 2ª metade |
| **Fotografia (assunto)** | Mosaico de portas de entrada | Arquitetura pura, ambiente vazio | Dia vivido, candid contido | Espaço reconfigurado, quase sem pessoas |
| **Densidade de texto** | Média, orientadora | Baixa nas seções visuais, alta na Estrutura | A mais baixa do site | A mais alta do site (seções informacionais) |
| **Arquitetura visual** | Grid de cards de segmentação | Dupla de página por ambiente | Fotoensaio, grid assimétrico na Galeria | Dupla de página por formato + clusters tipográficos |
| **Composição** | Simétrica moderada, centrada em cards | Assimétrica, linha de fuga real | Assimétrica, foco humano discreto | Assimétrica, exceção simétrica só em fachada/lançamento |
| **Narrativa (eixo)** | Descoberta | Visita | Jornada | Função |
| **Pessoas em foto** | Variável por card | 0% (padrão) | Até 25% (recalibrado) | Quase 0% (mais restritivo que o piso do site) |
| **Comportamento do CTA** | Genérico + 4 direcionados por segmento | "Agende uma visita", nunca orçamento | "Agende uma visita", nunca orçamento | "Solicite uma proposta" + telefone/e-mail |
| **Prova social** | Depoimentos por segmento (pendente) | Nenhuma própria (herda do site) | Depoimento de casal (pendente/autorização) | Nome de empresa (pendente/autorização) |
| **Sensação dominante** | Clareza / reconhecimento | Impacto / desejo | Projeção / romance contido | Alívio racional / controle |

*Debutantes, Aniversários e Contato ficam fora desta matriz até terem estratégia própria — preenchê-la sem essa base seria inventar diferenciação em vez de projetá-la. A única exigência já fixada (§7): quaisquer que sejam seus valores futuros nas linhas "Narrativa" e "Ritmo", eles não podem coincidir com os já ocupados acima.*

---

## 5. O que nunca repetir

- **Hero idêntico** (mesmo enquadramento, mesma proporção, mesmo grau de silêncio) — cada Hero prova algo diferente sobre a pergunta que a própria página abre.
- **Mesma sequência de blocos** — a ordem das seções é a lógica interna da pergunta daquela página; herdar a ordem de outra é herdar a pergunta errada.
- **Mesma metáfora narrativa** — descoberta/visita/jornada/função já estão ocupados; reaproveitar qualquer um esvazia a diferenciação que esta arquitetura protege.
- **Mesma lógica de fotografia** (mesma proporção pessoas/arquitetura/detalhe) — cada página calibra essa proporção ao próprio público; copiar a de outra reintroduz o clichê que a recalibração existia para evitar.
- **Mesmo ritmo** (pico único vs. platô) — a escolha é sempre argumentada por página, nunca herdada por costume.
- **Mesmo tipo de encerramento** — o CTA Final é o mesmo componente de sistema, mas o verbo e o canal nunca são herdados sem recalibrar ao critério de decisão daquele público.
- **Mesma distribuição de imagens** (mesma alternância paisagem/retrato/quadrado) — a alternância é desenhada por página, não uma fórmula fixa aplicada em série.
- **Mesmo grau de silêncio editorial** — Casamentos é quase mudo; Corporativo é mais verboso nas seções informativas; nivelar os dois apagaria a diferença de público que a própria densidade de texto comunica.
- **Mesma prova social** — o tipo de prova (nome + tipo de evento, nome de empresa, ausência documentada) muda com o público; nunca é um placeholder genérico repetido.
- **Mesmo clímax fotográfico** — o mesmo ambiente físico pode aparecer em páginas diferentes (a Área Externa está em Espaço e em Casamentos), mas nunca carrega o mesmo papel de protagonista em duas ao mesmo tempo.

Cada repetição desta lista enfraquece a identidade editorial pelo mesmo motivo: o visitante que vê duas páginas do site em sequência percebe o padrão antes de perceber o conteúdo — e um padrão perceptível é, por definição, um template, não uma narrativa.

---

## 6. Evolução do visitante

Uma sequência real de leitura — Home → Espaço → Casamentos → Contato — precisa somar camadas de confiança sem nunca repetir a prova da etapa anterior:

1. **Home** — reconhecimento: "isso é para mim, e existe de verdade".
2. **Espaço** — verificação sensorial: "o lugar é real e à altura do que a Home prometeu" (a arquitetura já foi provada aqui — Casamentos não precisa reprová-la).
3. **Casamentos** — projeção pessoal: "consigo me imaginar vivendo isso aqui" (a prova agora é humana/emocional, não espacial — repetir arquitetura nesta etapa seria redundante).
4. **Contato** — confirmação prática: "sei exatamente como falar com eles agora" (nenhuma persuasão nova, só facilitação).

Essa progressão só é válida como *reforço*, nunca como *pré-requisito*: cada página continua obrigada a funcionar sozinha para quem entra direto nela (mesmo princípio de `WEDDING_PAGE_STRATEGY.md` §1 — a maioria do tráfego chega por busca segmentada, não pela Home). A arquitetura narrativa existe para quem vê mais de uma página, não depende de que isso aconteça.

---

## 7. Próximas decisões

Debutantes e Aniversários & Bodas ainda não têm metáfora narrativa — este documento **registra a restrição, não a resolve**:

- Nenhuma das duas pode reutilizar os quatro eixos já ocupados: **descoberta** (Home), **visita** (Espaço), **jornada** (Casamentos), **função** (Corporativo).
- A decisão de qual quinto e sexto eixo usar é o primeiro passo de qualquer `DEBUTANTES_PAGE_STRATEGY.md`/`ANIVERSARIOS_PAGE_STRATEGY.md` futuro — antes de qualquer wireframe, pelo mesmo processo já usado nas três páginas existentes.
- Este documento não sugere candidatos. Fazer isso agora, sem o processo de estratégia dedicado (jornada emocional, benchmark, revisão crítica), seria exatamente o atalho que este documento existe para impedir.

---

## 8. Revisão crítica

**Coerência:** alta entre as três páginas de segmento já construídas — cada uma passou pelo mesmo processo (estratégia → wireframe → revisão crítica) e compartilha vocabulário de sistema sem compartilhar eixo narrativo. É o resultado que esta arquitetura formaliza, não inventa.

**Diferenciação:** real e verificável na Matriz (§4) entre Home, Espaço, Casamentos e Corporativo. O risco não está no que já foi construído — está no que falta (ver Riscos futuros).

**Riscos futuros:** Debutantes e Aniversários são o teste real desta arquitetura. Se qualquer uma repetir descoberta/visita/jornada/função sem uma quinta ou sexta lente genuína, o site deixa de ser "quatro páginas pensadas" e vira "um template aplicado a seis públicos" — risco já identificado em `WEDDING_PAGE_WIREFRAME.md` § Revisão Crítica antes mesmo deste documento existir, e agora elevado de risco pontual a restrição de arquitetura (§7).

**Escalabilidade:** os componentes de interface escalam por design (princípio 8); a narrativa não escala automaticamente — cada página nova exige a mesma disciplina de decisão de eixo antes do wireframe, nunca um atalho ou "gerador" de páginas.

**Consistência editorial e visual:** garantidas por `COPY_GUIDE.md` e `DESIGN_SYSTEM.md`/`ART_DIRECTION.md`, com recalibrações sempre documentadas e propositais (proporção de pessoas por página, densidade de texto por página) — nenhuma tensão encontrada.

**Conflito identificado entre documentos:** o princípio "cada página deve ter um momento de maior intensidade" (citado como exemplo no briefing deste documento) entra em tensão direta com a decisão de `CORPORATE_PAGE_STRATEGY.md` §6 de **não** ter um pico único — o platô entre os 4 formatos é deliberado, para não sugerir hierarquia entre eles. **Direção proposta, sem alterar nenhum documento existente:** o princípio 2 desta constituição já resolve isso — substitui "todo página tem um pico" por "toda página escolhe, de propósito, entre pico único e platô controlado". Isso absorve a decisão de Corporativo como uma segunda opção legítima da arquitetura, não uma exceção não documentada, e vale como precedente para qualquer página futura que precise do mesmo argumento (equivalência entre partes, em vez de clímax único).

**Riscos de repetição:** concentrados no par Debutantes/Aniversários. Um risco secundário: o CTA Final tipográfico já se repete de forma visualmente quase idêntica em três páginas — aceitável hoje porque é componente de sistema (princípio 8), mas vale reavaliar, com seis páginas de segmento no ar, se pequenas variações de composição (não de função) ajudariam a reforçar que cada capítulo fecha de forma própria.

**Oportunidades de evolução:**
1. Prova social real (depoimentos nomeados, nome de empresa autorizado) segue como a maior alavanca de "premium" ainda não resolvida em nenhuma página — conclusão já presente em `ART_DIRECTION.md`/`REFACTOR_ROADMAP.md`, reafirmada aqui em nível de arquitetura, não só de página individual.
2. Uma vez que Debutantes e Aniversários tenham eixo definido, vale revisar se `Contato` deveria ganhar uma camada mínima de personalidade própria ou permanecer deliberadamente neutra — decisão a tomar só quando o mapa completo (§3) estiver preenchido, não antes.
3. O CTA "Fale agora e garanta sua data" (Aniversários, `WIREFRAME.md`) precisa de revisão à luz do princípio 10 antes daquela página avançar para estratégia — registrado aqui, não corrigido agora.

---

**Este documento é a referência narrativa permanente do projeto.** Toda nova página — estratégia, wireframe ou implementação — se mede contra ele antes de qualquer decisão visual ou textual própria.
