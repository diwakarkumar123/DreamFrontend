import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatModel } from "../../models/Chat.model";
import ChatScreen from "./ChatScreen";
import InboxScreen from './InboxScreen';

export type InboxStackParamlist = {
    "Inbox": { chats: ChatModel[] },
    "Chat": { chat: ChatModel }
}

export function InboxStack() {
    const Stack = createNativeStackNavigator<InboxStackParamlist>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inbox" component={InboxScreen} initialParams={{
                chats: [
                    {
                        id: '1',
                        name: 'John Doe',
                        message: 'Hey, how are you?',
                        timestamp: '2m ago',
                        image: 'https://picsum.photos/200',
                    },
                    {
                        id: '2',
                        name: 'Jane Smith',
                        message: 'Did you see that video?',
                        timestamp: '5m ago',
                        image: 'https://picsum.photos/200',
                    },
                    {
                        id: '3',
                        name: 'Bob Johnson',
                        message: 'Thanks for the help!',
                        timestamp: '10m ago',
                        image: 'https://picsum.photos/200',
                    },
                ]
            }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>
    )
} 