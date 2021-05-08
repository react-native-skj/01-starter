import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ColorCounter = ({ title, clicked }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TouchableOpacity style={styles.boxStyle} onPress={() => clicked(10)}>
        <Text>More of {title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxStyle} onPress={() => clicked(-10)}>
        <Text>Less of {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({
  boxStyle: {
    height: 30,
    width: 120,
    backgroundColor: 'rgb(0,191,255)',
    marginVertical: 10,
  },
});
