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
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Contact Detail',
  }

  render() {
    let {item} = this.props.navigation.state.params;
    return (
    <Container>
      <Content>
        <Text>{item.firstname}</Text>
      </Content>
    </Container>
    );
  }
}
