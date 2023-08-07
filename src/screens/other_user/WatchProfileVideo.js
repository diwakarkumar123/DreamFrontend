import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../profile/profile/components/Header'
import VideoItem from './VideoItem'

const { width, height } = Dimensions.get('screen')

const WatchProfileVideo = () => {
    const route = useRoute()
    const flatListRef = useRef();
    const videoRefs = useRef({});
    const initialIndex = route?.params?.index || 0;
  

    const onViewableItemsChanged = ({ viewableItems }) => {
        // Pause videos that are out of the view
        Object.keys(videoRefs.current).forEach((key) => {
            if (!viewableItems.some((item) => item.index.toString() === key)) {
                videoRefs.current[key].pauseVideo();
            }
        });

        // Play videos that are in the view
        viewableItems.forEach((item) => {
            const { index } = item;
            videoRefs.current[index.toString()].playVideo();
        });
    };

    useEffect(() => {
        // Scroll to the initial index once the FlatList is mounted
        if (flatListRef.current && initialIndex > 0) {
          flatListRef.current.scrollToIndex({ index: initialIndex, animated: false });
        }
      }, [initialIndex]);

      const getItemLayout = (_, index) => ({
        length: height, 
        offset: height * index,
        index,
      });

    return (
        <SafeAreaView style={styles.main_container}>
            <Header headertext={"Post"} />
            <View style={styles.video}>
                <FlatList
                    ref={flatListRef}
                    data={route?.params?.data}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <VideoItem
                                index={index}
                                item={item}
                                videoRefs={videoRefs}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    // initialNumToRender={1}
                    // initialScrollIndex={route?.params?.index}
                    removeClippedSubviews={true}
                    getItemLayout={getItemLayout} // Provide the getItemLayout prop

                    onViewableItemsChanged={onViewableItemsChanged}
                    // onScroll={(event) => {
                    //     // Calculate the current index based on the scroll position
                    //     const currentIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
                    //     if (currentIndex !== initialIndex) {
                    //       // Update the initial index when user manually scrolls
                    //       // This ensures that paging works correctly after manual scroll
                    //       flatListRef.current.scrollToIndexF({ index: currentIndex, animated: false });
                    //     }
                    //   }}
                />
            </View>
        </SafeAreaView>
    )
}

export default WatchProfileVideo

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#020202'
    },
    video: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})
