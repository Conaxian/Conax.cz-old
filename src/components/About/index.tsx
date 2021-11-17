import { Component } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

class About extends Component {
  override render() {
    return (
      <Container>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              display="center"
              gutterBottom
              sx={{
                pt: "3vh",
                fontSize: "max(1.5rem, calc(1.5vw + 0.5rem))",
                fontWeight: 700,
              }}
            >
              Hi! My name is Jan Martin Macháček.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" display="block" gutterBottom>
              I'm a 15-year-old programmer from the Czech Republic.
              <br /> <br />
              This website is quite empty right now, but I'll be adding lots of
              cool stuff in the future.
              <br /> <br />
              If you want to contact me, send me an email to&nbsp;
              <Box
                sx={{
                  display: "inline",
                  color: "text.main",
                  bgcolor: "primary.main",
                  fontWeight: 700,
                  p: 0.3,
                }}
              >
                &nbsp;conax@conax.cz&nbsp;
              </Box>
              &nbsp;.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default About;
