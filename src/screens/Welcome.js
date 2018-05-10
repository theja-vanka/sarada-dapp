import React,{Component} from 'react';
import { Button } from 'react-native-elements';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

class Welcome extends Component{
  render() {
        const { navigate } = this.props.navigation;
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
                    title='GET STARTED'
                    backgroundColor='#212529'
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
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
      },
      flexiit: {
          flex: 2,
      },
      flexit: {
        flex: 1,
    },
    });

export default Welcome;