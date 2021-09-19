import { StrictMode } from "react";
import { render as renderDOM } from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./common/theme";

function load() {
  renderDOM(
    <StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>,
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
