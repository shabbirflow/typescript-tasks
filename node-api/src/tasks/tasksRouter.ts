import { createValidator, updateValidator } from "./tasksValidator";
import { Router } from "express";
import { taskController } from "./tasksController";

export const taskRouter: Router = Router(); // Router Function

//default route
taskRouter.get("/tasks", taskController.getAllTasks);

taskRouter.post("/tasks", createValidator, taskController.createTask);

taskRouter.put("/tasks", updateValidator, taskController.updateTask);
