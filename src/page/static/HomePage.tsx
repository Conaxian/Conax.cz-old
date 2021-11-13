import { Component } from "react";
import { Grid } from "@mui/material";

class HomePage extends Component {
  render() {
    return (
      <Grid
        container
        sx={{
          flexGrow: 1,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Grid
          item
          xs
          sx={{
            textAlign: "center",
            fontSize: "calc(1.5vw + 0.5rem)",
          }}
        >
          <h1>This website</h1>
          <p>is under construction</p>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
