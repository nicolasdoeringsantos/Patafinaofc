import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="w-full bg-slate-950/80 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Destaques da semana
          </p>
          <h2 className="mt-3 text-3xl font-black lg:text-4xl">
            Produtos favoritos para o seu pet shop
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}