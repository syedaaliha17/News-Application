import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { IonIcons } from "../../../common/Icons";
import { Colors } from "../../../common";
import aboutUs from "../../../../assets/images/aboutUs.png";

const AboutUsScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <>
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
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 5, }}>
          <View style={{ marginBottom: 40 }}>
            <Image source={aboutUs} style={styles.img} />
            <TextElement style={{textAlign:"justify"}}>
              Welcome to NewsRead - your reliable source for breaking news,
              in-depth analysis, and trending stories from around the world. We
              are passionate about delivering timely and accurate information to
              empower our users and keep them informed. following methods:
            </TextElement>
            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Our Mission:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              At NewsRead, our mission is to provide you with comprehensive news
              coverage that is unbiased, reliable, and accessible. We believe in
              the power of journalism to foster understanding, drive positive
              change, and promote informed decision-making. Our team of
              dedicated journalists and editors work tirelessly to deliver the
              latest news across various topics, including politics, technology,
              business, entertainment, sports, and more.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Key Features:
            </TextElement>
            <TextElement style={{ paddingBottom: 5 , textAlign:"justify" }}>
              Real-time Updates: Stay up-to-date with the latest news as it
              happens. Our app provides real-time updates and breaking news
              alerts, ensuring you never miss out on important stories.
            </TextElement>
            <TextElement style={{ paddingBottom: 5 , textAlign:"justify"}}>
              Personalized Newsfeed: Tailor your news experience to your
              interests. Our app utilizes advanced algorithms to curate a
              personalized newsfeed based on your preferences, ensuring you
              receive news that matters most to you.
            </TextElement>
            <TextElement style={{ paddingBottom: 5 , textAlign:"justify" }}>
              Multimedia Content: Immerse yourself in the news through
              captivating photos, videos, and interactive multimedia elements
              that bring stories to life.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Contact Us:
            </TextElement>
            <TextElement style={{ paddingBottom: 5 , textAlign:"justify" }}>
              We value your feedback and are here to assist you. If you have any
              questions, suggestions, or concerns, please visit our Contact Us
              page for more information on how to reach our customer support
              team.
            </TextElement>
          </View>
        </ScrollView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  backIcon: { marginLeft: 10, marginTop: 10 },
  img: {
    width: "100%",
    resizeMode: "contain",
    height: 250,
  },
});

export default AboutUsScreen;
