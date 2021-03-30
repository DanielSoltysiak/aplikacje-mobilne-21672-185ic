import React, {useState} from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import NumericInput from 'rn-numeric-input'

const Separator = () => (
    <View style={styles.separator} />
  );
  

const Calculator = () => {
    const [value1, setValue1] = useState(null), [value2, setValue2] = useState(null), [result, setResult] = useState(null);

    return (
        <View>
            <Text style = {styles.txt}>Podaj liczbę</Text>
            <NumericInput 
                onChange={value => setValue1(value)} 
            />
            <Text style = {styles.txt}>Podaj liczbę</Text>
            <NumericInput
                onChange={value => setValue2(value)}
            />
            <Separator/>
            <Button
                title = "+"
                onPress = { () => {
                    setResult(value1 + value2)
                }}
            />
            <Separator/>
            <Button
                title = "-"
                onPress = { () => {
                    setResult(value1 - value2)
                }}
            />
            <Separator/>
            <Button
                title = "*"
                onPress = { () => {
                    setResult(value1 * value2)
                }}
            />
            <Separator/>
            <Button
                title = ":"
                onPress = { () => {
                    setResult(value1 / value2)
                }}
            />
            <Text style = {styles.txt}>{result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        marginVertical: 4,
        textAlign: 'center'
    },
    separator: {
        marginVertical: 2
    }
})

export default Calculator;