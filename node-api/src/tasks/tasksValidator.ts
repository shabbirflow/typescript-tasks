import { body, ValidationChain } from "express-validator";
import { Priority } from "../enums/priority";
import { Status } from "../enums/status";

export const createValidator: ValidationChain[] = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("Task must have a title")
    .isString()
    .withMessage("Title needs to be in text format ")
    .trim(),

  body("date")
    .not()
    .isEmpty()
    .withMessage("Task must have a date")
    .isString()
    .withMessage("Date needs to be in valid date format "),

  body("description")
    .isString()
    .withMessage("Description needs to be in text format ")
    .trim(),

  body("priority")
    .trim()
    .isIn([Priority.high, Priority.normal, Priority.low])
    .withMessage("Priority can only be normal, high or low"),

  body("status")
    .trim()
    .isIn([Status.todo, Status.completed, Status.inProgress])
    .withMessage("Status can only be todo, completed or in progress"),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The task id is mandatory')
    .trim()
    .isString()
    .withMessage('ID needs to be a valid uuid format'),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be todo, inProgress or completed',
    ),
];
