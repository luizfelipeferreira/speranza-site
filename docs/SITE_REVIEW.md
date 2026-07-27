# Speranza Eventos — Auditoria Editorial do Site

**Status:** auditoria final, realizada após a implementação de todas as sete páginas do projeto (Home, Espaço, Casamentos, Corporativo, Debutantes, Aniversários & Bodas, Contato). Não é um documento de estratégia — nenhuma metáfora, eixo narrativo, wireframe ou copy é reaberto aqui.
**Base:** [SITE_NARRATIVE_ARCHITECTURE.md](SITE_NARRATIVE_ARCHITECTURE.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [ART_DIRECTION.md](ART_DIRECTION.md), [COPY_GUIDE.md](COPY_GUIDE.md), [ESTRATEGIA.md](ESTRATEGIA.md), e as seis estratégias/wireframes de página já aprovados (`SPACE_*`, `WEDDING_*`, `CORPORATE_*`, `DEBUTANTES_*`, `ANNIVERSARIOS_*`).
**Método:** toda observação abaixo foi verificada contra o código real (`index.html`, `espaco/`, `casamentos/`, `corporativo/`, `debutantes/`, `aniversarios/`, `contato/` e os `.css` correspondentes), não apenas contra a intenção documentada — quando o código diverge do que a estratégia previa, o documento aponta a divergência real, não a intenção.
**O que este documento não faz:** não propõe metáfora nova, não redesenha seção, não reabre CTA já decidido, não inventa componente, não contradiz nenhum documento aprovado. Toda crítica aqui é de baixo risco e mira consistência entre páginas que já foram individualmente aprovadas.

---

## 1. Objetivo da revisão

**Por que uma auditoria existe, separada da implementação:** cada uma das sete páginas do Speranza foi construída através do mesmo processo — estratégia → wireframe → copy guide → implementação → relatório — e cada relatório de implementação validou a página **contra si mesma** (a página cumpre seu próprio wireframe? sua própria paleta de copy? sua própria acessibilidade?). Nenhum desses relatórios, individualmente, podia responder a uma pergunta diferente: **as sete páginas, lidas em sequência, ainda parecem um produto único?** Essa pergunta só existe no nível do conjunto — é estruturalmente impossível de responder de dentro de uma página só, não importa quão rigoroso o processo daquela página tenha sido.

**Diferença entre construir e revisar:** construir é perguntar "esta página está certa?"; revisar é perguntar "esta página, ao lado das outras seis, ainda soa como a mesma marca, ou já é possível perceber que foram construídas em momentos diferentes, por processos que evoluíram entre uma e outra?". Este projeto levou seis meses editoriais de disciplina (na prática desta implementação, seis rodadas sequenciais de estratégia) para chegar a sete páginas — e cada rodada aprendeu algo que a anterior não sabia (o próprio `SITE_NARRATIVE_ARCHITECTURE.md` é prova disso: foi escrito depois de três páginas, não antes de nenhuma). É esperado — não é falha de processo — que as páginas mais recentes carreguem refinamentos que as mais antigas não tiveram a chance de incorporar. O papel desta auditoria é encontrar exatamente esses pontos de fricção, sem fingir que o problema é maior do que é, e sem tratá-lo como parte do bom processo que efetivamente foi seguido.

**Problemas que normalmente aparecem quando páginas são desenvolvidas separadamente** (o que esta auditoria foi desenhada para caçar especificamente):
1. **Repetição verbal não-intencional** — a mesma frase, ou quase a mesma, reaparecendo em páginas diferentes porque quem escreveu a segunda não tinha a primeira ao lado na hora de escrever (ver §8).
2. **Deriva de padrão de completude visual** — páginas mais recentes adotando uma convenção de placeholder diferente das mais antigas, sem que ninguém tenha decidido isso conscientemente como regra do site (ver §5 e §9 — este é o achado mais importante desta auditoria).
3. **Documentos de arquitetura ficando desatualizados** em relação ao que já foi decidido nas camadas mais específicas — o `SITE_NARRATIVE_ARCHITECTURE.md` ainda registra os eixos de Debutantes e Aniversários como "em aberto", quando as duas estratégias correspondentes já os resolveram (ver §9).
4. **Risco identificado e nunca fechado formalmente** — um problema que três documentos diferentes sinalizam ao longo do tempo, mas que nenhum deles confirma como resolvido depois que a implementação de fato o corrigiu (ver §7, o CTA de urgência de Aniversários).
5. **Pequenas lacunas de paridade entre páginas-irmãs** — um item de reassurance presente em cinco das seis páginas de segmento e ausente na sexta, não por decisão, mas porque o wireframe daquela página específica não o incluiu (ver §8).

Nenhum desses cinco problemas foi encontrado em grau grave nesta auditoria — mas todos os cinco foram encontrados em algum grau, e cada um está documentado, com localização exata, nas seções abaixo.

---

## 2. Jornada do usuário pelo site

**Sequência analisada:** Home → Espaço → Casamentos → Contato (a mesma sequência de referência já usada em `SITE_NARRATIVE_ARCHITECTURE.md` §6), estendida aqui também para Home → Corporativo → Contato, Home → Debutantes → Contato e Home → Aniversários → Contato, já que essas três rotas não existiam quando aquele documento foi escrito.

| Transição | Existe continuidade? | Observação |
|---|---|---|
| **Home → Espaço** | Sim | Home termina com "Escolha o seu tipo de evento" e o card "O Espaço" já entrega a mesma promessa de ver o lugar de perto que o Hero de Espaço abre. Nenhuma prova é repetida — Home mostra o prédio em mosaico de portas de entrada, Espaço mostra o mesmo prédio como protagonista único. |
| **Home → Casamentos** | Sim | O card "Casamentos" da Home já entrega o gancho emocional ("dia que muda tudo") que o Hero de Casamentos assume como ponto de partida. |
| **Home → Corporativo** | Sim, com uma nota | O card de Corporativo na Home já fala em "estacionamento, climatização e capacidade" — um registro mais factual que os outros três cards. Isso é coerente com o público (`ESTRATEGIA.md` §2), mas significa que o card de Corporativo já "parece" ligeiramente mais informacional que os cards de Casamentos/Debutantes/Aniversários dentro da própria Home — vale conferir se isso é uma calibração desejada ou um acidente de quem escreveu aquele card em outro momento (ver §12). |
| **Espaço → Casamentos** | Sim | `WEDDING_PAGE_STRATEGY.md` §2 documenta explicitamente esta transição — a arquitetura já foi provada em Espaço, então Casamentos não reprova o prédio, só o dia. Verificado no código: Casamentos não tem nenhuma seção equivalente a um "tour de ambientes". |
| **Casamentos → Corporativo** (se o mesmo visitante navegar entre as duas) | Sim, e é a transição mais nitidamente projetada do site | As duas páginas descrevem explicitamente, nos próprios documentos de estratégia, o que fariam se copiassem uma a outra ("crachá em vez de convite", "terno em vez de noivos") — e nenhuma das duas cai nisso no código. Casamentos é quase muda (mínimo de texto); Corporativo é a página mais verbosa do site. A diferença de densidade de texto entre as duas, por si só, já comunica a mudança de público antes de qualquer palavra ser lida. |
| **Qualquer página de segmento → Contato** | Sim, sem esforço extra | Contato não tenta persuadir de novo — é NAP + mapa + horário. É a única página do site sem eixo narrativo próprio, por decisão documentada (`SITE_NARRATIVE_ARCHITECTURE.md` §3) — no código, isso se confirma: é a página mais curta e mais simples de todo o site, sem hero editorial, sem still-life, sem microcopy sensorial. |

**Alguma página parece de outro projeto?** Não, no nível de sistema (tokens de cor, tipografia, componentes) — as sete páginas carregam a mesma paleta Soft Sage, a mesma Fraunces/Manrope, os mesmos componentes de `components.css`. Nenhuma página "destoa" estruturalmente. **Mas** há uma diferença de *acabamento visual* real entre dois grupos de página, detalhada em §5 e §9 — não é uma diferença de identidade, é uma diferença de estágio de produção que, vista em sequência rápida, pode ser confundida com inconsistência de projeto por quem não sabe que é uma questão de fotografia pendente, não de direção de arte divergente.

**Alguma página acelera demais?** Debutantes é a página com a curva de intensidade mais alta do site (crescendo até um único pico absoluto na seção "A Entrada") — isso é intencional e documentado (`DEBUTANTES_PAGE_STRATEGY.md` §2-3), mas é a página que, lida logo depois de Corporativo (achatada, sem pico), produz a mudança de ritmo mais brusca de qualquer par de páginas adjacentes no menu. Isso não é um erro — é o ritmo correto para o público de cada uma —, mas é a transição de ritmo mais acentuada do site, e vale saber que ela existe (nenhuma ação recomendada, ver §13).

**Alguma desacelera demais?** Não. A página mais "lenta" em densidade de estímulo é Contato, e ela desacelera de propósito — é a única página cujo objetivo é justamente não pedir mais nenhum esforço de leitura do visitante.

---

## 3. Ritmo editorial

| Página | Alternância imagem/texto | Densidade | Risco de "excesso de grid" | Risco de "excesso de hero" |
|---|---|---|---|---|
| **Home** | Alterna cards de segmentação com blocos tipográficos (Estrutura, Como funciona) | Média | Grid de 4 cards de evento + grid de estrutura + grid de FAQ — três grids na mesma página é o maior risco de repetição de padrão do site, mitigado por os três terem proporções e função visual diferentes (retrato 3:4 nos cards, ícone+texto na estrutura, acordeão no FAQ) | Um só hero, na abertura — sem risco |
| **Espaço** | Alterna dupla de página (Tour) com blocos tipográficos (Conceito, Estrutura) | Baixa nas seções visuais, alta na Estrutura | Baixo — a galeria completa foi deliberadamente dissolvida dentro do Tour (`SPACE_PAGE_STRATEGY.md` §6), não existe um grid quadrado uniforme nesta página | Um hero + a Área Externa funciona como um segundo momento de impacto — risco baixo, já que a diferença de escala entre os dois é clara no código |
| **Casamentos** | A mais bem alternada do site — nenhuma seção do mesmo peso visual em sequência (`WEDDING_PAGE_STRATEGY.md` §6) | A mais baixa densidade de texto do site, de propósito | Nenhum grid uniforme — a Galeria usa composição assimétrica | Dois "heroes" de fato (Cerimônia e Recepção), com escala deliberadamente desigual entre eles — risco mitigado por design, não por acidente |
| **Corporativo** | Alterna Formatos (visual) com Infraestrutura/Como Funciona (tipográfico) | A mais alta densidade de texto do site, de propósito (`CORPORATE_PAGE_STRATEGY.md` §11) | Grid de 4 formatos com peso igual entre si — deliberado (nenhuma hierarquia entre eles, ver `CORPORATE_PAGE_STRATEGY.md` §6), mas é o grid mais "uniforme" do site em termos de peso visual — vale observar (não mudar) |  Nenhum "hero" único de maior peso — plano de propósito |
| **Debutantes** | Bastidores (íntimo) → A Entrada (pico absoluto) → Celebração (dupla contida) → Detalhes (still-life) — a curva mais desenhada do site | Média-baixa | Baixo — Galeria Editorial usa grid assimétrico de 5 pranchas, Os Detalhes usa grid quadrado de 4 (o único grid uniforme da página, mas pequeno e claramente rotulado como still-life, não como "mais uma seção de fotos") | A Entrada é, de propósito, o hero mais forte de qualquer página do site — não há segundo momento equivalente depois dela, o que é correto (`DEBUTANTES_PAGE_WIREFRAME.md`, curva 0%→40%→80%→70%→0%) |
| **Aniversários** | Gesto (fechado) → Grupo (médio) → Salão Cheio (aberto) — a única página cuja variável de ritmo é literalmente a distância focal | Média | Grid assimétrico de 6 pranchas na Galeria — mesma família de solução de Casamentos/Debutantes, span próprio | Sem pico único, por design (`ANNIVERSARIOS_PAGE_STRATEGY.md` §3) — o Salão Cheio é a seção de maior peso visual, mas deliberadamente sem o "silêncio de clímax" que marcaria um hero secundário |
| **Contato** | Nenhuma alternância — página utilitária de bloco único | Baixíssima, de propósito | Não aplicável | Não aplicável — sem hero |

**Conclusão da seção:** não há excesso de grid nem excesso de hero em nenhuma página individualmente — cada uma já documentou e mitigou esse risco na própria estratégia. O único padrão que se repete *entre* páginas de forma potencialmente perceptível é o dispositivo "grid de 4 clusters temáticos" na seção de Estrutura/Infraestrutura (Espaço, Corporativo, Debutantes, Aniversários usam a mesma solução visual). Isso é abordado em detalhe em §8, porque é reuso de **sistema** (permitido, princípio 8 de `SITE_NARRATIVE_ARCHITECTURE.md`), não de **narrativa** — mas voltar a esse ponto vale a pena porque quatro repetições do mesmo layout de grid, ainda que com conteúdo diferente, é o tipo de coisa que só fica visível quando alguém olha as quatro páginas em sequência rápida, exatamente o que esta auditoria existe para fazer.

---

## 4. Consistência narrativa

**Cada página possui personalidade própria?** Sim — nas sete páginas, cada uma organiza sua leitura por um princípio diferente: Home por segmentação, Espaço por espaço físico, Casamentos por tempo de um dia, Corporativo por função/formato de uso, Debutantes por revelação de uma protagonista, Aniversários por raio de proximidade relacional, Contato por nenhum princípio narrativo (deliberado). Nenhuma dessas seis lógicas organizadoras é intercambiável com outra sem quebrar a própria página — teste aplicado e aprovado.

**Alguma virou cópia de outra?** Não. O teste mais direto — "essa seção poderia ser copiada de outra página trocando só a foto e a legenda?" (`SITE_NARRATIVE_ARCHITECTURE.md` princípio 7) — falha em toda tentativa de pareamento óbvio: Debutantes "A Entrada" não é a "Cerimônia" de Casamentos com roupa diferente (uma revela uma pessoa, a outra celebra um instante compartilhado); Aniversários "O Salão Cheio" não é a "Recepção" de Casamentos (uma é prova de amplitude sem clímax, a outra é o segundo pico emocional da página — a própria `ANNIVERSARIOS_PAGE_WIREFRAME.md` já sinalizava esse par como o ponto de maior atenção necessária, ver nota abaixo).

**Alguma metáfora vazou para outra página?** Não, verificado por eixo:

| Página | Eixo | Vocabulário literal da metáfora aparece no texto/HTML? |
|---|---|---|
| Debutantes | A Estreia | Não — grep por "palco/cortina/holofote/tapete/refletor/glamour/brilho" retorna zero ocorrências em `debutantes/index.html` e `debutantes.css`. A metáfora existe só na ordem de revelação da protagonista. |
| Aniversários | O Círculo | Não — a palavra "círculo" não aparece em nenhum headline/CTA/FAQ; a metáfora existe só na progressão de enquadramento (85–105mm → 50mm → 35mm). |
| Espaço | Visita | Não aplicável da mesma forma (o eixo é estrutural, não uma imagem verbal a esconder) — mas vale notar que nenhuma outra página usa o dispositivo de "tour ambiente-a-ambiente". |
| Corporativo | Função | Idem — nenhuma outra página reconfigura o mesmo espaço em formatos de uso equivalentes. |

**Alguma sequência ficou repetitiva?** O único ponto real de atenção, já auto-identificado no próprio `ANNIVERSARIOS_PAGE_WIREFRAME.md` (seção de Revisão Crítica daquele documento): a seção "O Salão Cheio" (Aniversários) e a "Recepção" (Casamentos) são, as duas, planos gerais de salão em uso — a diferença pretendida é de função (prova de amplitude sem clímax vs. segundo pico emocional), mas essa diferença depende inteiramente da curadoria fotográfica futura para se sustentar visualmente; hoje, com as duas seções ainda em placeholder, o código não permite verificar se a diferença de fato aparece na prática. Isso não é uma falha desta auditoria nem da implementação — é uma dependência já corretamente sinalizada, e reafirmada aqui para constar no registro de riscos que sobrevivem à implementação.

**Tabela comparativa completa das sete páginas:**

| Página | Papel | Eixo narrativo | Emoção dominante | Ritmo | Protagonista | CTA principal |
|---|---|---|---|---|---|---|
| **Home** | Convergência e triagem | Descoberta | Reconhecimento | Conversão, sem pico | O visitante escolhendo | WhatsApp genérico + 4 portas |
| **Espaço** | Showreel institucional | Visita | Impacto silencioso → desejo | Crescente até Área Externa, depois informativo | O prédio | Agende uma visita |
| **Casamentos** | Projeção emocional de um dia | Jornada | Projeção / romance contido | Pico único (Cerimônia), decrescente | O casal | Agende uma visita |
| **Corporativo** | Redução de risco | Função | Alívio racional / controle | Platô (4 formatos equivalentes) | O espaço reconfigurável | Solicite uma proposta |
| **Debutantes** | Celebração de passagem | Estreia | Orgulho contido | Crescendo até pico único (A Entrada) | A debutante | Agende uma visita |
| **Aniversários** | Celebração social diversa | Círculo | Pertencimento | Expansão contínua, sem pico | O grupo reunido | Agende uma visita |
| **Contato** | Fechamento prático | Nenhum (utilitária) | Praticidade / clareza | Neutro | Nenhum | Todos os canais lado a lado |

Nenhuma célula desta tabela colide com outra na mesma coluna (Eixo, Ritmo e Protagonista, especialmente) — essa é a verificação central desta seção, e ela passa.

---

## 5. Consistência visual

**Proporções:** os tokens de `DESIGN_SYSTEM.md` (escala tipográfica, espaçamento em 8pt, `--container-max: 72rem`) são usados sem exceção nas sete páginas — nenhum CSS de página redefine um valor de espaçamento ou tipografia fora da escala.

**Hierarquia:** consistente — H1 único por página em todas as sete, headings sem saltos, `aria-labelledby` resolvido em todas. Verificado diretamente no HTML de cada página nesta auditoria.

**Peso das fotografias:** aqui está o achado mais relevante desta seção. Ao comparar o estado real de placeholder das sete páginas:

| Página | Tags `<img>` reais | Placeholders `grain-overlay` (CSS puro) |
|---|---|---|
| Home | 14 | 6 |
| Espaço | 6 | 9 |
| Casamentos | 8 | 5 |
| Corporativo | 1 | 11 |
| Debutantes | 1 | 16 |
| Aniversários | 0 | 10 |
| Contato | 0 | — |

Home, Espaço e Casamentos usam fotografia real do Unsplash, marcada com `"(imagem temporária)"` no `alt`, seguindo a curadoria de `ART_DIRECTION.md` §6. Corporativo, Debutantes e Aniversários usam **zero fotografia**, só blocos de textura (`grain-overlay`) com comentário `TODO` descrevendo a foto que deveria existir. As duas abordagens são, cada uma, decisões documentadas e defensáveis nos respectivos relatórios de implementação (a segunda geração de páginas evitou banco de imagens genérico por não haver como validar visualmente conteúdo/licença/adequação contra `ART_DIRECTION.md`, um cuidado ainda mais justificado em Debutantes por envolver uma protagonista menor de idade). **Mas o site, hoje, tem dois níveis de acabamento visual visíveis lado a lado no mesmo menu de navegação** — um visitante (ou o cliente, em aprovação) que passa de `/casamentos/` para `/corporativo/` sai de uma página cheia de fotografia (ainda que temporária) para uma página inteiramente em blocos cinza-claros de textura. Isso é o achado central desta auditoria (retomado em §9, §12 e §14): não é um erro de direção de arte — é uma divergência de **estágio de produção** que precisa ser lida como tal, não como inconsistência de sistema.

**Silêncio editorial:** presente e proporcional em todas as sete — Casamentos e Debutantes (as duas páginas de maior carga emocional) seguem a disciplina de texto mínimo por seção; Corporativo e Home permitem mais densidade textual, também de forma consistente com seus próprios documentos de estratégia.

**Uso do grain:** aplicado uniformemente como textura de qualquer placeholder de imagem em todas as seis páginas com conteúdo visual (Home a Aniversários) — nenhuma página usa uma textura diferente ou omite o grain em um placeholder, o que teria sido uma quebra de consistência real. Este ponto passa integralmente.

**Ritmo dos espaços:** `DESIGN_SYSTEM.md` § Espaçamento já avisa que "ritmo idêntico entre todas as seções é... um dos sinais mais fortes de template genérico" — nenhuma página aplicou padding uniforme sem variação; a diferença de respiro entre Hero (tela cheia) e a seção seguinte varia página a página, como o sistema pede.

**Repetição de layouts:** ver §8 (tratado em profundidade lá, para não duplicar a análise).

---

## 6. Consistência da linguagem

**Headlines, subheadlines, CTAs, microcopy e FAQ** foram lidos lado a lado nas sete páginas (tabela completa de headings em §8). Três observações específicas de linguagem:

**Palavras repetidas / excesso de determinados termos:**
- **"Tudo..."** abre o headline da seção de reassurance factual (Estrutura/Infraestrutura) em cinco das seis páginas de segmento: Espaço ("Tudo já resolvido..."), Casamentos ("Tudo pensado..."), Corporativo ("Tudo já resolvido..."), Debutantes ("Tudo já resolvido..."), Aniversários ("Tudo pronto..."). Isolado, cada headline funciona; em conjunto, "Tudo + particípio" já é reconhecível como fórmula depois da terceira ocorrência. Ver §8 para a classificação de risco (Questionável) e §12 para a correção sugerida.
- **"Algumas respostas antes de/da [substantivo]"** abre a seção de FAQ em quatro páginas: Home ("...antes da sua visita"), Casamentos ("...antes do seu casamento"), Debutantes ("...antes da sua estreia"), Aniversários ("...antes da sua comemoração"). Corporativo escapa parcialmente ("Respostas objetivas antes do contato") mas ainda usa a mesma preposição-âncora. Ver §8.

**Frase que parece escrita por outra pessoa (ou por outro momento do projeto):** o headline de Casamentos "Os detalhes que ninguém esquece." merece atenção — não usa nenhuma palavra literal da lista proibida de `COPY_GUIDE.md` §6, mas carrega exatamente o mesmo sentimento que "inesquecível" (banido explicitamente) tentaria comunicar. É o único headline do site que se aproxima desse limite sem cruzá-lo tecnicamente. Não é um erro grave — passa o checklist item a item — mas é o ponto onde um revisor futuro, aplicando o checklist de forma mais mecânica, poderia ter deixado passar o espírito da regra enquanto cumpria a letra dela.

**Páginas que ficaram mais "vendedoras" que as demais:** nenhuma. Esta é uma das conquistas mais consistentes do conjunto — nenhuma das sete páginas desliza para tom de panfleto, mesmo Corporativo (a mais informacional) e Home (a mais orientada a conversão) mantêm o registro "fato antes de adjetivo" (`COPY_GUIDE.md` §4) sem exceção encontrada.

**Achado à parte, fora do copy visível mas ainda linguagem publicada:** as meta tags `og:description`/`twitter:description` de Home e Debutantes usam a palavra "Sofisticação" como substantivo solto — exatamente o uso que `COPY_GUIDE.md` §6 desaconselha ("dizer que algo é sofisticado é menos convincente que escrever de forma sofisticada"). O texto visível da página não comete esse erro em nenhuma das duas — é um deslize isolado às meta tags, que ainda assim aparecem publicamente (resultado de busca do Google, preview de compartilhamento). Ver §12.

**Nuance registrada, não um erro:** "único" aparece em "Um único endereço" (Espaço, Corporativo) e "exclusivo" aparece em "Estacionamento gratuito e exclusivo" (Espaço, Corporativo, Debutantes). `COPY_GUIDE.md` §6 proíbe essas palavras no sentido de superlativo vazio ("somos únicos/exclusivos", sem prova). O uso encontrado é literal/quantitativo ("um único endereço" = um só endereço; "estacionamento exclusivo" = reservado só para os convidados daquele evento, um fato verificável sobre o uso do estacionamento). Tecnicamente as mesmas palavras, semanticamente um uso diferente do que a regra pretende banir — registrado aqui para que um revisor futuro não "corrija" essas duas instâncias por correspondência mecânica de palavra-chave, sem checar o sentido.

---

## 7. Consistência emocional

**A emoção evolui corretamente, ou existe salto?** Não há salto real entre páginas adjacentes no menu — cada transição já foi desenhada com o par de origem/destino em mente (ver §2). O único "salto" perceptível é de **ritmo**, não de tom (Corporativo achatado → Debutantes com pico agudo, ver §2), e ele é intencional: cada página calibra a própria curva ao público que atende, não à página vizinha no menu.

| Página | Emoção dominante | Velocidade de decisão do público | Intensidade da curva | Objetivo psicológico |
|---|---|---|---|---|
| **Home** | Reconhecimento | Variável (4 públicos) | Baixa, plana | "Existe uma porta certa para mim aqui." |
| **Espaço** | Impacto silencioso → desejo | Média (ainda decidindo se vale a visita) | Crescente até o meio, depois estável | "Preciso ver isso de perto." |
| **Casamentos** | Projeção / romance contido | Lenta, deliberada (`WEDDING_PAGE_STRATEGY.md` §1 — demorar é saudável aqui) | Pico único agudo, depois queda | "Esse poderia ser o meu dia." |
| **Corporativo** | Alívio racional / controle | Rápida (`CORPORATE_PAGE_STRATEGY.md` §1 — decide rápido, sai se travar) | Achatada, sem pico | "Já sei que nada vai dar errado aqui." |
| **Debutantes** | Orgulho contido | Média (decisão dupla, mãe + filha) | Crescente até pico agudo único | "Isso é sobre ela, e está à altura." |
| **Aniversários** | Pertencimento | Rápida, sensível a preço (`ANNIVERSARIOS_PAGE_STRATEGY.md` §1) | Expansão cumulativa, sem pico | "Vai caber todo mundo, do jeito certo." |
| **Contato** | Praticidade / clareza | Já decidiu | Nenhuma (neutra) | "Sei exatamente como falar com eles agora." |

**Risco de urgência artificial (item que atravessa três documentos diferentes ao longo do projeto):** o CTA "Fale agora e garanta sua data", previsto no `WIREFRAME.md` original para Aniversários, foi sinalizado como problema em `SITE_NARRATIVE_ARCHITECTURE.md` §8, formalmente descartado em `ANNIVERSARIOS_PAGE_STRATEGY.md` §7 e no `ANNIVERSARIOS_COPY_GUIDE.md` §6. Verificação nesta auditoria: `grep` por "garanta sua data"/"fale agora" em `aniversarios/index.html` retorna zero ocorrências — o CTA implementado é "Agende uma visita" em todos os pontos de conversão da página. **Este é um risco que atravessou três documentos ao longo de meses e foi fechado corretamente na implementação final — vale registrar como um risco resolvido, não deixá-lo em aberto só porque a documentação histórica ainda o menciona como pendente.**

---

## 8. Repetições

### Aceitável (reuso de sistema, não de narrativa — princípio 8 de `SITE_NARRATIVE_ARCHITECTURE.md`)

- **Grid de 4 clusters temáticos** na seção de reassurance factual (Espaço § Estrutura, Corporativo § Infraestrutura, Debutantes § Estrutura, Aniversários § Estrutura) — mesmo componente de sistema, vocabulário e agrupamento próprios em cada página. É exatamente o tipo de reuso que o princípio 8 autoriza.
- **`.faq-item` (`<details>/<summary>`)** em Home, Casamentos, Corporativo, Debutantes, Aniversários — mesmo componente, perguntas específicas por página, sem overlap de conteúdo.
- **Itens de fato repetidos entre páginas** ("Climatização em todo o salão", "Mobiliário incluso", "Cozinha equipada", "Buffet parceiro (Combinatto Buffet)") em Corporativo/Debutantes/Aniversários — são o mesmo espaço físico real; repetir o fato é correto, porque não é um dispositivo narrativo, é a mesma informação verdadeira aparecendo onde é relevante.
- **CTA "Agende uma visita"** em Espaço, Casamentos, Debutantes, Aniversários — aprovado como padrão em `COPY_GUIDE.md` §9, correto que se repita: é o mesmo pedido de ação para públicos com o mesmo critério de decisão (a visita é o produto).
- **Headline "No Bairro Caxambú, ..."** abrindo a seção de Localização em Espaço e Corporativo — âncora factual de endereço, não recurso narrativo.
- **Grid assimétrico editorial** (sem lightbox) nas Galerias de Casamentos, Debutantes e Aniversários — mesma *técnica* de sistema (composição assimétrica em vez de grid uniforme, já preconizada em `DESIGN_SYSTEM.md` § Galeria), com spans de grid próprios e não-idênticos em cada página (verificado no CSS: nenhuma das três reaproveita literalmente os mesmos valores de `grid-column`/`grid-row` de outra).

### Questionável (funciona individualmente, mas começa a formar um padrão perceptível em conjunto)

- **"Tudo + particípio"** como abertura do headline de reassurance em 5 de 6 páginas de segmento (ver §6). Nenhuma ocorrência isolada é um problema; a quinta ocorrência já é reconhecível como fórmula.
- **"Algumas respostas antes de/da [X]"** como abertura do headline de FAQ em 4 de 5 páginas com FAQ (ver §6).
- **Headline "Os detalhes que ninguém esquece"** (Casamentos) — não repete outra página, mas repete o *sentimento* de uma palavra proibida em todo o resto do site (ver §6).

### Excesso (repetição literal, sem variação, que deveria ser corrigida)

- **"Tudo já resolvido, antes mesmo de você perguntar."** — headline **idêntico, palavra por palavra**, na seção de Estrutura de `/espaco/` e na seção de Infraestrutura de `/corporativo/`. Esta é a única repetição literal encontrada em toda a auditoria (headline completo, não só fórmula de abertura) e o único item desta lista que deveria mudar antes do lançamento (ver §12 para a correção proposta, de baixo risco).

---

## 9. Coerência da direção de arte

Nenhuma página contradiz nenhuma regra de `ART_DIRECTION.md` ou `DESIGN_SYSTEM.md` — verificado item a item nos seis relatórios de implementação e reconfirmado por grep nesta auditoria (zero ocorrências de balão/glitter/confete/HDR/drone/enquadramento holandês em qualquer página; zero fotos de pessoas olhando para a câmera documentadas; zero cor dourada dominante).

As recalibrações de proporção pessoas/arquitetura/detalhe por página (Espaço 0%, Corporativo ~0%, Casamentos ~25%, Debutantes variável por seção, Aniversários ~55%) são todas documentadas nos respectivos §5/§8 de estratégia, nunca inventadas ad-hoc — cada uma cita o princípio geral de `ART_DIRECTION.md` §1.8 e explica por que se afasta dele. Isso é exatamente o padrão que `DESIGN_SYSTEM.md` exige ("se uma decisão não está coberta, volte ao documento, decida o princípio, documente").

**Achado de coerência documental (não de código):** `SITE_NARRATIVE_ARCHITECTURE.md` §3 e §7 ainda registram os eixos de Debutantes e Aniversários como "em aberto" e "a decisão... é o primeiro passo de qualquer estratégia futura" — mas essa decisão já foi tomada e implementada (Estreia e Círculo, respectivamente, ambos com processo completo de descoberta documentado no Anexo A de cada estratégia). Isso não afeta nenhuma página em produção — afeta apenas quem consultar `SITE_NARRATIVE_ARCHITECTURE.md` isoladamente e concluir, incorretamente, que essas duas páginas ainda não têm eixo definido. Correção sugerida em §12, de risco mínimo (apenas atualizar tabelas e remover a marcação de pendência, sem reescrever nenhuma decisão).

**Achado de coerência entre páginas (retomando §5):** a divergência de estágio de placeholder (fotografia real temporária vs. blocos de CSS puro) entre as três primeiras páginas e as três mais recentes é, tecnicamente, uma decisão de *produção*, não de *direção de arte* — nenhuma das duas abordagens viola `ART_DIRECTION.md` (a segunda, inclusive, é mais conservadora: zero risco de imagem inadequada, ao custo de zero impressão visual por enquanto). Mas o efeito no visitante/cliente que navega o site inteiro hoje é uma sensação de "acabamento desigual" que uma auditoria de direção de arte precisa nomear, mesmo que a causa raiz não seja um erro de julgamento visual em nenhuma página individual.

---

## 10. Hierarquia do site

**Existe uma página mais forte do que deveria?** Debutantes é, hoje, a página com a curva de intensidade emocional mais desenhada e o dispositivo fotográfico mais elaborado do site (progressão de silêncio total → pico único → still-life, com curva de presença humana 0%→40%→80%→70%→0% documentada seção a seção). Isso não é um problema de hierarquia de produto — nenhuma página compete por atenção com outra, cada uma atende uma rota de entrada diferente —, mas é o ponto de maior sofisticação estrutural do conjunto, e vale que quem revisar o site saiba que essa é, propositalmente, a página de execução mais ambiciosa até aqui.

**Alguma ficou fraca?** Nenhuma no sentido de má execução. Contato é deliberadamente a mais "fraca" em impacto — e está correto que seja assim (ver §13). Se há uma página que hoje entrega menos do que as outras cinco de segmento entregam, não é por execução, é por estágio de conteúdo: Contato ainda não tem o mapa incorporado nem o horário de atendimento (ambos marcados `TODO` no próprio código) — isso é uma lacuna de conteúdo pendente de dado real do cliente, não uma fraqueza de projeto.

**Verificação direta das sete afirmações de papel:**

| Afirmação | Verificado? |
|---|---|
| A Home continua sendo o centro do projeto? | Sim — é a única página com 4 portas de entrada e a única que fala com todos os públicos ao mesmo tempo; nenhuma outra página tenta cumprir esse papel. |
| Espaço continua sustentando a marca? | Sim — continua sendo a única página cujo assunto explícito é o prédio em si, sem recorte por público; é a referência de arquitetura que as páginas de segmento citam e não reproduzem. |
| Casamentos continua sendo emocional? | Sim — a página de menor densidade de texto e maior proporção humana entre as páginas "vazias por padrão" (Espaço, Corporativo), mantendo o pico único que nenhuma outra página tenta replicar. |
| Corporativo continua racional? | Sim — a página de maior densidade textual e menor presença humana do site, exatamente como `CORPORATE_PAGE_STRATEGY.md` define. |
| Debutantes continua íntima? | Sim — nenhum vocabulário teatral literal (verificado por grep), a metáfora existe só como ordem de revelação, nunca como cenografia. |
| Aniversários continua coletiva? | Sim — a maior proporção de presença humana do site (~55%) e a única página cujo protagonista é plural desde o primeiro quadro. |
| Contato continua apenas operacional? | Sim — nenhuma seção editorial, nenhuma fotografia, nenhum eixo narrativo; é a página mais curta e mais direta do site, por decisão. |

Todas as sete afirmações se confirmam no código, não só na intenção documentada.

---

## 11. O que manter exatamente como está

1. **Zero depoimento fabricado, em nenhuma página.** O placeholder de depoimentos da Home usa `.testimonial--placeholder` com borda tracejada e o texto "Avaliação real em breve" — nenhum nome, nota ou citação inventados. Isso protege a credibilidade do site inteiro contra o risco mais fácil de cometer em fase de lançamento (fabricar prova social "só até ter a de verdade"). Manter até haver autorização real de cliente.
2. **Zero CTA de urgência artificial em qualquer página**, incluindo o caso que quase escapou (Aniversários, ver §7) — a disciplina de `ESTRATEGIA.md` §6 se sustentou nas seis páginas de segmento sem exceção.
3. **A separação de CSS por página, sem exceção** — nenhuma página carrega `landing.css` (arquivo hoje órfão, ver §12); cada uma tem sua própria folha (`home.css`, `espaco.css`, `casamentos.css`, `corporativo.css`, `debutantes.css`, `aniversarios.css`, `contato.css`), todas herdando `tokens/base/layout/components` em comum. Essa disciplina é o que permite que cada página tenha identidade visual própria sem duplicar CSS de sistema.
4. **A decisão de não afirmar nenhum dado não confirmado** (capacidade por formato, Wi-Fi, política de decoração temática, horário de atendimento) — toda página trata esses pontos com resposta conservadora e comentário `TODO` explícito, nunca com um número inventado "para a página parecer completa". Isso é consistente nas sete páginas, sem exceção encontrada.
5. **A recalibração documentada de proporção humana por página** (Espaço 0% → Aniversários ~55%) — nenhuma dessas recalibrações foi feita "no gosto" de quem implementou; todas citam o princípio geral e justificam o afastamento dele por escrito antes do código existir.
6. **O teste de "poderia ser copiado de outra página trocando só a foto"** aplicado com rigor real em Corporativo, Debutantes e Aniversários — as três páginas mais recentes citam explicitamente, no próprio código-comentário, o que fariam se copiassem a estrutura de uma página irmã, e por que não fizeram.

---

## 12. Melhorias pequenas

| # | Melhoria | Impacto esperado | Risco | Prioridade |
|---|---|---|---|---|
| 1 | Reescrever o headline da seção de Infraestrutura em **uma** das duas páginas que hoje compartilham "Tudo já resolvido, antes mesmo de você perguntar." (Espaço ou Corporativo) — manter o significado, variar a formulação. | Elimina a única repetição literal encontrada na auditoria. | Nenhum — é um headline isolado, sem dependência de wireframe/estrutura. | Alta |
| 2 | Adicionar "Estacionamento" como item de reassurance na seção Estrutura de `/aniversarios/` (cluster "Para o grupo", ao lado de Mobiliário/Climatização) — hoje é a única das quatro páginas de segmento com esse cluster que não menciona estacionamento em lugar nenhum. | Fecha a única lacuna real de paridade factual entre páginas-irmãs; o público de Aniversários é justamente o mais sensível a logística/preço. | Nenhum — é uma linha de lista, dado já confirmado (usado nas outras três páginas). | Alta |
| 3 | Remover a palavra "Sofisticação" das meta tags `og:description`/`twitter:description` de Home e Debutantes, substituindo por uma formulação factual (ex. "Casamentos, debutantes, corporativo e eventos sociais em Jundiaí — espaço premium no Bairro Caxambú"). | Fecha o único uso de uma palavra da lista proibida encontrado em qualquer texto publicado do site (ainda que em meta tag, não em copy visível). | Nenhum — meta tag não afeta layout nem SEO de palavra-chave já validado. | Média |
| 4 | Deletar o arquivo `assets/css/landing.css`, hoje órfão — nenhuma das sete páginas o referencia mais (confirmado por busca em todo o HTML do projeto). | Remove código morto, evita que uma futura página nova seja acidentalmente iniciada a partir de um arquivo obsoleto. | Nenhum — arquivo sem nenhuma referência ativa. | Baixa |
| 5 | Atualizar `SITE_NARRATIVE_ARCHITECTURE.md` §3 e §7 para refletir que os eixos de Debutantes (Estreia) e Aniversários (Círculo) já foram decididos — hoje o documento ainda os lista como "em aberto". | Evita que um colaborador futuro leia esse documento isoladamente e conclua, de forma incorreta, que a decisão de eixo ainda está pendente. | Nenhum — é uma atualização de tabela/status, não uma reabertura de decisão (a decisão já está tomada e implementada; o documento só precisa refletir isso). | Média |
| 6 | Revisar o headline "Os detalhes que ninguém esquece" (Casamentos) para uma formulação ancorada em fato observável, no mesmo espírito do resto da página (ex. algo como "Os gestos pequenos, guardados em foto" — apenas ilustrativo, a formulação final caberia a quem já escreve o copy do site). | Remove o único headline do site que carrega o sentimento de uma palavra proibida sem usar a palavra literalmente. | Baixo — é um headline isolado, sem dependência estrutural; qualquer nova formulação segue passar pelo checklist de `COPY_GUIDE.md` §12 antes de publicar. | Baixa |

Nenhuma das seis melhorias acima exige mudança de wireframe, de componente, de eixo narrativo ou de CTA — todas são ajustes de uma linha ou de um arquivo.

---

## 13. O que NÃO deve ser alterado

- **Ausência de vídeo em qualquer página.** `SPACE_PAGE_STRATEGY.md` §5 já registra explicitamente por que Edition Hotels usa vídeo em loop e o Speranza não replica isso: o site é estático e leve por decisão de stack (`DESIGN_SYSTEM.md` § Performance), e vídeo de banco de imagens quebraria a autenticidade que `ART_DIRECTION.md` exige. Um desenvolvedor novo pode estranhar a ausência de qualquer elemento de vídeo num site "premium" — a ausência é intencional, não uma lacuna técnica.
- **Silêncio editorial (Hero sem texto extra, still-life sem legenda longa, seções sem CTA em Casamentos/Debutantes/Corporativo/Aniversários).** Já registrado como princípio 6 de `SITE_NARRATIVE_ARCHITECTURE.md`: "espaço em branco, pausas sem texto... são decisões de design deliberadas, não lacunas a preencher com mais texto." Um revisor apressado pode ler uma seção sem CTA como "seção incompleta" — não é; o WhatsApp flutuante e o CTA do header já cobrem conversão a qualquer momento da rolagem, por decisão documentada em cada estratégia de página.
- **Poucos CTAs por seção (nunca "sopa de botões").** `COPY_GUIDE.md` §9: "nunca dois CTAs de peso igual lado a lado." Isso significa que várias seções do site (Hero, Tour, Formatos, Bastidores, Gesto) não têm nenhum botão visível — decisão de hierarquia, não omissão.
- **Fotografia dominante, mesmo em placeholder.** A regra de "arquitetura antes de decoração" (`SITE_NARRATIVE_ARCHITECTURE.md` princípio 3) já orienta que, mesmo em bloco de CSS provisório, nenhuma imagem futura deve competir com a estrutura do espaço por atenção — isso é uma regra para a sessão fotográfica futura, não uma falha do estado atual.
- **Layouts assimétricos nas galerias, em vez de grid uniforme.** `DESIGN_SYSTEM.md` § Galeria é explícito: "grid uniforme N×N" é o padrão que o sistema evita ativamente, mesmo custando mais trabalho de CSS por página (cada galeria tem seu próprio conjunto de `grid-column`/`grid-row`). Um desenvolvedor acostumado a bibliotecas de grid genéricas pode ser tentado a "simplificar" isso para um grid uniforme reutilizável — isso destruiria exatamente a leitura editorial que essas galerias existem para comunicar.
- **Ausência de animação de entrada elaborada.** `DESIGN_SYSTEM.md` § Motion e `SPACE_PAGE_STRATEGY.md` §5 (benchmark Apple) já registram, por escrito, a decisão de não replicar scroll-jacking nem parallax pesado — o motion do site é fade + slide de 16px, e nada além disso, por decisão de marca ("sofisticação pede discrição") tanto quanto por realismo de stack (HTML/CSS/JS vanilla, sem build step).
- **Nenhum CTA de urgência, mesmo quando uma data real estivesse escassa.** `ESTRATEGIA.md` §6 permite "urgência honesta" só como exceção rara e factual — o padrão do site inteiro é a ausência de urgência, e isso deve continuar sendo o padrão, não a exceção, mesmo sob pressão comercial de "converter mais rápido".

---

## 14. Parecer final

**Se este projeto fosse entregue hoje para um cliente real:**

| Etapa | Está pronto? | Justificativa |
|---|---|---|
| **Pronto para desenvolvimento** | Sim | As sete páginas seguem a mesma convenção de HTML/CSS/JS vanilla, mesma estrutura de tokens, mesmo padrão de componentização por página. Qualquer desenvolvedor que entre no projeto agora encontra um sistema coerente, documentado e sem ambiguidade de convenção. |
| **Pronto para fotografia** | Sim, e é a etapa mais urgente agora | Todas as sete páginas têm `TODO`s de fotografia detalhados (enquadramento, lente equivalente, DOF, proporção, intenção narrativa) por seção — a especificação está madura o bastante para orientar uma sessão fotográfica real sem decisão criativa pendente. A divergência de estágio visual entre páginas (§5, §9) é, na prática, o argumento mais forte para priorizar a sessão fotográfica logo — ela não só substitui placeholder por foto real, ela também **resolve sozinha** a sensação de acabamento desigual entre as três primeiras páginas e as três mais recentes, sem exigir nenhuma mudança de código. |
| **Pronto para conteúdo** | Quase — falta o menor mas mais concreto dos pendentes | A maioria dos dados pendentes é de baixo volume e já está isolada em comentários `TODO` (capacidade por formato/escala, Wi-Fi, política de decoração temática, horário de atendimento). O item que bloqueia mais diretamente uma etapa seguinte é específico: o mapa incorporado e o horário de atendimento de `/contato/` — sem eles, a página mais operacional do site ainda não cumpre sua própria função. |
| **Pronto para homologação** | Sim, com as seis melhorias de §12 aplicadas primeiro | Nenhuma delas é estrutural; todas são ajustes de uma linha/um arquivo. Depois de aplicadas, não há nenhum item de consistência de sistema, narrativa ou linguagem pendente nesta auditoria. |
| **Pronto para produção** | Condicional à fotografia | O código está pronto para receber imagens reais sem refatoração (todo placeholder já está no formato/proporção esperado pelo CSS de cada página) — mas "produção" de um site cuja proposta central é fotografia editorial de padrão de hotelaria boutique não deveria acontecer com metade das páginas ainda em bloco de textura. |
| **Pronto para lançamento** | Não ainda — e a razão é a mesma em toda a tabela acima | O gargalo do projeto inteiro, hoje, não é mais estratégico, narrativo ou de sistema — é fotográfico e de dois ou três dados reais do cliente (mapa, horário, capacidade). Todo o trabalho editorial (sete estratégias, sete wireframes, seis copy guides, sete implementações e esta auditoria) já removeu qualquer incerteza de *como* a página deve funcionar. O que falta não é mais trabalho de projeto — é fotografia real e confirmação de um punhado de fatos que só o cliente pode fornecer. |

**Resumo em uma frase:** o projeto está editorialmente terminado e consistente como produto único — o que resta antes do lançamento não é mais uma decisão de design, narrativa ou copy, é a sessão fotográfica profissional (o maior risco de execução já identificado desde `ESTRATEGIA.md` §5, no primeiro documento do projeto) e a confirmação de um pequeno conjunto de dados factuais ainda pendentes com o cliente.

---

**Este documento não substitui nenhuma estratégia, wireframe ou copy guide já aprovado — ele confirma que, lidos em conjunto, os sete já funcionam como um produto único, e localiza com precisão os poucos pontos que ainda não.**
