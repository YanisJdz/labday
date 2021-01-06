import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from '../styles/Style';

export default class Stock extends React.Component{
    render(){
        return(
            <View style = {Style.center}>
                <Text>Stocks</Text>
            </View>
        )
    }
}


