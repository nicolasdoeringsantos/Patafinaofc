import { motion } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const message = `Olá! Gostaria de mais informações e um orçamento para o produto: ${product.name}`;
  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <div>
        {/* CONTAINER DA IMAGEM */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-800 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-44 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            {product.category}
          </span>
        </div>

        {/* DETALHES DO PRODUTO */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
            {product.name}
          </h3>

          {/* AVALIAÇÃO (SE HOUVER) */}
          {product.rating && (
            <div className="mt-2 flex items-center gap-1 text-amber-400">
              {Array.from({ length: product.rating }).map((_, index) => (
                <FaStar key={index} className="text-xs" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BOTÃO DE ORÇAMENTO */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-3 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950"
      >
        <FaWhatsapp className="text-base" />
        Consultar Condições
      </a>
    </motion.div>
  );
}