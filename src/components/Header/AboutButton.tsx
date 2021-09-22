import { Component } from "react";
import { Button } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

class AboutButton extends Component {
  render() {
    return (
      <Button href="/about" color="inherit" startIcon={ <InfoIcon /> }
      sx={{ marginLeft: 1, marginRight: 1 }}>
        Info
      </Button>
    );
  }
}

export default AboutButton;
