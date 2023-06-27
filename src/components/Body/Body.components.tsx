import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Body = ({ children, style, applyPadding = true }) => {
  const insets = useSafeAreaInsets();
  const customStyle = {
    backgroundColor: '#FFFFFF',
    ...(applyPadding && {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }),
  };
  return <View style={[customStyle, style]}>{children}</View>;
};

export default Body;
