import { View, Image, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { LOGO_IMG, SPLASH_SCREEN } from '../../configs/source';
import { COLOR } from '../../configs/styles/index';




const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Index');
    }, 400);
  });
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="black" hidden={true} />
      <Image source={require('../../assets/images/splash.png')} style={styles.logo} />
    </View>
  );
};


export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 60
  },
});
