import React, { PureComponent } from 'react'

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import format from 'date-fns/format'
import getDate from 'date-fns/get_date'
import addDays from 'date-fns/add_days'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import isSameDay from 'date-fns/is_same_day'
import differenceInDays from 'date-fns/difference_in_days'

import Item from './item'
import Month from './month'

import defaultStyles from './styles'

export { Item, Month }

export default class Week extends PureComponent {
  static defaultProps = {
    scrollToInitial: true,
    styles: defaultStyles,
  }

  state = { selectedDate: this.getInitialDate() }
  count = differenceInDays(this.props.endDate, this.props.startDate)
  initialIndex = 0
  scrollWidth = 0
  scrollContentWidth = 0

  getInitialDate() {
    if (!this.props.selectedDate) return this.props.startDate

    if (isBefore(this.props.selectedDate, this.props.startDate)) {
      return this.props.startDate
    }

    if (isAfter(this.props.selectedDate, this.props.endDate)) {
      return this.props.endDate
    }

    return this.props.selectedDate
  }

  onPressDate = (selectedDate, index) => {
    this.setState({ selectedDate })
    this.scrollTo(index)
  }

  scrollTo = (index, animated = true) => {
    const widthOfElements = this.scrollContentWidth / this.count
    const max = this.scrollContentWidth - this.scrollWidth
    const elementsOnScreen = this.scrollWidth / widthOfElements

    let x = widthOfElements * index - elementsOnScreen * widthOfElements / 2 + widthOfElements / 2

    if (x >= max) { x = max }
    if (x <= 0) { x = 0 }

    this.scroll.scrollTo({ x, animated })
  }

  render() {
    const locale = this.props.locale ? { locale: this.props.locale } : undefined
    const styles = {
      main: { ...defaultStyles.main, ...this.props.styles.main },
      item: { ...defaultStyles.item, ...this.props.styles.item },
      month: { ...defaultStyles.month, ...this.props.styles.month },
    }

    return (<View style={styles.main.wrap}>
      { this.props.header && this.props.header({
        date: this.state.selectedDate,
        locale,
      }) }

      <ScrollView
        ref={ref => { this.scroll = ref }}
        bounces={false}
        style={styles.main.scrollView}
        contentContainerStyle={styles.main.scrollViewContent}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        onLayout={e => {
          this.scrollWidth = e.nativeEvent.layout.width
          if (this.props.scrollToInitial) {
            setTimeout(() => this.scrollTo(this.initialIndex, false))
          }
        }}
        onContentSizeChange={contentWidth => { this.scrollContentWidth = contentWidth }}
        horizontal
      >
        { (new Array(this.count)).fill(1).map((_, index) => {
          const fullDate = addDays(this.props.startDate, index)
          const dayOfWeek = format(fullDate, 'dd', locale)
          const date = getDate(fullDate)
          const active = isSameDay(fullDate, this.state.selectedDate)
          const onPress = () => this.onPressDate(fullDate, index)

          if (active) {
            this.initialIndex = index
          }

          if (typeof this.props.item === 'function') {
            return this.props.item({ active, date, fullDate, dayOfWeek, onPress })
          }

          return (<Item
            key={fullDate}
            styles={styles.item}
            active={active}
            date={date}
            dayOfWeek={dayOfWeek}
            onPress={onPress}
          />)
        })}
      </ScrollView>
      { this.props.footer && this.props.footer({
        date: this.state.selectedDate,
        locale,
      }) }
    </View>)
  }
}
