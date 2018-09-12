import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Equipamentos from '../components/Equipamentos';
import ItemPassos from '../components/ItemPassos';
import HeaderBar from '../components/HeaderBar';

export default class CenaClientes extends Component {
    

    static navigationOptions = {
        header: null
      };

    render() {
        return (
        <View>
          <HeaderBar />
                <ScrollView style={{ backgroundColor: '#DCDCDC' }}>
                <View style={{ marginVertical: 14, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>EQUIPAMENTOS</Text>
                </View>

                <View style={styles.rola}>
                    <View style={{ marginHorizontal: 5 }}>
                        <View style={styles.bolag}> 
                            <Equipamentos tipo='Tecido' />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Tecido</Text>
                    </View>

                    <View style={{ marginHorizontal: 5 }}>
                        <View style={styles.bolag}>
                            <Equipamentos tipo='Luvas' />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Luvas</Text>
                    </View>

                    <View style={{ marginHorizontal: 5 }}>
                        <View style={styles.bolag}>
                            <Equipamentos tipo='Oculos' />
                        </View>
                    <Text style={{ textAlign: 'center' }}>Oculos</Text>
                    </View>

                    <View style={{ marginHorizontal: 5 }}>
                        <View style={styles.bolag}>
                            <Equipamentos tipo='Uniforme' />
                        </View>
                    <Text style={{ textAlign: 'center' }}>Uniforme</Text>
                    </View>

                    <View style={{ marginHorizontal: 5 }}>
                        <View style={styles.bolag}>
                            <Equipamentos tipo='Material' />
                        </View>
                    <Text style={{ textAlign: 'center' }}>Material</Text>
                    </View>         
                </View>

                <View style={{ marginVertical: 14, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>PASSOS</Text>
                </View>

                
                  <View>
                    <ItemPassos
                        count='3'
                        content='1' 
                        numero='1'
                        passos='Retirar o filtro'
                        tipo1='Luvas'
                        tipo2='Uniforme'
                        tipo3='Material'
                    />
                 </View>
                 <View>
                    <ItemPassos
                    count='5' 
                    content='1'
                        numero='2'
                        passos='Limpar o filtro'
                        tipo1='Luvas'
                        tipo2='Uniforme'
                        tipo3='Tecido'
                    />
                 </View>
                 <View>
                    <ItemPassos 
                        count='0'
                        content='0'
                        numero='3'
                        passos='Recolocar Filtro'
                        tipo1='Luvas'
                        tipo2='Uniforme'
                        tipo3='Material'
                    />
                 </View>
                 <View>
                    <ItemPassos 
                       count='1'
                        content='1'
                        numero='4'
                        passos='Recolher assinaturas'
                        tipo1='Luvas'
                        tipo2='Uniforme'
                        tipo3='Material'
                    />
                 </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    rola: { 
        flexDirection: 'row', 
        height: 85, 
        backgroundColor: '#fff',  
        alignItems: 'center' 
    },

    bolag: {
            height: 54,
            width: 54,
            backgroundColor: '#00BFFF',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }
});
