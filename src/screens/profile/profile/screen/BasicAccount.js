import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChoosingAccountType from '../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'

const BasicAccount = () => {
    const navigation = useNavigation()
  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BottomSheetSocialAuth")}}
        description={`With the Basic Account you will get \n the Basic Features in Premium suite it \n includes more than 30 Professional \n  Features`}
        HeaderText={"Basic Account"}
        descrptionHeader={"Hi, Welcome to Basic Account"}
    />
  )
}

export default BasicAccount

const styles = StyleSheet.create({})