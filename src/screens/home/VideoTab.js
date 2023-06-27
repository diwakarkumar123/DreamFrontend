import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { useRef, useState, useCallback } from 'react'
import Video from 'react-native-video'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';



const { width, height: screenHeight, height } = Dimensions.get('window')



const VideoTab = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const scrollRef = useRef(null);
  

    const videos = [
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62cf3f5ee912f2black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 253,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62c88ae59235f2black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 254,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62c965384e3772black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 255,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62cabdab721a82black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 256,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62cd66413546a10black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 257,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62cf3d8b239172black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 258,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        },
        {
            "video": 'https://dpcst9y3un003.cloudfront.net/videos/62cf3dc97cda92black.mp4',
            "allow_comments": true,
            "allow_duet": 1,
            "block": 0,
            "created": "2022-07-17T04:33:55.000Z",
            "description": "",
            "duet_video_id": 0,
            "duration": 60.1,
            "gif": "app/webroot/uploads/gif/62d34b5d3340b23.gif",
            "id": 259,
            "old_video_id": 0,
            "privacy_type": "public",
            "promote": 0,
            "section": "0",
            "sound_id": 249,
            "thum": "app/webroot/uploads/62d34ae35c57d23thumb.png",
            "user_id": 23,
            "view": 91
        }
    ]


    const renderVideos = () => {
        return videos.map((video, index) => (
            <View key={video.id} style={{ width: width, height: height }}>
                <View style={{ width: width, height: height, backgroundColor: 'red', borderWidth: 10 }}>
                    <Text>shubham</Text>
                </View>
            </View>
        ));
    };

    const onGestureEvent = (event) => {
        const { translationY, velocityY, state } = event;
    
        if (state === State.ACTIVE) {
          setTranslateY(translationY);
        } else if (state === State.END) {
          if (translationY > screenHeight / 4 || velocityY > 500) {
            // Move to the next video
            const newIndex = currentIndex + 1;
            if (newIndex < videos.length) {
              setCurrentIndex(newIndex);
              setTranslateY(0);
              scrollRef.current.scrollTo({ y: newIndex * screenHeight, animated: true });
            }
          } else {
            // Reset to the current video
            setTranslateY(0);
          }
        }
      };



    return (

        <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={{flex: 1, transform: [{ translateY }] }}>
            <ScrollView
              ref={scrollRef}
              scrollEnabled={false}
              pagingEnabled
              showsVerticalScrollIndicator={false}
            >
              {renderVideos()}
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>


    )
}

export default VideoTab

const styles = StyleSheet.create({
    touchableView: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'blue',
        width: width,
        height: height,
        zIndex: 10
    },
})