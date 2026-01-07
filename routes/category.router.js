import { Router } from "express";
import { categoryController } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAll);

categoryRouter.get("/:id", categoryController.getById);

categoryRouter.post("/", categoryController.insert);

categoryRouter.put("/:id", categoryController.update);

categoryRouter.delete("/:id", categoryController.delete);

export default categoryRouter;
