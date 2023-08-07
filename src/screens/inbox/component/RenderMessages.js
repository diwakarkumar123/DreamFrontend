import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { useState, useEffect, useReducer, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomParsedText from '../../../components/CustomParsedText';
import Video from 'react-native-video'
import { DateTime } from 'luxon';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast'


const { width, height } = Dimensions.get('screen')
const screen_width = width * 0.7
const screen_height1 = width * 0.5
const screen_height2 = width * 0.9
const RenderMessages = (props) => {
  const { user: messageUser, type } = props.currentMessage;
  const { currentMessage } = props;
  const { user: currentUser } = props;
  const videoRef = useRef()
  const isCurrentUser = messageUser._id === currentUser._id;
  const [imageDimension, setImageDimension] = useState({ width: 0, height: 0 })
  const [videoDimension, setVideoDimension] = useState({ width: 0, height: 0 })
  useEffect(() => {
    if (type === 'image') {
      Image.getSize(currentMessage.imageUri,
        (width, height) => {
          const aspect_ratio = width / height;
          if (aspect_ratio) {
            setImageDimension({
              width: screen_width,
              height: screen_width
            })
          } else if (aspect_ratio > 1) {
            setImageDimension({
              width: screen_width,
              height: screen_height1
            })
          } else {
            setImageDimension({
              width: screen_width,
              height: screen_height2
            })
          }
        },
        (error) => {
          console.error('Error getting image dimensions:', error);
        }
      );
    }
  }, [type, currentUser, messageUser]);
  const handleOnLoad = (data) => {
    const { naturalSize } = data;
    const width = naturalSize.width, height = naturalSize.height;
    const aspect_ratio = width / height;
    const newHeight = screen_width * aspect_ratio
    setVideoDimension({
      width: screen_width,
      height: newHeight
    })
  };
  const formattedDate = (dateString) => {
    const dateTime = DateTime.fromISO(dateString);
    const formattedTime = dateTime.toFormat("a h':'mm");
    return formattedTime;
  };

  const copyToClipboard = () => {
    Clipboard.setString(props?.currentMessage?.text);
    Toast.show('copied', Toast.LONG)
  };


  const renderincomingMessageContent = () => {
    switch (type) {
      case 'text':
        return (
          <View style={styles.left_view}>
            <View style={styles.second_left_view}>
              <View style={styles.left_text_view}>
                <CustomParsedText style={styles.left_text}>{props.currentMessage.text}</CustomParsedText>
              </View>
              <View style={styles.button_view}>
                <Pressable>
                  <MaterialCommunityIcons name='share-outline' size={20} style={{ transform: [{ scaleX: -1 }] }} />
                </Pressable>
                <Text>{formattedDate(props?.currentMessage?.createdAt)}</Text>
                <Pressable onPress={copyToClipboard}>
                  <FontAwesome5 name='copy' size={15} />
                </Pressable>
              </View>
            </View>
          </View>
        );
      case 'image':
        return (
          <View style={styles.left_view}>
            <Image
              source={{ uri: props.currentMessage.imageUri }}
              resizeMode='contain'
              style={[styles.image, { width: imageDimension.width, height: imageDimension.height }]} />
          </View>
        );

      case 'video':
        return (
          <View style={styles.left_view}>
            <Video
              source={{ uri: props.currentMessage.videoUri }}
              ref={videoRef}
              onLoad={handleOnLoad}
              resizeMode={'contain'}
              // controls={true}
              paused={true}
              style={styles.video} />
          </View>
        );

      case 'file':
        return (
          <View style={styles.left_view}>
            <Text>fileview</Text>
          </View>
        )
    }
  };



  const renderOutgoingMessageContent = () => {
    switch (type) {
      case 'text':
        return (
          <View style={styles.right_view}>
            <View style={styles.second_left_view}>
              <View style={styles.right_text_view}>
                <CustomParsedText style={styles.right_text}>{props.currentMessage.text}</CustomParsedText>
              </View>
              <View style={styles.button_view}>
                <Pressable>
                  <MaterialCommunityIcons name='share-outline' size={20} style={{ transform: [{ scaleX: -1 }] }} />
                </Pressable>
                <Text>{formattedDate(props?.currentMessage?.createdAt)}</Text>
                <Pressable onPress={copyToClipboard}>
                  <FontAwesome5 name='copy' size={15} />
                </Pressable>
              </View>
            </View>
          </View>
        );
      case 'image':

        return (
          <View style={[styles.right_view]}>
            <Image
              source={{ uri: props.currentMessage.imageUri }}
              resizeMode='contain'
              style={[styles.image, { width: imageDimension.width, height: imageDimension.height, }]} />
          </View>
        )

      case 'video':
        return (
          <View style={styles.right_view}>
            <Video
              ref={videoRef}
              onLoad={handleOnLoad}
              resizeMode={'contain'}
              source={{ uri: props.currentMessage.videoUri }}
              // controls={true}
              paused={true}
              style={styles.video} />

          </View>
        );

      case 'file':
        return (
          <View style={styles.right_view}>
            <Text>fileview</Text>
          </View>
        )
    }
  };




  const incomingView = (
    <View>
      {renderincomingMessageContent()}
    </View>
  );

  const outgoingView = (
    <View>
      {renderOutgoingMessageContent()}
    </View>
  );

  const handleLongPress = ()=>{
   props?.setLongPressed(true)
  }



  return (
    <Pressable onLongPress={handleLongPress}>
      {isCurrentUser ? outgoingView : incomingView}
    </Pressable>
  )
};

export default RenderMessages;


const styles = StyleSheet.create({
  right_view: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)'

  },
  left_view: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)'

  },
  button_view: {
    flexDirection: 'row',
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  second_left_view: {

  },
  left_text_view: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3
  },
  left_text: {
    color: '#020202',
    fontWeight: '600',
    fontSize: 16
  },
  right_text_view: {
    backgroundColor: '#6cd972',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: 'flex-start'
  },
  right_text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  image: {
    // maxWidth: width * 0.6,
    // maxHeight: height * 0.5,
  },
  video: {
    height: 100,
    width: 200
  }

})


