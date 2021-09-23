import { ComponentClass, createElement, StrictMode } from "react";
import { render as renderDOM } from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./common/theme";

async function load(pageName: string) {
  let Page: ComponentClass;
  switch (pageName) {
    case "Home":
      Page = (await import("./pages/HomePage")).default;
      break;
    case "About":
      Page = (await import("./pages/AboutPage")).default;
      break;
    default:
      throw new Error(`Unknown page: \`${pageName}\``);
  };
  const pageElem = createElement(Page);

  renderDOM(
    <StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <App page={ pageElem } />
      </ThemeProvider>
    </StrictMode>,
    document.getElementById("root"),
  );
}

declare global {
  interface Window { appGlobal: AppGlobal; }
}

interface AppGlobal {
  load: (pageName: string) => void;
}

window.appGlobal = { load };
