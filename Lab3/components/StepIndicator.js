import React from 'react';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Krok 1", "Krok 2", "Krok 3"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'lightpink',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'lightpink',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: 'lightpink',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'lightpink',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: 'lightpink',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: 'lightpink'
}

function StepOne(props) {
    return (
        <StepIndicator
         stepCount={3}
         customStyles={customStyles}
         currentPosition={props.position}
         labels={labels}
        />
    )
}

export default StepOne;