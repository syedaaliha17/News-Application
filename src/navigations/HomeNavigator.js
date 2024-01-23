import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../common/Routes";
import {
  HealthScreen,
  HomeDetailScreen,
  HomeScreen,
  BusinessScreen,
  BusinessDetailScreen,
  PakistanNewsDetailScreen,
  PakistanNewsScreen,
  SportScreen,
  WorldScreen,
  TechnologyScreen,
  USNewsScreen,
  UKNewsScreen,
  NationScreen,
  IndiaNewsScreen,
  ScienceScreen,
  EntertainmentScreen,
  CountryScreen,
  CategoryScreen
} from "../screen/App";
import DetectionScreen from "../screen/App/DetectionScreen";
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={Routes.SportScreen}
        component={SportScreen}
      />
      <Stack.Screen
        name={Routes.WorldScreen}
        component={WorldScreen}
      />
      <Stack.Screen
        name={Routes.TechnologyScreen}
        component={TechnologyScreen}
      />
      <Stack.Screen
        name={Routes.PakistanNewsScreen}
        component={PakistanNewsScreen}
      />
      <Stack.Screen
        name={Routes.PakistanNewsDetailScreen}
        component={PakistanNewsDetailScreen}
      />
      <Stack.Screen
        name={Routes.BusinessScreen}
        component={BusinessScreen}
      />
      <Stack.Screen
        name={Routes.BusinessDetailScreen}
        component={BusinessDetailScreen}
      />
      <Stack.Screen
        name={Routes.HealthScreen}
        component={HealthScreen}
      />
      <Stack.Screen
        name={Routes.HomeDetailScreen}
        component={HomeDetailScreen}
      />
      <Stack.Screen
        name={Routes.USNewsScreen}
        component={USNewsScreen}
      />
      <Stack.Screen
        name={Routes.UKNewsScreen}
        component={UKNewsScreen}
      />
      <Stack.Screen
        name={Routes.NationScreen}
        component={NationScreen}
      />
      <Stack.Screen
        name={Routes.IndiaNewsScreen}
        component={IndiaNewsScreen}
      />
      <Stack.Screen
        name={Routes.ScienceScreen}
        component={ScienceScreen}
      />
      <Stack.Screen
        name={Routes.EntertainmentScreen}
        component={EntertainmentScreen}
      />
      <Stack.Screen
        name={Routes.CountryScreen}
        component={CountryScreen}
      />
      <Stack.Screen
        name={Routes.CategoryScreen}
        component={CategoryScreen}
      />
    <Stack.Screen
        name={Routes.DetectionScreen}
        component={DetectionScreen}
      />

    </Stack.Navigator>
  );
};
export default HomeNavigator;
