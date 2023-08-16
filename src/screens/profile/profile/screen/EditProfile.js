import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, FlatList, Modal, TextInput, Image, Pressable, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'
import { Modalize } from 'react-native-modalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { AVATA_IMG, VIDEOCAMR_IMG } from '../../../../configs/source'
import DisplayProfile from '../../../../components/DisplayProfile'
import { useDispatch, useSelector } from 'react-redux'
import { USER_FILLED_IMG } from '../../../../configs/source'
import { updateProfile } from '../../../../apis/userApi'
import Toast from "react-native-simple-toast";
import {
  add_my_profile_data,
  addIsLogin,
  update_wallet_diamond,
  update_nickname,
  update_gender,
  update_bio,
  update_website,
  update_dob,
  update_profile_pic,
  update_lat,
  update_lang,
  update_online,
  update_verified,
  update_city,
  update_country,
  update_fb_id,
  update_emotion_state,
  update_making_friend_intention,
  update_hobbies,
  update_person_height,
  update_person_weight,
  update_instagram,
  update_you_tube,
  update_facebook,
  update_occupation,
  update_profile_video,
  update_twitter
} from '../../../../store/my_dataSlice'
import * as ImagePicker from 'react-native-image-picker'


const { width, height } = Dimensions.get('window')

const EditProfile = () => {
  const navigation = useNavigation()
  const currentUser = useSelector(state => state.index.currentUser);
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.my_data.isLogin)

  const my_data = useSelector(state => state.my_data.my_profile_data)

  const uri = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'
  const [nickname, setNickname] = useState(null)
  const [show_nickname_modal, setShow_nickname_modal] = useState(false)
  const [gender, setGender] = useState('Male')
  const [show_gender_modal, setShow_gender_modal] = useState(false)
  const [self_introduction, setSelf_introduction] = useState(null)
  const [show_self_introduction_modal, setshow_self_introduction_modal] = useState(false)
  const [emotion_state, setEmotion_state] = useState(null)
  const [show_emotion_state_modal, setshow_emotion_state_modal] = useState(false)
  const [person_height, setPerson_height] = useState(null)
  const [person_weight, setPerson_weight] = useState(null)
  const [person_weight_unit, setPerson_weight_unit] = useState('CM')
  const [person_height_unit, setPerson_height_unit] = useState('KG')
  const [instagram_id, setInstagram_id] = useState(null)
  const [show_instagram_modal, setShow_instagram_modal] = useState(false)
  const [yt_channel, setYt_channel] = useState(null)
  const [show_yt_modal, setShow_yt_modal] = useState(false)
  const [facebook, setFacebook] = useState(null)
  const [show_facebook_modal, setShow_facebook_modal] = useState(false)
  const [twitter, setTwitter] = useState(null)
  const [show_twitter_modal, setShow_twitter_modal] = useState(false)
  const [show_person_height_modal, setShow_person_height_modal] = useState(false)
  const [show_person_weight_modal, setShow_person_weight_modal] = useState(false)
  const [show_dob_modal, setShow_dob_modal] = useState(false)
  const [date, setDate] = useState(new Date())
  const [pic_modal, setPic_modal] = useState(false)
  const [video_modal, setVideo_modal] = useState(false)
  const [picture, setPicture] = useState('')
  const [video, setvideo] = useState('')



  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    })
    if (!result.didCancel) {
      setPicture(result.assets[0].uri)
      setPic_modal(false)
    }

  }

  const clickImage = async () => {
    const result = await ImagePicker.launchCamera({
      mediaType: 'photo',
      quality: 1,
    })
    if (!result.didCancel) {
      setPicture(result.assets[0].uri)
      setPic_modal(false)
    }
  }


  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'video',
      quality: 1,
      durationLimit: 10

    })
    console.log(result)
    if (!result.didCancel) {
      setPicture(result.assets[0].uri)
      setPic_modal(false)
    }

  }

  const clickVideo = async () => {
    const result = await ImagePicker.launchCamera({
      mediaType: 'video',
      quality: 1,
      durationLimit: 10
    })
    console.log(result)
    if (!result.didCancel) {
      setPicture(result.assets[0].uri)
      setPic_modal(false)
    }
  }


  const [list, setList] = useState([
    {
      name: `Nickname`,
      value: my_data?.nickname,
      onPress: () => {
        setShow_nickname_modal(true)
      }
    },
    {
      name: 'Gender',
      value: my_data?.gender,
      onPress: () => {
        setShow_gender_modal(true)
      }
    },
    {
      name: 'Birthday',
      value: my_data?.dob?.split("T")[0],
      onPress: () => {
        setShow_dob_modal(true)
      }
    },
    {
      name: 'Self introduction',
      value: my_data?.bio,
      onPress: () => {
        setshow_self_introduction_modal(true)
      }
    },
    {
      name: 'Country',
      value: my_data?.country,
      onPress: () => {
        navigation.navigate('CountryAndRegion', { list, setList })
      }
    },
    {
      name: 'Emotion State',
      value: my_data?.emotion_state,
      onPress: () => {
        setshow_emotion_state_modal(true)
      }
    },
    {
      name: 'Making friend intention',
      value: my_data?.making_friend_intention,
      onPress: () => {
        navigation.navigate('MakingFriendIntenttion', { list, setList })
      }
    },
    {
      name: 'Occupation',
      value: my_data?.occupation,
      onPress: () => {
        navigation.navigate('Industries', { list, setList })
      }
    },
    {
      name: 'Mastery of language',
      value: '',
      onPress: () => {
        console.log("mastery of language pressed")
      }
    },
    {
      name: 'Hobbies',
      value: my_data?.hobbies,
      onPress: () => {
        console.log("hibbies pressed")
      }
    },
    {
      name: 'Height',
      value: my_data?.person_height,
      onPress: () => {
        setShow_person_height_modal(true)
      }
    },
    {
      name: 'Weight',
      value: my_data?.person_weight,
      onPress: () => {
        setShow_person_weight_modal(true)
      }
    },
    {
      name: 'Instagram',
      value: my_data?.instagram,
      onPress: () => {
        setShow_instagram_modal(true)
      }
    },
    {
      name: 'Youtube',
      value: my_data?.you_tube,
      onPress: () => {
        setShow_yt_modal(true)
      }
    },
    {
      name: 'Facebook',
      value: my_data?.facebook,
      onPress: () => {
        setShow_facebook_modal(true)
      }
    },
    {
      name: 'Twitter',
      value: my_data?.twitter,
      onPress: () => {
        setShow_twitter_modal(true)
      }
    },
  ])



  const emotion = [
    { name: 'Single' },
    { name: 'In Love' },
    { name: 'Married' }
  ]


  const handleNicknamePress = async (value) => {
    const name = 'nickname'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        dispatch(update_nickname(value))
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_nickname_modal(false)
  };

  const handleGenderPress = (value) => {
    const name = 'gender'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        dispatch(update_gender(value))
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_gender_modal(false)
  };


  const handleSelfIntroductionPress = (value) => {
    const name = 'bio'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        dispatch(update_bio(value))
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setshow_self_introduction_modal(false)
  };


  const handleEmotionStatePress = (value) => {
    const name = 'emotion_state'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        dispatch(update_emotion_state(value))
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setshow_emotion_state_modal(false)
  };



  const handleHeightPress = (value) => {
    const name = 'person_height'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_person_height(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_person_height_modal(false)

  };

  const handleWeightPress = (value) => {
    const name = 'person_weight'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_person_weight(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_person_weight_modal(false)

  };

  const handleInstagramPress = (value) => {
    const name = 'instagram'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_instagram(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_instagram_modal(false)

  };

  const handleFacebookPress = (value) => {
    const name = 'facebook'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_facebook(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_facebook_modal(false)

  };

  const handleYoutubePress = (value) => {
    const name = 'you_tube'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_you_tube(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_yt_modal(false)

  };

  const handleTwitterPress = (value) => {
    const name = 'twitter'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_twitter(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_twitter_modal(false)

  };


  const handleDobPress = (value) => {
    const name = 'dob'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
        dispatch(update_dob(value))
      })
      .catch((err) => {
        console.log(err.message)
      })
    setShow_dob_modal(false)
  };


  const RenderHeaderItem = () => {
    return (
      <Body applyPadding={false}>
        <Body applyPadding={false} style={styles.firstContainer} >
          <TouchableOpacity applyPadding={false} style={styles.picView} onPress={() => { setPic_modal(true) }}>
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
            <Text style={[styles.headerText, { fontSize: 16, marginLeft: 0 }]}>Change Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity applyPadding={false} style={styles.picView} onPress={() => { setVideo_modal(true) }}>
            <Image
              source={my_data?.profile_video ? { uri: my_data?.profile_video } : VIDEOCAMR_IMG}
              style={{
                width: 55,
                height: 55,
                marginBottom: 5,
                borderWidth: 1,
                borderRadius: 28,
                borderColor: my_data?.profile_pic ? '#fff' : 'black'
              }} />
            <Text style={[styles.headerText, { fontSize: 16, marginLeft: 0 }]}>Change Video</Text>
          </TouchableOpacity>
        </Body>
        <Body
          applyPadding={false}
          style={{
            width: width * 0.95,
            height: 9,
            backgroundColor: '#D9D9D9',
            marginTop: 10
          }}>
        </Body>
      </Body>
    )
  }



  return (
    <Body style={{ flex: 1 }}>

      <Body applyPadding={false} style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <AntDesign name='arrowleft' size={20} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { marginTop: 0 }]}>
          Edit Profile
        </Text>
      </Body>


      {/* Edit Profile Body section */}
      <Body applyPadding={false} style={styles.bodyContainer} >
        <FlatList
          data={list}
          ListHeaderComponent={RenderHeaderItem}
          renderItem={({ item, index }) => (
            <Pressable onPress={item?.onPress}>
              <Body applyPadding={false} style={styles.secondContainer}>
                <Text style={styles.txt}>{item.name}</Text>
                <Body applyPadding={false} style={styles.leftContainer}>
                  <Text style={[styles.txt, { color: 'rgba(0, 0, 0, 0.4)' }]}>{item?.value?.slice(0, 25)}</Text>
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={item.onPress}
                  >
                    <AntDesign name='right' size={25} color={'#020202'} />
                  </TouchableOpacity>
                </Body>
              </Body>
            </Pressable>
          )} />
      </Body>



      {/* nickname modal */}
      <Modal visible={show_nickname_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_nickname_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Nickname
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Nickname'
              style={{ paddingBottom: -10, }}
              value={nickname}
              onChangeText={(val) => { setNickname(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_nickname_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleNicknamePress(nickname) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>



      {/* gender modal */}
      <Modal visible={show_gender_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_gender_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Gender
          </Text>
          <Body applyPadding={false} style={styles.modal_gender}>
            <Body
              applyPadding={false}
              style={{
                width: 55,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                applyPadding={false}
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 0.3,
                  backgroundColor: gender == 'Male' ? 'red' : 'white',
                }}
                onPress={() => { setGender("Male") }}
              >
              </TouchableOpacity>
              <Text>Male</Text>
            </Body>
            <Body
              applyPadding={false}
              style={{
                width: 55,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                applyPadding={false}
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 0.3,
                  backgroundColor: gender == 'Female' ? 'red' : 'white'
                }}
                onPress={() => { setGender("Female") }}
              >
              </TouchableOpacity>
              <Text>Female</Text>
            </Body>

            <Body
              applyPadding={false}
              style={{
                alignItems: 'center',
                width: 55,
              }}
            >
              <TouchableOpacity
                applyPadding={false}
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 0.3,
                  backgroundColor: gender == 'Other' ? 'red' : 'white'
                }}
                onPress={() => { setGender("Other") }}
              >
              </TouchableOpacity>
              <Text>Other</Text>
            </Body>
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_gender_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleGenderPress(gender) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>


      {/* self introduction modal */}
      <Modal visible={show_self_introduction_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setshow_self_introduction_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Self Introduction
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder="I'm a full stack devloper"
              style={{ paddingBottom: -10 }}
              value={self_introduction}
              onChangeText={(val) => { setSelf_introduction(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setshow_self_introduction_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleSelfIntroductionPress(self_introduction) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>



      {/* Emotion state */}
      <Modal visible={show_emotion_state_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setshow_emotion_state_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Please select emotion state
          </Text>
          <Body applyPadding={false} style={styles.emotion_container} >
            <FlatList
              data={emotion}
              horizontal={true}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[styles.emotion_card, {
                    borderColor: emotion_state == item.name ? "black" : 'rgba(0, 0, 0, 0.2)'
                  }]}
                  onPress={() => { setEmotion_state(item.name) }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </Body>

          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setshow_emotion_state_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleEmotionStatePress(emotion_state) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* height modal  */}
      <Modal visible={show_person_height_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_person_height_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Height
          </Text>
          <Body applyPadding={false} style={styles.height_middle_modal}>
            <TextInput
              placeholder='Please fill it'
              style={{ width: width * 0.22 }}
              keyboardType='numeric'
              value={person_height}
              onChangeText={(val) => { setPerson_height(val) }}
            />
            <TouchableOpacity
              onPress={() => {
                setPerson_height_unit('CM')
              }}>
              <Text style={{
                color: person_height_unit == 'CM' ? '#FC1B87' : 'black'
              }}>CM</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              setPerson_height_unit('FT')
            }}>
              <Text style={{
                color: person_height_unit == 'FT' ? '#FC1B87' : 'black'
              }}>FT</Text>
            </TouchableOpacity>
          </Body>

          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_person_height_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleHeightPress(person_height + " " + person_height_unit) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* weight modal */}
      <Modal visible={show_person_weight_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_person_weight_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Weight
          </Text>
          <Body applyPadding={false} style={styles.height_middle_modal}>
            <TextInput
              placeholder='Please fill it'
              style={{ width: width * 0.22 }}
              keyboardType='numeric'
              value={person_weight}
              onChangeText={(val) => { setPerson_weight(val) }}
            />
            <TouchableOpacity
              onPress={() => {
                setPerson_weight_unit('Kg')
              }}>
              <Text style={{
                color: person_weight_unit == 'Kg' ? '#FC1B87' : 'black'
              }}>Kg</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              setPerson_weight_unit('Lb')
            }}>
              <Text style={{
                color: person_weight_unit == 'Lb' ? '#FC1B87' : 'black'
              }}>Lb</Text>
            </TouchableOpacity>
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_person_weight_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleWeightPress(person_weight + " " + person_weight_unit) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* instagram modal */}
      <Modal visible={show_instagram_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_instagram_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Instagram
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Instagram'
              style={{ paddingBottom: -10 }}
              value={instagram_id}
              onChangeText={(val) => { setInstagram_id(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_instagram_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleInstagramPress(instagram_id) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* youtube modal */}
      <Modal visible={show_yt_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_yt_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Youtube
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Youtube'
              style={{ paddingBottom: -10 }}
              value={yt_channel}
              onChangeText={(val) => { setYt_channel(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_yt_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleYoutubePress(yt_channel) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* Facebook modal */}
      <Modal visible={show_facebook_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_facebook_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Facebook
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Facebook'
              style={{ paddingBottom: -10 }}
              value={facebook}
              onChangeText={(val) => { setFacebook(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_facebook_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleFacebookPress(facebook) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>

      {/* twitter modal */}
      <Modal visible={show_twitter_modal} transparent={true}>
        <Pressable style={styles.modal_background} onPress={() => { setShow_twitter_modal(false) }} />
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Twitter
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Twitter'
              style={{ paddingBottom: -10 }}
              value={twitter}
              onChangeText={(val) => { setTwitter(val) }}
            />
          </Body>
          <View style={styles.modal_button_view}>
            <TouchableOpacity style={styles.modal_button} onPress={() => { setShow_twitter_modal(false) }}>
              <Text style={styles.modal_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { handleTwitterPress(twitter) }}
              style={styles.modal_button}>
              <Text style={styles.modal_button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Modal>



      {/* modal for picking date of birth */}
      <DatePicker
        modal
        open={show_dob_modal}
        date={date}
        mode="date"
        onConfirm={(date) => {
          handleDobPress(date)
        }}
        onCancel={() => {
          setShow_dob_modal(false)
        }} />

      {/* modal for profile picture */}

      <Modal visible={pic_modal} transparent={true} animationType='slide'>
        <Pressable onPress={() => {
          setPic_modal(false
          )
        }} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
        <View style={styles.modal_main_view}>
          <TouchableOpacity
            onPress={pickImages}
            style={styles.modal_button1}>
            <MaterialIcons name='photo-library' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>Photo Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Avatar') }}
            style={styles.modal_button1}>
            <Image
              source={AVATA_IMG}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20
              }}
            />
            <Text style={{
              color: 'black'
            }}>Avatar list</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={clickImage}
            style={styles.modal_button1}>
            <Entypo name='camera' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>
              Camera</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* profile video section */}
      <Modal visible={video_modal} transparent={true} animationType='slide'>
        <Pressable onPress={() => { setVideo_modal(false) }} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
        <View style={styles.modal_main_view}>
          <TouchableOpacity
            onPress={pickVideo}
            style={styles.modal_button1}>
            <MaterialIcons name='photo-library' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>Video Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={clickVideo}
            style={styles.modal_button1}>
            <Entypo name='camera' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>
              Camera</Text>
          </TouchableOpacity>

        </View>
      </Modal>

    </Body>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 25,
    marginTop: 3
  },
  picView: {
    alignItems: 'center'
  },
  firstContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-evenly',

  },
  bodyContainer: {
    // width: width,
    // alignItems: 'center',
    // marginTop: 20
    flex: 1
  },
  secondContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: width * 0.05
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  nickname_modal: {
    width: width * 0.6,
    height: height * 0.22,
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    paddingTop: 5,
  },
  modal_text: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  modal_textInput: {
    borderBottomWidth: 0.5,
    width: width * 0.6,
    alignItems: 'center',
    marginTop: height * 0.03
  },
  // modal_button: {
  //   backgroundColor: 'red',
  //   paddingHorizontal: 20,
  //   paddingVertical: 3,
  //   borderRadius: 2
  // },
  modal_button_text: {
    color: 'white'
  },
  modal_gender: {
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-between',
    marginTop: height * 0.04
  },
  emotion_card: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: width * 0.17,
    marginHorizontal: width * 0.015
  },
  emotion_container: {
    flexDirection: 'row',
    width: width * 0.6,
    marginTop: height * 0.05
  },
  height_middle_modal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width * 0.5,
    marginTop: height * 0.02
  },
  modal_main_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 1,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    zIndex: 1000
  },
  modal_button: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 20,
    // backgroundColor: 'red',
    // width: '100%',
    // paddingVertical: 5,
    // position: 'absolute',
    // bottom: 5,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 2
  },
  modal_button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRightWidth: 0.5,
    borderColor: 'black',
    borderLeftWidth: 0.5
  },
  modal_background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modal_button_view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 10
  }
})


