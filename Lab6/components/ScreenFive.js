import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        ToastAndroid.show("Poprawnie zapisano dane", ToastAndroid.SHORT)
    } 
    catch (e) {
        ToastAndroid.show("Błąd! Dane nie zostały zapisane", ToastAndroid.SHORT)
    }
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
        ToastAndroid.show(value, ToastAndroid.SHORT)
      }
    } 
    catch(e) {
        ToastAndroid.show("Błąd! Nie udało się pobrać danych", ToastAndroid.SHORT)
    }
  }
  

const ScreenFive = () => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [searchKey, setSearchKey] = useState('');

    return (
        <View style={styles.global.container}>
            <View style={styles.global.container}>
                <Text style={styles.screenFive.txt}>Podaj klucz:</Text> 
                <TextInput
                    style={styles.global.txtInput}
                    onChangeText = {text => setKey(text)}
                    value = {key}
                />
                <Text style={styles.screenFive.txt}>Podaj wartość:</Text>
                <TextInput
                    style={styles.global.txtInput}
                    onChangeText = {text => setValue(text)}
                    value = {value}
                />
                <Button
                    color = '#cca349'
                    onPress = {() => storeData(key,value)}
                    title = 'Zapisz dane'
                />
            </View>
            <View style={styles.global.container}>
                <Text style={styles.screenFive.txt}>Podaj klucz dla jakiego chcesz znaleźć wartość:</Text>
                <TextInput
                    style={styles.global.txtInput}
                    onChangeText = {text => setSearchKey(text)}
                    value = {searchKey}
                />
                <Button
                    color = '#cca349'
                    onPress = {() => getData(searchKey)}
                    title = 'Pobierz dane'
                />
            </View>
        </View>
    )
}

export default ScreenFive;