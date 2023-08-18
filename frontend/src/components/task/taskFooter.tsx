import { Box, FormControlLabel, Switch, Button } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskFooter } from "./interfaces/iTaskHeader";
import PropTypes from 'prop-types';
import { Status } from "../createATask/enums/status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id, status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" onChange={(e) => onStatusChange(e, id)} defaultChecked = {status === Status.inProgress} />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
    onClick: PropTypes.func,
    onStatusChange: PropTypes.func,
    id: PropTypes.string.isRequired,
    status: PropTypes.string
}
