import { Component } from "react";
import { Button } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

class AboutButton extends Component {
  override render() {
    return (
      <Button
        href="/about"
        color="inherit"
        startIcon={<InfoIcon />}
        sx={{ mx: 1, fontWeight: 700 }}
      >
        About
      </Button>
    );
  }
}

export default AboutButton;
