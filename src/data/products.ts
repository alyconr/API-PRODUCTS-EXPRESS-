import type { Product } from "../models/Products.ts";

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 999.99,
    stock: 10,
    category: "computers",
    active: true,
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy S21",
    price: 799.99,
    stock: 15,
    category: "electronics",
    active: true,
  },
    {
    id: 3,
    name: "Headphones Sony WH-1000XM4",
    price: 349.99,  
    stock: 20,
    category: "audio",
    active: true,
  },
];
let nextProductId = Math.max(...products.map((product) => product.id)) + 1;

export  function generateProductId(): number {
 const id = nextProductId;
 nextProductId++;
 return id;
}


