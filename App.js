/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import ParkData from './ParkData';
import ParkItem from './ParkItem';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
    ParkData.fetchParks()
    .then(parks => {console.log(parks);
                    this.setState({data:parks});})
    .catch(error=>{console.log(error)});                
  }

  _renderPark = (item) => {
    const picsrc = item.image;
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    return (
      <ParkItem item={item} imgurl={imgurl}/>
    );
  };

  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'green'}}>
      <Body><Title>Contact List</Title></Body>
      </Header>
        <Content>
          <List 
          dataArray={this.state.data}
          renderRow={this._renderPark}>
          </List>
        </Content>
      </Container>
    );
  }
}

