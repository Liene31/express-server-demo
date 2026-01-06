import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => {
  res.send("See all Categories");
});

categoryRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Category with ID ${id}`);
});

export default categoryRouter;
