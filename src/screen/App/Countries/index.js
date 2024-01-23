import React, { useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { Colors } from "../../../common";

const CountryScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    return (
        <>
            <ActivityIndicator visible={loading} />
            <AppHeader />
            <Screen>
                <View style={styles.container}>
                    <TextElement style={styles.heading}> Select a Country </TextElement>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.IndiaNewsScreen);
                            }}
                        >
                            <TextElement style={styles.text}>India News</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.PakistanNewsScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Pakistan News</TextElement>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.USNewsScreen);
                            }}
                        >
                            <TextElement style={styles.text}>US News</TextElement>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.UKNewsScreen);
                            }}
                        >
                            <TextElement style={styles.text}>UK News</TextElement>
                        </TouchableOpacity>
                    </View>
                </View>

            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        width: "95%",
        justifyContent: "center",
        alignSelf: "center",
        paddingVertical: 15,
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        backgroundColor: "white",
    },
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

    heading: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        padding: 5,
        margin: 5
    },
    text: { color: "white", textAlign: "center" },
});

export default CountryScreen;
