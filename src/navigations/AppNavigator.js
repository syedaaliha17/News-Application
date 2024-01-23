import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { Colors, Icons } from "../common";
import HomeNavigator from "./HomeNavigator";
import BusinessNavigator from "./BusinessNavigator";
import EntertainmentNavigator from "./EntertainmentNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { useTranslation } from "react-i18next";
import lang from "../common/languages/lang";
import DetectionNavigator from "./DetectionNavigator";

const Tabs = AnimatedTabBarNavigator();

const AppNavigator = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.blue,
        activeBackgroundColor: Colors.blue,
        inactiveBackgroundColor: Colors.white,
      }}
    >
      <Tabs.Screen
        // name={t(lang.general)}
        name="General"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons.AntDesign
              name="home"
              size={size ? size : 24}
              color={focused ? color : Colors.blue}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        // name={t(lang.business)}
        name="Detection"
        component={DetectionNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons.MaterialCommunityIcons
              name="clipboard-text-search-outline"
              size={size ? size : 24}
              color={focused ? color : Colors.blue}
              focused={focused}
            />
          ),
        }}
      />
 
      <Tabs.Screen
        // name={t(lang.profile)}
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons.IonIcons
              name="person-outline"
              size={size ? size : 24}
              color={focused ? color : Colors.blue}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
export default AppNavigator;
