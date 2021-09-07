"use strict";

import React from "react";
import { Button } from "@material-ui/core";
import { Info as InfoIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
});

class AboutButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button color="inherit" className={classes.button}
      startIcon={<InfoIcon />}>
        About
      </Button>
    );
  }
}

export default withStyles(styles)(AboutButton);
