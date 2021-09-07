"use strict";

import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "40%",
    transform: "translateY(-40%)"
  },
  heading: {
    textAlign: "center",
    fontSize: "calc(1.5vw + 0.5rem)"
  }
});

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs className={classes.heading}>
          <h1>My name is Conax.</h1>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HomePage);
