import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Pattern, Circle } from 'react-native-svg';

const Background = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View style={{
      zIndex: -1,
      ...StyleSheet.absoluteFillObject,
    }}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="gradient1" x1="-20%" y1="-20%" x2="120%" y2="120%">
            <Stop offset="10%" stopColor="#fdf8f9" />
            <Stop offset="20%" stopColor="#fdf8f9" />
            <Stop offset="30%" stopColor="#fad8eb" />
            <Stop offset="40%" stopColor="#fad8eb" />
            <Stop offset="50%" stopColor="#f7d5fb" />
            <Stop offset="60%" stopColor="#f7d5fb" />
            <Stop offset="70%" stopColor="#e9e4ff" />
            <Stop offset="80%" stopColor="#e9e4ff" />
            <Stop offset="90%" stopColor="#dafcf6" />
            <Stop offset="100%" stopColor="#dafcf6" />
          </LinearGradient>

          <LinearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <Stop offset="10%" stopColor="#ffffff" stopOpacity="0.18" />
            <Stop offset="20%" stopColor="#ffffff" stopOpacity="0.15" />
            <Stop offset="30%" stopColor="#ffffff" stopOpacity="0.12" />
            <Stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <Stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
            <Stop offset="60%" stopColor="#ffffff" stopOpacity="0.06" />
            <Stop offset="70%" stopColor="#ffffff" stopOpacity="0.04" />
            <Stop offset="80%" stopColor="#ffffff" stopOpacity="0.02" />
            <Stop offset="90%" stopColor="#ffffff" stopOpacity="0" />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </LinearGradient>

          <Pattern id="dotsPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <Circle cx="20" cy="20" r="1" fill="#e0e0e0" />
          </Pattern>
        </Defs>

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#gradient1)" />

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#gradient2)" />

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#dotsPattern)" />
      </Svg>
    </View>
  );
};

export default Background;
