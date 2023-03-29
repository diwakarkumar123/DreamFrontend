import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { ApiService, Endpoints, ServerError } from '../../apis/api.service';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON,
  USER_IMG
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { UserModel } from '../../models/User.model';
import CInput from '../CInput';
import Container from '../Container';
import CText from '../CText';
import ModalLoading from '../modal/ModalLoading';

const BottomSheetSignUp = ({ setCurrentForm, backToScreenSocial }: any) => {
  const [txtName, setTxtName] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState<string>();

  const handleClickSignUp = async () => {
    setIsEmpty(false);
    setError(undefined);
    setShowModal(true);

    if (!txtName || !txtEmail || !txtPassword) {
      return setIsEmpty(true);
    }

    const response = await ApiService.post<{email: string, password: string, username: string}, UserModel>(Endpoints.SIGN_UP, { 
      email: txtEmail, password: txtPassword, username: txtName
    });

    console.log("response = ",response);
    if (response instanceof ServerError) {
      setError(response.getError());
    }
    else {
      setCurrentForm(1);
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
        {showModal && <ModalLoading visible={showModal} />}
        <CText text={TEXT.H1} textAlign="center" marginVertical={SPACING.S2}>
          Dream
        </CText>
        <CText
          text={TEXT.H3}
          textAlign="center"
          marginVertical={SPACING.S2}
          color={COLOR.GRAY}
          marginBottom={SPACING.S10}>
          Register
        </CText>
        <CInput
          placeholder="Name"
          iconLeft={USER_IMG}
          placeholderTextColor={COLOR.GRAY}
          onChangeText={text => setTxtName(text)}
        />
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            iconLeft={MAIL_OUTLINE_ICON_IMG}
            placeholder="Email"
            placeholderTextColor={COLOR.GRAY}
            onChangeText={text => setTxtEmail(text)}
            keyboardType="email-address"
          />
        </Container>
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            secureTextEntry={secureTextEntry}
            placeholder="Password"
            placeholderTextColor={COLOR.GRAY}
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
              : error ? error : ""
            }
          </CText>
        </Container>
        <Container
          marginTop={SPACING.S1}
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
        {/* for back social screen */}
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignUp;

const styles = StyleSheet.create({});
