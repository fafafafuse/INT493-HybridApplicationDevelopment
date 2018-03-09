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
import ProductData from './ProductData';

export default class ParkItem extends Component {
  render() {
    let { item } = this.props;
    const imgUrl = ProductData.getImageUrl()+item.productline.toLowerCase()+"/"+item.productcode+'.jpg';
    return (
      <Card>
        
      <CardItem>
        <Left><Image source={{uri:imgUrl}} style={{width:100 , height:100, resizeMode:'contain'}}/>
        </Left>
        <Body>
        <Text>{item.productname}</Text>
        <Text>{item.productscale}</Text>
        </Body>
      </CardItem> 
      <CardItem>
        <Left>
        <Text>{item.productcode}</Text>
        </Left>
      </CardItem>     
    
      </Card>
    );
  }
}
