import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import { AppHeader, CardOne, Screen } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { ACNetwork, Urls, config } from "../../../config";
import { useTranslation } from "react-i18next";
import { IonIcons } from "../../../common/Icons";
import { Colors } from "../../../common";

const HealthScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [healthNews, setHealthNews] = useState([]);

  const APIKEY = "716835ac41fef2d603b558f372a6b932";

  const gethealthNews = async () => {
    try {
      setLoading(true);
      const response = await ACNetwork.get(
        `https://gnews.io/api/v4/top-headlines?country=us&category=health&apikey=${APIKEY}`,
        (
          await config()
        ).headers
      );

      setHealthNews(response.data.articles);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Failed to load data");
    }
  };

  useEffect(() => {
    gethealthNews();
  }, []);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <AppHeader />
        <View style={styles.backIcon}>
          <IonIcons
            name="ios-arrow-back-outline"
            color={Colors.blue}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            {healthNews.map((item, index) => {
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
            {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={healthNews}
            renderItem={({ item }) => {
              return (
                <CardOne
                  image={item.urlToImage}
                  onPressCardOne={() =>
                    navigation.navigate(Routes.HomeDetailScreen, {
                      generalNewsDetail: item,
                    })
                  }
                  title={item.title}
                />
              );
            }}
          /> */}
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
  backIcon: { marginLeft: 10, marginTop: 10 },
});

export default HealthScreen;
