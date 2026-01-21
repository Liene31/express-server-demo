import { Router } from "express";
import taskRouter from "./task.router.js";
import categoryRouter from "./category.router.js";
import { authRouter } from "./auth.router.js";
import { userRouter } from "./user.router.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to Task Management API");
});

router.use("/tasks", taskRouter);
router.use("/category", categoryRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
