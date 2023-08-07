import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Pressable, ActivityIndicator, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'
import { USER_FILLED_IMG } from '../../../../configs/source'
import { useSelector } from 'react-redux'

const Followers_Followings = ({
    headertext,
    data,
    Loading
}) => {
    const navigation = useNavigation()





    const RenderProfile = ({ item, index }) => {
        const my_data = useSelector(state => state.my_data.my_profile_data)
        const isFollow = item?.UserRelationship?.sender_id == my_data?.id;
        const [follow, setFollow] = useState(isFollow)


        const handleFollow = () => {
            setFollow(p => !p)
        }


        return (
            <View style={styles.user_main_container}>
                <Pressable style={styles.left_container}>
                    <Image
                        source={item?.profile_pic ? { uri: item?.profile_pic } : USER_FILLED_IMG}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.txt}>{item?.nickname}</Text>
                        <Text style={styles.txt}>{item?.username}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={handleFollow} style={[styles.follow_button, { backgroundColor: follow ? 'rgba(0, 0, 0, 0.2)' : "red" }]}>
                    <Text style={[styles.follow_txt, { color: follow ? 'black' : '#fff' }]}>{follow ? 'unfollow' : 'follow'}</Text>
                </Pressable>
            </View>
        )
    }







    return (
        <SafeAreaView style={styles.main_container}>
            <Header headertext={headertext} />
            {Loading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} color={'black'} />
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={
                        ({ item, index }) => (
                            <RenderProfile item={item} index={index} />
                        )}
                />
            )}
            <StatusBar barStyle={'dark-content'} hidden={true} />

        </SafeAreaView>
    )
}

export default Followers_Followings

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    user_main_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 7
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#020202'
    },
    left_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        color: '#020202',
        fontSize: 14,

    },
    follow_button: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 35,
        borderRadius: 100

    },
    follow_txt: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    }
})