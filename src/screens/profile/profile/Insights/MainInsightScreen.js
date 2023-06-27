import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get('window')


const MainInsightScreen = () => {
    const navigation = useNavigation()

    const data = [
        {
            name: 'Account reached',
            value: 3,
            percentage: '80%',
            onPress: null
        },
        {
            name: 'Account engaged',
            value: 1,
            percentage: '-40%',
            onPress: null
        },
        {
            name: 'Total Followers',
            value: 0,
            percentage: '10%',
            onPress: null
        },
        {
            name: 'Total spended time',
            value: 5,
            percentage: '100%',
            onPress: ()=>{
                navigation.navigate('TotalSpendedTime')
            }
        },
        {
            name: 'Total like',
            value: 3,
            percentage: '100%',
            onPress: null
        },
        {
            name: 'Total diamond',
            value: 3,
            percentage: '100%',
            onPress: null
        },
        {
            name: 'Total comment',
            value: 3,
            percentage: '100%',
            onPress: null
        }
    ]

    const handleConfirm = () => {

    }

    return (
        <Body>
            <Body applyPadding={false} style={styles.header}>
                <Body applyPadding={false} style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { marginTop: 0 }]}>
                        Insight
                    </Text>
                </Body>
                <TouchableOpacity
                    onPress={handleConfirm}
                >
                    <Text style={[styles.headerText, { color: '#fff' }]}>Compl...</Text>
                </TouchableOpacity>
            </Body>

            <View style={{
                width: width,
                paddingHorizontal: width * 0.05,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <TouchableOpacity style={styles.date_picker}>
                    <Text style={styles.txt}>Last 7 Days</Text>
                    <Entypo name='chevron-small-down' size={25} />
                </TouchableOpacity>

                <View style={styles.date_picker}>
                    <Text style={styles.txt}>jun 15 - jun 21</Text>
                </View>
            </View>
       
            <View style={{
                width: width,
                paddingHorizontal: width * 0.1,
                alignItems: 'center',
                paddingVertical: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '800',
                    marginBottom: 15,
                    color: 'black'
                }}>Overview</Text>
                <Text>
                    Visit Insights regularly to check on your content's performance
                </Text>
            </View>

            <View>
                <FlatList
                    data={data}

                    renderItem={({ item, index }) => (
                        <View style={styles.main_list}>
                            <Text>
                                {item.name}
                            </Text>
                            <View style={styles.right_list}>
                                <View style={{ alignItems: 'center', marginRight: 5 }}>
                                    <Text>{item.value}</Text>
                                    <Text>{item.percentage}</Text>
                                </View>
                                <TouchableOpacity onPress={item.onPress}>
                                    <Entypo name='chevron-small-right' size={30} color={'black'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
                paddingHorizontal: width * 0.05,
                marginTop: 30,
                marginBottom: 30
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '700'
                }}>Content You Shared</Text>
                <Text style={{
                    color: 'red',
                    fontSize: 16,
                   
                }}>See all</Text>
            </View>
          


        </Body>
    )
}

export default MainInsightScreen

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 7,
        borderColor: 'rgba(217, 217, 217, 0.4)',
        marginTop: 5
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
    },
    leftHeader: {
        flexDirection: 'row',
    },
    main_list: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        justifyContent: 'space-between',
        marginVertical: 10
    },
    right_list: {
        flexDirection: 'row',
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    date_picker: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0e6',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    txt: {
        color: 'black'
    }
})