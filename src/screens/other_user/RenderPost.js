import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    Pressable,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import Foundation from 'react-native-vector-icons/Foundation.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import { DIAMOND_ICON } from '../../configs/source'
const { width, height } = Dimensions.get('screen');



const RenderPost = ({ item, index, handleImagePress }) => {

    return (
        <Pressable onPress={()=>{handleImagePress(index)}} style={styles.main_container}>
            <ImageBackground
                source={item?.thum ? { uri: `https://dpcst9y3un003.cloudfront.net/${item.thum}`} : {uri: 'https://'} }
                style={styles.image_style}>

                <View style={styles.image_upper_view}>
                    <Image source={DIAMOND_ICON} style={{ width: 20, height: 20 }} />
                    <Text style={styles.txt}>{item?.diamond_value || 0}</Text>
                </View>

                <View style={styles.image_bottom}>
                    <View style={styles.paused_section}>
                        <AntDesign
                            name="caretright"
                            size={14}
                            color={'white'}
                            style={{ top: 2 }}
                        />

                        <Text
                            style={[
                                styles.txt,
                                { color: 'white', paddingRight: 10, textAlign: 'center' },
                            ]}>
                            {item?.view || 0}
                        </Text>
                    </View>
                    <Text style={[styles.txt, { color: 'white' }]}>{item?.likes || 0}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default RenderPost;

const styles = StyleSheet.create({
    image_style: {
        width: width / 3,
        height: 180,
    },
    main_container: {
        borderWidth: 1,
        borderColor: '#fff'
    },
    image_upper_view: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 5,
        right: 20,
        paddingHorizontal: 2,
        alignItems: 'center'
    },
    txt: {
        color: 'yellow',
    },
    paused_section: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        // alignItems: 'center',
    },
    image_bottom_view: {
        flexDirection: 'row',
        width: width * 0.3,
        position: 'absolute',
        bottom: 26,

        justifyContent: 'space-around',
        paddingHorizontal: 2,
        alignItems: 'center',
    },
    image_bottom: {
        flexDirection: 'row',
        width: width * 0.3,
        position: 'absolute',
        bottom: 4,

        justifyContent: 'space-around',
        paddingHorizontal: 2,
        alignItems: 'center',
    },
});