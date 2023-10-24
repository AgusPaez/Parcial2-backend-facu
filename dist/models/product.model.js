"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        min: 0
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
        min: 0,
    },
    imagenUrl: {
        type: String,
        //lowercase: true,
    },
}, {
    timestamps: { createdAt: true, updatedAt: true },
});
exports.default = (0, mongoose_1.model)("Product", UserSchema);
