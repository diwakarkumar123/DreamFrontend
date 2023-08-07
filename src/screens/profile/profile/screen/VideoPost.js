import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'
import RenderPost from '../components/RenderPost'


const VideoPost = ({data}) => {
  return (
    <Tabs.FlatList
      data={data}
      numColumns={3}
      renderItem={({ item, index }) => (
        <RenderPost item={item} index={index} />
      )}
    />
  )
}

export default VideoPost

const styles = StyleSheet.create({})  