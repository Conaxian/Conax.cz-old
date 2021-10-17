import { Component } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

class NoteNav extends Component {
  render() {
    return (
      <BottomNavigation>
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
    );
  }
}

export default NoteNav;
