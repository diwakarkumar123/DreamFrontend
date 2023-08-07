import { Dimensions, FlatList, Image, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CallBackground from '../CallBackground'
import Header from '../../profile/profile/components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MicOn from '../assets/MicOn'
import MicOff from '../assets/MicOff'
import VideoOn from '../assets/VideoOn'
import VideoOff from '../assets/VideoOff'
import CallDeclined from '../assets/CallDeclined'
import SpeakerOff from '../assets/SpeakerOff'
import SpeakerOn from '../assets/SpeakerOn'
import { USER_IMG } from '../../../configs/source'
import { RTCPeerConnection, RTCView, RTCSessionDescription } from 'react-native-webrtc';



const { width, height } = Dimensions.get('screen')

const AudioCall = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const user_data = route?.params?.user_data;
  const [data, setData] = useState([
    {
      id: 1,
      name: 'speaker',
      isActive: true,
      icon_on: <SpeakerOn />,
      icon_of: <SpeakerOff />,
      onPress: () => {
        setData(prevData => prevData.map(item => item.id === 1 ? { ...item, isActive: !item.isActive } : item));
      }
    },
    {
      id: 2,
      name: 'video',
      isActive: true,
      icon_on: <VideoOn />,
      icon_of: <VideoOff />,
      onPress: () => {
        setData(prevData => prevData.map(item => item.id === 2 ? { ...item, isActive: !item.isActive } : item));
      }
    },
    {
      id: 3,
      name: 'mic',
      isActive: true,
      icon_on: <MicOn />,
      icon_of: <MicOff />,
      onPress: () => {
        setData(prevData => prevData.map(item => item.id === 3 ? { ...item, isActive: !item.isActive } : item));
      }
    },
    {
      id: 4,
      name: 'declined',
      isActive: true,
      icon_on: <CallDeclined />,
      icon_of: '',
      onPress: () => {
       navigation.goBack()
      }
    }])




  return (
    <View style={styles.main_conatiner}>
      <CallBackground />
      <View style={styles.upper_container}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name='arrowleft' color={'#fff'} size={30} />
        </Pressable>
        <Text style={styles.txt}> Audio Call</Text>
      </View>

      <View style={{
        marginTop: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={styles.images}>
          <Image
            source={user_data?.profile_pic ? { uri: user_data?.profile_pic } : USER_IMG}
            style={styles.images} />
        </View>
        <Text style={styles.text}>
          {user_data?.nickname}
        </Text>

        <Text style={styles.ringing}>
          Ringing
        </Text>

      </View>

      <View style={styles.bottom_container}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) => (
            <Pressable style={styles.icon} onPress={item?.onPress}>
              <Pressable style={styles.icon} onPress={item?.onPress}>
                {item.isActive ? item.icon_on : item.icon_of}
              </Pressable>
            </Pressable>
          )}
        />
      </View>

    </View>
  )
}

export default AudioCall

const styles = StyleSheet.create({
  main_conatiner: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 20,
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },
  upper_container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight
  },
  backButton: {
    position: 'absolute',
    left: 15
  },
  bottom_container: {
    width: width,
    position: 'absolute',
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 20
  },
  ringing: {
    color: 'grey',
    fontSize: 18,
    marginTop: 10

  }
})