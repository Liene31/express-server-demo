import { fakeCategoryService } from "../services/fake/fake.category.service.js";

export const categoryController = {
  getAll: (req, res) => {
    const categories = fakeCategoryService.find();
    res.status(200).json(categories);
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const category = fakeCategoryService.findById(id);

    if (!category) {
      res.status(404).json({ statusCode: 404, message: "Category not found" });
    }

    res.status(200).json(category);
  },
  insert: (req, res) => {
    const categoryToAdd = req.body;
    const addedCategory = fakeCategoryService.create(categoryToAdd);

    res.location(`/api/categories/${addedCategory.id}`);
    res.status(201).send(addedCategory);
  },
  update: (req, res) => {
    const categoryId = req.params.id;
    const categoryUpdated = req.body;
    categoryUpdated.id = categoryId;
    res.status(200).send(categoryUpdated);
  },
  delete: (req, res) => {
    res.sendStatus(204);
  },
};
