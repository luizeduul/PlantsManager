import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Alert, Platform } from 'react-native';
import { isBefore, format } from 'date-fns';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { PlantProps, savePlant } from '../../libs/Storage';

import imgWaterdrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import colors from '../../styles/colors';

import {
  Container,
  PlantNameText,
  PlantAboutText,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabelText,
  PlantInfo,
  ButtonChangeTime,
  ButtonChangeTimeText,
  Scroll,
} from './styles';

interface Params {
  plant: PlantProps;
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(_: Event, dateTime: Date | undefined): void {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Não pode escolher um horário que já passou! ⌚');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid(): void {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave(): Promise<void> {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha',
        buttonTitle: 'Muito obrigado',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch (err) {
      Alert.alert('Não foi possível salvar 😥!!', err);
    }
  }

  return (
    <Scroll>
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} width={150} height={150} />
          <PlantNameText>{plant.name}</PlantNameText>
          <PlantAboutText>{plant.about}</PlantAboutText>
        </PlantInfo>
        <Controller>
          <TipContainer>
            <TipImage source={imgWaterdrop} />
            <TipText>{plant.water_tips}</TipText>
          </TipContainer>
          <AlertLabelText>
            Escolha o melhor horário para ser lembrado:
          </AlertLabelText>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <ButtonChangeTime onPress={handleOpenDateTimePickerForAndroid}>
              <ButtonChangeTimeText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </ButtonChangeTimeText>
            </ButtonChangeTime>
          )}

          <Button
            title="Cadastrar planta"
            color={colors.green}
            onPress={handleSave}
          />
        </Controller>
      </Container>
    </Scroll>
  );
};

export default PlantSave;
