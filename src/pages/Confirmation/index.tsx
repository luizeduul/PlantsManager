import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/core";
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
  const navigation = useNavigation();
  const handleNavigateToPlantSelect = useCallback(() => {
    navigation.navigate('PlantSelect');
  }, []);
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <TitleText>Prontinho</TitleText>
        <SubTitleText>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitleText>
        <ViewFooter>
          <Button onPress={handleNavigateToPlantSelect}title="Começar" />
        </ViewFooter>
      </Content>
    </Container>
  );
};

export default Confirmation;
