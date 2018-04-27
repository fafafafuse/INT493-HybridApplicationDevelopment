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
    spring() {
        this.springValue.setValue(1)
        Animated.spring(
            this.springValue,
            {
                toValue: 0.5,
                friction: 0.1
            }
        ).start()
    }

    render() {
        return (
            <View>

                <Animated.Image
                    style={{ width: 337, height: 300, transform: [{ scale: this.springValue }], alignSelf: 'center' }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} />

            </View >
        )
    }
}