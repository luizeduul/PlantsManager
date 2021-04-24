import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Notifications from 'expo-notifications';
import Routes from './src/Navigation';

import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { PlantProps } from './src/libs/Storage';


export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark"/>
      <Routes />
    </>
  );
}
