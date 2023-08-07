import { Dimensions, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import { InputToolbar } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
    BUTTON_POST_COMMENT_ICON,
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
} from '../../../configs/source'
import * as ImagePicker from 'react-native-image-picker'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Attachment from './Attachment';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';



const { width, height } = Dimensions.get('screen')


const RenderInputToolBar = (props) => {
    const { onSend, setInput_controll, user_data } = props;
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const handelVideoSend = async () => {
        const result = await ImagePicker.launchImageLibrary({
            mediaType: 'video',
            videoQuality: 'high',
        })
        if (!result.didCancel) {
            console.log(result)
        } else {
            console.log("please select video from gallery")
        }

    }

    const handleCustomSend = () => {
        if (props.text.trim() === '') {
            return;
        }


        const customMessage = {
            _id: uuidv4(),
            senderId: my_data?.id,
            receiverId: user_data?.id,
            text: props.text,
            type: 'text',
            image: '',
            video: '',
            document: '',
            parentMessageId: '',
            isRead: false,
            audio: '',
            color: '',
            roomId: user_data?.id + my_data?.id,
            createdAt: DateTime.utc().toISO(),
            user: {
                id: my_data?.id,
                name: my_data?.nickname,
                avatar: my_data?.profile_pic,
            },
        };

        onSend([customMessage]);
        props.setText('')
    };

    const handleAttachmentclick = () => {
        setInput_controll((p) => ({
            ...p,
            attachment: !p.attachment,
            rose: false
        }))
    }
    const handleRoseClick = () => {
        setInput_controll((p) => ({
            ...p,
            rose: !p.rose,
            attachment: false
        }))
    }



    return (
        <View style={styles.main_box}>
            <View style={styles.input_side}>
                <TextInput
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: 1000,
                        paddingLeft: 20,
                        paddingRight: 10
                    }}
                    value={props.text}
                    onChangeText={props.setText}
                    placeholder='Enter message'
                    multiline={false}

                />
                <TouchableOpacity style={styles.button} onPress={handelVideoSend}>
                    <Image source={CHAT_ATTACHMENT} style={styles.image} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleRoseClick}>
                    <Image style={styles.image} source={CHAT_ROSE} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={handleAttachmentclick}>
                    <MaterialIcons name='attach-file' color={'#020202'} size={20} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={CHAT_MICROPHONE} style={styles.image} />
                </TouchableOpacity>

            </View>

            <View style={styles.button_side}>
                <TouchableOpacity onPress={handleCustomSend}>
                    <Image
                        source={BUTTON_POST_COMMENT_ICON}
                        style={{
                            width: 35,
                            height: 35
                        }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RenderInputToolBar;

const styles = StyleSheet.create({
    main_box: {
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 0,
    },
    input_side: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        flex: 1,
        borderRadius: 1000,
        paddingRight: 5
    },
    button_side: {
        width: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderWidth: 0.5,
        backgroundColor: '#fff',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: '#fff'
    },
    image: {
        width: 20,
        height: 20
    }
});

