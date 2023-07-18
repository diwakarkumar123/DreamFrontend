import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar,

} from 'react-native';
import React, { useRef } from 'react';
//   import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
    Eclipes,
    well_icon,
    Certified,
    youtube,
    Facebook,
    instagram,
    photo_icon,
    diamond,
    Fac_icon,
    stak_icon,
    Like_post,
} from '../../configs/source';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import Foundation from 'react-native-vector-icons/Foundation.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';

import { Tabs } from 'react-native-collapsible-tab-view';
import Screenone from './Screenone';
const { width, height } = Dimensions.get('window');
import Screentwo from './Screentwo.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// import TabA from './TabA.js';
const data = [
    {
        text: 'Rion star 123',
        url: 'Https:www.snachat.com',
        username: '@Lorengray234',
        icon_1: stak_icon,
        icon_2: Like_post,

        top_data: [
            {
                left_arrow: 'arrowleft',
                text: 'Lorengray',
                eclips_icon: Eclipes,
                well_icon: well_icon,
                onpress: () => navigation.navigate('Home')

            },
        ],
        user_info: [
            {
                certified_icon: Certified,
                profile_icon:
                    'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            },
        ],
        user_detail: [
            {
                text: 'Following',
                number: '500',
            },
            {
                text: 'Followers',
                number: '22.2M',
            },
            {
                text: 'Likes',
                number: '9.9M',
            },
        ],
        social_icon: [
            {
                youtube_icon: youtube,
                facebook_icon: Facebook,
                instagram_icon: instagram,
                text: 'follow',
            },
        ],
        section_part: [
            {
                icon_img: photo_icon,
                text: 'Q&A',
                icon_video: 'play-video',
            },
        ],
    },
];

const Userprofile = ({ navigation }) => {
    const Num_of_col = 3;
    const Header = () => {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <FlatList
                        data={data[0].top_data}
                        renderItem={({ item }) => (
                            <View style={styles.topbar_wraper}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <AntDesign name={item.left_arrow} size={24} />

                                </TouchableOpacity>

                                <Text style={styles.top_text}>{item.text}</Text>

                                <Image
                                    source={item.eclips_icon}
                                    style={{ width: 20, height: 20, marginLeft: 40 }}
                                />
                                <Image
                                    source={item.well_icon}
                                    style={{ width: 20, height: 20, marginRight: 20 }}
                                />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View>
                    <FlatList
                        data={data[0].user_info}
                        renderItem={({ item }) => (
                            <View style={styles.profilesection}>
                                <Image
                                    source={item.certified_icon}
                                    style={{ width: 55, height: 55 }}
                                />
                                <Image
                                    source={{ uri: item.profile_icon }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 30,
                                        right: 50,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.usertext}>
                    <Text style={{ fontSize: 16, letterSpacing: 0.6, fontWeight: 500 }}>
                        {data[0].username}
                    </Text>
                </View>

                <View>
                    <FlatList
                        data={data[0].user_detail}
                        renderItem={({ item }) => (
                            <View style={styles.follwer_wraper}>
                                <Text style={styles.follwertext}>{item.number}</Text>

                                <Text style={{ fontSize: 15, opacity: 0.5 }}>{item.text}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                    />
                </View>

                <View style={styles.social_wraper}>
                    <FlatList
                        data={data[0].social_icon}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}>

                                <View style={styles.msgbutton}>
                                    <TouchableOpacity style={{ flex: 1 }} >
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 15,
                                                letterSpacing: 0.5,
                                                color: '#fff',
                                                fontSize: 16

                                            }}>
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity >
                                </View>


                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={item.youtube_icon}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                resizeMode: 'contain',
                                                marginRight: 12,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={item.facebook_icon}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                resizeMode: 'contain',
                                                marginRight: 12,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={item.instagram_icon}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                resizeMode: 'contain',
                                                marginRight: 12,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    // horizontal
                    />
                </View>
                <View style={{ padding: 2, alignItems: 'center', paddingLeft: 16 }}>
                    <Text style={{ fontSize: 16, letterSpacing: 0.9, opacity: 0.4 }}>
                        {data[0].text}
                    </Text>
                </View>
                <View style={{ padding: 2, alignItems: 'center', paddingLeft: 16 }}>
                    <Text style={{ fontSize: 16, letterSpacing: 0.9, opacity: 0.4 }}>
                        {data[0].url}
                    </Text>
                </View>
                <View style={{ padding: 9 }}>
                    <FlatList
                        data={data[0].section_part}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image
                                        source={item.icon_img}
                                        style={{ width: 20, height: 20, marginRight: 12 }}
                                    />
                                </TouchableOpacity>
                                <Text>{item.text}</Text>
                                <TouchableOpacity>
                                    <Foundation
                                        name={item.icon_video}
                                        size={22}
                                        style={{ marginLeft: 12, opacity: 0.5 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Tabs.Container renderHeader={Header}>
                <Tabs.Tab
                    label={() => (
                        <Image source={data[0].icon_1} style={{ width: 20, height: 20 }} />
                    )}
                    name={'stackA'}>
                    <Screenone />
                    {/* <TabA /> */}
                </Tabs.Tab>

                <Tabs.Tab
                    label={() => (
                        <Image
                            source={data[0].icon_2}
                            style={{ width: 25, height: 25, }}
                        />
                    )}
                    name={'stackB'}>
                    <Screentwo />
                </Tabs.Tab>
            </Tabs.Container>
            <StatusBar hidden={true} />
        </View>
    );
};

export default Userprofile;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // position: 'absolute',
        // height: 300,
        // backgroundColor: 'red',
    },
    topbar: {
        // backgroundColor: "red",
    },
    topbar_wraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,
    },
    top_text: {
        paddingLeft: 110,
        fontWeight: '900',
        fontSize: 17,
        letterSpacing: 0.7,
    },
    profilesection: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor:'red',
        alignItems: 'center',
        padding: 12,
    },
    usertext: {
        // backgroundColor:'red',
        padding: 4,
        paddingLeft: 23,
        alignItems: 'center',
        marginTop: -10,
    },
    follwer_wraper: {
        flexDirection: 'column',
        // backgroundColor:'red',
        alignItems: 'center',
        marginLeft: 30,
        padding: 12,
    },
    follwertext: {
        fontSize: 16,
        fontWeight: '900',
    },
    social_wraper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor:'red',
        padding: 5,
        // alignItems:'center'    // justifyContent:'space-between'
    },
    msgbutton: {
        backgroundColor: '#f2f5f7',
        padding: 5,
        width: '47%',
        marginLeft: 15,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#c5c6c7',
        backgroundColor: 'red'
    },
});