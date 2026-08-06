import type { IconType } from "react-icons";

export interface Category {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  icon?: IconType;
  image?: string;
  color?: string;
  count?: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;
  const title = category.name ?? category.title;
  const desc = category.description ?? category.count;

  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:bg-slate-900/80">
      {Icon && <Icon className="text-3xl text-cyan-400 mb-3" />}
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {desc && <p className="mt-2 text-xs text-blue-100/70">{desc}</p>}
    </div>
  );
}