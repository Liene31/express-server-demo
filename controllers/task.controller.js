export const taskController = {
  getAll: (req, res) => {
    res.send("List of all the tasks");
  },
  getById: (req, res) => {
    const id = req.params.id;
    res.send(`Task No ${id}`);
  },
  getByUserId: (req, res) => {
    const userId = req.params.id;
    res.send(`List of tasks for user with id ${userId}`);
  },
  insert: (req, res) => {
    const taskToInsert = req.body;
    res.status(201).send(taskToInsert);
  },
  update: (req, res) => {
    const taskId = req.params.id;
    const taskUpdated = req.body;
    taskUpdated.id = taskId;
    res.status(200).send(taskUpdated);
  },
  updateStatus: (req, res) => {
    res.send({ id: req.params.id, isDone: req.body.isDone });
  },
  delete: (req, res) => {
    res.sendStatus(204);
  },
};
