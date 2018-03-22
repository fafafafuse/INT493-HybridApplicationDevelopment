import React, { Component } from 'react';
import { Text, View } from 'react-native';
class Field extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let { label, value } = this.props;
        return (
            <View style={{flexDirection:'row',paddingTop:20 ,paddingLeft:50,alignItems:'center'}}>
                <View style={{flex:1}}>
                <Text>{label} :</Text>
                </View>
                <View style={{flex:2}}>
                <Text>{value}</Text>
                </View>
            </View>
        );
    }
}

export default Field;