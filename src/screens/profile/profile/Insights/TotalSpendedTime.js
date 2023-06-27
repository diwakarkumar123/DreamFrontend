import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import Body from '../../../../components/Body/Body.components';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')


const TotalSpendedTime = () => {
    const navigation = useNavigation()

    const handleConfirm = () => {

    }

    return (
        <Body>
            <Body applyPadding={false} style={styles.header}>
                <Body applyPadding={false} style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { marginTop: 0 }]}>
                        Time Spended
                    </Text>
                </Body>
                <TouchableOpacity
                    onPress={handleConfirm}
                >
                    <Text style={[styles.headerText, { color: '#fff' }]}>Compl...</Text>
                </TouchableOpacity>
            </Body>

            <View style={{
                width: width,
                paddingHorizontal: width * 0.05,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <TouchableOpacity style={styles.date_picker}>
                    <Text style={styles.txt}>Last 7 Days</Text>
                    <Entypo name='chevron-small-down' size={25} />
                </TouchableOpacity>

                <View style={styles.date_picker}>
                    <Text style={styles.txt}>jun 15 - jun 21</Text>
                </View>
            </View>

            <View style={{
                width: width,
                padding: width * 0.18,
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '800',
                    color: 'black'
                }}>20 Hours</Text>
                <Text>Time Spended</Text>
            </View>

            <View>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={300}
                    yAxisLabel=""
                    yAxisSuffix="h"
                    yAxisInterval={1}
                    chartConfig={{
                        backgroundColor: "black",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(3, 4, 25, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(100, 20, 30, ${opacity})`,
                        style: {
                            borderRadius: 0,


                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 5,
                        borderRadius: 5,

                    }}
                />
            </View>
        </Body>
    )
}

export default TotalSpendedTime

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 7,
        borderColor: 'rgba(217, 217, 217, 0.4)',
        marginTop: 5
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
    },
    leftHeader: {
        flexDirection: 'row',
    },
    date_picker: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0e6',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    txt: {
        color: 'black'
    }
})