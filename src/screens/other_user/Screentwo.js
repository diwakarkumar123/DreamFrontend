import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';
import { diamond } from '../../configs/source';
import RenderPost from './RenderPost.js';
import { useNavigation } from '@react-navigation/native';


const Screenone = ({data}) => {
    const navigation = useNavigation()

    const handleImagePress = (index)=>{
        navigation.navigate('WatchProfileVideo', {data, index})
    }

    return (
        <View>
            <Tabs.FlatList
                data={data}
                numColumns={3}
                renderItem={({ item, index }) => <RenderPost item={item?.video} index={index} handleImagePress={handleImagePress} />}
            />
        </View>

    );
};

export default Screenone;

const styles = StyleSheet.create({});