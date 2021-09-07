"use strict";

import React from "react";
import { Button } from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
});

class HomeButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button color="inherit" className={classes.button}
      startIcon={<HomeIcon />}>
        Home
      </Button>
    );
  }
}

export default withStyles(styles)(HomeButton);
