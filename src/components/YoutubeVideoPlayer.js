import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Youtube from "react-native-youtube-iframe";

const YoutubeVideoPlayer = ({ VideoId }) => {
  return (
    <View style={styles.container}>
      <Youtube
        width="100%"
        height="100%"
        videoId={VideoId}
        allowWebViewZoom={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default YoutubeVideoPlayer;
