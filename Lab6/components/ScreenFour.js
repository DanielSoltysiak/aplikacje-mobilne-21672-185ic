import React from 'react';
import { View, Text } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";

import styles from '../styles'

const ScreenFour = () => {
    const netInfo = useNetInfo();
    var netInfoDetails = netInfo.details ? JSON.parse(JSON.stringify(netInfo.details,null)) : '';

    return (
        <View>
            <Text style={styles.screenFour.txt}>Jest połączenie? - {netInfo.isConnected ? `tak` : 'nie'}</Text>
            <Text style={styles.screenFour.txt}>Typ połączenia: {netInfo.type}</Text>
            <Text style={styles.screenFour.txt}>Adres IP: {netInfoDetails.ipAddress}</Text>
            <Text style={styles.screenFour.txt}>Jakość połączenia: {netInfoDetails.strength}%</Text>
            <Text style={styles.screenFour.txt}>Częstotliwość: {netInfoDetails.frequency} MHz</Text>
        </View>
    )
}

export default ScreenFour;