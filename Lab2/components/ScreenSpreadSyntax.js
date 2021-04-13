import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'

export default function ScreenSpreadSyntax() {
    return (
        <View>
            <Text style={styles.txt}>
            Spread syntax (...) pozwala nam na przekazanie wszystkich elementów tablicy lub obiektu do funkcji.
            </Text>
        </View>
    )
}