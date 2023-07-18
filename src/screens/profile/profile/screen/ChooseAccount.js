import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'

const {width, height} = Dimensions.get('screen')

const ChooseAccount = () => {
    const navigation = useNavigation()
    const data = [
        {
            account_type: 'Basic account',
            onPress: () => {
                navigation.navigate('BasicAccount')
            }
        },
        {
            account_type: 'Premium account',
            onPress: () => {
                navigation.navigate('PremiumAccount')
            }
        },
        {
            account_type: 'Business account',
            onPress: () => {
                navigation.navigate('BusinessAccount')
            }
        }
    ]


    return (
        <Body style={{ flex: 1, }}>
            <Body applyPadding={false} style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Choose Account
                </Text>
            </Body>
            <Body applyPadding={false}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                       <View style={styles.list_view}>
                        <Text style={styles.list_text}>{item.account_type}</Text>
                        <TouchableOpacity onPress={item.onPress}>
                            <Entypo name='chevron-right' size={30} />
                        </TouchableOpacity>
                       </View>
                    )}
                />
            </Body>
            <StatusBar hidden={true} />
        </Body>
    )
}

export default ChooseAccount

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
    list_view: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        marginVertical: 12
    },
    list_text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 20
    },
})