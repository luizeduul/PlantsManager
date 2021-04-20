import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from './src/Navigation';

import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";


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
