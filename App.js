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
  TextInput
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height:40,
          width: 150,
          borderColor:'gray',
          borderWidth:1}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing = {() => console.log(this.state.text)}
          vale = {this.state.text}
          />   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
