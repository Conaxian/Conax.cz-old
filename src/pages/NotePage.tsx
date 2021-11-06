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
        <Box
          sx={{
            mx: { xs: 4, md: "10vw", lg: "15vw", xl: "20vw" },
            flexGrow: 1,
            mt: { md: 2, lg: 3, xl: 4 },
            mb: { xs: 9, md: 10, lg: 11, xl: 12 },
          }}
        >
          <Markdown text={this.props.note} />
        </Box>
        <NoteNav subject={this.props.subject} num={this.props.num} />
      </>
    );
  }
}

export default NotePage;
