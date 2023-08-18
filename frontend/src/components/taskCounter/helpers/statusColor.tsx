import { taskStatusType } from "../interfaces/iTaskCounter";
import { Status } from "../../createATask/enums/status";

export const getStatusColor = (status: taskStatusType): string => {

    switch(status){
        case Status.completed:
            return 'success.light';
        case Status.inProgress:
            return 'warning.light';
        case Status.toDo:
            return 'error.light';
    }

}