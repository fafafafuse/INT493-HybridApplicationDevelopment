import React, { Component } from "react";
import { View, Text, Slider, Animated, Image, Easing, TextInput } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
    this.state = {
      duration: 100,
      easing: Easing.exp,
      min: 100,
      max: 5000,
      step: 100,
    }
  }
  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: this.state.duration,
        easing: this.state.easing,
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    let { min, max, step, duration, easing } = this.state;
    return (
      <View>
        <Text>Duration: {duration} mls</Text>
        <Slider minimumValue={min} maximumValue={max} onValueChange={(value) => this.setState({ duration: value })} step={step} />
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }}
          source={{ uri: 'https://www.isranews.org/images/2016/invest/12/1400919745.jpg' }}
        />
      </View>
    )
  }
}
