import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Pressable,
    Alert,
    Modal
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
    USER_FILLED_IMG
} from '../../configs/source';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import Foundation from 'react-native-vector-icons/Foundation.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import { Tabs } from 'react-native-collapsible-tab-view';
import Screenone from './Screenone';
const { width, height } = Dimensions.get('screen');
import Screentwo from './Screentwo.js';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { follow, unfollow, getInfoById } from '../../apis/userApi';
import { useSelector } from 'react-redux';
import StarIcon from './StarIcon';
import { ViewPagerAndroidBase } from 'react-native';
import { CButton } from '../../components';
import PremiumModal from './components/PremiumModal';
import MessagePriceList from './components/MessagePriceList';
import { Portal } from 'react-native-paper';

const Userprofile = () => {
    const route = useRoute()
    const user_data = route?.params?.user;
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const [data, setData] = useState()
    const navigation = useNavigation()
    const [starIcon, setStarIcon] = useState(null);
    const isIdPresent = data?.user?.Followers?.some(item => item.id === my_data?.id);
    const [isFollowing, setIsFollowing] = useState(isIdPresent)
    const [isModalVisible, setModalVisible] = useState(false)
    const [showMessageList, setShowMessageList] = useState(false)

    const closeModal = () => {
        setModalVisible(false);
    };

    const getData = () => {
        getInfoById(user_data?.id)
            .then((r) => {
                const isIdPresent = r?.user?.Followers?.some(item => item.id === my_data?.id);
                setData(r)
                setIsFollowing(isIdPresent)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData()
    }, [user_data])

    useEffect(() => {
        async function get_no_of_star() {
            const coin = data?.user?.wallet;
            // const coin = 800000
            switch (true) {
                case coin < 200000:
                    setStarIcon(null);
                    break;
                case coin >= 200000 && coin < 400000:
                    setStarIcon(<StarIcon no_of_star={1} />);
                    break;
                case coin >= 400000 && coin < 600000:
                    setStarIcon(<StarIcon no_of_star={2} />);
                    break;
                case coin >= 600000 && coin < 800000:
                    setStarIcon(<StarIcon no_of_star={3} />);
                    break;
                case coin >= 800000 && coin < 1000000:
                    setStarIcon(<StarIcon no_of_star={4} />);
                    break;
                default:
                    setStarIcon(null);
            }
        }

        get_no_of_star();
    }, [data]);


    const followThisGuy = () => {
        let receiver_id = user_data?.id, data = { receiver_id }
        follow(data, my_data?.auth_token)
            .then((r) => {
                console.log(r)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const unfollowThisGuy = () => {

    }



    // function for handleing the button of message and follow
    const handleMessageSend = async () => {
        const receiver_id = user_data?.id;
        if (isFollowing) {
            const isIdPresent = data?.user?.Following?.some(item => item.id === my_data?.id);
            if (isIdPresent) {
                navigation.navigate('ChatScreen', { user_data })
            } else if (!isIdPresent) {
                setModalVisible(true)
            }
        } else if (!isFollowing) {
            try {
                setIsFollowing(true)
                const res = await follow({ receiver_id }, my_data?.auth_token)
            } catch (error) {
                console.log('error while following the person', error)
            }
        }
    }
    // function for handeling the sending the messages
    const handleContinueSend = async () => {
        navigation.navigate('ChatScreen', { user_data })
    }
    // fonction for handeling the watching the details of messages
    const handleViewDetails = async () => {

    }
    const premiumHandler = () => {
        setModalVisible(false)
        setShowMessageList(true)
    }



    const Header = () => {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <View style={styles.topbar_wraper}>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            left: 15
                        }} onPress={() => navigation.goBack()}>
                            <AntDesign name='arrowleft' size={25} color={'#020202'} />
                        </TouchableOpacity>
                        <Text style={styles.top_text}>{user_data?.nickname}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 90,
                            justifyContent: 'space-between',
                            position: 'absolute',
                            right: 15
                        }}>
                            <Image
                                source={Eclipes}
                                style={{ width: 20, height: 20 }}
                            />

                            <TouchableOpacity>
                                <Image
                                    source={well_icon}
                                    style={{ width: 25, height: 25 }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>


                <View>
                    <View style={styles.profilesection}>
                        <View
                            style={{ width: 55, height: 55, position: 'absolute', left: 30, top: 0 }}>
                            {starIcon}
                        </View>


                        {/* <Image
                            source={Certified}
                            style={{ width: 55, height: 55, position: 'absolute', left: 30 }}
                        /> */}

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                source={user_data?.profile_pic ? { uri: user_data?.profile_pic } : USER_FILLED_IMG}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 35,
                                    borderWidth: 1,
                                    borderColor: '#020202'
                                }}
                            />
                            <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 10 }}>
                                @{user_data?.username}
                            </Text>
                        </View>
                    </View>
                </View>



                <View style={{
                    flexDirection: 'row',
                    width: width,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}>
                    <Pressable onPress={() => { navigation.navigate("Followers", { user_id: user_data?.id }) }} style={styles.follwer_wraper}>
                        <Text style={styles.follwertext}>{data?.user?.Followers?.length || 0}</Text>
                        <Text style={styles.follwertext}>Followers</Text>
                    </Pressable>

                    <Pressable onPress={() => { navigation.navigate("Followings", { user_id: user_data?.id }) }} style={styles.follwer_wraper}>
                        <Text style={styles.follwertext}>{data?.user?.Following?.length || 0}</Text>
                        <Text style={styles.follwertext}>Followings</Text>
                    </Pressable>

                    <Pressable style={styles.follwer_wraper}>
                        <Text style={styles.follwertext}>0</Text>
                        <Text style={styles.follwertext}>Likes</Text>
                    </Pressable>
                </View>


                <View style={styles.social_wraper}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>

                        <View style={styles.msgbutton}>
                            {/* <TouchableOpacity
                                style={{ flex: 1 }}
                                // onPress={followThisGuy}
                                onPress={handleMessageSend}

                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        // color: '#fff',
                                        fontSize: 16

                                    }}>
                                    message
                                </Text>
                            </TouchableOpacity > */}
                            <CButton
                                lable={isFollowing ? 'Message' : 'Follow'}
                                backgroundColor={isFollowing ? 'grey' : 'red'}
                                onPress={handleMessageSend}
                            />
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={youtube}
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
                                    source={Facebook}
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
                                    source={instagram}
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
                </View>

                <View style={{ alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                    {user_data?.bio && (<Text style={{ fontSize: 16, color: '#020202', textAlign: 'center', width: width * 0.6 }}>
                        {user_data?.bio}
                    </Text>)}
                    {user_data?.website && (<Text style={{ fontSize: 16, color: '#020202', width: width * 0.6 }}>
                        {user_data?.website}
                    </Text>)}
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                    <TouchableOpacity>
                        <Image
                            source={photo_icon}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <Text>Q&A</Text>
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Foundation
                            name={'play-video'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
            <View style={{ paddingTop: StatusBar.currentHeight, flex: 1, backgroundColor: '#fff' }}>
                
                <Tabs.Container renderHeader={Header}>
                    <Tabs.Tab
                        label={() => (
                            <Image source={stak_icon} style={{ width: 20, height: 20 }} />
                        )}
                        name={'stackA'}>
                        <Screenone data={data?.user?.videos} />

                    </Tabs.Tab>

                    <Tabs.Tab
                        label={() => (
                            <Image
                                source={Like_post}
                                style={{ width: 25, height: 25, }}
                            />
                        )}
                        name={'stackB'}>
                        <Screentwo data={data?.liked_video} />
                    </Tabs.Tab>
                </Tabs.Container>
                <StatusBar hidden={true} barStyle={'light-content'} />
                <Portal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={closeModal}
                >
                    <PremiumModal
                        setModalVisible={setModalVisible}
                        premiumHandler={premiumHandler} />
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showMessageList}
                    onRequestClose={() => { setShowMessageList(false) }}>
                    <MessagePriceList setShowMessageList={setShowMessageList} user_data={user_data} />
                </Modal>
                </Portal>
            </View>
       
    );
};

export default Userprofile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
    },
    topbar: {

    },
    topbar_wraper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    top_text: {
        fontWeight: '600',
        fontSize: 16,
        color: '#020202'
    },
    profilesection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    usertext: {
        padding: 4,
        alignItems: 'center',
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    follwer_wraper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    follwertext: {
        fontSize: 16,
        fontWeight: '600',
        color: '#020202',
        marginTop: 3
    },
    social_wraper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25
    },
    msgbutton: {
        width: '47%',
        marginLeft: 15,
    },
});