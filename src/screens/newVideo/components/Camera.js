import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  FLIP_IMG,
  SPEED_IMG,
  FLASH_OFF_IMG,
  TIMESTAMP_IMG,
} from '../../../configs/source';
import { TEXT, COLOR, SHADOW, SPACING } from '../../../configs/styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Camera = ({ camera, isRecord, navigation, setUri, setIsRecord }) => {
  const [typeCamera, setTypeCamera] = useState(true);
  const [flash, setFlash] = useState(false);

  const options = [
    { icon: SPEED_IMG, name: 'Speed', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Flip', onclick: () => console.log('a') },
    { icon: TIMESTAMP_IMG, name: 'Timer', onclick: () => console.log('a') },
    {
      icon: FLASH_OFF_IMG,
      name: 'Flash',
      onclick: () => {
        console.log('Flash');
        setFlash(!flash);
      },
    },
  ];

  const rotateFlip = useSharedValue(0);

  const flipStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateFlip.value}deg` }],
    };
  }, []);

  const handleClickFlip = useCallback(() => {
    rotateFlip.value =
      rotateFlip.value === 360 ? withSpring(0) : withSpring(360);
    setTypeCamera(!typeCamera);
  }, [rotateFlip, typeCamera]);

  return (
    <>
      <RNCamera
        onRecordingStart={data => {
          setIsRecord(true);
          setUri(data.nativeEvent.uri);
        }}
        onRecordingEnd={() => {
          setIsRecord(false);
        }}
        ref={camera}
        style={styles.preview}
        type={
          typeCamera
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back
        }
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        android
      />
      {!isRecord && (
        <View style={styles.containerOption}>
          <Pressable onPress={handleClickFlip} style={styles.itemOption}>
            <Animated.Image
              source={FLIP_IMG}
              style={[styles.icon, flipStyle]}
            />
            <Text style={styles.txtOption}>Flip</Text>
          </Pressable>
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
      )}
    </>
  );
};

export default React.memo(Camera);

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerOption: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    padding: SPACING.S2,
    marginTop: SPACING.S4,
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

/* <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.button} onPress={startRecording}>
              <Text style={{ fontSize: 14 }}> RECORD </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={stopRecording}>
              <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          <Video
            source={{ uri: pathVideo }} // Can be a URL or a local file.
            ref={video}
            style={styles.backgroundVideo}
          />
        </View>
      )} */
