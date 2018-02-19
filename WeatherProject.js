/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground
} from "react-native";
import OpenWeatherMap from './open_weather_map';
import Forcast from './Forecast';
import Forecast from "./Forecast";

export default class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "",forecast:null };
    console.log("zip " + this.state.zip);
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    this.setState({ zip:zip });
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({forecast:forecast});
    });
  };

  render() {
    let content = null;
    if(this.state.forecast !== null){
      content = (
        <Forecast
        main={this.state.forecast.main}
        description={this.state.forecast.description}
        temp={this.state.forecast.temp}
        />
      );
    }
    return (
      <View style={styles.frame}>
        <ImageBackground
          source={require("./flowers.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>You input {this.state.zip}.</Text>
            {content}
            <TextInput
              style={styles.input}
              onSubmitEditing={this._handleTextChange}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  },
  backgroundImage: {
    flex: 1
  }
});
