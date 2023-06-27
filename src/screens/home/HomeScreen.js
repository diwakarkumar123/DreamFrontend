import React from 'react';
import FollowTab from './FollowTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './tab/MyTabBar';
import Test from './Test';
import { Container } from '../../components';
import { COLOR } from '../../configs/styles';
import VideoTab from './VideoTab';
import { useTranslation } from 'react-i18next';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const {t, i18n} = useTranslation()
  return (
    <Container backgroundColor={COLOR.BACKGROUND_LOADING} flex={1}>
      {/* <FollowTab /> */}
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        initialRouteName="For you">
        <Tab.Screen name={t('Followings')} component={FollowTab} />
        <Tab.Screen name={t('ForYou')} component={FollowTab} />
        {/* <Tab.Screen name="For you" component={VideoTab} /> */}
      </Tab.Navigator>
    </Container>
  );
};

export default HomeScreen;
