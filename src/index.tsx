import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./common/theme";

function load() {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
}

declare global {
  interface Window { appGlobal: AppGlobal; }
}

interface AppGlobal {
  load: () => void;
}

window.appGlobal = { load };
