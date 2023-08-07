import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RenderPost from '../components/RenderPost'
import { Tabs } from 'react-native-collapsible-tab-view'



const LikedPost = ({data}) => {
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

export default LikedPost

const styles = StyleSheet.create({})