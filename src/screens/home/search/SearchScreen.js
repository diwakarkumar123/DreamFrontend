import { Dimensions, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('screen')

const SearchScreen = () => {
    const navigation = useNavigation()
    const [search_text, setSearchText] = useState()
    const [filteredData, setFilteredUsers] = useState([])
    

    const handleSearch = (text) => {
        setSearchText(text);

        const filteredData = data.filter((user) =>
            data.name.toLowerCase().startsWith(text.toLowerCase())
        );

        setFilteredUsers(filteredData);
    };

    const data = [
        {
            id: 1,
            name: 'shubham ghanghotia',
            username: ''
            
        }
    ]



    return (
        <SafeAreaView>
            <View style={{
                width: width,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: width * 0.05,
                borderBottomWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.2)'

            }}>
                <TouchableOpacity onPress={() => {
                    // setCities([])
                    navigation.goBack()
                }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <View style={{ width: width * 0.9, }}>
                    <TextInput
                        placeholder='Search'
                        onChangeText={handleSearch}
                        style={{
                            width: '100%',
                            marginLeft: 10,
                            // backgroundColor: 'black'
                        }}
                    />
                </View>
                {/* <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='check' size={25} color={'blue'} />
                </TouchableOpacity> */}
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Pressable onPress={()=>{navigation.navigate('UserProfileMainPage')}}>
                    <View style={{
                        width: width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: width * 0.1,
                        marginTop: 10
                    }}>
                        <View>
                            <Image
                                source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4' }}
                                style={{ width: 50, height: 50, borderRadius: 30 }}
                            />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text> shubham ghanghotia</Text>
                            <Text> @shubham</Text>
                        </View>
                    </View>
                    </Pressable>
                )}
            />

            <StatusBar barStyle={'dark-content'} />
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})