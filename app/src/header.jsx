"use strict";

import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from "./sidebar.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            { this.props.hasSidebar && <Sidebar /> }
            <Typography className={classes.title} variant="h6" noWrap>
              Conax
            </Typography>
            <Button className={classes.button}>
              Home
            </Button>
            <Button className={classes.button}>
              About
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default withStyles(styles)(Header);
