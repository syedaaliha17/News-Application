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

const UKNewsScreen = () => {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [UKNews, setUKNews] = useState([]);

    const APIKEY = "716835ac41fef2d603b558f372a6b932";

    const getUKNews = async () => {
        try {
            setLoading(true);
            const response = await ACNetwork.get(
                `https://gnews.io/api/v4/top-headlines?country=gb&apikey=${APIKEY}`,
                (
                    await config()
                ).headers
            );

            setUKNews(response.data.articles);

            setLoading(false);
        } catch (error) {
            setLoading(false);
            alert("Failed to load data");
        }
    };

    useEffect(() => {
        getUKNews();
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
                        {UKNews.map((item, index) => {
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
    backIcon: { marginLeft: 10, marginTop: 10 },
});

export default UKNewsScreen;
