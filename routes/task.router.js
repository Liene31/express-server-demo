import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/", (req, res) => {
  res.send("List of all the tasks");
  console.log(req.query);
});

taskRouter.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`List of tasks for user with id ${userId}`);
});

taskRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Task No ${id}`);
});

taskRouter.post("/", (req, res) => {
  const taskToInsert = req.body;
  res.status(201).send(taskToInsert);
});

taskRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const taskUpdated = req.body;
  taskUpdated.id = taskId;
  res.status(200).send(taskUpdated);
});

taskRouter.delete("/:id", (req, res) => {
  res.sendStatus(204);
});

export default taskRouter;
