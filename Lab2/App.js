import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import MyButton from '../Lab2/components/MyButton'
import ScreenSpreadSyntax from '../Lab2/components/ScreenSpreadSyntax'
import ScreenRestParameters from '../Lab2/components/ScreenRestParameters'
import ScreenHookState from '../Lab2/components/ScreenHookState'

import styles from '../Lab2/styles'

function RedScreen({navigation}) {
  return (
    <View style={styles.redStyle}>
      <View style={{flex: 1}}>
        <MyButton 
          navigation = {navigation}
          buttonColor = 'red'
          buttonTitle = 'Rest Parameters Info'
          buttonRoute = 'Green'
        />
      </View>
      <View style={{flex: 1}}>
        <MyButton
          navigation = {navigation}
          buttonColor = 'red'
          buttonTitle = 'Hook useState Info'
          buttonRoute = 'Purple'
        />
      </View>
      <View style={{flex: 10}}>
        <ScreenSpreadSyntax/>
      </View>
    </View>
  )
}

function GreenScreen({navigation}) {
  return (
    <View style={styles.greenStyle}>
      <View style={{flex: 1}}>
        <MyButton
          navigation={navigation}
          buttonColor = 'green'
          buttonTitle='Spread syntax (...) Info'
          buttonRoute='Red'
        />
      </View>
      <View style={{flex: 1}}>
        <MyButton
          navigation={navigation}
          buttonColor = 'green'
          buttonTitle='Hook useState Info'
          buttonRoute='Purple'
        />
      </View>
      <View style={{flex: 1}}>
        <ScreenRestParameters/>
      </View>
    </View>
  )
}

function PurpleScreen({navigation}) {
  return (
    <View style={styles.purpleStyle}>
      <View style={{flex: 1}}>
        <MyButton 
          navigation = {navigation}
          buttonColor = 'purple'
          buttonTitle = 'Spread syntax (...) Info'
          buttonRoute = 'Red'
        />
      </View>
      <View style={{flex: 1}}>
        <MyButton
          navigation = {navigation}
          buttonColor = 'purple'
          buttonTitle = 'Rest Parameters Info'
          buttonRoute = 'Green'
        />
      </View>
      <View style={{flex: 1}}>
        <ScreenHookState/>
      </View>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Red" 
          component={RedScreen} 
          options={{ title: 'Spread syntax (...)' }}
        />
        <Stack.Screen 
          name="Green" 
          component={GreenScreen}
          options={{ title: 'Rest parameters' }} 
        />
        <Stack.Screen
          name="Purple" 
          component={PurpleScreen} 
          options={{ title: 'Hook useState' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}