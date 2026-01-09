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
    const userId = parseInt(req.params.id);
    const tasks = fakeTaskService.findByUserId(userId);
    res.status(200).json(tasks);
  },
  insert: (req, res) => {
    const taskToAdd = req.body;
    const addedTask = fakeTaskService.create(taskToAdd);
    res.location(`/api/tasks/${addedTask.id}`);
    res.status(201).json(addedTask);
  },
  update: (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskToUpdate = req.body;

    //First check if task exist, send an res message if not
    //

    //And if task exists continue with this
    const taskUpdated = fakeTaskService.update(taskId, taskToUpdate);

    //Don't need this part because it's checked already above
    if (!taskUpdated) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "Task not found" });
    }
    res.status(200).json(taskUpdated);
  },
  updateStatus: (req, res) => {
    const taskId = parseInt(req.params.id);
    const modification = req.body.isDone;

    //First do findById to check if the task exists
    //------

    //And only after do this when we know that task exist
    const updatedStatus = fakeTaskService.updateStatus(taskId, modification);

    //Will not need this since existence of the task will be check above
    if (updatedStatus === undefined) {
      res.status(404).json({ statusCode: 404, message: "Task not found" });
    }
    res.status(200).json(updatedStatus);
  },
  delete: (req, res) => {
    const taskId = parseInt(req.params.id);
    const isDeleted = fakeTaskService.delete(taskId);
    if (isDeleted) {
      res.sendStatus(204);
    } else {
      res
        .status(404)
        .json({ statusCode: 404, message: `Task with id ${taskId} not found` });
    }
  },
};
