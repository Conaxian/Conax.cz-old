import { Component } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

interface Props {
  subject: string;
  num: number;
}

const makeNoteUrl = (subject: string, num: number) =>
  `${window.location.protocol}//${window.location.host}/notes/${subject}/${num}`;

class NoteNav extends Component {
  props!: Readonly<Props>;

  render() {
    const previous = makeNoteUrl(this.props.subject, this.props.num - 1);
    const next = makeNoteUrl(this.props.subject, this.props.num + 1);
    console.log(previous);
    console.log(next);

    return (
      <Box sx={{ position: "fixed", width: "100%", bottom: 0 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Previous"
            href="/notes"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Subjects"
            href="/notes"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Next"
            href="/notes"
            icon={<RestoreIcon />}
          />
        </BottomNavigation>
      </Box>
    );
  }
}

export default NoteNav;
