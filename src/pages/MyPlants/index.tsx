import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

/* eslint-ignore /*
/* @ts-ignore */
import { formatDistance, ptBR } from 'date-fns';

import { PlantProps, loadPlants, removePlant } from '../../libs/Storage';

import Header from '../../components/Header';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import Load from '../../components/Load';

import imgWater from '../../assets/waterdrop.png';

import {
  Container,
  SpotlightView,
  SpotlightText,
  SpotlightImage,
  PlantsView,
  PlantTitle,
} from './styles';

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  function handleRemove(plant: PlantProps): void {
    Alert.alert('Remover', `Deseja remover a ${plant.name} ?`, [
      {
        text: 'Não 🙏',
        style: 'cancel',
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (err) {
            Alert.alert('Não foi possível remover 😢');
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const plantsStoraged = await loadPlants();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWaterd(
        `Não esqueça de regar à ${plantsStoraged[0].name} à ${nextTime}`
      );
      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  });

  if (loading) return <Load />;

  return (
    <Container>
      <Header />
      <SpotlightView>
        <SpotlightImage source={imgWater} />
        <SpotlightText>{nextWaterd}</SpotlightText>
      </SpotlightView>
      <PlantsView>
        <PlantTitle>Próximas regadas</PlantTitle>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </PlantsView>
    </Container>
  );
};

export default MyPlants;
