import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

 class HeaderBar extends Component {
    render() {
    return (
    <View style={{ height: 55, flexDirection: 'row', alignContent: 'space-between', backgroundColor: '#483D8B'}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{ paddingRight: 12, flex: 1, justifyContent: 'center' }}>
                <Image
                    style={{ width: 40, height: 30 }} 
                    source={{ uri: 'https://png.icons8.com/ios/1600/back.png' }} 
                />
                </View>
            </TouchableOpacity>
        <View style={{ flex: 2, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff' }}>{this.props.navigation.getParam('nome', 'Cliente')}</Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Hello World!')}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image
                    style={{ width: 45, height: 50 }} 
                    source={{ uri: 'https://xeniapp.com/wp-content/uploads/package_img/file_broucher/1487145277_5_2416616.png' }} 
                />
                </View>
            </TouchableOpacity>
    </View>
);
}
}

export default withNavigation(HeaderBar);
