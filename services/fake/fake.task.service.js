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
    //I can access whats in modification object with dot ==> modification.name etc
    //Exclude ID since we don't modify + status (isDone) since it has a separate function (updateStatus)

    const taskToModify = tasks.find((task) => {
      return task.id === id;
    });

    if (!taskToModify) {
      return false;
    }

    //Manual way, to change line by line
    // taskToModify.name = modification.name
    // taskToModify.category = modification.category

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

    if (taskToModify === undefined) {
      return undefined;
    }

    taskToModify.isDone = modification;

    // let keys = Object.keys(modification);
    // let value = Object.values(modification);
    // console.log(value);

    // taskToModify[keys] = [...value];

    // keys.map((key) => {
    //   taskToModify[key] = modification[key];
    // });

    return taskToModify;
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

    return true;
  },
};
