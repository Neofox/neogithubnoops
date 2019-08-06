import React from "react";
import Container from "@material-ui/core/Container";
import { Typography, Grid } from "@material-ui/core";

const Index = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Typography variant="h4">
          Mini application where you can find many tests for Github noops
        </Typography>
      </Grid>
    </Container>
  );
};

export default Index;
