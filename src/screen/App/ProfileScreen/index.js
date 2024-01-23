import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { AppHeader, Screen } from "../../../components";
import ProfileListCard from "../../../components/ProfileListCard";
import { Colors, Icons } from "../../../common";
import Alert from "../../../components/Alert";
import Routes from "../../../common/Routes";
import { useNavigation } from "@react-navigation/native";
import lang from "../../../common/languages/lang";
import { useTranslation } from "react-i18next";
import useAuth from "../../../hook/useAuth";

const ProfileScreen = () => {
  const { Logout, user } = useAuth();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <>
      <Screen>
        <AppHeader />
        <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
          <ProfileListCard
            onPress={() => navigation.navigate(Routes.WeatherScreen)}
            // title={t(lang.weather)}
            title="Weather"
            icon={<Icons.Entypo name="cloud" size={25} color={Colors.blue} />}
          />

          <ProfileListCard
            onPress={() => navigation.navigate(Routes.AccountScreen)}
            // title={t(lang.accountDetail)}
            title="Account"
            icon={
              <Icons.MaterialCommunityIcons
                name="account"
                size={25}
                color={Colors.blue}
              />
            }
          />
          {/* <ProfileListCard
            onPress={() => navigation.navigate(Routes.LanguageScreen)}
            // title={t(lang.country)}
            title="Country"
            icon={<Icons.Entypo name="flag" size={25} color={Colors.blue} />}
          /> */}
          <ProfileListCard
            onPress={() => navigation.navigate(Routes.PrivacyPolicyScreen)}
            // title={t(lang.privacyPolicy)}
            title="Privacy Policy"
            icon={
              <Icons.MaterialIcons
                name="policy"
                size={25}
                color={Colors.blue}
              />
            }
          />
          <ProfileListCard
            onPress={() => navigation.navigate(Routes.ContactUsScreen)}
            // title={t(lang.contactUs)}
            title="Contact Us"
            icon={
              <Icons.MaterialIcons name="call" size={25} color={Colors.blue} />
            }
          />
          <ProfileListCard
            onPress={() => navigation.navigate(Routes.AboutUsScreen)}
            // title={t(lang.aboutUs)}
            title="About Us"
            icon={
              <Icons.MaterialCommunityIcons
                name="alert-circle"
                size={25}
                color={Colors.blue}
              />
            }
          />
          <Alert
            onAccept={() => Logout()}
            isVisible={logoutVisible}
            setIsVisible={setLogoutVisible}
            // description={t(lang.doYouWantToLogout)}
            // title={t(lang.warning)}
            description="Do you want to logout?"
            title="Warning"
          />
          <ProfileListCard
            onPress={() => setLogoutVisible(true)}
            // title={t(lang.logout)}
            title="Logout"
            icon={
              <Icons.MaterialCommunityIcons
                name="arrow-right-thick"
                size={25}
                color={Colors.blue}
              />
            }
          />
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
