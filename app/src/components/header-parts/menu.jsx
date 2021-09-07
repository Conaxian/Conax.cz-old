"use strict";

import React from "react";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    marginRight: theme.spacing(2)
  }
});

class MenuButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <IconButton color="inherit" onClick={this.props.onClick} edge="start"
      className={classes.button} aria-label="menu">
        <MenuIcon />
      </IconButton>
    );
  }
}

export default withStyles(styles)(MenuButton);
