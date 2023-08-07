import { FlatList, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer, notionists, croodles, personas } from '@dicebear/collection';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { useNavigation } from '@react-navigation/native';
import { getAvatar } from '../../../../apis/avatarApi';
import {updateProfile} from '../../../../apis/userApi'
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast'
import {update_profile_pic} from '../../../../store/my_dataSlice.js'


const { width, height } = Dimensions.get('window')

const Avatar = () => {
    const [select_avatar, setSelect_avatar] = useState({})
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const [loaded_avatar, setLoaded_avatar] = useState([])
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const dispatch = useDispatch()

    const memoizedAvatar = useMemo(async () => {
        const result = await getAvatar()
        return result.data.payload;
    }, []);

    useEffect(() => {
        memoizedAvatar.then((avatarData) => {
            setLoading(false);
            setLoaded_avatar(avatarData);
        });
    }, [memoizedAvatar])


    const RenderItem = ({ item, index }) => {
        const uri = `https://dpcst9y3un003.cloudfront.net/${item.avatar_url}`;

        return (
            <TouchableOpacity
                onPress={() => { setSelect_avatar(item) }}
                style={[styles.avatar, { borderWidth: select_avatar.id - 1 === index ? 1 : 0 }]}>

                <Image
                    source={{ uri: uri }}
                    style={styles.avatar_image}
                />
            </TouchableOpacity>
        )
    }


    const handleAvatarSave = () => {
        const value = `https://dpcst9y3un003.cloudfront.net/${select_avatar?.avatar_url}`
        const name = 'profile_pic'
        const data = {
            name, value
        }
        updateProfile(my_data?.auth_token, data)
            .then((res) => {
                navigation.goBack()
                Toast.show(res.message, Toast.SHORT)
                dispatch(update_profile_pic(value))
            })
            .catch((err) => {
                console.log(err.message)
            })
    };


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            width: width
        }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Avatar
                </Text>
                <TouchableOpacity onPress={handleAvatarSave}>
                    <Text style={[styles.headerText, { color: 'red' }]}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                {!loading && <FlatList
                    data={loaded_avatar}
                    numColumns={4}
                    // onEndReached={() => { setFetch_more_data(p => !p) }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={24}
                    // contentContainerStyle={{
                    //     width: width,
                    //     justifyContent: 'space-between'
                    // }}
                    renderItem={({ item, index }) => (
                        <RenderItem item={item} index={index} />
                    )}
                />}

                {loading && <FlatList
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    numColumns={4}
                    renderItem={({ item, index }) => (
                        <SkeletonContent
                            containerStyle={styles.avatar}
                            isLoading={loading}
                            keyExtractor={(item, index) => index.toString()}
                            layout={[
                                { key: 'title', width: 70, height: 70, },
                            ]}
                        ></SkeletonContent>
                    )}
                />}

            </View>
        </SafeAreaView>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
    },
    avatar: {
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 70,
        height: 70,
        borderColor: 'red',
        padding: 2
    },
    avatar_image: {
        width: 65,
        height: 65,

    }
});
