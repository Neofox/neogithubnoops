import React from "react";
import Container from "@material-ui/core/Container";
import DirectBot from "../src/components/DirectBot/DirectBot";
import axios from "axios";
import { DirectionProvider } from "../src/contexts/direction.context";
import { DIRECT_BOT_URL } from "../src/constants/directbot";

const DirectBotPage = ({ directions }) => {
  return (
    <Container maxWidth="lg">
      <DirectionProvider initialState={directions}>
        <DirectBot />
      </DirectionProvider>
    </Container>
  );
};

DirectBotPage.getInitialProps = async () => {
  const res = await axios.get(`${DIRECT_BOT_URL}?count=10`);

  return { ...res.data };
};

export default DirectBotPage;
