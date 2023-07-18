import { Dimensions, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Orientation from 'react-native-orientation-locker';
import Video, { FilterType } from 'react-native-video'
import { useNavigation, useRoute } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';
import CircularPattern from './components/CircularPattern';
import * as ImagePicker from 'react-native-image-picker'
import { Segment_video } from './utils/Segment_video'
import FFmpegWrapper from './utils/Segment_video';
import {
    VIDEO_SETTING,
    VIDEO_ANTICLOCKWISE,
    VIDEO_CLOCKWISE,
    VIDEO_SCALE,
    VIDEO_FRAME,
    VIDEO_EXPORT,
    TIKTOK_LOADER_GIF
} from '../../configs/source'
import {
    GestureDetector,
    GestureHandlerRootView,
    Gesture,
    PanGestureHandler,
    TapGestureHandler,
    State,
    TapGesture
} from 'react-native-gesture-handler'
import Animated, {
    interpolate,
    interpolateColor,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    useDerivedValue,
    withSpring
} from 'react-native-reanimated';
import LeftIcon from './components/LeftIcon';
import MainEditor from './components/MainEditor';
import TopSheetMediaSelection from './components/TopSheetMediaSelection';
import PropertySettings from './components/PropertySettings';
import { applyWarnEffect } from './utils/Trim_video';
import { stateList } from './State';
import { useDispatch, useSelector } from 'react-redux';
import { change_video_url, change_loading } from '../../store/videoSlice';

const { width, height } = Dimensions.get('screen')

export const content_width = {
    LEFT_CONTAINER: {
        width: 50,
        height: height
    },
    RIGHT_CONTAINER: {
        width: width - 50,
        height: height
    },
    RIGHT_BOTTOM_CONTAINER: {
        width: width - 50,
        height: height * 38
    },
    RIGHT_TOP_RIGHT: {
        width: 250,
        height: height - (height * 38)
    },
    RIGHT_TOP_LEFT: {
        width: width - (50 + 250),
        height: height - (height * 38)
    },
    POINTER_POSITION: {
        x: 300,
    }
}

const VideoEditorLandingPage = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const videoPlayRef = useRef(null)
    const imageDisplayView = useRef(null)
    const [video_segment, setvideo_segment] = useState('')
    const [trimmed_videopath, setTrimmed_video_path] = useState('')
    const leftPosition = useSharedValue(2900)
    const positionX = useSharedValue(0)
    const selected_part = useSharedValue(800)
    const sliding_direction = useSharedValue(0)
    const positive_translation = useSharedValue(0)
    const negative_translation = useSharedValue(0)
    const left_position = useSharedValue(0)
    const right_position = useSharedValue(0)
    const [show_editor, setShow_editor] = useState(false)
    const [open_top_sheet, setOPen_top_sheet] = useState(false)
    const [show_media, setShow_media] = useState(false)
    const [property_settings, setProperty_settings] = useState({
        visible: false
    })
    const video = useSelector(state => state.video)

    const [show_loader, setShow_loader] = useState(false)
    const [video_path, setVideo_path] = useState('')

    useEffect(() => {
        if (stateList.size == 0) {
            stateList.addState(route?.params?.pathVideo.replace(/^file:\/\//, ""))
            dispatch(change_video_url(stateList.current.data))
        } else {
            dispatch(change_video_url(stateList.current.data))
        }
    }, [])



    // console.log(video_path)
    // console.log(stateList.size)



    // const applyWarmEffect = async ()=>{
    //     const inputfile = original_video_path;
    //     const cache_path = await RNFS.CachesDirectoryPath;
    //     const output_path = `${cache_path}/warn_video.mp4`;
    //     const command = `-i ${inputfile} -vf "colorlevels=rimin=30/g=0/b=0,curves=all='0/0.8 1/1'" ${output_path}`;
    //     FFmpegKit.execute(command)
    //     .then(async(session)=>{
    //         const returncode = await session.getReturnCode()
    //         if(returncode){
    //             console.log("effect succefully applyied")
    //             console.log("video editing succesfull")
    //             setOutput_video_path('')
    //             setTrimmed_video_path(output_path)
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log("video editing error")
    //     })

    // }

    // function for transposing the video to right and left
    

    const rotateVideo = async () => {
        console.log("video rotation")
        dispatch(change_loading(true))
        const cache_dir_path = await RNFS.CachesDirectoryPath;
        const filename = new Date().getTime()
        const output_path = `${cache_dir_path}/${filename}.mp4`
        const command = `-i ${video.video_url} -vf "transpose=0" ${output_path}`;
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (ReturnCode.isSuccess(returnCode)) {
                console.log('success')
                stateList.addState(output_path)
                dispatch(change_video_url(stateList.current.data))
                dispatch(change_loading(false))
            } else if (ReturnCode.isCancel(returnCode)) {
                console.log("cancel")
                dispatch(change_loading(false))
            } else {
                dispatch(change_loading(false))
                console.log('error')
                

            }
        });
    };
    const rotateAntiClockwiseVideo = async () => {
        console.log("video rotation")
        dispatch(change_loading(true))
        const cache_dir_path = await RNFS.CachesDirectoryPath;
        const filename = new Date().getTime()
        const output_path = `${cache_dir_path}/${filename}.mp4`
        const command = `-i ${video.video_url} -vf "transpose=1" ${output_path}`;
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (ReturnCode.isSuccess(returnCode)) {
                console.log('success')
                stateList.addState(output_path)
                dispatch(change_video_url(stateList.current.data))
                dispatch(change_loading(false))
            } else if (ReturnCode.isCancel(returnCode)) {
                console.log("cancel")
                dispatch(change_loading(false))
            } else {
                dispatch(change_loading(false))
                console.log('error')
                

            }
        });
    };
    const mirroringHorizontally = async () => {
        dispatch(change_loading(true))
        const cache_dir_path = await RNFS.CachesDirectoryPath;
        const filename = new Date().getTime()
        const output_path = `${cache_dir_path}/${filename}.mp4`
        const command = `-i ${video.video_url} -vf "hflip" ${output_path}`;
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (ReturnCode.isSuccess(returnCode)) {
                console.log('success')
                stateList.addState(output_path)
                dispatch(change_video_url(stateList.current.data))
                dispatch(change_loading(false))
            } else if (ReturnCode.isCancel(returnCode)) {
                console.log("cancel")
                dispatch(change_loading(false))
            } else {
                dispatch(change_loading(false))
                console.log('error')
                

            }
        });
    };
    const mirroringVertically = async () => {
        dispatch(change_loading(true))
        const cache_dir_path = await RNFS.CachesDirectoryPath;
        const filename = new Date().getTime()
        const output_path = `${cache_dir_path}/${filename}.mp4`
        const command = `-i ${video.video_url} -vf "vflip" ${output_path}`;
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (ReturnCode.isSuccess(returnCode)) {
                console.log('success')
                stateList.addState(output_path)
                dispatch(change_video_url(stateList.current.data))
                dispatch(change_loading(false))
            } else if (ReturnCode.isCancel(returnCode)) {
                console.log("cancel")
                dispatch(change_loading(false))
            } else {
                dispatch(change_loading(false))
                console.log('error')
                

            }
        });
    };
    const reverse_video = async () => {
        dispatch(change_loading(true))
        const cache_dir_path = await RNFS.CachesDirectoryPath;
        const filename = new Date().getTime()
        const output_path = `${cache_dir_path}/${filename}.mp4`
        const command = `-i ${video.video_url} -vf reverse ${output_path}`;
        FFmpegKit.executeAsync(command, async (session) => {
            const returnCode = await session.getReturnCode();
            if (ReturnCode.isSuccess(returnCode)) {
                console.log('success')
                stateList.addState(output_path)
                dispatch(change_video_url(stateList.current.data))
                dispatch(change_loading(false))
            } else if (ReturnCode.isCancel(returnCode)) {
                console.log("cancel")
                dispatch(change_loading(false))
            } else {
                dispatch(change_loading(false))
                console.log('error')    

            }
        });
    };








    const trim_video = async () => {
        const chache_dir_path = await RNFS.CachesDirectoryPath
        const filename = new Date().getTime()
        const output_path = `${chache_dir_path}/${filename}.mp4`
        const command = `-i ${output_video_path} -vf reverse ${output_path}`


        FFmpegKit.execute(command)
            .then(async (session) => {
                const returncode = await session.getReturnCode()
                if (returncode == 0) {
                    console.log("video editing succesfull")
                    setOutput_video_path('')
                    setTrimmed_video_path(output_path)
                } else {
                    console.log('video editing error')
                }
            })

    }




    useEffect(() => {
        Orientation.lockToLandscape()
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);
    const data = [
        {
            id: 1,
            group_name: 'Entypo',
            icon_name: 'chevron-left',
            active: true,
            onPress: () => {
                navigation.goBack()
            }
        },
        {
            id: 2,
            group_name: 'EvilIcons',
            icon_name: 'undo',
            active: false,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 3,
            group_name: 'EvilIcons',
            icon_name: 'redo',
            active: false,
            onPress: () => {
                mirroringHorizontally()
            }
        },
        {
            id: 4,
            group_name: 'MaterialCommunityIcons',
            icon_name: 'aspect-ratio',
            active: false,
            onPress: () => {
                applyWarmEffect()
            }
        },
        {
            id: 5,
            group_name: 'Ionicons',
            icon_name: 'settings',
            active: false,
            onPress: () => {
                setProperty_settings(p => ({
                    ...p,
                    visible: true
                }))
            }
        },
        {
            id: 6,
            group_name: 'MaterialIcons',
            icon_name: 'vertical-align-center',
            active: false,
            onPress: () => {
                trim_video()
            }
        },
        {
            id: 7,
            group_name: 'MaterialCommunityIcons',
            icon_name: 'logout',
            active: false,
            onPress: () => {
                mirroring_video()
            }
        }
    ]
    const segment_video = async () => {
        FFmpegWrapper.getFrames(
            'segmentedd_cmd33sschsda2e31',
            video?.video_url,
            10,
            filePath => {
                const _frameURI = [];
                for (let i = 0; i < 10; i++) {
                    _frameURI.push(
                        `${filePath.replace('%4d', String(i + 1).padStart(4, 0))}`,
                    )
                }
                console.log(_frameURI)
                setvideo_segment(_frameURI)
            }
        )
    }

    useEffect(()=>{
        segment_video()
    }, [])


    const renderFrame = (frame, index) => {
        return (
            <Image
                key={index}
                source={{ uri: 'file://' + frame }}
                style={{
                    width: 80,
                    height: 60,
                    zIndex: 10,
                }}
                onLoad={() => {
                    console.log('Image loaded');
                }}
            />
        );
    };

    const handleOnScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        videoPlayRef.current.seek(9)
        // console.log(contentOffset)
        // console.log(contentSize)
        // console.log(layoutMeasurement)

    }

    const minrange = -500;
    const maxrange = 300

    const handleOnTouchStart = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        console.log(contentOffset)
        console.log(contentSize)
        console.log(layoutMeasurement)
    }

    const onMomentumScrollBegin = (event) => {
        const { contentOffset } = event.nativeEvent
        console.log('onMomentumScrollBegin', contentOffset)
    }

    const onMomentumScrollEnd = (event) => {
        const { contentOffset } = event.nativeEvent;
        console.log('onMomentumScrollEnd', contentOffset)
    }

    const handleGesture = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.startX = leftPosition.value
            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onStart", gesture_event, gesture_context)
        },
        onActive: (event, context) => {
            leftPosition.value = context.startX + event.translationX;
            positionX.value = event.absoluteX;
            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onActive", gesture_event,)
        },
        onEnd: (event, context) => {
            if (leftPosition.value < minrange) {
                leftPosition.value = withTiming(minrange);
            } else if (leftPosition.value > maxrange) {
                leftPosition.value = withTiming(maxrange);
            }
            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onEnd", gesture_event, gesture_context)
        }
    })


    const getViewDetails = () => {
        imageDisplayView.current.measure((x, y, width, height, pageX, pageY) => {
            console.log("---------------")
            console.log('pageX', pageX)
            console.log('pageY', pageY)
            console.log('x', x)
            console.log('y', y)
            console.log('width', width)
            console.log("height", height)
        })
    }




    const animatedStyle = useAnimatedStyle(() => {

        return {
            transform: [{ translateX: withTiming(leftPosition.value) }],
        };
    });

    const handleTapGesture = (event) => {
        if (event.nativeEvent.state == State.END) {
            setShow_editor(e => !e)
        }
    }


    const handleNestedGesture = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.startX = event.x
            const velocityX = event.velocityX;
            const direction = velocityX > 0 ? 1 : -1;
            sliding_direction.value = direction;

            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onstart", gesture_event, gesture_context)
        },
        onActive: (event, context) => {
            // const { selected_part: x } = event;
            const velocityX = event.velocityX;
            const direction = velocityX > 0 ? 1 : -1
            sliding_direction.value = direction;
            positive_translation.value = event.translationX;
            negative_translation.value = event.translationX;
            const x = event.x
            if (x > 0 && x < 20) {
                if (direction > 0) {
                    left_position.value = event.x + event.translationX;
                    console.log("detecked")
                } else {
                    left_position.value = event.x - event.translationX;
                }
            }
            // left_position.value = event.x;
            right_position.value = context.startX + event.translationX;

            // console.log(event.x)
            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onActive", gesture_event, gesture_context)
        },
        onEnd: (event, context) => {
            const { velocityX } = event;
            const snapThreshold = 100;
            const direction = velocityX > 0 ? 1 : -1;
            const target_width = direction > 0 ? 0 : -800;

            // if(Math.abs(velocityX) > snapThreshold){
            //     selected_part.value = withTiming(target_width)
            // } else{
            //     selected_part.value  = withTiming(0)
            // }


            const gesture_event = {
                absoluteX: event.absoluteX,
                absoluteY: event.absoluteY,
                x: event.x,
                y: event.y,
                handlerTag: event.handlerTag,
                numberOfPointers: event.numberOfPointers,
                state: event.state,
                translationX: event.translationX,
                translationY: event.translationY,
                velocityX: event.velocityX,
                velocityY: event.velocityY,
            }
            const gesture_context = {
                dictionary: context.dictionary,
                width: context.width,
            }

            // console.log("onEnd", gesture_event, gesture_context)

        },



    })

    const selectedStyle = useAnimatedStyle(() => {
        const direction = sliding_direction.value ?? 0;
        const width = direction > 0 ? withTiming(800 - positive_translation?.value ?? 0) : withTiming(800 + positive_translation?.value ?? 0)
        const left = withTiming(left_position.value);
        const right = withTiming(right_position.value)
        return {
            width,
            left,
            right
        }
    })




    return (
        <GestureHandlerRootView>
            <View style={styles.mainContainers}>

                {/* Left View */}
                <View style={styles.leftView}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.image_view}>
                                <LeftIcon
                                    group_name={item.group_name}
                                    icon_name={item.icon_name}
                                    size={25}
                                    onPress={item.onPress}
                                    color={'white'} />
                            </View>
                        )}
                    />
                </View>

                {/* Right view */}
                <View style={styles.rightView}>

                    {/* Top View */}
                    <View style={styles.topView}>

                        {/* Left view  */}
                        <View style={styles.topLeftView}>

                            {video &&
                                <Video
                                    source={{ uri: `file://` + video.video_url }}
                                    style={{ flex: 1 }}
                                    resizeMode='contain'
                                    paused={false}
                                    repeat={false}
                                    filterEnabled={false}
                                    controls={true}
                                />}
                        </View>

                        <View style={styles.topRightView}>
                            {!show_editor && <CircularPattern setShow_media={setShow_media} />}
                            {show_editor && <MainEditor
                                setShow_editor={setShow_editor}
                                show_editor={show_editor}
                                rotateVideo={rotateVideo}
                                rotateAntiClockwiseVideo={rotateAntiClockwiseVideo}
                                mirroringHorizontally={mirroringHorizontally}
                                mirroringVertically={mirroringVertically}
                                reverse_video={reverse_video} />}
                        </View>
                    </View>



                    

                    {/* Bottom View */}
                    <View style={styles.bottomView}>
                        <PanGestureHandler onGestureEvent={handleGesture}>
                            <Animated.View style={{
                                width: content_width.RIGHT_BOTTOM_CONTAINER.width,
                                height: content_width.RIGHT_BOTTOM_CONTAINER.height
                            }}>

                                {video_segment && <TapGestureHandler onHandlerStateChange={handleTapGesture}>
                                    <Animated.View
                                        ref={imageDisplayView}
                                        style={[{
                                            flexDirection: 'row',
                                            zIndex: -1,
                                            width: 810,
                                            height: 70,
                                        }, animatedStyle]}>
                                        {video_segment.map((frame, index) => renderFrame(frame, index))}
                                        {show_editor && <Animated.View
                                            style={[{
                                                position: 'absolute',
                                                bottom: 0,
                                                top: 0,
                                                height: 60,
                                                zIndex: 1000,
                                                borderWidth: 2,
                                                borderColor: 'red'
                                            }, selectedStyle]}>
                                            <PanGestureHandler onGestureEvent={handleNestedGesture}>
                                                <Animated.View style={{ flex: 1 }} />
                                            </PanGestureHandler>
                                        </Animated.View>}

                                    </Animated.View>
                                </TapGestureHandler>}



                                {!video_segment && <TouchableOpacity
                                    onPress={segment_video}
                                    style={{
                                        backgroundColor: 'blue',
                                        width: 70,
                                        height: 40
                                    }}
                                >
                                    <Text>Video</Text>
                                </TouchableOpacity>}
                                <View style={{
                                    width: 2,
                                    height: content_width.RIGHT_BOTTOM_CONTAINER.height,
                                    backgroundColor: 'yellow',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: content_width.POINTER_POSITION.x
                                }}>
                                </View>
                            </Animated.View>
                        </PanGestureHandler>


                    </View>

                </View>



                <StatusBar hidden={true} />
            </View>
            <TopSheetMediaSelection open_top_sheet={open_top_sheet} setOPen_top_sheet={setOPen_top_sheet} />
            {/* <Modal visible={property_settings.visible}> */}
            <PropertySettings property_settings={property_settings} setProperty_settings={setProperty_settings} />
            {/* </Modal> */}
            {video?.show_loader && <View style={styles.loader}>
                <Image
                    source={TIKTOK_LOADER_GIF}
                    style={{ width: 50, height: 50 }}
                />
            </View>}
        </GestureHandlerRootView>
    )
}

export default VideoEditorLandingPage

const styles = StyleSheet.create({
    mainContainers: {
        width: width,
        height: height,
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    leftView: {
        width: content_width.LEFT_CONTAINER.width,
        height: content_width.LEFT_CONTAINER.height,
        backgroundColor: 'red',
        zIndex: 100,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0

    },
    rightView: {
        width: content_width.RIGHT_CONTAINER.width,
        height: content_width.RIGHT_CONTAINER.height,
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0
    },
    topView: {
        width: width - 50,
        height: height * 0.62,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    bottomView: {
        width: content_width.RIGHT_BOTTOM_CONTAINER.width,
        height: content_width.RIGHT_BOTTOM_CONTAINER.height,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',

    },
    topRightView: {
        width: content_width.RIGHT_TOP_RIGHT.width,
        height: content_width.RIGHT_TOP_RIGHT.height,
        backgroundColor: 'grey'
    },
    topLeftView: {
        width: content_width.RIGHT_TOP_LEFT.width,
        height: content_width.RIGHT_TOP_LEFT.height,

    },
    image_view: {
        width: 50,
        height: (height - 25) / 7,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: 'white',
        borderRightWidth: 0
    },
    loader: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

