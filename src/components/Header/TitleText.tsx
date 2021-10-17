import { Component } from "react";
import { Typography, Link } from "@mui/material";

class TitleText extends Component {
  render() {
    return (
      <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 700 }}>
        <Link href="/" underline="none" sx={{ color: "primary" }}>
          Conax
        </Link>
      </Typography>
    );
  }
}

export default TitleText;
