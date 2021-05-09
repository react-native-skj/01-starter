import React, { useReducer } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const colorHex = () => Math.floor(Math.random() * 256);

const COLORS = ['Red', 'Green', 'Blue'];

const reducer = (state, { type, payload }) => {
  const newValue = (state[type] + payload) % 255;
  return {
    ...state,
    [type]: newValue >= 0 ? newValue : 0,
  };
};

const initialState = COLORS.reduce(
  (cumm, curr) => ({ ...cumm, [curr]: colorHex() }),
  {}
);

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rgbColor = `rgb(${COLORS.map((clr) => state[clr]).join(',')})`;

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item}
        data={COLORS}
        renderItem={({ item }) => (
          <ColorCounter
            title={item}
            clicked={(payload) => dispatch({ type: item, payload })}
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
