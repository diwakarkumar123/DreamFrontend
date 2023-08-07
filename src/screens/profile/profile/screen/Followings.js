import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Followers_Followings from '../components/Followers_Followings'
import { useRoute } from '@react-navigation/native'
import { getFollowingsDetails } from '../../../../apis/userApi'


const Followings = () => {
    const route = useRoute()
    const user_id = route?.params?.user_id
    const [data, setData] = useState('')
    const [Loading, setLoading] = useState(true)


    const getDetails = () => {
        setLoading(true)
        getFollowingsDetails(user_id)
            .then((r) => {
                setData(r.Following)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }
    useEffect(()=>{
        getDetails()
    }, [])


    

    return (
        <Followers_Followings
            headertext={"Followings"}
            data={data}
            Loading={Loading}
            setLoading={setLoading}
        />
    )
}

export default Followings

const styles = StyleSheet.create({})