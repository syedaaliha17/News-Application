import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../common';

const ButtonComponent = ({
  title,
  backgroundColor = Colors.blue,
  style,
  onPress,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.container, backgroundColor, ...style}}
      onPress={onPress}>
      <Text style={{...styles.title, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '85%',
    alignSelf: 'center',
    paddingVertical: 15,

    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',

    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export default ButtonComponent;
