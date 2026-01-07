import { categories, tasks } from "./fakeDb.js";

export const fakeTaskService = {
  find: () => {
    return tasks;
  },

  findById: (id) => {
    return tasks.find((task) => {
      return task.id === id;
    });
  },
};
