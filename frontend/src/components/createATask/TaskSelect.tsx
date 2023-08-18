import { FC, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectField } from "./interfaces/ISelectField";
import PropTypes from "prop-types";

export const TaskSelect: FC<ISelectField> = (props): ReactElement => {
  const {
    name,
    value,
    label,
    onChange = (e) => console.log(e),
    items = [{ value: "", label: "Add Items" }],
    disabled = false,
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {/* <MenuItem>10</MenuItem>
        <MenuItem>20</MenuItem>
        <MenuItem>30</MenuItem> */}
        {items.map((item, index) => {
          return (
            <MenuItem key={item.value + index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

TaskSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};
