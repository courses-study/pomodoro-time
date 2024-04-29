import { useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { 
  Text, View
} from 'react-native';

import { MAIN_STYLES } from './src/constants/styles.js'
import { TYPES } from './src/constants/types.js'

import Timer from './src/components/Timer/Timer.jsx'
import Header from './src/components/Header/Header.jsx'

export default function App() {

  const [timerSeconds, setTimerSeconds] = useState(25 * 60)

  const [type, setType] = useState(TYPES[0])

  const timerDate = new Date(timerSeconds * 1000)
  const timer = timerDate.toLocaleTimeString("es-VE", {
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <View style={[ MAIN_STYLES.container, { backgroundColor: type.color } ]}>
      <Text style={MAIN_STYLES.title}>Pomodoro Time!</Text>
      <Text>Study with the best study method!</Text>
      <Header 
        types={TYPES} currentType={type} 
        setType={setType} 
        setTimerSeconds={setTimerSeconds} 
      />
      <Timer 
        time={timer} 
        timerSeconds={timerSeconds}
        setTimerSeconds={setTimerSeconds}
        type={type} 
      />
      <StatusBar style="dark" />
    </View>
  );
}
