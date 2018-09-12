import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class CenaInicial extends Component {
    static navigationOptions = {
        title: 'Início',
        headerStyle: {
          backgroundColor: '#483D8B',
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
            fontSize: 25
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tarefas')}>
                    <View style={styles.button}> 
                        <Text style={styles.txt}>Iniciar</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        elevation: 3,
        backgroundColor: '#483D8B', 
        borderWidth: 0.5,
        borderColor: 'transparent',
        borderRadius: 30,
        height: 50,
        width: 140
    },

    txt: {
        color: '#fff',
        fontSize: 19,
        textAlign: 'center',
        paddingTop: 12,
        fontWeight: 'bold'
    }
});
