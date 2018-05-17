/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

import {Input, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
import {Icon} from 'react-native-vector-icons/FontAwesome';
import Dialogflow from "react-native-dialogflow";



export default class Chat extends Component {
  state = {
    messages: [],
  }
  constructor(props) {
    super(props);

    Dialogflow.setConfiguration(
      "0bcea5e4402241a19f0cc9068555e205", Dialogflow.LANG_ENGLISH
    );
}

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../images/logo_d.png'),
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    console.log( messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    Dialogflow.requestQuery(messages[0].text, 
    reqres=>{
      for(let i=0; i <reqres.result.fulfillment.messages.length;i++)
      {
        let botreplys = [ { 
          _id: Math.random(),
          text: reqres.result.fulfillment.messages[i].speech,
          createdAt: new Date(),
          user: { _id: Math.random(),
            name: 'React Native',
            avatar: require('../images/logo_d.png'),  },} ]
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, botreplys),
          }))
      }
    },
    error=>console.log(error));
  }
  render() {
    return (
      
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  formi:
  {
    width: 100,
    backgroundColor:'#c0c0c0',
    color:'#fff'
  },
});
