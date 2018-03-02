/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import ContactData from "./ContactData";
import ContactItem from "./ContactItem";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    ContactData.fetchContacts().then(contacts => {
      this.setState({ data: contacts });
    });
  }
  _renderContact = ({ item }) => {
    const picsrc = item.firstname.toLowerCase() + ".jpeg";
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    return (
      <View style={styles.row}>
        <Image style={styles.picture} source={{ uri: `${imgurl}` }} />
        <View>
          <Text>
            {item.prefix}<Text>{item.firstname} </Text>
            {item.lastname}
          </Text>
          <Text>Tel: {item.phone}</Text>
          <Text>Email: {item.email}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderContact} />
      </View>
    );
  }
}
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
