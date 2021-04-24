import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { PlantProps } from "../../libs/Storage";
import api from "../../services/api";

import EnvironmentButton from "../../components/EnvironmentButton";
import Header from "../../components/Header";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import Load from "../../components/Load";

import {
  Container,
  TitleText,
  SubtitleText,
  ViewHeader,
  Loading,
  styles,
} from "./styles";

interface EnvironmentProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");

  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setloadingMore] = useState(false);

  const navigation = useNavigation();

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate("PlantSave", { plant });
  };

  function handleEnvironmentSelected(environment: string){
    setEnvironmentSelected(environment);

    if (environment === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment)
    );
    setFilteredPlants(filtered);
  };

  async function fetchEnvironment(){
    const { data } = await api.get("plants_environments?_sort=title&order=asc");

    setEnvironments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  };

  useEffect(() => {
    fetchEnvironment();
  }, []);

  async function fetchPlants(){
    const { data } = await api.get(
      `plants?_sort=name&order=asc&_page=${page}`
    );

    if (!data) return setLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setloadingMore(false);
  };

  function handleFetchMore(distance: number){
    if (distance < 1) return;

    setloadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <Load />;
  return (
    <Container>
      <ViewHeader>
        <Header />
        <TitleText>Em qual ambiente</TitleText>
        <SubtitleText>você quer colocar sua planta?</SubtitleText>
      </ViewHeader>
      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={loadingMore ? <Loading /> : null}
        />
      </View>
    </Container>
  );
};

export default PlantSelect;
