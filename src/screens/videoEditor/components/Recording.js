import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'
import { RECORDING_ANIMATION } from '../../../configs/source'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Recording = () => {
    const [recording, setRecording] = useState(false)
    const [speaker, setSpeaker] = useState(false)



    const RenderHeader = () => {
        return (
            <View style={styles.upper_goback}>
                <TouchableOpacity
                    onPress={() => { setShow_editor(false) }}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}>
                    <Entypo name='chevron-small-left' color={'white'} size={40} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>Record</Text>
            </View>
        )
    }






    return (
        <View style={styles.main_container}>
            <RenderHeader />
            <Pressable style={styles.volume}>
                <MaterialCommunityIcons
                    name='volume-high'
                    size={30}
                    color={'#fff'}
                />
            </Pressable>
            <View style={styles.recording_container}>
                <LottieView
                    source={RECORDING_ANIMATION}
                    autoPlay={true}
                    loop={true}
                    style={{
                        width: 100,
                        height: 100
                    }} />
                    <Pressable style={styles.start_button}>
                        <Text style={{
                            color: '#fff'
                        }}>Start</Text>
                    </Pressable>
            </View>
        </View>
    )
}

export default Recording

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    upper_goback: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 250,
        height: 40,
        paddingLeft: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recording_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    volume: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingTop: 5
    },
    start_button: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        marginTop: 20
    }
})