import React from 'react';
import { Container, CText, Icon } from '../../../components';
import { CLOSE_IMG } from '../../../configs/source';
import { COLOR, SPACING, TEXT } from '../../../configs/styles';
import { Dimensions, View, Text, StyleSheet } from 'react-native';



const { width, height } = Dimensions.get('screen')

const HeaderBottomSheetComment = ({ handleClickClose, no_of_comment }) => {
  return (
    <View style={{
      width: width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15
    }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.txt}>{no_of_comment}</Text>
        <Text style={styles.txt}>comments</Text>
      </View>
      <Container position="absolute" right={SPACING.S3}>
        <Icon source={CLOSE_IMG} onPress={handleClickClose} style={{width: 30, height: 30}} />
      </Container>
    </View>
  );
};

export default HeaderBottomSheetComment;


const styles = StyleSheet.create({
    txt: {
      fontSize: 18,
      fontWeight: '600',
      color: '#020202',
      marginLeft: 5
    }
})


// <Container
//       justifyContent="center"
//       borderBottomWidth={0.2}
//       borderBottomColor={COLOR.LIGHT_GRAY}>
//       <Container padding={SPACING.S3} width={'100%'} alignItems="center">
//         <Container />
//         <
//       </Container>
      // <Container position="absolute" right={SPACING.S3}>
      //   <Icon source={CLOSE_IMG} onPress={handleClickClose} style={{width: 30, height: 30}} />
      // </Container>
//     </Container>