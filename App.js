import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'intl-pluralrules';
import PropTypes from 'deprecated-react-native-prop-types';
import SplashScreen from './src/screens/splash/SplashScreen';
import NewVideoScreen from './src/screens/newVideo/NewVideoScreen';
import PreviewVideoScreen from './src/screens/newVideo/PreviewVideoScreen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import AudioScreen from './src/screens/audio/AudioScreen';
import Index from './src/screens';
import PostVideoScreen from './src/screens/newVideo/PostVideoScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SettingScreen from './src/screens/setting/SettingScreen';
import { LogBox, NativeModules } from 'react-native';
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
import { NativeMethods } from 'react-native'
import VideoGift from './src/screens/gift/VideoGift';

LogBox.ignoreLogs = ['Remote debugger'];
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '549099161334-vcrplrh8dmpv3cuij8rmj0m9bf8q44g3.apps.googleusercontent.com',
  });

  // const { RNTwitterSignIn } = NativeModules

  // RNTwitterSignIn.init('4lYiTuDOnwHD0oAIRh6Iwan03', 'Xy5Jts4KoZVC14AsIu5vXUUKT0qAtu1BzPvA0FxFj6lI5j4Psi').then(() =>
  //   console.log('Twitter SDK initialized'),
  // );







  return (
    <Provider store={store}>
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



          {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
