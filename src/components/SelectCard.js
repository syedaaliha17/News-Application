import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import TextElement from './TextElement';
import {Colors} from '../common';

const SelectCard = ({title, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,

        backgroundColor: selected ? Colors.blue : Colors.white,
      }}>
      <TextElement style={{color: selected ? Colors.white : Colors.black}}>
        {title}
      </TextElement>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default SelectCard;
