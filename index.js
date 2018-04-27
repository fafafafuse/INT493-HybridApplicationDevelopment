import { AppRegistry, Animated, Image, View } from 'react-native';
import Spin from './Spin';
import React, { Component } from 'react';
import Easing from './Easing'
import Spring from './Spring'


class index extends Component {
    render() {
        return (
            <View style={{ flex: 3 }}>
                <Spring style={{ flex: 1 }} />
                <Easing style={{ flex: 1 }} />
                <Spin style={{ flex: 1 }} />
            </View>
        )
    }
}

AppRegistry.registerComponent('TryNativeBase', () => index);

