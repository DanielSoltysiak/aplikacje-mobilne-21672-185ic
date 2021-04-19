import React from 'react';
import { Button, View } from 'react-native';
import styles from '../../Lab2/styles'

const Separator = () => (
  <View style={styles.separator} />
);

function MyButton(props) {
    return (
        <Button
          color = {props.buttonColor}
          title = {props.buttonTitle}
          onPress = {() => props.navigation.navigate(props.buttonRoute)}
        />
    )
  }

export default MyButton;