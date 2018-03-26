import React, { Component } from "react";
import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Container,
  Content,
  List
} from "native-base";
import {View,Image,TouchableHighlight} from 'react-native';
import Field from './Field';
import FieldCall from './FieldCall';

export default class ContactDetail extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Contact Info',
  }

  render() {
    let  item = this.props.navigation.state.params.item;
    let imgurl = this.props.navigation.state.params.imgurl;
    console.log(item);
    return (
      <View style={{ flexDirection: 'column',flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <Image source={{uri:imgurl}} style={{width:150 ,  height:150}}/>
        </View>
        <View style={{ flex: 2 }}>
          <Field label="Prefix" value={item.prefix} />
          <Field label="First Name" value={item.firstname} />
          <Field label="Last Name" value={item.lastname} />
          <Field label="Email" value={item.email} />
          
          <FieldCall label="Phone" value={item.phone} />

        </View>
        <View style={{flex:1}}>
        </View>
      </View>
    );
  }
}
