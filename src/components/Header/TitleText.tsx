import { Component } from "react";
import { Link } from "@mui/material";

class TitleText extends Component {
  render() {
    return (
      <Link
        href="/"
        underline="none"
        variant="h6"
        noWrap
        sx={{ flexGrow: 1, fontWeight: 700 }}
      >
        Conax
      </Link>
    );
  }
}

export default TitleText;
