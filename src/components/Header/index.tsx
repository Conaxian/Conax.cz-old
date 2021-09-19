import React from "react";
import { AppBar, Toolbar } from "@mui/material";

class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="fixed" sx={{ flexGrow: 1 }}>
          <Toolbar>
            <p>Testing</p>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default Header;
