import { Request, Response } from "express";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { appDataSource } from "../..";
import { Task } from "./tasksEntity";
import { validationResult } from "express-validator";
import { UpdateResult } from "typeorm";

// @ts-ignore
export class TaskController {
  public async getAllTasks(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[];
    try {
      allTasks = await appDataSource.getRepository(Task).find({
        order: { date: "ASC" },
      });
      // console.log(allTasks);
      //converts tasks instance into an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (err) {
      console.log(err);
      return res.json({ error: "There was an error" }).status(500);
    }
  }

  public async createTask(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("BODY", req.body);

    let newTask = new Task();
    newTask = { ...req.body };
    let createdTask: Task;

    try {
      createdTask = await appDataSource.getRepository(Task).save(newTask);
      createdTask = instanceToPlain(createdTask) as Task;
      return res.json(createdTask).status(201);
    } catch (err) {
      console.log(err);
      return res.json({ error: "There was an error" }).status(500);
    }
  }

  public async updateTask(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let task: Task | null;
    console.log("BODY", req.body);
    try {
      task = await appDataSource
        .getRepository(Task, )
        .findOne({
          where: { id: req.body.id },
        });
      } catch (errors) {
        return res
          .json({ error: 'Internal Server Error' })
          .status(500);
      }

      if (!task) {
        return res.status(404).json({
          error: 'The task with given ID does not exist',
        });
      }

    let updatedTask: UpdateResult;
    try {
      updatedTask = await appDataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, {
          status: req.body.status,
        }),
      );

      updatedTask = instanceToPlain(updatedTask) as UpdateResult;
      return res.json(updatedTask).status(200);
    } catch (errors) {
      return res
        .json({ error: 'Internal Server Error' })
        .status(500);
    }
  }

}

export const taskController = new TaskController();
