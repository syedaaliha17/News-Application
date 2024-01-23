import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "../../../components";
import styles from "./styles";
import Routes from "../../../common/Routes";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.OnBoardingScreen);
    }, 3000);
  }, []);
  return (
    <Screen>
      <Image
        style={styles.container}
        source={require("../../../../assets/images/logo.png")}
      />
    </Screen>
  );
};

export default SplashScreen;
