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

export default class ContactDetail extends Component {
    static navigationOptions = {
        title: 'Contact Detail',
      } 
  render() {
    return (
    <Container>
      <Content>
        <Text>Detail Ja</Text>
      </Content>
    </Container>
    );
  }
}
