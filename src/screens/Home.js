/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';


import { Avatar, Icon} from 'react-native-elements';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    title:'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexiit}>
        <View style={styles.merow}>
        <Avatar
          large
          rounded
          source={require('../images/me.jpg')}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          />
          </View>
          <View style={styles.merow}>
          <Icon name="attach-money" size={30} />
          <Text style={styles.money}> 132 </Text>
          </View>
          <View style={styles.merow}>
          <Icon name="add-circle" size={30} />
          </View>
        </View>
        <View style={styles.flexiit}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  money: {
    borderColor: '#000000',
    borderStyle: "solid",
    color: 'black',
    fontSize: 30,
  },
  ava: {
      paddingLeft: 30,

  },
  flexiit: {
      flex: 2,
      flexWrap: 'wrap', 
      flexDirection:'row',
      alignItems: 'center',
  },
  merow: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30
  },
  flexit: {
    flex: 1,
},
});
