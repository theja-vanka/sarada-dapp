import React from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import TabScreen from '../screens/TabScreen';


export const HomeStack = StackNavigator({
  Welcome: {
      screen : Welcome
  },
  TabScreen: {
      screen: TabScreen
  }
});