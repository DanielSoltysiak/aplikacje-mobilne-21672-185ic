import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from '../Lab2/Screen'

function RedScreen({navigation}) {
  return (
    <Screen 
      navigation={navigation}
      button1Title='Go to Green'
      button1Route='Green'
      button2Title='Go to Blue'
      button2Route='Blue'
    />
  )
}

function GreenScreen({navigation}) {
  return (
    <Screen 
      navigation={navigation}
      button1Title='Go to Red'
      button1Route='Red'
      button2Title='Go to Blue'
      button2Route='Blue'
    />
  )
}

function BlueScreen({navigation}) {
  return (
    <Screen 
      navigation={navigation}
      button1Title='Go to Red'
      button1Route='Red'
      button2Title='Go to Green'
      button2Route='Green'
  />
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Red" component={RedScreen} />
        <Stack.Screen name="Green" component={GreenScreen} />
        <Stack.Screen name="Blue" component={BlueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
