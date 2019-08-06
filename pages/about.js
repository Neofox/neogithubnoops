import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box my={6}>
        <Typography variant="h4" gutterBottom>
          Next.js - Material UI - React - Noopbots
        </Typography>
        <Link href="/">Go to the main page</Link>
      </Box>
    </Container>
  );
};

export default About;
