import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AppHeader, CardOne, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { ACNetwork, Urls, config } from "../../../config";
import { useTranslation } from "react-i18next";
import { Colors } from "../../../common";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [generalNews, setGeneralNews] = useState([]);
  const APIKEY = "716835ac41fef2d603b558f372a6b932";

  const getGeneralNews = async () => {
    try {
      setLoading(true);
      const response = await ACNetwork.get(
        `https://gnews.io/api/v4/top-headlines?category=general&apikey=${APIKEY}`,
        (
          await config()
        ).headers
      );

      setGeneralNews(response.data.articles);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Failed to load data");
    }
  };


  useEffect(() => {
    getGeneralNews();
  }, []);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <AppHeader />
      <Screen>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => {
              navigation.navigate(Routes.CountryScreen);
            }}
          >
            <TextElement style={styles.text}>Countries</TextElement>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => {
              navigation.navigate(Routes.CategoryScreen);
            }}
          >
            <TextElement style={styles.text}>Categories</TextElement>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ marginTop: 10 }}>
            {generalNews.map((item, index) => {
              return (
                <CardOne
                  key={index}
                  image={item.image}
                  onPressCardOne={() =>
                    navigation.navigate(Routes.HomeDetailScreen, {
                      generalNewsDetail: item,
                    })
                  }
                  title={item.title}
                />
              );
            })}
          </View>
        </ScrollView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchInput: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerBtn: {
    marginVertical: 8,
    display: "flex",
    flex: 1,
    justifyContent: 'center',
    width: "40%",
    margin: 5,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: Colors.blue,
    elevation: 8,
  },

  headerBtnPk: {
    marginVertical: 8,
    width: "50%",
    margin: 5,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: Colors.blue,
    elevation: 8,
  },
  text: { color: "white", textAlign: "center" },
});

export default HomeScreen;
