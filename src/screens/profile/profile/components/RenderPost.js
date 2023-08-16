import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PROMOTION_SHARE, DIAMOND_ICON, Like_post } from '../../../../configs/source'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'

const { width, height } = Dimensions.get('window')

const RenderPost = ({ item, index }) => {

  return (
    <View style={styles.main_container}>
      <ImageBackground
        resizeMode='cover'
        source={{ uri: `https://dpcst9y3un003.cloudfront.net/${item?.thum}` }}
        style={styles.image_style}>

        <View style={styles.image_upper_view}>
          <Image source={DIAMOND_ICON} style={styles.diamond} />
          <Text style={styles.txt}>{item?.diamond || 0}</Text>
        </View>

        <View style={styles.image_bottom_view}>
          <View style={styles.paused_section}>
            <Entypo name='controller-play' size={20} color={"white"} />
            <Text style={styles.txt}>{item?.view}</Text>
          </View>

          <View style={styles.paused_section}>
            <Octicons name='heart-fill' size={20} color={'#fff'} />
            <Text style={[styles.txt, { marginLeft: 5 }]}>{item?.like}</Text>
          </View>

        </View>

      </ImageBackground>
    </View>
  )
}

export default RenderPost

const styles = StyleSheet.create({
  image_style: {
    width: width / 3,
    height: 180
  },
  main_container: {
    width: width / 3,
    borderWidth: 2,
    borderColor: '#fff'
  },
  image_upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 5,
    width: width / 3,
    paddingHorizontal: 10,
    right: 5
  },
  txt: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16
  },
  paused_section: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  image_bottom_view: {
    flexDirection: 'row',
    width: width * 0.3,
    position: 'absolute',
    bottom: 3,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  diamond: {
    width: 25,
    height: 25
  }

})


