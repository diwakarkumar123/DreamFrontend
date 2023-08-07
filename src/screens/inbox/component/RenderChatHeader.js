import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../profile/profile/components/Header'
import ChatBackground from '../ChatBackground'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
    CHAT_CALL,
    CHAT_VIDEO,
    CHAT_WHITE_CALL,
    CHAT_WHITE_VIDEO,
    USER_FILLED_IMG
} from '../../../configs/source'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')


const RenderChatHeader = ({ user_data }) => {
    const navigation = useNavigation()

    const handleAudioCall = ()=>{
        navigation.navigate('AudioCall', {user_data})
    }
    const handelVideoCall = ()=>{
        navigation.navigate('VideoCall', {user_data})
    }



    return (
        <View style={styles.header}>
            <Pressable style={styles.back_buttton} onPress={() => { navigation.goBack() }}>
                <AntDesign name='arrowleft' color={'#020202'} size={25} />
            </Pressable>
            <View style={{
                flexDirection: 'row',
                marginLeft: 40,
                alignItems: 'center'
            }}>
                <Image
                    source={user_data?.profile_pic ? { uri: user_data?.profile_pic } : USER_FILLED_IMG}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 5,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }} />
                <View >
                    <Text style={styles.text}>{user_data?.nickname}</Text>
                    <Text style={styles.online_text}>online</Text>
                </View>
            </View>
            <View style={styles.second_container}>
                <Pressable style={styles.image_container} onPress={handelVideoCall}>
                    <Image source={CHAT_VIDEO} style={styles.images} />
                </Pressable>
                <Pressable style={styles.image_container} onPress={handleAudioCall}>
                    <Image source={CHAT_CALL} style={styles.images} />
                </Pressable>
            </View>

        </View>
    )
}

export default RenderChatHeader

const styles = StyleSheet.create({
    images: {
        width: 25,
        height: 25,
    },
    header: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6cd972',
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 10
    },
    second_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    back_buttton: {
        position: 'absolute',
        left: 10,
        top: StatusBar.currentHeight + 10
    },
    image_container: {
        marginHorizontal: 20
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff'
    },
    online_text: {
        color: '#fff'
    }
})