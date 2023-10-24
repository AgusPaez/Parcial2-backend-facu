import { Request, Response, NextFunction } from "express";
import Product from "../models/product.model";
import IProduct from "../interfaces/product.interface";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, nombre, descripcion, precio, imagenUrl } = req.body;

    const product: IProduct = new Product({
      id,
      nombre,
      descripcion,
      precio,
      imagenUrl,
    });

    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json("El producto no existe");
    await product.deleteOne();
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};
