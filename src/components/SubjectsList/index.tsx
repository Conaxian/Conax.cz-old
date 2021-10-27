import { Component } from "react";
import { Button, Grid } from "@mui/material";

interface Subjects {
  zs: string;
  bi: string;
  ch: string;
  cj: string;
  aj: string;
  ze: string;
  de: string;
  ma: string;
  eh: string;
  fy: string;
  sj: string;
}

type SubjectCode = keyof Subjects;

const SUBJECTS: Subjects = {
  zs: "Humanities",
  bi: "Biology",
  ch: "Chemistry",
  cj: "Czech",
  aj: "English",
  ze: "Geography",
  de: "History",
  ma: "Mathematics",
  eh: "Music",
  fy: "Physics",
  sj: "Spanish",
};

function* makeButtons() {
  for (const code in SUBJECTS) {
    yield (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        xl={1}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 11 }}
        justifyContent="center"
        textAlign="center"
      >
        <Button
          href={`/notes/${code}`}
          color="secondary"
          variant="contained"
          fullWidth
          sx={{ fontWeight: 700 }}
        >
          {SUBJECTS[code as SubjectCode]}
        </Button>
      </Grid>
    );
  }
}

class SubjectsList extends Component {
  render() {
    const buttons = Array.from(makeButtons());

    return (
      <Grid container spacing={2}>
        {buttons}
      </Grid>
    );
  }
}

export default SubjectsList;
