import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {HomeStack} from './config/route';




export default class App extends Component {
  render() {
    return (
      <HomeStack />
    );
  }
}

