import { Component } from "react";
import { Button, ButtonGroup } from "@mui/material";

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
      <Button href={makeButtonUrl(code)}>
        {SUBJECTS[code as SubjectCode]}
      </Button>
    );
  }
}

class SubjectsNav extends Component {
  render() {
    const buttons = Array.from(makeButtons());

    return <ButtonGroup variant="contained">{buttons}</ButtonGroup>;
  }
}

export default SubjectsNav;
