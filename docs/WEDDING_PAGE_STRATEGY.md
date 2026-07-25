# Speranza Eventos — Estratégia da Página "Casamentos"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Define o *porquê* da página; [WEDDING_PAGE_WIREFRAME.md](WEDDING_PAGE_WIREFRAME.md) define o *o quê* e o *como*, seção a seção.
**Base:** [ESTRATEGIA.md](ESTRATEGIA.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [COPY_GUIDE.md](COPY_GUIDE.md), [ART_DIRECTION.md](ART_DIRECTION.md), [SPACE_PAGE_STRATEGY.md](SPACE_PAGE_STRATEGY.md) e [SPACE_PAGE_WIREFRAME.md](SPACE_PAGE_WIREFRAME.md) — a Home e `/espaco/` já fixaram a linguagem visual do site; este documento não a redefine, aplica a um público e um dia específicos.
**Teste de qualquer decisão nesta página:** *isso aumenta a projeção mental da noiva?* Se a resposta for não, a decisão é descartada — não importa quão bonita, comercial ou "completa" pareça.

---

## 1. Papel da página dentro do site

`/casamentos/` não vende o salão — vende **a possibilidade de um dia**. A pergunta que a página responde não é "o Speranza serve para o meu casamento?" (isso já foi respondido em `/espaco/`, se a noiva chegou até aqui via essa rota) — é **"eu me vejo casando aqui?"**. Isso muda o critério de sucesso: o objetivo não é conversão, é projeção. Orçamento, ficha técnica e agendamento existem na página, mas em papel de apoio — nunca de protagonista.

Isso cria uma tensão deliberada com os KPIs gerais do site (`ESTRATEGIA.md` §1 lista "tempo até o primeiro clique de CTA" como métrica de sucesso). Nesta página, especificamente, um tempo de leitura mais longo antes do clique não é sinal de fricção — é sinal de que a projeção está funcionando. Não é uma página para otimizar por velocidade de conversão; é a página do site em que "demorar para clicar" pode ser o comportamento saudável.

## 2. Diferença entre Home, Espaço e Casamentos

| | Home | Espaço | Casamentos |
|---|---|---|---|
| **Fala com** | Quatro públicos ao mesmo tempo | Qualquer pessoa querendo ver o lugar | A noiva/o casal, especificamente |
| **Vende** | O Speranza como marca | O prédio, a arquitetura | Um dia — o casamento dela |
| **Voz visual** | Editorial, mas ainda institucional | Hotelaria boutique — "showreel" do espaço | Revista de casamento real — fotoensaio, não tour |
| **Estrutura organizadora** | Seções de conversão (tipos de evento, prova social) | Ambientes (sala por sala) | Momentos de um dia (cerimônia → festa → detalhes) |
| **Termina com o visitante pensando** | "Isso é para mim" (qual segmento) | "Quero conhecer isso pessoalmente" | "Esse poderia ser o meu dia" |

A confusão mais fácil de cometer é repetir `/espaco/` com sotaque de noiva — um tour de ambientes com fotos de vestido de noiva no meio. Isso falha porque organiza a página pela **arquitetura** (sala por sala), quando aqui a organização certa é pelo **tempo** (do início da cerimônia ao fim da festa). O mesmo camarim que em `/espaco/` é "ambiente 03 do tour" aqui é "o momento antes do sim" — mesmo espaço físico, papel narrativo diferente.

## 3. O que a página nunca pode parecer

- **Landing page de buffet/salão de festas:** sem grade de "diferenciais" com ícone, sem lista de pacotes, sem tom de venda. O tell mais comum desse gênero é abrir com informação prática (capacidade, pacotes, preço) antes de qualquer imagem — esta página faz exatamente o oposto: a primeira informação prática só chega na Seção 6 (Estrutura para Casamentos), depois de cinco seções de fotoensaio.
- **Página de hotel (repetição de `/espaco/`):** sem tour ambiente-a-ambiente. Se uma seção poderia ser copiada e colada em `/espaco/` sem reescrever uma palavra, ela está errada aqui.
- **Site de casamento genérico:** sem nenhum dos clichês listados em `COPY_GUIDE.md` §6, e especificamente proibidas nesta página as frases *"o grande dia"*, *"conto de fadas"*, *"sim inesquecível"*, *"amor eterno"*, *"realize seu sonho"* — mesmo que nenhuma delas apareça literalmente em `COPY_GUIDE.md`, elas violam o mesmo princípio (adjetivo vazio no lugar de fato concreto) e ficam proibidas aqui por extensão explícita da mesma regra.

## 4. Jornada emocional completa

| # | Seção | Estado emocional | O que precisa estar verdadeiro na tela |
|---|---|---|---|
| 1 | Hero | Calma, abertura — "isso poderia ser o meu casamento" | Uma imagem, quase nenhum texto — o mesmo silêncio do Hero de `/espaco/`, mas aqui povoado (ainda que discretamente) por um instante humano real, não só arquitetura vazia. |
| 2 | Cerimônia | Ápice de suspensão — "eu me vejo caminhando até aqui" | O ponto mais alto da curva emocional da página inteira. |
| 3 | Recepção | Alívio caloroso — "a festa depois do sim" | Mudança de registro: da contenção da cerimônia para o calor da festa. |
| 4 | Momentos | Intimidade / reconhecimento — "são os pequenos gestos que eu vou lembrar" | Ritmo mais lento, quadros menores, quase sem texto. |
| 5 | Bastidores | Confiança / segredo compartilhado — "cuidam até do que ninguém vê" | Um ambiente antes só mostrado como "estrutura" (o camarim) reaparece como cena íntima. |
| 6 | Estrutura para Casamentos | Alívio racional — "tudo que eu ia perguntar já está resolvido" | A mente prática, em silêncio desde a Seção 2, finalmente recebe sua reassurance. |
| 7 | Galeria | Confirmação por abundância — "isso não foi sorte de uma foto boa, é assim sempre" | Volume visual maior que qualquer seção anterior — a prova de consistência. |
| 8 | FAQ | Fechamento de dúvida | As últimas perguntas práticas, respondidas sem fricção. |
| 9 | CTA Final | Convite calmo — "quero conversar sobre o meu dia" | Sem urgência, sem venda — um convite direto. |

## 5. Narrativa completa e storytelling

**Dispositivo central:** a página é editada como o **fotoensaio de um casamento real que aconteceu no Speranza** — não como um tour do prédio, não como uma lista de seções. O leitor deve ter a sensação de estar folheando o álbum/reportagem de um dia específico, do início da cerimônia ao fim da festa, com uma pausa para os bastidores no meio — exatamente como uma revista de casamento organiza um editorial fotográfico, nunca como um catálogo de ambientes.

Isso resolve, de saída, a diferença estrutural com `/espaco/` (§2): lá, a ordem é espacial (ambiente por ambiente); aqui, a ordem é temporal-emocional (momento por momento de um dia). O camarim, a área externa e o salão aparecem nas duas páginas — o que muda é a lente: em `/espaco/` eles são "ambientes do prédio"; aqui são "cenas do dia".

**Por que Bastidores vem depois de Momentos, não antes da Cerimônia (ordem cronológica real):** cronologicamente, a noiva se arruma antes da cerimônia. Editorialmente, revelar os bastidores *depois* dos picos emocionais (Cerimônia, Recepção, Momentos) funciona melhor — é o mesmo princípio de "acesso exclusivo depois do espetáculo" que revistas de casamento usam (o grande editorial fotográfico vem primeiro, o "making of" é a surpresa íntima depois). Abrir com bastidores adiantaria a intimidade antes de ganhar o direito a ela.

## 6. Ritmo

A alternância entre seções densas em imagem (Cerimônia, Recepção, Galeria) e seções mais quietas (Momentos, Bastidores, Estrutura, FAQ) segue o mesmo mecanismo já estabelecido em `SPACE_PAGE_STRATEGY.md` §3 — nunca duas seções do mesmo peso visual em sequência. A diferença aqui é onde fica o pico: em `/espaco/` o pico é a Área Externa (meio do tour); aqui são **dois picos** — Cerimônia (o mais alto de toda a página) e Recepção (o segundo) — com Momentos e Bastidores deliberadamente menores em peso visual (quadros pequenos, silêncio), para não competir com os dois picos. A Galeria, perto do fim, é um terceiro momento denso, mas em registro de **abundância** (muitas fotos pequenas), não de **impacto** (uma foto grande) — a diferença entre "aqui está o momento" (Cerimônia) e "aqui está a prova de que isso acontece sempre" (Galeria).

Duas seções grandes lado a lado (Cerimônia → Recepção) são, por si só, um risco de ritmo — a mitigação não é de conteúdo, é de escala: Recepção precisa ler visivelmente menor que Cerimônia mesmo sendo, as duas, "seções de imagem grande" (ver `WEDDING_PAGE_WIREFRAME.md`, onde essa diferença de escala já é aplicada explicitamente).

## 7. Hierarquia

A hierarquia desta página tem **um único pico absoluto** (Cerimônia) — diferente de `/espaco/`, cuja Área Externa divide o protagonismo com o Salão Principal na abertura do Tour. Aqui, nenhuma outra seção pode se aproximar da escala de Cerimônia: Recepção é claramente secundária (uma foto, não uma dupla de página), Momentos e Bastidores são deliberadamente pequenos, Estrutura/FAQ/CTA são tipográficos por completo. Essa hierarquia de pico único existe porque a página tem um clímax emocional real (o momento do "sim") — espalhar peso visual igual por várias seções diluiria exatamente o instante que a página existe para amplificar.

## 8. Uso de fotografia e direção de arte específica

Esta é a única página do site onde a proporção geral de `ART_DIRECTION.md` §1.8 (60% arquitetura / 30% detalhe / até 10% pessoas) muda deliberadamente — porque esta é a única página cujo assunto explícito é um dia vivido por pessoas, não um espaço. Proporção recalibrada só para `/casamentos/`: **~40% ambiente/cerimônia (vazio ou em preparação), 35% detalhe, 25% presença humana candid** — ainda minoritária, mas sensivelmente maior que em qualquer outra página.

As regras de captura de `ART_DIRECTION.md` (nunca olhar para a câmera, nunca pose de banco de imagens, luz natural, sem clichê) valem aqui **com ainda mais rigor**, porque esta é a página de maior risco de deslizar para o clichê de "site de casamento genérico" que o projeto inteiro evita. Nenhuma pose de "noivo girando noiva contra o pôr do sol", nenhum "atirar o buquê", nenhuma cena de saída com sparklers/confete, nenhum still de convite com fonte script sobreposta.

**Benchmark fotográfico específico de casamento:**

| Referência | O que ela faz | Adaptar | Não copiar |
|---|---|---|---|
| **José Villa** | Luz suave, filme, paleta contida, romantismo editorial minimalista | A luz macia e a paleta contida — a referência mais próxima da identidade Soft Sage já estabelecida | O romantismo pode escorregar para "sonhador" demais — qualquer legenda que soe com `COPY_GUIDE.md` §6 (mágico, sonho) está descartada mesmo que a foto seja linda |
| **KT Merry** | Casamentos de destino, luz luminosa, retrato ambientado sem pose direta para a câmera | O retrato ambientado (pessoa em cena, não posando para a lente) | A escala de casamento de destino/grandioso não combina com o posicionamento "premium acessível" do Speranza (`ESTRATEGIA.md` §3) — nunca sugerir opulência fora do alcance do público real |
| **Norman & Blake** | Documentário puro, reportagem, centenas de quadros candid por casamento | A autenticidade documental — momentos flagrados, nunca encenados para parecer candid | O volume: um álbum documental real tem centenas de fotos; esta página tem poucas, muito curadas — reportagem inteira não cabe nem deveria caber aqui |

(Ver `SPACE_PAGE_STRATEGY.md` §5 para o benchmark de Aman/Edition/AD/Apple já aplicado à identidade geral do site — vale integralmente aqui também; a tabela acima é específica de fotografia de casamento, um benchmark adicional, não substituto.)

## 9. Uso de pessoas

Só candid, nunca posadas, nunca olhando para a câmera (regra absoluta, `ART_DIRECTION.md` §1.6). Podem aparecer em Cerimônia, Recepção, Momentos e Bastidores — nunca no Hero como protagonista central (o Hero ainda abre em silêncio, ver wireframe). Nenhuma foto deve implicar um casal real específico sem autorização — mesmo princípio de nunca fabricar depoimento (`DESIGN_SYSTEM.md` § Depoimentos), estendido à fotografia: placeholders temporários nunca sugerem ser um casal real do Speranza. Quando pessoas aparecem, a regra prática é "flagrar, nunca dirigir" — se a cena parece ter sido montada para a câmera, ela já falhou, mesmo que tecnicamente ninguém esteja olhando para a lente.

## 10. Uso de detalhes

Alianças, convite/papelaria, tecido do vestido, flores, taças, mesa posta — usados principalmente em Momentos e Galeria, mesma lógica de still-life de `ART_DIRECTION.md` §1.8 e do que já foi feito em `SPACE_PAGE_WIREFRAME.md` § Seção 4. Detalhe, aqui, não é preenchimento visual — é a prova de que o cuidado do Speranza chega até o que a foto ampla não mostra (mesmo princípio já estabelecido para `/espaco/`, aplicado agora a objetos pessoais do casal, não a still-life de mesa genérico).

## 11. Quantidade de texto e silêncio editorial

Menos texto que qualquer outra página do site. Cerimônia, Recepção, Momentos e Bastidores funcionam com legenda mínima — uma palavra ou uma frase curta, nunca um parágrafo. `COPY_GUIDE.md` já pede frase curta e substantivo concreto em vez de adjetivo; aqui isso vira quase constrangimento verbal deliberado — se a foto já comunica, a legenda não repete. Texto mais completo (mas ainda em frases curtas) só aparece em Estrutura para Casamentos e FAQ, onde a função é informar, não evocar.

## 12. Regras para CTAs

Mesma regra de `SPACE_PAGE_STRATEGY.md` §4: **nenhum CTA desta página menciona orçamento.** O texto do botão é sempre "Agende uma visita" (padrão de `COPY_GUIDE.md` §9) — a mensagem de WhatsApp por trás dele já é contextual a casamento (`assets/js/config.js` já tem a chave `casamentos: "Olá! Gostaria de saber mais sobre o Speranza para o meu casamento."`, pronta para reaproveitar). Nenhum CTA aparece dentro de Cerimônia, Recepção, Momentos ou Bastidores — mesma exceção deliberada de `SPACE_PAGE_STRATEGY.md` §4 (o WhatsApp flutuante já cobre quem quiser agir); o primeiro CTA explícito no corpo reaparece ao final de Estrutura para Casamentos (discreto, um link) e o CTA grande fecha a página.

## 13. O que nunca mostrar (específico desta página)

Além de toda a lista de `ART_DIRECTION.md` §4 (balões, glitter, HDR, luz azul etc.), especificamente proibido aqui:
- Pose de "noivo carregando/girando a noiva contra o pôr do sol"
- Atirar o buquê, túnel de sparklers, canhão de confete na saída
- Still de convite/papelaria com fonte script sobreposta na própria imagem
- Qualquer "candid" obviamente encenado para parecer espontâneo
- Legendas com qualquer palavra de `COPY_GUIDE.md` §6 ou das cinco frases citadas em §3 acima

---

**Este documento e o `WEDDING_PAGE_WIREFRAME.md` juntos são a autoridade para a implementação de `/casamentos/`.** Nenhum HTML/CSS começa antes dos dois estarem aprovados.
