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

import { Button } from 'react-native-elements';


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
              <View style={styles.flexit1}>
                <Avatar
                  xlarge
                  rounded
                  style={styles.fleximage}
                  source={require('../images/me.jpg')}
                  onPress={() => console.log("Hello")}
                  activeOpacity={0.7}
              />
              <View style={styles.flexit2}>
            <Text style={{color:'#fff',fontSize:30,fontWeight: 'bold',}}>User name</Text></View>
              </View>

            </View>
      
        <View style={styles.flexiit}>
          <View style={styles.merow}>
          <Avatar
          large
          rounded
          source={require('../images/ethereum.png')}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          />
          </View>
          <View style={styles.merow}>
          <Icon name="attach-money" size={40} color='#ff7371'/>
          <Text style={styles.money}> 132 </Text>
          </View>
          <View style={styles.merow}>
          <Icon name="add-circle" size={22} color='#ffffff'/>
          </View>
        </View>
        <View style={styles.flexiit}>
        <Button
          large
          title='Notifications'
          backgroundColor='#282f3b'
          color='#81d3cf'
          />
        <Button
          large
          title='Alert Vote'
          backgroundColor='#282f3b'
             color='#81d3cf'
          />
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
    backgroundColor: '#3c4452',
    flexDirection: 'column',
  },
 
  money: {
    borderColor: '#000000',
    borderStyle: "solid",
    color: '#ff7371',
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
    paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30
  },
  flexit: {
    flex: 1,
},
flexit1:
{
      flex: 1,
      paddingTop: 35,
        paddingLeft: 20,
      height: 200,
      width: 100,
      flexDirection:'row',
      backgroundColor: '#313844'
},
flexit2 :
{
      flex: 1,
      paddingTop: 50,
        paddingLeft: 20,
      flexDirection:'row',
      backgroundColor: '#313844'

},
});
