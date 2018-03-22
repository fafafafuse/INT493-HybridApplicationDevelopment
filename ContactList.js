/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {Container,Header, Content, List, ListItem, Text, Title, Body} from "native-base";


import ContactData from "./ContactData";
import ContactItem from "./ContactItem";

export default class ContactList extends Component{
  constructor(props) {
    super(props);
    this.state = { item:[]}
    ContactData.fetchContacts()
      .then(contacts=>{console.log(contacts);
      this.setState({item:contacts});})
      .catch(error=>{console.log(error)});
  }

  static navigationOptions = {
    title: 'Contact List',
  };

  _renderContact = ( item ) => {
    const picsrc = item.firstname.toLowerCase() + ".jpeg";
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    return (
      <ContactItem item={item} imgurl={imgurl} navigation={this.props.navigation}/>
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