import { View, TouchableWithoutFeedback, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import Video from 'react-native-video';
import { SERVER_DOMAIN, STATUSBAR_HEIGHT } from '../../../constants/constants';
import { HEIGHT, WIDTH } from '../../../configs/constant';
import { COLOR, SPACING } from '../../../configs/styles';
import { Container } from '../../../components';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';





const { width, height } = Dimensions.get('screen')


const CVideo = ({ videoRef, url, isActive, bottomHeight, item, onEnd, avatar, flatListRef, index }) => {
  const sliderRef = useRef();
  // console.log('url to play',url);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [seek, setSeek] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  // const styles = StyleSheet.create({
  //   video: {
  //     position: 'absolute',
  //     width: WIDTH,
  //     height: '100%',
  //   },
  // });
  // console.log('videoRef: ',videoRef);

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const moveToNext = () => {
    flatListRef.current.scrollToIndex({ index: index + 1 })
  }


  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };
  return (
    <>
      {/* <View style={styles.container}>
    
        <View>
          <Video
           source={{ uri: `${url}`}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={!isActive}
          />

      
        </View>
   
    </View> */}
      <Video
        ref={videoRef}
        source={{
          uri: `${url}`,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: width,
          height: height,
          bottom: 0
        }}
        resizeMode="cover"
        paused={!isActive}
        fullscreen={true}
        repeat={false}
        onLoad={data => {
          setDuration(data.duration)
        }}
        onProgress={data => {
          setSliderValue(data.currentTime / duration);
        }}
        onEnd={moveToNext}
        seek={seek}
        poster={avatar}
        posterResizeMode={'cover'}
      />
      {/* {isActive && (
        <Container
          width={WIDTH}
          padding={0}
          position="absolute"
          bottom={-SPACING.S1 - 12}
          elevation={100}>
          <Slider
            ref={sliderRef}
            style={{
              left: -SPACING.S2 * 2 + SPACING.S1,
              width: WIDTH + SPACING.S3 * 2,
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={COLOR.WHITE}
            maximumTrackTintColor={COLOR.WHITE}
            thumbTintColor={COLOR.WHITE}
            value={sliderValue}
            onSlidingComplete={value => {
              setSeek(value * duration);
              setSliderValue(value);
            }}
          />
        </Container>
      )} */}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    // bottom: 0,
    right: 0,
    flex: 1,
    width: width,
    height: height
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
export default React.memo(CVideo);
