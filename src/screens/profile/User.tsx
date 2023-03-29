import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SPACING, TEXT, COLOR, BORDER } from '../../configs/styles/index';
import { AVATA_IMG, BOOKMARK_IMG } from '../../configs/source';
import { UserModel } from '../../models/User.model';
import { urlSourceMedia } from '../../utils/utils';
import { Container } from '../../components';
import { useNavigation } from '@react-navigation/native';

export type Props = {
  user: UserModel;
  showHeader: boolean;
};

const User: React.FC<Props> = ({ user, showHeader }) => {
  const navigation = useNavigation();
  const EditProfile = () => {
    return (
      <TouchableOpacity 
      onPress={() => navigation.navigate('SettingScreen')}
      >
        <View style={[styles.buttonStyle, { height: 50 }]}>
          <Text style={styles.txtButon}>Edit information</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const Follow = () => {
    return (
      <View
        style={[
          styles.buttonStyle,
          {
            height: 50,
            backgroundColor: COLOR.DANGER2,
            width: 150,
            borderColor: COLOR.DANGER2,
          },
        ]}>
        <Text style={[styles.txtButon, { color: COLOR.WHITE }]}>Follow</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: urlSourceMedia(user?.avatar) }}
        style={styles.avata}
      />
      <Text style={styles.txtUserName}>@{user?.name || 'USERNAME'}</Text>
      <View style={styles.containerFollow}>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user?.following || 0}</Text>
          <Text style={styles.txtTitleFollow}>Following</Text>
        </View>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user?.follower || 0}</Text>
          <Text style={styles.txtTitleFollow}>Follow</Text>
        </View>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user?.totalLike || 0}</Text>
          <Text style={styles.txtTitleFollow}>Likes</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        {!showHeader ? <EditProfile /> : <Follow />}
        <View style={[styles.buttonStyle, { height: 50 }]}>
          <Image source={BOOKMARK_IMG} style={styles.iconButton} />
        </View>
      </View>
      <View style={styles.containerBio}>
        <Text>Add bio</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.S4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avata: {
    width: 96,
    height: 96,
    borderRadius: 50,
  },
  txtUserName: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    marginTop: SPACING.S3,
  },
  containerFollow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: SPACING.S4,
  },
  itemFollow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 107,
    paddingHorizontal: 16,
  },
  txtAmountFollow: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    fontSize: 17,
  },
  txtTitleFollow: {
    ...TEXT.SMALL,
    color: COLOR.GRAY,
    fontSize: 12,
  },
  containerButton: {
    marginTop: SPACING.S4,
    flexDirection: 'row',
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: BORDER.SMALL,
    borderColor: COLOR.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.S1,
    paddingHorizontal: 11,
  },
  txtButon: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    fontSize: 16,
  },
  iconButton: {
    width: 18,
    height: 22,
  },
  containerBio: {
    marginTop: SPACING.S4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBio: {
    ...TEXT.REGULAR,
    color: COLOR.GRAY,
  },
});
