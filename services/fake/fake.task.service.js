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

    if (!taskToModify) {
      return false;
    }

    let keys = Object.keys(modification);

    keys.forEach((key) => {
      taskToModify[key] = modification[key];
    });

    return taskToModify;
  },

  updateStatus: (id, modification) => {
    const taskToModify = tasks.find((task) => {
      return task.id === id;
    });

    console.log(taskToModify);
    console.log(modification.key);

    if (taskToModify === undefined) {
      return undefined;
    }

    let keys = Object.keys(modification);
    let value = Object.values(modification);
    console.log(value);

    taskToModify[keys] = [...value];

    // keys.map((key) => {
    //   taskToModify[key] = modification[key];
    // });

    return modification;
  },

  delete: (taskId) => {
    const taskToDelete = tasks.find((task) => {
      return task.id === taskId;
    });

    if (!taskToDelete) {
      return false;
    }

    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    //Cleans my tasks (fakeDb) and push all the tasks not deleted to it
    tasks.splice(0);
    tasks.push(...newTasks);

    console.log(tasks);
    return true;
  },
};
