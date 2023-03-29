import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSettingProfile from '../components/bottomSheets/BottomSettingProfile';
import BottomSheetLogout from '../components/bottomSheets/BottomSheetLogout';
import BottomSheetSignIn from '../components/bottomSheets/BottomSheetSocialAuth';
import ModalSignIn from '../components/modal/ModalSignIn';
import { COLOR } from '../configs/styles';
import { useAppSelector } from '../store/hook';
import { MaterialTopTabStackParamlist } from '../types/navigation';
import '../utils/pushnotification';
import MainScreen from './main/MainScreen';
import { ProfileScreen } from './profile/ProfileScreen';

const Index = () => {
  const insets = useSafeAreaInsets();
  const currentBottomTab = useAppSelector(state => state.index.currentBottomTab);
  const { Navigator, Screen } = createMaterialTopTabNavigator<MaterialTopTabStackParamlist>();
  
  console.log('currentBottomTab:', currentBottomTab);
  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
     }}>
      <Navigator tabBar={() => <></>} initialRouteName="MainScreen">
        <Screen name="MainScreen" component={MainScreen} listeners={{
          focus: () => {
            console.log("CALLED FOCUS MAIN SCREEN")
            StatusBar.setBarStyle('light-content');
            StatusBar.setHidden(false);
            StatusBar.setBackgroundColor(COLOR.BLACK)
          }
        }} />
        {currentBottomTab === 'Home' ? (
          <Screen
            name="ProfileScreenTab"
            component={ProfileScreen}
            initialParams={{ showHeader: true }}
            listeners={{
              focus: () => {
                StatusBar.setBarStyle('dark-content');
                StatusBar.setHidden(false);
                StatusBar.setBackgroundColor(COLOR.WHITE);
              },
            }}
          />
        ) : (
          <></>
        )}
      </Navigator>
      <ModalSignIn />
      <BottomSheetSignIn />
      <BottomSettingProfile />
      <BottomSheetLogout />
    </View>
  );
};

export default Index;
