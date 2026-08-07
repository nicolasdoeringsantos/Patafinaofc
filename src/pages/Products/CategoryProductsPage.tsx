import { useMemo } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

interface CategoryProductsPageProps {
  category: "Cães" | "Gatos" | "Banho & Tosa";
}

export default function CategoryProductsPage({ category }: CategoryProductsPageProps) {
  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === category),
    [category]
  );

  return (
    <section className="min-h-screen bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            {category}
          </span>
          <h1 className="mt-4 text-4xl font-black lg:text-5xl">
            Mais Procurados para {category}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-200/80">
            Navegue pelos produtos mais procurados para {category.toLowerCase()} e escolha itens que vão deixar seu estoque pronto para atender com estilo e qualidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center text-blue-200">
              Nenhum produto encontrado para esta categoria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
