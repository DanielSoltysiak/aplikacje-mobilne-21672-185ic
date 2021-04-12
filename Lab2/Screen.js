import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Screen(props) {
    return (
      <View>
        <Button
          title = {props.button1Title}
          onPress = {() => props.navigation.navigate(props.button1Route)}
        />
        <Button
          title= {props.button2Title}
          onPress={() => props.navigation.navigate(props.button2Route)}
        />
      </View>
    )
  }

export default Screen;