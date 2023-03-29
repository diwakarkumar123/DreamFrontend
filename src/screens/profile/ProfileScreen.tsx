import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';
import { Container, Icon, Row } from '../../components';
import {
  ADD_ACCOUNT_ICON_IMG,
  ARROW_BACK_IMG,
  MORE_VERT_IMG
} from '../../configs/source';
import { COLOR, SPACING } from '../../configs/styles';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setBottomSheetSettingProfile } from '../../store/indexSlice';
import { MaterialTopTabStackParamlist } from '../../types/navigation';
import ListVideo from './ListVideo';
import User from './User';

const statusbarHeight = StatusBar.currentHeight;

interface Props extends MaterialTopTabScreenProps<MaterialTopTabStackParamlist, "ProfileScreenTab"> {}
export function ProfileScreen(props: Props) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.index.currentUser);
  const userPlaying = useAppSelector(state => state.mainScreen.userPlaying);

  const { showHeader } = props.route.params;
  const [videos, setVideos] = useState([]);
  const [videosLike, setVideosLike] = useState([]);
  const [videoPrivate, setVideoPrivate] = useState([]);

  const fetchData = useCallback(async () => {
    // try {
    //   let dataVideo = null;
    //   let id = null;
    //   let token = null;
    //   if (!showHeader) {
    //     token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
    //     id = await AsyncStorage.getItem(KEY_STORAGE.ID_USER);
    //     dataVideo = videoApi.getVideoByUserAuth(token);
    //   } else {
    //     id = route.params.id ? route.params.id : currentUser;

    //     dataVideo = videoApi.getVideoByUserId(id);
    //   }
    //   const dataUser = userApi.getUserById(id);

    //   const [userInfor, listVideo] = await Promise.all([dataUser, dataVideo]);
    //   // setUser(userInfor);
    //   setVideos(listVideo.data.data || []);

    //   let getVidesLike = [];
    //   if (!showHeader && userInfor?.privacy.like) {
    //     getVidesLike = await videoApi.getVideoLikeByUserAuth(token);
    //   } else {
    //     getVidesLike = await videoApi.getVideoLikeByIdUser(userInfor?._id);
    //   }

    //   setVideosLike(getVidesLike.data || []);

    //   if (!showHeader) {
    //     const videoP = await videoApi.getVideoByUserAuth(token, true);
    //     setVideoPrivate(videoP.data.data || []);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }, [currentUser, showHeader]);

  // useEffect(() => {
  //   if (isFocused) {
  //     fetchData();
  //   }
  // }, [isFocused, fetchData, showHeader]);

  const handleClickMoreOption = useCallback(() => {
    dispatch(setBottomSheetSettingProfile(true));
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      //@ts-ignore
      headerLeft: () => (
        <Icon source={ADD_ACCOUNT_ICON_IMG} marginLeft={SPACING.S4} />
      ),
      headerRight: () => (
        <Icon
          source={MORE_VERT_IMG}
          marginRight={SPACING.S4}
          onPress={handleClickMoreOption}
        />
      ),
    });
  }, []);
  return (
    <Container
      flex={1}
      paddingBottom={!showHeader ? 49.1 : 0}
      backgroundColor={COLOR.WHITE}>
      {showHeader ? (
        <>
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
                onPress={() => props.navigation.goBack()}
              />
              <Icon source={MORE_VERT_IMG} onPress={handleClickMoreOption} />
            </Row>
          </Container>
        </>
      ) : null}
      <Tabs.Container renderHeader={() => {
        if (showHeader) return <User user={userPlaying} showHeader={showHeader}/>
        else if (currentUser) return <User user={currentUser} showHeader={showHeader} />
        else return <></>
      }}>
        <Tabs.Tab name="Videos">
          <ListVideo dataList={videos} />
        </Tabs.Tab>

        <Tabs.Tab name={'Liked'}>
          <ListVideo dataList={videosLike} />
        </Tabs.Tab>

        {!showHeader ? (
          <Tabs.Tab
            name={'Private'}>
            <ListVideo dataList={videoPrivate} />
          </Tabs.Tab>
        ) : null}
      </Tabs.Container>
    </Container>
  );
};