import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "./src/common";
import Root from "./src/components/Root";

import { NativeBaseProvider } from "native-base";
import { TranslatorProvider } from "react-native-translator"; // here

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const App = () => {
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <>
      <TranslatorProvider>
        <MyStatusBar backgroundColor={Colors.blue} />
        <NativeBaseProvider>
          <Root />
        </NativeBaseProvider>
      </TranslatorProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: Colors.blue,
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
});

export default App;
