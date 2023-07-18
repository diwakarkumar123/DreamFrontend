import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { getAllCountries } from '../../apis/countryApi'
import axios from 'axios'
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get("window")


const SelectingLocationScreen = ({ route }) => {
    const navigation = useNavigation()
    const [data, setData] = useState('')
    const [country_code, setCountry_code] = useState('')
    const [searchText, setSearchText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(data);
    const [show_search, setShow_search] = useState(false)
    const [selected_country, setSelected_country] = useState(['s'])

    const { setCountries, setCities, countries, cities } = route.params;

    console.log(countries, cities)

    const handleSearch = (text) => {
        setSearchText(text);

        const filteredData = data.filter((user) =>
            user.name.toLowerCase().startsWith(text.toLowerCase())
        );

        setFilteredUsers(filteredData);
    };



    const fetchCountry = () => {
        axios.get('http://192.168.1.8:3000/country/allCountry')
            .then((res) => {
                setFilteredUsers(res.data)
                setData(res.data)
            })
    }

    useEffect(() => {
        fetchCountry()
    }, [])


console.log('countries', countries)
console.log("cities", cities)

    const Country_card = ({ item, index }) => {

        const toggle_switch = (val) => {
            if (selected_country.includes(item)) {

                setSelected_country(selected_country.filter(it => it !== item));
                setCountries(countries.filter(it => it != item.id));
            } else {

                setSelected_country([...selected_country, item]);
                setCountries([...countries, item.id])
            }
        }



        return (
            <View style={styles.country_card}>
                <View style={styles.flag_group}>
                    <CheckBox
                        boxType='circle'
                        value={selected_country.includes(item) ? true : false}
                        onValueChange={toggle_switch}
                        tintColors={{ true: 'red', false: 'black' }}

                    />
                    <View style={styles.country_name}>
                        <Text>{item.emoji}</Text>
                        <Text style={{ marginLeft: 12 }}>{item.name}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setCountry_code(item.short_name)
                        navigation.navigate('SelectingCitiesScreen', { country_code, setCountries, setCities, countries, cities })
                    }}
                >
                    <AntDesign name='arrowright' size={20} />
                </TouchableOpacity>
            </View>
        )
    }


    const handleInsertIds = (data) => {
        const ids = data.map((item) => item.id);
        setCountries(ids);
      };

    




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {show_search && <View style={styles.header}>
                <TouchableOpacity onPress={() => { 
                    setCountries([])
                    navigation.goBack() 
                    }}>
                    <AntDesign name='arrowleft' size={20} />
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
                    <AntDesign name='arrowleft' size={20} />
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
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
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
                    data={filteredUsers}
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
