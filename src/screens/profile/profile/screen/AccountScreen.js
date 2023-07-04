import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SectionList, Image } from 'react-native'
import React from 'react'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { TEXT } from '../../../../configs/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import {
    PROMOTION_PROFILE_ICON,
    PROMOTION_ANALYTICS,
    PROMOTION_BALANCE,
    PROMOTION_PAYOUTS_SETTINGS,
    PROMOTION_PRIVACY,
    PROMOTION_BLOG,
    PROMOTION_LANGUAGE,
    PROMOTION_DIARY,
    PROMOTION_ACTIVITIES,
    PROMOTION_DOWNLOAD,
    PROMOTION_VERIFICATION,
    PROMOTION_SHARE,
    PROMOTION_SECURITY,
    PROMOTION_NOTIFICATION
} from '../../../../configs/source'
import { Switch } from 'react-native-paper'

const { width, height } = Dimensions.get('screen')

const AccountScreen = () => {
    const navigation = useNavigation()
    const data = [
        {
            heading: 'Account',
            data: [
                {
                    name: 'Choose Account',
                    image: PROMOTION_PROFILE_ICON,
                    onPress: () => {
                        navigation.navigate('ChooseAccount')
                    }
                },
                {
                    name: 'Analytics',
                    image: PROMOTION_ANALYTICS,
                    onPress: () => {
                        navigation.navigate('MainInsightScreen')
                    }
                },
                {
                    name: 'Balance',
                    image: PROMOTION_BALANCE,
                    onPress: () => {

                    }
                },
                {
                    name: 'Payout Settings',
                    image: PROMOTION_PAYOUTS_SETTINGS,
                    onPress: () => {

                    }
                },
                {
                    name: 'Privacy',
                    image: PROMOTION_PRIVACY,
                    onPress: () => {

                    }
                }
            ]
        },
        {
            heading: 'Tools',
            data: [
                {
                    name: 'Blogs',
                    image: PROMOTION_BLOG,
                    onPress: () => {

                    }
                },
                {
                    name: 'Language',
                    image: PROMOTION_LANGUAGE,
                    onPress: () => {

                    }
                }
            ]
        },
        {
            heading: 'Contact and activities',
            data: [
                {
                    name: 'Diary',
                    image: PROMOTION_DIARY,
                    onPress: () => {

                    }
                },
                {
                    name: 'Activities',
                    image: PROMOTION_ACTIVITIES,
                    onPress: () => {

                    }
                },
                {
                    name: 'Download information',
                    image: PROMOTION_DOWNLOAD,
                    onPress: () => {

                    }
                },
            ]
        },
        {
            heading: 'Settings',
            data: [
                {
                    name: 'Share your profile',
                    image: PROMOTION_SHARE,
                    onPress: () => {

                    }
                },
                {
                    name: 'Request Verification',
                    image: PROMOTION_VERIFICATION,
                    onPress: () => {

                    }
                },
                {
                    name: 'Security',
                    image: PROMOTION_SECURITY,
                    onPress: () => {

                    }
                },
                {
                    name: 'Notification',
                    image: PROMOTION_NOTIFICATION,
                    onPress: () => {

                    }
                },
            ]
        }
    ]



    const HeaderComponents = () => {
        return (
            <Body applyPadding={false} style={styles.upper_sections}>
                <Text style={styles.categoriesTxt}>Categories details</Text>
                <Text style={{
                    width: width * 0.75,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontFamily: 'lato-heavy',
                    fontWeight: '900',
                    textAlign: 'center',
                    lineHeight: 24

                }}>
                    Through this page you can manage {"\n"} and configure your profile and {"\n"} all categories releated {"\n"} to Dream
                </Text>
            </Body>
        )
    }

    const FooterComponents = ()=>{
        return(
            <View style={{
               width: width,
               marginBottom: 20,
               marginTop: 10

            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: width * 0.5,
                    justifyContent: 'space-between'
                }}>
                    <Text style={styles.list_text}>Ad Setting</Text>
                    <Switch
                        value={true}
                        color='red'
                    />
                </View>
                <Text style={styles.footer_text}>
                    With this settings on, you'll be able to allow advertisers to use 
                    your post in their ads, and choose whether your post will only show as an ad. You can manage how advertisers can use your content uner "..." "Ad settings" on each of your posts.
                </Text>
            </View>
        )
    }









    return (
        <Body style={{ flex: 1 }}>
            <Body applyPadding={false} style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Account Settings
                </Text>
            </Body>


            <Body applyPadding={false} style={{ flex: 1 }}>
                <SectionList
                    sections={data}
                    ListHeaderComponent={HeaderComponents}
                    ListFooterComponent={FooterComponents}
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
                        <Text style={styles.headingText}>{heading}</Text>
                    )}
                />

            </Body>


        </Body>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
        marginTop: 3
    },
    categoriesTxt: {
        fontFamily: 'lato-heavy',
        fontSize: 30,
        fontWeight: '900',
        color: 'black'
    },
    upper_sections: {
        width: width,
        alignItems: 'center'
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
    },
    headingText: {
        width: width,
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        fontSize: 18,
        fontWeight: '800',
        marginTop: 15,
        paddingBottom: 3
    },
    footer_text: {
        width: width,
        paddingHorizontal: width * 0.05,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 15
    }
})