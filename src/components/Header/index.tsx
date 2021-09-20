import { Component } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import TitleText from "./TitleText";
import HomeButton from "./HomeButton";
import AboutButton from "./AboutButton";

class Header extends Component {
  render() {
    return (<>
      <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Sidebar />
          <TitleText />
          <HomeButton />
          <AboutButton />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>);
  }
}

export default Header;
