import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../../common";
import {
  AppHeader,
  Screen,
  TextComponent,
  TextElement,
} from "../../../components";
import useAuth from "../../../hook/useAuth";
import { IonIcons } from "../../../common/Icons";
import loginbg from '../../../../assets/images/loginbg.jpg'

const LoginScreen = () => {
  const { Login } = useAuth();

  GoogleSignin.configure({
    webClientId:
      "298606495457-kq0uo7ska2f0vq3hcqtnbgj8tkdklro0.apps.googleusercontent.com",
    offlineAccess: true,
  });

  const onGoogleButtonPress = async () => {
    try {
      const { user } = await GoogleSignin.signIn();
      Login(user);
      await GoogleSignin.signOut();
    } catch (error) { }
  };

  const navigation = useNavigation();
  return (
    <Screen>
      <View>
        <View style={styles.backIcon}>
          <IonIcons
            name="ios-arrow-back-outline"
            color={Colors.blue}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent:"flex-start"}}>
        <ImageBackground source={loginbg} style={styles.loginimage}>
          <View style={styles.container}>
            <TextElement style={styles.loginHeading}>Welcome to NewsRead</TextElement>
            <TextElement style={{ color: "white", textAlign: "center" }}>Please, Login to our Application</TextElement>
            <TouchableOpacity
              style={styles.googleContainer}
              onPress={() => {
                onGoogleButtonPress();
              }}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../../../assets/images/G.png")}
                  style={styles.googleImage}
                />
                <Text style={styles.textGoogle}>Sign in with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  loginHeading: {
    paddingVertical: 15,
    // marginBottom: 180,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",

  },
  loginimage: {
    marginTop: 15
  },
  container: {
    marginVertical: 8,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,
    background: "#273B69",
    // elevation: 8,
  },
  googleContainer: {
    marginVertical: 8,
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: "white",
    elevation: 8,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  googleImage: {
    width: 30,
    height: 30,
  },
  textGoogle: {
    fontSize: 16,
    textTransform: "uppercase",
    color: Colors.black,
    marginLeft: 10,
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default LoginScreen;
