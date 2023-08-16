import { StyleSheet, Text, View, Dimensions, SectionList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
    BLOCK_AVATAR,
    DOWNLOAD_ICON,
    PAYMENT,
    PROMOTION_BALANCE,
    PROMOTION_PRIVACY,
    PROMOTION_DOWNLOAD,
    QR,
    QUESTION_ANSWER,
    SPIN_WHEEL,
    SWITCH_ACCOUNT,
    TERMS_POLICY,
    TRANSFER_INFORMATION,
    LOG_OUT,
    Q_A,
    POST,
    LIVE_CENTER
} from '../../../../configs/source';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('screen');



const AccountSettingSecondScreen = () => {
    const data = [
        {
            data: [
                {
                    name: 'Profits Law',
                    image: PROMOTION_BALANCE,
                    onPress: () => {
                        navigation.navigate('Profits Law');
                    },
                },
                {
                    name: 'Block User List',
                    image: BLOCK_AVATAR,
                    onPress: () => {
                        navigation.navigate('Block User List');
                    },
                },
                {
                    name: 'Draft Video',
                    image: PROMOTION_BALANCE,
                    onPress: () => {
                        navigation.navigate('Draft Video');
                    },
                },
                {
                    name: 'QR Code',
                    image: QR,
                    onPress: () => {
                        navigation.navigate('QR Code');
                    },
                },
            ],
        },
        {
            heading: 'Wheel Luck',
            data: [
                {
                    name: 'Wheel Luck',
                    image: SPIN_WHEEL,
                    onPress: () => {
                        navigation.navigate('Wheel luck');
                    },
                },
                {
                    name: 'Live Center',
                    image: LIVE_CENTER,
                    onPress: () => {
                        navigation.navigate('Live Center');
                    },
                },
                {
                    name: ' Q & A',
                    image: Q_A,
                    onPress: () => {
                        navigation.navigate('qusetion_answer');
                    },
                },
                {
                    name: 'Help',
                    image: QUESTION_ANSWER,
                    onPress: () => {
                        navigation.navigate('Help');
                    },
                },
                {
                    name: 'Posts',
                    image: POST,
                    onPress: () => {
                        navigation.navigate('Posts');
                    },
                },
                {
                    name: 'Terms and Privacy',
                    image: TERMS_POLICY,
                    onPress: () => {
                        navigation.navigate('terms_policy')
                    }
                },
            ],
        },
        {
            heading: 'Payment methods',
            data: [
                {
                    name: 'Payment methods',
                    image: PAYMENT,
                    onPress: () => {
                        navigation.navigate('payment');
                    },
                },
                {
                    name: 'Avatar',
                    image: BLOCK_AVATAR,
                    onPress: () => {
                        navigation.navigate('avatar');
                    },
                },
                {
                    name: 'Download Your Information',
                    image: DOWNLOAD_ICON,
                    onPress: () => {
                        navigation.navigate('download_information');
                    },
                },
                {
                    name: 'Transfer a copy of Your Information',
                    image: TRANSFER_INFORMATION,
                    onPress: () => {
                        navigation.navigate('transfer_information');
                    },
                },
                {
                    name: 'Privacy Policy',
                    image: PROMOTION_PRIVACY,
                    onPress: () => {
                        navigation.navigate('privacy_policy');
                    },
                },
                {
                    name: 'About',
                    image: QUESTION_ANSWER,
                    onPress: () => {
                        navigation.navigate('about');
                    },
                },
            ],
        },
        {

            data: [
                {
                    name: 'Switch account',
                    image: SWITCH_ACCOUNT,
                    onPress: () => {
                        navigation.navigate('switch_account');
                    },
                },
                {
                    name: 'Log out',
                    image: LOG_OUT,
                    onPress: () => {
                        navigation.navigate('logout');
                    },
                },


            ],
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.list_view}>
                        <View style={styles.list_left_view}>
                            <Image source={item.image} style={{ width: 30, height: 30 }} />
                            <Text style={styles.list_text}>{item.name}</Text>
                        </View>
                        <TouchableOpacity onPress={item.onPress}>
                            <AntDesign name='arrowright' size={25} />
                        </TouchableOpacity>
                    </View>
                )}
                renderSectionHeader={({ section: { heading } }) => (
                    <Text style={styles.header}>{heading}</Text>
                )}
            />
        </SafeAreaView>
    );
};

export default AccountSettingSecondScreen;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    list_view: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        marginVertical: 15

    },
    list_left_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    list_text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '800',
        marginLeft: 20
    }

});