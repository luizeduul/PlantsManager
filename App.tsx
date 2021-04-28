import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';

import Routes from './src/Navigation';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Routes />
    </>
  );
};

export default App;
