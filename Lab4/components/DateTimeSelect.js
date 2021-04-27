import React, {useState} from 'react';
import {View, Button, Platform, Alert, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from '../styles'

const DateTimeSelect = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const showSelectedDate = () => {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      Alert.alert(
          "Wybrana data",
          (day<10 ? "0"+day : day)+"."+
          ((month+1)<10 ? "0"+(month+1) : month+1)+"."+
          year+" "+
          (hour<10 ? "0"+hour : hour)+":"+
          (minute<10 ? "0"+minute : minute),
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
      )
  }

  return (
    <View>
      <View>
        <Button color="#034f84" onPress={showDatepicker} title="Wybór dnia" />
      </View>
      <View>
        <Button color="#034f84" onPress={showTimepicker} title="Wybór godziny" />
      </View>
      <View>
        <Button color="#034f84" onPress={showSelectedDate} title="Pokaż wybraną datę"/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimeSelect;