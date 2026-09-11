import { Product, CreateProductDTO } from "../models/Products.js";
let products: Product[] = [
  { id: 1, name: "Laptop", price: 2500000, category: "Tecnología" },
  { id: 2, name: "Mouse", price: 80000, category: "Tecnología" },
];



let currentId = 3;
export const productRepository = {
  async findAll(): Promise<Product[]> {
    return products;
  },
  async findById(id: number): Promise<Product | undefined> {
    return products.find((product) => product.id === id);
  },
  async create(data: CreateProductDTO): Promise<Product> {
    const newProduct: Product = { id: currentId++, ...data };
    products.push(newProduct);
    return newProduct;
  },
  async update(
    id: number,
    data: CreateProductDTO,
  ): Promise<Product | undefined> {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      return undefined;
    }
    products[index] = { id, ...data };
    return products[index];
  },
  async delete(id: number): Promise<boolean> {
    const initialLength = products.length;
    products = products.filter((product) => product.id !== id);
    return products.length < initialLength;
  },
};

