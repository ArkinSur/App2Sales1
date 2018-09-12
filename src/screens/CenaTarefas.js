import React, { Component } from 'react';
import { View, 
         Text, 
         TouchableOpacity, 
         ScrollView, 
         Image,
         Alert } from 'react-native';
import ItemLista from '../components/ItemLista';

export default class CenaInicial extends Component {
    
    static navigationOptions = {
        title: 'Tarefas',
        headerStyle: {
          backgroundColor: '#483D8B',
        },
        headerTintColor: '#fff',

        headerTitleStyle: {
            fontSize: 18
        },

        headerRight: (
            <TouchableOpacity onPress={() => Alert.alert('Hello World!')}>
                <View style={{ paddingRight: 12 }}>
                <Image
                    style={{ width: 32, height: 32 }} 
                    source={{ uri: 'https://vignette.wikia.nocookie.net/nobellion/images/3/32/Ic_settings_white_48dp.png/revision/latest?cb=20180423120420' }} 
                />
                </View>
            </TouchableOpacity>
          ),

          headerLeft: null
      };

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DCDCDC' }}>
                <View style={{ marginVertical: 10, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>HOJE</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => (this.props.navigation.navigate('Clientes', { nome: 'Honda' }))}
                    >
                        <ItemLista nome='Honda' hora='09:00' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes', { nome: 'Belgo' })}>
                        <ItemLista nome='Belgo' hora='11:00' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes', { nome: 'Brasken' })}>
                        <ItemLista nome='Brasken' hora='14:00' />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 8, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>AMANHÃ, 22/04</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes', { nome: 'Pirelli' })}>
                        <ItemLista nome='Pirelli' hora='09:00' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes', { nome: 'Ambev' })}>
                        <ItemLista nome='Ambev' hora='11:00' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes', { nome: 'Google' })}>
                        <ItemLista nome='Google' hora='14:00' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
