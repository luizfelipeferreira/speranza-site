// trackEvent central — sem dependência de SaaS de analytics.
// Sempre grava em window.__speranzaEvents (inspecionável no devtools) e repassa
// para window.SPERANZA_ANALYTICS_SINK, se definido — ponto de integração futuro
// (GA4/Plausible/endpoint próprio) sem tocar nos pontos de chamada existentes.

export function trackEvent(name, payload = {}) {
  const event = { name, payload, timestamp: Date.now() };

  window.__speranzaEvents = window.__speranzaEvents || [];
  window.__speranzaEvents.push(event);

  if (typeof window.SPERANZA_ANALYTICS_SINK === "function") {
    window.SPERANZA_ANALYTICS_SINK(name, payload);
  }
}
