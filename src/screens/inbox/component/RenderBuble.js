import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderBuble = (props) => {
    const {user, currentMessage, previousMessage} = props;


   


    return (
        <View>
            <Text>{currentMessage.text}</Text>
        </View>
    )
}

export default RenderBuble

const styles = StyleSheet.create({})







// const data = [{
//     "alignTop": false,
//     "currentMessage": {
//         "_id": 1,
//         "createdAt": 1690621834076,
//         "text": "One",
//         "user": {
//             "_id": 2,
//             "avatar": "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
//             "name": "Name"
//         }
//     },
//     "extraData": null,
//     "forwardRef": {
//         "current": null
//     },
//     "infiniteScroll": false,
//     "inverted": true,
//     "invertibleScrollViewProps": {
//         "inverted": true,
//         "keyboardShouldPersistTaps": "always",
//         "onKeyboardDidHide": [Function onKeyboardDidHide],
//         "onKeyboardDidShow": [Function onKeyboardDidShow],
//         "onKeyboardWillHide": [Function onKeyboardWillHide],
//         "onKeyboardWillShow": [Function onKeyboardWillShow]
//     },
//     "isCustomViewBottom": true,
//     "isLoadingEarlier": false,
//     "isTyping": false,
//     "listViewProps": {},
//     "loadEarlier": false,
//     "nextMessage": {
//         "_id": 2,
//         "createdAt": 1690621894077,
//         "text": "Two",
//         "user": {
//             "_id": 1,
//             "avatar": "https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4",
//             "name": "Name"
//         }
//     },
//     "onInputTextChanged": [Function bound dispatchSetState],
//     "onLoadEarlier": [Function onLoadEarlier],
//     "onLongPress": [Function handlelLongPress],
//     "onPress": [Function handleOnPress],
//     "onQuickReply": [Function onQuickReply],
//     "onSend": [Function handleSend],
//     "position": "left",
//     "previousMessage": {},
//     "renderAvatar": undefined,
//     "renderAvatarOnTop": true,
//     "renderBubble": [Function RenderBuble],
//     "renderChatEmpty": [Function renderChatEmpty],
//     "renderDay": null,
//     "renderFooter": null,
//     "renderInputToolbar":
//         [Function renderInputToolbar],
//     "renderMessage": null,
//     "renderQuickReply": [Function renderQuickReply],
//     "renderSystemMessage": null,
//     "scrollToBottom": false,
//     "scrollToBottomOffset": 200,
//     "scrollToBottomStyle": {},
//     "shouldUpdateMessage": undefined,
//     "showUserAvatar": false,
//     "text": "",
//     "textInputProps": {
//         "multiline": false
//     },
//     "user": {
//         "_id": 1,
//         "avatar": "https://example.com/avatar.jpg",
//         "name": "John Doe"
//     }
// }]