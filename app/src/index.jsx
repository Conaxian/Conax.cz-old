"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import App from "./app.jsx";
import theme from "./theme.js";
import pages from "./page-data";
import { fixPathname } from "./utils.js";

const pathName = fixPathname(window.location.pathname);
const pageData = pages[pathName];
console.assert(pageData, `Page data not found: ${pathName}`);

window.onload = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App pageData={pageData}/>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
