import { Dimensions, Pressable, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Image, } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import RenderInputToolBar from '../component/RenderInputToolBar';
import RenderChatHeader from '../component/RenderChatHeader';
import ChatBackground from '../ChatBackground';
const { DateTime } = require("luxon");
import { Modal } from 'react-native-paper';
import Attachment from '../component/Attachment';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Rose from '../component/Rose';
import RenderBuble from '../component/RenderBuble';
import RenderMessages from '../component/RenderMessages';
import { io } from 'socket.io-client';
import { SERVER_API_URL } from '../../../constants/constants'
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import * as userApi from '../../../apis/userApi'
import moment from 'moment';


const { width, height } = Dimensions.get('screen')
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('')
  const my_data = useSelector(state => state.my_data.my_profile_data)
  const [longPressed, setLongPressed] = useState(false)
  const route = useRoute()
  const [input_control, setInput_controll] = useState({
    attachment: false,
    rose: false,
    video: false,
    microphone: false
  })
  const socket = io(SERVER_API_URL);
  const roomId = route?.params?.user_data?.id + my_data?.id
  const handleSend = (newMessages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    socket.emit('customEvent', newMessages);
  };
  useEffect(() => {
    const socket = io(SERVER_API_URL);
    socket.emit('joinRoom', roomId)
    socket.on('customEventResponse', (data) => {
      if (data.senderId !== my_data?.id) {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, data));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  // FUNCTION FOR FETCHING OUT ALL CONVERSASATION BETWEEN THESE TWO PEOPLE
  // HERE THE USER_DATA ARE THE PEOPLE DATA AND MY_DATA ARE THE MY PERSONAL DATA
  const fetchChat = async () => {
    try {
      const result = await userApi.getAllMessages(route?.params?.user_data?.id, my_data?.auth_token)
      setMessages(result?.messages)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchChat()
  }, [])

  const renderQuickReply = (quickReply) => {
    return (
      <Text
        style={styles.quickReplyButton}
        onPress={() => handleQuickReply(quickReply.title)}
      >
        {quickReply.title}
      </Text>
    );
  };


  const handleQuickReply = (messageText) => {
    const newMessage = {
      _id: Math.random().toString(),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'John Doe',
        avatar: url,
      },
    };

    handleSend([newMessage]);
  };


  const handleOnPress = () => {
    console.log('pressed')
  }

  const handlelLongPress = () => {
    setLongPressed(true)
    console.log('long pressed called')
  }

  const Long_pressed_data = [
    {
      id: 1,
      txt: 'Reply',
      onPress: () => {
        console.log('reply')
      }
    },
    {
      id: 2,
      txt: 'Copy text',
      onPress: () => {
        console.log('reply')
      }
    },
    {
      id: 3,
      txt: 'Delete',
      onPress: () => {
        console.log('reply')
      }
    },
    {
      id: 4,
      txt: 'Cancel',
      onPress: () => {
        setLongPressed(false)
      }
    },
  ]

  const isSameUnixDay = (currentUnixTimestamp, previousUnixTimestamp) => {
    const currentDay = moment.unix(currentUnixTimestamp);
    const previousDay = moment.unix(previousUnixTimestamp);
    return currentDay.isSame(previousDay, 'day');
  };
  let lastDisplayedDay = null;
  const renderCustomDay = (props) => {
    const { previousMessage } = props;
    if (!previousMessage) {
      return renderDayLabel(props.currentMessage.createdAt);
    }

    const currentCreatedAt = Date.parse(props.currentMessage.createdAt);
    const previousCreatedAt = Date.parse(previousMessage.createdAt);

    const currentDay = DateTime.fromMillis(currentCreatedAt).startOf('day');
    const previousDay = DateTime.fromMillis(previousCreatedAt).startOf('day');

    if (!previousDay.hasSame(currentDay, 'day')) {
      return renderDayLabel(props.currentMessage.createdAt);
    }

    return null;
  };

  const renderDayLabel = (createdAt) => {
    const currentDay = DateTime.fromMillis(Date.parse(createdAt)).startOf('day');

    let dayLabel = '';
    if (currentDay.hasSame(DateTime.now(), 'day')) {
      dayLabel = 'Today';
    } else if (currentDay.hasSame(DateTime.now().minus({ days: 1 }), 'day')) {
      dayLabel = 'Yesterday';
    } else {
      dayLabel = currentDay.toFormat('DD MMM yyyy');
    }

    return (
      <View style={styles.customDayContainer}>
        <Text style={styles.customDayText}>
          {dayLabel}
        </Text>
      </View>
    );
  };



  return (
    <>
      <RenderChatHeader user_data={route?.params?.user_data} />
      <ChatBackground />
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        text={text}
        textInputProps={{ multiline: false }}
        onInputTextChanged={setText}
        renderAvatarOnTop={true}
        isCustomViewBottom={true}
        showUserAvatar={false}
        renderChatFooter={() => <ChatBackground />}
        minInputToolbarHeight={50}
        renderAvatar={null}
        renderDay={renderCustomDay}
        renderTime={() => {
          return null;
        }}
        renderBubble={(props) => <RenderMessages {...props} setLongPressed={setLongPressed} />}
        messagesContainerStyle={{
          paddingTop: 1,
          backgroundColor: '#fff'
        }}
        renderInputToolbar={(props) => (
          <RenderInputToolBar
            {...props}
            setText={setText}
            user_data={route?.params?.user_data}
            setInput_controll={setInput_controll} />
        )}
        user={{
          _id: my_data?.id?.toString(),
          name: my_data?.nickname,
          avatar: my_data?.profile_pic,
        }}
        renderQuickReply={renderQuickReply}
        onPress={handleOnPress}
        onLongPress={handlelLongPress}>
      </GiftedChat>
      {input_control.attachment && (
        <Attachment />
      )}
      {input_control.rose && (
        <Rose />
      )}


      <Modal
        visible={longPressed}
        transparent={true}
        statusBarTranslucent={true}
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <Pressable
          onPress={() => { setLongPressed(false) }}
          style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }} />
        <View style={{
          width: width,
          paddingBottom: 40,
          backgroundColor: '#fff',
          paddingTop: 20
        }}>
          <FlatList
            data={Long_pressed_data}
            keyExtractor={({ item, index }) => index}
            renderItem={({ item, index }) => (
              <Pressable style={styles.long_pressed_container} onPress={item?.onPress}>
                <Text style={styles.txt}>{item?.txt}</Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>
      <StatusBar hidden={true} />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  long_pressed_container: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginVertical: 15,
    flex: 1,
  },
  txt: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)'
  },
  customDayContainer: {
    alignItems: 'center',
    marginVertical: 5
  },
  customDayText: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: '600',
    fontSize: 18,
  }
});
