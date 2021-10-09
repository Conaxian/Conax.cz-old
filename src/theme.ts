import { createTheme } from "@mui/material";

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
}

export const lightTheme = createTheme({
  ...commonTheme,

  palette: {
    mode: "light",

    primary: {
      main: "#42a5f5",
    },

    secondary: {
      main: "#66bb6a",
    },

    background: {
      default: "#ffffff",
      paper: "#f2f2ff",
    },

    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,

  palette: {
    mode: "dark",

    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#388e3c",
    },

    background: {
      default: "#222226",
      paper: "#2e2e37",
    },

    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
});
