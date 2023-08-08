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
import Header from '../../../profile/profile/components/Header'
import * as analyticsApi from '../../../../apis/analyticsApi'
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window')


const DiamondAnalytics = () => {
    const navigation = useNavigation()
    const my_data = useSelector(state => state.my_data.my_profile_data)

   


    const diamondAnalytics = async () => {
        try {
            const startingTime = '2023-08-07T08:43:25.077Z'
            const endingTime = '2023-07-07T08:43:25.077Z'
            const result = await analyticsApi.dimanodAnalytics(my_data?.auth_token, startingTime, endingTime )
            console.log(result)
        } catch (error) {
            console.log("error while fetching the analytics of diamonds", error)
        }
    }


    const handleConfirm = () => { }





    return (
        <Body style={styles.main_conatiner}>
            <Header headertext={"Diamond Spended"} />

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
                    <Text onPress={diamondAnalytics} style={styles.txt}>jun 15 - jun 21</Text>
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
                <BarChart
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

export default DiamondAnalytics

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
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
    },
    main_conatiner: {
        flex: 1,
        backgroundColor: '#fff'
    }
})