import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChoosingAccountType from '../../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'
import {SIGNUP_USER, BUSINESS_ACCOUNT_HAND_SAKE} from '../../../../../configs/source'



const BusinessAccount3 = () => {
    const navigation = useNavigation()
  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BusinessAccount")}}
        description={`You can obtain a commented account in one of the two \n Ways:- \n 1. 5% discount on each Sale Without Promoting \n the account \n 2. Monthly Subscription of $450 24 uh everyday \n Promotion ans Premium account features`}
        HeaderText={"Business Account"}
        descrptionHeader={"How do i get the Possibility to own a Business account?"}
        image={BUSINESS_ACCOUNT_HAND_SAKE}
    />
  )
}

export default BusinessAccount3

const styles = StyleSheet.create({})