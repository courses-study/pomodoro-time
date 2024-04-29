import { useState, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Audio } from 'expo-av'

import { TIMER_STYLES } from './styles.js'

export default function Timer({ time, timerSeconds, setTimerSeconds, type }) {

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let intervalID = null

    if(isActive) {
      intervalID = setInterval(() => {
        setTimerSeconds(timerSeconds - 1)
      }, 1000)
    } else {
      clearInterval(intervalID)
    }

    if(timerSeconds === 0) {
      playAudio("stop")
      setIsActive(false)
      setTimerSeconds(type.time)
    }

    return () => clearInterval(intervalID)

  }, [isActive, time])

  const handleTime = () => {
    setIsActive(!isActive)
    if(!isActive) {
      playAudio("play")
    } else {
      playAudio("pause")
    }
  }

  const playAudio = async (audio) => {
    if(audio === "play") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/audio/play.wav")
      )
  
      await sound.playAsync()
    } else if(audio === "pause") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/audio/pause.mp3")
      )
  
      await sound.playAsync()
    } else if(audio === "stop") {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/audio/stop.mp3")
      )
  
      await sound.playAsync()
    }
    
  }

  return (
    <>
      <Text style={[TIMER_STYLES.timer, { backgroundColor: type.timerColor }]}>
        { time }
      </Text>
      <TouchableOpacity onPress={handleTime} style={TIMER_STYLES.btnTimer}>
        <Text style={TIMER_STYLES.btnTimerText}>
          { !isActive ? "START" : "STOP" }
        </Text>
      </TouchableOpacity>
    </>
  )
}