import { Component } from "react";
import { IconButton } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { ThemeContext } from "../Theme";

class ThemeButton extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={toggleTheme}
          >
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeButton;
