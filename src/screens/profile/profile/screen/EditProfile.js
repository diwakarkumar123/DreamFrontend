import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, FlatList, Modal, TextInput, Image } from 'react-native'
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
import { useSelector } from 'react-redux'
import { USER_FILLED_IMG } from '../../../../configs/source'
import { updateProfile } from '../../../../apis/userApi'
import Toast from "react-native-simple-toast";


const { width, height } = Dimensions.get('window')

const EditProfile = () => {
  const navigation = useNavigation()
  const currentUser = useSelector(state => state.index.currentUser);

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

  const modalizeRef = useRef(null)
  const modalizeRef1 = useRef(null)

  useEffect(() => {
    list.forEach((item) => {
      const fieldName = item?.name?.toLocaleLowerCase()
      // console.log(fieldName)
      if (my_data.hasOwnProperty(fieldName)) {
        item.value = my_data[fieldName]
      }
    })
  }, [])



  const pickImages = () => {

  }

  const clickImage = () => {

  }

  const [list, setList] = useState([
    {
      name: 'Nickname',
      value: '',
      onPress: () => {
        setShow_nickname_modal(true)
      }
    },
    {
      name: 'Gender',
      value: '',
      onPress: () => {
        setShow_gender_modal(true)
      }
    },
    {
      name: 'Birthday',
      value: '',
      onPress: () => {
        setShow_dob_modal(true)
      }
    },
    {
      name: 'Self introduction',
      value: '',
      onPress: () => {
        setshow_self_introduction_modal(true)
      }
    },
    {
      name: 'Country',
      value: '',
      onPress: () => {
        navigation.navigate('CountryAndRegion', { list, setList })
      }
    },
    {
      name: 'Emotion State',
      value: '',
      onPress: () => {
        setshow_emotion_state_modal(true)
      }
    },
    {
      name: 'Making friend intention',
      value: '',
      onPress: () => {
        navigation.navigate('MakingFriendIntenttion', { list, setList })
      }
    },
    {
      name: 'Occupation',
      value: '',
      onPress: () => {
        navigation.navigate('Industries', { list, setList })
      }
    },
    {
      name: 'Mastery of language',
      value: '',
      onPress: ''
    },
    {
      name: 'Hobbies',
      value: '',
      onPress: ''
    },
    {
      name: 'Height',
      value: '',
      onPress: () => {
        setShow_person_height_modal(true)
      }
    },
    {
      name: 'Weight',
      value: '',
      onPress: () => {
        setShow_person_weight_modal(true)
      }
    },
    {
      name: 'Instagram',
      value: '',
      onPress: () => {
        setShow_instagram_modal(true)
      }
    },
    {
      name: 'Youtube',
      value: '',
      onPress: () => {
        setShow_yt_modal(true)
      }
    },
    {
      name: 'Facebook',
      value: '',
      onPress: () => {
        setShow_facebook_modal(true)
      }
    },
    {
      name: 'Twitter',
      value: '',
      onPress: () => {
        setShow_twitter_modal(true)
      }
    },
    {
      name: 'More information',
      value: '',
      onPress: ''
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
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })

    const updatedList = list.map((item) => {
      if (item.name === 'Nickname') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
    setShow_nickname_modal(false)

  };
  const handleGenderPress = (value) => {
    const name = 'gender'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name === 'Gender') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
    setShow_gender_modal(false)
  };

  const handleSelfIntroductionPress = (value) => {
    const name = 'bio'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name === 'Self introduction') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
    setshow_self_introduction_modal(false)
  };

  const handleEmotionStatePress = (value) => {
    const name = 'emotion_state'
    const data = {
      name, value
    }
    updateProfile(my_data?.auth_token, data)
      .then((res) => {
        Toast.show(res.message, Toast.SHORT)
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Emotion State') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Height') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Weight') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Instagram') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Facebook') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Youtube') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Twitter') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
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
      })
      .catch((err) => {
        console.log(err.message)
      })
    const updatedList = list.map((item) => {
      if (item.name == 'Birthday') {
        return {
          ...item,
          value: value,
        };
      }
      return item;
    });

    setList(updatedList);
    setShow_dob_modal(false)

  };


  const open = () => {
    modalizeRef.current?.open()
  }

  const RenderHeaderItem = () => {
    return (
      <Body applyPadding={false}>
        <Body applyPadding={false} style={styles.firstContainer} >
          <TouchableOpacity applyPadding={false} style={styles.picView} onPress={open}>
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

          <TouchableOpacity applyPadding={false} style={styles.picView} onPress={() => { modalizeRef1.current.open() }}>
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
            <Body applyPadding={false} style={styles.secondContainer}>
              <Text style={styles.txt}>{item.name}</Text>
              <Body applyPadding={false} style={styles.leftContainer}>
                <Text style={[styles.txt, { color: 'rgba(0, 0, 0, 0.4)' }]}>{item.value}</Text>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={item.onPress}
                >
                  <AntDesign name='right' size={16} />
                </TouchableOpacity>
              </Body>
            </Body>
          )} />
      </Body>

      {/* nickname modal */}
      <Modal visible={show_nickname_modal} transparent={true}>
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Nickname
          </Text>
          <Body applyPadding={false} style={styles.modal_textInput}>
            <TextInput
              placeholder='Nickname'
              style={{ paddingBottom: -10 }}
              value={nickname}
              onChangeText={(val) => { setNickname(val) }}
            />
          </Body>
          <TouchableOpacity
            onPress={() => { handleNicknamePress(nickname) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* gender modal */}
      <Modal visible={show_gender_modal} transparent={true}>
        <Body applyPadding={false} style={styles.nickname_modal}>
          <Text style={styles.modal_text}>
            Gender
          </Text>
          <Body applyPadding={false} style={styles.modal_gender}>
            <Body
              applyPadding={false}
              style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                applyPadding={false}
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 0.3,
                  backgroundColor: gender == 'Male' ? '#1A94EC' : 'white',
                }}
                onPress={() => { setGender("Male") }}
              >
              </TouchableOpacity>
              <Text>Male</Text>
            </Body>
            <Body
              applyPadding={false}
              style={{
                flexDirection: 'row',
                width: 75,
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                applyPadding={false}
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 0.3,
                  backgroundColor: gender == 'Female' ? '#1A94EC' : 'white'
                }}
                onPress={() => { setGender("Female") }}
              >
              </TouchableOpacity>
              <Text>Female</Text>
            </Body>
          </Body>
          <TouchableOpacity
            onPress={() => { handleGenderPress(gender) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* self introduction modal */}
      <Modal visible={show_self_introduction_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleSelfIntroductionPress(self_introduction) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* Emotion state */}
      <Modal visible={show_emotion_state_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleEmotionStatePress(emotion_state) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* height modal  */}
      <Modal visible={show_person_height_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleHeightPress(person_height + " " + person_height_unit) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* weight modal */}
      <Modal visible={show_person_weight_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleWeightPress(person_weight + " " + person_weight_unit) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* instagram modal */}
      <Modal visible={show_instagram_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleInstagramPress(instagram_id) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* youtube modal */}
      <Modal visible={show_yt_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleYoutubePress(yt_channel) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* Facebook modal */}
      <Modal visible={show_facebook_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleFacebookPress(facebook) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* twitter modal */}
      <Modal visible={show_twitter_modal} transparent={true}>
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
          <TouchableOpacity
            onPress={() => { handleTwitterPress(twitter) }}
            style={styles.modal_button}>
            <Text style={styles.modal_button_text}>Save</Text>
          </TouchableOpacity>
        </Body>
      </Modal>

      {/* modal for picking date of birth */}
      <DatePicker
        modal
        open={show_dob_modal}
        date={date}
        mode="date"
        onConfirm={(date) => {
          const dateObj = new Date(date);
          const formattedDate = dateObj.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          handleDobPress(formattedDate)
        }}
        onCancel={() => {
          setShow_dob_modal(false)
        }} />

      {/* modal for profile picture */}

      <Modalize
        ref={modalizeRef}
        snapPoint={80}
        handlePosition='inside'
        velocity={5500}
        openAnimationConfig={{
          spring: {
            speed: 10,
            bounciness: 4,

          },
          timing: {
            duration: 50
          }
        }}
        modalStyle={{
          backgroundColor: 'white',
          justifyContent: 'center'
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: width * 1,
          paddingVertical: 15,
        }}>


          <TouchableOpacity
            onPress={pickImages}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              borderRightWidth: 1,
              borderColor: 'black'
            }}>
            <MaterialIcons name='photo-library' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>Photo Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Avatar') }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              borderRightWidth: 1,
              borderColor: 'black'
            }}>
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
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20
            }}>
            <Entypo name='camera' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>
              Camera</Text>
          </TouchableOpacity>

        </View>

      </Modalize>

      {/* profile video section */}
      <Modalize
        ref={modalizeRef1}
        snapPoint={80}
        handlePosition='inside'
        velocity={5500}
        openAnimationConfig={{
          spring: {
            speed: 10,
            bounciness: 4,

          },
          timing: {
            duration: 50
          }
        }}
        modalStyle={{
          backgroundColor: 'white',
          justifyContent: 'center'
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: width * 1,
          paddingVertical: 15,
        }}>


          <TouchableOpacity
            onPress={pickImages}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              borderRightWidth: 1,
              borderColor: 'black'
            }}>
            <MaterialIcons name='photo-library' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>Video Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={clickImage}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20
            }}>
            <Entypo name='camera' color={'black'} size={35} />
            <Text style={{
              color: 'black'
            }}>
              Camera</Text>
          </TouchableOpacity>

        </View>

      </Modalize>

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
    paddingTop: 5
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
  modal_button: {
    backgroundColor: '#1A94EC',
    width: width * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: height * 0.04
  },
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
  }
})


