"use strict";

import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class TitleText extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography className={classes.root} variant="h6" noWrap>
        Conax
      </Typography>
    );
  }
}

export default withStyles(styles)(TitleText);
