import { CreateProductDTO, Product } from "../models/Products.js";
import { productRepository } from "../repositories/product.repository.js";


export const productService = {
  async getAll(): Promise<Product[]> {
    return productRepository.findAll();
  },
  async getById(id: number): Promise<Product> {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  },
  async create(data: CreateProductDTO): Promise<Product> {
    if (!data.name.trim()) {
      throw new Error("El nombre es obligatorio");
    }
    if (data.price <= 0) {
      throw new Error("El precio debe ser mayor que cero");
    }
    if (!data.category.trim()) {
      throw new Error("La categoría es obligatoria");
    }
    return productRepository.create(data);
  },
  async update(id: number, data: CreateProductDTO): Promise<Product> {
    if (!data.name.trim()) {
      throw new Error("El nombre es obligatorio");
    }
    if (data.price <= 0) {
      throw new Error("El precio debe ser mayor que cero");
    }
    const product = await productRepository.update(id, data);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  },
  async delete(id: number): Promise<void> {
    const deleted = await productRepository.delete(id);
    if (!deleted) {
      throw new Error("Producto no encontrado");
    }
  },
};

