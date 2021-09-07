"use strict";

import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TitleText from "./header-parts/title.jsx";
import HomeButton from "./header-parts/home.jsx";
import AboutButton from "./header-parts/about.jsx";
import Sidebar from "./sidebar.jsx";

const styles = theme => ({
  appBar: {
    flexGrow: 1
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            { this.props.hasSidebar && <Sidebar /> }
            <TitleText />
            <HomeButton />
            <AboutButton />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default withStyles(styles)(Header);
