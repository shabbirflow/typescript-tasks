import { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { iTaskCounter } from "./interfaces/iTaskCounter";
import { Status } from "../createATask/enums/status";
import { getStatusColor } from "./helpers/statusColor";
import { getStatusWord } from "./helpers/statusWord";
import PropTypes from "prop-types";

export const TaskCounter: FC<iTaskCounter> = (props): ReactElement => {
  const { status, count } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: "transparent",
            border: "5px solid",
            width: "96px",
            height: "96px",
            marginBottom: "16px",
            borderColor: `${getStatusColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {getStatusWord(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
    count: PropTypes.number.isRequired,
    status: PropTypes.oneOf([Status.inProgress, Status.completed, Status.toDo]).isRequired
}