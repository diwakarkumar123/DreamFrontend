import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import CText from '../CText';
import Container from '../Container';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import CInput from '../CInput';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON,
  USER_IMG,
} from '../../configs/source';
import * as authApi from '../../apis/auth.api';
import ModalLoading from '../modal/ModalLoading';
import Animated, { FadeIn, FadeOut, withRepeat } from 'react-native-reanimated';
import auth, { firebase } from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {add_my_profile_data, addIsLogin } from '../../store/my_dataSlice'
import { useNavigation } from '@react-navigation/native';
import { setModalSignIn, setBottomSheetLogout, setBottomSheetSignIn } from '../../store/indexSlice';
import axios from 'axios';
import { createAvatar } from '@dicebear/core';
import { adventurer, notionists, croodles, personas } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';


const save_data = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};



const BottomSheetSignUp = ({ setCurrentForm, backToScreenSocial, handleClickClose }) => {
  const dispatch = useDispatch()
  const [txtName, setTxtName] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [isFaliure_invalid, setIsFailure_invalid] = useState(false)
  const navigation = useNavigation()


  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(false));
    dispatch(setBottomSheetLogout(false))
  }, [dispatch]);


  const create_avatar = (seed)=>{
    const avatar = createAvatar(personas, {
      "seed": seed
    });
    const svg = avatar.toString();
   return svg;
  }


  
  const handleClickSignUp = () => {
    setIsEmpty(false);
    setIsFailure(false);
    setShowModal(true);
    setIsFailure_invalid(false)

    setTimeout(async () => {
      try {
        if (!txtName || !txtEmail || !txtPassword) {
          return setIsEmpty(true);
        }
        auth()
        .createUserWithEmailAndPassword(txtEmail, txtPassword)
        .then(async(res)=>{
          const name = txtName;
          const email = res.user.email;
          const firebase_uid = res.user.uid;
          // const profile_pic = await create_avatar(firebase_uid)
          const profile_pic = ''
          console.log(res.user)
          const result = authApi.signUp(name, email, firebase_uid, profile_pic)
          result.then((res)=>{
            console.log(res.data)
            if(res.data.message == 'user created successfully'){
              dispatch(add_my_profile_data(res.data.payload))
              save_data("user", res.data.payload)
              navigation.navigate('Me')
              dispatch(addIsLogin(true))
              // handleClickClose()
              // dispatch(setModalSignIn(false));
              // dispatch(setBottomSheetSignIn(false));
              // dispatch(setBottomSheetLogout(false))
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        })
        .catch((error)=>{
          if(error.code == 'auth/invalid-email'){
            setIsFailure_invalid(true)
            console.log("email are badly formated")
          }
          if(error.code == 'auth/email-already-in-use'){
            setIsFailure(true)
            console.log("email already in use")
          }
        })
      } catch (error) {
        console.log('sing up erro ',error);
        // setIsFailure(true);
      } finally {
        setShowModal(false);
      }
    }, 8000);
  };









  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300).delay(300)}>
      <Container
        backgroundColor={COLOR.WHITE}
        justifyContent="center"
        alignItems="center"
        >
        {showModal && <ModalLoading visible={showModal} />}
        <CText text={TEXT.H1} textAlign="center" marginVertical={SPACING.S1}>
          Dream
        </CText>
        <CText
          text={TEXT.H3}
          textAlign="center"
          marginVertical={SPACING.S2}
          color={COLOR.GRAY}
          marginBottom={SPACING.S4}
          
          >
          Continue with email and password
        </CText>
        <CInput
          placeholder="Name"
          iconLeft={USER_IMG}
          onChangeText={text => setTxtName(text)}
        />
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
        <Container padding={SPACING.S2}>
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
          borderRadius={BORDER.SMALL}
          padding={SPACING.S3}
          backgroundColor={COLOR.DANGER2}
          width="100%">
          <TouchableOpacity onPress={handleClickSignUp}>
            <CText
              color={COLOR.WHITE}
              text={TEXT.STRONG}
              width="100%"
              textAlign="center"
              fontSize={16}>
              Register
            </CText>
          </TouchableOpacity>
        </Container>
        <Container padding={SPACING.S2} width="100%" paddingTop={SPACING.S4}>
        <TouchableOpacity onPress={() => setCurrentForm(0)}>
        <CText
            textAlign="center"
            onPress={() => {
              setCurrentForm(0);
              backToScreenSocial();
            }}>
            Continue with another way
          </CText>
          </TouchableOpacity>
        </Container>
        {/* for back social screen */}
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignUp;

const styles = StyleSheet.create({});
