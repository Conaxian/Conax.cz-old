import React from "react";
import { createTheme } from "@material-ui/core";
import {
  blue,
  amber,
  blueGrey
} from "@material-ui/core/colors";

const theme = createTheme({
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
      '"Open Sans"',
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

export default theme;
