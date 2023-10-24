import { model, Schema } from "mongoose";
import IProduct from "../interfaces/product.interface";

const UserSchema = new Schema<IProduct>(
  {
    id: {
        type: Number,
        min:0
      },

    nombre: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
    },

    descripcion: {
      type: String,
    },

    precio: {
      type: Number,
      required: [true, "El precio es obligatorio y no podra ser un valor negativo"],
      min:0,
    },

    imagenUrl: {
      type: String,
      //lowercase: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);
export default model<IProduct>("Product", UserSchema);
