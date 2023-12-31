import { Dimensions, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import { Container, Icon } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PressContainer from './PressContainer';
import {
  BOTTOM_NAVIGATOR_HEIGHT,
  STATUSBAR_HEIGHT,
  HEIGHT,
  WIDTH,
} from '../../../constants/constants';
import CVideo from './CVideo';
import {
  BOOKMARK_FILLED_IMG,
  COMMENT_ICON_IMG,
  HEART_IMG,
  HEART_TRUE_IMG,
  REPLY_FILLED_IMG,
  MUSIC_ICON_IMG,
  GIFT_ICON,
  QUEEN_ICON,
  DIAMOND_ICON,
  DISC_IMG
} from '../../../configs/source';
import { useDispatch, useSelector } from 'react-redux';
import VerticalLeftSection from './VerticalLeftSection';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import { Modal } from 'react-native';
import GiftSelectionScreen from '../../../components/modal/GiftSelectionScreen';
import GiftDiamondSelection from '../../../components/modal/GiftDiamondSelection';
import GiftSendingFinalScreen from '../../../components/modal/GiftSendingFinalScreen';
import PromoteScreen from '../../../components/modal/PromoteScreen';
import Promotion from '../../promotion/Promotion';
import { useNavigation } from '@react-navigation/native';
import { setModalSignIn } from '../../../store/indexSlice';
import paymentsApi from '../../../apis/paymentsApi';
import WebView from 'react-native-webview'


const { height, width } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ item, index, onEnd, flatListRef }, ref) => {

  // const { id, caption, url, author, audio, like, comment } = item;
  const { id, user_id, description, video, thum, gif, view, section, sound_id, privacy_type, allow_comments, allow_duet, block, duet_video_id, old_video_id, duration, promote, created, like, comment, shared } = item;

  const [showFullText, setShowFullText] = useState(description.length > 60)

  const url = `https://dpcst9y3un003.cloudfront.net/${video}`

  const avatar = `https://dpcst9y3un003.cloudfront.net/${thum}`

  const des = description.slice(0, 50);

  const [showText, setShowText] = useState(false)

  const dispatch = useDispatch()

  const isLogin = useSelector(state => state.my_data.isLogin)

  const navigation = useNavigation()

  const my_data = useSelector(state => state.my_data.my_profile_data)

  const [showGiftModal, setShowGiftModal] = useState(false)

  const [showDimanondSelectionModal, setShowDimanondSelectionModal] = useState({
    isVisible: false,
    item: null
  })

  const [showGiftSendingModal, setShowGiftSendingModal] = useState({
    isVisible: false,
    item: null,
  })

const [like1, setLike1] = useState(false)


  const verticalRef = useRef();
  const videoRef = useRef();

  const bottomHeight = useBottomTabBarHeight();

  const [isActive, setIsActive] = useState(false);

  useImperativeHandle(ref, () => ({
    pauseVideo: () => {
      pauseVideo();
    },
    playVideo: () => {
      playVideo();
    },
  }));

  const pauseVideo = useCallback(() => {
    setIsActive(false);
  }, []);

  const playVideo = useCallback(() => {
    setIsActive(true);
  }, []);


  const onGiftPress = () => {
    if (isLogin) {
      setShowGiftModal(pre => !pre)
    } else {
      dispatch(setModalSignIn(true));
    }
  }




  return (
    <Container
      width={width}
      // height={height}
      height={
        width > 450
          ? height - bottomHeight.toFixed() - 25
          : height - bottomHeight.toFixed() - 25
      }
      backgroundColor="black">
      <CVideo
        isActive={isActive}
        url={url}
        videoRef={videoRef}
        bottomHeight={bottomHeight}
        onEnd={onEnd}
        avatar={avatar}
        flatListRef={flatListRef}
        index={index}
      />
     
     


      {/* <PressContainer
        isActive={isActive}
        pauseVideo={pauseVideo}
        playVideo={playVideo}
        verticalRef={verticalRef}
      /> */}

      {/* container bottom */}
      {/* <BottomSecction
        isActive={isActive} 
        caption={description
        authorName={'author.name'}
        audio={'audio'}
      /> */}

      <Container position="absolute" right={16} bottom={30}>
        <Image
          source={DISC_IMG}
          style={{ width: 40, height: 40 }}
        />
      </Container>



      <Container position="absolute" bottom={40} width={width} height={height} alignItems='center'>
        <Container marginBottom={40} width={width * 0.4}>

          {showText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >{description}</Text>}



          {!showText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>{des} {showFullText && <Text style={{ fontSize: 12, color: 'white', fontWeight: '500', }} onPress={() => { setShowText(true) }}>more...</Text>}</Text>}
        </Container>
      </Container>

      <Container position="absolute" left={width * 0.4} bottom={-10}>
        <Container marginBottom={40} alignItems="center" justifyContent='center' flexDirection='row'>
          <Text style={{ fontSize: 6, color: 'white', fontWeight: '500', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            See Original Song
          </Text>
        </Container>
      </Container>


      {/* container vertical */}
      <VerticalSecction
        ref={verticalRef}
        like={"like"}
        comment={'comment'}
        author={thum}
        idVideo={id}
        onGiftPress={onGiftPress}
      // avatar={thum}
      />

      <VerticalLeftSection
        ref={verticalRef}
        like={like1}
        comment={comment}
        author={thum}
        idVideo={id}
        share={shared}
      />

      <Modal visible={showGiftModal} transparent={true} animationType='slide'>
        <GiftSelectionScreen setShowGiftModal={setShowGiftModal} setShowDimanondSelectionModal={setShowDimanondSelectionModal} />
      </Modal>

      <Modal visible={showDimanondSelectionModal.isVisible} transparent={true}>
        <GiftDiamondSelection
          setShowDimanondSelectionModal={setShowDimanondSelectionModal}
          setShowGiftSendingModal={setShowGiftSendingModal}
          showDimanondSelectionModal={showDimanondSelectionModal}
        />
      </Modal>


      <Modal visible={showGiftSendingModal.isVisible} transparent={true}>
        <GiftSendingFinalScreen
          setShowGiftSendingModal={setShowGiftSendingModal}
          showGiftSendingModal={showGiftSendingModal}
        />
      </Modal>

      
      {/* <Modal visible={promoteModal} transparent={true}>
        <Promotion makePayments={makePayments} />
      </Modal>
      <Modal visible={showModal}>
        <View style={{ flex: 1, }}>
          <WebView
            source={{ uri: paypal_url }}
            onNavigationStateChange={onUrlChange}
          />
        </View>
      </Modal> */}

    </Container>
  );
});

export default React.memo(VideoItem);
