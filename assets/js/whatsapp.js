// Os links wa.me já vêm com href completo e mensagem pré-preenchida direto no HTML
// (funcionam sem JavaScript). Este módulo só adiciona o click-tracking por seção/página,
// usado para o KPI "cliques em WhatsApp por seção" (docs/ESTRATEGIA.md §1).

import { trackEvent } from "./analytics.js";

export function initWhatsAppTracking() {
  const links = document.querySelectorAll("[data-wa]");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("whatsapp_click", {
        section: link.getAttribute("data-wa") || "unknown",
        page: document.body.dataset.page || "unknown",
      });
    });
  });
}
