/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {ListItem, SearchBar } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman'
  },
]




export default class Contact extends Component {
  render() {
    return (
      <View>
          <View>
            <SearchBar
            lightTheme
             placeholder='Type Here...' />
      </View>
        <View>
  {
      
        
    list.map((l, i) => (
      <ListItem
        key={i}
      
        title={l.name}
        subtitle={l.subtitle}
      />
    ))
  }
  </View>

</View>

    );
  }
}

const styles = StyleSheet.create({

});
