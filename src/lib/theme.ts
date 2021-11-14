import { createTheme } from "@mui/material";

import { css as rgb } from "./Color";

const commonTheme = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Encode Sans"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};

export const lightTheme = createTheme({
  ...commonTheme,

  palette: {
    mode: "light",

    primary: {
      main: rgb(66, 165, 245),
    },

    secondary: {
      main: rgb(102, 187, 106),
    },

    background: {
      default: rgb(255, 255, 255),
      paper: rgb(242, 242, 255),
    },

    text: {
      primary: rgb(0, 0, 0),
      secondary: rgb(0, 0, 0),
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,

  palette: {
    mode: "dark",

    primary: {
      main: rgb(25, 118, 210),
      contrastText: rgb(255, 255, 255),
    },

    secondary: {
      main: rgb(56, 142, 60),
    },

    background: {
      default: rgb(34, 34, 38),
      paper: rgb(46, 46, 55),
    },

    text: {
      primary: rgb(255, 255, 255),
      secondary: rgb(255, 255, 255),
    },
  },
});
