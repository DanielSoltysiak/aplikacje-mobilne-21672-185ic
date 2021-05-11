import { StyleSheet } from 'react-native'

const styles = {};

styles.global = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtInput: {
        height: 40,
        borderWidth: 1,
        margin: 10
    },
})

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
    txt: {
        textAlign: 'center',
        fontSize: 16,
        margin: 10
    },
})

styles.screenSix = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 18,
    }
})

export default styles;