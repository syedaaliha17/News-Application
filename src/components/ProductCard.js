import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../common';

const ProductCard = ({img, heading, description, onPress, channelName}) => {
  const dataSplit = heading => {
    return heading.substring(0, 30) + '...';
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: img}} style={styles.image} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{dataSplit(heading)}</Text>
        <Text style={styles.description}>{dataSplit(description)}</Text>
        <Text style={styles.channelName}>{channelName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '90%',
    alignSelf: 'center',
    height: 160,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 8,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.fulllightgray,
  },

  image: {
    width: '40%',
    height: 100,
    resizeMode: 'cover',
    marginRight: 15,
    marginLeft: 0,
    borderRadius: 10,
  },
  headingContainer: {
    width: '55%',
  },
  heading: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 16,
    color: Colors.black,
  },
  channelName: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.darkgray,
  },
});

export default ProductCard;
