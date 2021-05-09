import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import SCREENS from './screens';

const components = [
  HomeScreen,
  ComponentsScreen,
  ListScreen,
  ImageScreen,
  CounterScreen,
  ColorScreen,
  SquareScreen,
  TextScreen,
  BoxScreen,
];
const routes = SCREENS.reduce(
  (cumm, { key }, index) => ({
    ...cumm,
    [key]: components[index],
  }),
  {}
);

console.log(routes);

const navigator = createStackNavigator(
  { ...routes },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
