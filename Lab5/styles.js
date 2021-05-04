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

export default styles;