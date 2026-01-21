import { Router } from "express";
import { categoryController } from "../controllers/category.controller.js";
import { authMiddleware } from "../middlewares/auth/auth.middleware.js";
import { roleAuthMiddleware } from "../middlewares/auth/roleAuthMiddleware.js";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAll);

categoryRouter.get("/:id", categoryController.getById);

categoryRouter.post(
  "/",
  authMiddleware(),
  roleAuthMiddleware(["Admin"]),
  categoryController.insert,
);

categoryRouter.put("/:id", categoryController.update);

categoryRouter.delete(
  "/:id",
  authMiddleware(),
  roleAuthMiddleware(["Admin"]),
  categoryController.delete,
);

export default categoryRouter;
