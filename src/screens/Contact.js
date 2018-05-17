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
  ScrollView,
} from 'react-native';

import {ListItem, SearchBar } from 'react-native-elements';

const list = [
  {
    name: 'pruthvi',
    subtitle: '0x2cfcd1d77f779063049ae7e324f2a7de49355d36'
  },
  {
    name: 'pankaja',
    subtitle: '0x8bb965f2e42996d3f0993a4e666ac500d9d499c5'
  },
  {
    name: 'shashikumar',
    subtitle: '0x39e314c234da73b0a38571d2202797f4c4cb50ec'
  },
  {
    name: 'suresh',
    subtitle: '0x07f237949204f1099c44839b61806e57b424bb08'
  },
  {
    name: 'raghavendra',
    subtitle: '0x57e33cc9cc4c2d2a5d19a5e74fcee6304556663f'
  },
  {
    name: 'ganesh',
    subtitle: '0x5400d8f0759e11a3438ee4b4b4861195d6fd07ef'
  },
  {
    name: 'vaishakh',
    subtitle: '0xbc17ed51c6c6a5aa37ab2c4cf8042bdbcd1e25de'
  },
  {
    name: 'rajath',
    subtitle: '0x2db0c731acafc4747c914eac63ac55cd2070ceee'
  },
  {
    name: 'gambler',
    subtitle: '0xf7facb4423f7527faa9a96a15d320ede68baf4ce'
  },
]




export default class Contact extends Component {
  render() {
    return (        
        <ScrollView>
  {
      
        
    list.map((l, i) => (
      <ListItem
        key={i}
      
        title={l.name}
        subtitle={l.subtitle}
      />
    ))
  }
  </ScrollView>

    );
  }
}

const styles = StyleSheet.create({

});
