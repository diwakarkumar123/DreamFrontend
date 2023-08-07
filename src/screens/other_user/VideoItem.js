import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Video from 'react-native-video';
import VerticalSecction from '../home/components/VerticalSecction';
import VerticalLeftSection from '../home/components/VerticalLeftSection';
import { DISC_IMG } from '../../configs/source'
import { Container } from '../../components';

const { width, height } = Dimensions.get('screen');

const VideoItem = ({ item, index, videoRefs }) => {
  const url = `https://dpcst9y3un003.cloudfront.net/${item?.video}`;
  const avatar = `https://dpcst9y3un003.cloudfront.net/${item?.thum}`;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const verticalRef = useRef();
  const des = item?.description;
  const [showFullText, setShowFullText] = useState(des?.length > 60)
  const [showText, setShowText] = useState(false)



  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.seek(0);
      // videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      // videoRef.current.pause(); 
      setIsPlaying(false);
    }
  };

  videoRefs.current[index.toString()] = {
    playVideo: handleVideoPlay,
    pauseVideo: handleVideoPause,
  };


  const onGiftPress = () => {
    if (isLogin) {
      navigation.navigate('VideoGift', { id, user_id })
    } else {
      dispatch(setModalSignIn(true));
    }
  }



  return (
    <View style={styles.main_container}>
      <Video
        ref={videoRef}
        source={{
          uri: url,
        }}
        style={{
          top: 0,
          left: 0,
          right: 0,
          width: width,
          height: height,
          bottom: 0,
        }}
        resizeMode="cover"
        repeat={false}
        poster={avatar}
        posterResizeMode={'cover'}
        paused={!isPlaying}
      />

      <VerticalSecction
        ref={verticalRef}
        like={"like"}
        comment={'comment'}
        author={'thum'}
        idVideo={item?.id}
        onGiftPress={onGiftPress}
        diamond_value={item?.diamond_value || 0}
        user={'user'}
      // avatar={thum}
      />

      <VerticalLeftSection
        ref={verticalRef}
        like={item?.likes}
        comment={item?.comment}
        author={item?.thum}
        idVideo={item?.id}
        share={item?.shared}
        item={item?.item}
      />

      <View style={{
        position: 'absolute',
        bottom: width * 0.15,
        right: 15
      }}>
        <Image
          source={DISC_IMG}
          style={{ width: 40, height: 40 }}
        />
      </View>




      <Container position="absolute" bottom={80} left={width * 0.3} alignItems='center'>
        <Container marginBottom={40} width={width * 0.4}>

          {showText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', backgroundColor: 'transparent' }} >{des}</Text>}

          {!showText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', backgroundColor: 'transparent' }}>{des} {showFullText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', }} onPress={() => { setShowText(true) }}>more...</Text>}</Text>}
        </Container>
      </Container>

      <Container position="absolute" left={width * 0.4} bottom={60}>
        <Container marginBottom={40} alignItems="center" justifyContent='center' flexDirection='row'>
          <Text style={{ fontSize: 10, color: 'white', fontWeight: '500', backgroundColor: 'transparent' }}>
            See Original Song
          </Text>
        </Container>
      </Container>




    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  main_container: {
    // width: width,
    // height: height,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // backgroundColor: 'red',
    // zIndex: 100,
  },
});
