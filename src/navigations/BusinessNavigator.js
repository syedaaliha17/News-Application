import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../common/Routes';
import {BusinessDetailScreen, BusinessScreen} from '../screen/App';

const Stack = createStackNavigator();

const BusinessNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.BusinessScreen} component={BusinessScreen} />
      <Stack.Screen
        name={Routes.BusinessDetailScreen}
        component={BusinessDetailScreen}
      />
    </Stack.Navigator>
  );
};
export default BusinessNavigator;
