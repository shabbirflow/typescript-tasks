import { Priority } from "../enums/priority";
import { Status } from "../enums/status";

export interface ITaskApi{
    id: string;
    date: string;
    description: string;
    title: string;
    priority: `${Priority}`;
    status: `${Status}`;
}