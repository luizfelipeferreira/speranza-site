// Único ponto de entrada carregado por todas as páginas:
// <script type="module" src="/assets/js/main.js"></script>

import { initNav } from "./nav.js";
import { initScrollObserver } from "./scroll-observer.js";
import { initWhatsAppTracking } from "./whatsapp.js";
import { initHero } from "./hero.js";

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

initNav();
initScrollObserver();
initWhatsAppTracking();
initHero();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Lightbox só é baixado nas páginas que realmente têm galeria.
if (document.querySelector("[data-gallery]")) {
  import("./gallery.js").then(({ initGallery }) => initGallery());
}
