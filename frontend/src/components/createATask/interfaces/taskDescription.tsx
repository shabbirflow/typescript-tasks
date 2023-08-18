import { TextField } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITextField } from "./ITextField";
import PropTypes from 'prop-types'

export const TaskDescription: FC<ITextField> = (props): ReactElement => {
    
  const {
    onChange = (e) => {
      console.log(e);
    },
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescription.propTypes = {
  disabled: PropTypes.bool, 
  onChange: PropTypes.func
}