import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { siteConfig } from "../../config/site";
import {
  FaArrowRight,
  FaTruck,
  FaTag,
  FaBoxOpen,
  FaAward,
  FaWhatsapp,
} from "react-icons/fa";

// COMPONENTE PARA CONTAGEM ANIMADA
function Counter({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  duration = 2.5,
}: {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString("pt-BR")
  );

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Hero() {
  const whatsappUrl =
    typeof siteConfig?.getWhatsappUrl === "function"
      ? siteConfig.getWhatsappUrl(
          "Olá! Gostaria de receber o catálogo completo e a tabela de preços para revenda."
        )
      : "https://wa.me/";

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-blue-900 pt-24"
    >
      {/* GLOWS DE FUNDO */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -left-40 top-10 h-100 w-100 rounded-full bg-cyan-400 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute right-0 top-20 h-112.5 w-112.5 rounded-full bg-blue-500 blur-[140px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-between px-6 pb-12">
        {/* GRID PRINCIPAL */}
        <div className="my-auto grid w-full items-center gap-12 py-8 lg:grid-cols-12">
          
          {/* COLUNA ESQUERDA - TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* BADGE DESTAQUE - DIRETO DA FÁBRICA */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-md">
              <FaTag className="text-xs text-cyan-300" />
              <span className="text-xs font-bold tracking-wider text-cyan-200 uppercase">
                Direto da Fábrica 
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight text-white lg:text-5xl">
              Qualidade que se vê no acabamento e se sente na {" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                resistência e segurança
              </span>{" "}
             de cada peça.
            </h1>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-blue-100/90">
              Fabricação própria de guias, coleiras e enfeites de finalização. Abasteça seu pet shop ou banho & tosa com preços exclusivos de fábrica e entrega rápida.
            </p>

            {/* BOTÕES DE AÇÃO */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40"
              >
                <FaWhatsapp className="text-base" />
                Atendimento via WhatsApp
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#produtos"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Ver Catálogo Completo
              </a>
            </div>
          </motion.div>

          {/* COLUNA DIREITA - PAINEL DE VANTAGENS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-white/15 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white">Por que escolher a Pata Fina?</h3>
                <p className="text-xs text-blue-200">Soluções sob medida para o seu estoque</p>
              </div>

              {/* LISTA ANIMADA STAGGER */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                  hidden: {},
                }}
                className="space-y-4"
              >
                {[
                  {
                    icon: <FaAward />,
                    color: "bg-cyan-400/20 text-cyan-300",
                    title: "Finalização Impecável",
                    desc: "Adesivos e laços duráveis que valorizam a entrega do seu banho & tosa.",
                  },
                  {
                    icon: <FaBoxOpen />,
                    color: "bg-blue-400/20 text-blue-300",
                    title: "Elegância e Durabilidade",
                    desc: "A combinação perfeita entre estética sofisticada e resistência para cães e gatos.",
                  },
                  {
                    icon: <FaTruck />,
                    color: "bg-emerald-400/20 text-emerald-300",
                    title: "Atendimento & Pedidos Flexíveis",
                    desc: "Condições adaptadas para o fluxo de caixa do seu negócio.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-blue-100/80">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAIXA INFERIOR COM CONTAGEM ANIMADA */}
        <div className="mt-12 w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">
                <Counter to={500} suffix="+" />
              </h2>
              <p className="text-xs text-blue-200">Pet Shops Atendidos</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">
                <Counter to={50} suffix="k+" />
              </h2>
              <p className="text-xs text-blue-200">Produtos Entregues</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">
                <Counter to={100} suffix="%" />
              </h2>
              <p className="text-xs text-blue-200">Fabricação Própria</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">
                Direct
              </h2>
              <p className="text-xs text-blue-200">Atendimento Humanizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}