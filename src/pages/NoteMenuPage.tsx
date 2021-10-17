import { Component } from "react";
import { Box } from "@mui/material";

import SubjectsNav from "../components/SubjectsNav";

interface Props {
  note: string;
}

class NotePage extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <Box sx={{ marginX: 4, marginTop: 2 }}>
        <SubjectsNav />
      </Box>
    );
  }
}

export default NotePage;
