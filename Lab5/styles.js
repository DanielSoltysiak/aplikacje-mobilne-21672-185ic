import {StyleSheet} from 'react-native';

const styles = {};

styles.scrOneStyle = StyleSheet.create({
    txt: {
        marginHorizontal: 10,
        fontSize: 12,
        textAlign: 'justify'
    },
    img: {
        height: 255
    },
    scrollContents: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    halfItem: {
        width: '49%'
    },
    fullItem: {
        marginBottom: 10,
        width: '98%'
    }
})

styles.scrTwoStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    txt: {
        marginHorizontal: 10,
        fontSize: 12,
        textAlign: 'justify'
    },
    img: {
        height: 255
    },
    scrollContents: {
        margin: '2%'
    },
})

styles.scrThreeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    smallContainer: {
        alignItems: "center",
        padding: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#BDA7B0",
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    }
})
export default styles;