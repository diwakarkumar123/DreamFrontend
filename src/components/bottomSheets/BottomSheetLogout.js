import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomSheet from './BottomSheet';
import CText from '../CText';
import Icon from '../Icon';
import { LOGOUT_ICON, SETTING_ICON, USER_IMG } from '../../configs/source';
import Container from '../Container';
import { COLOR, SPACING } from '../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomSheetLogout, setBottomSheetSignIn } from '../../store/indexSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { addIsLogin, add_my_profile_data } from '../../store/my_dataSlice';

const BottomSheetLogout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const bottomSheetLogout = useSelector(state => state.index.bottomSheetLogout);
  const bottomSheetRef = useRef();

  useEffect(() => {
    if (bottomSheetLogout) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
    }
  }, [bottomSheetLogout]);

  const handleCancleLogout = () => {
    bottomSheetRef?.current?.scrollTo(0);
    dispatch(addIsLogin(false))
    dispatch(add_my_profile_data(null))
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Home');
      handleCancleLogout();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onCloseBottomSheet={() => dispatch(setBottomSheetLogout(false))}>
      <Container
        backgroundColor={COLOR.WHITE}
        zIndex={100}
        paddingTop={SPACING.S4}>
        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={null}>
            <Container
              paddingVertical={SPACING.S3}
              justifyContent="center"
              flexDirection="row"
              alignItems="center">
              <CText
                marginLeft={SPACING.S2}
                textAlign="center"
                color={COLOR.GRAY}>
                Are you sure you want to log out?
              </CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={() =>{
            dispatch(setBottomSheetSignIn(true))
            handleCancleLogout();
          }
          }>
            <Container
              paddingVertical={SPACING.S3}
              justifyContent="center"
              flexDirection="row"
              alignItems="center">
              <CText marginLeft={SPACING.S2} textAlign="center">
                Switch accounts
              </CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={handleLogout}>
            <Container
              paddingVertical={SPACING.S3}
              justifyContent="center"
              flexDirection="row"
              alignItems="center">
              <CText
                marginLeft={SPACING.S2}
                textAlign="center"
                color={COLOR.DANGER}>
                Log out
              </CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <Container height={10} backgroundColor={COLOR.LIGHT_GRAY} />
          <TouchableOpacity onPress={handleCancleLogout}>
            <Container
              paddingVertical={SPACING.S3}
              justifyContent="center"
              flexDirection="row"
              alignItems="center">
              <CText
                marginLeft={SPACING.S2}
                textAlign="center"
                color={COLOR.GRAY}>
                Cancel
              </CText>
            </Container>
          </TouchableOpacity>
        </Container>
      </Container>
    </BottomSheet>
  );
};

export default React.memo(BottomSheetLogout);
