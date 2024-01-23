import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const Dev_Height = Dimensions.get("window").height;
const Dev_Width = Dimensions.get("window").width;
import { ACNetwork, config } from "../../../config";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { Colors } from "../../../common";
import { IonIcons } from "../../../common/Icons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../../../components";

const WeatherScreen = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState();
  const navigation = useNavigation();

  const getWeather = async () => {
    setLoading(true);
    const response = await ACNetwork.get(
      `https://api.weatherapi.com/v1/current.json?key=9da2d48d3e2740c4bda171653230207&q=Pakistan`,
      (
        await config()
      ).headers
    );
    setState(response.data);
    console.log(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const celsius = state?.current.temp_c + " °C";
  const humidity = state?.current.humidity + " %";
  const pressure = state?.current.pressure_in + " hPa";
  const visibility = (state?.current.vis_km / 1000).toFixed(2) + " Km";

  return (
    <>
      <ActivityIndicator visible={loading} />
      <AppHeader />
      <SafeAreaView style={styles.container}>
        <View style={styles.backIcon}>
          <IonIcons
            name="ios-arrow-back-outline"
            color={Colors.white}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
            <Image
              source={{
                uri: "https://" + state?.current.condition.icon,
              }}
              style={styles.Weather_Image}
            />
            <View>
              <Text style={styles.temprature_text}>{celsius}</Text>
              <Text style={styles.city_text}>
                {state?.location.name}, {state?.location.country}
              </Text>
              <Text style={styles.time_text}>{state?.location.localtime}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>
              {state?.current.condition.text}
            </Text>
            <Text style={styles.humidity_text}>Humidity : {humidity}</Text>
            <Text style={styles.other_text}>
              Cloud : {state?.current.cloud}
            </Text>
            <Text style={styles.other_text}>
              Wind : {state?.current.wind_kph} Km
            </Text>
            <Text style={styles.other_text}>Pressure : {pressure}</Text>
            <Text style={styles.other_text}>Visibility : {visibility}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backIcon: { marginLeft: 10, marginTop: 10 },
  container: {
    height: Dev_Height,
    width: Dev_Width,
    backgroundColor: Colors.blue,
  },

  Weather_Box_Main: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Weather_Holder_View: {
    height: "80%",
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  Weather_Image: {
    height: "40%",
    width: "40%",
    resizeMode: "contain",
  },
  temprature_text: {
    fontSize: 35,
    color: "#FFF",
    marginLeft: "5%",
  },
  city_text: {
    fontSize: 16,
    color: "#FFF",
    marginLeft: "5%",
    marginTop: "3%",
  },
  time_text: {
    fontSize: 13,
    color: "#FFF",
    marginLeft: "5%",
    marginTop: "3%",
  },

  Info_Box_View: {
    height: "45%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Info_Holder_Veiw: {
    height: "70%",
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 15,
  },
  Main_Weather_Text: {
    fontSize: 28,
    color: "#464646",
    marginLeft: "8%",
    marginTop: "8%",
    fontWeight: "bold",
  },
  description_text: {
    fontSize: 20,
    color: Colors.blue,
    marginLeft: "8%",
    marginTop: "3%",
    textTransform: "capitalize",
  },
  humidity_text: {
    fontSize: 16,
    color: Colors.blue,
    marginLeft: "8%",
    marginTop: "5%",
  },
  other_text: {
    fontSize: 16,
    color: Colors.blue,
    marginLeft: "8%",
    marginTop: "2%",
  },
});

export default WeatherScreen;
