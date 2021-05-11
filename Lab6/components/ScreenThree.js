import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Image } from 'react-native-elements';
import { AntDesign, Feather } from '@expo/vector-icons';

import styles from '../styles'

const ScreenThree = () => {
    return (
       <View style={styles.global.container}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1618375929669-5e7e592579b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80' }}
                style={styles.screenThree.img}
                PlaceholderContent={<ActivityIndicator size='large' color='#cca349'/>}
            />
            <View style={styles.screenThree.container}>
                <AntDesign name='user' size={24} color="black" />
                <AntDesign name='shoppingcart' size={24} color="black" />
                <AntDesign name='videocamera' size={24} color="black" />
                <AntDesign name='setting' size={24} color="black" />
                <AntDesign name='lock' size={24} color="black" />
            </View>
            <View style={styles.screenThree.container}>
                <Feather name='coffee' size={24} color='black' />
                <Feather name='activity' size={24} color='black' />
                <Feather name='calendar' size={24} color='black' />
                <Feather name='headphones' size={24} color='black' />
                <Feather name='power' size={24} color='black' />
            </View>

       </View>  
    )
}

export default ScreenThree;