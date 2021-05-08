import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const IMAGES = [
  {
    key: 'Forest',
    file: require(`../../assets/forest.jpg`),
    score: 9,
  },
  {
    key: 'Beach',
    file: require(`../../assets/beach.jpg`),
    score: 7,
  },
  {
    key: 'Mountain',
    file: require(`../../assets/mountain.jpg`),
    score: 10,
  },
];

const ImageScreen = () => {
  return (
    <FlatList
      data={IMAGES}
      renderItem={({ item }) => (
        <ImageDetail
          title={item.key}
          imageSource={item.file}
          score={item.score}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
