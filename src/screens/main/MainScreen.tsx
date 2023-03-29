import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  DISCOVER_IMG, HOME_FILLED_IMG, MESSAGE_FILLED_IMG, NEW_VIDEO_IMG, USER_FILLED_IMG
} from '../../configs/source';
import { COLOR, TEXT } from '../../configs/styles';
import { useAppSelector } from '../../store/hook';
import { BottomTabs, setBottomSheetSignIn, setCurrentBottomTab } from '../../store/indexSlice';
import DiscoverScreen from '../discover/DiscoverScreen';
import HomeScreen from '../home/HomeScreen';
import { InboxStack } from '../inbox/InboxStack';
import NewVideoScreen from '../newVideo/NewVideoScreen';
import { ProfileScreen } from '../profile/ProfileScreen';
import BottomSheetComment from './components/BottomSheetComment';
import BoxCreateVideo from './components/BoxCreateVideo';

const Bottom = createBottomTabNavigator();

const MainScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const currentBottomTab = useAppSelector(state => state.index.currentBottomTab);
  const currentUser = useAppSelector(state => state.index.currentUser);
  const [theme, setTheme] = useState('dart');
  const handleButtonBack = () => navigation.goBack();
  const handleTapPress = (myTheme: string) => {
    if (theme !== myTheme) {
      setTheme(myTheme);
    }
  };

  const handleCurrentBottomTab = (tabName: BottomTabs) => {
    if (currentBottomTab !== tabName) {
      dispatch(setCurrentBottomTab(tabName));
    }
  };
  return (
    <>
      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLOR.BLACK,
            // position: 'absolute',
            elevation: 0,
          },
          tabBarLabelStyle: {
            marginTop: -10,
            ...TEXT.SMALL_STRONG,
            fontSize: 10,
            marginBottom: 5,
          },
          headerShown: false,
          tabBarActiveTintColor: COLOR.WHITE,
          tabBarInactiveTintColor: COLOR.GRAY,
        }}>
        <Bottom.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={HOME_FILLED_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              handleTapPress('dart');
              StatusBar.setBarStyle('light-content');
            },
            tabPress: e => {
              handleTapPress('dart');
              handleCurrentBottomTab('Home');
            },
          }}
        />
        <Bottom.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={DISCOVER_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              handleTapPress('light');
              handleCurrentBottomTab("Discover");
            },
          }}
        />
        <Bottom.Screen
          name="NewVideo"
          component={NewVideoScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => {
              return (
                <Image
                // source={theme === 'dart' ? NEW_VIDEO_IMG : NEW_VIDEO_DART_IMG}
                  source={theme === 'dart' ? NEW_VIDEO_IMG : NEW_VIDEO_IMG}
                  // source={NEW_VIDEO_IMG}
                  style={styles.newVideoTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('NewVideo');
              handleCurrentBottomTab("NewVideo");
            },
          }}
        />
        <Bottom.Screen
          name="InboxStack"
          component={InboxStack}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={MESSAGE_FILLED_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
            title: 'Inbox'
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              if (!currentUser) {
                e.preventDefault();
                dispatch(setBottomSheetSignIn(true));
              } 
              else {
                handleTapPress('light');
                handleCurrentBottomTab("Me");
              }
            },
          }}
        />
        <Bottom.Screen
          name="Me"
          component={ProfileScreen}
          initialParams={{ showHeader: false }}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={USER_FILLED_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              if (!currentUser) {
                e.preventDefault();
                dispatch(setBottomSheetSignIn(true));
              } 
              else {
                handleTapPress('light');
                handleCurrentBottomTab("Me");
              }
            },
          }}
        />
      </Bottom.Navigator>
      <BottomSheetComment />
      <BoxCreateVideo />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 28,
    height: 28,
  },
  newVideoTabIcon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  buttonLeft: {
    marginLeft: 10,
  },
  buttonRight: {
    marginRight: 10,
  },
});
