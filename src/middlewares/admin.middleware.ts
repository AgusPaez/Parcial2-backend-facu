import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAdminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    if (req.user && req.user.rol === "admin") {
        next();
      } else {
        return res.status(403).json("Acceso no autorizado. Se requiere rol de admin.");
      }
  };
  