import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    conatainer : {
        flex: 1,
        justifyContent: 'center'
    },
    txt: {
        fontSize: 20,
        marginVertical: 4,
        textAlign: 'center'
    },
    separator: {
        marginVertical: 2
    },
    redStyle: {
        flex: 1,
    }, 
    greenStyle: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    purpleStyle: {
        flex: 1,
        alignItems: 'center'
    }
})

export default styles;