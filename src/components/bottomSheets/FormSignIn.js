import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import CText from '../CText';
import Container from '../Container';
import { COLOR, SPACING, TEXT, BORDER } from '../../configs/styles';
import CInput from '../CInput';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON,
} from '../../configs/source';
import * as authApi from '../../apis/auth.api';
import ModalLoading from '../modal/ModalLoading';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';
import auth from '@react-native-firebase/auth'
import {save_data} from '../../utilis2/AsyncStorage/Controller'
import {addIsLogin, add_my_profile_data} from '../../store/my_dataSlice'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setModalSignIn, setBottomSheetSignIn, setBottomSheetLogout } from '../../store/indexSlice';

const BottomSheetSignIn = ({ handleClickClose }) => {
  const [txtEmail, setTxtEmail] = useState(null);
  const [txtPassword, setTxtPassword] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const [isEmpty, setIsEmpty] = useState(false)
  const [isFailure, setIsFailure] = useState(false)
  const [isFaliure_invalid, setIsFailure_invalid] = useState(false)
  const navigation = useNavigation()
  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(false));
    dispatch(setBottomSheetLogout(false))
  }, [dispatch]);




  const handleClickLogin = () => {
    setIsEmpty(false);
    setIsFailure(false);
    setIsFailure_invalid(false)
    setShowModal(true);
    setTimeout(async () => {
      if(txtEmail && txtPassword){
        try {
          auth()
          .signInWithEmailAndPassword(txtEmail, txtPassword)
          .then((res)=>{
            const result = authApi.signIn(res.user.email)
            result.then((res)=>{
                dispatch(add_my_profile_data(res.data.payload))
                save_data("user", res.data.payload)
                dispatch(addIsLogin(true))
                dispatch(setModalSignIn(false));
                dispatch(setBottomSheetSignIn(false));
                dispatch(setBottomSheetLogout(false))
                handleClickClose()
            })
            .catch((err)=>{
              console.log("server error:", err)
            })
          })
          .catch((err)=>{
            console.log("error generated while login from firebase:", err)
          })
        } catch (error) {
          Alert.alert(error.message);
        } finally {
          setShowModal(false);
        }
      } else{
        setIsEmpty(true)
        setShowModal(false)
      }
    }, 4000);
  };

  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300).delay(300)}>
      <Container
        backgroundColor={COLOR.WHITE}
        justifyContent="center"
        alignItems="center">
        {showModal && (
          <ModalLoading visible={showModal} setVisible={setShowModal} />
        )}
        <CText text={TEXT.H1} textAlign="center" marginVertical={SPACING.S2}>
          Dream
        </CText>
        <CText
          text={TEXT.H3}
          textAlign="center"
          marginVertical={SPACING.S2}
          color={COLOR.GRAY}
          marginBottom={SPACING.S10}>
          Log in
        </CText>
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            iconLeft={MAIL_OUTLINE_ICON_IMG}
            placeholder="Email"
            onChangeText={text => setTxtEmail(text)}
            keyboardType="email-address"
          />
        </Container>
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            secureTextEntry={secureTextEntry}
            placeholder="Password"
            iconLeft={LOCK_OUTLINE_ICON}
            onChangeText={text => setTxtPassword(text)}
            iconRight={secureTextEntry ? REMOVE_EYE_ICON : CLOSE_EYE_ICON}
            onPressIconRight={() => setSecureTextEntry(!secureTextEntry)}
          />
        </Container>

        <Container padding={SPACING.S3}>
          <CText color={COLOR.DANGER}>
            {isEmpty
              ? 'You must enter all fields'
              : isFailure
              ? 'Email already exists'
              : isFaliure_invalid 
              ? 'Email are badly formated'
              : ''
            }
          </CText>
        </Container>

        <Container
          marginTop={SPACING.S5}
          borderRadius={BORDER.SMALL}
          padding={SPACING.S3}
          backgroundColor={COLOR.DANGER2}
          width="100%">
          <TouchableOpacity onPress={handleClickLogin}>
            <CText
              color={COLOR.WHITE}
              text={TEXT.STRONG}
              width="100%"
              textAlign="center"
              fontSize={16}>
              Log in
            </CText>
          </TouchableOpacity>
        </Container>
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignIn;

const styles = StyleSheet.create({});
