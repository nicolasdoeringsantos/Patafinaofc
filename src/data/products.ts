import type { Product } from "../types/Product";
import americanoImg from "../assets/images/americano.png";
import regulavelImg from "../assets/images/regulavel.png";
import coleiraImg from "../assets/images/coleira.png";
import coleira2Img from "../assets/images/coleira2.png";
import cintoImg from "../assets/images/cinto.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Laços para banho e tosa",
    category: "Banho & Tosa",
    price: 49.9,
    image: "https://placehold.co/400x400/0f172a/38bdf8?text=Banho+e+Tosa",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Peitoral americano para cães",
    category: "Cães",
    price: 29.9,
    image: americanoImg,
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Peitoral regulável para cães",
    category: "Cães",
    price: 79.9,
    image: regulavelImg,
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    name: "Coleira",
    category: "Cães",
    price: 35.9,
    image: coleiraImg,
    rating: 5,
    featured: true,
  },
  {
    id: 5,
    name: "Coleira revorçada + guia",
    category: "Cães",
    price: 35.9,
    image: coleira2Img,
    rating: 5,
    featured: true,
  },
  {
    id: 6,
    name: "Cinto + Coleira dupla",
    category: "Cães",
    price: 35.9,
    image: cintoImg,
    rating: 5,
    featured: true,
  },
  {
    id: 7,
    name: "Kit Gravatas Premium",
    category: "Banho & Tosa",
    price: 35.9,
    image: "https://placehold.co/400x400/0f172a/38bdf8?text=Kit+Gravatas",
    rating: 5,
    featured: true,
  },
  {
    id: 8,
    name: "Coleira ajustável para gatos",
    category: "Gatos",
    price: 39.9,
    image: "https://placehold.co/400x400/0f172a/38bdf8?text=Coleira+Gatos",
    rating: 4,
    featured: false,
  },
  {
    id: 9,
    name: "Brinquedo interativo felino",
    category: "Gatos",
    price: 24.9,
    image: "https://placehold.co/400x400/0f172a/38bdf8?text=Brinquedo+Gatos",
    rating: 4,
    featured: false,
  },
];