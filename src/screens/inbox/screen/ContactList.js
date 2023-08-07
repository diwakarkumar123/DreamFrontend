import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../profile/profile/components/Header'
import { FlatList } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


const { width, height } = Dimensions.get('screen')


const color = [
    '#8bf7a8',
    '#537de0',
    '#e09753',
    '#b3747a',
    '#a660cc',
    '#bc60cc',
    '#c3cc60',
    '#cca460',
    '#f29580',
    '#2b282b'
]

const ContactList = () => {
    const route = useRoute()
    const [data, setData] = useState(route?.params?.data)

    const handleSearch = (text) => {
        const filteredData = route?.params?.data.filter((user) =>
            user.displayName.toLowerCase().includes(text.toLowerCase())
        );
        setData(filteredData);
    };





    const RenderContact = ({ item, index }) => {

        if (item?.phoneNumbers.length > 0) {
            return (
                <View style={styles.item_list}>
                    <CheckBox
                        disabled={false}
                        style={{ width: 20, height: 20 }}
                    // value={toggleCheckBox}
                    // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <View style={[styles.avatar, { backgroundColor: color[Math.floor(Math.random() * 10)] }]}>
                        <Text style={styles.txt}>{item?.displayName.slice(0, 2)}</Text>
                    </View>

                    <View>
                        <Text>{item?.displayName}</Text>
                        <Text>{item?.phoneNumbers[0]?.number}</Text>
                    </View>

                </View>
            )
        }
    }



    return (
        <SafeAreaView style={styles.main_container}>
            <Header headertext={"Contact"} />
            <View style={styles.main_input}>
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                    onChangeText={handleSearch}
                />
            </View>
            {data && (
                <FlatList
                    data={data}
                    keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => (
                        <RenderContact item={item} index={index} />
                    )}
                />
            )}
            {!data && (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Data not found</Text>
                </View>
            )}
            

        </SafeAreaView>
    )
}

export default ContactList

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item_list: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 10

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    txt: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 20
    },
    main_input: {
        width: width,
        paddingHorizontal: 20
    },
    input: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        paddingHorizontal: 20
    }
})