import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'

export default function ScreenSpreadSyntax() {
    return (
        <View>
            <Text style={styles.txt}>
            Hook useState jest to funkcja która pozwala korzystać ze stanu komponentu funkcyjnego.
            Podczas deklaracji useState podajemy w tablicy naszą zmienną stanu oraz "setter" który pozwoli nam zmieniać stan.
            const [naszStan, setNaszStan] = useState(0); 
            </Text>
        </View>
    )
}