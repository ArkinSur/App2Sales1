import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


export default class Equipamentos extends Component {

    render() {
            switch (this.props.tipo) {
                case 'Tecido':
                    return (
                    <View>
                        <View>
                            <Image 
                                style={styles.img}
                                source={{ uri: 'https://static.thenounproject.com/png/168232-200.png' }} 
                            />
                        </View>
                    </View>
                    );
                
                case 'Luvas':
                    return (
                        <View>
                            <Image 
                                style={styles.img}
                                source={{ uri: 'https://static.thenounproject.com/png/66947-200.png' }} 
                            />
                        </View>
                    );
                
                case 'Oculos':
                    return (
                        <View>
                            <Image 
                                style={styles.img}
                                source={{ uri: 'https://cdn4.iconfinder.com/data/icons/health-and-safety/128/6-512.png' }}
                            />
                        </View>
                    );
               
                case 'Uniforme':
                    return (
                        <View>
                            <Image 
                                style={styles.img}
                                source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/uniform-3-669886.png' }} 
                            />
                        </View>
                    );
        
                case 'Material':
                    return (
                        <View>
                            <Image
                                style={styles.img} 
                                source={{ uri: 'https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-3/128/tools-512.png' }} 
                            />
                        </View>
                    );
                
                default :
                return (
                    <View>
                        <Text>No Img.</Text>
                    </View>
                );
            }
    }
}

const styles = StyleSheet.create({
    img: {
        height: 20,
        width: 20
    }
});
