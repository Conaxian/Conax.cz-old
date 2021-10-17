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
  zs: "Basic Humanities",
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
      <Grid item xs={4}>
        <Button href={makeButtonUrl(code)}>
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
        <ButtonGroup variant="contained">{buttons}</ButtonGroup>
      </Grid>
    );
  }
}

export default SubjectsNav;
