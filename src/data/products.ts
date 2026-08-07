import type { Product } from "../types/Product";
import americanoImg from "../assets/images/americano.png";
import regulavelImg from "../assets/images/regulavel.png";
import coleiraImg from "../assets/images/coleira.png";
import coleira2Img from "../assets/images/coleira2.png";
import cintoImg from "../assets/images/cinto.png";
import modelolacoImg from "../assets/images/modelolaco.png";
import gatoImg from "../assets/images/gato.jpg";
import lacoImg from "../assets/images/laco.png";
import laco2Img from "../assets/images/laco2.png";
import laco3Img from "../assets/images/laco3.png";
import laco4Img from "../assets/images/laco4.png";
import laco5Img from "../assets/images/laco5.png";
import laco6Img from "../assets/images/laco6.png";
import laco7Img from "../assets/images/laco7.png";
import laco8Img from "../assets/images/laco8.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Laços para banho e tosa",
    category: "Banho & Tosa",
    price: 49.9,
    image: modelolacoImg,
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
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: lacoImg,
    rating: 5,
    featured: true,
  },
  {
    id: 8,
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco2Img,
    rating: 5,
    featured: true,
  },
  {
    id: 9,
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco3Img,
    rating: 5,
    featured: true,
  },
  {
    id: 10,
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco4Img,
    rating: 5,
    featured: true,
  },
  {
    id: 11,
    name: "Bandana",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco5Img,
    rating: 5,
    featured: true,
  },
  {
    id: 12,
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco6Img,
    rating: 5,
    featured: true,
  },
  {
    id: 13,
    name: "Laço",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco7Img,
    rating: 5,
    featured: true,
  },
  {
    id: 14,
    name: "Kit brasil",
    category: "Banho & Tosa",
    price: 35.9,
    image: laco8Img,
    rating: 5,
    featured: true,
  },
  {
    id: 15,
    name: "Coleira ajustável para gatos",
    category: "Gatos",
    price: 39.9,
    image: gatoImg,
    rating: 4,
    featured: false,
  },
  {
    id: 16,
    name: "Brinquedo interativo felino",
    category: "Gatos",
    price: 24.9,
    image: "https://placehold.co/400x400/0f172a/38bdf8?text=Brinquedo+Gatos",
    rating: 4,
    featured: false,
  },
];