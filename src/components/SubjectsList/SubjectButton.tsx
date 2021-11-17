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

export type SubjectCode = keyof Subjects;

export const SUBJECTS: Subjects = {
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

interface Props {
  code: SubjectCode;
}

class SubjectButton extends Component {
  override props!: Readonly<Props>;

  override render() {
    return (
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
          href={`/notes/${this.props.code}`}
          color="secondary"
          variant="contained"
          fullWidth
          sx={{ fontWeight: 700 }}
        >
          {SUBJECTS[this.props.code]}
        </Button>
      </Grid>
    );
  }
}

export default SubjectButton;
