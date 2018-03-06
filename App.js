/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  List
} from 'native-base';

import ParkData from './ParkData';
import ParkItem from './ParkItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    ParkData.fetchParks()
      .then(parks => {
        console.log(parks);
        this.setState({
          data: parks
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  _renderPark = (item) => {
    return ( 
    <ParkItem item = {item}/>
  )};

  _handleClick = () => {
    console.log('Clicked')
  }

  render() {
    return ( 
      <Container>
     <Content>
      <List dataArray = {this.state.data} 
            renderRow = {this._renderPark} 
            onClick= {this._handleClick}>
      </List>
      </Content> 
      </Container>
    );
  }
}