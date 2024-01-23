import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../common';

const InputTextElement = ({
  value,
  onChangeText,
  placeholder,
  ...otherProps
}) => {
  const [borderColor, setBorderColor] = useState(Colors.lightgray);
  const [borderWidth, setBorderWidth] = useState(1);

  return (
    <View style={{...styles.container, borderColor, borderWidth}}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.lightgray}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...otherProps}
        onFocus={() => {
          setBorderColor(Colors.blue);
          setBorderWidth(2);
        }}
        onBlur={() => {
          setBorderColor(Colors.lightgray);
          setBorderWidth(1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    color: Colors.black,
    fontSize: 16,
    paddingLeft: 10,
  },
});

export default InputTextElement;
