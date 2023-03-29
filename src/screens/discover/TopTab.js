import { StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLOR, TEXT } from '../../configs/styles';
import Top from './tab/Top';
import Hashtag from './tab/Hashtag';
import Audio from './tab/Audio';
import User from './tab/User';
import Video from './tab/Video';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ txtSearch }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          padding: 0,
          marginTop: -14,
          ...TEXT.REGULAR,
          // fontSize: 12,
        },
        tabBarItemStyle: {
          maxHeight: 30,
          width: 'auto',
        },
        tabBarActiveTintColor: COLOR.BLACK,
        tabBarInactiveTintColor: COLOR.GRAY,
        tabBarScrollEnabled: true,
        tabBarStyle: {
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLOR.BLACK,
        },
        tabBarBounces: true,
        tabBarPressColor: COLOR.TRANSPARENT,
      }}>
      <Tab.Screen
        name="Top"
        component={Top}
        options={{
          tabBarLabel: 'Top',
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
        }}
      />
      <Tab.Screen
        name="Audio"
        component={Audio}
        options={{
          tabBarLabel: 'Sound',
        }}
      />
      <Tab.Screen name="Hashtag" component={Hashtag} />
      <Tab.Screen name="LIVE" component={Hashtag} />
    </Tab.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
