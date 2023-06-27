import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CLOSE_IMG, LIVE_ICON1, ARROW_BACK_IOS_ICON, QUESTION_MARK, VIDEOCAMR_IMG, GRAPH, COIN } from '../../configs/source'
import { Icon, CButton } from '../../components/index'
import { useNavigation } from '@react-navigation/native'
import Body from '../../components/Body/Body.components'
import { useState } from 'react'
const { width, height } = Dimensions.get('window')


const CustomAudienceScreen = () => {
    const navigation = useNavigation()
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])

    const handleConfirm = ()=>{

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <Body applyPadding={false} style={styles.header}>
                <Body applyPadding={false} style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { marginTop: 0 }]}>
                        Select Audience
                    </Text>
                </Body>
                <TouchableOpacity
                    onPress={handleConfirm}
                >
                    <Text style={[styles.headerText, { color: 'rgba(26, 148, 236, 1)' }]}>Compl...</Text>
                </TouchableOpacity>
            </Body>

            <View style={styles.list_section}>
                <Text style={styles.text}>Location</Text>
                <Icon onPress={() => { navigation.navigate('SelectingLocationScreen', {}) }} source={ARROW_BACK_IOS_ICON} style={{ transform: [{ rotate: '180deg' }] }} />
            </View>

            <View style={styles.list_section}>
                <Text style={styles.text}>Interests</Text>
                <Icon onPress={() => { navigation.navigate('InterestScreen') }} source={ARROW_BACK_IOS_ICON} style={{ transform: [{ rotate: '180deg' }] }} />
            </View>

            <View style={styles.list_section}>
                <Text style={styles.text}>Gender</Text>
                <Icon onPress={() => { navigation.navigate('SelectingGender') }} source={ARROW_BACK_IOS_ICON} style={{ transform: [{ rotate: '180deg' }] }} />
            </View>

            <View style={styles.list_section}>
                <Text style={styles.text}>Age</Text>
                <Icon onPress={() => { navigation.navigate('SelectingAge') }} source={ARROW_BACK_IOS_ICON} style={{ transform: [{ rotate: '180deg' }] }} />
            </View>

        </SafeAreaView>
    )
}

export default CustomAudienceScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '600'
    },
    list_section: {
        width: width,
        paddingHorizontal: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        marginTop: 10
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 7,
        borderColor: 'rgba(217, 217, 217, 0.4)',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
        marginTop: 5
    },
    leftHeader: {
        flexDirection: 'row',
    },
})