import React, { useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (count) => {
    setCounter((prevCount) => prevCount + count);
  };

  return (
    <View>
      <Button title="Increment" onPress={() => updateCounter(1)} />
      <Button title="Decrement" onPress={() => updateCounter(-1)} />
      <Text style={styles.textStyle}>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 40,
  },
});

export default CounterScreen;
