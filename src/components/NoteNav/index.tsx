import { Component } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

class NoteNav extends Component {
  render() {
    return (
      <Paper sx={{ position: "fixed", width: "100%", bottom: 0 }} elevation={3}>
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
      </Paper>
    );
  }
}

export default NoteNav;
