import { StyleSheet, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../../../configs/styles/index';
import { Illustration_IMG } from '../../../configs/source';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';


const Upload = ({ endRecord }) => {
  const handleClick = async () => {
    try {
      const options = { mediaType: 'video' };

      const result = await launchImageLibrary(options);
      const sourceUri = result.assets[0].uri;
      const cache_path = RNFS.CachesDirectoryPath;
      const out_put_path = `${cache_path}/selected_video.mp4`
      RNFS.copyFile(sourceUri, out_put_path)
        .then(() => {
          const fileUri = `file://${out_put_path}`;
          console.log(fileUri)
          endRecord(fileUri, result?.assets[0]?.duration);
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image source={Illustration_IMG} style={styles.icon} />
      <Text style={styles.text}>Upload</Text>
    </Pressable>
  );
};

export default React.memo(Upload);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  icon: {
    borderRadius: BORDER.SMALL,
    borderWidth: 2,
    borderColor: COLOR.WHITE,
    width: 40,
    height: 40,
  },
  text: {
    ...TEXT.SMALL,
    color: COLOR.WHITE,
    marginTop: 5,
  },
});
