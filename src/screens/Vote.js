import React,{Component} from 'react';
import { Button } from 'react-native-elements';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

class Vote extends Component{
  render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexit}>
                </View>
                <View style={styles.flexiit}>
                    <Image source={require('../images/logo_d.png')}
                    />
                </View>
                <View style={styles.flexit}>
                </View>
                <View style={styles.flexit}>
                
                    <Button
                    large
                      raised
                        icon={{name: 'chevron-right'}}
                    title='GET STARTED'
                    backgroundColor='#282f3b'
                    color='#FFF'
                    onPress={() => navigate("Home", {screen: "Home"})}
                    />
                </View>
                <View style={styles.flexit}>
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
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
      flexiit: {
          flex: 2,
      },
      flexit: {
        flex: 1,
    },
    });

export default Vote;