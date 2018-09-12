import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import CheckButton from './CheckButton';
import EquipamentosP from './EquipamentosP';
import Anexo from './Anexo';

 class ItemPassos extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }

    render() {
        if (this.props.content === '1') {
            return (
                <View style={styles.container}>
                  <View style={{ flex: 1.5, paddingTop: 8 }}>
                    <View style={styles.justify}>
                        <Text style={styles.txt1}>{this.props.numero}. {this.props.passos}</Text>
                    </View>
                    <View style={styles.container2}>
                       <View style={{ flex: 1.7 }}> 
                            <Text>Detalhes:</Text>
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Descricao', { nome: this.props.navigation.getParam('nome', 'Cliente') })}
                            >
                                <Text style={{ fontSize: 16 }}>Descrição</Text>
                            </TouchableOpacity>
                       </View>
                        <View style={{ flex: 0.8, paddingLeft: 15, paddingTop: 6 }}>
                            <Anexo count={this.props.count} />
                            <View style={{ paddingLeft: 5, paddingBottom: 6 }}>
                                <Image
                                    style={{ height: 18, width: 18 }} 
                                    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/mini-solid-icons-vol-2/16/57-512.png' }} 
                                />
                            </View>
                        </View>
                                
                       <View style={{ flex: 3, flexDirection: 'row', paddingLeft: 20 }}> 
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo1} />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo2} />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo3} />
                            </View>
                        </View>
                    </View>
                    </View>
                    </View>
    
                  <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                  <CheckButton />
                  </View>
                </View>
            );
        }  

        if (this.props.content === '0') {
            return (
                <View style={styles.container}>
                  <View style={{ flex: 1.5, paddingTop: 8 }}>
                    <View style={styles.justify}>
                        <Text style={styles.txt1}>{this.props.numero}. {this.props.passos}</Text>
                    </View>
                    <View style={styles.container2}>
                       <View style={{ flex: 1.7 }}> 
                            <Text>Detalhes:</Text>
                            <Text style={{ fontSize: 16 }}>Nenhum</Text>                   
                       </View>
                        <View style={{ flex: 0.8, paddingLeft: 15, paddingTop: 6 }}>
                            <Anexo count={this.props.count} />
                            <View style={{ paddingLeft: 5, paddingBottom: 6 }}>
                                <Image
                                    style={{ height: 18, width: 18 }} 
                                    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/mini-solid-icons-vol-2/16/57-512.png' }} 
                                />
                            </View>
                        </View>
                                
                       <View style={{ flex: 3, flexDirection: 'row', paddingLeft: 20 }}> 
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo1} />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo2} />
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.bolap}>
                                <EquipamentosP tipo={this.props.tipo3} />
                            </View>
                        </View>
                    </View>
                    </View>
                    </View>
    
                  <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                  <CheckButton />
                  </View>
                </View>
            );
        }               
    }     
    }
    
    export default withNavigation(ItemPassos);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 85,
        marginVertical: 2
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop: 5
    },

    container3: {
        flex: 1.4,
        flexDirection: 'row'
    },

    container4: {
        flex: 0.4,
        justifyContent: 'flex-end',
        paddingBottom: 9
    },

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

    justify: {
        paddingLeft: 15
    },

    bolap: {
        height: 30,
        width: 30,
        backgroundColor: '#00BFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
});
