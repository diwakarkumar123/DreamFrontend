import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, CText, Icon } from '../../components';
import {
  ARROW_BACK_IMG,
  ARROW_BACK_IOS_ICON,
  ARROW_FORWARD_IOS_ICON,
  FIBER_SMART_RECORD_ICON,
  LOCK_OUTLINE_ICON,
  MESSAGE_OUTLINE_ICON,
  MORE_HORIZ_ICON,
  PLACE_ICON,
  STITCH_ICON,
  USER_IMG,
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import TopPostVideo from './components/TopPostVideo';
import ItemChoose from './components/ItemChoose';
import ItemAddCaption from './components/ItemAddCaption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';
import * as videoApi from '../../apis/video.api';
import ModalLoading from '../../components/modal/ModalLoading';

const listAddress = [
  'Lahore',
  'Islamabad',
  'Karachi',
  'Peshawar',
  'UK',
  'Canada',
];
const iconCaption = ['#', '@', '▶', '◉'];

const PostVideoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [caption, setCaption] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Post',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerLeft: () => (
        <Icon
          source={ARROW_BACK_IMG}
          tintColor={COLOR.BLACK}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const handlePostVideo = async () => {
    try {
      setShowModal(true);
      const token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
      console.log('token handle post video backedn: ', token);
      const formData = new FormData();
      formData.append('video', {
        uri: route?.params?.pathVideo,
        name: route?.params?.pathVideo.split('/').reverse()[0],
        type: 'mp4/*',
      });
      formData.append('caption', caption);
      formData.append('privacy', privacy);

      const result = await videoApi.postVideo(formData, token);
      console.log('resultpost vidoe sohail:::', result);
      navigation.replace('Index');
    } catch (error) {
      console.log('error during post video: ', error);
    } finally {
      setShowModal(false);
    }
  };

  const handleClickAddress = e => {
    let txt = caption.trim();
    if (iconCaption.includes(txt[txt.length - 1])) txt = txt.slice(0, -1);
    console.log(txt);
    setCaption(txt.trim() + ' ◉' + e);
  };

  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      paddingHorizontal={SPACING.S4}
      paddingTop={StatusBar.currentHeight + 40}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={COLOR.WHITE}
        translucent={false}
      />
      {showModal && <ModalLoading visible={showModal} />}
      <TopPostVideo
        pathVideo={route.params.pathVideo}
        caption={caption}
        setCaption={text => setCaption(text)}
      />
      <ItemChoose
        iconLeft={USER_IMG}
        name={'Tag everyone'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <ItemChoose
        iconLeft={PLACE_ICON}
        name={'Location'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <Container marginBottom={SPACING.S2}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollToOverflowEnabled={true}>
          {listAddress.map((e, i) => {
            return (
              <ItemAddCaption
                name={e}
                key={i}
                onPress={() => handleClickAddress(e)}
              />
            );
          })}
        </ScrollView>
      </Container>
      <ItemChoose
        iconLeft={LOCK_OUTLINE_ICON}
        name={'Who can watch this video'}
        type={privacy ? 'Only you' : 'Public'}
        onChange={a => setPrivacy(a)}
      />
      <ItemChoose
        iconLeft={MESSAGE_OUTLINE_ICON}
        name={'Comments are allowed'}
      />
      <ItemChoose iconLeft={FIBER_SMART_RECORD_ICON} name={'Allow Duet'} />
      <ItemChoose iconLeft={STITCH_ICON} name={'Allow Stitch'} />
      <ItemChoose
        iconLeft={MORE_HORIZ_ICON}
        name={'More options'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <View style={styles.actionBottom}>
        <Pressable
          style={[styles.button, { backgroundColor: COLOR.WHITE }]}
          onPress={() => navigation.goBack()}>
          <CText>Draft</CText>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: COLOR.DANGER2 }]}
          onPress={handlePostVideo}>
          <CText color={COLOR.WHITE}>Post</CText>
        </Pressable>
      </View>
    </Container>
  );
};

export default PostVideoScreen;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: BORDER.SMALL,
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GRAY,
  },
  actionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
  },
});
