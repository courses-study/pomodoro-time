import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import { TYPES_STYLES } from './styles.js'

export default function Header({ types, currentType, setTimerSeconds, setType }) {

  const onClick = type => {
    setTimerSeconds(type.time)
    setType(type)
  }

  return (
    <View style={TYPES_STYLES.typesContainer}>
      {
        types.map((type, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => onClick(type)}
            style={[
              TYPES_STYLES.item, 
              currentType.name !== type.name && { 
                borderColor: "transparent" 
              }
            ]}
          >
            <Text style={TYPES_STYLES.itemText}>
              { type.name }
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}
