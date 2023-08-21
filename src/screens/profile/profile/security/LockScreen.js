import { StyleSheet, Text, View, Platform, StatusBar, useWindowDimensions, Switch, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const LockScreen = () => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const styles = StyleSheet.create({
        main_container: {
            paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            backgroundColor: '#fff',
            flex: 1
        },
        lock_security: {
            flexDirection: 'row',
            width: width,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            marginVertical: 25,

        },
        text: {
            fontSize: 16,
            color: '#020202',
            width: width * 0.7,
            textAlign: 'left'
        }
    })
    return (
        <View style={styles.main_container}>
            <Header headertext={'Lock Screen'} />


            <Pressable style={styles.lock_security} onPress={() => {navigation.navigate('LockScreen')}}>
                <Text style={styles.text}>Screen Lock type in Dream</Text>
                <AntDesign name='right' size={20} color={'#020202'} />
            </Pressable>

              
            <Pressable style={styles.lock_security} onPress={() => {navigation.navigate('LockScreen')}}>
                <Text style={styles.text}>Security Lock Settings In Dream</Text>
                <AntDesign name='right' size={20} color={'#020202'} />
            </Pressable>



        </View>
    )
}

export default LockScreen

