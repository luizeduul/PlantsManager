import React from "react";
import Button from "../../components/Button";

import {
  Container,
  Content,
  Emoji,
  TitleText,
  SubTitleText,
  ViewFooter,
} from "./styles";

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <TitleText>Prontinho</TitleText>
        <SubTitleText>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitleText>
        <ViewFooter>
          <Button title="Começar" />
        </ViewFooter>
      </Content>
    </Container>
  );
};

export default Confirmation;
