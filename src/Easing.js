import React, { Component } from "react";
import { View, Text, Slider, Animated, Image, Easing, TextInput, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Card, Container } from 'native-base'

export default class App extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    animate(easing) {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing
            }
        ).start()
    }

    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 500]
        })
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.block, { marginLeft }]} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.card}>
                        <Button easing='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
                        <Button easing='Back' onPress={this.animate.bind(this, Easing.back(2))} />
                    </View>
                    <View style={styles.card}>
                        <Button easing='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
                        <Button easing='Linear' onPress={this.animate.bind(this, Easing.linear)} />
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const Button = ({ onPress, easing }) => (
    <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text>Easing: {easing}</Text>
    </TouchableHighlight>
)

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    button: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex: 1
    },
    block: {
        width: 65,
        height: 50,
        backgroundColor: 'red'
    },
    card: {
        flex: 2,
        flexDirection: 'row',
        margin: 50
    }
});
