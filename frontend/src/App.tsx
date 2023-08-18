import { FC, ReactElement } from "react";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./theme/customTheme";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Dashboard from "./pages/dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App: FC = (): ReactElement => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ComposeContext components={rootContext}> */}
      <ThemeProvider theme={customTheme}>
        <title>Task Manager</title>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
      {/* </ComposeContext> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
