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
import {
  setBottomSheetLogout,
  setBottomSheetSettingProfile,
} from '../../store/indexSlice';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const BottomSettingProfile = () => {
  const dispatch = useDispatch();
  const bottomSheetSettingProfile = useSelector(
    state => state.index.bottomSheetSettingProfile,
  );
  const bottomSheetRef = useRef();
    const navigation = useNavigation()

  useEffect(() => {
    if (bottomSheetSettingProfile) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
    }
  }, [bottomSheetSettingProfile]);

  const handleLogout = () => {
    // console.log('cccaac');
    bottomSheetRef?.current?.scrollTo(0);
    dispatch(setBottomSheetLogout(true));
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onCloseBottomSheet={() => dispatch(setBottomSheetSettingProfile(false))}>
      <Container
        backgroundColor={COLOR.WHITE}
        zIndex={100}
        padding={SPACING.S4}
        paddingBottom={SPACING.S8}>
        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={null}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Icon
                source={USER_IMG}
                tintColor={COLOR.BLACK}
                width={26}
                height={26}
              />
              <CText marginLeft={SPACING.S2}>Tools for creators</CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={()=>{navigation.navigate('AccountScreen')}}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Icon source={SETTING_ICON} />
              <CText marginLeft={SPACING.S2}>Edit profile and setting</CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={()=>{navigation.navigate('MainInsightScreen')}}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Entypo name='area-graph' size={20}  />
              <CText marginLeft={SPACING.S2}>Analytics</CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={handleLogout}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Icon source={LOGOUT_ICON} />
              <CText marginLeft={SPACING.S2}>Log out</CText>
            </Container>
          </TouchableOpacity>
        </Container>
      </Container>
    </BottomSheet>
  );
};

export default React.memo(BottomSettingProfile);

const styles = StyleSheet.create({});
