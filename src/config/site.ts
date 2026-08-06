export const siteConfig = {
  name: "Pata Fina",
  whatsappNumber: "555492537198", // Insira o número com DDD (apenas números)
  defaultMessage: "Olá! Gostaria de conhecer o catálogo e solicitar um orçamento.",
  
  // Função auxiliar para gerar links dinâmicos do WhatsApp
  getWhatsappUrl: (message?: string) => {
    const text = message || siteConfig.defaultMessage;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
};