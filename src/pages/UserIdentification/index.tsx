import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { Keyboard, Platform } from "react-native";
import Button from "../../components/Button";
import colors from "../../styles/colors";

import { TouchableWithoutFeedback } from "react-native";

import {
  Container,
  Content,
  Emoji,
  Input,
  TextTitle,
  ViewForm,
  ViewFooter,
  KeyboardAdvoid,
  ViewHeader,
} from "./styles";

function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>("");

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate("Confirmation");
  }

  return (
    <Container>
      <KeyboardAdvoid behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <ViewForm>
              <ViewHeader>
                <Emoji>{isFilled ? "😉" : "😀"}</Emoji>
                <TextTitle>Como podemos {"\n"} chamar você?</TextTitle>
              </ViewHeader>
              <Input
                placeholder="Digite seu nome"
                style={
                  (isFocused || isFilled) && { borderColor: colors.heading }
                }
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <ViewFooter>
                <Button
                  onPress={handleSubmit}
                  title="Confirmar"
                  activeOpacity={0.8}
                />
              </ViewFooter>
            </ViewForm>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAdvoid>
    </Container>
  );
}

export default UserIdentification;
