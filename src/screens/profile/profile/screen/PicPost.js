import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'
import RenderPost from '../components/RenderPost'


const {width, height} = Dimensions.get('screen')

const PicPost = ({data}) => {


  return (
   <Tabs.FlatList
      data={data}
      numColumns={3}
      renderItem={({item, index})=>(
       <RenderPost item={item} index={index} />
      )}
   />
  )
}

export default PicPost

const styles = StyleSheet.create({})