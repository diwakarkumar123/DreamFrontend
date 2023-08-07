import { StyleSheet, Text, View, SectionList, FlatList } from 'react-native'
import React, { useState } from 'react'
import RenderComment from './RenderComment'

const CommentScreen = ({ data }) => {
    const [comment_data, setComment_data] = useState(data)



    return (
        <View style={styles.main_container}>
            <FlatList
                data={comment_data}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (<RenderComment item={item} />)}
            />
        </View>
    )
}

export default CommentScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginBottom: 40
    }
})