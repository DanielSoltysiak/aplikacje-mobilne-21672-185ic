import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import MyButton from './components/MyButton'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'
import ScreenThree from './components/ScreenThree'
import ScreenFour from './components/ScreenFour'

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
        <ScreenThree/>
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
        <ScreenFour/>
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
          options={{ title: 'Touchable Opacity & Highlight' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'Swipeable' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
