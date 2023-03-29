import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { LOGO_IMG } from '../../configs/source';
import { COLOR } from '../../configs/styles/index';
import { KEY_STORAGE } from '../../constants/constants';
import { UserModel } from '../../models/User.model';
import { useAppDispatch } from '../../store/hook';
import { setCurrentUser } from '../../store/indexSlice';

const SplashScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function loadUser() {
      // const response = await AsyncStorage.getItem(KEY_STORAGE.USER);
      // if (response) {
      //   const user = JSON.parse(response) as UserModel;
      //   dispatch(setCurrentUser(user));
      // }

      dispatch(setCurrentUser({
        email: "test@gmail.com", id: "1", username: "test123", name: "Tester"
      }))
      navigation.replace('Index');
    }
    loadUser();
    // setTimeout(() => {
    //   navigation.replace('Index');
    // }, 400);
  });
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="black" hidden={true} />
      <Image source={LOGO_IMG} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
