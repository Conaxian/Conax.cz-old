import { Component } from "react";
import { Typography } from "@mui/material";

class TitleText extends Component {
  render() {
    return (
    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
      Conax
    </Typography>
    );
  }
}

export default TitleText;
