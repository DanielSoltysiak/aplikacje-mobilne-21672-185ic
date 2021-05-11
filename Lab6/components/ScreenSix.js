import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import styles from '../styles'

const dataSynchronisation = (text, setLocalData, setRemoteData, connection) => {
    setLocalData(text);
    if(connection) setRemoteData(text);
    else {
        const unsubscribe = NetInfo.addEventListener(state => {
            if(state.isConnected) {
                unsubscribe(); 
                setRemoteData(text);
            }
        })
    }
}

const ScreenSix = () => {
    const netInfo = useNetInfo();
    const [localData, setLocalData] = useState('');
    const [remoteData, setRemoteData] = useState('');

    return (
        <View>
            <View>
                <Text style={styles.screenSix.txt}>Jest połączenie? - {netInfo.isConnected ? `tak` : 'nie'}</Text>
                <Text style={styles.screenSix.txt}>Typ połączenia: {netInfo.type}</Text>
            </View>
            <View>
                <TextInput
                    style = {styles.global.txtInput}
                    onChangeText = {text => {dataSynchronisation(text, setLocalData, setRemoteData, netInfo.isConnected)}}
                />
            </View>
            <View>
                <Text style={styles.screenSix.txt}>Wartość 'offline': {localData}</Text>
                <Text style={styles.screenSix.txt}>Wartość 'online': {remoteData}</Text>
            </View>
        </View>
    )
}

export default ScreenSix;