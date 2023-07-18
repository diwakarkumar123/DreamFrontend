import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, Alert, Touchable } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../configs/styles/index'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, CButton } from '../../components/index'
import { CLOSE_IMG, LIVE_ICON1, ARROW_BACK_IOS_ICON, QUESTION_MARK, VIDEOCAMR_IMG, GRAPH, COIN } from '../../configs/source'
import { TextInput, } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge'
import { useSelector } from 'react-redux'
import paymentsApi from '../../apis/paymentsApi'
import WebView from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const image = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'


const Promotion = ({ makePayments, setPromotion }) => {
    const [audience, setAudience] = useState(true)
    const [budget, setBuget] = useState(1)
    const [promotion_time, setPromotion_time] = useState(1)
    const [promotion_way, setPromotion_way] = useState('real time screen')
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const [access_token, setAccess_token] = useState(null)
    const [paypal_url, setPaypal_url] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation()


    const handleBudgetChange = (value) => {
        setBuget(value)
    };

    const handleTimeChange = (value) => {
        setPromotion_time(value)
    };
    const max_reach = budget * 1000
    const min_reach = max_reach - max_reach / 10


    const Pressing_cut_button = () => {
        console.log("pressed")
        setPromotion(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* upper part */}
            <View style={styles.upper_section}>
                {/* icon container  */}

                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.icon_containers}>

                    <Icon
                        source={CLOSE_IMG}
                        tintColor={'white'}
                    />

                </TouchableOpacity>
                {/* picture and title section */}
                <View style={styles.picture_and_title_section}>
                    <Icon
                        source={{ uri: image }}
                        style={styles.img}
                    />
                    <TextInput
                        placeholder='Add a title'
                        placeholderTextColor={'rgba(255, 255, 255, 1)'}
                        style={styles.input}
                        multiline={true}
                    />
                </View>

                {/* topic and adding live gift section */}
                <View style={styles.topic_and_live_adding}>

                    <TouchableOpacity>
                        <Text style={styles.txt}>Add topic</Text>
                    </TouchableOpacity>

                    

                        <TouchableOpacity style={styles.live_adding}>
                            <Image
                                source={LIVE_ICON1}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={styles.txt}>Add a LIVE g.....</Text>
                        </TouchableOpacity>
                
                </View>
            </View>
            {/* upper section completed */}




            {/* bottom section start */}
            {/* promote section with two icons */}
            <View style={{
                flex: 1,
                width: width,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}>
                <View style={styles.promote_with_two_icon}>
                    <Image source={ARROW_BACK_IOS_ICON} />
                    <Text style={{ fontSize: 20, color: '#000000', fontWeight: '700', fontFamily: 'Roboto' }}>Promote</Text>
                    <Image source={QUESTION_MARK} />
                </View>



                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode={'on-drag'}
                >
                    {/* choose way to promote */}
                    <View style={styles.way_to_promote}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Text style={[styles.txt, { color: 'rgba(0, 0, 0, 1)' }]}>
                                Choose Way to promote
                            </Text>
                            <Icon
                                source={ARROW_BACK_IOS_ICON}
                                style={{ transform: [{ rotate: '180deg' }], width: 14, height: 14 }}
                            />
                        </View>



                        <View style={styles.dream_app_choose_for_you}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image
                                    source={GRAPH}
                                    tintColor={'black'}
                                    style={{ marginRight: 6 }}
                                />
                                <Text>
                                    Promote LIVE With real-time screen
                                </Text>
                            </View>
                            <RadioButton
                                status={promotion_way === 'real time screen' ? 'checked' : 'unchecked'}
                                onPress={() => { setPromotion_way('real time screen') }}
                                color='#FA3E60'
                            />
                        </View>

                        <View style={styles.dream_app_choose_for_you}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image
                                    source={VIDEOCAMR_IMG}
                                    tintColor={'black'}
                                    style={{ marginRight: 6 }}
                                />
                                <Text>
                                    Promote LIVE With Video
                                </Text>
                            </View>
                            <RadioButton
                                status={promotion_way === 'with live video' ? 'checked' : 'unchecked'}
                                onPress={() => { setPromotion_way('with live video') }}
                                color='#FA3E60'
                            />
                        </View>
                    </View>


                    <View style={{
                        width: width * 0.9,
                        height: 2,
                        backgroundColor: '#D9D9D9',
                        marginTop: 8
                    }}>
                    </View>

                    {/* defining audience */}
                    <View style={styles.defining_audience} >

                        <Text style={[styles.txt, { color: 'rgba(0, 0, 0, 1)' }]}>Define Your audience</Text>

                        <View style={styles.dream_app_choose_for_you}>
                            <Text>
                                Default audience ( Dream app choose for you )
                            </Text>
                            <RadioButton
                                status={audience ? 'checked' : 'unchecked'}
                                onPress={() => { setAudience(pre => !pre) }}
                                color='#FA3E60'
                            />
                        </View>

                        <View style={styles.dream_app_choose_for_you}>
                            <Text>Custom</Text>
                            <Icon onPress={() => { navigation.navigate('CustomAudienceScreen') }} source={ARROW_BACK_IOS_ICON} style={{ transform: [{ rotate: '180deg' }] }} />
                        </View>
                    </View>

                    {/* Bidget and duration */}
                    <View style={styles.defining_audience} >

                        <Text style={[styles.txt, { color: 'rgba(0, 0, 0, 1)' }]}>
                            Budget and duration
                        </Text>
                        <View style={styles.live_viewers}>
                            <Text style={[styles.txt, { color: '#000' }]}>{min_reach} - {max_reach}</Text>
                            <Text>ESTIMATED LIVE Viewers</Text>
                        </View>
                    </View>

                    <View style={{
                        width: width * 0.9,
                        height: 2,
                        backgroundColor: '#D9D9D9',
                        marginTop: 8
                    }}>
                    </View>

                    {/* Total budget section */}
                    <View style={{ marginTop: height * 0.03 }}>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>What is your total budget?</Text>
                        <Slider
                            value={budget}
                            onValueChange={handleBudgetChange}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="#FA3E60"
                            maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
                            thumbTintColor="#C9B5B5"
                            renderThumbComponent={() => (
                                <CustomThumb value={budget} />
                            )}
                        />
                    </View>

                    {/* total time of promotion  */}
                    <View style={{ marginTop: height * 0.03 }}>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>How long would you like to promote?</Text>
                        <Slider
                            value={promotion_time}
                            onValueChange={handleTimeChange}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="#FA3E60"
                            maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
                            thumbTintColor="#C9B5B5"
                            renderThumbComponent={() => (
                                <CustomThumb value={promotion_time} />
                            )}
                        />
                    </View>
                </ScrollView>
            </View>


            {/* Bottomest parts */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width, paddingBottom: 10, backgroundColor: '#fff', paddingHorizontal: width * 0.1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={COIN}
                        style={{ width: 16, height: 16, marginRight: 5 }}
                    />
                    <Text style={[styles.txt, { color: '#000' }]}>{my_data ? my_data.wallet : 0}</Text>
                </View>
                <CButton
                    lable={"Buy"}
                    style={{ paddingHorizontal: 25 }}
                    // onPress={() => { Alert.alert("Insufficient balance", "deposite money to continue") }}
                    onPress={makePayments}
                />

            </View>



        </SafeAreaView>
    )
}

export default Promotion



const CustomThumb = ({ value }) => {
    return (
        <View style={styles1.thumbContainer}>
            <Text style={styles1.thumbText}>{value}</Text>
            <View style={styles1.thumb}>

            </View>
        </View>
    );
};

const styles1 = StyleSheet.create({
    thumbContainer: {
        width: 20,
        height: 60,
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#C9B5B5'
    },
    thumbText: {
        fontSize: 15
    }
})






const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(14, 0, 0, 0.9)',
        flex: 1,
        alignItems: 'center'
    },
    upper_section: {
        backgroundColor: 'rgba(14, 0, 0, 0.9);',
        width: width,
        // height: height * 0.2,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    icon_containers: {
        width: width,
        // height: height * 0.05,
        alignItems: 'flex-start',
        padding: 16
    },
    picture_and_title_section: {
        width: width * 0.8,
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
        flexDirection: 'row'
    },
    img: {
        width: 57,
        height: 57,
        borderRadius: 4
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        flex: 1,
        color: '#ffffff'
    },
    topic_and_live_adding: {
        flexDirection: 'row',
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * 0.02
    },
    txt: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500'
    },
    live_adding: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(179, 159, 159, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10
    },
    promote_with_two_icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingHorizontal: width * 0.05,
        borderColor: 'rgba(0, 0, 0, 0.4)',

    },
    defining_audience: {
        width: width * 0.9,
        marginTop: height * 0.02
    },
    dream_app_choose_for_you: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * 0.02
    },
    live_viewers: {
        width: '100%',
        backgroundColor: 'rgba(179, 159, 159, 0.2);',
        padding: 16
    }
})