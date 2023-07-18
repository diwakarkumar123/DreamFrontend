import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
  TouchableOpacity,
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
} from '../../configs/source';
import { Container, CText, Icon } from '../../components';
import CloseButton from './components/CloseButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STATUSBAR_HEIGHT } from '../../constants/constants';
import { FFmpegKit } from 'ffmpeg-kit-react-native';




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
  const [isFocused, setIsFocused] = useState(true);
  const [pauseVideo, setPauseVideo] = useState(false);


  //   FFmpegKit.execute(route?.params?.pathVideo)
  //     .then(async (session) => {
  //       // Unique session id created for this execution
  //       const sessionId = session.getSessionId();
  //       console.log('sessionId', sessionId)

  //       // Command arguments as a single string
  //       const command = session.getCommand();
  //       console.log('command', command)
  //       // Command arguments
  //       const commandArguments = session.getArguments();
  //       console.log('commandArguments', commandArguments)
  //       // State of the execution. Shows whether it is still running or completed
  //       const state = await session.getState();
  //       console.log('state', state)
  //       // Return code for completed sessions. Will be undefined if session is still running or FFmpegKit fails to run it
  //       const returnCode = await session.getReturnCode()
  //       console.log('returnCode', returnCode)
  //       const startTime = session.getStartTime();
  //       const endTime = await session.getEndTime();
  //       const duration = await session.getDuration();
  //       console.log('startTime', startTime)
  //       console.log('endTime', endTime)
  //       console.log('duration', duration)
  //       // Console output generated for this execution
  //       const output = await session.getOutput();
  //       console.log('outputs', output)
  //       // The stack trace if FFmpegKit fails to run a command
  //       const failStackTrace = await session.getFailStackTrace()
  // console.log('failStackTrace', failStackTrace)
  //       // The list of logs generated for this execution
  //       const logs = await session.getLogs();
  //       console.log('logs', logs)
  //       // The list of statistics generated for this execution (only available on FFmpegSession)
  //       const statistics = await session.getStatistics();
  // console.log('statistics', statistics)
  //     })
















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
        </View>

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
        </View>
        <View style={styles.actionBottom}>
          <Pressable
            style={[styles.button, { backgroundColor: COLOR.WHITE }]}
            onPress={() => navigation.navigate('VideoEditorLandingPage', { pathVideo: route?.params?.pathVideo })}>
            <CText>Edit</CText>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: COLOR.DANGER }]}
            onPress={() => {
              setPauseVideo(true);
              setIsFocused(true);
              setTimeout(() => {
                navigation.replace('PostVideoScreen', {
                  pathVideo: route?.params?.pathVideo,
                });
              }, 2000);
            }}>
            <CText color={COLOR.WHITE}>Continue</CText>
          </Pressable>
        </View>
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
