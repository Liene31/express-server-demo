import { categories } from "./fakeDb.js";

export const fakeCategoryService = {
  find: () => {
    return categories;
  },

  findById: (id) => {
    return categories.find((category) => {
      return id === category.id;
    });
  },

  create: (categoryToAdd) => {
    categories.forEach((category) => {
      if (category.name.toLowerCase() === categoryToAdd.name.toLowerCase()) {
      }
    });

    //Finds the max number between IDs
    const idMax = Math.max(...categories.map((category) => category.id));
    //When max No found, add + 1
    categoryToAdd.id = idMax + 1;
    categories.push(categoryToAdd);
    //return only added category since for res.send needs added not whole object
    return categoryToAdd;
  },
};
