import { Component, MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface Props {
  onClick: MouseEventHandler;
}

class MenuButton extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <IconButton
        color="inherit"
        onClick={this.props.onClick}
        edge="start"
        aria-label="menu"
        sx={{ ml: 1, mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
    );
  }
}

export default MenuButton;
