import React, { useEffect, useState, useCallback, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'intl-pluralrules';
import PropTypes from 'deprecated-react-native-prop-types';
import SplashScreen from './src/screens/splash/SplashScreen';
import NewVideoScreen from './src/screens/newVideo/NewVideoScreen';
import PreviewVideoScreen from './src/screens/newVideo/PreviewVideoScreen';
import { store } from './src/store/store';
import { Provider, useSelector } from 'react-redux';
import AudioScreen from './src/screens/audio/AudioScreen';
import Index from './src/screens';
import PostVideoScreen from './src/screens/newVideo/PostVideoScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SettingScreen from './src/screens/setting/SettingScreen';
import { LogBox } from 'react-native';
import Promotion from './src/screens/promotion/Promotion';
import Payments from './src/screens/promotion/Payments';
import ProfileScreen from './src/profile/ProfileScreen'
import VideoPlay from './src/profile/Video';
import SelectingLocationScreen from './src/screens/newVideo/SelectingLocationScreen';
import SelectingCitiesScreen from './src/screens/newVideo/SelectingCitiesScreen';
import EditProfile from './src/screens/profile/profile/screen/EditProfile';
import CustomAudienceScreen from './src/screens/promotion/CustomAudienceScreen';
import InterestScreen from './src/screens/promotion/InterestScreen';
import Occupation from './src/screens/profile/profile/screen/Occupation';
import SelectingGender from './src/screens/promotion/SelectingGender';
import SelectingAge from './src/screens/promotion/SelectingAge';
import MainInsightScreen from './src/screens/profile/profile/Insights/MainInsightScreen';
import TotalSpendedTime from './src/screens/profile/profile/Insights/TotalSpendedTime';
import i18n from './src/locals/i18n';
import Avatar from './src/screens/profile/profile/screen/Avatar';
import BottomSheetSocialAuth from './src/components/bottomSheets/BottomSheetSocialAuth';
import Countries_and_regions from './src/screens/profile/profile/screen/Countries_and_regions';
import Making_friend_intention from './src/screens/profile/profile/screen/Making_friend_intention';
import VideoEditorLandingPage from './src/screens/videoEditor/VideoEditorLandingPage';
import AccountScreen from './src/screens/profile/profile/screen/AccountScreen';
import ChooseAccount from './src/screens/profile/profile/screen/ChooseAccount';
import ChooseBasicAccount from './src/screens/profile/profile/screen/ChooseBasicAccount';
import ChoosePremiumAccount from './src/screens/profile/profile/screen/ChoosePremiumAccount';
import ChooseBusinessAccount from './src/screens/profile/profile/screen/ChooseBusinessAccount';
import Userprofile from './src/screens/other_user/UserProfileMainPage';
import SearchScreen from './src/screens/home/search/SearchScreen';
import { Easing } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import BasicAccount from './src/screens/profile/profile/screen/BasicAccount';
import PremiumAccount from './src/screens/profile/profile/screen/PremiumAccount';
import BusinessAccount from './src/screens/profile/profile/screen/BusinessAccount';
import { NativeMethods, NativeModules } from 'react-native'
import VideoGift from './src/screens/gift/VideoGift';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';
import { useAppState } from '@react-native-community/hooks';
import { AppState } from 'react-native';
import Followers from './src/screens/profile/profile/screen/Followers';
import Followings from './src/screens/profile/profile/screen/Followings';
import GiftHistory from './src/screens/profile/profile/screen/GiftHistory';
import DiamondHistory from './src/screens/profile/profile/screen/DiamondHistory';
import LikesHistory from './src/screens/profile/profile/screen/LikesHistory';
import WatchProfileVideo from './src/screens/other_user/WatchProfileVideo';
import ChatScreen from './src/screens/inbox/screen/ChatScreen';
import { PaperProvider } from 'react-native-paper';
import ContactList from './src/screens/inbox/screen/ContactList';
import ColorPicking from './src/screens/inbox/component/ColorPicking';
import AudioCall from './src/screens/inbox/screen/AudioCall';
import VideoCall from './src/screens/inbox/screen/VideoCall';
import DiamondAnalytics from './src/screens/profile/profile/Insights/DiamondAnalytics';
import Screen from './src/Screen';
import RenderTextInput from './src/screens/videoEditor/components/RenderTextInput';
import FontPicker from './src/screens/videoEditor/sticker/FontPicker';
import ColorPicker from './src/screens/videoEditor/sticker/ColorPicker';
import * as Localize from 'react-native-localize'
import BusinessAccountCategories from './src/screens/profile/profile/screen/BusinessAccountCategories';
import BusinessAccount1 from './src/screens/profile/profile/screen/business/BusinessAccount1';
import BusinessAccount2 from './src/screens/profile/profile/screen/business/BusinessAccount2';
import BusinessAccount3 from './src/screens/profile/profile/screen/business/BusinessAccount3';
import PrivacyPolicy from './src/screens/profile/profile/privacy/Privacy';
import Supperfollow from './src/screens/profile/profile/privacy/Supperfollow';
import Viewlist from './src/screens/profile/profile/privacy/Viewlist';
import Messageme from './src/screens/profile/profile/privacy/Messageme';
import Userblocked from './src/screens/profile/profile/privacy/Userblocked';
import AccountSettingSecondScreen from './src/screens/profile/profile/screen/AccountSettingSecondScreen';
import { addUserInteractionTime } from './src/apis/userApi'
import MainSecurity from './src/screens/profile/profile/security/MainSecurity';
import LockScreen from './src/screens/profile/profile/security/LockScreen';
import ScreenLockType from './src/screens/profile/profile/security/ScreenLockType';
import SetPassword from './src/screens/profile/profile/security/SetPassword';
import SetPin from './src/screens/profile/profile/security/SetPin';
import Swipe from './src/screens/profile/profile/security/Swipe';


LogBox.ignoreLogs = ['Remote debugger'];
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '549099161334-vcrplrh8dmpv3cuij8rmj0m9bf8q44g3.apps.googleusercontent.com',
  });
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [interactionStartTime, setInteractionStartTime] = useState(null);
  const my_data = useSelector(state => state.my_data.my_profile_data)



  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        setInteractionStartTime(new Date());
      }

      if (
        appState.current === 'active' &&
        nextAppState.match(/inactive|background/)
      ) {
        console.log('App is going to background!');
        if (interactionStartTime) {
          const interactionEndTime = new Date();
          const interacted_time = interactionEndTime - interactionStartTime;
          console.log('Interacted Time:', interacted_time);
          const data = {
            interaction_start: interactionStartTime,
            interacted_time: interacted_time
          }
          addUserInteractionTime(data, my_data?.auth_token)
            .then((r) => { console.log(r) })
            .catch((err) => { console.log(err) })

        }
        setInteractionStartTime(null);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      // console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [interactionStartTime]);



  return (
    <PaperProvider>
      <NavigationContainer onReady={() => { RNBootSplash.hide() }}>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{ animation: 'none' }}>
          {/* <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Video"
            component={VideoPlay}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Payments'
            component={Payments}
          />
          <Stack.Screen
            name="Index"
            component={Index}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewVideo"
            component={NewVideoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PreviewVideoScreen"
            component={PreviewVideoScreen}
            options={{ headerShown: false, animationEnabled: false }}
          />
          <Stack.Screen
            name="SelectingLocationScreen"
            component={SelectingLocationScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Location' }}
          />
          <Stack.Screen name="AudioScreen" component={AudioScreen} />
          <Stack.Screen
            name="PostVideoScreen"
            component={PostVideoScreen}
            options={{ headerShown: true, animationEnabled: false, title: 'Post' }}

          />
          <Stack.Screen
            name="SelectingCitiesScreen"
            component={SelectingCitiesScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Post' }}

          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false, animationEnabled: false, title: 'Post' }}

          />
          <Stack.Screen
            name="CustomAudienceScreen"
            component={CustomAudienceScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Select Audience' }}

          />
          <Stack.Screen
            name="Promotion"
            component={Promotion}
            options={{ headerShown: false, animationEnabled: false, title: '' }}

          />
          <Stack.Screen
            name="InterestScreen"
            component={InterestScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Interest' }}

          />
          <Stack.Screen
            name="Industries"
            component={Occupation}
            options={{ headerShown: false, animationEnabled: false, title: 'Interest' }}

          />

          <Stack.Screen
            name="SelectingGender"
            component={SelectingGender}
            options={{ headerShown: false, animationEnabled: false, title: 'Interest' }}

          />

          <Stack.Screen
            name="SelectingAge"
            component={SelectingAge}
            options={{ headerShown: false, animationEnabled: false, title: 'Interest' }}
          />

          <Stack.Screen
            name="MainInsightScreen"
            component={MainInsightScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="TotalSpendedTime"
            component={TotalSpendedTime}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="Avatar"
            component={Avatar}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="BottomSheetSocialAuth"
            component={BottomSheetSocialAuth}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="CountryAndRegion"
            component={Countries_and_regions}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="MakingFriendIntenttion"
            component={Making_friend_intention}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="VideoEditorLandingPage"
            component={VideoEditorLandingPage}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="ChooseAccount"
            component={ChooseAccount}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="ChooseBasicAccount"
            component={ChooseBasicAccount}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="ChoosePremiumAccount"
            component={ChoosePremiumAccount}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />
          <Stack.Screen
            name="ChooseBusinessAccount"
            component={ChooseBusinessAccount}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="UserProfileMainPage"
            component={Userprofile}
            options={{ headerShown: false, animationEnabled: false, title: 'Insight' }}
          />

          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              headerShown: false,
              animationEnabled: true,
              animationType: 'slide_from_bottom',
              title: 'Search',
            }} />


          <Stack.Screen
            name="BasicAccount"
            component={BasicAccount}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="PremiumAccount"
            component={PremiumAccount}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="BusinessAccount"
            component={BusinessAccount}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />
          <Stack.Screen
            name="VideoGift"
            component={VideoGift}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="Followers"
            component={Followers}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="Followings"
            component={Followings}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="GiftHistory"
            component={GiftHistory}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="DiamondHistory"
            component={DiamondHistory}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="LikesHistory"
            component={LikesHistory}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="WatchProfileVideo"
            component={WatchProfileVideo}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />


          <Stack.Screen
            name="ContactList"
            component={ContactList}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="ColorPicking"
            component={ColorPicking}
            options={{
              headerShown: false,
              animationEnabled: false,
              presentation: 'modal'
            }} />

          <Stack.Screen
            name="AudioCall"
            component={AudioCall}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />


          <Stack.Screen
            name="VideoCall"
            component={VideoCall}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="DiamondAnalytics"
            component={DiamondAnalytics}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="Screen"
            component={Screen}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="RenderTextInput"
            component={RenderTextInput}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="FontPicker"
            component={FontPicker}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="ColorPicker"
            component={ColorPicker}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="AccountSettingSecondScreen"
            component={AccountSettingSecondScreen}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="BusinessAccountCategories"
            component={BusinessAccountCategories}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="BusinessAccount1"
            component={BusinessAccount1}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="BusinessAccount2"
            component={BusinessAccount2}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="BusinessAccount3"
            component={BusinessAccount3}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />


          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />
          <Stack.Screen
            name="Supperfollow"
            component={Supperfollow}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="Viewlist"
            component={Viewlist}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />
          <Stack.Screen
            name="Userblocked"
            component={Userblocked}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />
          <Stack.Screen
            name="Messageme"
            component={Messageme}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="MainSecurity"
            component={MainSecurity}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="LockScreen"
            component={LockScreen}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="ScreenLockType"
            component={ScreenLockType}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />


          <Stack.Screen
            name="SetPassword"
            component={SetPassword}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="SetPin"
            component={SetPin}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />

          <Stack.Screen
            name="Swipe"
            component={Swipe}
            options={{
              headerShown: false,
              animationEnabled: false,
            }} />


          {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

export default App;
