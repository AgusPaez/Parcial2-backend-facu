import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { checkAdminMiddleware } from "../middlewares/admin.middleware";

const router = Router()
// OBTENER TODOS
router.get("/", productController.index);
// OBTENER UNO
router.get("/:id", productController.show);

router.use(authMiddleware, checkAdminMiddleware);
// CREAR
router.post("/", productController.create);
// BORRAR
router.delete("/:id", productController.destroy);

export default router;
