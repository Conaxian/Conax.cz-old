import { Component } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

class NoteNav extends Component {
  render() {
    return (
      <Box sx={{ position: "fixed", width: "100%", bottom: 0, mt: 8 }}>
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
