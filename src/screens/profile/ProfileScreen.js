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
  PROFILE_IMAGE,
  USER_IMG,
  USER_FILLED_IMG,
  LIKED_POST_NAVIGATION,
  FAVOURITE,
  LOCK,
  VIDEO_POST_NAVIGATION
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
import DisplayProfile from '../../components/DisplayProfile'
import { Tabs } from 'react-native-collapsible-tab-view'
import PicPost from './profile/screen/PicPost';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LikedPost from './profile/screen/LikedPost';
import FavouritePost from './profile/screen/FavouritePost';
import PrivatePost from './profile/screen/PrivatePost';
import VideoPost from './profile/screen/VideoPost';
import * as VideoApi from '../../apis/video.api'
import * as userApi from '../../apis/userApi'
import * as likeApi from '../../apis/like.api'
const { width, height } = Dimensions.get('window')




const ProfileScreen = () => {


  const uri = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [data, setData] = useState()
  const [user_data, setUser_data] = useState()
  const [total_like, setTotal_like] = useState(0)

  const handleClickMoreOption = useCallback(() => {
    dispatch(setBottomSheetSettingProfile(true));
  }, []);

  const copyToClipboard = (content) => {
    Clipboard.setString(content);
  };

  const currentUser = useSelector(state => state.index.currentUser);

  const isLogin = useSelector(state => state.my_data.isLogin)

  const my_data = useSelector(state => state.my_data.my_profile_data)

  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(true));
  }, [dispatch]);


  // FUNCTION FOR GETTING THE USER DETIALS FROM BACKEND
  const fetchMyDetails = async ()=>{
    try {
      if(my_data){
        const result = await userApi.getInfoById(my_data?.id)
        setUser_data(result)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchMyDetails()
  }, [])

  // FUNCTION FOR GETTING ALL THE LIKES OF USERS 

  const getAllLikes = async()=>{
    try {
      const result = await likeApi.getUserAllLike(my_data?.id)
      setTotal_like(result?.no_of_likes)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllLikes()
  }, [])
  
  



  const RenderProfile = () => {
    return (
      <Body style={styles.mainContainer}>
        <ImageBackground
          source={my_data?.profile_pic ? { uri: my_data?.profile_pic } : { uri: 'https://' }}
          resizeMode='cover'
          style={{ width: width, height: 250, }}>

          <BlurView blurType="light" blurAmount={1}  >
            <Body applyPadding={false} style={styles.blurContainer}>
              {/* top container */}
              <Body
                applyPadding={false}
                style={styles.topContainer}
              >
                {/* <Body
                  applyPadding={false}
                  style={styles.iconContainer}>
                  <Image source={GIFT_ICON} style={{ width: 30, height: 30 }} />
                  <Text style={styles.text}>{t('gift')}</Text>
                </Body> */}

                <Body
                  applyPadding={false}
                  style={styles.iconContainer}>
                  <Image source={DIAMOND_ICON} style={{ width: 30, height: 30 }} />
                  <Text style={styles.text}>{my_data?.wallet}</Text>
                </Body>

                <Body
                  applyPadding={false}
                  style={styles.iconContainer}>
                  <Image source={LUCKY_WHEEL_ICON} style={{ width: 20, height: 20 }} />
                  <Text style={styles.text}>{t('Lucky Wheel')}</Text>
                </Body>

                <Body
                  applyPadding={false}
                  style={styles.iconContainer}>
                  <TouchableOpacity onPress={handleClickMoreOption}>
                    <MaterialCommunityIcons name='dots-vertical' size={30} color={'#020202'} />
                  </TouchableOpacity>
                </Body>
              </Body>


              {/* middle container  */}
              <Body applyPadding={false} style={styles.middleContainer}>
                <Body applyPadding={false} style={styles.profileImageContainer}>

                  <Image
                    source={my_data?.profile_pic ? { uri: my_data?.profile_pic } : USER_FILLED_IMG}
                    style={{
                      width: 55,
                      height: 55,
                      marginBottom: 5,
                      borderWidth: 1,
                      borderRadius: 28,
                      borderColor: my_data?.profile_pic ? '#fff' : 'black'
                    }} />

                  <Text style={styles.text}>@{my_data?.username}</Text>
                  <Text style={styles.text}>{my_data?.nickname}</Text>
                </Body>
              </Body>


              {/* Bottom container */}

              <Body applyPadding={false} style={styles.bottomContainer} >

                <Pressable onPress={() => { navigation.navigate('Followings', { user_id: my_data?.id }) }} style={styles.followSection}>
                  <Text style={styles.text}>{user_data?.user?.Following?.length}</Text>
                  <Text style={styles.text}>{t('Followings')}</Text>
                </Pressable>

                <Pressable onPress={() => { navigation.navigate('Followers', { user_id: my_data?.id }) }} style={styles.followSection}>
                  <Text style={styles.text}>{user_data?.user?.Followers?.length}</Text>
                  <Text style={styles.text}>{t('Followers')}</Text>
                </Pressable>

                <Pressable onPress={() => { navigation.navigate('LikesHistory', { user_id: my_data?.id }) }} style={styles.followSection}>
                  <Text style={styles.text}>{total_like}</Text>
                  <Text style={styles.text}>{t('Likes')}</Text>
                </Pressable>

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
          {my_data?.bio && <Text style={styles.text} onLongPress={() => { copyToClipboard(t('Description')) }}>
            {my_data?.bio}</Text>}
          {my_data?.website && <Text style={styles.text}>{my_data?.website}</Text>}
          <Body applyPadding={false} style={styles.aboutContainer}>
            <TouchableOpacity>
              <Image
                source={PICTURE_ICON}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Q&A</Text>
            <TouchableOpacity>
              <Octicons size={20} color={'black'} name='video' />
            </TouchableOpacity>
          </Body>
        </Body>
      </Body>
    )
  }

  return (
    <>
      {
        isLogin ? (
          <Tabs.Container
            renderHeader={RenderProfile}>
            <Tabs.Tab
              label={() => (<Image source={LIKED_POST_NAVIGATION} style={styles.icon_size} />)}
              name={"like post"}>
              <LikedPost data={user_data?.liked_video} />
            </Tabs.Tab>

            <Tabs.Tab
              label={() => (<Ionicons name="swap-vertical" size={26} color={'gray'} />)}
              name={"pic post"}>
              <PicPost data={data} />
            </Tabs.Tab>

            <Tabs.Tab
              label={() => (<Image source={FAVOURITE} style={styles.icon_size} />)}
              name={"favourite post"}>
              <FavouritePost data={data} />
            </Tabs.Tab>

            <Tabs.Tab
              label={() => (<Image source={LOCK} style={styles.icon_size} />)}
              name={"private post"}>
              <PrivatePost data={data} />
            </Tabs.Tab>

            <Tabs.Tab
              label={() => (<Image source={VIDEO_POST_NAVIGATION} style={styles.icon_size} />)}
              name={"video post"}>
              <VideoPost data={user_data?.user?.videos} />
            </Tabs.Tab>

          </Tabs.Container>
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
              <Pressable onPress={() => { navigation.navigate('ChooseAccount') }}>
                <Container
                  width={width * 0.7}
                  borderRadius={BORDER.SMALL}
                  backgroundColor={COLOR.DANGER2}
                  padding={SPACING.S2}
                  justifyContent="center"
                  alignItems="center"
                  marginTop={SPACING.S3}>
                  <CText color={COLOR.WHITE}>Sign in or Register</CText>
                </Container>
              </Pressable>
            </Container>
          </Container>
        )
      }

    </>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 2,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 10
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  middleContainer: {
    position: 'absolute',
    top: 60,
    width: width,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
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
    alignItems: 'center',

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
    height: 220,
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

  },
  icon_size: {
    width: 26,
    height: 26,

  },
  text: {
        color: '#020202',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        // textShadowColor: 'white',
        // textShadowOffset: { width: 3, height: 3 },
        // textShadowRadius: 30,
  }
})