import { Component } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

class NoteNav extends Component {
  render() {
    return (
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation>
          <BottomNavigationAction
            label="Previous"
            href="/notes"
            color="primary"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Subjects"
            href="/notes"
            color="primary"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Next"
            href="/notes"
            color="primary"
            icon={<RestoreIcon />}
          />
        </BottomNavigation>
      </Box>
    );
  }
}

export default NoteNav;
