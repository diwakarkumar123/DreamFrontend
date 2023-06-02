import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Modal, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Container, Icon, CText } from '../';
import { CLOSE_IMG, TIKTOK_ICON_IMG, COIN, CUT, GIFT_ICON } from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomSheetSignIn, setModalSignIn } from '../../store/indexSlice';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const GiftSelectionScreen = () => {



    return (
        <View style={{
            width: window.width * 1,
            height: window.height * 0.5,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <View>
                <Image
                    source={GIFT_ICON}
                    style={{
                        width: window.width * 0.3,
                        height: window.width * 0.3
                    }}
                />
            </View>
            <View style={styles.gift_align}>
                <Image source={COIN} style={{ width: 10, height: 10 }} />
                <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5 }} >259</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(217, 217, 217, 0.5)', alignItems: 'center', justifyContent: 'center', width: 120, marginTop: window.height * 0.08, padding: 5 }}>
                <Text style={{ color: 'black', margin: 5 }}>Go Back</Text>
            </View>
        </View >
    )
}

export default GiftSelectionScreen

const styles = StyleSheet.create({
    gift_align: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gift_main_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: window.height * 0.05,
        width: window.width * 1,
    }
})