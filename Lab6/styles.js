import { StyleSheet } from 'react-native'

const styles = {};

styles.screenOne = StyleSheet.create({
    img: {
        height: 255,
        width: '100%'
    }
})

styles.screenFour = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 18,
    }
})

styles.screenFive = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        textAlign: 'center',
        fontSize: 16,
        margin: 10
    },
    txtInput: {
        height: 40,
        borderWidth: 1,
        margin: 10
    },
})

export default styles;