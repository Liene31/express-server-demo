import { tasks } from "./fakeDb.js";

export const fakeTaskService = {
  find: () => {
    return tasks;
  },

  findById: (id) => {
    return tasks.find((task) => {
      return task.id === id;
    });
  },

  findByUserId: (userId) => {
    const tasksByUser = tasks.filter((task) => {
      return task.userId === userId;
    });

    return tasksByUser;
  },

  create: (taskToAdd) => {
    const idMax = Math.max(...tasks.map((task) => task.id));
    taskToAdd.id = idMax + 1;
    taskToAdd.isDone = false;
    tasks.push(taskToAdd);
    return taskToAdd;
  },

  update: (id, modification) => {
    const taskToModify = tasks.find((task) => {
      return task.id === id;
    });

    if (taskToModify === undefined) {
      return undefined;
    }

    let keys = Object.keys(modification);

    keys.map((key) => {
      taskToModify[key] = modification[key];
    });

    return taskToModify;
  },

  updateStatus: (id, modification) => {
    const taskToModify = tasks.find((task) => {
      return task.id === id;
    });

    if (taskToModify === undefined) {
      return undefined;
    }

    let keys = Object.keys(modification);

    keys.map((key) => {
      taskToModify[key] = modification[key];
    });

    console.log(taskToModify);

    return modification;
  },

  delete: (taskId) => {
    let testTaskTable = tasks;
    const taskToDelete = tasks.find((task) => {
      return task.id === taskId;
    });

    if (taskToDelete === undefined) {
      return false;
    }

    testTaskTable = testTaskTable.filter((task) => {
      return task.id !== taskId;
    });

    tasks.push(testTaskTable);
  },
};
