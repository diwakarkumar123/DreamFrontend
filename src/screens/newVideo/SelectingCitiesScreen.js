import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { ToggleButton } from 'react-native-paper';
import * as countryApi from '../../apis/countryApi'

const { width, height } = Dimensions.get('window')






const SelectingCitiesScreen = ({ route }) => {
    const {code, setCities, cities } = route.params;
    const [data, setData] = useState('')
    const navigation = useNavigation()
    const [show_search, setShow_search] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState('');
    const [selected_country, setSelected_country] = useState([...cities])
    const getAllCitiesByCountryCode = async () => {
        try {
            const result = await countryApi.getCitiesByCountryCode(code)
            setData(result.payload)
        } catch (error) {
        }
    }
    useEffect(() => {
        getAllCitiesByCountryCode()
    }, [code])

    const handleSearch = (text) => {
        const filteredData = data.filter((user) =>
            user.name.toLowerCase().startsWith(text.toLowerCase())
        );
        setFilteredUsers(filteredData);
    };


    const handleInsertIds = (data) => {
        const ids = data.map((item) => item.id);
        setSelected_country([...ids])
    };
    const handleFinalSelect = ()=>{
        setCities([...selected_country])
        navigation.goBack()
    }




    const Country_card = React.memo(({ item, index }) => {
        const id = item?.id
        const [selected, setSelected] = useState(selected_country.includes(id))

        const select_country = () => {
            setSelected(p => !p)
            if (selected_country.includes(id)) {
                const newCountry = selected_country.filter(v => v !== id)
                setSelected_country([...newCountry])
            } else {
                setSelected_country(selected_country.concat(id));
            }
        }

        return (
            <Pressable style={styles.cities_card} onPress={select_country}>
                <Text style={styles.text}>{item.name}</Text>
                <CheckBox
                    onValueChange={select_country}
                    value={selected}
                    tintColors={{ true: 'red', false: 'black' }}
                />
            </Pressable>
        )
    })


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {show_search && <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={25} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Cities
                </Text>
                <TouchableOpacity onPress={() => { setShow_search(true) }}>
                    <EvilIcons name='search' size={25} />
                </TouchableOpacity>
            </View>}

            {!show_search && <View style={{
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
                    <AntDesign name='arrowleft' size={25} />
                </TouchableOpacity>
                <View style={{ width: width * 0.8, }}>
                    <TextInput
                        placeholder='Search'
                        onChangeText={handleSearch}
                        style={{
                            width: '100%',
                            marginLeft: 10
                        }}
                    />
                </View>
                <TouchableOpacity onPress={handleFinalSelect}>
                    <AntDesign name='check' size={30} color={'blue'} />
                </TouchableOpacity>
            </View>}

            {/* displayong cities */}
            <View style={{ flex: 1, }}>
                <View style={{
                    width: width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: width * 0.1,
                    marginTop: 10
                }}>
                    <Text>Select All</Text>
                    <CheckBox
                        value={selected_country.length === data.length ? true : false}
                        tintColors={{ true: 'red', false: 'black' }}
                        onValueChange={() => {
                            if (selected_country.length === data.length) {
                                setSelected_country([])
                                setCities([])
                            } else {
                                setSelected_country(data)
                                handleInsertIds(data)
                            }
                        }}
                    />
                </View>

                <FlatList
                    data={filteredUsers ? filteredUsers : data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Country_card item={item} index={index} />
                    )}
                />
            </View>

        </SafeAreaView>
    )
}

export default SelectingCitiesScreen

const styles = StyleSheet.create({
    countries: {
        width: width,
        height: height,
        alignItems: 'center'
    },
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
    cities_card: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.1,
        marginVertical: 5,
        
    },
    text: {
        fontSize: 16,
        color: '#020202'
    }
})