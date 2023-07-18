import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window')
const url = 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4'

const VideoGift = () => {
    return (
        <SafeAreaView style={styles.main_conatainer}>
            <View style={styles.upper_part}>
                <ImageBackground
                    source={{ uri: url }}
                    style={{ flex: 1 }}>
                        <Pressable>
                            
                        </Pressable>

                </ImageBackground>
            </View>

        </SafeAreaView>
    )
}

export default VideoGift

const styles = StyleSheet.create({
    main_conatainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    upper_part: {
        width: width,
        height: height * 0.4
    }
})