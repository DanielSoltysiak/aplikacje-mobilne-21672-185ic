import React from 'react';
import { FlatList, View, Text } from 'react-native';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generateString() {
    let result = '';
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

    return result;
}

const letters= new Set();
while(letters.size !== 50) {
    letters.add(generateString());
}
const sLetters = Array.from(letters).sort();

function SortedLetters() {
    return (
        <View>
            <FlatList
                data = {sLetters}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: 'white' }}>
                       <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SortedLetters;