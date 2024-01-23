import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppHeader, Screen, TextElement } from "../../../components";
import { IonIcons } from "../../../common/Icons";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../hook/useAuth";
import { Colors, Icons } from "../../../common";

const AccountScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
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
      <View style={{ flex: 1, justifyContent: "center", marginTop: -40 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: user?.photo }}
            style={{ width: 80, height: 80, borderRadius: 80 }}
          />
          <TextElement style={styles.name}>{user?.name}</TextElement>
        </View>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View
              style={{ marginRight: 10, borderRightWidth: 1, paddingRight: 5 }}
            >
              <Icons.MaterialCommunityIcons
                name="account"
                size={30}
                color={Colors.lightgray}
              />
            </View>
            <View>
              <TextElement style={styles.nameList}>First Name:</TextElement>
              <TextElement style={styles.accountDetail}>
                {user?.givenName}
              </TextElement>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View
              style={{ marginRight: 10, borderRightWidth: 1, paddingRight: 5 }}
            >
              <Icons.MaterialCommunityIcons
                name="account"
                size={30}
                color={Colors.lightgray}
              />
            </View>
            <View>
              <TextElement style={styles.nameList}>Last Name:</TextElement>
              <TextElement style={styles.accountDetail}>
                {user?.familyName}
              </TextElement>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View
              style={{ marginRight: 10, borderRightWidth: 1, paddingRight: 5 }}
            >
              <Icons.MaterialCommunityIcons
                name="email"
                size={30}
                color={Colors.lightgray}
              />
            </View>
            <View>
              <TextElement style={styles.nameList}>Email Address:</TextElement>
              <TextElement style={styles.accountDetailEmail}>
                {user?.email}
              </TextElement>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  container: {
    marginVertical: 8,
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: "white",
    elevation: 8,
  },
  name: {
    textTransform: "capitalize",
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.blue,
  },
  accountDetail: {
    textTransform: "capitalize",
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.blue,
  },
  accountDetailEmail: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.blue,
  },
  innerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  nameList: {
    fontSize: 14,
    color: Colors.lightgray,
    fontWeight: "500",
    paddingVertical: 5,
  },
});

export default AccountScreen;
