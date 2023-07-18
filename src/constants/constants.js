import { Dimensions, Platform, StatusBar } from 'react-native';

const Visibility = Object.freeze({
  Hidden: 0,
  Visible: 1,
});
// 192.168.1.6
const SERVER_DOMAIN = 'http://3.94.171.233';
const SERVER_API_URL = 'http://3.94.171.233';
// const SERVER_DOMAIN = 'http://192.168.43.139:3000';
// const SERVER_API_URL = 'http://192.168.43.139:3000';
// const SERVER_DOMAIN = 'http://192.168.1.8:3000';
// const SERVER_API_URL = 'http://192.168.1.8:3000';



const KEY_STORAGE = Object.freeze({
  TOKEN: 'token',
  ID_USER: 'id_user',
  SEARCH_HIS: 'search_his',
});

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const BOTTOM_NAVIGATOR_HEIGHT =
  HEIGHT - STATUSBAR_HEIGHT - Dimensions.get('window').height;

export {
  Visibility,
  SERVER_API_URL,
  SERVER_DOMAIN,
  KEY_STORAGE,
  WIDTH,
  HEIGHT,
  STATUSBAR_HEIGHT,
  BOTTOM_NAVIGATOR_HEIGHT,
};
