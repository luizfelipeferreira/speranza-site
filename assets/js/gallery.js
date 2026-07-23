// Lightbox vanilla — importado dinamicamente só em páginas com [data-gallery].
// Navegação por teclado (Escape/Setas) e foco preso no lightbox enquanto aberto.

export function initGallery() {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const lightbox = gallery.querySelector("[data-lightbox]");
    if (!lightbox) return;

    const figureImg = lightbox.querySelector("[data-lightbox-image]");
    const caption = lightbox.querySelector("[data-lightbox-caption]");
    const closeBtn = lightbox.querySelector("[data-lightbox-close]");
    const prevBtn = lightbox.querySelector("[data-lightbox-prev]");
    const nextBtn = lightbox.querySelector("[data-lightbox-next]");
    const triggers = Array.from(gallery.querySelectorAll("[data-lightbox-trigger]"));

    let currentIndex = 0;
    let lastFocused = null;

    const openAt = (index) => {
      currentIndex = (index + triggers.length) % triggers.length;
      const trigger = triggers[currentIndex];
      const fullSrc = trigger.getAttribute("data-full-src") || trigger.querySelector("img")?.src;
      const altText = trigger.querySelector("img")?.alt || "";

      figureImg.src = fullSrc;
      figureImg.alt = altText;
      caption.textContent = altText;

      lastFocused = document.activeElement;
      lightbox.hidden = false;
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    };

    const close = () => {
      lightbox.hidden = true;
      document.removeEventListener("keydown", onKeydown);
      lastFocused?.focus();
    };

    const onKeydown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") openAt(currentIndex + 1);
      if (event.key === "ArrowLeft") openAt(currentIndex - 1);
    };

    triggers.forEach((trigger, index) => {
      trigger.addEventListener("click", () => openAt(index));
    });

    closeBtn?.addEventListener("click", close);
    prevBtn?.addEventListener("click", () => openAt(currentIndex - 1));
    nextBtn?.addEventListener("click", () => openAt(currentIndex + 1));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });
  });
}
