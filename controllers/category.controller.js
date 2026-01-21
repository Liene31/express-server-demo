import { fakeCategoryService } from "../services/fake/fake.category.service.js";
import { categoryService } from "../services/mongo/category.service.js";

export const categoryController = {
  getAll: async (req, res) => {
    try {
      const categories = await categoryService.find();
      res.status(200).json(categories);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const category = await categoryService.findById(id);

      if (!category) {
        res
          .status(404)
          .json({ statusCode: 404, message: "Category not found" });
      }

      res.status(200).json(category);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  insert: async (req, res) => {
    const categoryToAdd = req.body;

    try {
      const exist = await categoryService.nameAlreadyExist(categoryToAdd.name);
      if (exist) {
        res.status(409).json({
          statusCode: 409,
          message: `Category ${categoryToAdd.name} already exist`,
        });
      } else {
        const addedCategory = await categoryService.create(categoryToAdd);
        res.location(`/api/categories/${addedCategory.id}`);
        res.status(201).send(addedCategory);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
  update: (req, res) => {
    const categoryId = req.params.id;
    const categoryUpdated = req.body;
    categoryUpdated.id = categoryId;
    res.status(200).send(categoryUpdated);
  },
  delete: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const isUsed = await categoryService.isUsed(categoryId);
      const isDeleted = await categoryService.delete(categoryId);
      console.log(isDeleted);
      if (isDeleted) {
        res.sendStatus(204);
      } else {
        res.status(404).json({
          statusCode: 404,
          message:
            "Not possible to delete the category, the category doesn't exist",
        });
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
};
