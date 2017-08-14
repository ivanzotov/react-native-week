import React from 'react'

import format from 'date-fns/format'

import {
  View,
  Text,
} from 'react-native'

import defaultStyles from './styles'

export default function({
  date,
  locale,
  styles = defaultStyles.month,
}) {
  return (<View style={styles.wrap}>
    <Text style={styles.text}>
      { format(date, 'MMMM YYYY', locale).toUpperCase() }
    </Text>
  </View>)
}
