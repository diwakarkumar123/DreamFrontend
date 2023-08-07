import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Followers_Followings from '../components/Followers_Followings'
import { useRoute } from '@react-navigation/native'
import { getFollowersDetails } from '../../../../apis/userApi'

const Followers = () => {
  const route = useRoute()
  const user_id = route?.params?.user_id
  const [data, setData] = useState('')
  const [Loading, setLoading] = useState(true)


  const getDetails = () => {
    setLoading(true)
    getFollowersDetails(user_id)
      .then((r) => {
        setData(r.Followers)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })

  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <Followers_Followings
      headertext={"Followers"}
      data={data}
      Loading={Loading}
      setLoading={setLoading}

    />
  )
}

export default Followers

const styles = StyleSheet.create({})