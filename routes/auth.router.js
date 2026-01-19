import { Router } from "express";

export const authRouter = Router();

authRouter.post("/register", (req, res) => {
  res.sendStatus(501);
});

authRouter.post("/login", (req, res) => {
  res.sendStatus(501);
});
