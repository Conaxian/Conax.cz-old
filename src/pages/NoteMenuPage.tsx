import { Component } from "react";
import { Box } from "@mui/material";

import SubjectsList from "../components/SubjectsList";
import NoteNav from "../components/NoteNav";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <Box sx={{ mx: 4, mt: 4 }}>
        <SubjectsList />
        <NoteNav />
      </Box>
    );
  }
}

export default NotePage;
