import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
LogBox.ignoreLogs = ['Remote debugger'];
console.disableYellowBox = true;
GoogleSignin.configure({
  webClientId:
    '505235781427-9013t2u2nlkv8mmj3srlca5q4q4kh5lc.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ animation: 'none' }}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
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


          {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
