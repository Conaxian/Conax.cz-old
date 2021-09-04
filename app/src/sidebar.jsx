"use strict";

import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuButton from "./menu-button.jsx";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const styles = theme => ({
  sidebar: {
    width: 250
  }
});

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  toggleShow(open) {
    return (state) => {
      this.setState({shown: open});
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <MenuButton onClick={this.toggleShow(true)} />
        <SwipeableDrawer anchor="left" open={this.state.shown}
        onOpen={this.toggleShow(true)} onClose={this.toggleShow(false)}
        disableBackdropTransition={iOS} disableDiscovery={iOS}>
          <div className={classes.sidebar}></div>
        </SwipeableDrawer>
      </>
    );
  }
}

export default withStyles(styles)(Sidebar);
