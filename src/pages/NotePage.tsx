import { Component } from "react";
import { Box } from "@mui/material";

import Markdown from "../components/Markdown";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <Box sx={{ marginX: 4 }}>
        <Markdown text={this.props.note} />
      </Box>
    );
  }
}

export default NotePage;
