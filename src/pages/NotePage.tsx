import { Component } from "react";
import { Box } from "@mui/material";

import Markdown from "../components/Markdown";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    let note = this.props.note;
    note = note.replace(/([^#])###([^#])/g, "$1##$2");
    note = note.replace(/([^#])######([^#])/g, "$1###$2");

    return (
    <Box sx={{ marginX: 4 }}>
      <Markdown text={ note } />
    </Box>
    );
  }
}

export default NotePage;
