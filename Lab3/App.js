import React, { Suspense } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import MyButton from './components/MyButton'
import SortedNumbers from './components/SortedNumbers'

import styles from './styles'

const SortedLetters = React.lazy(() => import('./components/SortedLetters'))

function FirstScreen({navigation}) {
  return (
    <View>
      <MyButton
        navigation = {navigation}
        buttonColor = "blue"
        buttonTitle = "Next"
        buttonRoute = "Second"
      />
      <SortedNumbers/>
    </View>
  )
}

function SecondScreen({navigation}) {
  return (
    <View>
      <Suspense fallback={<Text>Wczytywanie...</Text>}>
        <SortedLetters/>
      </Suspense>
    </View>
  )
}

function ThirdScreen({navigation}) {
  return (
    <View>

    </View>
  )
}

function FourthScreen({navigation}) {
  return (
    <View>

    </View>
  )
}

function FifthScreen({navigation}) {
  return (
    <View>

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
          options={{ title: 'Posortowane i przefiltrowane liczby' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ title: 'Rest parameters' }} 
        />
        <Stack.Screen
          name="Third" 
          component={ThirdScreen} 
          options={{ title: 'Hook useState' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
        />
        <Stack.Screen
          name="Fifth"
          component={FifthScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}