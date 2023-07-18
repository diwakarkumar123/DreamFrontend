import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import Foundation from 'react-native-vector-icons/Foundation.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
const { width, height } = Dimensions.get('window');
const RenderPost = ({ item, index }) => {
    return (
        <View style={styles.main_container}>
            <ImageBackground
                resizeMode="cover"
                source={{ uri: item.img }}
                style={styles.image_style}>
                <View style={styles.image_upper_view}>
                    {/* <MaterialCommunityIcons name="diamond" size={19} color={'yellow'} /> */}
                    <Image source={item.diamond_icon} style={{ width: 20, height: 20 }} />
                    <Text style={styles.txt}>{item.text_foll}</Text>
                </View>

                <View style={styles.image_bottom_view}>
                    <View style={styles.paused_section}>
                        <Text style={[styles.txt, { color: 'white', paddingRight: 10 }]}>
                            {item.date}
                        </Text>

                        <FontAwesome name="share" size={15} color={'white'} />
                    </View>
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
                            {item.play}
                        </Text>
                    </View>
                    <Text style={[styles.txt, { color: 'white' }]}>{item.share_text}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RenderPost;

const styles = StyleSheet.create({
    image_style: {
        width: width * 0.3,
        height: 180,
    },
    main_container: {
        marginHorizontal: width * 0.017777,
        paddingTop: 10,
        paddingBottom: 7
    },
    image_upper_view: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        width: width * 0.3,
        paddingHorizontal: 2,
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