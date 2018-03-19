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
export default class ContactItem extends Component {
  render() {
    let { imgurl, item } = this.props;
    const fullName = item.prefix+item.firstname+" "+item.lastname
    return (
      <Content>
          <ListItem>
            <Thumbnail square size={100} source={{ uri: imgurl }} />
            <Body>
              <Text>
              {fullName}
              </Text>     
              </Body>
          </ListItem>
      </Content>
    );
  }
}
