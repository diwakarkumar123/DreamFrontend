import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChoosingAccountType from '../../ChoosingAccountType'
import { useNavigation } from '@react-navigation/native'
import {SIGNUP_USER} from '../../../../../configs/source'




const BusinessAccount2 = () => {
    const navigation = useNavigation()
  return (
    <ChoosingAccountType
        onPress={()=>{navigation.navigate("BusinessAccount3")}}
        description={`Yes, the business account includes Continuous Promotion On the Dream app 23 hours a day \n \n in addition to all the features of the Premium \n account`}
        HeaderText={"Business Account"}
        descrptionHeader={"Is there a free Promotion for a Business \n account?"}
        image={SIGNUP_USER}
    />
  )
}

export default BusinessAccount2

const styles = StyleSheet.create({})