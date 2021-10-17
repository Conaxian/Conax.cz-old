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
      <Box sx={{ mx: 4, mt: 4 }}>
        <SubjectsNav />
      </Box>
    );
  }
}

export default NotePage;
