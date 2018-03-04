import React, { Component } from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text,Container,Content,List} from "native-base";
export default class ContactItem extends Component {
    render(){
      let {imgurl,item} = this.props;
    return (
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: imgurl }} />
              </Left>
              
              <Body>
              <Text>
              {item.prefix}<Text>{item.firstname} </Text>{item.lastname}
              </Text>
              <Text note>Tel: {item.phone}</Text>
              <Text note>Email: {item.email}</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
    );
  }
};

