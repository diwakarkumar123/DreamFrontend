import { StyleSheet, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import CText from '../../components/CText';

import { AVATA_IMG, USER_FILLED_IMG } from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import CButton from '../CButton';
import { urlSourceMedia } from '../../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as userApi from '../../apis/userApi'

const ItemUser = ({ item }) => {
  const navigate = useNavigation();
  const { avatar, name, userName, follow, numVideo, _id } = item;
  const my_data = useSelector(state => state.my_data.my_profile_data)
  const isIdPresent = item?.Followers?.some(item => item.id === my_data?.id);

  const [isFollowing, setIsFollowing] = useState(isIdPresent)
  const handleFollow = async () => {
    const receiver_id = item?.id
    if (isFollowing) {
      try {
        setIsFollowing(false)
        const res = await userApi.unfollow({ receiver_id }, my_data?.auth_token)
      } catch (error) {
        console.log('error while unfollowing the user', error)
      }
    } else if (!isFollowing) {
      setIsFollowing(true)
      try {
        setIsFollowing(true)
        const res = await userApi.follow({ receiver_id }, my_data?.auth_token)
      } catch (error) {
        console.log('error while following the person', error)
      }
    }
  }

  return (
    <Pressable
      onPress={() =>
        navigate.navigate('UserProfileMainPage', { user: item })
      }>
      <View style={styles.container}>
        <Image source={avatar ? { uri: avatar } : USER_FILLED_IMG} style={styles.avatar} />
        <View style={styles.content}>
          <CText text={TEXT.STRONG} numberOfLines={1}>
            {name}
          </CText>
          <CText text={TEXT.SUBTITLE} numberOfLines={1} color={COLOR.GRAY}>
            @{userName}
          </CText>
          <CText text={TEXT.SUBTITLE} color={COLOR.GRAY}>
            {item?.Followers?.length || 0} followers - {item?.Following?.length || 0} Followings
          </CText>
        </View>
        <View>
          <CButton
            lable={isFollowing ? 'Following' : 'Follow'}
            onPress={handleFollow}
            width={100}
            backgroundColor={isFollowing ? 'grey' : 'red'}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: BORDER.PILL,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.S3,
  },
});
