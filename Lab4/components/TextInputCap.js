import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from '../styles'

const TextInputCap = () => {
    return (
        <View style={{padding: 10}}>
            <Text>
                placeholder='Wpisz przykładowy tekst' & placeholderTextColor='lightpink'
            </Text>
            <TextInput
                style={styles.txtInput}
                placeholder='Wpisz przykładowy tekst'
                placeholderTextColor='lightpink'
            />
            <Text>
                autoCapitalize='words'
            </Text>
            <TextInput
                style={styles.txtInput}
                autoCapitalize='words'
            />
            <Text>
                defaultValue='Deafault text value'
            </Text>
            <TextInput
                style={styles.txtInput}
                defaultValue={'Deafault text value'}
            />
            <Text>
                defaultValue='Deafault text value' & editable={'{false}'}
            </Text>
            <TextInput
                style={styles.txtInput}
                defaultValue={'Deafault text value'}
                editable={false}
            />
            <Text>
                keyboardType='numeric'
            </Text>
            <TextInput
                style={styles.txtInput}
                keyboardType='numeric'
            />
            <Text>
                textAlign='center'
            </Text>
            <TextInput
                style={styles.txtInput}
                textAlign='center'
            />
            <Text>
                underlineColorAndroid={'red'}
            </Text>
            <TextInput
                style={styles.txtInput}
                underlineColorAndroid={'red'}
            />
        </View>
    )
}

export default TextInputCap;