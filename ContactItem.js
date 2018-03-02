import React, { Component } from "react";
import {View,Text,Image,StyleSheet} from "react-native"
export default class ContactItem extends Component {
    render(){
      let {imgurl,item} = this.props;
    return (
      <View style={styles.row}>
        <Image style={styles.picture} source={{ uri: `${imgurl}` }} />
        <View>
          <Text style={styles.label}>
            {item.prefix} <Text>{item.firstname} </Text>{item.lastname}
          </Text>
          <Text style={styles.label}>Tel: {item.phone}</Text>
          <Text style={styles.label}>Email: {item.email}</Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  label: {
    fontSize: 16
  },
  picture: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    padding: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD"
  }
});

