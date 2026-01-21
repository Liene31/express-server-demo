import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth/auth.middleware.js";

export const userRouter = Router();

userRouter.get("/", authMiddleware(), userController.getAll);
