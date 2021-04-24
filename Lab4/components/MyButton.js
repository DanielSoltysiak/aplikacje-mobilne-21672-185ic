import React from 'react';
import { Button, View } from 'react-native';

function MyButton(props) {
    return (
        <Button
          color = 'palevioletred'
          title = {props.buttonTitle}
          onPress = {() => props.navigation.navigate(props.buttonRoute)}
        />
    )
  }

export default MyButton;