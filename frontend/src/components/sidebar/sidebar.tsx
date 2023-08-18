import { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { Profile } from "../profile/profile";
import { CreateATask } from "../createATask/createATask";
import { dashBoardprops } from "../../pages/dashboard";

export const Sidebar: FC<dashBoardprops> = (props): ReactElement => {

  const { tasks, setTasks } = props;

  return (
    <Grid
      item
      md={4}
      sx={{
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        backgroundColor: "#191919",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile name = "Bojack"/>
      <CreateATask tasks = {tasks} setTasks = {setTasks} />
    </Grid>
  );
};
