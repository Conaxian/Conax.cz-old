import { Component } from "react";
import { Box } from "@mui/material";

import Markdown from "../components/Markdown";
import NoteNav from "../components/NoteNav";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <>
        <Box sx={{ mx: 4, flexGrow: 1, mb: 8 }}>
          <Markdown text={this.props.note} />
        </Box>
        <NoteNav />
      </>
    );
  }
}

export default NotePage;
