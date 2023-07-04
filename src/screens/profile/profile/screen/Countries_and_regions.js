import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'



const { width, height } = Dimensions.get('window')

const Countries_and_regions = ({ route }) => {
    const navigation = useNavigation()
    const [active_continent, setActive_continents] = useState('Asia')
    const { setList, list } = route.params;
    const continents = [
        {
            name: 'Asia'
        },
        {
            name: 'America'
        },
        {
            name: 'Europe'
        },
        {
            name: 'Africa'
        }
    ]

    const handleCountryPress = (country) => {
        const updatedList = list.map((item) => {
            if (item.name === 'Country') {
                return {
                    ...item,
                    value: country,
                };
            }
            return item;
        });

        setList(updatedList);
        navigation.goBack()
    };



    const countriesByContinent = {
        Asia: [
            { name: 'Afghanistan' },
            { name: 'Bahrain' },
            { name: 'Bangladesh' },
            { name: 'Bhutan' },
            { name: 'Brunei' },
            { name: 'Cambodia' },
            { name: 'China' },
            { name: 'Cyprus' },
            { name: 'East Timor' },
            { name: 'India' },
            { name: 'Indonesia' },
            { name: 'Iran' },
            { name: 'Iraq' },
            { name: 'Israel' },
            { name: 'Japan' },
            { name: 'Jordan' },
            { name: 'Kazakhstan' },
            { name: 'Kuwait' },
            { name: 'Kyrgyzstan' },
            { name: 'Laos' },
            { name: 'Lebanon' },
            { name: 'Malaysia' },
            { name: 'Maldives' },
            { name: 'Mongolia' },
            { name: 'Myanmar' },
            { name: 'Nepal' },
            { name: 'North Korea' },
            { name: 'Oman' },
            { name: 'Pakistan' },
            { name: 'Palestine' },
            { name: 'Philippines' },
            { name: 'Qatar' },
            { name: 'Russia' },
            { name: 'Saudi Arabia' },
            { name: 'Singapore' },
            { name: 'South Korea' },
            { name: 'Sri Lanka' },
            { name: 'Syria' },
            { name: 'Tajikistan' },
            { name: 'Thailand' },
            { name: 'Turkey' },
            { name: 'Turkmenistan' },
            { name: 'United Arab Emirates' },
            { name: 'Uzbekistan' },
            { name: 'Vietnam' },
            { name: 'Yemen' }
        ],
        Europe: [
            { name: "Albania" },
            { name: "Andorra" },
            { name: "Austria" },
            { name: "Belarus" },
            { name: "Belgium" },
            { name: "Bosnia and Herzegovina" },
            { name: "Bulgaria" },
            { name: "Croatia" },
            { name: "Cyprus" },
            { name: "Czech Republic" },
            { name: "Denmark" },
            { name: "Estonia" },
            { name: "Finland" },
            { name: "France" },
            { name: "Germany" },
            { name: "Greece" },
            { name: "Hungary" },
            { name: "Iceland" },
            { name: "Ireland" },
            { name: "Italy" },
            { name: "Kosovo" },
            { name: "Latvia" },
            { name: "Liechtenstein" },
            { name: "Lithuania" },
            { name: "Luxembourg" },
            { name: "Malta" },
            { name: "Moldova" },
            { name: "Monaco" },
            { name: "Montenegro" },
            { name: "Netherlands" },
            { name: "North Macedonia" },
            { name: "Norway" },
            { name: "Poland" },
            { name: "Portugal" },
            { name: "Romania" },
            { name: "Russia" },
            { name: "San Marino" },
            { name: "Serbia" },
            { name: "Slovakia" },
            { name: "Slovenia" },
            { name: "Spain" },
            { name: "Sweden" },
            { name: "Switzerland" },
            { name: "Ukraine" },
            { name: "United Kingdom" },
            { name: "Vatican City" }
        ],
        Africa: [
            { name: "Algeria" },
            { name: "Angola" },
            { name: "Benin" },
            { name: "Botswana" },
            { name: "Burkina Faso" },
            { name: "Burundi" },
            { name: "Cabo Verde" },
            { name: "Cameroon" },
            { name: "Central African Republic" },
            { name: "Chad" },
            { name: "Comoros" },
            { name: "Democratic Republic of the Congo" },
            { name: "Republic of the Congo" },
            { name: "Djibouti" },
            { name: "Egypt" },
            { name: "Equatorial Guinea" },
            { name: "Eritrea" },
            { name: "Eswatini" },
            { name: "Ethiopia" },
            { name: "Gabon" },
            { name: "Gambia" },
            { name: "Ghana" },
            { name: "Guinea" },
            { name: "Guinea-Bissau" },
            { name: "Ivory Coast" },
            { name: "Kenya" },
            { name: "Lesotho" },
            { name: "Liberia" },
            { name: "Libya" },
            { name: "Madagascar" },
            { name: "Malawi" },
            { name: "Mali" },
            { name: "Mauritania" },
            { name: "Mauritius" },
            { name: "Morocco" },
            { name: "Mozambique" },
            { name: "Namibia" },
            { name: "Niger" },
            { name: "Nigeria" },
            { name: "Rwanda" },
            { name: "São Tomé and Príncipe" },
            { name: "Senegal" },
            { name: "Seychelles" },
            { name: "Sierra Leone" },
            { name: "Somalia" },
            { name: "South Africa" },
            { name: "South Sudan" },
            { name: "Sudan" },
            { name: "Tanzania" },
            { name: "Togo" },
            { name: "Tunisia" },
            { name: "Uganda" },
            { name: "Zambia" },
            { name: "Zimbabwe" }
        ],

        America: [
            { name: "Antigua and Barbuda" },
            { name: "Argentina" },
            { name: "Bahamas" },
            { name: "Barbados" },
            { name: "Belize" },
            { name: "Bolivia" },
            { name: "Brazil" },
            { name: "Canada" },
            { name: "Chile" },
            { name: "Colombia" },
            { name: "Costa Rica" },
            { name: "Cuba" },
            { name: "Dominica" },
            { name: "Dominican Republic" },
            { name: "Ecuador" },
            { name: "El Salvador" },
            { name: "Grenada" },
            { name: "Guatemala" },
            { name: "Guyana" },
            { name: "Haiti" },
            { name: "Honduras" },
            { name: "Jamaica" },
            { name: "Mexico" },
            { name: "Nicaragua" },
            { name: "Panama" },
            { name: "Paraguay" },
            { name: "Peru" },
            { name: "Saint Kitts and Nevis" },
            { name: "Saint Lucia" },
            { name: "Saint Vincent and the Grenadines" },
            { name: "Suriname" },
            { name: "Trinidad and Tobago" },
            { name: "United States of America" },
            { name: "Uruguay" },
            { name: "Venezuela" }
        ]
    }










    return (
        <Body style={{ flex: 1, }}>
            <Body applyPadding={false} style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { marginTop: 0 }]}>
                    Countries & Regions
                </Text>
                <TouchableOpacity>
                    <EvilIcons name='search' size={20} />
                </TouchableOpacity>
            </Body>

            <Body applyPadding={false} style={styles.continent}>
                <FlatList
                    data={continents}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            applyPadding={false}
                            onPress={() => { setActive_continents(item.name) }}
                            style={[styles.continent_card, {
                                borderColor: active_continent == item.name ? 'black' : 'rgba(0, 0, 0, 0.2)'
                            }]}>
                            <Ionicons name='ios-earth' size={20} />
                            <Text style={styles.txt}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Body>

            <Body applyPadding={false} style={styles.countries}>
                <FlatList
                    data={countriesByContinent[active_continent]}
                    numColumns={4}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            applyPadding={false}
                            style={styles.countries_card}
                            onPress={() => { handleCountryPress(item.name) }}
                        >
                            <Text style={styles.countries_txt}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />

            </Body>

        </Body>
    )
}

export default Countries_and_regions

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
    continent_card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        width: width * 0.24,
        padding: 5,
        // borderColor: 'rgba(0, 0, 0, 0.2)',
        marginVertical: 8,
        marginHorizontal: 20
    },
    txt: {
        fontSize: 16,
        marginLeft: 6
    },
    continent: {
        width: width,
        paddingHorizontal: width * 0.1,
        alignItems: 'center',
    },
    countries: {
        width: width,
        alignItems: 'center'
    },
    countries_card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: width * 0.2,
        padding: 5,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        marginVertical: 8,
        marginHorizontal: 5
    },
    countries_txt: {
        fontSize: 12,
    },
})


