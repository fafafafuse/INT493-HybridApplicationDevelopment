import React, { Component } from 'react';
import { Alert,Text, View, TouchableHighlight } from 'react-native';
class Field extends Component {
    constructor(props){
        super(props);
    }
    _callPressed = () => {
        {   
            Alert.alert('Call?',`Call ${this.props.value}`,[{text:'Call'},{text:'Cancel'}],{cancelable:false});;
        }
};

    render() {
        let { label, value } = this.props;
        return (
            <View style={{flexDirection:'row',paddingTop:20 ,paddingLeft:50,alignItems:'center'}}>
                <View style={{flex:1}}>
                <Text>{label} :</Text>
                </View>

                <View style={{flex:2}}>
                <TouchableHighlight underlayColor='transparent' onPress={this._callPressed}>
                <Text style={{color:'blue',textDecorationLine:'underline'}}>{value}</Text>
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default Field;