import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';


const RenderDay = () => {

    const isSameUnixDay = (currentUnixTimestamp, previousUnixTimestamp) => {
        const currentDay = moment.unix(currentUnixTimestamp).startOf('day');
        const previousDay = moment.unix(previousUnixTimestamp).startOf('day');
        return currentDay.isSame(previousDay, 'day');
    };
    let lastDisplayedDay = null;

    const renderCustomDay = (props) => {
        const { currentMessage, previousMessage } = props;
        
        if (!previousMessage) {
          // Render the day header for the first message
          return (
            <View style={styles.customDayContainer}>
              <Text style={styles.customDayText}>
                {moment.unix(currentMessage.createdAt / 1000).calendar(null, {
                  lastDay: '[Yesterday]',
                  sameDay: '[Today]',
                  nextDay: '[Tomorrow]',
                  lastWeek: 'dddd',
                  nextWeek: 'dddd',
                  sameElse: 'DD MMM yyyy',
                })}
              </Text>
            </View>
          );
        }
      
        if (!isSameUnixDay(currentMessage.createdAt / 1000, previousMessage.createdAt / 1000)) {
          // Render the day header when the day changes
          return (
            <View style={styles.customDayContainer}>
              <Text style={styles.customDayText}>
                {moment.unix(currentMessage.createdAt / 1000).calendar(null, {
                  lastDay: '[Yesterday]',
                  sameDay: '[Today]',
                  nextDay: '[Tomorrow]',
                  lastWeek: 'dddd',
                  nextWeek: 'dddd',
                  sameElse: 'DD MMM yyyy',
                })}
              </Text>
            </View>
          );
        }
      
        return null;
      };
      


    return (
        <View>
            <Text>RenderDay</Text>
        </View>
    )
}

export default RenderDay

const styles = StyleSheet.create({})