import React, { useState } from "react";
import { View, Switch, Modal, Text, Pressable} from "react-native";

import styles from '../styles'

const RandNumSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                <Text style={styles.modalText}>{Math.random()}</Text>
                <Pressable
                style={styles.button}
                onPress={() => setIsEnabled(!isEnabled)}
                >
                <Text style={styles.buttonTextStyle}>Schowaj Modal</Text>
                </Pressable>
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

export default RandNumSwitch;