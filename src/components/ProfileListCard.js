import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../common";

const ProfileListCard = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 4,
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 10,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    height: 60,
    borderWidth: 2,
    borderColor: Colors.blue,
  },
  title: {
    color: Colors.blue,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "90%",
  },
});

export default ProfileListCard;
