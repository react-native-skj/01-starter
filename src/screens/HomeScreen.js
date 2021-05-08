import React from 'react';
import { Text, Button, StyleSheet, FlatList, View } from 'react-native';
import SCREENS from '../../screens';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <FlatList
        data={SCREENS.filter(({ label }) => !!label)}
        renderItem={({ item }) => (
          <Button
            onPress={() => navigation.navigate(item.key)}
            title={item.label}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
