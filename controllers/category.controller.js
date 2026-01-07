export const categoryController = {
  getAll: (req, res) => {
    res.send("See all Categories");
  },
  getById: (req, res) => {
    const id = req.params.id;
    res.send(`Category with ID ${id}`);
  },
  insert: (req, res) => {
    const categoryToInsert = req.body;
    res.status(201).send(categoryToInsert);
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
