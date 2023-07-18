import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomSheet from './BottomSheet'
import { QUESTION_MARK, COIN } from '../../configs/source'


const { width, height } = Dimensions.get('window')

const RechargeBottomSheet = () => {
    const rechargeModalRef = useRef(null)
    const [selected_price, setSelected_price] = useState('')

    useEffect(() => {
        heightLayout = rechargeModalRef?.current?.heightLayoutCurrent();
        rechargeModalRef?.current?.scrollTo(-heightLayout);
        console.log(heightLayout)
    }, [])



    const priceDetails = [
        {
            id: 1,
            coin: 78,
            price: '$ 1.90'
        },
        {
            id: 2,
            coin: 156,
            price: '$ 3.80'
        },
        {
            id: 3,
            coin: 312,
            price: '$ 7.60'
        },
        {
            id: 4,
            coin: 624,
            price: '$ 15.20'
        },
        {
            id: 5,
            coin: 1248,
            price: '$ 30.40'
        },
        {
            id: 6,
            coin: 2496,
            price: '$ 60.80'
        },
        {
            id: 7,
            coin: 4992,
            price: '$ 121.60'
        },
        {
            id: 8,
            coin: 9984,
            price: '$ 243.20'
        },
        {
            id: 9,
            coin: 19968,
            price: '$ 486.40'
        },
        {
            id: 10,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 11,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 12,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 13,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 14,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 15,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 16,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 17,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 18,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 19,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 20,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 21,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 22,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 23,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 24,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 25,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 26,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 27,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 28,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 29,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 30,
            coin: 39936,
            price: '$ 972.80'
        },
        {
            id: 31,
            coin: 39936,
            price: '$ 972.80'
        }
    ];

    const RenderTop = () => {
        return (
            <>
                <View style={styles.upper_container}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Recharge</Text>

                    <Pressable style={{
                        position: 'absolute',
                        right: 15
                    }}>
                        <Image
                            source={QUESTION_MARK}
                            style={{ width: 20, height: 20 }}
                        />
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginVertical: 10

                }}>
                    <Text>Balance</Text>
                    <Image source={COIN} style={{ width: 15, height: 15, marginLeft: 10, marginRight: 3 }} />
                    <Text>0</Text>
                </View>
            </>
        )
    }

    console.log(selected_price)


    return (
        <BottomSheet
            ref={rechargeModalRef}

        >
            <View style={{
                width: width,
                height: height * 0.7,
                backgroundColor: '#fff'
            }}>

                <RenderTop />

                <View style={{ marginBottom: 70, height: height * 0.6 }}>

                <View style={{ marginBottom: 70}}>
                    <FlatList
                        data={priceDetails}
                        numColumns={3}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={()=>{setSelected_price(index)}}
                             style={[styles.coin_main_container, {borderColor: selected_price == index ? 'red': 'black'} ]}>
                                <View style={styles.coin_view}>
                                    <Image source={COIN} style={{ width: 20, height: 20 }} />
                                    <Text style={styles.txt}>{item.coin}</Text>
                                </View>
                                <Text>{item.price}</Text>
                            </Pressable>
                        )}
                    />
                </View>
                </View>


                <Pressable
                 onPress={()=>{console.log("pressed")}}
                 style={{
                    width: width,
                    height: 70,
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>RECHARGE</Text>
                </Pressable>


            </View>
        </BottomSheet>
    )
}

export default RechargeBottomSheet

const styles = StyleSheet.create({
    upper_container: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        padding: 15,
        flexDirection: 'row'

    },
    coin_main_container: {
        width: width * 0.3,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        margin: width * 0.016,
        borderRadius: 10
    },
    coin_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    txt: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        marginLeft: 3
    }
})