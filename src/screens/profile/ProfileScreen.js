import { Image, Pressable, StatusBar, Modal } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import User from './User';
import { Tabs } from 'react-native-collapsible-tab-view';
import ListVideo from './ListVideo';
import { Container, Icon, Row, CText } from '../../components';
import { COLOR, SPACING, BORDER, TEXT  } from '../../configs/styles';
import {
  ADD_ACCOUNT_ICON_IMG,
  ARROW_BACK_IMG,
  MORE_VERT_IMG,
  CLOSE_EYE_ICON,
  CLOSE_IMG,
  TIKTOK_ICON_IMG,

} from '../../configs/source';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import * as userApi from '../../apis/user.api';
import * as videoApi from '../../apis/video.api';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';
import { setBottomSheetSettingProfile, setModalSignIn, setBottomSheetLogout, setBottomSheetSignIn} from '../../store/indexSlice';

const statusbarHeight = StatusBar.currentHeight;

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
  { key: '11' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
];
const ProfileScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.index.currentUser);

  const isLogin = useSelector(state=>state.my_data.isLogin)

  const my_data = useSelector(state => state.my_data.my_profile_data)
  const route = useRoute();
  const showHeader = route.params.showHeader;
  const navigation = useNavigation();

  const [user, setUser] = useState(my_data);
  const [videos, setVideos] = useState([

    {
      id: 1,
      author: { name: 'Sohail' },
      channelName: 'cutedog',
      url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
      audio: { name: 'Dogs music' },
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #1',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
      author: { name: 'Sohail' },
      audio: { name: 'Dogs music' },
      id: 2,
      channelName: 'meow',
      url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
      caption: 'Doggies eating candy #cute #puppy',
      musicName: 'Song #2',
      likes: 2411,
      comments: 1222,
      avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
      audio: { name: 'Dogs music' },
      author: { name: 'Sohail' },
      id: 3,
      channelName: 'yummy',
      url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

      caption: 'Brown little puppy #cute #puppy',
      musicName: 'Song #3',
      likes: 3100,
      comments: 801,
      avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
    {
      id: 1,
      author: { name: 'Sohail' },
      channelName: 'cutedog',
      url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
      audio: { name: 'Dogs music' },
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #1',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
      author: { name: 'Sohail' },
      audio: { name: 'Dogs music' },
      id: 2,
      channelName: 'meow',
      url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
      caption: 'Doggies eating candy #cute #puppy',
      musicName: 'Song #2',
      likes: 2411,
      comments: 1222,
      avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
      audio: { name: 'Dogs music' },
      author: { name: 'Sohail' },
      id: 3,
      channelName: 'yummy',
      url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

      caption: 'Brown little puppy #cute #puppy',
      musicName: 'Song #3',
      likes: 3100,
      comments: 801,
      avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
  ]);
  const [videosLike, setVideosLike] = useState([
    {
      id: 1,
      author: { name: 'Sohail' },
      channelName: 'cutedog',
      url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
      audio: { name: 'Dogs music' },
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #1',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
      author: { name: 'Sohail' },
      audio: { name: 'Dogs music' },
      id: 2,
      channelName: 'meow',
      url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
      caption: 'Doggies eating candy #cute #puppy',
      musicName: 'Song #2',
      likes: 2411,
      comments: 1222,
      avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
      audio: { name: 'Dogs music' },
      author: { name: 'Sohail' },
      id: 3,
      channelName: 'yummy',
      url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

      caption: 'Brown little puppy #cute #puppy',
      musicName: 'Song #3',
      likes: 3100,
      comments: 801,
      avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
  ]);
  const [videoPrivate, setVideoPrivate] = useState([
    {
      id: 1,
      author: { name: 'Sohail' },
      channelName: 'cutedog',
      url: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
      audio: { name: 'Dogs music' },
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #1',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
      author: { name: 'Sohail' },
      audio: { name: 'Dogs music' },
      id: 2,
      channelName: 'meow',
      url: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
      caption: 'Doggies eating candy #cute #puppy',
      musicName: 'Song #2',
      likes: 2411,
      comments: 1222,
      avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
      audio: { name: 'Dogs music' },
      author: { name: 'Sohail' },
      id: 3,
      channelName: 'yummy',
      url: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',

      caption: 'Brown little puppy #cute #puppy',
      musicName: 'Song #3',
      likes: 3100,
      comments: 801,
      avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
  ]);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(true));
  }, [dispatch]);

  // const fetchData = useCallback(async () => {
  //   try { 
  //     let dataVideo = null;
  //     let id = null;
  //     let token = null;
  //     if (!showHeader) {
  //       token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
  //       id = await AsyncStorage.getItem(KEY_STORAGE.ID_USER);
  //       dataVideo = videoApi.getVideoByUserAuth(token);
  //     } else {
  //       id = route.params.id ? route.params.id : currentUser;

  //       dataVideo = videoApi.getVideoByUserId(id);
  //     }
  //     const dataUser = userApi.getUserById(id);

  //     const [userInfor, listVideo] = await Promise.all([dataUser, dataVideo]);
  //     setUser(userInfor);
  //     setVideos(listVideo.data.data || []);

  //     let getVidesLike = [];
  //     if (!showHeader && userInfor?.privacy.like) {
  //       getVidesLike = await videoApi.getVideoLikeByUserAuth(token);
  //     } else {
  //       getVidesLike = await videoApi.getVideoLikeByIdUser(userInfor?._id);
  //     }

  //     setVideosLike(getVidesLike.data || []);

  //     if (!showHeader) {
  //       const videoP = await videoApi.getVideoByUserAuth(token, true);
  //       setVideoPrivate(videoP.data.data || []);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [currentUser, route, showHeader]);

  // useEffect(() => {
  //   if (isFocused) {
  //     fetchData();
  //   }
  // }, [isFocused, fetchData, showHeader]);

  const handleClickMoreOption = useCallback(() => {
    dispatch(setBottomSheetSettingProfile(true));
  }, []);






  

  return (
    <>
    {isLogin ? (
      <Container
      flex={1}
      paddingBottom={!showHeader ? 49.1 : 0}
      backgroundColor={COLOR.WHITE}>
          <Container
            zIndex={1}
            height={statusbarHeight}
            backgroundColor={COLOR.WHITE}
          />
          <Container
            zIndex={1}
            backgroundColor={COLOR.WHITE}
            height={48}
            justifyContent="center"
            paddingHorizontal={SPACING.S4}
            borderBottomColor={COLOR.LIGHT_GRAY}
            borderBottomWidth={0.19}>
            <Row justifyContent="space-between">
              <Icon
                source={ARROW_BACK_IMG}
                onPress={() => navigation.goBack()}
              />
              <Icon source={MORE_VERT_IMG} onPress={handleClickMoreOption} />
              
            </Row>
          </Container>
      <Tabs.Container
        renderHeader={() => <User user={user} showHeader={showHeader} />}>
        <Tabs.Tab name="PUBLIC">
          <ListVideo dataList={videos} />
        </Tabs.Tab>

        {!showHeader ? (
          <Tabs.Tab name={'PRIVATE'}>
            <ListVideo dataList={videoPrivate} />
          </Tabs.Tab>
        ) : null}

        <Tabs.Tab name={"LIKE"}>
          <ListVideo dataList={videosLike} />
        </Tabs.Tab>
      </Tabs.Container>
    </Container>
    ):(
      
      <Container
        flex={1}
        alignItems="center"
        justifyContent="center"
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
            <Icon source={CLOSE_IMG} onPress={()=>{navigation.goBack()}} />
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
            <Pressable onPress={handleShowBottomSheetSignIn}>
              <CText color={COLOR.WHITE}>Sign in or Register</CText>
            </Pressable>
          </Container>
        </Container>
      </Container>
    
    )}
    </>
  );
};

export default ProfileScreen;
