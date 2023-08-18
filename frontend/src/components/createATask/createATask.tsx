import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { FC, ReactElement, useState, useEffect } from "react";
import { TaskTitle } from "./interfaces/taskTitle";
import { TaskDescription } from "./interfaces/taskDescription";
import { TaskDate } from "./taskDate";
import { TaskSelect } from "./TaskSelect";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";
import { useMutation } from "react-query";
import { sendRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "./interfaces/ICreateTask";
import { ITaskApi } from "./interfaces/ITaskApi";
import { dashBoardprops } from "../../pages/dashboard";

export const CreateATask: FC<dashBoardprops> = (props): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [status, setStatus] = useState<string>(Status.toDo);
  const [date, setDate] = useState<Date | null>(new Date());
  const [success, setSuccess] = useState<boolean>(false);

  const { tasks, setTasks } = props;

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendRequest("http://localhost:3200/tasks", "POST", data)
  );

  function createTaskHandler() {
    if (!title || !description || !date) return;
    const myTask = {
      title,
      description,
      priority,
      status,
      date: date.toString(),
    };
    console.log("YO", myTask);
    createTaskMutation.mutate(myTask);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setSuccess(true);
      const myAsync = async () => {
        const newData = await sendRequest<ITaskApi>("http://localhost:3200/tasks", "GET");
        console.log("I AM NEWDATA: ", newData);
        setTasks(newData);
      }
      myAsync();
    }
    const successTimeout = setTimeout(() => {
      setSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {success && (
        <Alert severity="success" sx={{ marginBotton: "16px", width: "100%" }}>
          <AlertTitle>Success</AlertTitle>
          The task was created successfully
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitle
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescription
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDate
          onChange={(date) => setDate(date)}
          value={date}
          disabled={createTaskMutation.isLoading}
        />

        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelect
            disabled={createTaskMutation.isLoading}
            name="status"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { label: Status.toDo.toUpperCase(), value: Status.toDo },
              {
                label: Status.inProgress.toUpperCase(),
                value: Status.inProgress,
              },
            ]}
          />
          <TaskSelect
            disabled={createTaskMutation.isLoading}
            name="priority"
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              { label: Priority.low.toUpperCase(), value: Priority.low },
              { label: Priority.normal.toUpperCase(), value: Priority.normal },
              { label: Priority.high.toUpperCase(), value: Priority.high },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
          disabled={
            createTaskMutation.isLoading ||
            !title ||
            !description ||
            !date ||
            !status ||
            !priority
          }
        >
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};
