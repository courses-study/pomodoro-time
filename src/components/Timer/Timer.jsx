import { Text, TouchableOpacity, Button } from 'react-native'

import { TIMER_STYLES } from './styles.js'

export default function Timer({ time, type }) {

  return (
    <>
      <Text style={[TIMER_STYLES.timer, { backgroundColor: type.timerColor }]}>
        { time }
      </Text>
      <TouchableOpacity style={TIMER_STYLES.btnTimer}>
        <Text style={TIMER_STYLES.btnTimerText}>
          START
        </Text>
      </TouchableOpacity>
    </>
  )
}