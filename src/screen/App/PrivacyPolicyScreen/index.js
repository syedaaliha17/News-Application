import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { IonIcons } from "../../../common/Icons";
import { Colors } from "../../../common";

const PrivacyPolicyScreen = () => {
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
            <TextElement style={{ textAlign: "justify" }}>
              At NewsRead, we are committed to protecting the privacy of our
              users. This Privacy Policy outlines how we collect, use, disclose,
              and store personal information when you use our NewsRead mobile
              application (the "App"). By using the App, you agree to the terms
              and practices described in this Privacy Policy.
            </TextElement>
            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Information We Collect:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign: "justify" }}>
              a. Personal Information: We may collect personal information, such
              as your name, email address, and any other information you provide
              when you create an account or contact us for support.
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign: "justify" }}>
              b. Usage Information: We collect information about how you
              interact with the App, such as your device type, IP address,
              browser type, pages visited, and the actions you take while using
              the App. This information helps us analyze and improve the
              performance and usability of the App.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Use of Information:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              a. Personal Information: We may use your personal information to
              provide and improve our services, personalize your experience,
              communicate with you, and respond to your inquiries or requests.
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              b. Usage Information: We use usage information to analyze user
              behavior, troubleshoot technical issues, improve the App's
              functionality, and enhance overall performance.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Children's Privacy:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              The App is not intended for use by children under the age of 13.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected information from a
              child, please contact us, and we will promptly delete it.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Information Sharing:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              We may disclose personal information if required to do so by law
              or if we believe in good faith that such action is necessary to
              comply with legal obligations, protect our rights or safety,
              investigate fraud, or enforce our policies.
            </TextElement>

            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Data Security:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              We take appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </TextElement>
            <TextElement style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Contact Us:
            </TextElement>
            <TextElement style={{ paddingBottom: 5, textAlign:"justify" }}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us.
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
});

export default PrivacyPolicyScreen;
