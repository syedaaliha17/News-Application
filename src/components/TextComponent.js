import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../common';

const TextComponent = ({text}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.mainHeading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 14,
    padding: 10,
    backgroundColor: Colors.blue,
    color: Colors.white,
    borderWidth: 2,
    width: '50%',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: Colors.blue,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default TextComponent;
