import { StyleSheet, TurboModuleRegistry, Image, TextInput, Text } from 'react-native';
import React from 'react';
import { CInput, Container, CText } from '../../../components';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Video from 'react-native-video';
import { WIDTH } from '../../../configs/constant';
import ItemAddCaption from './ItemAddCaption';


const listCaption = ['# hashtag', '@ Mention', '▶ Video'];
const iconCaption = ['#', '@', '▶', '◉'];

const TopPostVideo = ({ pathVideo, caption, setCaption, image }) => {
  const handleCick = t => {
    let txt = caption.trim();
    if (iconCaption.includes(txt[txt.length - 1])) txt = txt.slice(0, -1);
    console.log(txt);
    setCaption(txt.trim() + ' ' + t.split(' ')[0]);
  };


  const renderText = () => {
    if (caption.includes('#')) {
      return <Text style={styles.hashtagText}>{caption}</Text>;
    }
    return <Text style={styles.normalText}>{caption}</Text>;
  };


  return (
    <Container>
      <Container flexDirection="row" height={140}>
        <Container
          height="100%"
          width={90}
          borderRadius={BORDER.SMALL}
          overflow="hidden">
          {/* <Video
            source={{
              uri: pathVideo,
            }}
            style={styles.video}
            resizeMode="cover"
            paused={false}
            muted={true}
            seek={10}
          /> */}
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
              Edit cover photo
            </CText>
          </Container>
        </Container>
        <Container flexGrow={1} marginLeft={SPACING.S2}>
          <CInput
            style={styles.input}
            placeholder={
              'Describe the post, add a hashtag, or hit the creators who inspire you'
            }
            textAlignVertical="top"
            value={caption}
            onChangeText={setCaption}
            multiline={true}
          />
          {/* <TextInput
            style={styles.input}
            placeholder={
              'Describe the post, add a hashtag, or hit the creators who inspire you'
            }
            textAlignVertical="top"
            onChangeText={setCaption}
            multiline={true}>
            {renderText()}
          </TextInput> */}
        </Container>
      </Container>
      <Container flexDirection="row" marginTop={SPACING.S4}>
        {listCaption.map((e, i) => {
          return (
            <ItemAddCaption key={i} name={e} onPress={() => handleCick(e)} />
          );
        })}
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
    height: 200,
    padding: 0,
  },
  normalText: {
    fontSize: 16,
  },
  hashtagText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
