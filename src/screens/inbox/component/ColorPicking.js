import { StyleSheet, Text, View, Alert, } from 'react-native'
import React from 'react'
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'
import { useNavigation } from '@react-navigation/native'

const ColorPicking = () => {
    const navigation = useNavigation()

    const handelColor = (v)=>{
        navigation.goBack({v})
    }


    return (
        <View style={{flex: 1, backgroundColor: '#020202'}}>
            <TriangleColorPicker
                onColorSelected={(v)=>{Alert.alert(
                    'Color',
                    `You have Choosen ${v} this color `,
                    [
                      { text: 'Choose another', style: 'cancel' },
                      { text: 'Confirm', onPress: ()=>{ handelColor(v)} },
                    ],
                    { cancelable: false }
                  );}}
                style={{ flex: 0.8 }}
            />
        </View>
    )
}

export default ColorPicking

const styles = StyleSheet.create({})