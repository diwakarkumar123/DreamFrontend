import {
  BackHandler,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import VideoItem from './components/VideoItem';
import { HEIGHT } from '../../configs/constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useRoute, useIsFocused } from '@react-navigation/native';
import { Icon } from '../../components';
import { COLOR } from '../../configs/styles';
import { TIKTOK_LOADER_GIF } from '../../configs/source';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import * as VideoApi from '../../apis/video.api';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/indexSlice';
import {
  BOTTOM_NAVIGATOR_HEIGHT,
  STATUSBAR_HEIGHT,
} from '../../constants/constants';
import NotFoundData from './components/NotFoundData';

const FollowTab = () => {
  const dispatch = useDispatch();
  const timeReloadRef = useRef(0);
  const flatListRef = useRef();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const containerValue = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        containerValue.value,
        [0, 1],
        [COLOR.BACKGROUND_LOADING, COLOR.BLACK],
      ),
    };
  }, []);

  const router = useRoute();
  const isFocused = useIsFocused();
  const bottomHeight = useBottomTabBarHeight();

  const videoPlaying = useRef();

  const HEIGHT_ITEM = HEIGHT - bottomHeight - STATUSBAR_HEIGHT;
  const cellRefs = useRef({});

  const onViewableItemsChanged = useRef(props => {
    const changed = props.changed;
    changed.forEach(item => {
      const cell = cellRefs.current[item.key];
      console.log('cell: ', cell);
      if (cell) {
        if (item.isViewable) {
          dispatch(setCurrentUser(item.item.author._id));
          cell.playVideo();
          videoPlaying.current = item.key;
        } else {
          console.log('not item.isViewable');
          console.log('pause:');
          cell.pauseVideo();
        }
      } else {
        console.log('cell not avail:');
      }
    });
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  useEffect(() => {
    const cell = cellRefs.current[videoPlaying.current];
    if (cell) {
      if (isFocused === true) {
        console.log('play video please');
        cell.playVideo();
      } else {
        console.log('pauseVideo called why');
        cell.pauseVideo();
      }
    }
  }, [router, isFocused]);

  const fetchData = useCallback(async () => {
    try {
      const result = await VideoApi.getVideo();
      if (result.success) {
        console.log('video data', result.data.data);
        setData([...result.data.data].reverse());
        // setData([
        //   {
        //     id: 1,
        //     channelName: 'cutedog',
        //    url: 'https://www.tiktok.com/@mychildhood.2102/video/7194748895048535342',
        //     caption: 'Cute dog shaking hands #cute #puppy',
        //     musicName: 'Song #1',
        //     likes: 4321,
        //     comments: 2841,
        //     avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
        //   },
        //   {
        //     id: 2,
        //     channelName: 'meow',
        //    url: 'https://www.tiktok.com/@mychildhood.2102/video/7194748895048535342',
        //     caption: 'Doggies eating candy #cute #puppy',
        //     musicName: 'Song #2',
        //     likes: 2411,
        //     comments: 1222,
        //     avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
        //   },
        //   {
        //     id: 3,
        //     channelName: 'yummy',
        //    url: 'https://www.tiktok.com/@mychildhood.2102/video/7194748895048535342',
        //     caption: 'Brown little puppy #cute #puppy',
        //     musicName: 'Song #3',
        //     likes: 3100,
        //     comments: 801,
        //     avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
        //   },
        // ]);
        containerValue.value = withTiming(1, { duration: 1000 });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  const handleFecthData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  useEffect(() => {
    if (isFocused && data.length === 0) handleFecthData();
  }, [handleFecthData, isFocused]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: STATUSBAR_HEIGHT,
      paddingBottom: bottomHeight,
      backgroundColor: COLOR.BACKGROUND_LOADING,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  BackHandler.addEventListener('hardwareBackPress', function () {
    const time = Date.now();
    if (time - timeReloadRef.current > 10000) {
      setIsRefreshing(true);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      fetchData();
      timeReloadRef.current = Date.now();
      return true;
    }

    return false;
  });
  console.log(isLoading);
  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {/* {isLoading ? (
        <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
      ) : data.length > 0 ? ( */}

      <FlatList
        ref={flatListRef}
        data={data}
        // data={[
        //   {
        //     id: 1,
        //     author: { name: 'Sohail' },
        //     channelName: 'cutedog',
        //     url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
        //     audio: { name: 'Dogs music' },
        //     caption: 'Cute dog shaking hands #cute #puppy',
        //     musicName: 'Song #1',
        //     likes: 4321,
        //     comments: 2841,
        //     avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
        //   },
        //   {
        //     author: { name: 'Sohail' },
        //     audio: { name: 'Dogs music' },
        //     id: 2,
        //     channelName: 'meow',
        //     url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
        //     caption: 'Doggies eating candy #cute #puppy',
        //     musicName: 'Song #2',
        //     likes: 2411,
        //     comments: 1222,
        //     avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
        //   },
        //   {
        //     audio: { name: 'Dogs music' },
        //     author: { name: 'Sohail' },
        //     id: 3,
        //     channelName: 'yummy',
        //     url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

        //     caption: 'Brown little puppy #cute #puppy',
        //     musicName: 'Song #3',
        //     likes: 3100,
        //     comments: 801,
        //     avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
        //   },
        
        // ]}
        pagingEnabled
        onRefresh={() => setIsRefreshing(true)}
        refreshing={isRefreshing}
        renderItem={({ item, index }) => {
          return (
            <VideoItem
              ref={ref => (cellRefs.current[index] = ref)}
              index={index}
              item={item}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={0}
        maxToRenderPerBatch={3}
        removeClippedSubviews={true}
        windowSize={5}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_data, index) => ({
          length: HEIGHT_ITEM,
          offset: HEIGHT_ITEM * index,
          index,
        })}
      />

      {/* ) : (
        <NotFoundData onPress={handleFecthData} />
      )} */}
    </Animated.View>
  );
};

export default FollowTab;
