export interface Product {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  category: string;
  status: number;
}
