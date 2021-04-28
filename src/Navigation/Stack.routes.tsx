import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';
import AuthTabRoutes from './Tab.routes';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIdentification" component={UserIdentification} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelect" component={AuthTabRoutes} />
      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="MyPlants" component={AuthTabRoutes} />
    </Navigator>
  );
};

export default StackRoutes;
