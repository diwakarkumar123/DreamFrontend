// import { Image, Pressable, StatusBar, Modal } from 'react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import User from './User';
// import { Tabs } from 'react-native-collapsible-tab-view';
// import ListVideo from './ListVideo';
// import { Container, Icon, Row, CText } from '../../components';
// import { COLOR, SPACING, BORDER, TEXT } from '../../configs/styles';
// import {
// ADD_ACCOUNT_ICON_IMG,
// ARROW_BACK_IMG,
// MORE_VERT_IMG,
// CLOSE_EYE_ICON,
// CLOSE_IMG,
// TIKTOK_ICON_IMG,
// } from '../../configs/source';
// import {
//   useIsFocused,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import * as userApi from '../../apis/user.api';
// import * as videoApi from '../../apis/video.api';
// import { useDispatch, useSelector } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { KEY_STORAGE } from '../../constants/constants';
// import { setBottomSheetSettingProfile, setModalSignIn, setBottomSheetLogout, setBottomSheetSignIn } from '../../store/indexSlice';

// const statusbarHeight = StatusBar.currentHeight;

// const data = [
//   { key: '1' },
//   { key: '2' },
//   { key: '3' },
//   { key: '4' },
//   { key: '5' },
//   { key: '6' },
//   { key: '7' },
//   { key: '8' },
//   { key: '9' },
//   { key: '10' },
//   { key: '11' },
//   { key: '6' },
//   { key: '7' },
//   { key: '8' },
//   { key: '9' },
//   { key: '10' },
// ];
// const ProfileScreen = () => {
//   const isFocused = useIsFocused();
//   const dispatch = useDispatch();

// const currentUser = useSelector(state => state.index.currentUser);

// const isLogin = useSelector(state => state.my_data.isLogin)

// const my_data = useSelector(state => state.my_data.my_profile_data)
//   const route = useRoute();
//   const showHeader = route.params.showHeader;
//   const navigation = useNavigation();

//   const [user, setUser] = useState(my_data);
//   const [videos, setVideos] = useState([

//     {
//       id: 1,
//       author: { name: 'Sohail' },
//       channelName: 'cutedog',
//       url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
//       audio: { name: 'Dogs music' },
//       caption: 'Cute dog shaking hands #cute #puppy',
//       musicName: 'Song #1',
//       likes: 4321,
//       comments: 2841,
//       avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
//     },
//     {
//       author: { name: 'Sohail' },
//       audio: { name: 'Dogs music' },
//       id: 2,
//       channelName: 'meow',
//       url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
//       caption: 'Doggies eating candy #cute #puppy',
//       musicName: 'Song #2',
//       likes: 2411,
//       comments: 1222,
//       avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
//     },
//     {
//       audio: { name: 'Dogs music' },
//       author: { name: 'Sohail' },
//       id: 3,
//       channelName: 'yummy',
//       url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

//       caption: 'Brown little puppy #cute #puppy',
//       musicName: 'Song #3',
//       likes: 3100,
//       comments: 801,
//       avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
//     },
//     {
//       id: 1,
//       author: { name: 'Sohail' },
//       channelName: 'cutedog',
//       url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
//       audio: { name: 'Dogs music' },
//       caption: 'Cute dog shaking hands #cute #puppy',
//       musicName: 'Song #1',
//       likes: 4321,
//       comments: 2841,
//       avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
//     },
//     {
//       author: { name: 'Sohail' },
//       audio: { name: 'Dogs music' },
//       id: 2,
//       channelName: 'meow',
//       url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
//       caption: 'Doggies eating candy #cute #puppy',
//       musicName: 'Song #2',
//       likes: 2411,
//       comments: 1222,
//       avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
//     },
//     {
//       audio: { name: 'Dogs music' },
//       author: { name: 'Sohail' },
//       id: 3,
//       channelName: 'yummy',
//       url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

//       caption: 'Brown little puppy #cute #puppy',
//       musicName: 'Song #3',
//       likes: 3100,
//       comments: 801,
//       avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
//     },
//   ]);
//   const [videosLike, setVideosLike] = useState([
//     {
//       id: 1,
//       author: { name: 'Sohail' },
//       channelName: 'cutedog',
//       url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
//       audio: { name: 'Dogs music' },
//       caption: 'Cute dog shaking hands #cute #puppy',
//       musicName: 'Song #1',
//       likes: 4321,
//       comments: 2841,
//       avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
//     },
//     {
//       author: { name: 'Sohail' },
//       audio: { name: 'Dogs music' },
//       id: 2,
//       channelName: 'meow',
//       url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
//       caption: 'Doggies eating candy #cute #puppy',
//       musicName: 'Song #2',
//       likes: 2411,
//       comments: 1222,
//       avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
//     },
//     {
//       audio: { name: 'Dogs music' },
//       author: { name: 'Sohail' },
//       id: 3,
//       channelName: 'yummy',
//       url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

//       caption: 'Brown little puppy #cute #puppy',
//       musicName: 'Song #3',
//       likes: 3100,
//       comments: 801,
//       avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
//     },
//   ]);
//   const [videoPrivate, setVideoPrivate] = useState([
//     {
//       id: 1,
//       author: { name: 'Sohail' },
//       channelName: 'cutedog',
//       url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
//       audio: { name: 'Dogs music' },
//       caption: 'Cute dog shaking hands #cute #puppy',
//       musicName: 'Song #1',
//       likes: 4321,
//       comments: 2841,
//       avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
//     },
//     {
//       author: { name: 'Sohail' },
//       audio: { name: 'Dogs music' },
//       id: 2,
//       channelName: 'meow',
//       url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
//       caption: 'Doggies eating candy #cute #puppy',
//       musicName: 'Song #2',
//       likes: 2411,
//       comments: 1222,
//       avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
//     },
//     {
//       audio: { name: 'Dogs music' },
//       author: { name: 'Sohail' },
//       id: 3,
//       channelName: 'yummy',
//       url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

//       caption: 'Brown little puppy #cute #puppy',
//       musicName: 'Song #3',
//       likes: 3100,
//       comments: 801,
//       avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
//     },
//   ]);



// const handleShowBottomSheetSignIn = useCallback(() => {
//   dispatch(setModalSignIn(false));
//   dispatch(setBottomSheetSignIn(true));
// }, [dispatch]);

//   // const fetchData = useCallback(async () => {
//   //   try { 
//   //     let dataVideo = null;
//   //     let id = null;
//   //     let token = null;
//   //     if (!showHeader) {
//   //       token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
//   //       id = await AsyncStorage.getItem(KEY_STORAGE.ID_USER);
//   //       dataVideo = videoApi.getVideoByUserAuth(token);
//   //     } else {
//   //       id = route.params.id ? route.params.id : currentUser;

//   //       dataVideo = videoApi.getVideoByUserId(id);
//   //     }
//   //     const dataUser = userApi.getUserById(id);

//   //     const [userInfor, listVideo] = await Promise.all([dataUser, dataVideo]);
//   //     setUser(userInfor);
//   //     setVideos(listVideo.data.data || []);

//   //     let getVidesLike = [];
//   //     if (!showHeader && userInfor?.privacy.like) {
//   //       getVidesLike = await videoApi.getVideoLikeByUserAuth(token);
//   //     } else {
//   //       getVidesLike = await videoApi.getVideoLikeByIdUser(userInfor?._id);
//   //     }

//   //     setVideosLike(getVidesLike.data || []);

//   //     if (!showHeader) {
//   //       const videoP = await videoApi.getVideoByUserAuth(token, true);
//   //       setVideoPrivate(videoP.data.data || []);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }, [currentUser, route, showHeader]);

//   // useEffect(() => {
//   //   if (isFocused) {
//   //     fetchData();
//   //   }
//   // }, [isFocused, fetchData, showHeader]);

//   const handleClickMoreOption = useCallback(() => {
//     dispatch(setBottomSheetSettingProfile(true));
//   }, []);


//   // function for fetching media data from backend
//   const fetch_public_media = ()=>{

//   }







//   return (
//     <>
//       {isLogin ? (
//         <Container
//           flex={1}
//           paddingBottom={!showHeader ? 49.1 : 0}
//           backgroundColor={COLOR.WHITE}>
//           <Container
//             zIndex={1}
//             height={statusbarHeight}
//             backgroundColor={COLOR.WHITE}
//           />
//           <Container
//             zIndex={1}
//             backgroundColor={COLOR.WHITE}
//             height={48}
//             justifyContent="center"
//             paddingHorizontal={SPACING.S4}
//             borderBottomColor={COLOR.LIGHT_GRAY}
//             borderBottomWidth={0.19}>
//             <Row justifyContent="space-between">
//               <Icon
//                 source={ARROW_BACK_IMG}
//                 onPress={() => navigation.goBack()}
//               />
//               <Icon source={MORE_VERT_IMG} onPress={handleClickMoreOption} />

//             </Row>  
//           </Container>
//           <Tabs.Container
//             renderHeader={() => <User user={user} showHeader={showHeader} />}>
//             <Tabs.Tab name="PUBLIC">
//               <ListVideo dataList={videos} />
//             </Tabs.Tab>

//             {!showHeader ? (
//               <Tabs.Tab name={'PRIVATE'}>
//                 <ListVideo dataList={videoPrivate} />
//               </Tabs.Tab>
//             ) : null}

//             <Tabs.Tab name={"LIKE"}>
//               <ListVideo dataList={videosLike} />
//             </Tabs.Tab>
//           </Tabs.Container>
//         </Container>
//       ) : (

// <Container
//   flex={1}
//   alignItems="center"
//   justifyContent="center"
//   backgroundColor={COLOR.WHITE}>
//   <Container
//     flexDirection="column"
//     alignItems="center"
//     justifyContent="center"
//     backgroundColor={COLOR.WHITE}
//     padding={SPACING.S3}
//     borderRadius={BORDER.MEDIUM}
//     width={'80%'}>
//     <Container alignSelf="flex-end">
//       <Icon source={CLOSE_IMG} onPress={() => { navigation.goBack() }} />
//     </Container>
//     <Icon
//       source={TIKTOK_ICON_IMG}
//       width={80}
//       height={95}
//       marginBottom={SPACING.S3}
//     />
//     <CText
//       text={TEXT.H3}
//       color={COLOR.BLACK}
//       marginVertical={SPACING.S1}
//       textAlign="center">
//       Log in to follow the account {'\n'} and like or comment on
//       {'\n'}
//       video
//     </CText>
//     <CText
//       text={TEXT.SUBTITLE}
//       color={COLOR.GRAY}
//       marginVertical={SPACING.S1}
//       textAlign="center"
//       fontSize={13}>
//       The Dream experience is more enjoyable when you {'\n'} follow and share
//       with friends.
//     </CText>
//     <Container
//       width={'100%'}
//       borderRadius={BORDER.SMALL}
//       backgroundColor={COLOR.DANGER2}
//       padding={SPACING.S2}
//       justifyContent="center"
//       alignItems="center"
//       marginTop={SPACING.S3}>
//       <Pressable onPress={handleShowBottomSheetSignIn}>
//         <CText color={COLOR.WHITE}>Sign in or Register</CText>
//       </Pressable>
//     </Container>
//   </Container>
// </Container>

//       )}
//     </>
//   );
// };

// export default ProfileScreen;



import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import Body from '../../components/Body/Body.components'
import { BlurView } from "@react-native-community/blur";
import {
  GIFT_ICON,
  DIAMOND_ICON,
  LUCKY_WHEEL_ICON,
  STAR_ICON,
  PICTURE_ICON,
  ADD_ACCOUNT_ICON_IMG,
  ARROW_BACK_IMG,
  MORE_VERT_IMG,
  CLOSE_EYE_ICON,
  CLOSE_IMG,
  TIKTOK_ICON_IMG,
  AVATA_IMG,
} from '../../configs/source';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import PostNavigation from './profile/components/PostNavigation';
import { useNavigation } from '@react-navigation/native';
import { setBottomSheetSettingProfile, setModalSignIn, setBottomSheetLogout, setBottomSheetSignIn } from '../../store/indexSlice';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Icon, Row, CText } from '../../components';
import { COLOR, SPACING, BORDER, TEXT } from '../../configs/styles';
import axios from 'axios';


const { width, height } = Dimensions.get('window')




const ProfileScreen = () => {


  const uri = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const handleClickMoreOption = useCallback(() => {
    dispatch(setBottomSheetSettingProfile(true));
  }, []);

  const copyToClipboard = (content) => {
    console.log(content)
    Clipboard.setString(content);
  };
  const seed = '3827637b2ryxnheudwr3r343cr'

// // creating avatar from here 
// useEffect(() => {
//   const fetchAvatar = async () => {
//     try {
//       const response = await axios.get(`https://avatars.dicebear.com/api/avataaars/${seed}.svg`);
//       console.log(response.request.responseURL); // Get the actual image URL
//     } catch (error) {
//       console.error('Error fetching avatar:', error);
//     }
//   };

//   fetchAvatar();
// }, [seed]);


  const currentUser = useSelector(state => state.index.currentUser);

  const isLogin = useSelector(state => state.my_data.isLogin)

  const my_data = useSelector(state => state.my_data.my_profile_data)

  console.log(my_data)

  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(true));
  }, [dispatch]);
  

  return (

    <ScrollView contentContainerStyle={{
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center'
    }}>
      {
        isLogin ? (
          <>
            <Body style={styles.mainContainer}>
              <ImageBackground
                source={my_data?.profile_pic ? {uri: my_data?.profile_pic} : AVATA_IMG}
                resizeMode='cover'
                style={{ width: width, height: 240, }}>

                <BlurView blurType="light" blurAmount={5}  >
                  <Body applyPadding={false} style={styles.blurContainer}>



                    {/* top container */}
                    <Body
                      applyPadding={false}
                      style={styles.topContainer}
                    >
                      <Body
                        applyPadding={false}
                        style={styles.iconContainer}>
                        <Image source={GIFT_ICON} style={{ width: 20, height: 20 }} />
                        <Text>{t('gift')}</Text>
                      </Body>

                      <Body
                        applyPadding={false}
                        style={styles.iconContainer}>
                        <Image source={DIAMOND_ICON} style={{ width: 20, height: 20 }} />
                        <Text>26</Text>
                      </Body>

                      <Body
                        applyPadding={false}
                        style={styles.iconContainer}
                      >
                        {/* <Image source={GIFT_ICON} style={{ width: 20, height: 20 }} /> */}
                        <Text>{my_data?.nickname}</Text>
                      </Body>

                      <Body
                        applyPadding={false}
                        style={styles.iconContainer}>
                        <Image source={LUCKY_WHEEL_ICON} style={{ width: 20, height: 20 }} />
                        <Text>{t('Lucky Wheel')}</Text>
                      </Body>

                      <Body
                        applyPadding={false}
                        style={styles.iconContainer}>
                        <TouchableOpacity onPress={handleClickMoreOption}>
                          <MaterialCommunityIcons name='dots-vertical' size={20} />
                        </TouchableOpacity>
                      </Body>
                    </Body>


                    {/* middle container  */}
                    <Body applyPadding={false} style={styles.middleContainer}>
                      <Image
                        source={STAR_ICON}
                      />
                      <Body applyPadding={false} style={styles.profileImageContainer}>
                        <Image source={my_data?.profile_pic ? {uri: my_data?.profile_pic} : AVATA_IMG} style={styles.profileImage} />
                        <Text>@{my_data.username}</Text>
                      </Body>
                    </Body>


                    {/* Bottom container */}

                    <Body applyPadding={false} style={styles.bottomContainer}>

                      <Body applyPadding={false} style={styles.followSection}>
                        <Text>512</Text>
                        <Text>{t('Followings')}</Text>
                      </Body>

                      <Body applyPadding={false} style={styles.followSection}>
                        <Text>22.2M</Text>
                        <Text>{t('Followers')}</Text>
                      </Body>

                      <Body applyPadding={false} style={styles.followSection}>
                        <Text>9.9M</Text>
                        <Text>{t('Likes')}</Text>
                      </Body>

                    </Body>
                  </Body>
                </BlurView>
              </ImageBackground>

              {/* Edit profile section */}
              <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("EditProfile") }}>
                <Text style={styles.textButton}>{t('EditProfile')}</Text>
              </TouchableOpacity>

              {/* showing profile information */}
              <Body applyPadding={false} style={styles.aboutMainContainer}>
                <Text onLongPress={() => { copyToClipboard(t('Description')) }}>{my_data?.bio}</Text>
                <Text>{my_data?.website}</Text>
                <Body applyPadding={false} style={styles.aboutContainer}>
                  <TouchableOpacity>
                    <Image
                      source={PICTURE_ICON}
                    />
                  </TouchableOpacity>
                  <Text>Q&A</Text>
                  <TouchableOpacity>
                    <Octicons size={20} color={'black'} name='video' />
                  </TouchableOpacity>
                </Body>
              </Body>
            </Body>
            <PostNavigation />
          </>
        ) : (
          <Container
            flex={1}
            alignItems="center"
            justifyContent="center"
            style={{
              width: width,
              height: height
            }}
            backgroundColor={COLOR.WHITE}>
            <Container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              backgroundColor={COLOR.WHITE}
              padding={SPACING.S3}
              borderRadius={BORDER.MEDIUM}
              width={'80%'}>
              <Container alignSelf="flex-end">
                <Icon source={CLOSE_IMG} onPress={() => { navigation.goBack() }} />
              </Container>
              <Icon
                source={TIKTOK_ICON_IMG}
                width={80}
                height={95}
                marginBottom={SPACING.S3}
              />
              <CText
                text={TEXT.H3}
                color={COLOR.BLACK}
                marginVertical={SPACING.S1}
                textAlign="center">
                Log in to follow the account {'\n'} and like or comment on
                {'\n'}
                video
              </CText>
              <CText
                text={TEXT.SUBTITLE}
                color={COLOR.GRAY}
                marginVertical={SPACING.S1}
                textAlign="center"
                fontSize={13}>
                The Dream experience is more enjoyable when you {'\n'} follow and share
                with friends.
              </CText>
              <Container
                width={'100%'}
                borderRadius={BORDER.SMALL}
                backgroundColor={COLOR.DANGER2}
                padding={SPACING.S2}
                justifyContent="center"
                alignItems="center"
                marginTop={SPACING.S3}>
                <Pressable onPress={()=>{navigation.navigate('BottomSheetSocialAuth')}}>
                  <CText color={COLOR.WHITE}>Sign in or Register</CText>
                </Pressable>
              </Container>
            </Container>
          </Container>
        )
      }



    </ScrollView>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 15,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  middleContainer: {
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    width: width * 0.65,
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 5
  },
  profileImageContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  bottomContainer: {
    position: 'absolute',
    top: 170,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: width,
    justifyContent: 'space-evenly',
    paddingHorizontal: width * 0.1
  },
  followSection: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  blurContainer: {
    width: width,
    height: 240,
    backgroundColor: 'transparent',
  },
  mainContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF2600',
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderRadius: 10
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 19,
  },
  aboutMainContainer: {
    alignItems: 'center',
    marginTop: 10

  },
  aboutContainer: {
    flexDirection: 'row',
    width: width * 0.25,
    alignItems: 'center',
    justifyContent: 'space-between'

  }
})