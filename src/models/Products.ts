export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  active: boolean;
}


export type CreateProductInput = Omit<Product, "id" | "active">;


export type UpdateProductInput = Partial<Omit<Product, "id">>;