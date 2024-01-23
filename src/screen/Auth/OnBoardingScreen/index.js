import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";

import { ButtonComponent, Screen, TextElement } from "../../../components";
import slides from "./slides";
import Paginator from "./Paginator";
import { Colors } from "../../../common";
import Routes from "../../../common/Routes";
import { useNavigation } from "@react-navigation/native";
import OnBoardingItems from "./OnBoardingItems";

function OnBoardingScreen() {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <Screen>
      <TextElement style={styles.logo}>NewsRead</TextElement>
      <TextElement style={styles.subHeading}>
        Explore and Engaged with NewsRead
      </TextElement>
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnBoardingItems item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
      <ButtonComponent
        textStyle={{ textTransform: "uppercase" }}
        style={{ marginBottom: 20 }}
        title="Login"
        onPress={() => navigation.navigate(Routes.LoginScreen)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: { width: "80%", alignSelf: "center", marginVertical: "7%" },

  logo: {
    alignSelf: "center",
    marginTop: "8%",
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.blue,
  },
  subHeading: {
    alignSelf: "center",
    marginTop: "2%",
    fontSize: 18,
    color: Colors.blue,
  },
  signUp: {
    color: Colors.white,
  },
  createAccountContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: "5%",
  },
});

export default OnBoardingScreen;
