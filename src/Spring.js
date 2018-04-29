import React, { Component } from 'react'
import { View, Animated, TouchableHighlight } from 'react-native'

export default class Spring extends Component {
    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(1)
    }

    componentDidMount() {
        this.spring()
    }

    onSpringCompletion = () => {

        this.spring();

    }

    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start(this.onSpringCompletion)
    }

    render() {
        return (
            <View>

                <Animated.Image
                    style={{ width: 500, height: 280, transform: [{ scale: this.springValue }], alignSelf: 'center' }}
                    source={{ uri: 'https://www.kustomer.com/app/uploads/2018/02/shop-spring-logo.png' }} />

            </View >
        )
    }
}