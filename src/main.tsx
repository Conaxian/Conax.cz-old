import { ComponentClass, createElement, StrictMode } from "react";
import { render as renderDOM } from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./common/theme";
import * as Pages from "./pages";

function load(pageName: string) {
  // @ts-ignore TS doesn't recognize that `Pages` contains React Components
  const Page: ComponentClass = Pages[pageName + "Page"].default;
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
