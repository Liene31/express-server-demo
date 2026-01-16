import { Task } from "../../models/task.model.js";

export const taskService = {
  find: async () => {
    try {
      const tasks = await Task.find();
      return tasks;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  findById: async (id) => {
    try {
      const searchedTask = await Task.findById(id);
      return searchedTask;
    } catch (err) {
      throw new Error(err);
    }
  },

  findAssignedTasksTo: async (id) => {
    try {
      const tasksAssigned = await Task.find({ toUserId: id });
      return tasksAssigned;
    } catch (err) {
      throw new Error(err);
    }
  },

  findGivenTasksBy: async (id) => {
    try {
      const tasksGiven = await Task.find({ fromUserId: id });
      return tasksGiven;
    } catch (err) {
      throw new Error(err);
    }
  },
  create: async (task) => {
    try {
      const taskToAdd = Task(task);
      await taskToAdd.save();
      return taskToAdd;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  delete: async (id) => {
    try {
      const taskToDelete = await Task.findByIdAndDelete(id);
      if (taskToDelete) {
        return true;
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};
