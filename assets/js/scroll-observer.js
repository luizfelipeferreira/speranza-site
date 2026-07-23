// Um único IntersectionObserver compartilhado por dois motivos:
// 1) scroll-reveal — adiciona .is-visible em elementos [data-reveal] ao entrar na viewport;
// 2) scroll-depth — dispara trackEvent('scroll_depth', ...) ao alcançar marcos como
//    a galeria ou os depoimentos (KPI definido em docs/ESTRATEGIA.md §1).

import { trackEvent } from "./analytics.js";

export function initScrollObserver() {
  const revealTargets = document.querySelectorAll("[data-reveal]");
  const depthTargets = document.querySelectorAll("[data-scroll-depth]");

  if (!revealTargets.length && !depthTargets.length) return;

  const seenDepths = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        if (entry.target.hasAttribute("data-reveal")) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          continue;
        }

        const depthLabel = entry.target.getAttribute("data-scroll-depth");
        if (depthLabel && !seenDepths.has(depthLabel)) {
          seenDepths.add(depthLabel);
          trackEvent("scroll_depth", { section: depthLabel });
        }
      }
    },
    { threshold: 0.25 }
  );

  revealTargets.forEach((el) => observer.observe(el));
  depthTargets.forEach((el) => observer.observe(el));
}
