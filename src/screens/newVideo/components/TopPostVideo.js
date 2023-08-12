import { StyleSheet, TurboModuleRegistry, Image, TextInput, Text, useWindowDimensions, Dimensions } from 'react-native';
import React from 'react';
import { CInput, Container, CText } from '../../../components';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Video from 'react-native-video';
import { WIDTH } from '../../../configs/constant';
import ItemAddCaption from './ItemAddCaption';
import HighlightText from '@sanar/react-native-highlight-text';


const {width, height} = Dimensions.get('window')
const listCaption = ['# hashtag', '@ Mention',];
// '▶ Video'
const iconCaption = ['#', '@', '▶', '◉'];

const TopPostVideo = ({ pathVideo, caption, setCaption, image }) => {
  const handleCick = t => {
    let txt = caption.trim();
    if (iconCaption.includes(txt[txt.length - 1])) txt = txt.slice(0, -1);
    console.log(txt);
    setCaption(txt.trim() + ' ' + t.split(' ')[0]);
  };

  const handleChangeText = (inputText) => {
    const retLines = inputText.split("\n");
    const formattedText = [];
    retLines.forEach((retLine) => {
      const words = retLine.split(" ");
      const contentLength = words.length;
      var format = /[ !#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\n]/;
      words.forEach((word, index) => {
        if (
          (word.startsWith("@") && !format.test(word.substr(1))) ||
          (word.startsWith("#") && !format.test(word.substr(1)))
        ) {
          const mention = (
            <Text key={index} style={styles.mention} >
              {word}
            </Text>
          );
          if (index !== contentLength - 1) formattedText.push(mention, " ");
          else formattedText.push(mention);
        } else {
          if (index !== contentLength - 1) return formattedText.push(word, " ");
          else return formattedText.push(word);
        }
      });
    });
    setCaption(formattedText);
  };




  return (
      <Container flexDirection="row" height={140}>


        <Container
          height="100%"
          width={90}
          borderRadius={BORDER.SMALL}
          overflow="hidden">
          <Image
            source={{ uri: image }}
            style={styles.video}
          />
          <Container
            position="absolute"
            backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.3)}
            bottom={0}
            left={0}
            right={0}
            paddingVertical={SPACING.S2}
            overflow="hidden">
            <CText color={COLOR.WHITE} textAlign="center" fontSize={12}>
              cover photo
            </CText>
          </Container>
        </Container>




        <Container marginLeft={SPACING.S2}>
          <TextInput
            style={styles.input}
            placeholder={'Describe the post, add a hashtag, or hit the creators who inspire you'}
            textAlignVertical="top"
            onChangeText={handleChangeText}
            multiline={true}>
            <Text>{caption}</Text>
          </TextInput>
        </Container>


      </Container>
  );
};

export default TopPostVideo;

const styles = StyleSheet.create({
  video: {
    flex: 1,
    borderRadius: BORDER.SMALL,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: COLOR.WHITE,
    padding: 0,
    width: width - 150,
    fontSize: 16,
    height: 140
  },
  normalText: {
    fontSize: 16,
  },
  hashtagText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mention: {
    color: '#0c4bb0',
    fontSize: 18,
    fontWeight: '800'
  }
});
