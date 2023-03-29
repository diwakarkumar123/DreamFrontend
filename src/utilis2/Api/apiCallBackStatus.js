import Toast from 'react-native-simple-toast';
const apiCallBackStatus = ({ error }) => {
    let message = error?.response?.data?.message
    if (typeof message == 'object') {
        message[Object.keys(message)[0]]
        Toast.show(message[Object.keys(message)[0]][0], Toast.LONG)
    } else {
        Toast.show(message, Toast.LONG)
    }
}

export default apiCallBackStatus