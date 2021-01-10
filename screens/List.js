import React from 'react';
import Style from '../styles/Style'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../config/header';

export default class List extends React.Component{
    render(){
        return(
            <View style = {Style.center}>
                <View>
                    <Header title = "Mes courses" />
                    <Text>Liste de courses</Text>
                </View>
            </View>
        )
    }
}


