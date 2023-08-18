import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { TaskHeader } from "./taskHeader";
import { TaskDescription } from "./taskDescription";
import { TaskFooter } from "./taskFooter";
import { iTask } from "./interfaces/iTaskHeader";
import { Status } from "../createATask/enums/status";
import { Priority } from "../createATask/enums/priority";
import PropTypes from 'prop-types';
import { getPriorityBorderColor } from "./helpers/getPriorityBorderColor";

export const Task: FC<iTask> = (props): ReactElement => {
  const {
    title = "Test Title",
    date = new Date(),
    description = "Lorem ipsum dolor sit amet",
    priority = Priority.high,
    status = Status.completed,
    onStatusChange,
    onClick,
    id
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "#151618",
        // backgroundColor: "yellow",
        borderRadius: "8px",
        border: "1px solid",
          borderColor: getPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title = {title} date = {date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} id = {id} status={status} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string
}