import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';

const randomRgb = () => {
  const colorHex = () => Math.floor(Math.random() * 256);
  return `rgb(${colorHex()}, ${colorHex()}, ${colorHex()})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const addColor = () => {
    setColors((prev) => [...prev, randomRgb()]);
  };
  return (
    <View>
      <Button title="Add a color" onPress={addColor} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});
