import {
  BackHandler,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  Modal,
  ToastAndroid,
  Alert,
  TouchableOpacity
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
import GiftSelectionScreen from '../../components/modal/GiftSelectionScreen';


const window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const { height, width } = Dimensions.get('window');





const FollowTab = () => {
  const dispatch = useDispatch();
  const timeReloadRef = useRef(0);
  const flatListRef = useRef();

  const [data, setData] = useState([]);







  const videoData = [
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62cf3f5ee912f2black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62c88ae59235f2black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62c965384e3772black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62cabdab721a82black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62cd66413546a10black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62cf3d8b239172black.mp4',
    },
    {
      video: 'https://dpcst9y3un003.cloudfront.net/videos/62cf3dc97cda92black.mp4',
    }
  ]



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
          dispatch(setCurrentUser(item.item.id));
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

      if (result.status == 200) {
        setData([...result.data.videos].reverse());

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

  // BackHandler.addEventListener('hardwareBackPress', function () {
  //   const time = Date.now();
  //   if (time - timeReloadRef.current > 10000) {
  //     setIsRefreshing(true);
  //     flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  //     fetchData();
  //     timeReloadRef.current = Date.now();
  //     return true;
  //   }

  //   return false;
  // });
  const [buttonCount, setButtonCount] = useState(0);
let resetTimeout;
let buttonClicked = false;

const resetButtonCount = () => {
  setButtonCount(0);
};

const handleButtonClick = () => {
  buttonClicked = true;
  setButtonCount(prevCount => prevCount + 1);

  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    resetButtonCount();
    buttonClicked = false;
  }, 5000); // Reset to zero after 5 seconds of inactivity
};

BackHandler.addEventListener('hardwareBackPress', () => {
  if (!buttonClicked) {
    handleButtonClick();

    if (buttonCount === 2) {
      BackHandler.exitApp();
    } else if (buttonCount === 1) {
      Alert.alert("Displaying notification");
    } else if (buttonCount === 0) {
      flatListRef.current.scrollToIndex({ index: 1 });
    }
  }
});

  

  




  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {isLoading ? (
        <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
      ) : data.length > 0 ? (
        <FlatList
          ref={flatListRef}
          data={data}
          pagingEnabled={true}
          onRefresh={() => setIsRefreshing(true)}
          refreshing={isRefreshing}
          renderItem={({ item, index }) => {
            return (
    

              <VideoItem
                ref={ref => (cellRefs.current[index] = ref)}
                index={index}
                item={item}

                flatListRef={flatListRef}

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
      ) : (
        <NotFoundData onPress={handleFecthData} />
      )}

    </Animated.View>
  );
};

export default FollowTab;








