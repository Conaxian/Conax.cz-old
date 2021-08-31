import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import App from "./app.jsx";
import theme from "./theme.jsx";
import pages from "./page-data";

const pageData = pages[window.location.pathname];
console.assert(pageData, "Page data not found");

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
