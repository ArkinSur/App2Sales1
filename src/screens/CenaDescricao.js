import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../components/HeaderBar';

export default class CenaInicial extends Component {
    static navigationOptions = {
        header: null
      };

    render() {
        return (
            <View>
                <HeaderBar />
                <View style={{ marginVertical: 14, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>DESCRIÇÃO</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 8 }}>
                    <Text style={{ fontSize: 18 }}>
                        É um fato conhecido de todos que um leitor se distrairá com o conteúdo 
                        do texto legível de uma página quando estiver olhando a sua diagramação
                    </Text>
                </View>
                <View style={{ marginVertical: 14, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>PERIODICIDADE</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 3, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>
                        Uma vez a cada 3 meses
                    </Text>
                </View>
                <View style={{ marginVertical: 14, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>ANEXOS</Text>
                </View>
            </View>
        );
    }
}
