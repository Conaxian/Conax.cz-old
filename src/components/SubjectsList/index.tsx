import { Component } from "react";
import { Grid } from "@mui/material";

import SubjectButton, { SUBJECTS, SubjectCode } from "./SubjectButton";

class SubjectsList extends Component {
  private *makeButtons() {
    for (const code in SUBJECTS) {
      yield <SubjectButton code={code as SubjectCode} />;
    }
  }

  render() {
    const buttons = Array.from(this.makeButtons());

    return (
      <Grid container spacing={2}>
        {buttons}
      </Grid>
    );
  }
}

export default SubjectsList;
