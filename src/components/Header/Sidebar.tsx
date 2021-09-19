import { Component as ReactComponent } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import MenuButton from "./MenuButton";

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

interface State {
  shown: boolean,
}

class Sidebar extends ReactComponent {
  state: Readonly<State>;

  constructor(props: object) {
    super(props);
    this.state = { shown: false };
  }

  toggleShow(open: boolean) {
    return (state: Readonly<object>) => {
      this.setState({ shown: open });
    }
  }

  render() {
    return (
      <>
        <MenuButton onClick={ this.toggleShow(true) } />
        <SwipeableDrawer anchor="left" open={ this.state.shown }
        onOpen={ this.toggleShow(true) } onClose={ this.toggleShow(false) }
        disableBackdropTransition={ iOS } disableDiscovery={ iOS }>
          <Box sx={{ width: 250 }} />
        </SwipeableDrawer>
      </>
    );
  }
}

export default Sidebar;
