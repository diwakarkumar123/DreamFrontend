import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChoosingAccountType from '../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'


const PremiumAccount = () => {
    const navigation = useNavigation()
  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BottomSheetSocialAuth")}}
        description={`With the Basic Account you will get \n the Basic Features in Premium suite it \n includes more than 30 Professional \n  Features`}
        HeaderText={"Premium Account"}
        descrptionHeader={"Hi, Welcome to Premium Account"}
    />
  )
}

export default PremiumAccount

const styles = StyleSheet.create({})