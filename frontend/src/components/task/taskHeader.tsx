import { FC, ReactElement } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { iTaskHeader } from "./interfaces/iTaskHeader";
import format from "date-fns/format";
import PropTypes from "prop-types";

export const TaskHeader: FC<iTaskHeader> = (props): ReactElement => {
  const { title = "Default Title I am", date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={2.5}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, "PPP")} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
