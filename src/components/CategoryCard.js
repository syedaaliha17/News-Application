import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

import {Colors, Fonts} from '../../common';
import {Text} from '..';

const CategoryCard = ({title, img, onPress, id}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} id={id}>
      <Image source={{uri: img}} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    padding: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: 10,
    width: '45%',
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  categoryText: {
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 18,
  },
});

export default CategoryCard;
