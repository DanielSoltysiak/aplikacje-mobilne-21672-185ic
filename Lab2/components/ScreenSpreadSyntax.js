import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles'

export default function ScreenSpreadSyntax() {
    return (
        <View>
            <Text style={styles.txt}>
            Spread syntax (...) pozwala nam na przekazanie wszystkich elementów tablicy lub obiektu do funkcji.
            </Text>
            <Image source = {require('../screenshots/spreadOperator.png')}/>
        </View>
    )
}