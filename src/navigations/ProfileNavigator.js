import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../common/Routes";
import {
  AboutUsScreen,
  AccountScreen,
  ContactUsScreen,
  LanguageScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
  WeatherScreen,
} from "../screen/App";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen name={Routes.AccountScreen} component={AccountScreen} />
      <Stack.Screen
        name={Routes.PrivacyPolicyScreen}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name={Routes.AboutUsScreen} component={AboutUsScreen} />
      <Stack.Screen name={Routes.ContactUsScreen} component={ContactUsScreen} />
      <Stack.Screen name={Routes.LanguageScreen} component={LanguageScreen} />
      <Stack.Screen name={Routes.WeatherScreen} component={WeatherScreen} />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
