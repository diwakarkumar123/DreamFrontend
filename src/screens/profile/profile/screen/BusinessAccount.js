import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChoosingAccountType from '../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'
import {SIGNUP_USER} from '../../../../configs/source'
import { useSelector } from 'react-redux'



const BusinessAccount = () => {
    const navigation = useNavigation()
    const my_data = useSelector(state => state.my_data.my_profile_data)

  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BottomSheetSocialAuth")}}
        description={`With the business Account, You will \n  get business features in Premium \n suite it includes more than 30 \n Professional Features `}
        HeaderText={"Business Account"}
        descrptionHeader={"Hello here to the business account"}
        image={my_data ? {uri: my_data?.profile_pic} : SIGNUP_USER}
    />
  )
}

export default BusinessAccount

const styles = StyleSheet.create({})