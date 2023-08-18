import { Status } from "../../createATask/enums/status";

export type taskStatusType = | Status.completed | Status.inProgress | Status.toDo;

export interface iTaskCounter{
    count: number;
    status: taskStatusType;
}