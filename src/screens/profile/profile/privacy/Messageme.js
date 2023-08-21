import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    Platform,
    StatusBar,
    FlatList,
    Pressable
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome';
import { Setting_green_tick_icon, Setting_left_icon } from '../../../../configs/source'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header';


const Viewlist = () => {
    const Navigation = useNavigation()
    const [selected, setSelected] = useState(0)
    const toggleIcon1 = () => {
        setShowIcon1(!showIcon1);
    };
    const toggleIcon2 = () => {
        setShowIcon2(!showIcon2);
    };
    const data = [
        {
            id: 0,
            name: 'Disable',
        },
        {
            id: 1,
            name: 'Everyone',
        },
        {
            id: 2,
            name: 'only Followings each other',
        }
    ]




    const toggleIcon4 = () => {
        setShowIcon4(!showIcon4);
    };
    return (
        <View style={styles.main_conatiner}>
            <Header headertext={'Who can my like list '} />
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Pressable onPress={()=>{setSelected(index)}} style={styles.box_list}>
                        <Text style={styles.txt}>{item?.name}</Text>
                        {selected == index && (
                            <Image
                                source={Setting_green_tick_icon}
                                style={{ width: 20, height: 20 }}
                                resizeMode="cover" />
                        )}
                    </Pressable>


                )}
            />
        </View>
    );
};

export default Viewlist;

const styles = StyleSheet.create({
    box_list: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-between',
        marginTop: 5
    },
    txt: {
        fontSize: 14,
        color: '#000',
    },
    main_conatiner: {
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: '#fff',
        flex: 1

    }
});