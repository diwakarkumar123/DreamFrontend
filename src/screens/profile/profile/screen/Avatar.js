import { FlatList, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer, notionists, croodles, personas } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window')

const Avatar = () => {
    const [select_avatar, setSelect_avatar] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const avatars = [];
    const [fetch_more_data, setFetch_more_data] = useState('')
    const [loaded_avatar, setLoaded_avatar] = useState([])
    const newAvatar = []
    const dummyData = [
        {
            index: 1,
            svg: ''
        },
        {
            index: 2,
            svg: ''
        },
        {
            index: 3,
            svg: ''
        },
        {
            index: 4,
            svg: ''
        },
        {
            index: 5,
            svg: ''
        },
        {
            index: 6,
            svg: ''
        },
        {
            index: 7,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        },
        {
            index: 8,
            svg: ''
        }]
    

    const getAvatar = ()=>{
        const avatars = [];
        for (let i = 0; i < 32; i++) {
            const avatar = createAvatar(personas, {
                seed: `Avatar ${i + 1}`,
            });
            const svg = avatar.toString();
            avatars.push({
                index: i,
                svg: svg,
            })
        }
        return avatars;
    }
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
        
          try {
            const avatars = await getAvatar(); 
            setLoaded_avatar(avatars)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(true);
          }
        };
    
        fetchData();
      }, [fetch_more_data]);


      console.log('newAvatar', loaded_avatar)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            width: width
        }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Avatar
                </Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={[styles.headerText, { color: 'red' }]}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, }}>
                <FlatList
                    data={dummyData}
                    numColumns={4}
                    onEndReached={()=>{setFetch_more_data(p => !p)}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        width: width,
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item, index }) => (
                        <SkeletonContent
                            containerStyle={styles.avatar}
                            isLoading={loading}
                            layout={[
                                { key: 'title', width: 70, height: 70, },
                            ]}
                        >
                        
                            <TouchableOpacity
                                onPress={() => { setSelect_avatar(item) }}
                                style={[styles.avatar, { backgroundColor: select_avatar.index === index ? 'red' : 'white' }]}>
                                <SvgXml xml={item.svg} width={70} height={70} />
                            </TouchableOpacity>
                        </SkeletonContent>
                    )}

                />

            </View>
        </SafeAreaView>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
    },
    avatar: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
});
