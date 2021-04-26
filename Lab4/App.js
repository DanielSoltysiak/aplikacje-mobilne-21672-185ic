import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import MyButton from './components/MyButton'
import TextInputCap from './components/TextInputCap'
import Select from './components/Select'

function FirstScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "Second"
      />
      <TextInputCap/>
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
      <Select/>
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
    </View>
  )
}

function FifthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "First"
        />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First" 
          component={FirstScreen} 
          options={{ title: 'Możliwości komponentu TextInput' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ title: 'Select' }} 
        />
        <Stack.Screen
          name="Third" 
          component={ThirdScreen} 
          options={{ title: 'Krok 1' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'Krok 2' }}
        />
        <Stack.Screen
          name="Fifth"
          component={FifthScreen}
          options={{ title: 'Krok 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
