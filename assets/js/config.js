// Fonte única de verdade para dados de contato e mensagens de WhatsApp por página.
// Os hrefs `wa.me` no HTML são escritos estaticamente (ver assets/js/whatsapp.js) —
// este mapa é a referência usada ao autorar/revisar esses links manualmente,
// para que os 7 templates nunca fiquem com o número ou o texto fora de sincronia.

export const WHATSAPP_NUMBER = "5511971758298";

// NAP (Nome, Endereço, Telefone) — dados reais, ver docs/INVENTARIO-SITE-ATUAL.md §5.
// Não alterar sem confirmar com o cliente.
export const NAP = {
  name: "Speranza Eventos",
  street: "Av. Humberto Cereser, nº 3970",
  neighborhood: "Bairro Caxambú",
  city: "Jundiaí",
  state: "SP",
  phone: "+55 11 4584-2441",
  whatsapp: "+55 11 97175-8298",
  email: "contato@speranzaeventos.com.br",
  instagram: "https://instagram.com/speranzaeventos",
  facebook: "https://facebook.com/speranzaeventos",
  // TODO: horário de atendimento não informado no site atual — validar com o cliente.
  hours: null,
};

export const WHATSAPP_MESSAGES = {
  default: "Olá! Gostaria de saber mais sobre o Speranza Eventos.",
  hero_orcamento: "Olá! Gostaria de solicitar um orçamento para o meu evento no Speranza.",
  hero_visita: "Olá! Gostaria de agendar uma visita ao Speranza.",
  casamentos: "Olá! Gostaria de saber mais sobre o Speranza para o meu casamento.",
  debutantes: "Olá! Gostaria de saber mais sobre a festa de 15 anos no Speranza.",
  corporativo: "Olá! Gostaria de solicitar uma proposta para um evento corporativo no Speranza.",
  aniversarios: "Olá! Gostaria de saber mais sobre minha comemoração no Speranza.",
  espaco: "Olá! Gostaria de agendar uma visita ao espaço do Speranza.",
  contato: "Olá! Gostaria de falar com o Speranza Eventos.",
};

export function buildWhatsAppUrl(messageKey = "default") {
  const text = WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
