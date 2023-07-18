import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import {
    VIDEO_SLIP_ICON,
    VIDEO_TRIM,
    VIDEO_REPLACE,
    VIDEO_VOLUME,
    VIDEO_SPEEDOMETER,
    VIDEO_HISTORY,
    VIDEO_ZOOM,
    VIDEO_MIRRORING,
    VIDEO_FILTER,
    VIDEO_ADJUSTMENT,
    VIDEO_CLIP_GRAPHIC,
    VIDEO_VIGNETTE,
    VIDEO_ENVELOPE,
    VIDEO_VOICE_CHANGER,
    VIDEO_VOICE_EXTRACTER,
    VIDEO_TRANSCODE,
    VIDEO_INFORMATION,
    VIDEO_SLIP
} from '../../../configs/source'
import Trimmer from './Trimmer'
import Filter from './Filter'
import Adjustment from './Adjustment'
import Rotate from './Rotate'
import Speed from './Speed'
import PropertySettings from './PropertySettings'

const { width, height } = Dimensions.get('screen')

const MainEditor = ({
    setShow_editor,
    show_editor,
    rotateVideo,
    reverse_video,
    rotateAntiClockwiseVideo,
    mirroringHorizontally,
    mirroringVertically
}) => {
    const [show_trimming, setShow_trimmer] = useState(false)
    const [enable_editing, setEnable_editing] = useState(show_editor)
    const [show_filter, setShowFilter] = useState(false)
    const [show_adjustment, setshow_adjustment] = useState(false)
    const [show_rotation, setShow_rotation] = useState(false)
    const [show_speed, setShow_speed] = useState(false)
    const [show_information_modal, setShow_information_modal] = useState(false)

    const upper_view = [
        {
            id: 1,
            name: 'Replace',
            icon_name: VIDEO_REPLACE,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 2,
            name: 'Trim/Split',
            icon_name: VIDEO_TRIM,
            onPress: () => {
                setShow_trimmer(p => !p)
                setEnable_editing(p => !p)
            }
        },
        {
            id: 3,
            name: 'Slip',
            icon_name: VIDEO_SLIP,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 4,
            name: 'Mixer',
            icon_name: VIDEO_VOLUME,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 5,
            name: 'Speed',
            icon_name: VIDEO_SPEEDOMETER,
            onPress: () => {
                setShow_speed(p => !p)
                setEnable_editing(p => !p)
            }
        },
        {
            id: 6,
            name: 'Reverse',
            icon_name: VIDEO_HISTORY,
            onPress: () => {
                reverse_video()
            }
        },
        {
            id: 7,
            name: 'Pan & Zoom',
            icon_name: VIDEO_ZOOM,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 8,
            name: 'Rotate/Mirroring',
            icon_name: VIDEO_MIRRORING,
            onPress: () => {
                setShow_rotation(p => !p)
                setEnable_editing(p => !p)
            }
        },
        {
            id: 9,
            name: 'Filter',
            icon_name: VIDEO_ADJUSTMENT,
            onPress: () => {
                setShowFilter(p => !p)
                setEnable_editing(p => !p)
            }
        },
        {
            id: 10,
            name: 'Adjustment',
            icon_name: VIDEO_FILTER,
            onPress: () => {
                setshow_adjustment(p => !p)
                setEnable_editing(p => !p)
            }
        },
        {
            id: 11,
            name: 'Clip Graphics',
            icon_name: VIDEO_CLIP_GRAPHIC,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 12,
            name: 'Vignette',
            icon_name: VIDEO_VIGNETTE,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 13,
            name: 'Volume Envelope',
            icon_name: VIDEO_ENVELOPE,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 14,
            name: 'Voice Changer',
            icon_name: VIDEO_VOICE_CHANGER,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 15,
            name: 'Extract Audio',
            icon_name: VIDEO_VOICE_EXTRACTER,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 16,
            name: 'Transcode',
            icon_name: VIDEO_TRANSCODE,
            onPress: () => {
                console.log("pressed")
            }
        },
        {
            id: 17,
            name: 'Information',
            icon_name: VIDEO_INFORMATION,
            onPress: () => {
                setShow_information_modal(true)
            }
        }
    ]

    const RenderHeader = () => {
        return (
            <View style={styles.upper_goback}>
                <TouchableOpacity onPress={() => { setShow_editor(false) }}>
                    <Entypo name='chevron-small-left' color={'white'} size={40} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <>
            {enable_editing && <View style={styles.main_container}>
                <RenderHeader />
                <FlatList
                    data={upper_view}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={item.onPress}
                            style={styles.upper_icon_view}>
                            <Image
                                source={item.icon_name}
                                style={styles.icon}
                            />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>}
            {show_trimming && <Trimmer setShow_trimmer={setShow_trimmer} setEnable_editing={setEnable_editing} />}
            {show_filter && <Filter setShowFilter={setShowFilter} setEnable_editing={setEnable_editing} />}
            {show_adjustment && <Adjustment setshow_adjustment={setshow_adjustment} setEnable_editing={setEnable_editing} />}
            {show_rotation && <Rotate
                setShow_rotation={setShow_rotation}
                setEnable_editing={setEnable_editing}
                rotateAntiClockwiseVideo={rotateAntiClockwiseVideo}
                mirroringHorizontally={mirroringHorizontally}
                mirroringVertically={mirroringVertically}
                rotateVideo={rotateVideo} />}
            {show_speed && <Speed setShow_speed={setShow_speed} setEnable_editing={setEnable_editing} />}
            <Modal visible={show_information_modal} transparent={true} animationType='slide'>
                <Pressable
                    onPress={() => { setShow_information_modal(false) }}
                    style={{ flex: 1 }}>
                    <View style={{
                        width: 350,
                        height: 220,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        position: 'absolute',
                        top: 30,
                        left: (width - 350) / 2,
                        right: (width - 350) / 2,
                        borderRadius: 10
                    }}>
                        <View style={{
                            width: '100%',
                            height: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'grey'
                        }}>
                            <Text style={styles.modal_text}>Information</Text>
                        </View>

                        <View style={{
                            width: '100%',
                            paddingLeft: 30,
                            paddingTop: 15,
                            marginBottom: 20
                        }}>
                            <Text style={styles.details_text}>reverse_67353_37623.mp4</Text>
                            <Text style={styles.details_text}>Date: 2023.07.07 PM 03:05</Text>
                            <Text style={styles.details_text}>File Format: MP4 (H264/AAC)</Text>
                            <Text style={styles.details_text}>Resoluction: 320 X 176 </Text>
                            <Text style={styles.details_text}>Frame Rate: 25 fps</Text>
                            <Text style={styles.details_text}>Duration: 0.10</Text>
                            <Text style={styles.details_text}>Location: App storage</Text>
                        </View>
                        <Pressable
                            onPress={() => { setShow_information_modal(false) }}
                            style={{
                                width: '100%',
                                height: 35,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'grey'
                            }}>
                            <Text style={[styles.modal_text, { color: 'red' }]}>OK</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
        </>
    )
}

export default MainEditor

const styles = StyleSheet.create({
    main_container: {
        width: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1
    },
    upper_goback: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 250,
        height: 40,
        paddingLeft: 1
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: 'white'
    },
    text: {
        color: '#FAF9F6',
        marginTop: 3,
        fontSize: 10,
    },
    upper_icon_view: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 250 / 3,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    modal_text: {
        fontSize: 16,
        color: 'white',
    },
    details_text: {
        fontSize: 13,
        color: 'white',
        fontWeight: '700'
    }
})