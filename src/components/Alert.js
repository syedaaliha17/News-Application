import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";

import { Colors } from "../common";
import ButtonComponent from "./ButtonComponent";
import lang from "../common/languages/lang";

const Alert = ({ title, description, isVisible, setIsVisible, onAccept }) => {
  const { t } = useTranslation();
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            // title={t(lang.yes)}
            title="Yes"
            onPress={onAccept}
            style={styles.yes}
            textStyle={styles.btnColor}
          />
          <ButtonComponent
            // title={t(lang.no)}
            title="No"
            onPress={() => setIsVisible(false)}
            style={styles.no}
            textStyle={styles.btnColor}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
  no: {
    backgroundColor: Colors.red,
    width: "40%",
  },
  btnColor: {
    color: Colors.white,
  },
  yes: {
    backgroundColor: Colors.blue,
    width: "40%",
  },
  title: {
    color: Colors.red,
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
  description: {
    textAlign: "center",
    paddingVertical: 10,
    color: Colors.black,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Alert;
