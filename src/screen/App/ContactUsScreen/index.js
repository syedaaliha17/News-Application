import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { IonIcons } from "../../../common/Icons";
import { Colors } from "../../../common";
import contactUs from "../../../../assets/images/contactUs.png";

const ContactUsScreen = () => {
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
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 5 }}>
          <View style={{ marginBottom: 40 }}>
            <Image source={contactUs} style={styles.img} />
            <TextElement style={{ color: Colors.blue , textAlign:"justify"}}>
              Thank you for using our NewsRead app. We value your feedback and
              are here to assist you with any questions or concerns you may
              have. Please feel free to reach out to us using any of the
              following methods:
            </TextElement>
            <TextElement
              style={{
                fontWeight: "bold",
                paddingVertical: 10,
                color: Colors.blue,
              }}
            >
              Customer Support:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue , textAlign:"justify"}}>
              If you require immediate assistance or have a specific issue
              regarding our app, our dedicated customer support team is
              available to help you.
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>Email: </TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                support@newsRead.com
              </TextElement>
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>Phone: </TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                +1 (555) 123-4567
              </TextElement>
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>
                Live Chat:{" "}
              </TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                www.newsRead.com
              </TextElement>
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue , textAlign:"justify"}}>
              Our customer support team is available from Monday to Friday, 9:00
              AM to 5:00 PM (GMT). We strive to respond to all inquiries within
              24 hours.
            </TextElement>

            <TextElement
              style={{
                fontWeight: "bold",
                paddingVertical: 10,
                color: Colors.blue,
              }}
            >
              Social Media:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue , textAlign:"justify"}}>
              Stay connected with us through our social media channels to
              receive updates, news highlights, and engage with our community:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>Twitter:</TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                @newsRead
              </TextElement>
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>
                Facebook:{" "}
              </TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                facebook.com/newsRead
              </TextElement>
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue }}>
              <TextElement style={{ color: Colors.blue }}>
                Instagram:{" "}
              </TextElement>
              <TextElement style={{ fontWeight: "bold", color: Colors.blue }}>
                @newsReadofficial
              </TextElement>
            </TextElement>

            <TextElement
              style={{
                fontWeight: "bold",
                paddingVertical: 10,
                color: Colors.blue,
              }}
            >
              Feedback and Suggestions:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, color: Colors.blue, textAlign:"justify" }}>
              We greatly appreciate your feedback and suggestions to improve our
              news app. Please share your thoughts by emailing us at
              feedback@newsRead.com . We value your input and will carefully
              review every suggestion.
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

export default ContactUsScreen;
