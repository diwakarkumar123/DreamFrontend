import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Body from '../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'

const { width, height } = Dimensions.get('window')

const SelectingGender = () => {
  const navigation = useNavigation()
  const [male, setMale] = useState(true)
  const [female, setFemale] = useState(true)
  const [notPrefer, setNotPrefer] = useState(true)

  const handleConfirm = () => {

  }

  return (
    <Body>
      <Body applyPadding={false} style={styles.header}>
        <Body applyPadding={false} style={styles.leftHeader}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <AntDesign name='arrowleft' size={20} />
          </TouchableOpacity>
          <Text style={[styles.headerText, { marginTop: 0 }]}>
            Gender
          </Text>
        </Body>
        <TouchableOpacity
          onPress={handleConfirm}
        >
          <Text style={[styles.headerText, { color: 'rgba(26, 148, 236, 1)' }]}>Compl...</Text>
        </TouchableOpacity>
      </Body>

      <View style={{ width: width, paddingHorizontal: width * 0.2 }}>
        <View style={styles.gender_selection}>
          <Text>Male</Text>
          <CheckBox
            value={male}
            onValueChange={(val) => { setMale(val) }}
            tintColors={{true: 'red', false: 'black'}}
          />
        </View>

        <View style={styles.gender_selection}>
          <Text>Female</Text>
          <CheckBox
            value={female}
            onValueChange={(val) => { setFemale(val) }}
            tintColors={{true: 'red', false: 'black'}}
          />
        </View>

        <View style={styles.gender_selection}>
          <Text>Not Prefer</Text>
          <CheckBox
            value={notPrefer}
            onValueChange={(val) => { setNotPrefer(val) }}
            tintColors={{true: 'red', false: 'black'}}
          />
        </View>

      </View>
    </Body>
  )
}

export default SelectingGender

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 7,
    borderColor: 'rgba(217, 217, 217, 0.4)',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 25,
    marginTop: 5
  },
  leftHeader: {
    flexDirection: 'row',
  },
  gender_selection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  }
})