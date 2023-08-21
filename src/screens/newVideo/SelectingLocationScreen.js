import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { getAllCountries } from '../../apis/countryApi'
import axios from 'axios'
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler'
import * as countryApi from '../../apis/countryApi'
import * as Localize from 'react-native-localize'
import DeviceInfo from 'react-native-device-info'
const { width, height } = Dimensions.get("window")



const SelectingLocationScreen = ({ route }) => {
    const navigation = useNavigation()
    const [data, setData] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(data);
    const [show_search, setShow_search] = useState(false)
    const { setCountries, setCities, countries, cities } = route.params;
    const [selected_country, setSelected_country] = useState([...countries])

    const handleSearch = (text) => {
        const filteredData = data.filter((user) =>
            user.name.toLowerCase().startsWith(text.toLowerCase())
        );
        setFilteredUsers(filteredData);
    };


    // FUNCTION FOR GETTING THE COUNTRY DATA FROM BACKEND
    const getCountry = async () => {
        try {
            const result = await countryApi.getAllCountries()
            setData(result.payload)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCountry()
    }, [])




    const Country_card = React.memo(({ item, index }) => {
        const code = item?.short_name;
        const id = item?.id;
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
            <View style={styles.country_card}>

                <Pressable style={styles.flag_group} onPress={select_country}>
                    <CheckBox
                        boxType='circle'
                        value={selected}
                        onValueChange={select_country}
                        tintColors={{ true: 'red', false: 'black' }}

                    />
                    <View style={styles.country_name}>
                        <Text>{item.emoji}</Text>
                        <Text style={{ marginLeft: 12 }}>{item.name}</Text>
                    </View>
                </Pressable>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SelectingCitiesScreen', { code, setCities, cities })
                    }}>
                    <AntDesign name='arrowright' size={25} />
                </TouchableOpacity>
            </View>
        )
    })





    const handleInsertIds = (data) => {
        const ids = data.map((item) => item.id);
        setSelected_country([...ids])
    };
    const handleFinalClick = () => {
        setCountries(selected_country)
        navigation.goBack()
    }






    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {show_search && <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    setCountries([])
                    navigation.goBack()
                }}>
                    <AntDesign name='arrowleft' size={25} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Countries
                </Text>
                <TouchableOpacity onPress={() => { setShow_search(true) }}>
                    <EvilIcons name='search' size={20} />
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
                    setCountries([])
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
                <TouchableOpacity onPress={handleFinalClick}>
                    <AntDesign name='check' size={25} color={'blue'} />
                </TouchableOpacity>
            </View>}

            {/* Body component */}
            <View style={styles.countries}>
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
                                setCountries([])
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

export default SelectingLocationScreen

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
    country_card: {
        width: width,
        flexDirection: 'row',
        paddingHorizontal: width * 0.07,
        justifyContent: 'space-between',
        marginVertical: 5,
        alignItems: 'center'
    },
    country_name: {
        flexDirection: 'row',
        width: width * 0.4,
        marginLeft: 30,
        alignItems: 'center'
    },
    flag_group: {
        width: width * 0.7,
        flexDirection: 'row',
        alignItems: 'center'
    }

})
