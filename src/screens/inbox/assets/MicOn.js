import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const MyComponent = () => {
  const micSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke="white" stroke-width="1.5"/>
      <path d="M17 7H14M17 11H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, borderRadius: 100 }}>
      <SvgXml xml={micSvg} width={24} height={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;
