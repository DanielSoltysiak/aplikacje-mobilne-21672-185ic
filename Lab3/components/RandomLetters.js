import React from 'react';
import { View, Text } from 'react-native';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function SortedLetters() {
    return (
        <View>
            <Text>
                {generateString(50000)}
            </Text>
        </View>
    )
}

export default SortedLetters;