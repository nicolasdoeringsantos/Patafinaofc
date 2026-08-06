import { motion } from "framer-motion";
import { FaAward, FaTruck, FaShieldAlt } from "react-icons/fa";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

export default function About() {
  return (
    <section id="sobre" className="relative w-full overflow-hidden bg-slate-950 py-24 text-white">
      {/* GLOW DE FUNDO */}
      <div
        className="absolute left-0 top-1/3 -z-10 rounded-full bg-cyan-500/10"
        style={{ height: 450, width: 450, filter: "blur(140px)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* COLUNA ESQUERDA - TEXTO INSTITUCIONAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md">
              SOBRE A PATA FINA
            </span>

            <h2 className="mt-4 text-3xl font-black lg:text-5xl">
              Parceira estratégica para o{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                crescimento do seu negócio
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-blue-100/80">
              Especialistas em finalização para o seu banho & tosa

A Pata Fina é uma fabricante dedicada a desenvolver enfeites e adereços para o setor pet. Nossa linha inclui laços, gravatas e adesivos criados com cuidado e atenção aos detalhes para valorizar a entrega do seu serviço.

Como parceiros do seu negócio, unimos qualidade de produção própria e facilidade de compra, garantindo que o seu estoque esteja sempre abastecido com o que há de melhor em estética pet.
            </p>

          </motion.div>

          {/* COLUNA DIREITA - CARDS DE DESTAQUE B2B */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-5"
          >
            {[
              {
                icon: <FaAward className="text-xl text-cyan-300" />,
                title: "Acabamento Premium",
                desc: "Peitorais, guias e adereços adesivos de alta qualidade.",
              },
              {
                icon: <FaTruck className="text-xl text-blue-300" />,
                title: "Logística e Agilidade",
                desc: "Despacho rápido para manter o estoque do seu banho & tosa abastecido.",
              },
              {
                icon: <FaShieldAlt className="text-xl text-emerald-300" />,
                title: "Flexibilidade na Compra",
                desc: "Kits e pacotes sob medida para a realidade do seu fluxo de caixa.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900/90"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-blue-200/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Os queridinhos dos nossos clientes</p>
          <h3 className="mt-3 text-3xl font-black text-white">Produtos que encantam na primeira vista</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-200">
            Selecionamos com carinho os itens mais desejados por pet shops e clínicas de estética pet, para que você tenha sempre o melhor em estoque e pronto para impressionar seus clientes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}