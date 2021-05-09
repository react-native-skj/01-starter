import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Box Object Model
// Flex
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={{ ...styles.textStyle, ...styles.textStyle2 }}>
        Child #2
      </Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyle2: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
