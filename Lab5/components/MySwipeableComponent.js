import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';

import styles from '../styles'

const MySwipeableComponent = (props) => {
    const leftContent = <Text style={styles.swipeable.dateTxt}>{props.date}</Text>;

    const rightButtons = [
      <TouchableHighlight><Text style={styles.swipeable.zodiacTxt}>{props.signGraphic}</Text></TouchableHighlight>,
    ];

    return (
        <View>
            <Swipeable
                leftContent={(
                    <View style={styles.swipeable.leftSwipeItem}>
                        {leftContent}
                    </View>
                )} 
                rightButtons={[
                    <View style={styles.swipeable.rightSwipeItem}>
                        {rightButtons}
                    </View>
                ]}
            >
                <View style={styles.swipeable.listItem}>
                    <Text style={styles.swipeable.zodiacTxt}>{props.signName}</Text>
                </View>
            </Swipeable>
        </View>
    )
}

export default MySwipeableComponent;