import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../common";
import TextElement from "./TextElement";

const CardOne = ({ title, image, onPressCardOne }) => {
  const dataSplit = (title) => {
    return title.substring(0, 80) + "...";
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressCardOne}>
        <ImageBackground style={styles.cardImage} source={{ uri: image }} />
        <TextElement style={styles.text}>{dataSplit(title)}</TextElement>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  text: {
    color: Colors.white,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    fontWeight: "bold",
    backgroundColor: "black",
    opacity: 0.8,
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 10,
    overflow: "hidden",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default CardOne;
