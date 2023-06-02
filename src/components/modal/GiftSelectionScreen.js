import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Modal, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Container, Icon, CText } from '../';
import { CLOSE_IMG, TIKTOK_ICON_IMG, COIN } from '../../configs/source';
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

    const gift_data = [
        {
            id: 1,
            title: 'dream',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed723acc550.jpeg',
            coin: 10
        },
        {
            id: 2,
            title: 'rose',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed840685034.jpeg',
            coin: 12
        },
        {
            id: 3,
            title: 'wink',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed843feb96e.jpeg',
            coin: 9
        },
        {
            id: 4,
            title: 'live',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed847a48b61.jpeg',
            coin: 20
        },
        {
            id: 5,
            title: 'balloons',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed84f930b1a.jpeg',
            coin: 18
        },
        {
            id: 6,
            title: 'dog',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed85300bc4e.jpeg',
            coin: 75
        },
        {
            id: 7,
            title: 'smile',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed85ad5511c.jpeg',
            coin: 20
        },
        {
            id: 8,
            title: 'girl flirting',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/62ed857772caf.jpeg',
            coin: 120
        },
        {
            id: 9,
            title: 'diamond',
            image: 'https://dreamlived.com/mobileapp_api/app/webroot/uploads/63b45d4e32a0e.jpeg',
            coin: 40
        }
    ]


    return (
        <View style={{
            width: window.width * 1,
            height: window.height * 0.5,
            backgroundColor: '#352D2D',
            position: 'absolute',
            bottom: 0,

        }}>
            <View style={{
                marginTop: 40
            }}>

            </View>
            <FlatList
                data={gift_data}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                        <View>
                            <Image source={{ uri: item.image }} style={{ width: 30, height: 30 }} />
                            <Text style={{ color: 'white' }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={COIN} style={{ width: 8, height: 8 }} />
                                <Text style={{ color: 'white' }}>{item.coin}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default GiftSelectionScreen

const styles = StyleSheet.create({})