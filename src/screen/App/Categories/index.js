import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import Routes from "../../../common/Routes";
import ActivityIndicator from "../../../components/Animations/ActivityIndicator";
import { Colors } from "../../../common";

const CategoryScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <AppHeader />
            <Screen>
                <View style={styles.container}>
                    <TextElement style={styles.heading}> Select a Category </TextElement>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.BusinessScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Business</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.ScienceScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Science</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.TechnologyScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Technology</TextElement>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>

                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.EntertainmentScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Entertainment</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.HealthScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Health</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.SportScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Sports</TextElement>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>

                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.NationScreen);
                            }}
                        >
                            <TextElement style={styles.text}>Nation</TextElement>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => {
                                navigation.navigate(Routes.WorldScreen);
                            }}
                        >
                            <TextElement style={styles.text}>World</TextElement>
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
        backgroundColor: "white",
    },
    headerBtn: {
        marginVertical: 8,
        justifyContent: 'center',
        width: "37%",
        margin: 2,
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

export default CategoryScreen;
