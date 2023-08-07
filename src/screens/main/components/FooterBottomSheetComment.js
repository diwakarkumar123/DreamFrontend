import { View, StyleSheet, Keyboard, Pressable, TextInput, } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Container from '../../../components/Container';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Icon from '../../../components/Icon';
import {
  AVATA_IMG,
  A_CONG_ICON_IMG,
  BUTTON_POST_COMMENT_ICON,
  EMOJI_ICON_IMG,
} from '../../../configs/source';
import CInput from '../../../components/CInput';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as commentApi from '../../../apis/comment.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../../constants/constants';
import { createComment } from '../../../apis/comment.api';
import { useSelector } from 'react-redux';

const FooterBottomSheetComment = ({ currentComment, setUpdate_comment }) => {
  const inputRef = useRef()
  const [txtComment, setTxtComment] = useState('');
  const marginRightInputValue = useSharedValue(0);
  const scaleButtonValue = useSharedValue(10);
  const marginRightInputStyle = useAnimatedStyle(() => {
    return { marginRight: withTiming(marginRightInputValue.value) };
  }, []);
  const scaleButtonStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: withTiming(scaleButtonValue.value) }] };
  }, []);
  const [heightKeyboardStatus, setHeightKeyboardStatus] = useState(25);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setHeightKeyboardStatus(p => p + e.endCoordinates.height + 15);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', e => {
      setHeightKeyboardStatus(25);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [heightKeyboardStatus]);

  useEffect(() => {
    if (txtComment?.length > 0) {
      marginRightInputValue.value = SPACING.S6;
      scaleButtonValue.value = 1;
    } else {
      marginRightInputValue.value = 0;
      scaleButtonValue.value = 0;
    }
  }, [txtComment, marginRightInputValue, scaleButtonValue]);

  const my_data = useSelector(state => state.my_data.my_profile_data)
  const showReply = useSelector(state => state.mainScreen.showReply);
  const comment_id = useSelector(state => state.mainScreen.comment_id)




  const handleSendButtonPress = () => {
    const token = my_data?.auth_token;
    const comment_data = txtComment;
    const video_id = currentComment;
    if (txtComment) {
      let data = {
        video_id,
        comment_data,
      }
      createComment(data, token)
        .then((r) => {
          setTxtComment('')
          setUpdate_comment(r)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const handleReplyComment = () => {
    const token = my_data?.auth_token;
    const reply_message = txtComment;
    const video_id = currentComment;
    const parent_comment_id = 1
    if (txtComment) {
      let data = {
        video_id,
        parent_comment_id,
        reply_message,
      }
      commentApi.replyComment(data, token)
        .then((r) => {
          console.log(r)
          setTxtComment('')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }


  const likeComment = () => {
    const token = my_data?.auth_token;
    const video_id = 1, receiver_id = 12, comment_id = 1;
    let data = { video_id, receiver_id, comment_id }
    commentApi.likeComment(data, token)
      .then((r) => {
        console.log(r.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const openKeyboard = useCallback(() => {
    if (showReply) {
      console.log('opening keyboard...')
      inputRef.current.focus()
    } else {
      console.log("input ref closed")
    }
  }, [showReply])

  useEffect(() => {
    if (showReply) {
      console.log('opening keyboard...')
      inputRef.current.focus()
      Keyboard
    } else {
      console.log("input ref closed")
    }
  }, [])



  return (
    <View style={[styles.main_container, {bottom: heightKeyboardStatus}]}>
      <Animated.View style={[styles.inputComment, marginRightInputStyle]}>
        <Container
          flexDirection="row"
          alignItems="center"
          backgroundColor={COLOR.setOpacity(COLOR.GRAY, 0.15)}
          borderRadius={BORDER.PILL}>
          <Container flexGrow={1} marginRight={SPACING.S4}>
            <TextInput
              placeholder={'Massage...'}
              placeholderTextColor={'#020202'}
              value={txtComment}
              onChangeText={text => setTxtComment(text)}
              style={styles.input}
              ref={inputRef}
              multiline={false}
            />
          </Container>
          <Container flexDirection="row" right={SPACING.S3}>
            <Icon
              source={EMOJI_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={22}
              height={22}
              marginLeft={SPACING.S3}
            />
             <Icon
              source={EMOJI_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={22}
              height={22}
              marginLeft={SPACING.S3}
            />
             <Icon
              source={EMOJI_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={22}
              height={22}
              marginLeft={SPACING.S3}
            />
             <Icon
              source={EMOJI_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={22}
              height={22}
              marginLeft={SPACING.S3}
            />
          </Container>

        </Container>
      </Animated.View>
      <Container right={SPACING.S2} position="absolute">
        <Animated.View style={scaleButtonStyle}>
          <Icon
            source={BUTTON_POST_COMMENT_ICON}
            width={30}
            height={30}
            onPress={showReply ? handleReplyComment : handleSendButtonPress}
          />
        </Animated.View>
      </Container>
    </View>
  );
};

export default FooterBottomSheetComment;

const styles = StyleSheet.create({
  inputComment: {
    flexGrow: 1,
    paddingLeft: SPACING.S1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: COLOR.setOpacity(COLOR.GRAY, 0.2 ),
    flex: 1,
    borderRadius: 1000,
    paddingHorizontal: 20,

  },
  main_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 1000,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1000
  }
});
