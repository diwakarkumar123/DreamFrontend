import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

const SearchPeople = () => {
    return (
        <View style={styles.main_container}>
            <TextInput
                style={styles.input}
                placeholder='Search'
                placeholderTextColor={'#020202'}
            />
        </View>
    )
}

export default SearchPeople

const styles = StyleSheet.create({
    main_container: {
        width: width * 0.9,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginHorizontal: width * 0.05,
        borderRadius: 5
    },
    input: {
        padding: 15,
        fontSize: 16
    },
    
})