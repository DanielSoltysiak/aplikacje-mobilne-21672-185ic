import React, {useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import NumericInput from 'rn-numeric-input'

const Calculator = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [result, setResult] = useState(null);
    return (
        <View>
            <Text>Podaj liczbę</Text>
            <NumericInput 
                onChange={value => setValue1(value)} 
            />
            <Text>Podaj liczbę</Text>
            <NumericInput 
                onChange={value => setValue2(value)} 
            />
            <Button
                title = "+"
                onPress = { () => {
                    setResult(value1 + value2)
                }}
            />
            <Button
                title = "-"
                onPress = { () => {
                    setResult(value1 - value2)
                }}
            />
            <Button
                title = "*"
                onPress = { () => {
                    setResult(value1 * value2)
                }}
            />
            <Button
                title = ":"
                onPress = { () => {
                    setResult(value1 / value2)
                }}
            />
            <Text>{result}</Text>
        </View>
    )
}

export default Calculator;