import { StyleSheet, Text, Pressable, Image, Modal, View } from 'react-native';
import React, { useState } from 'react';
import { BORDER, COLOR, TEXT } from '../../../configs/styles/index';
import { Illustration_IMG, TIKTOK_LOADER_GIF } from '../../../configs/source';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';


const Upload = ({ endRecord }) => {
  const [show_loader, setShow_loader] = useState(false)
  const handleClick = async () => {
    try {
      const options = { mediaType: 'video', };
      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        setShow_loader(true)
        const sourceUri = result.assets[0].uri;
        const cache_path = RNFS.CachesDirectoryPath;
        const out_put_path = `${cache_path}/selected_video.mp4`
        RNFS.copyFile(sourceUri, out_put_path)
          .then(() => {
            const fileUri = `file://${out_put_path}`;
            setShow_loader(false)
            endRecord(fileUri, result?.assets[0]?.duration);
          })
          .catch((err) => {
            console.log(err.message)
            setShow_loader(false)
          })
      }
    } catch (error) {
      console.log(error);
      setShow_loader(false)
    }
  };

  return (
    <>
      <Pressable onPress={handleClick} style={styles.container}>
        <Image source={Illustration_IMG} style={styles.icon} />
        <Text style={styles.text}>Upload</Text>
      </Pressable>
      <Modal visible={show_loader} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}>
          <Image
            source={TIKTOK_LOADER_GIF}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </Modal>
    </>
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
