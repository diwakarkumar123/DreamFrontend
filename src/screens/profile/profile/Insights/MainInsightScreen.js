import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';
import LiveAnalytics from './LiveAnalytics';
import GeneralAnalytics from './GeneralAnalytics';
import VideoAnalytics from './VideoAnalytics';
import GeamsAnalytics from './GeamsAnalytics';
import MeAnalytics from './MeAnalytics';
import ContentAnalytics from './ContentAnalytics';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();



const MainInsightScreen = () => {
    const navigation = useNavigation();
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    const [active_name, setActive_name] = useState('Live Analytics')



    const CustomHeader = () => {
        return (
            <View style={{ flexDirection: "row", height: 50, backgroundColor: "#fff" }}>
                <Pressable style={{ top: 10 }} onPress={() => { navigation.goBack() }}>
                    <AntDesign name="arrowleft" size={25} color={"black"} marginLeft={15} />
                </Pressable>
                <View>
                    <Text
                        style={{ marginLeft: 100, fontSize: 20, fontWeight: 600, color: "#000", top: 10 }}>
                        {active_name}
                    </Text>
                </View>
            </View>
        )
    }


    const TabBar = ({ state, descriptors, activeTabIndex, onTabPress }) => {

        const handleTabPress = (index) => {
            setActiveTabIndex(index);
            navigation.navigate(state.routes[index].name);
            setActive_name(state.routes[index].name)
        };

        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.title;
                    const isActive = index === activeTabIndex;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                handleTabPress(index)
                            }}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                padding: 16,
                                borderBottomWidth: isActive ? 2 : 0,
                                borderBottomColor: isActive ? 'blue' : 'transparent',
                            }}>
                            <Text style={{ color: isActive ? 'blue' : 'black', fontWeight: 'bold', fontSize: 12 }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };










    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                tabBar={(props) => {
                    return (
                        <React.Fragment>
                            <CustomHeader {...props} />
                            <TabBar
                                {...props}
                                activeTabIndex={activeTabIndex}
                                onTabPress={(index) => setActiveTabIndex(index)}
                            />
                        </React.Fragment>
                    )
                }}
                screenOptions={{
                    tabBarLabelStyle: styles.tabLabel
                }}>
                <Tab.Screen name='Live Analytics' component={LiveAnalytics} options={{ title: 'Live' }} />
                <Tab.Screen name='General Analytics' component={GeneralAnalytics} options={{ title: 'General' }} />
                <Tab.Screen name='Video Analytics' component={VideoAnalytics} options={{ title: 'Video' }} />
                <Tab.Screen name='Game Analytics' component={GeamsAnalytics} options={{ title: 'Games' }} />
                <Tab.Screen name='Me Analytics' component={MeAnalytics} options={{ title: 'Me' }} />
                <Tab.Screen name='Content Analytics' component={ContentAnalytics} options={{ title: 'Content' }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default MainInsightScreen

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 10,
        color: "#000",
        fontWeight: "bold"
    },
})