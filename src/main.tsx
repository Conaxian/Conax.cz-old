import { ComponentClass, createElement, StrictMode } from "react";
import { render as renderDOM } from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./common/theme";

async function getPage(pageName: string): Promise<ComponentClass> {
  switch (pageName) {
    case "Home":
      return (await import("./pages/HomePage")).default;
    case "About":
      return (await import("./pages/AboutPage")).default;
    default:
      throw new Error(`Unknown page: \`${pageName}\``);
  };
}

async function load(pageName: string) {
  const Page = await getPage(pageName);
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
