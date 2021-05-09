import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      {name ? <Text>Your name is: {name}</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  inputStyle: {
    margin: 10,
    paddingHorizontal: 5,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    fontSize: 20,
  },
});
