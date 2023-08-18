import { Status } from "../../createATask/enums/status";
import { taskStatusType } from "../interfaces/iTaskCounter";

export const getStatusWord = (status: taskStatusType): string => {
    switch(status){
        case Status.completed:
            return 'Completed';
        case Status.inProgress:
            return 'In Progress';
        case Status.toDo:
            return 'To Do'
    }
}