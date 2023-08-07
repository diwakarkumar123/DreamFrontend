import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useImperativeHandle, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Container, CText, Icon } from '../../../components';
import {
  BOOKMARK_FILLED_IMG,
  COMMENT_ICON_IMG,
  HEART_IMG,
  HEART_TRUE_IMG,
  REPLY_FILLED_IMG,
  MUSIC_ICON_IMG,
  GIFT_ICON,
  QUEEN_ICON,
  DIAMOND_ICON,
  DISC_IMG,
  USER_FILLED_IMG
} from '../../../configs/source';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentComment,
  setIsShowComment,
} from '../../../store/mainScreenSlice';
import { KEY_STORAGE, SERVER_DOMAIN } from '../../../constants/constants';
import * as likeApi from '../../../apis/like.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { urlSourceMedia } from '../../../utils/utils';
import { setModalSignIn } from '../../../store/indexSlice';
import { Image } from 'react-native-svg';
import { useTranslation } from 'react-i18next';




const window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}





const VerticalSecction = React.forwardRef(
  ({ idVideo, like = 0, comment = 0, author, onGiftPress, diamond_value, user }, ref) => {
    const dispatch = useDispatch();
    const [amountLike, setAmountLike] = useState(Number(like));
    const { t, i18n } = useTranslation()
    const navigation = useNavigation();
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const heartValue = useSharedValue(0);

    const heartStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: heartValue.value }],
      };
    }, []);

    const handleClickHeart = useCallback(
      async doubleTap => {
        if (doubleTap && heartValue.value !== 0) {
        } else {
          heartValue.value =
            heartValue.value === 0
              ? withTiming(1, {
                duration: 800,
                easing: Easing.elastic(2),
              })
              : withTiming(0, {
                duration: 200,
                easing: Easing.linear,
              });
        }
        const currentAmountLike =
          doubleTap && heartValue.value !== 0
            ? amountLike
            : heartValue.value < 0.3
              ? amountLike + 1
              : amountLike === 0
                ? 0
                : amountLike - 1;

        try {
          dispatch(setModalSignIn(true));
          const TOKEN = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);

          if (currentAmountLike > amountLike) {
            await likeApi.like(idVideo, 'like', TOKEN);
          } else {
            await likeApi.like(idVideo, 'dislike', TOKEN);
          }
        } catch (error) {
          console.log(error);
          dispatch(setModalSignIn(true));
        }
        setAmountLike(currentAmountLike);
      },
      [heartValue, amountLike, idVideo, dispatch],
    );

    useImperativeHandle(ref, () => ({
      handleClickHeart: doubleTap => {
        handleClickHeart(doubleTap);
      },
    }));

    const ItemVertical = ({ source, text, tinColor, onPress = null, }) => {
      return (
        <Container marginBottom={SPACING.S4} alignItems="center">
          <Icon
            source={source}
            width={32}
            height={32}
            tintColor={tinColor}
            onPress={onGiftPress}
          />
          <CText color={COLOR.WHITE}>{text}</CText>
        </Container>
      );
    };

    const handleClickAvatar = () => {
      if (my_data) {
        navigation.navigate('UserProfileMainPage', { user });
      } else {
        dispatch(setModalSignIn(true))
      }
    };

    const handleShowComment = useCallback(() => {
      dispatch(setIsShowComment(true));
      dispatch(setCurrentComment(idVideo));
    }, [dispatch, idVideo]);

    const handleShowBottomSheetSignIn = useCallback(() => {
      // dispatch(setBottomSheetSignIn(true));
    }, []);

    return (
      <Container position="absolute" left={SPACING.S4} bottom={window.width * 0.3}>
        <Container
          marginBottom={SPACING.S5}
          alignItems="center"
          borderRadius={BORDER.PILL}
          borderColor={COLOR.BLACK}
          borderWidth={0}>
          <Icon
            source={user?.profile_pic ? { uri: user?.profile_pic } : USER_FILLED_IMG}
            width={50}
            height={50}
            borderRadius={BORDER.PILL}
            backgroundColor={'#fff'}
            onPress={handleClickAvatar}

          />
          <Container
            position="absolute"
            bottom={-10}
            width={70}
            height={70}
            borderRadius={BORDER.PILL}
            justifyContent="center"
            alignItems="center">
            <Icon
              source={QUEEN_ICON}
              width={75}
              height={75}
              onPress={handleClickAvatar}
              zIndex={1000}
            />
          </Container>

        </Container>

        <Container marginBottom={SPACING.S5} alignItems="center">
          <Icon
            source={GIFT_ICON}
            width={50}
            height={50}
            onPress={onGiftPress}
          />
          <Text style={{ fontSize: 16, color: 'white', fontWeight: '500' }}>{t('gift')}</Text>
        </Container>



        <Container marginBottom={40} alignItems="center">
          <Icon
            source={DIAMOND_ICON}
            width={50}
            height={50}
          // onPress={onPress}
          />
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontWeight: '500',
              marginTop: -10
            }}>{diamond_value || 0}</Text>
        </Container>

      </Container>
    );
  },
);

export default React.memo(VerticalSecction);

const styles = StyleSheet.create({
  iconHeart: {
    position: 'absolute',
    width: 33,
    height: 33,
    top: -1,
  },
});
