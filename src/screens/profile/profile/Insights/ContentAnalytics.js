import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { ScrollView } from 'react-native';

const data = [
  {
    value: 77,
    color: '#ed5334',
  },
  {
    value: 23,
    color: '#ad2d13'
  },
]
const barData = [
  { value: 52, label: '52%', frontColor: '#ed5334' },
  { value: 14, label: '14%', frontColor: '#ed5334' },
  { value: 7, label: '7%', frontColor: '#ed5334' },
  { value: 6, label: '6%', frontColor: '#ed5334' },
  { value: 5, label: '5%', frontColor: '#ed5334' },
];

const ContentAnalytics = () => {
  const { width, height } = useWindowDimensions()
  const styles = StyleSheet.create({
    main_pie_chart: {
      width: width,
      backgroundColor: '#020202',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      paddingVertical: 20
    },
    main_bar_chart: {
      width: width,
      height: 500,
      paddingTop: 60,
      // backgroundColor: '#020202'
    },
    viewers_section: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    data_label: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    percentage: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 16,
      fontWeight: '700'
    },
    dot: {
      width: 7,
      height: 7,
      backgroundColor: 'red',
      borderRadius: 10,
      marginRight: 3
    }

  })

  return (
    <ScrollView>
      <View style={styles.main_pie_chart}>
        <View style={{ backgroundColor: '#020202', width: width, paddingLeft: 20 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>All Viewers</Text>
        </View>
        <View style={{ margin: 30 }}>
          <PieChart
            data={data}
            radius={90}
            isThreeD={false}
            strokeColor='black'
            strokeWidth={3}
          />
        </View>
        <View style={styles.viewers_section}>

          <View style={styles.data_label}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.dot} />
              <Text style={styles.percentage}>77%</Text>
            </View>
            <Text style={styles.percentage}>Male</Text>
          </View>


          <View style={styles.data_label}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.dot} />
              <Text style={styles.percentage}>23%</Text>
            </View>
            <Text style={styles.percentage}>Female</Text>
          </View>


        </View>
      </View>


      <View style={{ backgroundColor: '#020202' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Top Countries/regions</Text>
      </View>
      <View style={styles.main_bar_chart}>
        <BarChart
          horizontal
          barWidth={20}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          backgroundColor={'#020202'}
          showLine={true}
          intactTopLabel={true}
          autoShiftLabels={true}
        />
      </View>



      
    </ScrollView>
  )
}

export default ContentAnalytics

