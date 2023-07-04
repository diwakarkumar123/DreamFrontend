import { Dimensions, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Orientation from 'react-native-orientation-locker';
import Video, { FilterType } from 'react-native-video'
import { useRoute } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { FFmpegKit } from 'ffmpeg-kit-react-native';
import CircularPattern from './components/CircularPattern';

const { width, height } = Dimensions.get('screen')

const VideoEditorLandingPage = () => {
    const route = useRoute()
    const video_path = route?.params?.pathVideo;

    const [output_video_path, setOutput_video_path] = useState(route?.params?.pathVideo)





    const getCacheFile = async () => {
        const cachePath = await RNFS.CachesDirectoryPath;
        const cameraPath = `${cachePath}/Camera`;
        const files = await RNFS.readdir(cameraPath);
        console.log(files)
    }

    getCacheFile()



    useEffect(() => {
        Orientation.lockToLandscape()

        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);


    const trimVideo = async () => {
        const startTime = '00:00:9';
        const endTime = '00:00:15';
        const inputPath = route?.params?.pathVideo;
        const outputFilename = 'Camera';
        const cacheDirectory = await RNFS.CachesDirectoryPath
        console.log('chachedirectorypath', cacheDirectory)
        const outputPath = `${cacheDirectory}/${outputFilename}`;
        const path = video_path.split('Camera')
        console.log(path[1])


        try {
            await FFmpegKit.execute(`-i ${inputPath} -ss ${startTime} -to ${endTime} -c copy ${outputPath}`);

            console.log('successfull');
            setOutput_video_path()

        } catch (error) {

            console.error('error:', error);
        }
    };





    return (
        <View style={styles.mainContainers}>

            {/* Left View */}
            <View style={styles.leftView}>

            </View>

            {/* Right view */}
            <View style={styles.rightView}>

                {/* Top View */}
                <View style={styles.topView}>

                    {/* Left view  */}
                    <View style={styles.topRightView}>

                        <Video
                            source={{ uri: output_video_path }}
                            style={{ flex: 1 }}
                            resizeMode='contain'
                            paused={false}
                            repeat={true}
                            filterEnabled={true}
                            filter={FilterType.TONAL}
                            controls={true}
                        />

                    </View>

                    <View style={styles.topLeftView}>
                                {/* <CircularPattern /> */}
                    </View>

                </View>

                {/* Bottom View */}
                <View style={styles.bottomView}>

                    <TouchableOpacity
                        onPress={trimVideo}
                        style={{
                            width: 300,
                            height: 60,
                            backgroundColor: 'blue',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white' }}>Trim</Text>
                    </TouchableOpacity>
                    {/* 
                here i have to display the processed video for doint scrollable triming, cutting, appliying effect mangement, text overlay managments, and many things

                how can i do this like someone can drag and select some parts of the video and do something with them */}

                </View>

            </View>



            <StatusBar hidden={true} />
        </View>
    )
}

export default VideoEditorLandingPage

const styles = StyleSheet.create({
    mainContainers: {
        width: width,
        height: height,
        backgroundColor: 'black',
        flexDirection: 'row'
    },
    leftView: {
        width: 50,
        height: height,
        backgroundColor: 'red'
    },
    rightView: {
        width: width - 50,
        height: height,
        backgroundColor: 'green'
    },
    topView: {
        width: width - 50,
        height: height * 0.62,
        backgroundColor: 'blue',
        flexDirection: 'row'
    },
    bottomView: {
        width: width - 50,
        height: height * 0.38,
        backgroundColor: 'yellow'
    },
    topRightView: {
        width: width - 225 - 50,
        height: height * 0.62,
        backgroundColor: 'white'
    },
    topLeftView: {
        width: 250,
        height: height * 0.62,
        // backgroundColor: 'cyan'
    }
})