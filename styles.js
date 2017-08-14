import {
  StyleSheet,
  Platform,
} from 'react-native'

export default {
  main: StyleSheet.create({
    wrap: {
      height: 120,
      backgroundColor: '#fff',
    },

    scrollView: {},
    scrollViewContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),

  item: StyleSheet.create({
    wrap: {
      height: 70,
      alignItems: 'center',
    },

    dateWrap: {
      marginHorizontal: 10,
      marginVertical: 5,
      width: 33,
      height: 33,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16.5,
    },

    date: {
      fontSize: 18,
      color: '#000',
      backgroundColor: 'transparent',
    },

    active: {
      backgroundColor: '#eee',
    },

    dayOfWeek: {},

    dayOfWeekText: {
      paddingVertical: 5,
      color: '#333',
      backgroundColor: 'transparent',
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
      color: '#000',
      backgroundColor: 'transparent',
    },
  }),
}
