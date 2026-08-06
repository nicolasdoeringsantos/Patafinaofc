export interface Product {
  id: string | number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
  featured?: boolean;
}