import React, { Component } from "react";
import {Image,View} from 'react-native';
import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Container,
  Content,
  List,
  Title,
  Card,
  CardItem
} from "native-base";
export default class LineItem extends Component {
  render() {
    let { item,name,src } = this.props;

    return (
       
      <Card>
        
          <CardItem header>
            <Image source = {src}/>
       
          </CardItem> 
          <CardItem footer>
            
            <Text>{name}</Text>
          </CardItem>      
        
      </Card>
    );
  }
}
