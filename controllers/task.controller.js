import { taskService } from "../services/mongo/task.service.js";

export const taskController = {
  getAll: async (req, res) => {
    const query = req.query;
    // console.log(query);

    try {
      const tasks = await taskService.find(query);
      const dataToSend = {
        count: tasks.length,
        tasks: tasks,
      };
      res.status(200).json(dataToSend);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const task = await taskService.findById(id);
      if (!task) {
        res.status(404).json({ statusCode: 404, message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  getByUserId: async (req, res) => {
    const userId = req.params.id;

    try {
      const tasksToDo = await taskService.findAssignedTasksTo(userId);
      const tasksGiven = await taskService.findGivenTasksBy(userId);

      const dataToSend = {
        tasksToDo: tasksToDo,
        tasksGiven: tasksGiven,
      };
      res.status(200).json(dataToSend);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  insert: async (req, res) => {
    const taskToAdd = req.body;
    try {
      const addedTask = await taskService.create(taskToAdd);
      res.location(`/api/tasks/${addedTask.id}`);
      res.status(201).json(addedTask);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  update: (req, res) => {
    const taskId = req.params.id;
    const taskToUpdate = req.body;

    //First check if task exist, send an res message if not
    //

    //And if task exists continue with this
    const taskUpdated = taskService.update(taskId, taskToUpdate);

    //Don't need this part because it's checked already above
    // if (!taskUpdated) {
    //   return res
    //     .status(404)
    //     .json({ statusCode: 404, message: "Task not found" });
    // }
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
  delete: async (req, res) => {
    try {
      const taskId = req.params.id;
      const isDeleted = await taskService.delete(taskId);

      if (isDeleted) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404).json({
          statusCode: 404,
          message: "Not possible to delete, the task doesn't exist",
        });
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
};
