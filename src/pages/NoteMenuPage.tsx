import { Component } from "react";
import { Box } from "@mui/material";

import SubjectsList from "../components/SubjectsList";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <Box sx={{ mx: 4, mt: 4 }}>
        <SubjectsList />
      </Box>
    );
  }
}

export default NotePage;
