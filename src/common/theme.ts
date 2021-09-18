import createTheme from "@mui/material/styles/createTheme";

export default createTheme({
  palette: {
    primary: {
      main: "#4c4c53",
    },
    secondary: {
      main: "#ff00ff",
    },
    background: {
      default: "#ffffff",
    },
    action: {
      active: "#393b41",
    },
  },

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
      '"Segoe UI Symbol"'
    ].join(","),
  },
});
