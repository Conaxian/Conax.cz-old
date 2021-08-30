import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import theme from "./theme.jsx";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none"
  }
};

class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="fixed" className={styles.root}>
          <Toolbar>
            <IconButton edge="start" classNmae={styles.menuButton}
            aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={styles.title} variant="h1">
              Conax
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default Header;
