import React, { useState } from "react";
import { View, Switch, Modal, Text, ToastAndroid} from "react-native";

import styles from '../styles'

const Toast = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [time, setTime] = useState(0);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        var tempTime = Math.floor(Math.random()*10000)
        setTime(tempTime)
        setTimeout(() => {
                setIsEnabled('falase');
            }, tempTime);
        ToastAndroid.show("Przykładowy toast", ToastAndroid.SHORT)
    };
    
    return (
        <View  style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isEnabled}
        onRequestClose={() => {
          setIsEnabled(!isEnabled);
        }}
        >
            <View style={styles.container}>      
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{time}</Text>
            </View>
            </View>
        </Modal>
          <Switch
            trackColor={{ false: "#767577", true: "#f7786b" }}
            thumbColor={isEnabled ? "#034f84" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
      </View> 
    )
}

export default Toast;