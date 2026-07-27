// Estado de scroll do header (todas as páginas) + comportamento específico do Hero
// da Home (indicador de rolagem).
//
// Na Home, o header transparente (.site-header--overlay) vira vidro fosco assim que
// o usuário rola além da altura do próprio header — decidido por uma sentinela de 1px
// posicionada à altura do header (não no topo do Hero): enquanto ela estiver na
// viewport, o header fica transparente; assim que ela sai, ele ganha o fundo
// translúcido+blur (.is-scrolled, ver layout.css). Isso independe da altura total do
// Hero, que varia com o tamanho da tela e o nº de linhas da headline.
//
// Nas páginas internas não há sentinela (o header já nasce sólido, sem Hero por trás
// para justificar transparência) — o mesmo .is-scrolled é então decidido por um
// limiar simples de scrollY, só para o header ganhar o vidro fosco ao rolar.
//
// [data-header-sentinel] e [data-scroll-cue] não existem em nenhuma página
// construída hoje — mantidos de propósito como scaffold para um Hero em tela
// cheia futuro, não são ramos mortos por descuido (ver docs/PROJECT_AUDIT.md
// § Dívida técnica). Se um novo Hero desse tipo nunca vier a existir, remover
// os dois blocos correspondentes abaixo.

export function initHero() {
  const header = document.querySelector("[data-header]");
  if (header) {
    const sentinel = document.querySelector("[data-header-sentinel]");
    if (sentinel) {
      const observer = new IntersectionObserver(
        ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(sentinel);
    } else {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  const hero = document.querySelector(".hero");
  if (!hero) return;

  const scrollCue = hero.querySelector("[data-scroll-cue]");
  scrollCue?.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
  });
}
