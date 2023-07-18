import { StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { CLOSE_IMG } from '../../../configs/source';
import { COLOR, SPACING } from '../../../configs/styles';
import { STATUSBAR_HEIGHT } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native';

const CloseButton = ({ icon = CLOSE_IMG }) => {
  const navigation = useNavigation()

  
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.container}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default React.memo(CloseButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SPACING.S4,
    left: SPACING.S2,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLOR.WHITE,
  },
});
