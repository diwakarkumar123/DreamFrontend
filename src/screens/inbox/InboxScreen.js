import { FlatList, StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatScreen from './screen/ChatScreen'
import { useNavigation } from '@react-navigation/native'
import ChatBackground from './ChatBackground'
import { useSelector } from 'react-redux'
import * as userApi from '../../apis/userApi'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../profile/profile/components/Header'
import SearchPeople from './component/SearchPeople'
import { USER_FILLED_IMG } from '../../configs/source'
import StarIcon from '../other_user/StarIcon'


const { width, height } = Dimensions.get('screen')

const InboxScreen = () => {
  const navigation = useNavigation()
  const my_data = useSelector(state => state.my_data.my_profile_data)
  const [data, setData] = useState('')


  const handleuser = async () => {
    try {
      const result = await userApi.getMyAllChatedPerson(my_data?.auth_token)
      const data = result?.uniqueUsers;
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleuser()
  }, [])

  const handleOnPress = (item) => {
    const user_data = item;
    navigation.navigate('ChatScreen', { user_data })
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header headertext={'Message'} />
      <SearchPeople />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => { handleOnPress(item) }}>
            <View style={styles.container}>
              <View>
                <Image
                  source={item?.profile_pic ? { uri: item?.profile_pic } : USER_FILLED_IMG}
                  style={styles.image}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.text}>{item?.nickname}</Text>
                <Text style={styles.text}>@{item?.username}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#020202'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    borderColor: '#020202'
  },
  container: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: 15
  }
})