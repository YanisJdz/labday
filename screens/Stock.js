import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from '../styles/Style';
import Header from '../config/header';

export default class Stock extends React.Component{
    render(){
        return(
            <View style = {Style.center}>
                <Header title = "Stocks disponibles" />
                <Text>Stocks</Text>
            </View>
        )
    }
}


