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
  TextInput,
} from 'react-native';



export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {zip:""};
  }
  _handleTextChange = event => {
    this.setState({zip:event.nativeEvent.text});
    console.log("onSubmit");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your Input {this.state.zip}.
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
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
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding:2,
    height:40,
    width:100,
    textAlign:"center"
  }
});
