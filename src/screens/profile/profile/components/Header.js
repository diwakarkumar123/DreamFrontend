import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('screen')

const Header = ({ headertext }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.main_container}>
            <TouchableOpacity style={styles.arrow_button} onPress={() => { navigation.goBack() }}>
                <AntDesign name='arrowleft' color={'#020202'} size={25} />
            </TouchableOpacity>
            <View>
                <Text style={styles.txt}>{headertext}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main_container: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 0,
        alignItems: 'center',
        zIndex: 1000
    },
    arrow_button: {
        position: 'absolute',
        left: 15
    },
    txt: {
        fontSize: 20,
        color: '#020202'
    }
})