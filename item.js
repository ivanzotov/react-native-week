import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import defaultStyles from './styles'

export default function({
  active,
  date,
  dayOfWeek,
  onPress,
  styles = defaultStyles.item,
}) {
  return (<TouchableOpacity onPress={onPress}>
    <View style={styles.wrap}>
      <View style={[styles.dateWrap, active && styles.active]}>
        <Text style={styles.date}>{ date }</Text>
      </View>
      <View style={styles.dayOfWeek}>
        <Text style={styles.dayOfWeekText}>{ dayOfWeek }</Text>
      </View>
    </View>
  </TouchableOpacity>)
}
