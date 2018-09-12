import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default class CheckButton extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }

    render() {
    if (this.state.checked) {
        return (
            <TouchableOpacity onPress={() => this.setState({ checked: !this.state.checked })}>
                <Image
                    style={{ height: 35, width: 35 }} 
                    source={{ uri: 'https://esferatur.com.br/wp-content/uploads/2017/08/checked.png' }} 
                />
            </TouchableOpacity>
        );
    } 
    if (this.state.checked === false) {
        return (
            <TouchableOpacity onPress={() => this.setState({ checked: !this.state.checked })}>
                <Image
                    style={{ height: 35, width: 35 }} 
                    source={{ uri: 'https://image.flaticon.com/icons/png/512/19/19973.png' }} 
                />
            </TouchableOpacity>
        ); 
    }    
    }
}
