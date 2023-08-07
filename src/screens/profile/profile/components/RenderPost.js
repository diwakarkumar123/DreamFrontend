import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PROMOTION_SHARE, DIAMOND_ICON } from '../../../../configs/source'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

const RenderPost = ({ item, index }) => {

  return (
    <View style={styles.main_container}>
      <ImageBackground
        resizeMode='cover'
        source={{ uri: `https://dpcst9y3un003.cloudfront.net/${item?.thum}` }}
        style={styles.image_style}>
          
        <View style={styles.image_upper_view}>
          <Text style={styles.txt}>{item?.diamond}</Text>
          <Image source={DIAMOND_ICON} style={styles.diamond} />
        </View>

        <View style={styles.image_bottom_view}>
          <View style={styles.paused_section}>
            <Entypo name='controller-play' size={20} color={"white"} />
            <Text style={styles.txt}>{item?.view}</Text>
          </View>

          <View>
            <Text style={styles.txt}>{item?.like}</Text>
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
    marginHorizontal: width * 0.00,
    width: width / 3
  },
  image_upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 5,
    width: width / 3,
    paddingHorizontal: 2,
    right: 5
  },
  txt: {
    color: 'rgba(255, 255, 255, 0.9)',
    backgroundColor: 'black'
  },
  paused_section: {
    flexDirection: 'row',
    alignItems: 'center'
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


