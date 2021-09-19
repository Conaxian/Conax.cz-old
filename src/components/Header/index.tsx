import { Component as ReactComponent } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";

class Header extends ReactComponent {
  render() {
    return (
      <>
        <AppBar position="fixed" sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Sidebar />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default Header;
