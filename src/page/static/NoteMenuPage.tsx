import { Component } from "react";
import { Box } from "@mui/material";

import SubjectsList from "../../components/SubjectsList";

class NotePage extends Component {
  render() {
    return (
      <Box sx={{ mx: 4, mt: 4 }}>
        <SubjectsList />
      </Box>
    );
  }
}

export default NotePage;
