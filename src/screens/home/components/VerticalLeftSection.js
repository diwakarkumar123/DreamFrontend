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
  DISC_IMG
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
import Share from 'react-native-share';
import { useTranslation } from 'react-i18next';
import { like } from '../../../apis/like.api'

const window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}



const VerticalLeftSection = React.forwardRef(
  ({ idVideo, comment = 0, author, share, likes, item }, ref) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation()
    const [num_like, setNum_like] = useState(likes?.length)
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const isIdPresent = likes?.some(item => item?.sender_id === my_data?.id);
    const [isLike, setIsLike] = useState(isIdPresent)
    const navigation = useNavigation();



    const handleShare = () => {
      if (my_data) {
        const shareOptions = {
          title: 'Share via',
          message: 'Check out this awesome video!',
          url: 'https://your-video-url.com',
        };

        Share.open(shareOptions)
          .then((res) => console.log('Shared successfully:', res))
          .catch((err) => console.log('Error sharing:', err));
      } else {
        dispatch(setModalSignIn(true))
      }
    };




    const ItemVertical = ({ source, text, tinColor, onPress = null }) => {
      return (
        <Container marginBottom={SPACING.S4} alignItems="center">
          <Icon
            source={source}
            width={33}
            height={33}
            tintColor={tinColor}
            onPress={onPress}
          />
          <CText color={COLOR.WHITE}>{text}</CText>
        </Container>
      );
    };


    // function for displaying the comment sections
    const handleShowComment = useCallback(() => {
      if (my_data) {
        dispatch(setIsShowComment(true));
        dispatch(setCurrentComment(idVideo));
      } else {
        dispatch(setModalSignIn(true))

      }
    }, [dispatch, idVideo]);



    const handleShowBottomSheetSignIn = useCallback(() => {
      // dispatch(setBottomSheetSignIn(true));
    }, []);


    // FUNCTION FOR HANDELING LIKING AND UNLKING THE VIDEO
    const handleLike = async () => {
      const video_id = item?.id;
      const reciever_id = item?.user_id;
      const data = { video_id, reciever_id, unlike: false }

      if (my_data) {
        if (isLike) {
          setIsLike(false)
          console.log('unliking called')
          setNum_like(p => p - 1)
          like({ video_id, reciever_id, unlike: true }, my_data?.auth_token)
            .then((r) => {
              console.log(r)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          setIsLike(true)
          setNum_like(p => p + 1)
          like(data, my_data?.auth_token)
            .then((r) => {
            })
            .catch((err) => {
            })
        }
      } else {
        dispatch(setModalSignIn(true))
      }
    }


    return (
      <Container position="absolute" right={SPACING.S2} bottom={window.width * 0.32}>
        <Container alignItems="center" marginBottom={SPACING.S4} >

          {!isLike && <ItemVertical
            source={HEART_IMG}
            text={num_like || 0}
            onPress={handleLike}
          />}
          {isLike && <ItemVertical
            source={HEART_TRUE_IMG}
            onPress={handleLike}
            text={num_like || 0}
          />}

        </Container>

        <Container marginBottom={SPACING.S4} alignItems="center">
          <ItemVertical
            source={COMMENT_ICON_IMG}
            width={50}
            height={50}
            text={comment}
            onPress={handleShowComment}
          />
        </Container>

        <Container marginBottom={SPACING.S4} alignItems="center">
          <ItemVertical
            source={REPLY_FILLED_IMG}
            width={60}
            height={60}
            text={share}
            tinColor="#f7f7f7"
            onPress={handleShare}
          />
        </Container>



        {/* <Container
          marginBottom={SPACING.S5}
          alignItems="center"
          borderRadius={BORDER.PILL}
          borderColor={COLOR.BLACK}
          borderWidth={0}>
          <Icon
            source={{ uri: `https://dreamlived.com/mobileapp_api//${author}` }}
            width={50}
            height={50}
            borderRadius={BORDER.PILL}
            onPress={handleClickAvatar}
          />
          <Container
            position="absolute"
            bottom={-10}
            width={80}
            height={80}
            borderRadius={BORDER.PILL}
            justifyContent="center"
            alignItems="center">
            <Icon
              source={QUEEN_ICON}
              width={80}
              height={80}
            />
          </Container>
          <Container
            position="absolute"
            bottom={-11}
            backgroundColor={COLOR.DANGER2}
            width={22}
            height={22}
            borderRadius={BORDER.PILL}
            justifyContent="center"
            alignItems="center">
            <CText color={COLOR.WHITE} fontSize={18}>
              +
            </CText>
          </Container>
        </Container> */}
        {/* <Container marginBottom={40} alignItems="center">
          <Icon
            source={DIAMOND_ICON}
            width={60}
            height={60}
            // onPress={onPress}
          />
          <Text style={{fontSize: 20, color: 'white', fontWeight: '500', marginTop: -10}}>20</Text>
        </Container> */}

        {/* <Container alignItems="center">
          <ItemVertical
            source={HEART_IMG}
            text={19}
            onPress={() => handleClickHeart(false)}
          />
          <Animated.View style={[styles.iconHeart, heartStyle]}>
            <Icon
              source={HEART_TRUE_IMG}
              width={'100%'}
              height={'100%'}
              onPress={() => handleClickHeart(false)}
            />
          </Animated.View>
        </Container> */}
        {/* <ItemVertical
          source={COMMENT_ICON_IMG}
          text={20}
          onPress={handleShowComment}
        /> */}
        {/* <ItemVertical
          source={BOOKMARK_FILLED_IMG}
          text={'25'}
          tinColor="#f7f7f7"
          onPress={handleShowBottomSheetSignIn}
        /> */}
        {/* <ItemVertical
          source={REPLY_FILLED_IMG}
          text={'25'}
          tinColor="#f7f7f7"
        /> */}
        {/* <ItemVertical
          source={DISC_IMG}
          text={'music'}
          // tinColor="#f7f7f7"
        />  */}
      </Container>
    );
  },
);

export default React.memo(VerticalLeftSection);

const styles = StyleSheet.create({
  iconHeart: {
    position: 'absolute',
    width: 33,
    height: 33,
    top: -1,
  },
});
