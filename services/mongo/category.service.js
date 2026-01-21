import { Category } from "../../models/category.model.js";

export const categoryService = {
  find: async () => {
    try {
      const categories = await Category.find();
      return categories;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },

  findById: async (id) => {
    try {
      const searchedCategory = await Category.findById(id);
      return searchedCategory;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },

  create: async (category) => {
    try {
      const categoryToAdd = Category(category);
      await categoryToAdd.save();
      return categoryToAdd;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },

  delete: async (id) => {
    try {
      const categoryToDelete = await Category.findByIdAndDelete(id);
      console.log(categoryToDelete);
      if (categoryToDelete) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  isUsed: async (id) => {
    try {
      //////
    } catch (err) {
      throw new Error(err);
    }
  },

  nameAlreadyExist: async (name) => {
    try {
      const searchedCategory = await Category.findOne({ name: name });

      if (searchedCategory) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
};
