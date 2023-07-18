import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import TopSheet from '../../../components/bottomSheets/TopSheet'
import LeftIcon from './LeftIcon'
import RNFS from 'react-native-fs'
import {readAllFolder }from '../utils/ReadAllFiles'
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('screen')

const TopSheetMediaSelection = ({ setShow_media }) => {
    const [folder_name, setFolder_name] = useState('')
    const topSheetRef = useRef()
    const data = [
        {
            id: 1,
            group_name: 'FontAwesome5',
            icon_name: 'photo-video',
            title: 'All',
            onPress: () => {
                navigation.goBack()
            }
        },
        {
            id: 2,
            group_name: 'Entypo',
            icon_name: 'folder-video',
            title: 'Video',
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 3,
            group_name: 'MaterialIcons',
            icon_name: 'photo-library',
            title: 'Image',
            onPress: () => {
                console.log("pressed")
            }
        }
    ]



    // const readAllFolder = async () => {
    //     try {
    //       const granted = await requestPermission();
    //       if (granted) {
    //         const folder_path = RNFS.ExternalStorageDirectoryPath;
    //         const file_path = await RNFS.readDir(folder_path);
    //         for (let i = 0; i < file_path.length; i++) {
    //             console.log("name",file_path[i].name)
    //             console.log("path",file_path[i].path)

    //         }
    //       } else {
    //         console.log('Permission denied');
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   const readParticularPath = async ()=>{
    //     try {
    //         const file = await RNFS.readDir('/storage/emulated/0/WhatsApp/Media/WhatsApp Animated Gifs')
    //         console.log(file)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    //   }

    // //  Download

    //   useEffect(() => {
    //     // readAllFolder();
    //     readParticularPath()
    //   }, []);



    const requestPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Permission',
                        message: 'This app needs permission to access the external storage.',
                        buttonPositive: 'OK',
                    },
                );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        return false;
    };

    useEffect(() => {
        async function fetchData() {
            const folderData = await readAllFolder();
            setFolder_name(folderData)

        }

        fetchData();
    }, []);

    const handleCancel = ()=>{
        setShow_media(p => !p)
    }




    return (
        <TopSheet
            ref={topSheetRef} onCloseTopSheet={() => { setOPen_top_sheet(false) }}>
            <View style={styles.main_container}>


                {/* left view  */}
                <View style={styles.left_icon}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <View style={styles.image_view}>
                                <LeftIcon
                                    group_name={item.group_name}
                                    icon_name={item.icon_name}
                                    size={25}
                                    onPress={item.onPress}
                                    color={'white'} />
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>


                {/* right view  */}
                <View style={{width: width - 50, position: 'absolute', right: 0, top: 0, bottom: 0 }}>


                    {/* right top view  */}
                    <View style={styles.topView}>
                        <View style={styles.top_left_view}>
                            <LeftIcon
                                group_name={"Entypo"}
                                icon_name={'folder-images'}
                                size={25}
                                color={'white'} />
                            <Text style={[styles.text, { fontSize: 16, fontWeight: '600' }]}>Media Browser</Text>
                        </View>
                        <TouchableOpacity onPress={handleCancel}>
                            <Entypo name='cross' size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>


                    {/* right bottom view  */}
                    {folder_name && <View style={{ width: width - 50, height: 200, position: 'absolute', right: 0, top: 50 }}>
                        <FlatList
                            data={folder_name}
                            renderItem={({ item, index }) => (
                                <View>
                                    <Text style={{ color: 'black' }}>{item.folderName}</Text>
                                </View>

                            )}
                        />
                    </View>}
                </View>


            </View>
         </TopSheet>
    )
}

export default TopSheetMediaSelection

const styles = StyleSheet.create({
    main_container: {
        width: width,
        height: 250,
        position: 'absolute', 
        right: 0,
        left: 0,
        top: 0,
        backgroundColor: 'white',
        zIndex: 100
    },
    left_icon: {
        width: 50,
        backgroundColor: 'red',
        position: 'absolute',
        height: 250,

    },
    image_view: {
        width: 50,
        height: 250 / 3,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: 'white',
        borderRightWidth: 0
    },
    text: {
        color: 'white',
        marginTop: 5
    },
    topView: {
        width: width - 50,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        height: 50,
        borderLeftColor: '#fff',
        borderLeftWidth: 0.7,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    top_left_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        alignItems: 'center'
    }
})