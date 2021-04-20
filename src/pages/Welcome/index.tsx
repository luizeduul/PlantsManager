import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

import wateringImg from "../../assets/watering.png";

import {
  Container,
  Image,
  TitleText,
  SubtitleText,
  ButtonNext,
  ViewWrapper,
} from "./styles";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate('UserIdentification');
  }, []);

  return (
    <Container>
      <ViewWrapper>
        <TitleText>
          Gerencie {"\n"}
          suas plantas de{"\n"}
          forma fácil.
        </TitleText>
        <Image source={wateringImg} resizeMode="contain" />
        <SubtitleText>
          Não esqueça mais de regar suas plantas. Nós cuidamos de te lembrar
          sempre que precisar
        </SubtitleText>
        <ButtonNext onPress={handleStart}>
          <Feather name="chevron-right" size={32} color="#FFF" />
        </ButtonNext>
      </ViewWrapper>
    </Container>
  );
};

export default Welcome;
