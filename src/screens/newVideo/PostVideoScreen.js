import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
  USER_FILLED_IMG
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import TopPostVideo from './components/TopPostVideo';
import ItemChoose from './components/ItemChoose';
import ItemAddCaption from './components/ItemAddCaption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';
import * as videoApi from '../../apis/video.api';
import ModalLoading from '../../components/modal/ModalLoading';
import { useSelector } from 'react-redux';
import axios from 'axios';
import WebView from 'react-native-webview'
import paymentsApi from '../../apis/paymentsApi';
import Promotion from '../promotion/Promotion';
import { Modalize } from 'react-native-modalize';
import { FlatList } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { change_video_url } from '../../store/videoSlice';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast'
import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';
import RNFS from 'react-native-fs';
import HighlightText from '@sanar/react-native-highlight-text';
import * as userApi from '../../apis/userApi'



const { width, height } = Dimensions.get('window')

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
  const modalizeRef = useRef(null)
  const [show_tag_modal, setShow_tag_modal] = useState(false)
  const [following_people, setFollowing_people] = useState()
  const video = useSelector(state => state.video)
  const my_data = useSelector(state => state.my_data.my_profile_data)
  const dispatch = useDispatch()
  const openModalize = async () => {
    const result = await userApi.getAllFollowingsUsers(my_data?.auth_token)
    setFollowing_people(result?.payload[0]?.Following)
    setShow_tag_modal(true)
  }
  const move_to_promote = () => {
    setPromotion(true)
  }
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userinfo);


  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = following_people?.filter((user) =>
      user.nickname.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };
  console.log(following_people)
  const [caption, setCaption] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [allow_comment, setAllow_comment] = useState(true)
  const [allow_duet, setAllowDuet] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null)
  const [allow_stitch, setAllow_stitch] = useState(true)
  const [promotion, setPromotion] = useState(false)
  const [PromoteModal, setpromoteModal] = useState(false)
  const [access_token, setAccess_token] = useState(null)
  const [paypal_url, setPaypal_url] = useState(null)
  const [promoteModal, setPromoteModal] = useState(false)
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])

  const generate_thumbnail = async () => {
    const cache_dir_path = await RNFS.CachesDirectoryPath;
    const filename = new Date().getTime()
    const output_path = `${cache_dir_path}/${filename}.mp4`
    const command = `-i ${video?.video_url} -ss 00:00:05 -vframes 1 ${output_path}`;

    return new Promise((resolve, reject) => {
      FFmpegKit.executeAsync(command, async (session) => {
        const returnCode = await session.getReturnCode();
        if (ReturnCode.isSuccess(returnCode)) {
          console.log('success')
          resolve(true)
          setImage(`file:// + ${output_path}`)
        } else if (ReturnCode.isCancel(returnCode)) {
          Toast.show('Cancel', Toast.LONG);
          resolve(false)
        } else {
          Toast.show('Error', Toast.LONG);
          resolve(false)
        }
      });
    })
  };
  useEffect(() => {
    generate_thumbnail()
  }, [])




  const handlePostVideo = async () => {
    if (my_data) {
      try {
        setShowModal(true);

        const formData = new FormData();
        formData.append('video', {
          uri: `file:// + ${video?.video_url}`,
          name: video?.video_url.split('/').reverse()[0],
          type: 'video/mp4',
        });

        formData.append('cover', {
          uri: image,
          name: image.split('/').reverse()[0],
          type: 'image/jpeg'
        })

        formData.append('caption', caption);
        formData.append('privacy', privacy);
        formData.append('allow_comment', allow_comment)
        formData.append('allow_duet', allow_duet)
        formData.append('user_id', my_data.id)
        // formData.append('allow_stitch', allow_stitch)
        // formData.append('countries', countries)
        // formData.append('ciities', cities)

        const result = await videoApi.postVideo(formData, my_data?.auth_token);

        navigation.replace('Index');
      } catch (error) {
        console.log('error during post video: ', error.message);
      } finally {
        setShowModal(false);
      }
    } else {
      Alert.alert("Login required", "please login youerself for uploading a video")
    }
  };



  const makePayments = async () => {
    try {
      const token = await paymentsApi.generateToken()
      setAccess_token(token)
      const res = await paymentsApi.createOrder(token)
      setPromoteModal(false)
      if (res?.links) {
        const findUrl = res.links.find(data => data?.rel === "approve")
        setPaypal_url(findUrl.href)
        setpromoteModal(true)
        console.log("response after calling create order:", findUrl.href)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const onUrlChange = (webviewState) => {
    console.log("web view state change :", webviewState.url)
    if (webviewState.url.includes('https://example.com/cancel')) {
      clearPaypalState()
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {

      const urlValues = queryString.parseUrl(webviewState.url)
      const { token } = urlValues.query
      if (!!token) {
        paymentSucess(token)
      }

    }
  }

  const paymentSucess = async (id) => {
    try {
      const res = paymentsApi.capturePayment(id, access_token)
      console.log("capturePayment res++++", res)
      alert("Payment sucessfull...!!!")
      clearPaypalState()
    } catch (error) {
      console.log("error raised in payment capture", error)
    }
  }

  const clearPaypalState = () => {
    setPaypal_url(null)
    setAccess_token(null)
    setpromoteModal(false)
  }



  const userinfo = [
    {
      id: 1,
      name: "Diwakar kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 2,
      name: "pratikesh kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 3,
      name: "shubham kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 4,
      name: "pankaj kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 5,
      name: "pankaj kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 6,
      name: "diwakar kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 7,
      name: "Niraj kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 8,
      name: "aryan kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
    {
      id: 9,
      name: "dinkar kumar",
      img: "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
    },
  ];

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
      paddingTop={StatusBar.currentHeight}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={COLOR.WHITE}
        translucent={false}
      />
      {showModal && <ModalLoading visible={showModal} />}
      <TopPostVideo
        pathVideo={video?.video_url}
        caption={caption}
        setCaption={text => setCaption(text)}
        image={image}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ItemChoose
          iconLeft={USER_IMG}
          name={'Tag everyone'}
          iconRight={ARROW_FORWARD_IOS_ICON}
          onPress={openModalize}
        />
        <ItemChoose
          iconLeft={PLACE_ICON}
          name={'Location'}
          iconRight={ARROW_FORWARD_IOS_ICON}
          onPress={() => { navigation.navigate('SelectingLocationScreen', { setCountries, setCities, countries, cities }) }}

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
          value={privacy}
        />
        <ItemChoose
          iconLeft={MESSAGE_OUTLINE_ICON}
          name={'Comments are allowed'}
          value={allow_comment}
          onChange={e => setAllow_comment(e)}
        />
        <ItemChoose
          iconLeft={FIBER_SMART_RECORD_ICON}
          name={'Allow Duet'}
          value={allow_duet}
          onChange={e => setAllowDuet(e)} />

        <ItemChoose
          iconLeft={STITCH_ICON}
          name={'Allow Stitch'}
          value={allow_stitch}
          onChange={e => setAllow_stitch(e)} />

        <ItemChoose
          iconLeft={MORE_HORIZ_ICON}
          name={'More options'}
          iconRight={ARROW_FORWARD_IOS_ICON}
        />
      </ScrollView>
      <View style={styles.actionBottom}>
        <Pressable
          style={[styles.button, { backgroundColor: COLOR.WHITE }]}
          onPress={() => navigation.goBack()}>
          <CText>Draft</CText>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: COLOR.DANGER2 }]}
          onPress={() => { navigation.navigate('Promotion') }}>
          <CText color={COLOR.WHITE}>Promote</CText>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: COLOR.DANGER2 }]}
          onPress={handlePostVideo}>
          <CText color={COLOR.WHITE}>Post</CText>
        </Pressable>

      </View>

      <Modal visible={promotion} transparent={true}>
        <Promotion makePayments={makePayments} setPromotion={setPromotion} />
      </Modal>


      <Modal visible={PromoteModal}>
        <View style={{ flex: 1, }}>
          <WebView
            source={{ uri: paypal_url }}
            onNavigationStateChange={onUrlChange}
          />
        </View>
      </Modal>


      <Modal visible={show_tag_modal} transparent={true} animationType='slide'>
        <Pressable
          style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onPress={() => { setShow_tag_modal(false) }} />
        <View style={{
          height: height * 0.6,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}>
          <View style={{
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: width * 0.05,
            borderBottomWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            marginTop: 10,
            justifyContent: 'center'
          }}>
            <AntDesign name='search1' size={20} color={'#020202'} />
            <View style={{ flex: 1 }}>
              <TextInput
                placeholder='Search'
                onChangeText={handleSearch}
                style={{
                  width: '100%',
                  marginLeft: 10
                }}
              />
            </View>
            <Pressable onPress={() => { setShow_tag_modal(false) }}>
              <Entypo name='cross' size={30} color={'#020202'} />
            </Pressable>
          </View>
          <View style={[styles.tag_main_container, { justifyContent: 'center' }]}>
            {/*             
            <TouchableOpacity style={styles.tag_button}>
              <Text style={{ color: 'white' }}>Tag everyone</Text>
            </TouchableOpacity> */}
          </View>
          <FlatList
            data={filteredUsers ? filteredUsers : following_people}
            scrollEventThrottle={20}
            renderItem={({ item, index }) => (
              <View style={styles.tag_main_container}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <Image
                    source={item?.profile_pic ? { uri: item?.profile_pic } : USER_FILLED_IMG}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginRight: 20
                    }}
                  />
                  <View>
                  <Text style={styles.nickname}>{item?.nickname}</Text>
                  <Text style={styles.username}>@{item?.username}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.tag_button}>
                  <Text style={{ color: 'white' }}>Tag</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </Modal>

    </Container>
  );
};

export default PostVideoScreen;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  tag_main_container: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: width * 0.1,
    justifyContent: 'space-between'
  },
  tag_button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },
  nickname: {
    fontSize: 16,
    color: '#020202'
  },
  username: {
    fontSize: 12
  }
});
