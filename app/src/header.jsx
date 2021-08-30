import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar/>
      </>
    );
  }
}

export default Header;
