import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Button
} from 'react-native'

const arr = []
for (var i = 0; i < 250; i++) {
    arr.push(i)
}

export default class animations extends Component {

    constructor(props) {
        super(props)
        this.animatedValue = []
        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0)
        })
    }

    componentDidMount() {
        this.animate()
    }

    animate() {
        const animations = arr.map((item) => {
            return Animated.timing(
                this.animatedValue[item],
                {
                    toValue: 1,
                    duration: 1
                }
            )
        })
        Animated.sequence(animations).start(this.onComplete)
    }

    onComplete = () => {
        this.props.navigation.navigate('Second')
    }

    render() {
        const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={[{ opacity: this.animatedValue[a] }, styles.block]} />
        })
        return (
            <View style={styles.container} >
                {animations}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    block: {
        height: 50, width: 50, backgroundColor: 'red', marginLeft: 3, marginTop: 3
    }
})

