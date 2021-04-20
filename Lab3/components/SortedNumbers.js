import React from 'react';
import { FlatList, View, Text } from 'react-native';

const nums = new Set();
while(nums.size !== 100) {
  nums.add(Math.floor(Math.random() * 1000) + 1);
}
const sortedNums = Array.from(nums).sort((a,b) => a-b);

function SortedNumbers() {
    return (
        <View>
            <FlatList
                data = {sortedNums}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: 'white' }}>
                       <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SortedNumbers;