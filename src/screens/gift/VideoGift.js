import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import { Svg, SvgXml } from 'react-native-svg';
import SvgImage from './components/SvgImage'
import SvgImage2 from './components/SvgImage2'
import { DIAMOND_ICON, TIKTOK_LOADER_GIF, USER_FILLED_IMG } from '../../configs/source'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ceil } from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setRechargeSheet } from '../../store/indexSlice';
import { sendGifts } from '../../apis/video.api'
import { update_wallet_diamond } from '../../store/my_dataSlice';
import Toast from 'react-native-simple-toast'
const { width, height } = Dimensions.get('window')

const url = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'

const gif = 'https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif'

const functional = [
    {
        id: 1,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/functional_gift/Rectangle2.png',
        name: 'Rectangle2',
        cost: 10
    },
    {
        id: 2,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/functional_gift/Rectangle1.png',
        name: 'Rectangle1',
        cost: 10
    },
    // {
    //     id: 3,
    //     url: gif,
    //     name: 'Rectangle1',
    //     cost: 30
    // }
]

const mood = [
    {
        id: 1,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/cake.png',
        name: 'cake',
        cost: 10
    },
    {
        id: 2,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/chocolate.png',
        name: 'chocolate',
        cost: 10
    },
    {
        id: 3,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/custard.png',
        name: 'custard',
        cost: 10
    },
    {
        id: 4,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/donut.png',
        name: 'donut',
        cost: 10
    },
    {
        id: 5,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/icecream.png',
        name: 'icecream',
        cost: 10
    },
    {
        id: 6,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/lollipop.png',
        name: 'lollipop',
        cost: 10
    },
    {
        id: 7,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/paper_airplane.png',
        name: 'Paper airplane',
        cost: 10
    },
    {
        id: 8,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/mood_gift/soda.png',
        name: 'soda',
        cost: 10
    }
]

const vipGifts = [
    {
        id: 1,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse1.png',
        name: 'Ellipse1',
        cost: 10
    },
    {
        id: 2,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse2.png',
        name: 'Ellipse2',
        cost: 10
    },
    {
        id: 3,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse3.png',
        name: 'Ellipse3',
        cost: 100000
    },
    {
        id: 4,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse4.png',
        name: 'Ellipse4',
        cost: 10
    },
    {
        id: 5,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse5.png',
        name: 'Ellipse5',
        cost: 10
    },
    {
        id: 6,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse6.png',
        name: 'Ellipse6',
        cost: 10
    },
    {
        id: 7,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse7.png',
        name: 'Ellipse7',
        cost: 10
    },
    {
        id: 8,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse8.png',
        name: 'Ellipse8',
        cost: 10
    },
    {
        id: 9,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse9.png',
        name: 'Ellipse9',
        cost: 10
    },
    {
        id: 10,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse10.png',
        name: 'Ellipse10',
        cost: 10
    },
    {
        id: 11,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse11.png',
        name: 'Ellipse11',
        cost: 10
    },
    {
        id: 12,
        url: 'https://dpcst9y3un003.cloudfront.net/video_gift/vip_gift/Ellipse12.png',
        name: 'Ellipse12',
        cost: 10
    }
];




const VideoGift = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [mood_gift, setMood_gift] = useState(false)
    const [vip_gift, setVip_gift] = useState(false)
    const [functional_gift, setFunctional_gift] = useState(true)
    const [selected_gift, setSelected_gift] = useState('')
    const [functional_image_width, setFunctional_image_width] = useState(0)
    const [functional_image_height, setFunctional_image_height] = useState(0)
    const [loading, setloading] = useState(false)
    const my_data = useSelector(state => state.my_data.my_profile_data);
    const dispatch = useDispatch()

    const handlePayments = () => {
        dispatch(setRechargeSheet(true))

    }

    const handleFunctionalGift = () => {
        setFunctional_gift(true)
        setMood_gift(false)
        setVip_gift(false)
    }
    const handleVipGifts = () => {
        setVip_gift(true)
        setMood_gift(false)
        setFunctional_gift(false)
    }
    const handleMoodGifts = () => {
        setMood_gift(true)
        setFunctional_gift(false)
        setVip_gift(false)
    }

    const handleSend = () => {
        setloading(true)
        setFunctional_image_height(20)
        setFunctional_image_width(30)
        const coin = selected_gift?.cost
        if (my_data?.wallet >= coin) {
            const diamonds = selected_gift?.cost;
            const video_id = route?.params?.id;
            const reciever_id = route?.params?.user_id;
            const token = my_data?.auth_token
            const data = {
                diamonds,
                video_id,
                reciever_id,
            };
            sendGifts(data, token)
                .then((r) => {
                    dispatch(update_wallet_diamond(r.data.wallet))
                    setFunctional_image_height(0)
                    setFunctional_image_width(0)
                    setSelected_gift(null)
                    setloading(false)
                    Toast.show(`Success`, Toast.LONG);
                })
                .catch((err) => {
                    console.log(err)
                })
            

        } else {
            dispatch(setRechargeSheet(true))
            setloading(false)
        }
    }



    const RenderGifts = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={{ url: item.url }}
                    style={{
                        width: 20,
                        height: 40
                    }}
                />
            </View>
        )
    }



console.log(my_data?.profile_pic)




    return (
        <SafeAreaView style={styles.main_conatainer}>
          {loading && (
            <View style={{
                position: 'absolute',
                width: width,
                height: height,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 3000
            }}>
                <Image
                    source={TIKTOK_LOADER_GIF}
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
            </View>
          )}
            <View style={styles.upper_part}>
                <ImageBackground
                    source={my_data?.profile_pic ? { uri: my_data?.profile_pic } : USER_FILLED_IMG}
                    style={{ flex: 1, backgroundColor: '#fff' }}>
                    <LinearGradient
                        colors={[
                            'rgba(0, 0, 0, 0.1)',
                            'rgba(0, 0, 0, 0.2)',
                            'rgba(0, 0, 0, 0.3)',
                            'rgba(0, 0, 0, 0.4)',
                            'rgba(0, 0, 0, 0.5)',
                            'rgba(0, 0, 0, 0.6)',
                            'rgba(0, 0, 0, 0.7)',
                            'rgba(0, 0, 0, 0.8)',
                            'rgba(0, 0, 0, 0.9)',
                            'rgba(0, 0, 0, 1)'
                        ]}
                        style={{
                            width: width,
                            height: height * 0.5,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        }}
                    />

                    <Image
                        source={my_data?.profile_pic ? { uri: my_data?.profile_pic } : USER_FILLED_IMG}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#fff',
                            position: 'absolute',
                            top: height * 0.28,
                            left: width * 0.4,
                            right: width * 0.5,
                            zIndex: 100,
                            backgroundColor: '#fff'
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: 10
                        }}>
                        <AntDesign name='arrowleft' color={'#fff'} size={30} />
                    </TouchableOpacity>

                    {functional_gift && (
                        <View style={{
                            width: width,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Pressable
                                onPress={handleMoodGifts}
                                style={{
                                    width: width / 3,
                                    backgroundColor: '#676767',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 36,
                                    borderWidth: 1,
                                    borderColor: '#fff'
                                }}>
                                <Text style={styles.text}>M</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleVipGifts}
                                style={{
                                    width: width / 3,
                                }}>
                                <SvgImage text={'VIP'} />
                            </Pressable>

                            <Pressable
                                onPress={handleFunctionalGift}
                                style={{
                                    width: width / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text style={{
                                    color: '#FBFF2E',
                                    fontSize: 16,
                                    fontWeight: '700'
                                }}>F</Text>
                            </Pressable>

                        </View>
                    )}

                    {vip_gift && (
                        <View style={{
                            width: width,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Pressable
                                onPress={handleMoodGifts}
                                style={{
                                    width: width / 3,
                                }}>
                                <SvgImage text={'M'} />
                            </Pressable>

                            <Pressable
                                onPress={handleVipGifts}
                                style={{
                                    width: width / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 36,
                                }}>
                                <Text style={{
                                    color: '#FBFF2E',
                                    fontSize: 16,
                                    fontWeight: '700'
                                }}>VIP</Text>
                            </Pressable>



                            <Pressable
                                onPress={handleFunctionalGift}
                                style={{
                                    width: width / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <SvgImage2 text={'F'} width={width / 3} />
                            </Pressable>

                        </View>
                    )}

                    {mood_gift && (
                        <View style={{
                            width: width,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Pressable
                                onPress={handleMoodGifts}
                                style={{
                                    width: width / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    color: '#FBFF2E',
                                    fontSize: 16,
                                    fontWeight: '700'
                                }}>M</Text>
                            </Pressable>


                            <Pressable
                                onPress={handleVipGifts}
                                style={{
                                    width: width / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <SvgImage2 text={'VIP'} />
                            </Pressable>

                            <Pressable
                                onPress={handleFunctionalGift}
                                style={{
                                    width: width / 3,
                                    backgroundColor: '#676767',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 36,
                                    borderWidth: 1,
                                    borderColor: '#fff'
                                }}>
                                <Text style={styles.text}>F</Text>

                            </Pressable>

                        </View>
                    )}

                </ImageBackground>
            </View >

            {functional_gift && (
                <View style={{ flex: 1, marginTop: 10, marginBottom: 30, }}>
                    <FlatList
                        data={functional}
                        numColumns={4}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setSelected_gift(item) }}
                                style={{
                                    marginHorizontal: 10
                                }}>
                                <Image
                                    source={{ uri: item.url }}
                                    style={{
                                        width: selected_gift?.id == index + 1 ? (79 + functional_image_width) : 79,
                                        height: selected_gift?.id == index + 1 ? (96 + functional_image_height) : 96
                                    }}
                                />
                                {selected_gift && selected_gift?.name === item.name && <Pressable
                                    onPress={handleSend}
                                    style={{
                                        width: selected_gift?.id == index + 1 ? (79 + functional_image_width) : 79,
                                        backgroundColor: 'red',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text style={styles.txt}>Send</Text>
                                </Pressable>}
                                {selected_gift?.name !== item.name && (
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: 5
                                    }}>
                                        <Image
                                            source={DIAMOND_ICON}
                                            style={{
                                                width: 20,
                                                height: 20,
                                                marginRight: 5
                                            }} />
                                        <Text style={styles.txt}>{item.cost}</Text>
                                    </View>
                                )}

                            </Pressable>
                        )}
                    />
                </View>
            )}


            {mood_gift && (
                <View style={{ flex: 1, marginTop: 10, marginBottom: 30 }}>
                    <FlatList
                        data={mood}
                        numColumns={4}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setSelected_gift(item) }}
                                style={{
                                    marginHorizontal: 10,
                                    marginVertical: 30,
                                    width: width / 5,
                                    height: width / 5,
                                    borderRadius: width / 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    source={{ uri: item.url }}
                                    style={{
                                        width: 60,
                                        height: 60
                                    }}
                                />
                                {selected_gift && selected_gift?.name === item.name && <Pressable
                                    onPress={handleSend}
                                    style={{
                                        width: 79,
                                        backgroundColor: 'red',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text style={styles.txt}>Send</Text>
                                </Pressable>}

                                {selected_gift?.name !== item.name && (
                                    <>
                                        <Text style={styles.txt}>{item.name}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 5
                                        }}>
                                            <Image
                                                source={DIAMOND_ICON}
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    marginRight: 5
                                                }} />
                                            <Text style={styles.txt}>{item.cost}</Text>
                                        </View>
                                    </>
                                )}

                            </Pressable>
                        )}
                    />
                </View>
            )}

            {vip_gift && (
                <View style={{ flex: 1, marginTop: 10, marginBottom: 30 }}>
                    <FlatList
                        data={vipGifts}
                        numColumns={4}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setSelected_gift(item) }}
                                style={{
                                    marginHorizontal: 10,
                                    marginVertical: 30,
                                    width: width / 5,
                                    height: width / 5,
                                    borderRadius: width / 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    source={{ uri: item.url }}
                                    style={{
                                        width: 60,
                                        height: 60
                                    }}
                                />
                                {selected_gift && selected_gift?.name === item.name && <Pressable
                                    onPress={handleSend}
                                    style={{
                                        width: 79,
                                        backgroundColor: 'red',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text style={styles.txt}>Send</Text>
                                </Pressable>}

                                {selected_gift?.name !== item.name && (
                                    <>
                                        <Text style={styles.txt}>{item.name}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 5
                                        }}>
                                            <Image
                                                source={DIAMOND_ICON}
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    marginRight: 5
                                                }} />
                                            <Text style={styles.txt}>{item.cost}</Text>
                                        </View>
                                    </>
                                )}

                            </Pressable>
                        )}
                    />
                </View>
            )}







            <View style={{
                width: width,
                backgroundColor: '#020202',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                padding: 5
            }}>

                <Text style={styles.txt}>
                    Balance
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={DIAMOND_ICON}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                    <Text style={styles.txt}>{my_data?.wallet}</Text>
                    <Pressable
                        onPress={handlePayments}
                        style={{
                            marginLeft: 5
                        }}>
                        <AntDesign name='right' size={15} color={'#fff'} />
                    </Pressable>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default VideoGift

const styles = StyleSheet.create({
    main_conatainer: {
        flex: 1,
        backgroundColor: '#0E0000'
    },
    upper_part: {
        width: width,
        height: height * 0.5
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    txt: {
        color: '#fff'
    }
})