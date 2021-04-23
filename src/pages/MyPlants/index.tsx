import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-svg";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import { PlantProps, loadPlants } from "../../libs/Storage";

import Header from "../../components/Header";
import PlantCardSecondary from "../../components/PlantCardSecondary";

import imgWater from "../../assets/waterdrop.png";

import {
  Container,
  SpotlightView,
  SpotlightText,
  SpotlightImage,
  PlantsView,
  PlantTitle,
} from "./styles";

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
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
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </PlantsView>
    </Container>
  );
};

export default MyPlants;
