import React, { Component } from "react";
import {Image,View} from 'react-native';
import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Container,
  Content,
  List,
  Title,
  Card,
  CardItem
} from "native-base";
export default class LineItem extends Component {
  render() {
    let { item,name,bike,classic,plane,train,ship,truck,vintage } = this.props;
    let path ='';
    if (name=='Motorcycles'){
      path = bike;
    }
    if (name=='Classic Cars'){
      path = classic;
    }
    if (name=='Planes'){
      path = plane;
    }
    if (name=='Ships'){
      path = ship;
    }
    if (name=='Trucks and Buses'){
      path = truck;
    }
    if (name=='Trains'){
      path = train;
    }
    if (name=='Vintage Cars'){
      path = vintage;
    }
    return (
      <Card>
        
          <CardItem header>
            <Image source = {path}/>
       
          </CardItem> 
          <CardItem footer>
            
            <Text>{name}</Text>
          </CardItem>      
        
      </Card>
      
    );
  }
}
