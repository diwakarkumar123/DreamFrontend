import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Body from '../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const {width, height} = Dimensions.get('window')

const Making_friend_intention = ({route}) => {
    const [age, setAge] = useState("26+")
    const [location, setLocation] = useState('Local')
    const [prefer, setPrefer] = useState("Hot chat")
    const navigation = useNavigation()
    const {list, setList} = route.params;

    const handleMakingFriendIntentionPress = (value) => {
        const updatedList = list.map((item) => {
          if (item.name == 'Making friend intention') {
            return {
              ...item,
              value: value,
            };
          }
          return item;
        });
    
        setList(updatedList);
        navigation.goBack()
    
      };

    return (
        <Body applyPadding={false} style={{ flex: 1 }}>

            <Body applyPadding={false} style={styles.header}>
                <Body applyPadding={false} style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { marginTop: 0 }]}>
                        Making Friend i...
                    </Text>
                </Body>
                <TouchableOpacity 
                    onPress={()=>{handleMakingFriendIntentionPress(prefer)}}
                >
                    <Text style={[styles.headerText, { color: 'rgba(26, 148, 236, 1)' }]}>Compl...</Text>
                </TouchableOpacity>
            </Body>

            <Body applyPadding={false}>
                <Body applyPadding={false} style={styles.age_main_container}>
                        <Text style={styles.txt}>Age</Text>
                        <Body applyPadding={false} style={styles.age_card}>
                                <TouchableOpacity 
                                onPress={()=>{setAge('18-26')}}
                                style={[styles.age_button, {
                                    backgroundColor: age == '18-26' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)',
                                }]}>
                                    <Text>18-26</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={()=>{setAge('26+')}}
                                style={[styles.age_button, {
                                    backgroundColor: age == '26+' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)'
                                }]}>
                                    <Text>26+</Text>
                                </TouchableOpacity>
                        </Body>
                </Body>

                <Body applyPadding={false} style={styles.age_main_container}>
                        <Text style={styles.txt}>Location</Text>
                        <Body applyPadding={false} style={styles.age_card}>
                                <TouchableOpacity 
                                onPress={()=>{setLocation('Overseas')}}
                                style={[styles.age_button, {
                                    backgroundColor: location == 'Overseas' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)',
                                }]}>
                                    <Text>Overseas</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={()=>{setLocation('Local')}}
                                style={[styles.age_button, {
                                    backgroundColor: location == 'Local' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)',
                                }]}>
                                    <Text>Local</Text>
                                </TouchableOpacity>
                        </Body>
                </Body>

                <Body applyPadding={false} style={styles.age_main_container}>
                        <Text style={styles.txt}>Prefer</Text>
                        <Body applyPadding={false} style={styles.age_card}>
                                <TouchableOpacity 
                                onPress={()=>{setPrefer('Soulmate')}}
                                style={[styles.age_button, {
                                    backgroundColor: prefer == 'Soulmate' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)',
                                }]}>
                                    <Text>Soulmate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={()=>{setPrefer('Hot chat')}}
                                style={[styles.age_button, {
                                    backgroundColor: prefer == 'Hot chat' ? '#1A94EC' : 'rgba(0, 0, 0, 0.4)',
                                }]}>
                                    <Text>Hot chat</Text>
                                </TouchableOpacity>
                        </Body>
                </Body>
            </Body>
        </Body>
    )
}

export default Making_friend_intention

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 7,
        borderColor: 'rgba(217, 217, 217, 0.4)'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
        marginTop: 5
    },
    leftHeader: {
        flexDirection: 'row',
    },
    age_button: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 5,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    age_card: {
        flexDirection: 'row',
        width: width * 0.38,
        justifyContent: 'space-between'
    },
    txt: {
     fontSize: 16,
     fontWeight: '700',
     color: '#000000',
     marginBottom: 10
    },
    age_main_container: {
        width: width,
        paddingLeft: 40,
        marginTop: 15
    }
})