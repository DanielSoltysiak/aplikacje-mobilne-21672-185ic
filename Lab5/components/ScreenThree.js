import React, {useState} from 'react';
import { View, Text, TouchableOpacity, } from 'react-native'
import styles from '../styles';

const ScreenThree = () => {
    const [count, setCount] = useState(0);
    const opacityPress = () => setCount(prevCount => prevCount+1)

    return (
        <View style={styles.scrThreeStyle.container}>

            <View style={styles.scrThreeStyle.container}>
                <View style={styles.scrThreeStyle.smallContainer}>
                    <Text style={styles.scrThreeStyle.title}>TouchableOpacity</Text>
                </View>
                <TouchableOpacity
                    style={styles.scrThreeStyle.button}
                    onPress={opacityPress}
                >
                    <Text>Klik!</Text>
                </TouchableOpacity>
                <View style={styles.scrThreeStyle.smallContainer}>
                    <Text>Ilość kliknięć: {count}</Text>
                </View>
            </View>

            <View style={styles.scrThreeStyle.container}>
                <View style={styles.scrThreeStyle.smallContainer}>
                    <Text style={styles.scrThreeStyle.title}>TouchableHighlight</Text>
                </View>
            </View>

        </View>
    )
}

export default ScreenThree;
