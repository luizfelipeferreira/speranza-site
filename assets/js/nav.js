// Menu hambúrguer: toggle, aria-expanded, fecha no Escape e no clique fora.

export function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  // Fecha o menu automaticamente ao navegar para uma âncora da própria página.
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
}

// Dropdown desktop "Eventos" (disclosure, não menu/menuitem — ver WAI-ARIA
// Authoring Practices: menu/menuitem é para menus de aplicação, não navegação).
export function initNavDropdown() {
  const trigger = document.querySelector("[data-nav-dropdown-trigger]");
  const dropdown = document.querySelector("[data-nav-dropdown]");
  const item = trigger?.closest(".site-nav__item--dropdown");

  if (!trigger || !dropdown || !item) return;

  let closeTimer;
  // Marca se a abertura atual veio do hover — sem isso, o clique que confirma
  // o hover (mouseenter abre, depois o próprio clique chega) fecharia de novo
  // no mesmo gesto, porque o toggle veria "já aberto" e inverteria.
  let openedByHover = false;

  const close = () => {
    clearTimeout(closeTimer);
    openedByHover = false;
    trigger.setAttribute("aria-expanded", "false");
  };

  const open = (viaHover = false) => {
    clearTimeout(closeTimer);
    openedByHover = viaHover;
    trigger.setAttribute("aria-expanded", "true");
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(close, 150);
  };

  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    if (isOpen && !openedByHover) {
      close();
    } else {
      open(false);
    }
  });

  item.addEventListener("mouseenter", () => open(true));
  item.addEventListener("mouseleave", scheduleClose);

  item.addEventListener("focusout", (event) => {
    if (!item.contains(event.relatedTarget)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
      close();
      trigger.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (trigger.getAttribute("aria-expanded") !== "true") return;
    if (item.contains(event.target)) return;
    close();
  });
}
