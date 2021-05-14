import React from 'react';
import { Button } from 'react-native';

function MyButton(props) {
    return (
        <Button
          color = '#ffcc5c'
          title = {props.buttonTitle}
          onPress = {() => props.navigation.navigate(props.buttonRoute)}
        />
    )
  }

export default MyButton;