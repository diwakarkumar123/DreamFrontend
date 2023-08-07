import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const SpeakerOn = () => {
  const svgXml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, borderRadius: 100 }}>
      <SvgXml xml={svgXml} width={24} height={24} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpeakerOn;