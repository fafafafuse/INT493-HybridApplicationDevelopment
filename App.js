/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {Container,Header, Content, List, ListItem, Text, Title} from "native-base";

import ContactData from "./ContactData";
import ContactItem from "./ContactItem";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { item:[]}
    ContactData.fetchContacts()
      .then(contacts=>{console.log(contacts);
      this.setState({item:contacts});})
      .catch(error=>{console.log(error)});
  }

  _renderContact = ( item ) => {
    const picsrc = item.firstname.toLowerCase() + ".jpeg";
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    return (
      <ContactItem item={item} imgurl={imgurl}/>
    );
  };


  render() {
    return (
      <Container>
        <Content>
          <List 
          dataArray={this.state.item}
          renderRow={this._renderContact}>
          </List>
        </Content>
      </Container>
    );
  }
}