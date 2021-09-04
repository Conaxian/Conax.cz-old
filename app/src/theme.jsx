"use strict";

import React from "react";
import { createTheme } from "@material-ui/core";
import {
  blue,
  amber,
  blueGrey
} from "@material-ui/core/colors";

export default createTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: blueGrey[900]
    },
    secondary: {
      main: amber[500],
      contrastText: blueGrey[900]
    }
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
