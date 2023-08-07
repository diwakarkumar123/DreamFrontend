import { Alert, Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomSheet from './BottomSheet'
import { QUESTION_MARK, COIN, DIAMOND_ICON, TIKTOK_LOADER_GIF } from '../../configs/source'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setRechargeSheet } from '../../store/indexSlice'
import paymentsApi from '../../apis/paymentsApi'
import WebView from 'react-native-webview'
import queryString from 'query-string';
import { storePayments } from '../../apis/userApi'
import {add_my_profile_data, update_wallet_diamond} from '../../store/my_dataSlice'
import Toast from 'react-native-simple-toast'


const { width, height } = Dimensions.get('window')

const RechargeBottomSheet = () => {
    const [selected_price, setSelected_price] = useState('')
    const [access_token, setAccess_token] = useState(null)
    const [paypal_url, setPaypal_url] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [loading, setloading] = useState(false)

    const dispatch = useDispatch();

    const bottomSheetSettingProfile = useSelector(
        state => state.index.rechargeSheet,
    );
    const my_data = useSelector(state => state.my_data.my_profile_data)


    const handlePayments = () => {
        makePayments()
    }


    const makePayments = async () => {
        setloading(true)
        try {
            const token = await paymentsApi.generateToken()
            setAccess_token(token)
            const price = parseFloat(priceDetails[selected_price].price.replace(/[^0-9.]/g, ""))
            const res = await paymentsApi.createOrder(token, price)
            setloading(false)
            if (res?.links) {
                const findUrl = res.links.find(data => data?.rel === "approve")
                setPaypal_url(findUrl.href)
                handleClose()
                setShowModal(true)
                console.log("response after calling create order:", findUrl.href)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const onUrlChange = (webviewState) => {
        console.log("web view state change :", webviewState.url)
        if (webviewState.url.includes('https://example.com/cancel')) {
            clearPaypalState()
            return;
        }
        if (webviewState.url.includes('https://example.com/return')) {
            setloading(true)
            const urlValues = queryString.parseUrl(webviewState.url)
            // console.log("my urls value", urlValues)
            const { token } = urlValues.query
            if (!!token) {
                paymentSucess(token)
            }

        }
    }



    const paymentSucess = async (id) => {
        try {
            paymentsApi.capturePayment(id, access_token)
                .then((res) => {
                    const { id, links, payer, payment_source, purchase_units, status } = res;
                    const { address, email_address, name, payer_id } = payer;
                    const { account_id, account_status } = payment_source.paypal;
                    const [purchase_unit] = purchase_units;
                    const { payments, reference_id, shipping } = purchase_unit;

                    const link = links[0]?.href;
                    const country_code = address?.country_code;
                    const first_name = name?.given_name;
                    const last_name = name?.surname;

                   
                    const amount_value = payments?.captures[0]?.amount.value;
                    const currency_code = payments?.captures[0]?.amount.currency_code;
                    const {
                        address_line_1,
                        admin_area_1,
                        admin_area_2,
                        postal_code
                    } = shipping?.address;
                    const dimanond_value = priceDetails[selected_price]?.coin;
                    const payment_id = id;
                    const data = {
                        payment_id,
                        link,
                        country_code,
                        email_address,
                        first_name,
                        last_name,
                        payer_id,
                        account_id,
                        account_status,
                        amount_value,
                        currency_code,
                        reference_id,
                        status,
                        address_line_1,
                        admin_area_1,
                        admin_area_2,
                        postal_code,
                        dimanond_value
                    }
                    storePayments(data, my_data?.auth_token)
                    .then((r)=>{
                        console.log(r)
                        const wallet = r?.wallet
                        console.log(wallet)
                        dispatch(update_wallet_diamond(wallet))
                        setloading(false)
                    })
                    .catch((err)=>{
                        console.log(err.message)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            clearPaypalState()
           


        } catch (error) {
            console.log("error raised in payment capture", error)
        }
    }

    const clearPaypalState = () => {
        setPaypal_url(null)
        setAccess_token(null)
        setShowModal(false)
    }



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
                    <Image source={DIAMOND_ICON} style={{ width: 15, height: 15, marginLeft: 10, marginRight: 3 }} />
                    <Text>0</Text>
                </View>
            </>
        )
    }

    const handleClose = () => {
        dispatch(setRechargeSheet(false))
    }


    return (
        <>
            <Modal visible={bottomSheetSettingProfile} transparent={true} animationType='slide'>
            {loading && (
            <View style={{
                position: 'absolute',
                width: width,
                height: height,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 3000
            }}>
                <Image
                    source={TIKTOK_LOADER_GIF}
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
            </View>
          )}
                <Pressable
                    onPress={handleClose}
                    style={{
                        width: width,
                        height: height * 0.265,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'transparent',
                        zIndex: 1000
                    }} />

                <View style={{
                    width: width,
                    height: height * 0.7,
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTopStartRadius: 15,
                    borderTopEndRadius: 15
                }}>

                    <RenderTop />

                    <View style={{ marginBottom: 70, height: height * 0.6 }}>

                        <View style={{ marginBottom: 70 }}>
                            <FlatList
                                data={priceDetails}
                                numColumns={3}
                                renderItem={({ item, index }) => (
                                    <Pressable
                                        onPress={() => { setSelected_price(index) }}
                                        style={[styles.coin_main_container, { borderColor: selected_price == index ? 'red' : 'black' }]}>
                                        <View style={styles.coin_view}>
                                            <Image source={DIAMOND_ICON} style={{ width: 20, height: 20 }} />
                                            <Text style={styles.txt}>{item.coin}</Text>
                                        </View>
                                        <Text>{item.price}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </View>
                    <Pressable
                        onPress={handlePayments}
                        style={{
                            width: width,
                            height: 50,
                            backgroundColor: 'red',
                            position: 'absolute',
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            left: 0,
                            right: 0
                        }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>RECHARGE</Text>
                    </Pressable>
                </View>



            </Modal>

            <Modal visible={showModal}>
                <View style={{ flex: 1, zIndex: 2000 }}>
                    <WebView
                        source={{ uri: paypal_url }}
                        onNavigationStateChange={onUrlChange}
                    />
                </View>
            </Modal>

        </>
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