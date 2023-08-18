import { createTheme, ThemeOptions } from "@mui/material";

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#E2F6CA",
      main: "#5A96E3",
      dark: "#1D267D",
    },
  },
});
