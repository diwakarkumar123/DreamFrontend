import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, Platform, StatusBar } from 'react-native'
import React from 'react'
import {
    Setting_left_icon, setting_block_user_list_icon,
} from '../../../../configs/source'
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../components/Header';

const Userblocked = () => {
    const Navigation = useNavigation()

    return (
        <View style={styles.main_conatainer}>
            <Header headertext={"Blocked list"} />
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height * .4 }}>
                <Image
                    source={setting_block_user_list_icon}
                    style={{ width: 150, height: 150, opacity: 0.2 }}
                    resizeMode="contain"
                />
                <View style={{ paddingVertical: 17 }}>
                    <Text style={{ color: '#000' }}>
                        No user blocked you
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default Userblocked

const styles = StyleSheet.create({
    main_conatainer: {
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    }
})