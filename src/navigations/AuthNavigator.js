import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../common/Routes";
import { LoginScreen, SplashScreen } from "../screen/Auth";
import OnBoardingScreen from "../screen/Auth/OnBoardingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Stack.Screen
        name={Routes.OnBoardingScreen}
        component={OnBoardingScreen}
      />
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
