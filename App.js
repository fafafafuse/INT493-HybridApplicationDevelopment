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
  List,
  Grid,
  Col,
  ListItem
} from 'native-base';
import {View,StyleSheer,FlatList,ScrollView,TouchableHighlight} from 'react-native';

import ProductData from './ProductData';
import LineItem from './LineItem';
import ProductItem from './ProductItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] ,
      allProductLine:[{id:1,productline:'Classic Cars'},
                      {id:2,productline:'Motorcycles'},
                      {id:3,productline:'Planes'},
                      {id:4,productline:'Ships'},
                      {id:5,productline:'Trains'},
                      {id:6,productline:'Trucks and Buses'},
                      {id:7,productline:'Vintage Cars'}] ,

      productline : 'Classic Cars'
    };
    ProductData.fetchProduct()
      .then(products => {
        console.log(products);
        this.setState({
          data: products
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  _renderProduct = (item) => {
    return ( 
    <ProductItem item = {item}/>
  )};

  _renderLine = (item) => {
    var productline = item.productline;
    path=''
      
    return (
      <TouchableHighlight onPress={() => {
        this.setState({productline:productline});
        ProductData.fetchProduct(productline)
          .then(products => {
          console.log(products);
          this.setState({
            data: products
            });
          })
          .catch(error => {
            console.log(error)
            });
        console.log(productline);
      }}>
      <LineItem item = {item} name={productline} bike={require('./icon/bikes.png')}
                                                 classic={require('./icon/classics.png')}
                                                 train={require('./icon/trains.png')}
                                                 plane={require('./icon/planes.png')}
                                                 ship={require('./icon/ships.png')}
                                                 truck={require('./icon/trucks.png')}
                                                 vintage={require('./icon/vintages.png')}
                                                 />
      </TouchableHighlight>
    )
  }


  render() {
    return ( 
      <View style={{flexDirection:'row'}}>

        <View style={{flex:1}}>
        <List dataArray={this.state.allProductLine}
              renderRow={this._renderLine}>
        </List>
        </View>

        <View style={{flex:2}}>
        <List dataArray={this.state.data}
              renderRow={this._renderProduct}>
        </List>
        </View>
       
      </View>
    );
  }
}