import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

import styles from '../styles'

const ScreenTwo = () => {
    const [scaleOne, setScaleOne] = useState(1);
    const [scaleTwo, setScaleTwo] = useState(1);

    return (
        <View>
            <Image
                style = {[styles.screenOne.img, {transform: [{scale: 1*scaleOne}]}]}
                source={require('../images/architecture.jpg')}
            />
            <Slider
                style={{width: '100%', height: 40}}
                value={1}
                minimumValue={0.1}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setScaleOne(value)}
            />
            <Image
                style = {[styles.screenOne.img, {transform: [{scale: 1*scaleTwo}]}]}
                source = {{uri: 'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg'}}
            />
            <Slider
                style={{width: '100%', height: 40}}
                value={1}
                minimumValue={0.1}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setScaleTwo(value)}
            />
        </View>
    )
}

export default ScreenTwo;