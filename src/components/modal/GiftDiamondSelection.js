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
            // justifyContent: 'center'

        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: window.width * 1, marginTop: window.height * 0.015 }}>
                <Text style={{ fontSize: 20, fontFamily: "Roboto", fontWeight: '900', marginLeft: window.width * 0.32, color: '#000000' }} >Diamond Box</Text>
                <Image source={CUT} style={{ width: 20, height: 20, marginLeft: window.width * 0.22, tintColor: '#000000' }} />
            </View>

            <View style={styles.gift_main_container}>

                <View style={styles.gift_align}>
                    <Image source={GIFT_ICON} style={{ width: 30, height: 30, }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >Diamond 2x</Text>
                </View>

                <View style={styles.gift_align}>
                    <Image source={COIN} style={{ width: 10, height: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >99</Text>
                </View>

            </View>

            <View style={styles.gift_main_container}>

                <View style={styles.gift_align}>
                    <Image source={GIFT_ICON} style={{ width: 30, height: 30, }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >Diamond 4x</Text>
                </View>

                <View style={styles.gift_align}>
                    <Image source={COIN} style={{ width: 10, height: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >159</Text>
                </View>
            </View>

            <View style={styles.gift_main_container}>

                <View style={styles.gift_align}>
                    <Image source={GIFT_ICON} style={{ width: 30, height: 30, }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >Diamond 6x</Text>
                </View>

                <View style={styles.gift_align}>
                    <Image source={COIN} style={{ width: 10, height: 10 }} />
                    <Text style={{ fontSize: 16, fontFamily: "Roboto", fontWeight: '500', marginLeft: 5, color: '#000000' }} >259</Text>
                </View>
            </View>
        
        <View style={{backgroundColor: '#F42020', alignItems: 'center', justifyContent: 'center', width: 120, marginTop: window.height * 0.08, padding: 5}}>
            <Text style={{color: 'white', margin: 5}}>Send</Text>
        </View>
            
        </View>
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