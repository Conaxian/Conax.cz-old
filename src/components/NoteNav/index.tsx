import { Component } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  MenuBook as MenuBookIcon,
} from "@mui/icons-material";

interface Props {
  subject: string;
  num: number;
}

function makeNoteUrl(subject: string, num: number) {
  return `/notes/${subject}/${num}`;
}

class NoteNav extends Component {
  props!: Readonly<Props>;

  render() {
    const previous = makeNoteUrl(this.props.subject, this.props.num - 1);
    const next = makeNoteUrl(this.props.subject, this.props.num + 1);

    return (
      <Box sx={{ position: "fixed", width: "100%", bottom: 0 }}>
        <BottomNavigation showLabels sx={{ bgcolor: "secondary.main" }}>
          <BottomNavigationAction
            label={"Previous"}
            href={previous}
            icon={<ArrowBackIcon />}
          />
          <BottomNavigationAction
            label="Subjects"
            href="/notes"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label={"Next"}
            href={next}
            icon={<ArrowForwardIcon />}
          />
        </BottomNavigation>
      </Box>
    );
  }
}

export default NoteNav;
