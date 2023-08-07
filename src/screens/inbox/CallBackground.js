import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Pattern, Path, Circle, Ellipse } from 'react-native-svg';

const Background = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const randomGray = () => {
    const shades = ["#333333", "#666666", "#999999", "#CCCCCC"];
    return shades[Math.floor(Math.random() * shades.length)];
  };

  return (
    <View style={{
      zIndex: -1,
      ...StyleSheet.absoluteFillObject,
    }}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="gradient1" x1="-20%" y1="-20%" x2="120%" y2="120%">
            <Stop offset="10%" stopColor="#1a1a1a" stopOpacity="0.2" />
            <Stop offset="20%" stopColor="#1a1a1a" stopOpacity="0.18" />
            <Stop offset="30%" stopColor="#1a1a1a" stopOpacity="0.15" />
            <Stop offset="40%" stopColor="#1a1a1a" stopOpacity="0.12" />
            <Stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.1" />
            <Stop offset="60%" stopColor="#1a1a1a" stopOpacity="0.08" />
            <Stop offset="70%" stopColor="#1a1a1a" stopOpacity="0.06" />
            <Stop offset="80%" stopColor="#1a1a1a" stopOpacity="0.04" />
            <Stop offset="90%" stopColor="#1a1a1a" stopOpacity="0.02" />
            <Stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
          </LinearGradient>

          <Pattern id="linesPattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
            <Path d="M0 10h20M10 0v20" stroke="#694e1a" strokeWidth="0.5" />
          </Pattern>

          <Pattern id="circlesPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <Circle cx="20" cy="20" r="0.5" fill="none" stroke="#694e1a" strokeWidth="1" />
          </Pattern>

          <Pattern id="diagonalLinesPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <Path d="M-1 1h2M0 20v-2" stroke="#694e1a" strokeWidth="1" />
          </Pattern>

          {/* Define a new random gray ellipse pattern */}
          <Pattern id="randomEllipsePattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <Ellipse cx="30" cy="30" rx="3" ry="10" fill={'none'}  stroke="#694e1a" strokeWidth="0.4" />
          </Pattern>
        </Defs>

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="#0e0e0e" />

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#gradient1)" />

        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#linesPattern)" />
        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#circlesPattern)" />
        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#diagonalLinesPattern)" />

        {/* Apply the random ellipse pattern */}
        <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="url(#randomEllipsePattern)" />
      </Svg>
    </View>
  );
};

export default Background;
