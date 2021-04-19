import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'

export default function ScreenSpreadSyntax() {
    return (
        <View>
            <Text style={styles.txt}>
            Rest Parameters pozwala na stworzenie funkcji która przyjmuje dowolną ilość argumentów w postaci tablicy.
            Jeżeli chcemy przekazać do funkcji zmienne poza tablicą, to podajemy je w pierwszej kolejności; tablica w postaci Spread syntax (...) musi być ostatnim podanym argumentem.
            </Text>
        </View>
    )
}