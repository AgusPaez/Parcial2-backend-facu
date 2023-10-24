"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsValidators = void 0;
const express_validator_1 = require("express-validator");
exports.productsValidators = [
    (0, express_validator_1.check)("nombre")
        .isLength({ min: 3, max: 20 })
        .withMessage("El nombre debe tener entre 3 y 20 caracteres"),
    (0, express_validator_1.check)('descripcion')
        .isLength({ min: 10 })
        .withMessage('La descripción debe tener al menos 10 caracteres'),
    (0, express_validator_1.check)('precio')
        .isNumeric()
        .withMessage('El precio debe ser un número')
        .custom((value) => value >= 0)
        .withMessage('El precio no puede ser negativo'),
    (0, express_validator_1.check)('imageUrl')
        .isURL()
        .withMessage('La URL de la imagen no es válida'),
];
