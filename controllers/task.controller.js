import { fakeTaskService } from "../services/fake/fake.task.service.js";

export const taskController = {
  getAll: (req, res) => {
    const tasks = fakeTaskService.find();

    //Version 1
    res.status(200).json(tasks);

    //Version 2
    // const dataToSend = {
    //   count: tasks.length,
    //   tasks: tasks,
    // };
    // res.status(200).json(dataToSend);
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const task = fakeTaskService.findById(id);

    if (!task) {
      res.status(404).json({ statusCode: 404, message: "Task not found" });
    }
    res.status(200).json(task);
  },
  getByUserId: (req, res) => {
    const userId = req.params.id;
    res.send(`List of tasks for user with id ${userId}`);
  },
  insert: (req, res) => {
    const taskToAdd = req.body;
    const addedTask = fakeTaskService.create(taskToAdd);

    res.location(`/api/tasks/${addedTask.id}`);
    res.status(201).json(addedTask);
  },
  update: (req, res) => {
    const taskId = req.params.id;
    const taskUpdated = req.body;
    taskUpdated.id = taskId;
    res.status(200).send(taskUpdated);
  },
  updateStatus: (req, res) => {
    res.send({ id: req.params.id, isDone: req.body.isDone });
  },
  delete: (req, res) => {
    res.sendStatus(204);
  },
};
