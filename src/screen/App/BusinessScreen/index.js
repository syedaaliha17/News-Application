import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import { AppHeader, CardOne, Screen } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { ACNetwork, Urls, config } from "../../../config";
import { useTranslation } from "react-i18next";
import lang from "../../../common/languages/lang";
import InputTextElement from "../../../components/InputTextElement";

const BusinessScreen = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [businessNews, setBusinessNews] = useState([]);

  const getNews = async () => {
    setLoading(true);
    const response = await ACNetwork.get(
      Urls.getBusinessNews(i18n.language),
      (
        await config()
      ).headers
    );
    setLoading(false);
    if (!response.ok) {
      return alert(t(lang.businessError));
    }
    setBusinessNews(response.data.news);
  };
  useEffect(() => {
    getNews();
  }, [i18n.language]);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <AppHeader />
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            {businessNews.map((item, index) => {
              return (
                <CardOne
                  key={index}
                  image={item.imageUrl}
                  onPressCardOne={() =>
                    navigation.navigate(Routes.BusinessDetailScreen, {
                      businessNewsDetail: item,
                    })
                  }
                  title={item.title}
                />
              );
            })}
            {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={businessNews}
            renderItem={({ item }) => {
              return (
                <CardOne
                  image={item.imageUrl}
                  onPressCardOne={() =>
                    navigation.navigate(Routes.BusinessDetailScreen, {
                      businessNewsDetail: item,
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
});

export default BusinessScreen;
