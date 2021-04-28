import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import Button from '../../components/Button';
import colors from '../../styles/colors';

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
} from './styles';

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  function handleInputBlur(): void {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus(): void {
    setIsFocused(true);
  }

  function handleInputChange(value: string): void {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit(): Promise<void> {
    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch (err) {
      Alert.alert('Não foi possível salvar seu nome 😥!!');
    }
  }

  return (
    <Container>
      <KeyboardAdvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <ViewForm>
              <ViewHeader>
                <Emoji>{isFilled ? '😉' : '😀'}</Emoji>
                <TextTitle>Como podemos {'\n'} chamar você?</TextTitle>
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
                {name ? (
                  <Button
                    onPress={handleSubmit}
                    title="Confirmar"
                    activeOpacity={0.8}
                    color={colors.green}
                  />
                ) : (
                  <Button
                    title="Confirmar"
                    activeOpacity={0.8}
                    color={colors.gray}
                    disabled
                  />
                )}
              </ViewFooter>
            </ViewForm>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAdvoid>
    </Container>
  );
};

export default UserIdentification;
