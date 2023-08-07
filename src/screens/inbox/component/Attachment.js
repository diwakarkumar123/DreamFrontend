import { Dimensions, StyleSheet, Text, View, FlatList, Pressable, Image, Platform, PermissionsAndroid, Modal } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated'
import {
    ROSE,
    CHAT_VIDEO,
    CHAT_ROSE,
    CHAT_ATTACHMENT,
    CHAT_MICROPHONE,
    CHAT_DOCUMENT,
    CHAT_CAMERA,
    CHAT_GALLERY,
    CHAT_MUSIC,
    CHAT_AUDIO,
    CHAT_LOCATION,
    CHAT_CONTACT,
    CHAT_COLOR_PICKER,
    CHAT_CALL,
    CHAT_VIDEO_TWO,
    CHAT_WHITE_BRIGHTNESS,
    CHAT_WHITE_ROSE,
    CHAT_WHITE_COLOR_PICKER,
    CHAT_WHITE_ATTACHMENT,
    CHAT_WHITE_CONTACT,
    CHAT_WHITE_LOCATION,
    CHAT_WHITE_AUDIO,
    CHAT_WHITE_GALLERY,
    CHAT_WHITE_CAMERA,
    CHAT_WHITE_DOCUMENT,
    CHAT_WHITE_VIDEO_TWO,
    CHAT_WHITE_VIDEO,
    CHAT_WHITE_MUSIC,
    CHAT_WHITE_CALL
} from '../../../configs/source'
import * as DocumentPicker from 'react-native-document-picker'
import * as ImagePicker from 'react-native-image-picker'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import { useNavigation } from '@react-navigation/native'
import { ColorPicker } from 'react-native-color-picker'





const { width, height } = Dimensions.get('screen')

const Attachment = () => {
    const navigation = useNavigation()
    


    const buttonData = [
        {
            id: 1,
            name: 'Document',
            image_name: CHAT_WHITE_DOCUMENT,
            onPress: async () => {
                const result = await DocumentPicker.pickSingle()
                if (!result.copyError) {
                    console.log(result)
                } else {
                    console.log("error in picking up the document")
                }
            }
        },
        {
            id: 2,
            name: 'Camera',
            image_name: CHAT_WHITE_CAMERA,
            onPress: async () => {
                repuestPermission()
                const result = await ImagePicker.launchCamera({
                    mediaType: 'mixed',
                })
                if (!result.didCancel) {
                    console.log(result)
                } else {
                    console.log("user have cancleled camera recording")
                }
            }
        },
        {
            id: 3,
            name: 'Gallery',
            image_name: CHAT_GALLERY,
            onPress: async () => {
                const result = await ImagePicker.launchImageLibrary({
                    mediaType: 'mixed',

                })
                if (!result.didCancel) {
                    console.log(result)
                } else {
                    console.log("user have cancleled camera recording")
                }
            }
        },
        {
            id: 4,
            name: 'Audio',
            image_name: CHAT_WHITE_AUDIO,
            onPress: async () => {
                const result = await DocumentPicker.pickSingle({
                    type: DocumentPicker.types.audio
                })
                if (!result.copyError) {
                    console.log(result)
                } else {
                    console.log('error while selecting the audio from devices')
                }
            }
        },
        {
            id: 5,
            name: 'Location',
            image_name: CHAT_WHITE_LOCATION,
            onPress: () => {
                console.log("document Pressed")
            }
        },
        {
            id: 6,
            name: 'Contact',
            image_name: CHAT_WHITE_CONTACT,
            onPress: async () => {
                try {
                    const contactPermission = await request(Platform.OS === 'android' ? PERMISSIONS.ANDROID.READ_CONTACTS : PERMISSIONS.IOS.CONTACTS)
                    if (contactPermission === RESULTS.GRANTED) {
                        Contacts.getAll()
                            .then((data) => {
                                navigation.navigate('ContactList', { data })
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
        {
            id: 7,
            name: 'Font',
            image_name: CHAT_WHITE_AUDIO,
            onPress: () => {
                console.log("document Pressed")
            }
        },
        {
            id: 8,
            name: 'Color control panel',
            image_name: CHAT_WHITE_COLOR_PICKER,
            onPress: () => {
                navigation.navigate('ColorPicking')
            }
        },
    ]
    return (
        <View style={styles.main_container}>
            <FlatList
                data={buttonData}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <Pressable style={styles.main_view} onPress={item?.onPress}>
                        <Image source={item?.image_name} style={styles.image} />
                        <Text style={{ color: '#fff' }}>{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default Attachment

const styles = StyleSheet.create({
    main_view: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#283635',
        marginHorizontal: 5,
        padding: 10,
        marginVertical: 10

    },
    image: {
        width: 25,
        height: 25,
        marginBottom: 5

    },
    main_container: {
        width: width,
        justifyContent: 'center',
        paddingHorizontal: width * 0.1,
        paddingVertical: 20,
        backgroundColor: '#283635',
        marginTop: 1,
    }
})