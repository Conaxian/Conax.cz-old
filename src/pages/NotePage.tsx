import { Component } from "react";
import { Box } from "@mui/material";

import Markdown from "../components/Markdown";
import NoteNav from "../components/NoteNav";

interface Props {
  note: string;
  subject: string;
  num: number;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <>
        <Box sx={{ mx: 4, flexGrow: 1, mb: 9 }}>
          <Markdown text={this.props.note} />
        </Box>
        <NoteNav subject={this.props.subject} num={this.props.num} />
      </>
    );
  }
}

export default NotePage;
