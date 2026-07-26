# Speranza Eventos — Estratégia da Página "Corporativo"

**Status:** blueprint aprovado antes de qualquer HTML/CSS. Define o *porquê* da página; [CORPORATE_PAGE_WIREFRAME.md](CORPORATE_PAGE_WIREFRAME.md) define o *o quê* e o *como*, seção a seção.
**Base:** [ESTRATEGIA.md](ESTRATEGIA.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [COPY_GUIDE.md](COPY_GUIDE.md), [ART_DIRECTION.md](ART_DIRECTION.md), [SPACE_PAGE_STRATEGY.md](SPACE_PAGE_STRATEGY.md)/[SPACE_PAGE_WIREFRAME.md](SPACE_PAGE_WIREFRAME.md), [WEDDING_PAGE_STRATEGY.md](WEDDING_PAGE_STRATEGY.md)/[WEDDING_PAGE_WIREFRAME.md](WEDDING_PAGE_WIREFRAME.md) — Home, `/espaco/` e `/casamentos/` já fixaram a linguagem visual e verbal do site; este documento não a redefine, aplica a um público e a um critério de decisão diferentes.
**Ponto de partida explícito:** `docs/REFACTOR_ROADMAP.md` §2.3 já registrou o risco de as três páginas de segmento ainda não construídas (Debutantes, Corporativo, Aniversários) nascerem como cópias do esqueleto de Casamentos sem reconsideração — e pede, no item 2.3 do backlog, que a metáfora estrutural de cada uma seja decidida **antes** do wireframe. Este documento é essa decisão, para Corporativo.
**Teste de qualquer decisão nesta página:** *isso reduz uma incerteza real de quem decide sozinho e vai justificar a escolha internamente, sem outro humano no meio do caminho?* Se a resposta for não — se a decisão existe só para "parecer bonita" ou para imitar o que a página de Casamentos já faz — ela é descartada.

---

## 1. Papel da página dentro do site

`/corporativo/` não vende um espaço decorado — vende **a garantia de que o evento vai acontecer exatamente como planejado**, num endereço que já está organizado antes de qualquer pergunta ser feita. A pergunta que a página responde não é "esse espaço é bonito?" (isso já foi respondido em `/espaco/`, se o visitante chegou por essa rota) — é **"o que pode dar errado aqui, e já está resolvido?"**.

Isso muda o critério de sucesso em relação a Casamentos e Debutantes. Lá, o objetivo é projeção emocional ("eu me vejo aqui"); aqui, o objetivo é **redução de risco percebido**. O RH ou gestor de eventos que abre esta página normalmente não decide sozinho por impulso — decide depois de comparar 2–3 opções e precisa **defender a escolha para alguém acima dele** (diretoria, financeiro). A página, portanto, não precisa conquistar — precisa **equipar** essa pessoa com os fatos que ela vai repetir em uma reunião interna. Uma página que só emociona e não informa falha nesse público tão quanto uma que só informa e soa fria falha nos outros três.

Isso também muda a curva de tempo-até-clique que `ESTRATEGIA.md` §1 usa como KPI geral do site. Em Casamentos, ler mais tempo antes de clicar é saudável (`WEDDING_PAGE_STRATEGY.md` §1). Aqui é o oposto: **o público corporativo pesquisa rápido e decide rápido** (`ESTRATEGIA.md` §2, "decisão racional, muitas vezes sozinha") — se a página demorar para entregar o fato que ele procura, ele fecha a aba e vai para o próximo resultado do Google. A página precisa ser bonita e ser rápida de escanear ao mesmo tempo — isso não é contradição, é o desafio específico desta página.

## 2. Diferença entre Home, Espaço, Casamentos e Corporativo

| | Home | Espaço | Casamentos | Corporativo |
|---|---|---|---|---|
| **Fala com** | Quatro públicos ao mesmo tempo | Qualquer pessoa querendo ver o lugar | A noiva/o casal, especificamente | Quem organiza o evento em nome de uma empresa |
| **Vende** | O Speranza como marca | O prédio, a arquitetura | Um dia — o casamento dela | Uma garantia — de que nada vai depender de improviso |
| **Voz visual** | Editorial, mas ainda institucional | Hotelaria boutique — "showreel" do espaço | Revista de casamento real — fotoensaio, não tour | Hotelaria boutique **em modo operação** — arquitetura pronta para o uso, não vazia por vazia |
| **Estrutura organizadora** | Seções de conversão (tipos de evento, prova social) | Ambientes (sala por sala) | Momentos de um dia (cerimônia → festa → detalhes) | Formatos de uso (o mesmo espaço reconfigurado para cada tipo de evento corporativo) |
| **Gatilho de decisão** | Reconhecimento ("isso é para mim") | Desejo de ver de perto | Projeção emocional | Redução de risco / previsibilidade |
| **Termina com o visitante pensando** | "Isso é para mim" (qual segmento) | "Quero conhecer isso pessoalmente" | "Esse poderia ser o meu dia" | "Já tenho o que preciso para levar essa proposta adiante" |

A confusão mais fácil de cometer aqui — e a que este documento existe para evitar — é uma de duas: (a) repetir `/espaco/` com crachá em vez de convite (um tour de ambientes idêntico, só trocando a legenda "camarim" por "sala de apoio"); ou (b) repetir `/casamentos/` num tom "profissional" (um fotoensaio de "um dia de evento corporativo", com pessoas de terno em vez de noivos). As duas falham pelo mesmo motivo: organizam a página por um eixo que não é o que este público usa para decidir. Casamentos organiza por **tempo** (um dia, do início ao fim). Espaço organiza por **espaço** (sala por sala). Corporativo organiza por **função** — o mesmo espaço físico, mostrado em diferentes configurações de uso (plenária, coquetel, treinamento, confraternização) — porque a pergunta real de quem decide por uma empresa não é "que horas é a cerimônia" nem "qual é a sala mais bonita", é **"esse espaço aguenta o formato específico do meu evento?"**.

## 3. O que a página nunca pode parecer

- **Landing page de buffet/salão de festas com verniz corporativo:** sem grade de "diferenciais" com ícone genérico, sem tom de vendedor ("solicite já seu orçamento sem compromisso!!"), sem urgência fabricada. O tell mais comum desse gênero — abrir com uma lista de itens antes de qualquer imagem que prove o espaço — é evitado com a mesma disciplina que `/casamentos/` usa contra o mesmo tell (`WEDDING_PAGE_STRATEGY.md` §3), mesmo que aqui os fatos cheguem mais cedo do que em Casamentos (ver §11).
- **Adaptação de `/casamentos/`:** nenhuma seção pode ser "a versão de terno" de uma seção do fotoensaio de casamento. Se uma seção poderia ser copiada de Casamentos trocando só as fotos, ela está errada aqui — o dispositivo estrutural (formatos de uso, não momentos de um dia) já impede isso por construção, mas vale como teste de sanidade seção a seção.
- **Página institucional B2B genérica:** sem "nossa empresa", sem "soluções corporativas", sem "sinergia" (proibidos em `COPY_GUIDE.md` §4 e §6, e ainda mais relevantes aqui — é exatamente o registro que este público já vê em todo site de fornecedor B2B do país e já aprendeu a ignorar). O Speranza continua "você", não "sua empresa": fala com a pessoa que decide, não com um CNPJ.
- **Clichê visual de estoque corporativo:** proibido explicitamente aqui (além de tudo que `ART_DIRECTION.md` §4 já veta): pessoas de terno apertando as mãos, sala de reunião genérica de banco de imagens (mesa oval, cadeiras giratórias, parede de vidro com logo fictício), apresentação em telão como imagem principal de qualquer seção, still de laptop aberto com gráfico de pizza na tela, aperto de mão em primeiro plano. Nenhuma dessas imagens seria específica do Speranza — poderiam ilustrar qualquer escritório do mundo, o oposto do padrão de especificidade que `COPY_GUIDE.md` §12 exige do texto e que se estende aqui à fotografia.
- **Texto de marketing vazio:** "excelência", "sinergia", "soluções sob medida", "parceiro estratégico" — nenhuma dessas frases sobrevive ao checklist de `COPY_GUIDE.md` §12 ("trocando só o nome Speranza, esse texto serviria para qualquer concorrente genérico?"). Aqui o antídoto é o mesmo de sempre: fato no lugar do adjetivo — "estacionamento para 80 carros" no lugar de "estrutura de ponta", "Wi-Fi em todos os ambientes" no lugar de "conectividade de excelência".

## 4. Jornada emocional completa

Diferente de Casamentos (que tem uma curva de subida emocional com um pico único), Corporativo tem uma curva **mais plana e mais rápida** — a emoção aqui não é ausência de sentimento, é a sensação específica de alívio de quem para de se preocupar com um problema. Cada seção resolve uma dúvida prática antes que ela precise ser perguntada.

| # | Seção | Estado emocional | O que precisa estar verdadeiro na tela |
|---|---|---|---|
| 1 | Hero | Competência silenciosa — "isso já está pronto para funcionar" | Uma imagem de arquitetura/preparação, sem pessoas, sem discurso — a mesma calma editorial do Hero de `/espaco/`, mas com um sinal sutil de "prestes a ser usado" (mesa arrumada, luz ligada, projeção pronta), não de sala vazia esquecida. |
| 2 | Abertura conceitual | Ancoragem rápida — "esse lugar tem escala e endereço reais" | O primeiro fato concreto (450m², localização, capacidade) chega **aqui**, muito mais cedo do que em Casamentos — este público decide rápido e a ancoragem factual precoce é o que sustenta a confiança, não a atrasa. |
| 3 | Formatos de evento | Reconhecimento de aplicabilidade — "isso serve exatamente para o meu tipo de evento" | O mesmo espaço mostrado reconfigurado para 4 formatos diferentes — a prova de flexibilidade sem depender de nenhuma imagem de pessoas em reunião. |
| 4 | Detalhe (precisão) | Confiança silenciosa — "prestam atenção no que garante que nada saia errado" | Pausa de ritmo: still-life de material/preparo — um cabo de energia organizado, uma tomada disponível, um copo d'água numa mesa arrumada — nunca decoração, sempre função. |
| 5 | Infraestrutura completa | Alívio racional — "tudo que eu ia perguntar já está resolvido" | A mente prática, que ficou represada durante a seção 3–4, finalmente recebe a ficha técnica reagrupada. |
| 6 | Como funciona (processo) | Clareza de próximo passo — "eu sei exatamente o que preciso fazer agora" | Passos objetivos e curtos — esta é a única página do site em que "como funciona" tem peso equivalente à reassurance de estrutura, porque o processo de orçamento corporativo (visita técnica, proposta formal) é mais formal que o das outras páginas. |
| 7 | Localização e acesso | Praticidade — "dá para chegar, dá para estacionar, dá para logisticamente acontecer" | Endereço, mapa, e o dado que mais importa a este público especificamente: estacionamento. |
| 8 | FAQ corporativo | Fechamento de dúvida administrativa | As perguntas que um financeiro/RH realmente faz — nota fiscal, forma de pagamento, capacidade por formato — respondidas sem fricção. |
| 9 | CTA final | Convite objetivo — "quero levar isso para dentro da empresa" | Sem urgência emocional — um convite direto, com canal de contato equivalente ao grau de formalidade que este público espera (ver §12). |

## 5. Narrativa completa e storytelling

**Dispositivo central: a página é organizada por formatos de uso, não por ambientes nem por um dia específico.** O mesmo espaço físico do Speranza aparece reconfigurado quatro vezes — como plenária/palestra, como coquetel de confraternização, como sala de treinamento, como cenário de lançamento de produto — e essa reconfiguração *é* o argumento central da página: **o Speranza não é um salão fixo que você adapta ao seu evento, é um espaço que já foi pensado para se adaptar ao seu formato.**

Isso resolve, de saída, a diferença estrutural com `/espaco/` e `/casamentos/` (§2): lá, a ordem é espacial (ambiente por ambiente) ou temporal (momento por momento de um dia); aqui, a ordem é **funcional** (formato por formato de uso). O salão principal aparece nas três páginas — o que muda é a lente: em `/espaco/` ele é "o ambiente principal do prédio"; em `/casamentos/` é "onde a festa acontece depois do sim"; aqui é "o mesmo espaço, montado de quatro formas diferentes, sem imprevisto em nenhuma delas".

**Por que a Abertura Conceitual entrega o fato cedo, ao contrário de Casamentos (que atrasa o número de propósito, `WEDDING_PAGE_STRATEGY.md` §1):** o público de Casamentos está numa jornada de descoberta emocional em que a antecipação tem valor. O público corporativo está numa jornada de **verificação** — ele já sabe, em termos gerais, o que precisa (capacidade X, estacionamento, som/imagem) e está conferindo se o Speranza atende. Atrasar esse fato não cria suspense, cria fricção. A sedução, nesta página, não vem da espera — vem da **precisão**: o fato certo, entregue rápido, numa composição editorial que ainda assim não parece uma ficha técnica solta.

**Por que "Como funciona" ganha uma seção própria aqui (diferente de Espaço e Casamentos, que tratam isso como reforço secundário):** o processo de contratação corporativa é objetivamente mais formal — envolve, tipicamente, uma visita técnica e uma proposta escrita que passa por aprovação interna do lado do cliente, não uma decisão de casal em uma conversa de WhatsApp. Dar um rosto claro a esse processo (Solicitação → Visita técnica → Proposta → Confirmação) reduz uma ansiedade real e específica deste público: "eu não sei como começar uma cotação séria com um fornecedor que não conheço".

**Por que a seção de Detalhe usa still-life de precisão em vez de still-life de mesa posta:** em `/espaco/` e `/casamentos/`, o still-life (louça, tecido, aliança) comunica cuidado afetivo. Aqui, o still-life comunica **cuidado operacional** — um cabo de energia organizado, uma tomada acessível ao lado de uma cadeira, luz natural entrando numa sala já arrumada. É o mesmo dispositivo de "pausa de ritmo com aproximação de câmera" (`SPACE_PAGE_STRATEGY.md` §3), mas o objeto fotografado muda de acordo com o que este público valoriza — controle, não romance.

## 6. Ritmo

A alternância entre seções densas em imagem (Hero, Formatos, Localização) e seções mais quietas/tipográficas (Abertura Conceitual, Infraestrutura, Como Funciona, FAQ) segue o mesmo mecanismo já estabelecido em `SPACE_PAGE_STRATEGY.md` §3 e reafirmado em `WEDDING_PAGE_STRATEGY.md` §6 — nunca duas seções do mesmo peso visual em sequência imediata.

A diferença de ritmo desta página em relação às duas anteriores: **não há um único pico visual dominante.** Em Espaço, o pico é a Área Externa; em Casamentos, é a Cerimônia. Aqui, o peso visual é **distribuído igualmente entre os 4 formatos da Seção 3** — de propósito, porque a mensagem central é "o espaço é igualmente capaz em qualquer configuração", e um pico único (por exemplo, dar mais destaque ao formato "plenária" que ao "coquetel") comunicaria hierarquia de importância entre formatos que não existe e não deveria existir. A ausência de um clímax único é, aqui, uma decisão de ritmo deliberada, não uma fraqueza — o equivalente visual de "somos consistentes", não "temos um momento de brilho".

## 7. Hierarquia

Diferente de Casamentos (hierarquia de pico único, `WEDDING_PAGE_STRATEGY.md` §7) e de Espaço (hierarquia decrescente ao longo do tour), a hierarquia de Corporativo é **de peso emocional achatado e peso informacional crescente**: as seções visuais (1, 3, 4, 7) têm peso visual comparável entre si — nenhuma tenta ser "a foto mais bonita da página" — enquanto a densidade de informação cresce estrategicamente até a Seção 5 (Infraestrutura), o ponto de maior concentração factual da página, antes de afrouxar de novo em Como Funciona/Localização/FAQ. Essa curva "achatada emocionalmente, crescente informacionalmente" é a assinatura estrutural desta página — o oposto de uma curva de clímax único, porque este público não está numa jornada de emoção crescente, está numa jornada de dúvidas sendo eliminadas uma a uma.

## 8. Uso de fotografia e direção de arte específica

Todas as regras de `ART_DIRECTION.md` valem integralmente — nenhuma exceção de técnica, cor ou composição é aberta aqui. O que muda é a **proporção de assunto** e o **grau de presença humana**, na direção oposta à recalibração feita em `WEDDING_PAGE_STRATEGY.md` §7.

Proporção recalibrada só para `/corporativo/`: **~70% arquitetura/ambiente (o espaço reconfigurado para cada formato), 30% detalhe de precisão, e presença humana tratada como exceção rara e não como categoria própria** — mais baixa que o mínimo geral do site (`ART_DIRECTION.md` §1.8, até 10%), porque **este é o gênero fotográfico mais suscetível ao clichê de banco de imagens corporativo genérico** (aperto de mão, gente sorrindo para a câmera numa "reunião de negócios" encenada). Onde Casamentos aumenta deliberadamente a presença humana (`WEDDING_PAGE_STRATEGY.md` §7, até 25%) porque o assunto da página é um dia vivido por pessoas, Corporativo faz o movimento inverso: o assunto da página é a **capacidade do espaço**, e pessoas em cena quase sempre atrapalham essa prova em vez de reforçá-la — uma sala "aparentemente cheia de gente" não prova nada sobre infraestrutura, só compete visualmente com ela.

**Regra prática:** se uma foto só funciona com gente posando, ela já não serve para esta página — a foto precisa provar sua tese (arquitetura, luz, preparo, formato) mesmo com o ambiente vazio.

**Benchmark fotográfico específico:** a referência mais próxima não é um hotel de lazer (Aman, Rosewood), é a linha de "meetings & events" desses mesmos grupos de hotelaria boutique — salas de reunião e auditórios fotografados com a mesma disciplina editorial de um quarto ou um restaurante: luz natural, mesa arrumada e vazia, projetor desligado mas visível, cadeiras alinhadas com pequena variação humana (uma puxada, não perfeitamente em fila) para não parecer still de catálogo de mobiliário. A diferença para a fotografia de lazer da mesma marca é só de assunto (sala de trabalho, não spa) — a linguagem de luz, contraste e composição é idêntica, porque a identidade do Speranza continua sendo uma só em qualquer página (`ART_DIRECTION.md`, preâmbulo).

## 9. Uso de pessoas

**Regra mais restritiva do que qualquer outra página do site.** Zero pessoas é o padrão em todas as seções, sem exceção obrigatória em nenhuma — diferente de Casamentos, que reserva 1–2 momentos candid como parte do gênero (fotoensaio de um dia vivido). Aqui, presença humana só é aceitável, no limite, como:

- Uma silhueta pequena e não-identificável ao fundo de um plano geral (mesma regra de escala do Hero de `/casamentos/`, `WEDDING_PAGE_WIREFRAME.md` § Hero) — nunca em primeiro plano, nunca posando, nunca olhando para a câmera.
- Um detalhe de mão em ação genuína e discreta (ajustando um projetor, servindo café) — nunca rosto, nunca pose.

**Proibido de forma absoluta e específica desta página**, além de toda a lista de `ART_DIRECTION.md` §4: aperto de mão, grupo posando em fileira "sorrindo para o fechamento do negócio", pessoa apontando para gráfico em tela/flip-chart, pessoa de terno andando pelo corredor em movimento encenado, qualquer cena que pareça still de banco de imagens vendida sob a palavra-chave "business meeting" ou "corporate event".

## 10. Uso de detalhes

Still-life de precisão — não still-life de mesa posta afetiva. Objetos permitidos: cabo de energia organizado, tomada disponível ao lado de assento, copo d'água sobre mesa arrumada, luz natural entrando por uma janela sobre uma superfície de trabalho limpa, textura de material (madeira, linho, metal escovado) do mobiliário do espaço. Objetivo: comunicar **atenção a detalhe operacional** (nada vai faltar, nada vai improvisar) — o equivalente funcional do still-life afetivo de `/espaco/` e `/casamentos/`, mas fotografando o que garante previsibilidade, não o que emociona.

## 11. Quantidade de texto e tom

Ao contrário de Casamentos (que reduz o texto ao mínimo absoluto, `WEDDING_PAGE_STRATEGY.md` §11), Corporativo permite — e exige — um pouco mais de densidade textual nas seções informacionais (Infraestrutura, Como Funciona, FAQ), porque a função dessas seções é literalmente informar uma decisão de compra racional. Isso não é licença para adjetivo: continua valendo integralmente `COPY_GUIDE.md` (fato antes de adjetivo, frase curta, "você", zero palavra da lista proibida). A diferença é de **onde** o texto aparece, não de quanto adorno ele carrega — nas seções visuais (Hero, Formatos, Detalhe), o texto continua mínimo, com a mesma disciplina de silêncio editorial das outras páginas; nas seções factuais, ele é mais completo porque a informação em si é o produto daquela seção.

## 12. Regras para CTAs

**Esta é a única página do site em que "Solicite uma proposta" é o CTA primário, não uma variação secundária.** `COPY_GUIDE.md` §9 já lista "Solicite uma proposta" no catálogo aprovado de CTAs — e `assets/js/config.js` já tem a chave `corporativo: "Olá! Gostaria de solicitar uma proposta para um evento corporativo no Speranza."`, pronta para uso. Isso é uma exceção deliberada e já documentada à regra geral de `SPACE_PAGE_STRATEGY.md` §4/`WEDDING_PAGE_STRATEGY.md` §12 ("nenhum CTA menciona orçamento") — aquela regra existe para proteger a premissa de que, em Espaço e Casamentos, a visita é o produto e o orçamento é consequência de uma conversa que ainda não aconteceu. Aqui a lógica se inverte: o público corporativo **já decidiu, antes de chegar ao site, que precisa de uma cotação formal** — pedir para ele "agendar uma visita" sem contexto de custo é, para este público específico, adicionar uma etapa, não remover fricção. "Agende uma visita técnica" continua existindo como CTA secundário (dentro do processo da Seção 6), mas nunca como o botão primário.

**CTA final com WhatsApp + telefone/e-mail lado a lado — única página do site com essa variação.** `WIREFRAME.md` § Corporativo já previa isso desde a primeira versão do mapa do site ("esse público às vezes prefere e-mail/telefone a WhatsApp"), e `docs/DESIGN_SYSTEM.md`/`assets/css/landing.css` já reservam a classe `.cta-final__channels` para essa variante — este documento confirma a decisão e a registra para que a implementação não pareça inconsistência com as outras páginas. Justificativa: um RH ou gestor de eventos frequentemente precisa registrar o contato formalmente (protocolo interno de cotação, e-mail para anexar a um processo de compras) — restringir o canal a WhatsApp exclui parte real deste público, algo que não acontece com noivos/famílias de debutante, cujo canal de decisão é quase sempre pessoal.

**Nenhuma seção visual (Hero, Formatos, Detalhe) carrega CTA próprio** — mesma exceção deliberada já estabelecida em `SPACE_PAGE_STRATEGY.md` §4 e `WEDDING_PAGE_STRATEGY.md` §12: o botão de WhatsApp flutuante e o CTA do header já cobrem quem quiser agir a qualquer momento da rolagem, sem fragmentar o ritmo editorial com um botão a cada formato mostrado. O primeiro CTA explícito no corpo da página aparece ao final da Seção 5 (Infraestrutura, um link discreto) e reaparece de forma mais completa ao final da Seção 6 (Como Funciona) — a página tem dois pontos de conversão no corpo, não um só, porque a jornada informacional é mais longa que a de Casamentos/Espaço.

## 13. O que nunca mostrar (específico desta página)

Além de toda a lista de `ART_DIRECTION.md` §4 (balões, glitter, HDR, luz azul, poses de banco de imagens etc.), especificamente proibido aqui:

- Aperto de mão em qualquer enquadramento, generico ou em destaque.
- Sala de reunião genérica de banco de imagens (mesa oval brilhante, parede de vidro corporativo, tela de TV com gráfico de pizza fictício) — se a cena não é claramente o Speranza, ela não entra, mesmo como placeholder (mesmo princípio de `ART_DIRECTION.md` §6).
- Apresentação em telão/projeção como imagem principal de qualquer seção — pode aparecer como elemento secundário dentro de uma foto de ambiente (ex. uma tela desligada, mas visível, num plano geral da sala de treinamento), nunca como o assunto central do enquadramento.
- Still de laptop com gráfico de crescimento na tela, caneta sobre contrato, aperto de mão sobre mesa com "apresentação" ao fundo — o vocabulário inteiro de banco de imagens "business success".
- Grupo de pessoas em fileira sorrindo para a câmera, mesmo em traje formal.
- Texto de marketing vazio: "excelência corporativa", "soluções sob medida", "parceiro estratégico do seu evento", "sinergia" — proibidos por extensão de `COPY_GUIDE.md` §6, mesmo não estando na lista original (o princípio — adjetivo abstrato sem prova concreta — é idêntico).

---

**Este documento e o `CORPORATE_PAGE_WIREFRAME.md` juntos são a autoridade para a implementação de `/corporativo/`.** Nenhum HTML/CSS começa antes dos dois estarem aprovados.
