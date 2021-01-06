import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
import Stock from '../screens/Stock';

const listStack = createStackNavigator();
const listStackScreen = () => (
    <listStack.Navigator>
        <listStack.Screen name="Liste de courses" component={List}/>
        <listStack.Screen name="Mes stocks" component={Stock}/>
    </listStack.Navigator>
);

export default () => (

    <NavigationContainer>
        <listStackScreen/>
    </NavigationContainer>
);