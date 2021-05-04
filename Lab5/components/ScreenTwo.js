import React from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native'

import styles from '../styles'

const ScreenTwo = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View>
            <ScrollView horizontal={true} persistentScrollbar={true}>
                <View style={{width: windowWidth}}>
                    <View style={styles.scrTwoStyle.scrollContents}>
                        <Image
                            style={styles.scrTwoStyle.img} 
                            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg'}}
                        />
                    </View>
                </View>
                <View style={{width: windowWidth}}>
                    <View style={styles.scrTwoStyle.scrollContents}>
                        <Image
                            style={styles.scrTwoStyle.img} 
                            source={{uri: 'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg'}}
                        />
                    </View>
                </View>
                <View style={{width: windowWidth}}>
                    <View style={styles.scrTwoStyle.scrollContents}>
                        <Text style={styles.scrTwoStyle.txt, {backgroundColor: '#BDA7B0', padding: '10%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </View>
                </View>
                <View style={{width: windowWidth}}>
                    <View style={styles.scrTwoStyle.scrollContents}>
                        <Image
                            style={styles.scrTwoStyle.img} 
                            source={{uri: 'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg'}}
                        />
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.scrTwoStyle.txt}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
            <Text style={styles.scrTwoStyle.txt}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
    )
}

export default ScreenTwo;