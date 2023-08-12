import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import Video from 'react-native-video';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import {
  ARROW_BACK_IMG,
  FLASH_OFF_IMG,
  FLIP_IMG,
  MUSIC_ICON_IMG,
  SPEED_IMG,
  TIMESTAMP_IMG,
  TIKTOK_LOADER_GIF
} from '../../configs/source';
import { Container, CText, Icon } from '../../components';
import CloseButton from './components/CloseButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STATUSBAR_HEIGHT } from '../../constants/constants';
import Toast from 'react-native-simple-toast'
import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';
import { change_video_url } from '../../store/videoSlice';





const options = [
  { icon: SPEED_IMG, name: 'Speed', onclick: () => console.log('a') },
  { icon: FLIP_IMG, name: 'Flip', onclick: () => console.log('a') },
  { icon: TIMESTAMP_IMG, name: 'Timer', onclick: () => console.log('a') },
  {
    icon: FLASH_OFF_IMG,
    name: 'Flash',
    onclick: () => console.log('a'),
  },
];

const PreviewVideoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch()
  const [isFocused, setIsFocused] = useState(true);
  const [pauseVideo, setPauseVideo] = useState(false);
  const [show_loader, setShow_loader] = useState(false)
  const resize_video = async () => {
    setShow_loader(true)
    const cache_dir_path = await RNFS.CachesDirectoryPath;
    const filename = new Date().getTime()
    const output_path = `${cache_dir_path}/${filename}.mp4`
    const command = `-i ${route?.params?.pathVideo} -vf \"scale=iw*min (720/iw\\,1280/ih):ih*min (720/iw\\,1280/ih),pad=720:1280: (720-iw*min (720/iw\\,1280/ih))/2: (1280-ih*min (720/iw\\,1280/ih))/2\" -c:a copy ${output_path}`;
    return new Promise ((resolve, reject)=>{
      FFmpegKit.executeAsync(command, async (session) => {
        const returnCode = await session.getReturnCode();
        if (ReturnCode.isSuccess(returnCode)) {
          console.log('success')
          dispatch(change_video_url(output_path))
          setShow_loader(false)
          resolve(true)
        } else if (ReturnCode.isCancel(returnCode)) {
          Toast.show('Cancel', Toast.LONG);
          setShow_loader(false)
          resolve(false)
        } else {
          Toast.show('Error', Toast.LONG);
          setShow_loader(false)
          resolve(false)
        }
      });
    })
  };
  const handleNavigation = async (destination) => {
    const isSuccess = await resize_video();
  
    if (isSuccess) {
      navigation.navigate(destination);
    } else {
    }
  };
  
  const handleContinue = () => {
    handleNavigation('PostVideoScreen');
  };
  
  const handleEditing = () => {
    handleNavigation('VideoEditorLandingPage');
  };

  if (isFocused) {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          backgroundColor={COLOR.BLACK}
          translucent={true}
        />
        {isFocused && (
          <Video
            style={styles.video}
            source={{ uri: route?.params?.pathVideo }}
            resizeMode={'cover'}
            paused={pauseVideo}
            repeat={false}
            controls={false}
          />
        )}

        <Container
          marginTop={STATUSBAR_HEIGHT}
          position={'absolute'}
          zIndex={100}>
          <CloseButton icon={ARROW_BACK_IMG} />
        </Container>

        {/* 
        <View style={styles.audioTop}>
          <View style={styles.containerAudio}>
            <Icon
              source={MUSIC_ICON_IMG}
              tintColor={COLOR.WHITE}
              height={16}
              width={16}
            />
            <Text style={styles.txtAudio}>More sounds</Text>
          </View>
        </View> */}
        {/* 
        <View style={styles.actionRight}>
          {options.map((option, index) => {
            return (
              <Pressable
                key={index}
                onPress={option.onclick}
                style={styles.itemOption}>
                <Image source={option.icon} style={styles.icon} />
                <Text style={styles.txtOption}>{option.name}</Text>
              </Pressable>
            );
          })}
        </View> */}



        <View style={styles.actionBottom}>
          <Pressable
            style={[styles.button, { backgroundColor: COLOR.WHITE }]}
            onPress={handleEditing}>
            <CText>Edit</CText>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: COLOR.DANGER }]}
            onPress={handleContinue}>
            <CText color={COLOR.WHITE}>Continue</CText>
          </Pressable>
        </View>
        <Modal visible={show_loader} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}>
          <Image
            source={TIKTOK_LOADER_GIF}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </Modal>
      </View >
    );
  } else {
    <View style={styles.container} />;
  }
};

export default PreviewVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  video: {
    flex: 1,
    zIndex: -1,
  },
  audioTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99,
    marginTop: SPACING.S4 + STATUSBAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAudio: {
    backgroundColor: COLOR.setOpacity(COLOR.BLACK, 0.4),
    borderRadius: BORDER.PILL,
    paddingVertical: SPACING.S1,
    paddingHorizontal: SPACING.S4,
    flexDirection: 'row',
  },
  txtAudio: {
    ...TEXT.SUBTITLE,
    color: COLOR.WHITE,
    marginLeft: SPACING.S2,
  },
  actionRight: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT + SPACING.S4,
    right: SPACING.S2,
  },
  actionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.BLACK,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: BORDER.SMALL,
  },
  itemOption: {
    alignItems: 'center',
    padding: 3,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: COLOR.WHITE,
  },
  txtOption: {
    ...TEXT.SMALL_STRONG,
    color: COLOR.WHITE,
  },
});
