import { ITaskApi } from "../../createATask/interfaces/ITaskApi";
import { taskStatusType } from "../../taskCounter/interfaces/iTaskCounter";

export const countTasks = (tasks: ITaskApi | undefined, status: taskStatusType): number => {
    if(!Array.isArray(tasks)) return 0;
    let count: number = 0;
    tasks.map(x => x.status === status ? count++ : false)

    return count;
}