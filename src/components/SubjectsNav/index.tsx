import { Component } from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";

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

const makeButtonUrl = (code: string) =>
  `${window.location.protocol}//${window.location.host}/notes/${code}`;

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
        columns={{ xl: 11, lg: 12 }}
        justifyContent="center"
        textAlign="center"
        wrap="nowrap"
      >
        <Button
          href={makeButtonUrl(code)}
          color="secondary"
          variant="contained"
          fullWidth
        >
          {SUBJECTS[code as SubjectCode]}
        </Button>
      </Grid>
    );
  }
}

class SubjectsNav extends Component {
  render() {
    const buttons = Array.from(makeButtons());

    return (
      <Grid container spacing={2}>
        {buttons}
      </Grid>
    );
  }
}

export default SubjectsNav;
