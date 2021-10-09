import { Component } from "react";
import { Button } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

class HomeButton extends Component {
  render() {
    return (
    <Button href="/" color="inherit" startIcon={ <HomeIcon /> }
    sx={{ marginX: 1, fontWeight: 700 }}>
      Home
    </Button>
    );
  }
}

export default HomeButton;
