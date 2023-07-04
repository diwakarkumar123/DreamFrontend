import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'react-native';
import MainScreen from './main/MainScreen';
import ProfileScreen from './profile/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import ModalSignIn from '../components/modal/ModalSignIn';
import BottomSheetSignIn from '../components/bottomSheets/BottomSheetSocialAuth';
import '../utils/pushnotification';
import BottomSettingProfile from '../components/bottomSheets/BottomSettingProfile';
import BottomSheetLogout from '../components/bottomSheets/BottomSheetLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get_data } from './../utilis2/AsyncStorage/Controller'
import { addIsLogin, add_my_profile_data } from '../store/my_dataSlice';
import { getUserInfo } from '../apis/userApi'

const { Navigator, Screen } = createMaterialTopTabNavigator();

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    get_data('user')
      .then((data) => {
        if (data) {
          dispatch(addIsLogin(true))
          getUserInfo(data.auth_token)
            .then((res) => {
              dispatch(add_my_profile_data(res.payload))
            })
            .catch((err)=>{console.log(err)})
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])






  const currentBottomTab = useSelector(state => state.index.currentBottomTab);
  return (
    <>
      <Navigator tabBar={() => <></>} initialRouteName="MainScreen">
        <Screen name="MainScreen" component={MainScreen} />
        {currentBottomTab === 'Home' ? (
          <Screen
            name="ProfileScreenTab"
            component={ProfileScreen}
            initialParams={{ showHeader: true }}
            listeners={{
              focus: () => {
                StatusBar.setBarStyle('dark-content');
              },
            }}
          />
        ) : (
          <></>
        )}
      </Navigator>
      <ModalSignIn />
      {/* <BottomSheetSignIn /> */}
      <BottomSettingProfile />
      <BottomSheetLogout />
    </>
  );
};

export default Index;
