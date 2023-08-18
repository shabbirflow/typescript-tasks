import { FC, ReactElement, useEffect } from "react";
import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import format from "date-fns/format";
import { TaskCounter } from "../taskCounter/taskCounter";
import { Task } from "../task/task";
import { useMutation, useQuery } from "react-query";
import { sendRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "../createATask/interfaces/ITaskApi";
import { Status } from "../createATask/enums/status";
import { iUpdateTask } from "../createATask/interfaces/IUpdateTask";
import { countTasks } from "../task/helpers/countTasks";
import { dashBoardprops } from "../../pages/dashboard";

export const TaskArea: FC<dashBoardprops> = (props): ReactElement => {
  const { tasks, setTasks } = props;

  const { error, isLoading, data } = useQuery(["tasks"], async () => {
    return await sendRequest<ITaskApi>("http://localhost:3200/tasks", "GET");
  });
  // console.log(data);
  setTasks(data);
  console.log("AFTERWARDS: ", tasks);

  const updateTaskMutation = useMutation((data: iUpdateTask) =>
    sendRequest("http://localhost:3200/tasks", "PUT", data)
  );

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      const myAsync = async () => {
        const newData = await sendRequest<ITaskApi>("http://localhost:3200/tasks", "GET");
        console.log("I AM NEWDATA: ", newData);
        setTasks(newData);
      }
      myAsync();
    }
  }, [updateTaskMutation.isSuccess]);

  const statusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.toDo,
    });
  };

  const markCompleteOnClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    updateTaskMutation.mutate({ id, status: Status.completed });
  };

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As On {format(new Date(), "PPPP")}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            count={countTasks(data, Status.toDo)}
            status={Status.toDo}
          />
          <TaskCounter
            count={countTasks(data, Status.inProgress)}
            status={Status.inProgress}
          />
          <TaskCounter
            count={countTasks(data, Status.completed)}
            status={Status.completed}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {error ? (
            <Alert severity="error">
              There was an error loading your tasks
            </Alert>
          ) : (
            <></>
          )}
          {!error && Array.isArray(data) && data.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks yet. Start by creating some tasks.
            </Alert>
          )}
          {isLoading ? (
            <LinearProgress />
          ) : (
            <ul>
              {Array.isArray(data) &&
                data.length > 0 &&
                data.map((x) => {
                  return x.status != Status.completed ? (
                    <Task
                      {...x}
                      key={x.id}
                      date={new Date(x.date)}
                      onStatusChange={statusChangeHandler}
                      onClick={markCompleteOnClick}
                    />
                  ) : (
                    false
                  );
                })}
            </ul>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
