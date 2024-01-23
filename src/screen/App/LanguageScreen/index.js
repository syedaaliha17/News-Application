import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { AppHeader, Screen } from "../../../components";
import { IonIcons } from "../../../common/Icons";
import SelectCard from "../../../components/SelectCard";
import { Colors } from "../../../common";
import lang from "../../../common/languages/lang";

const LanguageScreen = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const selectLanguages = [
    {
      id: 1,
      value: "en-US",
      label: "America",
    },
    {
      id: 2,
      value: "es",
      label: "Spain",
    },
  ];
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <AppHeader />
      <View style={styles.backIcon}>
        <IonIcons
          name="ios-arrow-back-outline"
          color={Colors.blue}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.heading}>Select Country</Text>
      {selectLanguages.map((item, index) => {
        return (
          <SelectCard
            key={index}
            onPress={() => {
              setLanguage(item.value);
              changeLanguage(item.value);
            }}
            title={item.label}
            selected={language === item.value}
          />
        );
      })}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  backIcon: {
    marginLeft: 20,
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: Colors.blue,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default LanguageScreen;
