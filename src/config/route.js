import React from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import TabScreen from '../screens/TabScreen';
import Vote from '../screens/Vote';


export const HomeStack = StackNavigator({
  Welcome: {
      screen : Welcome
  },
  TabScreen: {
      screen: TabScreen
  },
  Vote: {
    screen: Vote
}
},
{
    navigationOptions :{
        header: null,
        title:'Welcome',
}
});