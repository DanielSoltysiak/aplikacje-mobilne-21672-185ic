import React from 'react';
import { Button, View } from 'react-native';

function MyButton(props) {
    return (
        <Button
          color = '#c94c4c'
          title = {props.buttonTitle}
          onPress = {() => props.navigation.navigate(props.buttonRoute)}
        />
    )
  }

export default MyButton;