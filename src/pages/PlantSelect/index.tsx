import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";

import EnvironmentButton from "../../components/EnvironmentButton";
import Header from "../../components/Header";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import Load from "../../components/Load";

import api from "../../services/api";

import {
  Container,
  TitleText,
  SubtitleText,
  ViewHeader,
  styles,
} from "./styles";
import colors from "../../styles/colors";

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");

  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setloadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleEnvironmentSelected = useCallback((environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment)
    );
    setFilteredPlants(filtered);
  }, []);

  const fetchEnvironment = useCallback(async () => {
    const { data } = await api.get("plants_environments?_sort=title&order=asc");

    setEnvironments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  }, []);

  useEffect(() => {
    fetchEnvironment();
  }, []);

  const fetchPlants = useCallback(async () => {
    const { data } = await api.get(
      `plants?_sort=name&order=asc&_page=${page}&_limit=8`
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
  }, []);

  const handleFetchMore = useCallback((distance: number) => {
    if (distance < 1) return;

    setloadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }, []);

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
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={<ActivityIndicator color={colors.green} />}
        />
      </View>
    </Container>
  );
};

export default PlantSelect;
