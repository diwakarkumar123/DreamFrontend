import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RText } from '../../components/ResponsiveText';
import { InboxStackParamlist } from './InboxStack';

interface Props extends NativeStackScreenProps<InboxStackParamlist, "Inbox"> {}
const Inbox: React.FC<Props> = (props) => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RText fontSize={18} style='bold'>Inbox</RText>
      </View>
      {/* <ScrollView >
        {props.route.params.chats.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatContainer} onPress={() => props.navigation.navigate("Chat", { chat })}>
            <Image source={{ uri: chat.image }} style={styles.chatImage} />
            <View style={styles.chatTextContainer}>
              <RText fontSize={16} style='bold'>{chat.name}</RText>
              <RText fontSize={14} style="light">{chat.message}</RText>
            </View>
            <RText fontSize={14} style='light'>{chat.timestamp}</RText>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#000'
  },
  chatMessage: {
    fontSize: 16,
    color: '#888',
  },
  chatTimestamp: {
    fontSize: 12,
    color: '#888',
  },
});

export default Inbox;