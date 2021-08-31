import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
            { this.props.hasMenu &&
            <IconButton edge="start" className={classes.menuButton}
            aria-label="menu">
              <MenuIcon />
            </IconButton> }
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
