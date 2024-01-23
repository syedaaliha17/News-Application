import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../common";

const TextElement = ({ children, style }) => {
  return <Text style={{ ...styles.container, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    color: Colors.blue,
  },
});

export default TextElement;
