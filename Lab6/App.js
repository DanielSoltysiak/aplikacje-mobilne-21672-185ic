import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import MyButton from './components/MyButton'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'

import ScreenFour from './components/ScreenFour'
import ScreenFive from './components/ScreenFive'
import ScreenSix from './components/ScreenSix'

function FirstScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "Second"
      />
      <ScreenOne/>
    </View>
  )
}

function SecondScreen({navigation}) {
  return (
    <View>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "Third"
      />
      <ScreenTwo/>
    </View>
  )
}

function ThirdScreen({navigation}) {
  return (
    <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "Fourth"
        />
    </View>
  )
}

function FourthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "Fifth"
        />
        <ScreenFour/>
    </View>
  )
}

function FifthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "Sixth"
      />
      <ScreenFive/>
    </View>
  )
}

function SixthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "First"
      />
      <ScreenSix/>
    </View>
  )
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sixth">
        <Stack.Screen
          name="First" 
          component={FirstScreen} 
          options={{ title: 'Komponent Image' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ title: 'Komponent Slider' }} 
        />
        <Stack.Screen
          name="Third" 
          component={ThirdScreen} 
          options={{ title: 'Lazy loading' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'Detekcja łączności' }}
        />
        <Stack.Screen
          name="Fifth"
          component={FifthScreen}
          options={{ title: 'AsyncStorage'}}
        />
        <Stack.Screen
          name='Sixth'
          component={SixthScreen}
          options={{ title: 'Synchronizacja danych'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
