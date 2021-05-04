import React from 'react';
import { View } from 'react-native';

import MySwipeableComponent from './MySwipeableComponent';

const ScreenFour = () => {
    return (
        <View>
            <MySwipeableComponent
                signName = "Aries"
                signGraphic = "♈"
                date = "March 21–April 19"
            />
            <MySwipeableComponent
                signName = "Taurus"
                signGraphic = "♉"
                date = "April 20–May 20"
            />
            <MySwipeableComponent
                signName = "Gemini"
                signGraphic = "♊"
                date = "May 21–June 21"
            />
            <MySwipeableComponent
                signName = "Cancer"
                signGraphic = "♋"
                date = "June 22–July 22"
            />
            <MySwipeableComponent
                signName = "Leo"
                signGraphic = "♌"
                date = "July 23–August 22"
            />
            <MySwipeableComponent
                signName = "Virgo"
                signGraphic = "♍"
                date = "August 23–September 22"
            />
            <MySwipeableComponent
                signName = "Libra"
                signGraphic = "♎"
                date = "September 23–October 23"
            />
            <MySwipeableComponent
                signName = "Scorpius"
                signGraphic = "♏"
                date = "October 24–November 21"
            />
            <MySwipeableComponent
                signName = "Sagittarius"
                signGraphic = "♐"
                date = "November 22–December 21"
            />
            <MySwipeableComponent
                signName = "Capricornus"
                signGraphic = "♑"
                date = "December 22–January 19"
            />
            <MySwipeableComponent
                signName = "Aquarius"
                signGraphic = "♒"
                date = "January 20–February 18"
            />
            <MySwipeableComponent
                signName = "Pisces"
                signGraphic = "♓"
                date = "February 19–March 20"
            />
        </View>
    )
}

export default ScreenFour;