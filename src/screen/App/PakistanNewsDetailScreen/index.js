import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { AppHeader, ButtonComponent, Screen } from "../../../components";
import { Colors } from "../../../common";
import { IonIcons } from "../../../common/Icons";
import { useNavigation } from "@react-navigation/native";
import TextVoice from "../../../components/TextVoice";

const PakistanNewsDetailScreen = ({ route }) => {
  const { pakistanNewsDetail } = route.params;
  const navigation = useNavigation();

  const handleLinkPress = async () => {
    await Linking.openURL(pakistanNewsDetail?.url);
  };

  console.log(pakistanNewsDetail, "hello");

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
          <Text style={styles.heading}>{pakistanNewsDetail?.title}</Text>
          <Image
            source={{ uri: pakistanNewsDetail?.image }}
            style={styles.image}
          />

          {/* <Text style={styles.channelHeading}>{pakistanNewsDetail?.content}</Text> */}
          <TextVoice descriptionText={pakistanNewsDetail.description} />

          <Text style={styles.description}>
            {pakistanNewsDetail?.description}
          </Text>

          <Text style={styles.description}>{pakistanNewsDetail?.content}</Text>
          <ButtonComponent title="Show More" onPress={handleLinkPress} />
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

export default PakistanNewsDetailScreen;
