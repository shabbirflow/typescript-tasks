import { ReactElement, FC, useState } from "react";
import { Grid } from "@mui/material";
import { TaskArea } from "../components/taskArea/taskArea";
import { Sidebar } from "../components/sidebar/sidebar";
import { ITaskApi } from "../components/createATask/interfaces/ITaskApi";

export interface dashBoardprops {
  tasks: ITaskApi | undefined;
  setTasks: React.Dispatch<React.SetStateAction<ITaskApi | undefined>>;
}

const Dashboard: FC = (): ReactElement => {
  const [tasks, setTasks] = useState<ITaskApi | undefined>(undefined);

  console.log("HEHE", tasks);
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea tasks={tasks} setTasks={setTasks} />
      <Sidebar tasks={tasks} setTasks={setTasks} />
    </Grid>
  );
};

export default Dashboard;
