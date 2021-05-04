import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import MyButton from './components/MyButton'
import ScreenOne from './components/ScreenOne'

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
          options={{ title: 'Scrollview 1' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ title: 'Scrollview 2' }} 
        />
        <Stack.Screen
          name="Third" 
          component={ThirdScreen} 
          options={{ title: 'Switch & Modal' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'Data i czas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
