import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section id="catalogo" className="relative w-full overflow-hidden bg-slate-950 py-20 text-white">
      {/* Glow centralizado de fundo */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10"
        style={{ height: 400, width: 400, filter: "blur(130px)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md">
            CATEGORIAS EM DESTAQUE
          </span>

            <h2 className="mt-4 text-3xl font-black lg:text-4xl">
            Tudo para abastecer a sua{" "}
            <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              loja ou clínica
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100/70">
            Navegue por nossas principais linhas de distribuição com condições exclusivas para atacado.
          </p>
        </div>

        {/* GRID CENTRALIZADA PARA 3 CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to={category.path} className="block">
                <CategoryCard category={category} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}