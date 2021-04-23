import React, { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import Button from "../../components/Button";

import {
  Container,
  Content,
  Emoji,
  TitleText,
  SubTitleText,
  ViewFooter,
} from "./styles";
import colors from "../../styles/colors";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "hug" | "smile";
  nextScreen: string;
}

const emojis = {
  smile: "😄",
  hug: "🤗",
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  };
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <TitleText>{title}</TitleText>
        <SubTitleText>
          {subtitle}
        </SubTitleText>
        <ViewFooter>
          <Button
            onPress={handleMoveOn}
            title={buttonTitle}
            color={colors.green}
          />
        </ViewFooter>
      </Content>
    </Container>
  );
};

export default Confirmation;
