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
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#BDA7B0",
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    },
    txt: {
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        textAlign: 'center'
      },
})

styles.modal = StyleSheet.create({
      button: {
        padding: 10,
        backgroundColor: "#794D60"
      },
      buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
})

styles.swipeable = StyleSheet.create({
    listItem: {
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: 'lightgrey',
    },
    leftSwipeItem: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20,
      borderWidth: 0.5,
      borderColor: 'lightgrey'
    },
    rightSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20,
      borderWidth: 0.5,
      borderColor: 'lightgrey'
    },
    dateTxt: {
        fontSize: 20,
    },
    zodiacTxt: {
        fontSize: 39,
    }
  });

export default styles;