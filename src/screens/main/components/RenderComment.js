import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import { DateTime } from 'luxon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HEART_IMG, HEART_TRUE_IMG, VIDEO_CLOCKWISE, ROSE } from '../../../configs/source'
import * as commentApi from '../../../apis/comment.api'
import Toast from 'react-native-simple-toast'
import { useSelector, useDispatch } from 'react-redux';
import { setShowReply, setCommentId } from '../../../store/mainScreenSlice'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('screen')

const RenderComment = ({ item, index }) => {
    const dispatch = useDispatch()
    function formattedDate(dateString) {
        let dt = DateTime.fromISO(dateString, { zone: 'utc' });
        let localDt = dt.toLocal();
        return localDt.toFormat('dd.MM.yyyy hh:mm a');
    }
    const my_data = useSelector(state => state.my_data.my_profile_data)

    const isIdAvailable = (id) => { return item?.comment_likes?.some((item) => item.sender_id === id); };
    const [like, setLike] = useState(isIdAvailable(my_data?.id))
    const [no_of_like, setNo_of_like] = useState(item?.likes)
    const [isDislike, setIsDislike] = useState(false)

    const handleLike = () => {
        const token = my_data?.auth_token;
        let video_id = item?.video_id, reciever_id = null, comment_id = item?.id;
        let data = {
            video_id, reciever_id, comment_id
        }
        if (!like) {
            setLike(true)
            setNo_of_like(p => p + 1)
            commentApi.likeComment(data, token)
                .then((r) => {

                })
                .catch((err) => {
                    Toast.show('Error', Toast.LONG)
                    setLike(false)
                    setNo_of_like(p => p - 1)
                })

        } else {
            setLike(false)
            setNo_of_like(p => p - 1)
            commentApi.unlikeComment(data, token)
                .then((r) => {

                })
                .catch((err) => {
                    Toast.show('Error', Toast.LONG)
                    setLike(true)
                    setNo_of_like(p => p + 1)
                })

        }
    }


    const handleReply = () => {
        dispatch(setShowReply(true))
        dispatch(setCommentId(item?.id))
    }


    return (
        <View style={styles.main_container}>
            <View style={styles.top_container}>
                <Pressable>
                    <Image
                        source={{ uri: item?.user?.profile_pic }}
                        style={styles.profile_image} />
                </Pressable>
                <View style={styles.username_view}>
                    <Text style={styles.username_text}>@{item?.user?.username}</Text>
                    <Text style={styles.text}>{item?.comment_data}</Text>
                </View>
            </View>

            <View style={styles.botton_container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable>
                        <FontAwesome5 name='copy' color={'rgba(0, 0, 0, 0.7)'} size={20} style={{ backfaceVisibility: 'visible' }} />
                    </Pressable>
                    <Text style={styles.date_text}>{formattedDate(item?.updatedAt)}</Text>
                </View>

                <View style={styles.reply_button}>
                    <Pressable onPress={handleReply}>
                        <MaterialCommunityIcons name='reply' size={30} />
                    </Pressable>

                    <View style={styles.like_info_side}>
                        <Pressable onPress={handleLike} style={styles.likes}>
                            <Image
                                source={like ? HEART_TRUE_IMG : HEART_IMG}
                                style={styles.heart_img}
                            />
                            <Text style={styles.text_of_no}>{no_of_like}</Text>
                        </Pressable>

                        <Pressable onPress={handleLike} style={styles.likes}>
                            <Image
                                source={ROSE}
                                style={styles.heart_img}
                            />
                            <Text style={styles.text_of_no}>{no_of_like}</Text>
                        </Pressable>

                        <Pressable onPress={handleLike} style={styles.likes}>
                            <AntDesign name={isDislike ? 'dislike2' : 'dislike1'} size={20} color={'#48a5f7'} style={{ transform: [{ scaleX: -1 }] }} />
                            <Text style={styles.text_of_no}>{no_of_like}</Text>
                        </Pressable>
                    </View>


                </View>

            </View>

            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={item?.replies}
                    renderItem={({ item, index }) => (
                        <View style={styles.nested_flatlist}>
                            <View style={styles.top_container}>
                                <Pressable>
                                    <Image
                                        source={{ uri: item?.user?.profile_pic }}
                                        style={styles.profile_image} />
                                </Pressable>
                                <View style={styles.username_view}>
                                    <Text style={styles.username_text}>@{item?.user?.username}</Text>
                                    <Text style={styles.text}>{item?.reply_message}</Text>
                                </View>
                            </View>
                            <View style={styles.botton_container}>
                                <Text style={styles.date_text}>{formattedDate(item?.updatedAt)}</Text>

                            </View>

                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default RenderComment

const styles = StyleSheet.create({
    main_container: {
        width: width,
        marginBottom: 30
        // backgroundColor: 'red'
    },
    profile_image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    text: {
        fontSize: 16,
        color: '#020202'

    },
    top_container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    username_view: {
        marginLeft: 10
    },
    botton_container: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        paddingLeft: 40,
        alignItems: 'flex-start'
    },
    reply_button: {
        flexDirection: 'row',
        // width: width * 0.5,
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 10
    },
    heart_img: {
        width: 20,
        height: 20
    },
    nested_flatlist: {
        flex: 1,
        marginLeft: width * 0.1,
        marginTop: 15,
    },
    date_text: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.9)',
        fontWeight: '600',
        marginLeft: 5
    },
    username_text: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '700'
    },
    likes: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    like_info_side: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text_of_no: {
        fontSize: 12,
        fontWeight: '900',
        color: '#020202'
    }
})