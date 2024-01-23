import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../common/Routes';
import {DetectionScreen} from '../screen/App';

const Stack = createStackNavigator();

const DetectionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.DetectionScreen}
        component={DetectionScreen}
      />
    </Stack.Navigator>
  );
};
export default DetectionNavigator;
