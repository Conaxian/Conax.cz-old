import { Component } from "react";
import { AppBar, Toolbar } from "@mui/material";

import Sidebar from "./Sidebar";
import TitleText from "./TitleText";
import AboutButton from "./AboutButton";
import ThemeButton from "./ThemeButton";

class Header extends Component {
  render() {
    return (
      <>
        <AppBar position="fixed" sx={{ flexGrow: 1, bgcolor: "primary.main" }}>
          <Toolbar>
            <Sidebar />
            <TitleText />
            <AboutButton />
            <ThemeButton />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default Header;
