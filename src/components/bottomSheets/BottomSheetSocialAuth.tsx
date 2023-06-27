import React, {
  useCallback,
  useEffect, useRef,
  useState
} from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut, LightSpeedInLeft, LightSpeedInRight, LightSpeedOutLeft, LightSpeedOutRight
} from 'react-native-reanimated';
import { onGoogleButtonPress } from '../../auth/google.auth';
import { HEIGHT } from '../../configs/constant';
import {
  APPLE_ICON, CLOSE_IMG,
  FACEBOOK_ICON,
  GOOGLE_ICON, TWITTER_ICON, USER_IMG
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setBottomSheetSignIn } from '../../store/indexSlice';
import Container from '../Container';
import CText from '../CText';
import Icon from '../Icon';
import BottomSheet from './BottomSheet';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';

interface SignIn {
  icon: ImageSourcePropType, using: string, color?: string, onPress: () => Promise<void>
}

const BottomSheetSocialAuth = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<any>();
  const [currentForm, setCurrentForm] = useState(0); //0 social, 1 login, 2 register
  const [dataSocial, setDataSocial] = useState<SignIn[]>([]);
  const bottomSheetSignIn = useAppSelector(state => state.index.bottomSheetSignIn);
  const socialButtons = useRef<SignIn[]>([
    {
      icon: USER_IMG,
      using: 'Login into Dream',
      color: COLOR.BLACK,
      async onPress() { setCurrentForm(1); }
    },
    {
      icon: USER_IMG,
      using: 'Use phone number or email',
      color: COLOR.BLACK,
      onPress: async () => {
        setDataSocial([]);
        setCurrentForm(2); // naviga to register
      },
    },
    {
      icon: FACEBOOK_ICON,
      using: 'Continue with Facebook',
      async onPress() {
        
      },
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
      async onPress() {
        
      },
    },
    {
      icon: APPLE_ICON,
      using: 'Continue with Apple',
      async onPress() {
        
      },
    }
  ]);

  useEffect(() => {
    if (bottomSheetSignIn) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
      setTimeout(() => {
        setDataSocial(socialButtons.current);
      }, 300);
    }
  }, [bottomSheetSignIn]);

  const handleClickClose = useCallback(() => {
    bottomSheetRef?.current?.scrollTo(0);
    setDataSocial([]);
  }, []);

  const onCloseBottomSheet = () => {
    dispatch(setBottomSheetSignIn(false));
    setDataSocial([]);
  };

  const handleClickText = () => {
    setCurrentForm(currentForm === 1 ? 2 : 1);
  };

  const backToScreenSocial = useCallback(() => {
    setDataSocial(socialButtons.current);
  }, []);


  const ItemSignIn = ({ index, icon, using, color, onPress }: SignIn & { index: number }) => {
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
    <BottomSheet ref={bottomSheetRef} onCloseBottomSheet={onCloseBottomSheet}>
      <Container paddingTop={SPACING.S5} height={HEIGHT - 48}>
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
          flex={1}
          paddingHorizontal={SPACING.S5}
          marginTop={SPACING.S10}
          marginBottom={SPACING.S5}
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
                <Container marginTop={SPACING.S3} flexGrow={1}>
                  {dataSocial.map((item, index) => {
                    console.log('loenght: ',dataSocial.length);
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
                <Container marginBottom={80}>
                  <CText textAlign="center" color={COLOR.GRAY} fontSize={12}>
                    By continuing, you agree to Dream’s{' '}
                    <CText text={TEXT.STRONG} fontSize={12}>
                    Terms of Service
                    </CText>{' '}
                    and confirm that you have read Dream’s{' '}
                    <CText text={TEXT.STRONG} fontSize={12}>
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
            />
          )}
        </Container>
        <Container
          backgroundColor={COLOR.LIGHT_GRAY2}
          padding={SPACING.S5}
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
              fontSize={16}
              onPress={handleClickText}>
              {currentForm === 1 ? 'Register' : 'sign in'}
            </CText>
          </CText>
        </Container>
      </Container>
    </BottomSheet> 
  );
};

export default React.memo(BottomSheetSocialAuth);
