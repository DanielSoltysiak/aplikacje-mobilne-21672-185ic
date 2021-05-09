import React from 'react';
import { View, Image } from 'react-native';

import styles from '../styles'

const ScreenOne = () => {
    return (
        <View>
            {/* wygląda na to że stylowanie plików dodanych metodą require nie jest inteligente,
                po ostylowaniu wysokości szerokość nie miała odpowiednich proporcji a obraz się rozjechał, musiałem dodać width: '100%' */}
            <Image
                style = {styles.screenOne.img}
                source={require('../images/architecture.jpg')}
            />
            <Image
                style = {styles.screenOne.img}
                source = {{uri: 'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg'}}
            />
        </View>
    )
}

export default ScreenOne;