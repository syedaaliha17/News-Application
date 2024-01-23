import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Tts from "react-native-tts";
import { Entypo, IonIcons } from "../common/Icons";
import { Colors } from "../common";
import TextElement from "./TextElement";

const TextVoice = ({ descriptionText }) => {
  const [state, setState] = useState({
    voices: [],
    ttsStatus: "initiliazing",
    selectedVoice: null,
    speechRate: 0.5,
    speechPitch: 1,
    text: descriptionText,
  });

  // const initTts = async () => {
  //   const voices = await Tts.voices();
  //   if (voices && voices.state.length > 0) {
  //     try {
  //       await Tts.setDefaultLanguage("en-US");
  //     } catch (err) {
  //       console.log(`setDefaultLanguage error `, err);
  //     }
  //   } else {
  //     setState({ ttsStatus: "initialized" });
  //   }
  // };

  const readText = async () => {
    Tts.speak(state.text);
  };

  const stopText = async () => {
    Tts.stop(state.text);
  };

  // useEffect(() => {
  //   initTts();
  // }, []);
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 20,

            paddingHorizontal: 10,
            paddingVertical: 10,
            width: "90%",
            alignItems: "center",
            elevation: 3,
            backgroundColor: Colors.white,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TextElement style={{ color: Colors.black }}>Start</TextElement>
            <TouchableOpacity onPress={readText}>
              <IonIcons name="play" size={20} color={Colors.blue} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <TextElement style={{ color: Colors.black }}>Stop</TextElement>
            <TouchableOpacity onPress={stopText}>
              <IonIcons name="stop" size={20} color={Colors.blue} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red",
  },
  label: {
    textAlign: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  sliderLabel: {
    textAlign: "center",
    marginRight: 20,
  },
  slider: {
    width: 150,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    width: "100%",
  },
});

export default TextVoice;
