import { Document } from "mongoose";

interface IProduct extends Document {
  id: Number;
  nombre: string;
  descripcion: string;
  precio: Number;
  imagenUrl: string;
}

export default IProduct;
