import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { Modal, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Container, Icon, CText } from '../';
import { CLOSE_IMG, TIKTOK_ICON_IMG, COIN } from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomSheetSignIn, setModalSignIn } from '../../store/indexSlice';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GiftDiamondSelection from '../../components/modal/GiftDiamondSelection';
import Entypo from 'react-native-vector-icons/Entypo'


const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const GiftSelectionScreen = ({ setShowGiftModal, setShowDimanondSelectionModal }) => {
    const my_data = useSelector(state => state.my_data.my_profile_data)

    const showModal = (item) => {
        if (my_data.wallet < item.coin) {
            setShowGiftModal(false)
            setShowDimanondSelectionModal(pre => ({
                ...pre,
                isVisible: true,
                item: item
            }))
        } else {
            Alert.alert("Insufficient balance", 'depoite money to continue')
        }

    }


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

    const type_of_gift = [
        {
            id: 1,
            type: 'Basic'
        },
        {
            id: 2,
            type: 'Economic'
        },
        {
            id: 3,
            type: 'Premium'
        },
        {
            id: 4,
            type: 'Vip'
        }
    ]


    return (
        <View style={{
            width: window.width * 1,
            height: window.height * 0.6,
            backgroundColor: '#352D2D',
            position: 'absolute',
            bottom: 0,

        }}>

            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: window.width * 0.94, marginVertical: 25, marginHorizontal: window.width * 0.02 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', width: 45 }}>
                    <Image
                        source={COIN}
                        style={{ width: 15, height: 15 }}
                    />
                    <Text style={[styles.txt, { fontSize: 18, marginLeft: 4 }]}>{my_data.wallet}</Text>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={type_of_gift}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.gift_type_conyainers}>
                                <Text style={styles.txt}>{item.type}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                
                    <TouchableOpacity 
                    onPress={()=>{setShowGiftModal(false)}}
                    style={{
                        width: 25,
                        height: 25
                    }}>
                        <Entypo name='cross' size={25} color={'white'} />
                    </TouchableOpacity>
            </View>

            <FlatList
                data={gift_data}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => { showModal(item) }}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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

const styles = StyleSheet.create({
    gift_type_conyainers: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginRight: 3,
        paddingHorizontal: 6,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 5
    },
    txt: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400'

    }
})