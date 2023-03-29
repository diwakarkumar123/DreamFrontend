import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { ApiService, ServerError } from '../../apis/api.service';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { KEY_STORAGE } from '../../constants/constants';
import { useAppDispatch } from '../../store/hook';
import { setCurrentUser } from '../../store/indexSlice';
import CInput from '../CInput';
import Container from '../Container';
import CText from '../CText';
import ModalLoading from '../modal/ModalLoading';

const BottomSheetSignIn = ({ handleClickClose, setCurrentForm, backToScreenSocial }: any) => {
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>();
  const dispatch = useAppDispatch();
  const handleClickLogin = async () => {
    setError(undefined);
    setShowModal(true);
    if (!txtEmail || !txtPassword) {
      return setError('You must enter all fields');
    }

    const response = await ApiService.login({ email: txtEmail, password: txtPassword });
    if (response instanceof ServerError) {
      setError(response.getError());
    }
    else {
      await AsyncStorage.setItem(KEY_STORAGE.USER, JSON.stringify(response));
      dispatch(setCurrentUser(response));
      handleClickClose();
    }
    setShowModal(false);
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
            onChangeText={(text: string) => setTxtEmail(text)}
            keyboardType="email-address"
            placeholderTextColor={COLOR.GRAY}
          />
        </Container>
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            secureTextEntry={secureTextEntry}
            placeholder="Password"
            iconLeft={LOCK_OUTLINE_ICON}
            onChangeText={(text: string) => setTxtPassword(text)}
            iconRight={secureTextEntry ? REMOVE_EYE_ICON : CLOSE_EYE_ICON}
            onPressIconRight={() => setSecureTextEntry(!secureTextEntry)}
            placeholderTextColor={COLOR.GRAY}
          />
        </Container>
        {error && (
          <Container padding={SPACING.S3}>
            <CText color={COLOR.DANGER}>
              {error}
            </CText>
          </Container>
        )}
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

        <Container padding={SPACING.S2} width="100%" paddingTop={SPACING.S10}>
          <TouchableOpacity onPress={() => setCurrentForm(0)}>
            <CText
              textAlign="center"
              onPress={() => {
                setCurrentForm(0);
                backToScreenSocial();
              }}>
              Sign in another way
            </CText>
          </TouchableOpacity>
        </Container>
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignIn;

const styles = StyleSheet.create({});
