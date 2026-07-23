# Speranza Eventos — Documento de Estratégia Digital

**Status:** Base para aprovação antes do início do desenvolvimento
**Escopo:** Site institucional (HTML5 + CSS3 + JS vanilla, hospedado na Railway)
**Premissas assumidas:** salão multi-segmento (casamentos, debutantes, corporativo, eventos sociais diversos), posicionamento premium acessível, identidade visual parcial (logo existente, sem banco de fotos profissional), operação em cidade do interior.

---

## 1. Objetivo do site

O site **não é um cartão de visitas — é uma máquina de qualificar e converter contato em conversa no WhatsApp**. Tudo abaixo se subordina a isso.

**Objetivo primário:** converter visitante em conversa iniciada no WhatsApp com contexto (a pessoa já chega sabendo o que quer perguntar, porque o site fez o trabalho de pré-venda).

**Objetivos secundários:**
- Construir percepção de padrão premium *antes* do primeiro contato humano — em cidade do interior, a reputação já circula boca a boca; o site precisa **confirmar** essa reputação, não construí-la do zero.
- Servir como material de decisão que o cliente compartilha (encaminha o link do site no grupo de WhatsApp da família/comitê de casamento) — isso significa que o site também precisa "vender sozinho", sem um vendedor por perto.
- Segmentar a comunicação por tipo de evento, já que uma noiva, uma mãe de debutante e um RH de empresa têm gatilhos de decisão completamente diferentes.
- Reduzir perguntas repetitivas que hoje provavelmente sobrecarregam o WhatsApp (capacidade, estacionamento, se o buffet é próprio) — o site filtra e qualifica antes do contato.

**Métricas de sucesso (KPIs):**
- Cliques em botões de WhatsApp por seção (não só total — *qual seção* gera contato)
- Taxa de conversão mobile vs. desktop (mobile deve dominar)
- Scroll depth até a seção de galeria/depoimentos
- Tempo até o primeiro clique de CTA

---

## 2. Público-alvo

O site atende **quatro públicos com jornadas de decisão diferentes**, mas todos locais — isso é a variável mais importante: não estamos competindo por atenção nacional, estamos confirmando confiança dentro de uma comunidade onde reputação viaja rápido.

| Persona | Quem decide | Gatilho emocional | O que precisa ver primeiro |
|---|---|---|---|
| **Noivos** | Geralmente a noiva lidera a pesquisa, decisão a dois | Sonho, identidade, "combina comigo" | Fotos do espaço decorado, atmosfera, depoimentos de outros casamentos |
| **Família de debutante** | Decisão compartilhada mãe + filha, orçamento definido pelos pais | Elegância sem exagero, orgulho | Ambiente sofisticado mas acolhedor, exemplos de festas anteriores |
| **Corporativo (RH/eventos)** | Decisão racional, muitas vezes sozinha | Praticidade, confiabilidade, previsibilidade | Capacidade, infraestrutura, estacionamento, facilidade de orçar |
| **Social diverso** (aniversários, formaturas, bodas) | Decisão rápida, mais sensível a preço | Custo-benefício, proximidade | Preço/enquadramento de valor, localização, agilidade de resposta |

**Comportamento comum a todos:**
- Descoberta via Google ("salão de festas [cidade]"), Instagram, indicação de fornecedor parceiro (buffet, decoração, cerimonialista) ou grupo de WhatsApp
- **Mobile é o dispositivo padrão de pesquisa** — não uma opção, a regra
- Decisão em cidade pequena/média é fortemente influenciada por "quem já fez evento lá" — depoimentos com nome real pesam mais do que em uma capital
- Não estão comparando com o Brasil inteiro — estão comparando com os 2-3 outros salões da região e com a alternativa de "ir até a capital mais próxima"

---

## 3. Posicionamento

### Território de marca
O nome **Speranza** (esperança, em italiano) já carrega uma narrativa pronta: início, promessa, um capítulo novo. Isso conecta organicamente com os três eixos do negócio — casamento (novo capítulo a dois), debutante (passagem para a vida adulta), evento corporativo (novo negócio, nova conquista). Recomendo que essa palavra seja usada com intenção no copy, não só como nome — é o fio narrativo que amarra públicos tão diferentes sob uma única marca coerente.

### Declaração de posicionamento
> *Speranza Eventos é o salão que traz a sofisticação de um espaço de grande cidade para [cidade], sem o preço nem a frieza de um lugar inacessível — a elegância que a sua história merece, sem sair de casa.*

### Como isso se traduz em decisões práticas
- **Premium acessível** significa: visual sofisticado, tom de voz caloroso (não corporativo, não distante), preço comunicado como investimento justo — não escondido, não gritado.
- **Não competir por "o mais barato"** nem por "o mais luxuoso do estado" — o território é "o melhor custo-benefício em elegância que existe sem sair da região".
- **Tom de voz:** direto, caloroso, em português natural ("você", não "V.Sa."), evitando clichês de convite de casamento batido ("seu sonho se realiza aqui") em favor de linguagem mais contemporânea e confiante.
- Diferenciação real não é contra outras capitais — é contra **salões informais/chácaras da própria região** que competem por preço e contra o hábito de "casar/formar fora da cidade". O argumento central do site é: *você não precisa sair daqui para ter algo à altura do que sonhou.*

---

## 4. Arquitetura da página

Recomendo uma **home one-page densa em conversão** (reduz fricção, natural para mobile, permite CTA de WhatsApp contextual a cada rolagem) combinada com **páginas leves dedicadas por tipo de evento**, para capturar buscas específicas no Google ("salão para casamento em [cidade]", "espaço para evento corporativo em [cidade]") sem depender de tráfego pago. Tudo estático, compatível com HTML/CSS/JS vanilla e hospedagem simples na Railway.

**Mapa do site:**
```
/                       → Home (conversão principal, one-page com âncoras)
/casamentos             → Landing dedicada (SEO + copy específico)
/debutantes             → Landing dedicada
/eventos-corporativos   → Landing dedicada
/eventos-sociais        → Landing dedicada (aniversários, formaturas, bodas)
```
Cada landing herda o mesmo header/footer/WhatsApp flutuante, muda apenas hero, copy e mensagem pré-preenchida do WhatsApp.

**Estrutura da Home (seção a seção):**

1. **Hero** — headline de posicionamento + subheadline + CTA primário "Fale no WhatsApp" + CTA secundário "Conheça os espaços"
2. **Barra de confiança** — indicadores rápidos (anos de mercado, nº de eventos realizados, avaliação no Google) logo abaixo do hero, sem precisar rolar
3. **Sobre o Speranza** — narrativa curta de posicionamento + o que torna o espaço diferente
4. **Diferenciais** — grid de ícones (estrutura, estacionamento, equipe própria, o que estiver incluso de fato — não inventar diferenciais genéricos)
5. **Tipos de evento** — 4 cards (Casamentos / Debutantes / Corporativo / Social), cada um levando à landing correspondente, com CTA de WhatsApp já contextualizado
6. **Galeria/Ambientes** — curadoria do que existe hoje, mesmo que poucas fotos; qualidade > quantidade (ver seção 5)
7. **Como funciona** — 3-4 passos simples (Contato → Visita → Personalização → Seu evento) — reduz a ansiedade de "não sei como começar"
8. **Depoimentos** — nome real + tipo de evento (peso alto em cidade pequena)
9. **FAQ** — objeções recorrentes: capacidade, estacionamento, buffet próprio ou terceirizado, datas, política de visita
10. **CTA final + Contato** — bloco de conversão forte, endereço, mapa, horário de atendimento, WhatsApp
11. **Footer** — redes sociais, endereço, links institucionais

**Elemento persistente em todas as páginas:** botão de WhatsApp flutuante (fixo, mobile e desktop) + menu com CTA no header.

---

## 5. Direção visual

Como ainda não existe banco de fotos profissional, a direção visual precisa **funcionar sem depender de fotografia forte no lançamento**, e ser desenhada para incorporar fotos reais assim que existirem, sem redesenho.

- **Paleta:** base neutra sofisticada (off-white/creme) + uma cor de apoio profunda e autoral — sugestão: verde oliva escuro, vinho ou terracota (evitar o "dourado + branco" genérico de salão de festas, que já é clichê saturado no segmento). Dourado/latão pode aparecer como **acento pontual** (bordas finas, ícones), nunca como cor dominante.
- **Tipografia:** serifada elegante para títulos (transmite sofisticação atemporal) + sans-serif limpa para corpo de texto (legibilidade em mobile). Evitar fontes script/cursivas — são o padrão visual de convite de casamento genérico e enfraquecem a percepção premium.
- **Fotografia — recomendação forte:** antes do lançamento, investir em **uma sessão fotográfica profissional mínima** do espaço vazio decorado e de detalhes (still-life de talheres, iluminação, arranjos). Um site "premium" com fotos de banco de imagens genéricas quebra a credibilidade que o design está tentando construir — esse é o maior risco do projeto hoje. Enquanto isso não existe, prefira texturas/padrões elegantes e minimalistas a fotos de stock impessoais.
- **Iconografia:** line icons finos, minimalistas, em tom escuro ou dourado sobre fundo claro.
- **Espaço em branco:** generoso. Luxo se comunica por respiro visual, não por densidade de informação.
- **Motion:** sutil — fade/slide leve ao rolar (via `IntersectionObserver`), nada chamativo. Sofisticação pede discrição, não efeitos.

---

## 6. Estratégia de conversão

- **WhatsApp como canal único de conversão** — usar links `wa.me` com **mensagem pré-preenchida contextual** por seção/tipo de evento (ex: clique em "Casamentos" já abre "Olá! Gostaria de saber mais sobre o Speranza para o meu casamento.").
- **CTA em múltiplos pontos** da rolagem (hero, meio, fim) — não depender de um único botão no topo.
- **Zero fricção de formulário:** nenhum formulário longo obrigatório. Se existir formulário, é curto e opcional — o caminho principal é sempre o WhatsApp direto.
- **Prova social próxima aos CTAs:** depoimentos e números de eventos realizados posicionados perto dos botões de contato, não isolados em uma seção distante.
- **CTA intermediário para quem não está pronto para fechar:** "Agende uma visita" como ponte entre "só olhando" e "já decidido" — cobre o público que ainda está em fase de pesquisa.
- **Urgência honesta, se aplicável:** ex. "agenda 2027 com poucas datas disponíveis" — apenas se for um fato real; nunca escassez falsa, isso destrói a confiança que o posicionamento premium depende.
- **Rastreamento de cliques por seção** via evento JS simples, para medir qual parte do site realmente gera conversa (mesmo em stack vanilla isso é trivial de implementar).
- **SEO local:** Google Meu Negócio conectado, marcação schema.org (`LocalBusiness`/`EventVenue`), NAP (nome/endereço/telefone) consistente entre site, Google e redes sociais.

---

## 7. Recomendações de UX

- **Mobile-first não é opcional** — a maioria do tráfego local de busca por salão de eventos acontece em celular.
- **Performance:** imagens otimizadas (WebP, lazy loading nativo `loading="lazy"`), já que o stack é estático e a Railway serve isso com facilidade — meta de LCP abaixo de 2.5s. Testar também em conexões mais lentas, comuns fora de grandes centros.
- **Navegação simples:** menu hambúrguer no mobile, rolagem suave entre âncoras (`scroll-behavior: smooth`), sem mega menu ou hierarquia complexa.
- **Informação prática visível sem esforço:** endereço, capacidade e região atendida devem aparecer cedo — o público local decide rápido e não quer garimpar isso.
- **Galeria com lightbox leve**, em JS vanilla, sem dependência de biblioteca pesada.
- **Depoimentos com nome real e tipo de evento** — em cidade pequena, isso tem peso de prova social muito maior do que em uma capital.
- **Nada de pop-up agressivo** (chat automático invasivo, cupom piscando) — quebra a percepção premium que o resto do site constrói.
- **Acessibilidade mínima:** contraste AA, `alt` em todas as imagens, área de toque de botões ≥44px, labels em qualquer campo de formulário.
- **Estados de carregamento sutis** — nunca tela branca enquanto algo carrega.

---

## Próximos passos sugeridos
1. Validar/ajustar as premissas assumidas neste documento (nome da cidade, diferenciais reais do espaço, se há depoimentos/fotos disponíveis hoje).
2. Definir a paleta de cor de apoio (verde oliva / vinho / terracota) e validar com a marca existente.
3. Priorizar a sessão fotográfica profissional — é o maior risco de execução do projeto.
4. Só então avançar para wireframe/HTML.
