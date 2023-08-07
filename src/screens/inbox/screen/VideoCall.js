
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  ScreenCapturePickerView,
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals
} from 'react-native-webrtc';



const {width, height} = Dimensions.get('screen')
const VideoCall = () => {
  const [localMediaStream, setLocalMediaStream] = useState()

  const getuserMedia = async()=>{
    try {
      let mediaConstraints = {
        audio: true,
        video: {
          frameRate: 30,
          facingMode: 'user'
        }
      };
      const mediaStream = await mediaDevices.getUserMedia(mediaConstraints)
      setLocalMediaStream(mediaStream)
      console.log(mediaStream)
      
    } catch (error) {
      console.log('errro while capturing the user media')
    }
  }
useEffect(()=>{
  getuserMedia()
}, [])
  




  return (
    <View styles={{flex: 1}}>
      {localMediaStream && (
        <RTCView
          mirror={true}
          objectFit={'cover'}
          style={{width: width, height: height * 0.5}}
          streamURL={localMediaStream.toURL()}
          zOrder={0}
        />
      )}
      {!localMediaStream && (
        <Text>media not avaliable</Text>
      )}
    </View>
  )
}

export default VideoCall

const styles = StyleSheet.create({})