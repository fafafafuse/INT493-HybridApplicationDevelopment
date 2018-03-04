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
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
