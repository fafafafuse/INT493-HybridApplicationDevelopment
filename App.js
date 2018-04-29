import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import FirstPage from './src/FirstPage'
import SecondPage from './src/SecondPage'
import Sequence from './src/Sequence'

const RootStack = StackNavigator(
    {
        Home: {
            screen: FirstPage,
        },
        Second: {
            screen: SecondPage,
        },
        Loading: {
            screen: Sequence
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
        },
    }
);
export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}