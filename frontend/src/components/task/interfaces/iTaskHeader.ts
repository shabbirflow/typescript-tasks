import React from "react";

export interface ITaskFooter {
  id: string;
  status?: string;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}

export interface iTaskHeader {
  title?: string;
  date?: Date;
}

export interface iTaskDescription {
  description?: string;
}

export interface iTask extends iTaskDescription, iTaskHeader, ITaskFooter {
  priority?: string;
}
