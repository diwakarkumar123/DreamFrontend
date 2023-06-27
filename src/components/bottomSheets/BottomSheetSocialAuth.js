import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon';
import {
  APPLE_ICON,
  TWITTER_ICON,
  LINE_ICON,
  CLOSE_IMG,
  FACEBOOK_ICON,
  GOOGLE_ICON,
  INSTAGRAM_ICON,
  KAKAOTALK_ICON,
  USER_IMG,
} from '../../configs/source';
import Container from '../Container';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import BottomSheet from './BottomSheet';
import { HEIGHT } from '../../configs/constant';
import { setBottomSheetSignIn } from '../../store/indexSlice';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Animated, {
  LightSpeedInRight,
  LightSpeedInLeft,
  LightSpeedOutRight,
  LightSpeedOutLeft,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { onGoogleButtonPress } from '../../auth/google.auth';
import {onFacebookButtonPress} from '../../auth/facebook'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window')


const BottomSheetSocialAuth = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef();
  const navigation = useNavigation()

  const [currentForm, setCurrentForm] = useState(0); //0 social, 1 login, 2 register

  const [dataSocial, setDataSocial] = useState([]);

  const bottomSheetSignIn = useSelector(state => state.index.bottomSheetSignIn);

  useEffect(() => {
    if (bottomSheetSignIn) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
      setTimeout(() => {
        setDataSocial(dataSignInWithSocial);
      }, 300);
    }
  }, [bottomSheetSignIn, dataSignInWithSocial]);

  const handleClickClose = ()=>{
    navigation.goBack()
  }

  const onCloseBottomSheet = () => {
    dispatch(setBottomSheetSignIn(false));
    setDataSocial([]);
  };

  const handleClickText = () => {
    setCurrentForm(currentForm === 1 ? 2 : 1);
  };

  const backToScreenSocial = useCallback(() => {
    setDataSocial(dataSignInWithSocial);
  }, [dataSignInWithSocial]);

  const dataSignInWithSocial = useMemo(
    () => [
      {
        icon: USER_IMG,
        using: 'Use phone number or email',
        color: COLOR.BLACK,
        onPress: () => {
          setDataSocial([]);
          setCurrentForm(2); // naviga to register
        },
      },
      {
        icon: FACEBOOK_ICON,
        using: 'Continue with Facebook',
        onPress: () => onFacebookButtonPress()
        .then((d) =>{console.log('Logined:', d)})
        .catch((err)=>{console.log(err)})
      },
      {
        icon: GOOGLE_ICON,
        using: 'Continue with Google',
        onPress: () =>
          onGoogleButtonPress()
            .then(() => console.log('login success'))
            .catch(err => console.log('login google error',err)),
      },
      {
        icon: TWITTER_ICON,
        using: 'Continue with Twitter',
        onPress: () => console.log("twitter login pressed")
      },
      // {
      //   icon: APPLE_ICON,
      //   using: 'Continue with Apple',
      // }
    ],
    [],
  );

  const ItemSignIn = ({ index, icon, using, color, onPress }) => {
    return (
      <Animated.View
        entering={
          index % 2
            ? LightSpeedInRight.duration(1000)
            : LightSpeedInLeft.duration(1000)
        }
        exiting={
          index % 2
            ? LightSpeedOutRight.duration(1000)
            : LightSpeedOutLeft.duration(1000)
        }>
        <Pressable onPress={onPress}>
          <Container
            flexDirection="row"
            borderRadius={BORDER.SMALL}
            borderWidth={1}
            borderColor={COLOR.LIGHT_GRAY}
            justifyContent="center"
            alignItems="center"
            padding={SPACING.S2}
            marginVertical={SPACING.S2}>
            <Icon source={icon} tintColor={color} />
            <Container flexGrow={1} justifyContent="center" alignItems="center">
              <CText text={TEXT.STRONG} fontSize={16}>
                {using}
              </CText>
            </Container>
          </Container>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.main_container}>
      <Container paddingTop={SPACING.S2} flex={1} >
        <Container
          paddingHorizontal={SPACING.S4}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon source={CLOSE_IMG} onPress={handleClickClose} />
          <CText
            width={20}
            height={20}
            borderRadius={BORDER.PILL}
            color={COLOR.GRAY}
            borderWidth={1}
            borderColor={COLOR.GRAY}
            justifyContent="center"
            alignItems="center"
            textAlign="center">
            ?
          </CText>
        </Container>

        <Container
          paddingHorizontal={SPACING.S5}
          marginTop={SPACING.S4}
          marginBottom={SPACING.S4}
          flexDirection="column"
          justifyContent="space-between">
          {currentForm === 0 ? (
            <Animated.View
              entering={FadeIn.duration(600)}
              exiting={FadeOut.duration(600)}>
              <Container height={'100%'}>
                <Container>
                  <CText
                    text={TEXT.H1}
                    textAlign="center"
                    marginVertical={SPACING.S2}>
                    Sign up for Dream
                  </CText>
                  <CText
                    text={TEXT.REGULAR}
                    color={COLOR.GRAY}
                    textAlign="center"
                    marginVertical={SPACING.S2}>
                    Create profiles, follow other accounts, record videos your own and many more.
                  </CText>
                </Container>
                <Container marginTop={SPACING.S2} marginBottom={SPACING.S3}>
                  {dataSocial.map((item, index) => {
                    return (
                      <ItemSignIn
                        onPress={item.onPress}
                        index={index}
                        key={index.toString()}
                        icon={item.icon}
                        using={item.using}
                        color={item.color}
                      />
                    );
                  })}
                </Container>
                <Container marginBottom={0}>
                  <CText textAlign="center" color={COLOR.GRAY} fontSize={13}>
                    By continuing, you agree to Dream’s{' '}
                    <CText text={TEXT.STRONG} fontSize={13}>
                    Terms of Service
                    </CText>{' '}
                    and confirm that you have read Dream’s{' '}
                    <CText text={TEXT.STRONG} fontSize={13}>
                    Privacy Policy.
                    </CText>
                  </CText>
                </Container>
              </Container>
            </Animated.View>
          ) : currentForm === 1 ? (
            <FormSignIn
              setCurrentForm={setCurrentForm}
              handleClickClose={handleClickClose}
              backToScreenSocial={backToScreenSocial}

            />
          ) : (
            <FormSignUp
              setCurrentForm={setCurrentForm}
              backToScreenSocial={backToScreenSocial}
              handleClickClose={handleClickClose}
            />
          )}
        </Container>
        <Container
          backgroundColor={COLOR.LIGHT_GRAY2}
          padding={SPACING.S6}
          position="absolute"
          bottom={0}
          left={0}
          right={0}>
          <CText textAlign="center" fontSize={16}>
            {currentForm === 1
              ? "You don't have an account yet?"
              : 'You already have an account?'}{' '}
            <CText
              text={TEXT.STRONG}
              color={COLOR.DANGER2}
              fontSize={18}
              onPress={handleClickText}>
              {currentForm === 1 ? 'Register' : 'Log in'}
            </CText>
          </CText>
        </Container>
      </Container>
      </SafeAreaView>
  );
};

export default BottomSheetSocialAuth;

const styles = StyleSheet.create({
  main_container: {
    width: width,
    height: height,
    backgroundColor: '#fff',
  }
})
