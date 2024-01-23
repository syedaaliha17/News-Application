import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { AppHeader, CardOne, Screen } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { ACNetwork, Urls, config } from "../../../config";
import { useTranslation } from "react-i18next";
import lang from "../../../common/languages/lang";
import { ScrollView } from "native-base";
import { Colors } from "../../../common";
import { IonIcons } from "../../../common/Icons";

const PakistanNewsScreen = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [pakistanNews, setPakistanNews] = useState([]);

  const getNews = async () => {
    setLoading(true);
    const response = await ACNetwork.get(
      "https://gnews.io/api/v4/top-headlines?country=pk&category=general&apikey=4b4cb4fe28f46b5d3d142bb08c8b2756",
      (
        await config()
      ).headers
    );
    setLoading(false);
    if (!response.ok) {
      return alert(t(lang.mediaError));
    }

    console.log(response.data.articles);
    setPakistanNews(response.data.articles);
  };
  useEffect(() => {
    getNews();
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
            {pakistanNews.map((item, index) => {
              return (
                <CardOne
                  key={index}
                  image={item.image}
                  onPressCardOne={() =>
                    navigation.navigate(Routes.PakistanNewsDetailScreen, {
                      pakistanNewsDetail: item,
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
  backIcon: { marginLeft: 10, marginTop: 10 },
});

export default PakistanNewsScreen;
