import express, { type Express, type Request, type Response } from "express";

import { products, generateProductId } from "./data/products.js";

import type { Product, CreateProductInput, UpdateProductInput } from "./models/Products.js";

const app: Express = express();




function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseProductId(value: string): number | null {
  if (!/^\d+$/.test(value)) {
    return null;
  }
  const id = Number(value);
  if (!Number.isSafeInteger(id) || id <= 0) {
    return null;
  }
  return id;
}


app.get("/api/products", (req: Request, res: Response) => {
    let result = [...products];



    const search = typeof req.query.search === "string" ? req.query.search.trim().toLowerCase() : null;

    const category = typeof req.query.category === "string" ? req.query.category.trim().toLowerCase() : null;


    if (search) {
        result = result.filter((product) => product.name.toLowerCase().includes(search));
    }

    if (category) {
        result = result.filter((product) => product.category.toLowerCase() === category);
        
    }


    if (req.query.active === "true") {
        result = result.filter((product) => product.active);
    }

    return res.status(200).json({
        success: true,
        data: result,
        total: result.length,
    });
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const rawId = req.params.id;
  const id = parseProductId(rawId);
    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid product ID, el id debe ser un numero entero positivo",
        });
    }

    const product = products.find((p) => p.id === id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: product,
    });
});



app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "API Products Funcionando correctamente",
  });
});

app.get("/api/health", (req: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    message: "API Products is healthy",
  });
});

export default app;
