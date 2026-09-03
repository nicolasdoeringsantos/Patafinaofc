export const siteConfig = {
  name: "Pata Fina",
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "5500000000000",
  defaultMessage: "Olá! Gostaria de conhecer o catálogo e solicitar um orçamento.",
  
  // Função auxiliar para gerar links dinâmicos do WhatsApp
  getWhatsappUrl: (message?: string) => {
    const text = message || siteConfig.defaultMessage;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
};