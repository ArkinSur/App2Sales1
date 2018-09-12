import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default props => (
     
        <View style={styles.container}>            
                    <View style={styles.container2}> 
                       <Text style={styles.titulo}>{props.nome}</Text>
                    
                       <View style={styles.container3}>
                          <Image 
                            style={{ width: 20, height: 20 }} 
                            source={{ uri: 'https://mbtskoudsalg.com/images/bell-icon-png-3.png' }} 
                          />
                          <View style={styles.container4}>
                            <Text style={styles.texto}>{props.hora}</Text>
                          </View>
                       </View>
                    </View>

                    <View style={styles.container5}>
                        <Text style={styles.texto2}>Av. das Nações Unidas, 8501 - Pinheiros, São Paulo - SP</Text>
                        <Text style={styles.texto2}>(14) 3114-0000</Text>
                    </View>
          </View>
        
);

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 0.05,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        backgroundColor: '#fff'
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20
    },

    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        width: 91
    },

    container4: {
        height: 19,
        width: 40,
        backgroundColor: '#00BFFF',
        borderRadius: 5
    },

    container5: {
        paddingLeft: 20,
        marginTop: 7,
    },

    titulo: {
        fontSize: 21,
        fontWeight: 'bold'
    },

    texto: {
        color: '#fff',
        textAlign: 'center' 
    },

    texto2: {
        fontSize: 10
    }
});
