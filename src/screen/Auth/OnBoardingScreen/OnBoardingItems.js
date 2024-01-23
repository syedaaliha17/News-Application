import React from "react";
import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import { Colors } from "../../../common";
import { FontAwesome5, MaterialIcons, Fontisto } from "../../../common/Icons";

const OnBoardingItems = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={[styles.image, { width }]}>
        {item.icon === "verified" || item.icon === "mobile-friendly" ? (
          <MaterialIcons name={item.icon} color={Colors.blue} size={100} />
        ) : item.icon === "category" ? (
          <MaterialIcons name={item.icon} color={Colors.blue} size={100} />
        ) : (
          <Fontisto name={item.icon} color={Colors.blue} size={100} />
        )}
      </View>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: Colors.blue,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});

export default OnBoardingItems;
