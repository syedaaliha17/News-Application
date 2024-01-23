import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../common/Routes';
import { EntertainmentScreen } from '../screen/App';

const Stack = createStackNavigator();

const EntertainmentNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.EntertainmentScreen}
        component={EntertainmentScreen}
      />
    </Stack.Navigator>
  );
};
export default EntertainmentNavigator;
