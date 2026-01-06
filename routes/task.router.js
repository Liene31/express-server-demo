import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/", (req, res) => {
  res.send("List of all the tasks");
});

taskRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Task No ${id}`);
});

taskRouter.post("/", (req, res) => {
  res.send("Your task has been added");
});

export default taskRouter;
