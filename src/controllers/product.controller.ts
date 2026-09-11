import { Request, Response } from "express";
import { productService } from "../services/product.service.js";

export const getProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const product = await productService.getById(id);
    res.status(200).json(product);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    res.status(404).json({ message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const product = await productService.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    res.status(400).json({ message });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const product = await productService.update(id, req.body);
    res.status(200).json(product);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    res.status(400).json({ message });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await productService.delete(id);
    res.status(204).send();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    res.status(404).json({ message });
  }
};
