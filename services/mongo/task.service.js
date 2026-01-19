import { Task } from "../../models/task.model.js";

export const taskService = {
  find: async () => {
    try {
      const tasks = await Task.find()
        .populate({
          // links with category and indicates which values to show from category
          path: "categoryId",
          select: { id: 1, name: 1, icon: 1 },
        })
        .populate({
          // links with user and indicates which values to show from user
          path: "fromUserId",
          select: { id: 1, firstName: 1, lastName: 1 },
        })
        .populate({
          // links with user and indicates which values to show from user
          path: "toUserId",
          select: { id: 1, firstName: 1, lastName: 1 },
        });
      return tasks;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  findById: async (id) => {
    try {
      const searchedTask = await Task.findById(id)
        .populate({
          // links with category and indicates which values to show from category
          path: "categoryId",
          select: { id: 1, name: 1, icon: 1 },
        })
        .populate({
          // links with user and indicates which values to show from user
          path: "fromUserId",
          select: { id: 1, firstName: 1, lastName: 1 },
        })
        .populate({
          // links with user and indicates which values to show from user
          path: "toUserId",
          select: { id: 1, firstName: 1, lastName: 1 },
        });
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

  update: async (id, task) => {
    try {
      const updatedTask = await Task.findById(id).updateOne(task);
      console.log(updatedTask);
    } catch (err) {
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
