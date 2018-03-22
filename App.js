import React, { Component } from "react";
import ContactList from './ContactList';
import ContactDetail from './ContactDetail'
import {StackNavigator} from 'react-navigation';

const RootStack = StackNavigator(
    {
      ContactList:{
        screen: ContactList,
      },
      ContactDetail:{
        screen: ContactDetail,
      }
    },
    {
      initialRouteName: 'ContactList',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  ) ;
  
  type Props = {};
  export default class App extends Component<Props> {
    render() {
      return (  
        <RootStack />
      );
    }
  }
  