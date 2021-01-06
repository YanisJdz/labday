import React from 'react';
import Style from '../styles/Style'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default class List extends React.Component{
    render(){
        return(
            <View style = {Style.center}>
                <Text>Liste de courses</Text>
            </View>
        )
    }
}


