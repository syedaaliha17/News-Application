import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../common';

const Heading = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default Heading;
