import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Icons} from '../common';
import {List} from 'react-native-paper';

const Accordion = ({title, icon, handlePress, expanded}) => {
  return (
    // <List.Section title="Settings" style={styles.card}>
    <List.Accordion
      titleStyle={styles.activeColor}
      title={title}
      left={() => icon}
      expanded={expanded}
      onPress={handlePress}
      style={styles.container}>
      {/* <List.Item title="First item" />
      <List.Item title="Second item" /> */}
    </List.Accordion>
    // </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderColor: Colors.black,
    borderTopWidth: 2,
    // borderBottomWidth: 2,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  card: {
    backgroundColor: Colors.white,
  },
  activeColor: {
    color: Colors.black,
  },
});

export default Accordion;
