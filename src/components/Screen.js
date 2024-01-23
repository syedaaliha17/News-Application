import React, { useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    backgroundColor: "white",

    flex: 1,
  },
});

export default Screen;
