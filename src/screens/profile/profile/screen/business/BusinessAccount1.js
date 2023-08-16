import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChoosingAccountType from '../../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'
import {SIGNUP_USER} from '../../../../../configs/source'



const BusinessAccount1 = () => {
    const navigation = useNavigation()
  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BusinessAccount2")}}
        description={`Earn a lot of customers Who are waiting to come \n to you to buy Your Products`}
        HeaderText={"Business Account"}
        descrptionHeader={"Do You want to sell Your Produncts in a \n live Stream?"}
        image={SIGNUP_USER}
    />
  )
}

export default BusinessAccount1

const styles = StyleSheet.create({})