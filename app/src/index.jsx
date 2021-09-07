"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import App from "./components/app.jsx";
import theme from "./common/theme.js";
import pages from "./common/page-data";
import { fixPathname } from "./common/utils.js";

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
