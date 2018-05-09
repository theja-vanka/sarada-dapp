import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Chat from './Chat';
import Contact from './Contact';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    return (
      <Home>
          </Home>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <Chat>
          </Chat>
    );
  }
}

class ContactScreen extends React.Component {
    render() {
      return (
        <Contact>
            </Contact>
      );
    }
  }
export default TabNavigator({
  Chat: ChatScreen,
  Home: HomeScreen,
  Contact: ContactScreen,
},
{
    tabBarOptions: {
      activeTintColor: '#0067F4',
      inactiveTintColor: '#5A6169',
      style: {
          backgroundColor: '#E9ECEF'
      },
      indicatorStyle: {
          backgroundColor: '#E9ECEF'
      }
    },
    swipeEnabled : true,
    backBehavior: false,
},
 
);