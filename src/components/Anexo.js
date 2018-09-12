import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


export default class Anexo extends Component {
    constructor(props) {
        super(props);

        this.state = { num: '' };
    }

    componentWillMount() {
        const num = parseFloat(this.props.count);
        this.setState({ num });
        console.log(this.state.num);
    }

    render() {
        if (this.state.num >= 1) {
            return (
                <View style={styles.not}>
                    <Text style={{ color: '#fff', fontSize: 9, fontWeight: '700' }}>{this.state.num}</Text>
                </View>
            );
        }

        if (this.state.num === 0) {
            return (
                <View style={styles.not2}>
                    <Text style={{ color: '#fff', fontSize: 9, fontWeight: '700' }}>{this.state.num}</Text>
                </View>
            );
        }      
    }
}

const styles = StyleSheet.create({
    not: {
        height: 10,
        width: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 2
    },

     not2: {
        height: 10,
        width: 10,
        backgroundColor: '#FFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 2
     }
});
