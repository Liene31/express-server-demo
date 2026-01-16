import { Router } from "express";
import { taskController } from "../controllers/task.controller.js";
import { idValidatorMiddleware } from "../middlewares/idValidator.middleware.js";
import { isValidName } from "../middlewares/isValidName.js";
import { isValidValue } from "../middlewares/isValidValue.js";

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

taskRouter.put(
  "/:id",
  isValidName(),
  idValidatorMiddleware(),
  taskController.update
);

taskRouter.patch(
  "/:id",
  isValidValue(),
  idValidatorMiddleware(),
  taskController.updateStatus
);

taskRouter.delete("/:id", idValidatorMiddleware(), taskController.delete);

export default taskRouter;
