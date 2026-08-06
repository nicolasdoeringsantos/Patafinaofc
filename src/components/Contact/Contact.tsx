import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { siteConfig } from "../../config/site"; // Ajuste o caminho se necessário

export default function Contact() {
  const whatsappUrl =
    typeof siteConfig?.getWhatsappUrl === "function"
      ? siteConfig.getWhatsappUrl("Olá! Vim pelo site e gostaria de tirar uma dúvida.")
      : "https://wa.me/5500000000000"; // Lembre-se de colocar o número correto aqui caso não use o siteConfig

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entra a lógica de envio do formulário no futuro
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="relative w-full overflow-hidden bg-slate-950 py-24">
      {/* GLOW DE FUNDO */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CABEÇALHO */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black text-white md:text-5xl"
          >
            Fale com a <span className="text-cyan-400">Pata Fina</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm text-blue-200/80 md:text-base"
          >
            Ficou com alguma dúvida, quer um pedido personalizado ? Nossa equipe está pronta para te atender.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* COLUNA ESQUERDA - INFORMAÇÕES DE CONTATO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* CARD WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-800/80"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 transition-transform group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">WhatsApp Direto</h3>
                <p className="text-sm text-blue-200/80">Resposta rápida para orçamentos.</p>
              </div>
            </a>

            {/* CARD E-MAIL */}
            <a
              href="mailto:contato@patafina.com.br"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-slate-800/80"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 transition-transform group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-slate-950">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">E-mail Comercial</h3>
                <p className="text-sm text-blue-200/80">contato@patafina.com.br</p>
              </div>
            </a>

            {/* CARD LOCALIZAÇÃO */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pink-400/10 text-pink-400">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Nossa Fábrica</h3>
                <p className="text-sm text-blue-200/80">Enviamos para todo o Brasil.</p>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA - FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="mb-2 text-2xl font-bold text-white">Envie uma mensagem</h3>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-blue-200/80">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Seu nome ou da sua loja"
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-3.5 text-sm text-white outline-none transition-colors focus:border-cyan-400 focus:bg-slate-900"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-blue-200/80">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(00) 00000-0000"
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-3.5 text-sm text-white outline-none transition-colors focus:border-cyan-400 focus:bg-slate-900"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-blue-200/80">Como podemos ajudar?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Digite sua mensagem, lista de produtos ou dúvidas..."
                  className="resize-none rounded-xl border border-white/10 bg-slate-950/50 p-3.5 text-sm text-white outline-none transition-colors focus:border-cyan-400 focus:bg-slate-900"
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400"
              >
                <FaPaperPlane />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}