// Comportamento do Hero da Home: o header transparente (.site-header--overlay) vira
// sólido assim que o usuário rola além da altura do próprio header, e o indicador de
// rolagem avança uma tela.
//
// O estado do header é decidido por uma sentinela de 1px posicionada à altura do header
// (não no topo do Hero) — enquanto ela estiver na viewport, o header fica transparente;
// assim que ela sai (usuário rolou mais que a altura do header), ele vira sólido. Isso
// independe da altura total do Hero, que varia com o tamanho da tela e o nº de linhas
// da headline.

export function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const header = document.querySelector("[data-header]");
  const sentinel = hero.querySelector("[data-header-sentinel]");
  if (header && sentinel) {
    const observer = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
  }

  const scrollCue = hero.querySelector("[data-scroll-cue]");
  scrollCue?.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
  });
}
