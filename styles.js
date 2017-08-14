import {
  StyleSheet,
  Platform,
} from 'react-native'

export default {
  main: StyleSheet.create({
    wrap: {
      height: 100,
      backgroundColor: '#333',
    },

    scrollView: {},
    scrollViewContent: {},
  }),

  item: StyleSheet.create({
    wrap: {
      alignItems: 'center',
    },

    dateWrap: {
      marginHorizontal: 10,
      marginBottom: 5,
      width: 33,
      height: 33,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16.5,
    },

    date: {
      marginTop: Platform.OS === 'ios' ? 6 : 2,
      fontSize: 18,
      color: '#fff',
    },

    active: {
      backgroundColor: '#555',
    },

    dayOfWeek: {},

    dayOfWeekText: {
      color: '#eee',
    },
  }),

  month: StyleSheet.create({
    wrap: {
      alignItems: 'center',
    },

    text: {
      paddingTop: 10,
      paddingBottom: 8,
      fontSize: 12,
      color: '#fff',
    },
  }),
}
