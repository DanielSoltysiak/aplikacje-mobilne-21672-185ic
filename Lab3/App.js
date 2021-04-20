import React, { Suspense } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, FlatList ,View, Text, Button, ScrollView } from 'react-native';

import MyButton from './components/MyButton'
import StepIndicator from './components/StepIndicator'
import SortedNumbers from './components/SortedNumbers'

import styles from './styles'
import SortedLetters from './components/RandomLetters';

const RandomLetters = React.lazy(() => import('./components/RandomLetters'))

function FirstScreen({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
      <MyButton
        navigation = {navigation}
        buttonTitle = "Next"
        buttonRoute = "Second"
      />
    </View>
    <View style={{flex:12}}>
      <SortedNumbers/>
    </View>
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
      <Suspense fallback={<Text>Wczytywanie...</Text>}>
        <RandomLetters/>
      </Suspense>
    </View>
  )
}

function ThirdScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "Fourth"
        />
      </View>
      <View style={{flex:1}}>
        <StepIndicator position = {0}/>
      </View>
      <View style={{flex:5, justifyContent: 'center'}}>
        <ActivityIndicator size={100} color="lightpink"/>
      </View>
    </View>
  )
}

function FourthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "Fifth"
        />
      </View>
      <View style={{flex:1}}>
        <StepIndicator position = {1}/>
      </View>
      <View style={{flex:5, justifyContent: 'center'}}>
        <ActivityIndicator size={50} color="lightpink"/>
      </View>
    </View>
  )
}

function FifthScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <MyButton
          navigation = {navigation}
          buttonTitle = "Next"
          buttonRoute = "First"
        />
      </View>
      <View style={{flex:1}}>
        <StepIndicator position = {2}/>
      </View>
      <View style={{flex:5, justifyContent: 'center'}}>
        <ActivityIndicator size={50} color="lightgrey"/>
      </View>
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
          options={{ title: 'Posortowane liczby' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ title: 'Posortowane Litery' }} 
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