import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const colorHex = () => Math.floor(Math.random() * 256);

const ITEMS = [
  {
    title: 'Red',
    currentValue: colorHex(),
  },
  {
    title: 'Green',
    currentValue: colorHex(),
  },
  {
    title: 'Blue',
    currentValue: colorHex(),
  },
];

const SquareScreen = () => {
  const [colors, setColors] = useState(ITEMS);

  const eventClicked = (index, value) => {
    setColors((prev) => {
      const newArr = [...prev];
      const newvalue = (newArr[index].currentValue + value) % 255;
      newArr[index].currentValue = newvalue >= 0 ? newvalue : 0;
      return newArr;
    });
  };

  const rgbColor = `rgb(${colors.map((clr) => clr.currentValue).join(',')})`;

  return (
    <View>
      <FlatList
        keyExtractor={({ title }) => title}
        data={colors}
        renderItem={({ item, index }) => (
          <ColorCounter
            title={item.title}
            clicked={(evt) => eventClicked(index, evt)}
          />
        )}
      />
      <View style={{ height: 100, width: 100, backgroundColor: rgbColor }}>
        <Text>{rgbColor}</Text>
      </View>
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
