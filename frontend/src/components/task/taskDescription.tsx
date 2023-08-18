import { FC, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { iTaskDescription } from "./interfaces/iTaskHeader";
import PropTypes from 'prop-types';

export const TaskDescription: FC<iTaskDescription> = (props): ReactElement => {
  const {
    description
  } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
}

