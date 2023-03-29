import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DreamGradient from '../../components/Tabs/GradientView';
import { InboxStackParamlist } from './InboxStack';

interface Props extends NativeStackScreenProps<InboxStackParamlist, "Chat"> { }
const ChatScreen = (props: Props) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.log(`Sending message: ${message}`);
        setMessage('');
    };

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: props.route.params.chat.name
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                {/* example messages */}
                <View style={[styles.messageBubble, styles.receiver]}>
                    <Text style={styles.receiverText}>Hey, how's it going?</Text>
                    <Text style={styles.messageTime}>12:34 PM</Text>
                </View>

                <DreamGradient style={[styles.messageBubble, styles.sender]}>
                    <Text style={styles.sendText}>Not bad, you?</Text>
                    <Text style={styles.senderTime}>12:35 PM</Text>
                </DreamGradient>

                <View style={[styles.messageBubble, styles.sender]}>
                </View>
                <View style={[styles.messageBubble, styles.receiver]}>
                    <Text style={styles.receiverText}>Doing pretty well, thanks for asking!</Text>
                    <Text style={styles.messageTime}>12:36 PM</Text>
                </View>

                {/* text input to send messages */}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholder="Type a message..."
                    placeholderTextColor={"#888"}
                />
                <DreamGradient style={[{ borderRadius: 20 }]}>
                    <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                        <Icon name="rocket" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </DreamGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    chatContainer: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        justifyContent: 'flex-end',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    sender: {
        alignSelf: 'flex-end'
    },
    receiver: {
        alignSelf: 'flex-start',
        backgroundColor: '#000000',
    },
    receiverText: {
        color: '#fff',
        fontSize: 16
    },
    sendText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    senderTime: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'right',
    },
    messageTime: {
        color: '#A3A3A3',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'right',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        marginRight: 10,
        color: '#000'
    },
    sendButton: {
        padding: 10,
        borderRadius: 20,
    },
});

export default ChatScreen;