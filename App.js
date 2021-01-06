import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {Style} from './styles/Style';
import List from './screens/List';
import Stock from './screens/Stock';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Mes courses"  
          component={List} 
          options={{
            tabBarIcon: (props) => <Ionicons name="ios-car" size={props.size} color={props.color}/>
          }}
        />
        <Tab.Screen 
          name="Mes stocks" 
          component={Stock}
          options={{
            tabBarIcon: (props) => <Ionicons name="ios-pizza" size={props.size} color={props.color}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


