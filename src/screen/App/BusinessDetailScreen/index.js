import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {
  AppHeader,
  ButtonComponent,
  Screen,
  TextElement,
  YoutubeVideoPlayer,
} from "../../../components";
import { Colors } from "../../../common";
import { IonIcons } from "../../../common/Icons";
import { useNavigation } from "@react-navigation/native";
import TextVoice from "../../../components/TextVoice";
import { useTranslator } from "react-native-translator";
import { useTranslation } from "react-i18next";
import WebView from "react-native-webview";

const BusinessDetailScreen = ({ route }) => {
  const { businessNewsDetail } = route.params;
  const navigation = useNavigation();
  const { translate } = useTranslator();
  const [value, setValue] = useState(businessNewsDetail?.description);
  const [result, setResult] = useState("");

  const { t, i18n } = useTranslation();
  console.log(i18n.language, "hello");

  const onTranslate = async () => {
    const _result = await translate(
      i18n.language === "es" ? "es" : "en",
      i18n.language === "es" ? "en" : "es",
      value,
      {
        type: "google",
        timeout: 10000,
      }
    );
    setResult(_result);
  };

  console.log(result);

  return (
    <>
      <AppHeader />
      <Screen>
        <View style={styles.backIcon}>
          <IonIcons
            name="ios-arrow-back-outline"
            color={Colors.blue}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView>
          <Text style={styles.heading}>{businessNewsDetail?.title}</Text>
          <Image
            source={{ uri: businessNewsDetail?.imageUrl }}
            style={styles.image}
          />

          <Text style={styles.channelHeading}>
            {businessNewsDetail?.channel}
          </Text>
          <TextVoice descriptionText={businessNewsDetail.description} />

          {result ? (
            <TextElement style={styles.description}>{result}</TextElement>
          ) : (
            <Text style={styles.description}>
              {businessNewsDetail?.description}
            </Text>
          )}
          {/* <ButtonComponent title="Translation" onPress={onTranslate} /> */}

          {/* <WebView
            androidLayerType="hardware"
            mediaPlaybackRequiresUserAction={true}
            style={{
              height: 240,
              width: 320,
              alignSelf: "center",
              alignContent: "center",
            }}
            source={{ uri: businessNewsDetail?.videoLink }}
          /> */}

          {/* <YoutubeVideoPlayer
            VideoId={
              businessNewsDetail?.videoLink.split("https://youtu.be/")[1]
            }
          /> */}
        </ScrollView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 10,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  description: {
    padding: 10,
    color: Colors.black,
    fontSize: 14,
    lineHeight: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
    paddingHorizontal: 10,
  },
  channelHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
    paddingHorizontal: 10,
  },
  backIcon: { marginLeft: 10, marginTop: 10 },
});

export default BusinessDetailScreen;
