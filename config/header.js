import React from 'react';
import { View, Text } from 'react-native';
import Style from '../styles/Style';

export default function header(props) {
    return (
        <View style = {Style.test}>
            <Text style = {Style.test2}>{props.title}</Text>
        </View>
    )
}
