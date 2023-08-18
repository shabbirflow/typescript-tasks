import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectField extends IDisabled {
  name?: string;
  value?: string;
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[]
}

export interface ISelectItems{
    value: string; label: string;
}