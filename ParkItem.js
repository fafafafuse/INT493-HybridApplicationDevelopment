import React, { Component } from "react";
import {Image} from 'react-native';
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

export default class ParkItem extends Component {
  render() {
    let { item } = this.props;

    const picsrc = item.image;
    const thumburl = `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/thumbs/${picsrc}`;
    const headurl = `http://web.sit.kmutt.ac.th/sanit/int493/assets/img/headers/${picsrc}`;
    return (
       
      <Content>
        
          <CardItem header>
            <Left>
              <Thumbnail source={{uri: thumburl}} />
              <Body>
                <Text>Park: {item.park}</Text>
                <Text note>State: {item.state}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: headurl}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>      
          <CardItem footer>
            <Text>{item.description}</Text>
          </CardItem> 
        
      </Content>
    );
  }
}
