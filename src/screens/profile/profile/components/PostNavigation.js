import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LikedPost from '../screen/LikedPost';
import PicPost from '../screen/PicPost';
import FavouritePost from '../screen/FavouritePost';
import PrivatePost from '../screen/PrivatePost';
import VideoPost from '../screen/VideoPost';
import {
  LIKED_POST_NAVIGATION,
  FAVOURITE,
  LOCK,
  VIDEO_POST_NAVIGATION
} from '../../../../configs/source'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialTopTabNavigator()


const PostNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        
      }}
      
    >
      <Tab.Screen
        name='LikedPost'
        component={LikedPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={LIKED_POST_NAVIGATION} style={styles.icon_size} />
          ),         
        }}
      />

      <Tab.Screen
        name='PicPost'
        component={PicPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-vertical" size={26}  />
          )
        }}
      />

      <Tab.Screen
        name='SavedPost'
        component={FavouritePost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={FAVOURITE} style={styles.icon_size} />
          )
        }}
      />

      <Tab.Screen
        name='PrivatePost'
        component={PrivatePost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={LOCK} style={styles.icon_size} />
          )
        }}
      />

      <Tab.Screen
        name='VideoPost'
        component={VideoPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={VIDEO_POST_NAVIGATION} style={styles.icon_size} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default PostNavigation

const styles = StyleSheet.create({
  icon_size: {
    width: 26,
    height: 26
  }
})



