import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LiveAnalytics from './LiveAnalytics';
import GeneralAnalytics from './GeneralAnalytics';
import VideoAnalytics from './VideoAnalytics';
import GeamsAnalytics from './GeamsAnalytics';
import MeAnalytics from './MeAnalytics';
import ContentAnalytics from './ContentAnalytics';
import { SafeAreaView } from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();



const MainInsightScreen = () => {



    const CustomHeader = ({ title }) => {
        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }







    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title={'shubhams ghanght'} />
            <Tab.Navigator 
                screenOptions={{
                   
                }}
            >
                <Tab.Screen name='LiveAnalytics' component={LiveAnalytics} />
                <Tab.Screen name='GeneralAnalytics' component={GeneralAnalytics} />
                <Tab.Screen name='VideoAnalytics' component={VideoAnalytics} />
                <Tab.Screen name='GeamsAnalytics' component={GeamsAnalytics} />
                <Tab.Screen name='MeAnalytics' component={MeAnalytics} />
                <Tab.Screen name='ContentAnalytics' component={ContentAnalytics} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default MainInsightScreen

const styles = StyleSheet.create({})