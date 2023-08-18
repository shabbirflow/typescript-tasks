import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import bodyParser from "body-parser";
import cors from "cors";
import { Task } from "./src/tasks/tasksEntity";
import { taskRouter } from "./src/tasks/tasksRouter";

dotenv.config();
const app: Express = express(); //instantiate express app

app.use(bodyParser.json()); //Parse request body
app.use(cors()); //use cors install types

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

const port = process.env.PORT; //server port

app.use("/", taskRouter);

appDataSource
  .initialize()
  .then(() => {
    app.listen(port); //start listening on port
    console.log("Data Source has been initialized! GREAT!");
  })
  .catch((err) => {
    console.error("Error while initializing data source! NOT GOOD!!", err);
  });
