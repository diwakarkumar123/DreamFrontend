import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ImageStore } from 'react-native'
import { SIGNUP_USER } from '../../../configs/source'



const { width, height } = Dimensions.get('screen')

const ChoosingAccountType = ({ onPress, HeaderText, descrptionHeader, description }) => {
    const navigation = useNavigation()




    // navigation.goBack()
    return (
        <SafeAreaView style={styles.main_container}>
            {/* Displaying Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} color={'#020202'} />
                </TouchableOpacity>
                <Text style={{ color: '#020202', fontWeight: '500', fontSize: 16 }}>{HeaderText}</Text>
            </View>


            <View style={styles.body}>
                <View style={{ width: width, alignItems: 'center' }}>
                    <Image
                        source={SIGNUP_USER}
                        style={{ width: 120, height: 120 }}
                    />
                </View>
                <View style={{
                    width: width,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: height * 0.05
                }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>{descrptionHeader}</Text>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', textAlign: 'center', marginTop: height * 0.02 }}>
                        {description}
                    </Text>

                    <Pressable
                        onPress={onPress}
                        style={{
                            width: width * 0.6,
                            backgroundColor: '#FF006B',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            borderRadius: 2,
                            marginTop: height * 0.05
                        }}>
                        <Text style={{ color: '#fff' }}>Next</Text>
                    </Pressable>

                </View>
            </View>


            <StatusBar hidden={false} backgroundColor={'#e0ded7'} />
        </SafeAreaView>
    )
}

export default ChoosingAccountType

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        backgroundColor: '#e0ded7',
        flexDirection: 'row',
        width: width,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20
    },
    icon: {
        position: 'absolute',
        left: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})