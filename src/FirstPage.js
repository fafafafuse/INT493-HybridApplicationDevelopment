import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Sequence from './Sequence'


export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    static navigationOptions = {
        header: null,
    }

    onPress = () => {
        setTimeout(() => {
            this.setState({ visible: false })
        }, 6000)
        this.setState({ visible: true })
    }

    render() {
        const Start = () => {
            return (
                <Button onPress={this.onPress} title={'Start'} />
            )
        }

        return (
            <View style={styles.container}>
                {this.state.visible ? <Sequence navigation={this.props.navigation} /> : <Start />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})