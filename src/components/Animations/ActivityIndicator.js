import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from '../../common';

const ActivityIndicator = ({visible}) => {
  if (!visible) return null;

  return (
    <View style={styles.animation}>
      <LottieView
        autoPlay
        source={require('../../../assets/loader.json')}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    opacity: 0.8,
    backgroundColor: Colors.black,
  },
});

export default ActivityIndicator;
