import React, { Component } from "react";
import { View, Text, AsyncStorage } from 'react-native';

const RootStack = StackNavigator();


export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = { name: 'World' }
  }
  componentDidMoun() {
    this.load()
  }

  load = async () => {

  }

  render() {
    return (
      <View></View>
    )
  }
}
