import { Component as ReactComponent, MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface Props {
  onClick: MouseEventHandler,
}

class MenuButton extends ReactComponent {
  props!: Props;

  render() {
    return (
      <IconButton color="inherit" onClick={ this.props.onClick }
      edge="start" aria-label="menu" sx={{ marginRight: 2 }}>
        <MenuIcon />
      </IconButton>
    );
  }
}

export default MenuButton;
