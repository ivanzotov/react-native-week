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
  styles,
}) {
  const _styles = { ...defaultStyles.month, ...styles }

  return (<View style={_styles.wrap}>
    <Text style={_styles.text}>
      { format(date, 'MMMM YYYY', locale).toUpperCase() }
    </Text>
  </View>)
}
