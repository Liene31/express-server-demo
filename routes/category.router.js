import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => {
  res.send("See all Categories");
});

categoryRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Category with ID ${id}`);
});

categoryRouter.post("/", (req, res) => {
  const categoryToInsert = req.body;
  res.status(201).send(categoryToInsert);
});

categoryRouter.put("/:id", (req, res) => {
  const categoryId = req.params.id;
  const categoryUpdated = req.body;
  categoryUpdated.id = categoryId;

  res.status(200).send(categoryUpdated);
});

categoryRouter.delete("/:id", (req, res) => {
  res.sendStatus(204);
});

export default categoryRouter;
