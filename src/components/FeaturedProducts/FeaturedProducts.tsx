import { siteConfig } from "../../config/site";

interface Product {
  id?: string | number;
  name?: string;
  category?: string;
  price?: number;
  image?: string;
  featured?: boolean;
}

export default function ProductCard({ product }: { product?: Product }) {
  // Se o objeto 'product' não for fornecido, previne a renderização incorreta
  if (!product) return null;

  const productName = product.name || "Produto sem nome";
  const whatsappMessage = `Olá! Gostaria de mais informações sobre o produto: ${productName}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md">
      {product.image && (
        <img
          src={product.image}
          alt={productName}
          className="h-48 w-full object-cover rounded-xl mb-4"
        />
      )}
      <span className="text-xs font-semibold text-cyan-400">
        {product.category || "Acessórios"}
      </span>
      <h3 className="text-lg font-bold text-white mt-1">{productName}</h3>
      
      {product.price && (
        <p className="mt-2 text-xl font-black text-white">
          R$ {product.price.toFixed(2)}
        </p>
      )}

      <a
        href={
          typeof siteConfig?.getWhatsappUrl === "function"
            ? siteConfig.getWhatsappUrl(whatsappMessage)
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-center rounded-xl bg-cyan-500 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400"
      >
        Consultar Preço
      </a>
    </div>
  );
}