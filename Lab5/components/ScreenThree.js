import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, Pressable, TextInput } from 'react-native'

import styles from '../styles';
import MyWebComponent from './MyWebComponent'


const ScreenThree = () => {
    const [count, setCount] = useState(0);
    const opacityPress = () => setCount(prevCount => prevCount+1)

    const [text, onChangeText] = React.useState("");

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.scrThreeStyle.container}>

            <Modal
                animationType="slide"
                transparent={false}
                visible={isEnabled}
                onRequestClose={() => {
                setIsEnabled(!isEnabled);
                }}
                >
                    <MyWebComponent search={text}/>
                    <Pressable
                        style={styles.modal.button}
                        onPress={() => setIsEnabled(!isEnabled)}
                        >
                        <Text style={styles.modal.buttonTextStyle}>Schowaj Modal</Text>
                    </Pressable>
            </Modal>

            <View style={styles.scrThreeStyle.container}>
                <View style={styles.scrThreeStyle.smallContainer}>
                    <Text style={styles.scrThreeStyle.title}>TouchableOpacity</Text>
                    <Text style={styles.scrThreeStyle.txt}>Poniżej znajduje się TouchableOpacity, po naciśnięciu którego zwiększy się licznik</Text>
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

            <View style={styles.scrThreeStyle.container, {flex:2}}>
                <View style={styles.scrThreeStyle.smallContainer}>
                    <Text style={styles.scrThreeStyle.title}>TouchableHighlight</Text>
                    <Text style={styles.scrThreeStyle.txt}>Po wpisaniu zapytania w TextInput i wciśnięcu TouchableHighlight wywoła się zapytanie w Google.</Text>
                </View>
                <TextInput
                    style={styles.scrThreeStyle.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableHighlight onPress={toggleSwitch}>
                    <View style={styles.scrThreeStyle.button}>
                        <Text>Wyszukaj</Text>
                    </View>
                </TouchableHighlight>
            </View>

        </View>
    )
}

export default ScreenThree;
