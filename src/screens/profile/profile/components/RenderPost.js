import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PROMOTION_SHARE } from '../../../../configs/source'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

const RenderPost = ({ item, index }) => {
  return (
    <View style={styles.main_container}>
      <ImageBackground
        resizeMode='cover'
        source={{ uri: item.image }}
        style={styles.image_style}>
        <View style={styles.image_upper_view}>
          <Text style={styles.txt}>{item.date_of_creation}</Text>
          <Fontisto name='share-a' size={16} color={"white"} />
        </View>

        <View style={styles.image_bottom_view}>
          <View style={styles.paused_section}>
            <Entypo name='controller-play' size={20} color={"white"} />
            <Text style={styles.txt}>{item.total_view}</Text>
          </View>

          <View>
            <Text style={styles.txt}>{item.total_like}</Text>
          </View>

        </View>

      </ImageBackground>
    </View>
  )
}

export default RenderPost

const styles = StyleSheet.create({
  image_style: {
    width: width * 0.3,
    height: 180
  },
  main_container: {
    marginHorizontal: width * 0.017777,
  },
  image_upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 25,
    width: width * 0.3,
    paddingHorizontal: 2
  },
  txt: {
    color: 'white'
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
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    alignItems: 'center'

  }

})


