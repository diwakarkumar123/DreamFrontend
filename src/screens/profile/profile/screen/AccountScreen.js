import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SectionList, Image, Pressable, TextInput, Linking } from 'react-native'
import React, { useState ,useEffect} from 'react'
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
    PROMOTION_NOTIFICATION,


    BLOCK_AVATAR,
    DOWNLOAD_ICON,
    PAYMENT,
    // PROMOTION_BALANCE,
    // PROMOTION_PRIVACY,
    // PROMOTION_DOWNLOAD,
    QR,
    QUESTION_ANSWER,
    SPIN_WHEEL,
    SWITCH_ACCOUNT,
    TERMS_POLICY,
    TRANSFER_INFORMATION,
    LOG_OUT,
    Q_A,
    POST,
    LIVE_CENTER,


    setting_about_us_icon,
    setting_account_switching_icon,
    setting_add_promote_icon,
    setting_Analytics_icon,
    setting_avtar_icon,
    setting_Backup_icon,
    setting_Balance_icon,
    setting_block_user_list_icon,
    setting_blogs_icon,
    setting_choose_account_icon,
    setting_account_close_icon,
    setting_download_information_icon,
    setting_free_up_space_icon,
    setting_help_and_contact_us_icon,
    setting_language_icon,
    setting_logout_icon,
    setting_notification_icon,
    setting_paymentmethod_icon,
    setting_privacy_policy_icon,
    setting_privacy_icon,
    setting_Q_and_A_icon,
    setting_reported_user_list_icon,
    setting_security_icon,
    setting_share_profile_icon,
    setting_transfer_all_information_icon,
    setting_video_live_alloewd_icon,
    setting_wallet_icon,

} from '../../../../configs/source'
import { Switch } from 'react-native-paper'

const { width, height } = Dimensions.get('screen')

const AccountScreen = () => {
    const navigation = useNavigation()
    const data1 = [
        {
            heading: 'Account',
            data: [
                {
                    name: 'Choose Account',
                    image: setting_choose_account_icon,
                    onPress: () => {
                        navigation.navigate('ChooseAccount')
                    }
                },
                {
                    name: 'Analytics',
                    image: setting_Analytics_icon,
                    onPress: () => {
                        navigation.navigate('MainInsightScreen')
                    }
                },
                {
                    name: 'Balance',
                    image: setting_Balance_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Security',
                    image: setting_security_icon,
                    onPress: () => {
                        navigation.navigate('MainSecurity')
                    }
                },
                {
                    name: 'Privacy',
                    image: setting_privacy_icon,
                    onPress: () => {
                        navigation.navigate('PrivacyPolicy')

                    }
                }
            ]
        },
        {
            heading: 'Tools',
            data: [
                {
                    name: 'Wallet',
                    image: setting_wallet_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Backup',
                    image: setting_Backup_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Language',
                    image: setting_language_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Free up space',
                    image: setting_free_up_space_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Block user list',
                    image: setting_block_user_list_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Videos LIVE a Allowed',
                    image: setting_video_live_alloewd_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'QR Code',
                    image: setting_Analytics_icon,
                    onPress: () => {

                    }
                }
            ]
        },
        {
            heading: 'Wheel Luck',
            data: [
                {
                    name: 'Lucky wheel',
                    image: PROMOTION_DIARY,
                    onPress: () => {

                    }
                },
                {
                    name: 'Box Wheel',
                    image: PROMOTION_ACTIVITIES,
                    onPress: () => {

                    }
                },
                {
                    name: 'Q&A',
                    image: setting_Q_and_A_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Help/ Contact Us',
                    image: setting_help_and_contact_us_icon,
                    onPress: () => {

                    }
                },
            ]
        },
        {
            heading: 'Settings',
            data: [
                {
                    name: 'Payment method',
                    image: setting_paymentmethod_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Avatar',
                    image: setting_avtar_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Notification',
                    image: setting_notification_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Download all Information',
                    image: setting_download_information_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Reported user list',
                    image: setting_reported_user_list_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Transfer all information to another',
                    image: setting_transfer_all_information_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Ads / promote',
                    image: setting_add_promote_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Privacy policy',
                    image: setting_privacy_policy_icon,
                    onPress: () => {
                        Linking.openURL('https://newspakupdat.blogspot.com/p/privacy-policy-of-dream-application.html?m=1')
                    }
                },
                {
                    name: 'About Us',
                    image: setting_about_us_icon,
                    onPress: () => {
                        Linking.openURL('https://newspakupdat.blogspot.com/p/terms-of-service-of-dream-application.html?m=1')
                    }
                },
                {
                    name: 'Share profile',
                    image: setting_share_profile_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Switiching Account',
                    image: setting_account_switching_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Logout',
                    image: setting_logout_icon,
                    onPress: () => {

                    }
                },
                {
                    name: 'Close Account',
                    image: setting_account_close_icon,
                    onPress: () => {

                    }
                },
            ]
        }
    ]
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data1);
    const [mainData, setmainlData] = useState(data1); // Store original data
    const handleSearch = text => {
        setSearchQuery(text);
        const filterdata = mainData.map(section => ({
            ...section,
            data: section.data.filter(item =>
                item.name.toLowerCase().startsWith(text.toLowerCase())
            ),
        }));
        setFilteredData(filterdata);
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setSearchActive(false);
          setSearchQuery('');
          setFilteredData(data1);
        });
        return unsubscribe;
      }, [navigation]);
    
    const toggleSearch = () => {
        if (searchActive) {
          setSearchActive(false);
          setSearchQuery('');
          setFilteredData(data1);
        } else {
          setSearchActive(true);
        }
      };
    
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

    const FooterComponents = () => {
        return (
            <View style={{
                width: width,
                marginBottom: 20,
                marginTop: 10,
                height: 20

            }}>
                {/* <View style={{
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
                </Text> */}
            </View>
        )
    }









    return (
        <Body style={{ flex: 1 }}>
            {/* <Body applyPadding={false} style={styles.header}> */}
            {searchActive ? (
                <Body applyPadding={false} style={styles.header}>

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChangeText={handleSearch}
                    />
                    <TouchableOpacity onPress={toggleSearch} style={{justifyContent:'center',alignItems:'center',height:height*0.06,marginLeft:width*0.87,position:'absolute',bottom:height*.03,opacity:0.4}}>
                        <FontAwesome
                            name={searchActive ? 'times' : 'search'}
                            size={25}
                            color={'#020202'}
                        />
                    </TouchableOpacity>

                </Body>

            ) : (

                <Body applyPadding={false} style={styles.header}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={25} color={'#020202'} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText]}>
                        Settings Profile
                    </Text>
                    <TouchableOpacity onPress={toggleSearch}>
                        <FontAwesome
                            name={searchActive ? 'times' : 'search'}
                            size={25}
                            color={'#020202'}
                        />
                    </TouchableOpacity>
                </Body>
            )}
            {/* </Body> */}

            <Body applyPadding={false}>
                <SectionList
                    sections={searchActive ? filteredData : data1}
                    ListHeaderComponent={HeaderComponents}
                    ListFooterComponent={FooterComponents}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <Pressable style={styles.list_view} onPress={item?.onPress}>
                            <View style={styles.list_left_view}>
                                <Image source={item.image} style={{ width: 25, height: 25 }} />
                                <Text style={styles.list_text}>{item.name}</Text>
                            </View>
                            <TouchableOpacity onPress={item.onPress}>
                                <AntDesign name='arrowright' size={20} />
                            </TouchableOpacity>
                        </Pressable>
                    )}
                    renderSectionHeader={({ section: { heading } }) => (
                        <Text style={styles.headingText}>{heading}</Text>
                    )}
                />
            </Body>
        </Body>
    )
}



export default React.memo(AccountScreen)

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
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
    searchInput: {
        width: width * 0.9,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
    },
    footer_text: {
        width: width,
        paddingHorizontal: width * 0.05,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 15
    }
})





//////////