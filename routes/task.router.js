import { Router } from "express";
import { taskController } from "../controllers/task.controller.js";

const taskRouter = Router();

//More structured version to organize the code based on URL
// taskRouter
//   .route("/")
//   .get((req, res) => {
//     res.send("List of all the tasks");
//     console.log(req.query);
//   })
//   .post((req, res) => {
//     const taskToInsert = req.body;
//     res.status(201).send(taskToInsert);
//   });

taskRouter.get("/", taskController.getAll);

taskRouter.get("/:id", taskController.getById);

taskRouter.get("/user/:id", taskController.getByUserId);

taskRouter.post("/", taskController.insert);

taskRouter.put("/:id", taskController.update);

taskRouter.patch("/:id", taskController.updateStatus);

taskRouter.delete("/:id", taskController.delete);

export default taskRouter;
