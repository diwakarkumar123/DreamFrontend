import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView ,Image, StatusBar, Platform} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign.js';
const { width, height } = Dimensions.get('window');
import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import {Setting_left_icon} from '../../../../configs/source'
import Header from '../components/Header';

const PrivacyPolicy = () => {
    const Navigation = useNavigation()

    const [switchStates, setSwitchStates] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

    ]);

    const onToggleSwitch = (index) => {
        const newswitch = [...switchStates]
        newswitch[index] = !newswitch[index]
        setSwitchStates(newswitch);

    }

    return (
        <View style={styles.main_conatainer}>
                <Header headertext={'Privacy'} />
                <ScrollView>
                <View style={{ marginLeft: width * 0.03, marginRight: width * 0.03, backgroundColor: '#ffff' }}>
                <TouchableOpacity  onPress={()=>{Navigation.navigate('Userblocked')}}>

                    <View style={styles.topcontainer}>

                        <View style={styles.innercontainer}>
                            <Text style={styles.textstyle}>
                                User Blocked me
                            </Text>
                        </View>

                        <View style={{ width: width * .1, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="right" color="black" size={20} />

                        </View>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{Navigation.navigate('Messageme')}}>

                    <View style={styles.topcontainer}>
                        <View style={styles.innercontainer} >
                            <Text style={styles.textstyle}>
                                Who can message me
                            </Text>
                        </View>
                        <View style={{ width: width * .1, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="right" color="black" size={18} />

                        </View>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{Navigation.navigate('Viewlist')}}>

                    <View style={styles.topcontainer}>
                        <View style={styles.innercontainer} >
                            <Text style={styles.textstyle}>
                                Who can view my like list                    </Text>
                        </View>
                        <View style={{ width: width * .1, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="right" color="black" size={18} />

                        </View>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{Navigation.navigate('Supperfollow')}} >

                    <View style={styles.topcontainer}>
                        <View style={styles.innercontainer}>
                            <Text style={styles.textstyle}>
                                Who can see my super follow list                    </Text>
                        </View>
                        <View style={{ width: width * .1, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="right" color="black" size={18} />

                        </View>

                    </View>
                    </TouchableOpacity>

                </View>

                <View style={{ marginLeft: width * 0.02, marginRight: width * 0.03, marginTop: height * 0.020 }}>


                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * .7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Hide location in Profile</Text>
                        </View>

                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[0]} onValueChange={() => { onToggleSwitch(0) }} color='#ed2415' />

                        </View>

                    </View>
                    <View style={{ marginLeft: width * 0.022 ,width:width*0.7}}>
                        <Text>
                            Once turned on, your location will be hidden in your Profile.
                        </Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * .7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}> Don't recommend me to my friends</Text>
                        </View>

                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[1]} onValueChange={() => onToggleSwitch(1)} color='#ed2415' />

                        </View>

                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            Once turned on, you won't be recommended to your Facebook friends and mobile contacts.                    </Text>
                    </View>

                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Don't recommend my LIVE to friends{'\n'} in the live</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[2]} onValueChange={() => onToggleSwitch(2)} color='#ed2415' />

                        </View>

                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            Once turned on, your LIVE sessions will not be recommend to your Facebook friends                    </Text>
                    </View>

                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Enable others to Duet with my videos</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[3]} onValueChange={() => onToggleSwitch(3)} color='#ed2415' />

                        </View>


                    </View>
                    <View style={{ marginLeft: width * 0.022 ,width:width*0.7}}>
                        <Text>
                            When disabled, others cannot Duet with your videos.                    </Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Enable others to save my posts</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[4]} onValueChange={() => onToggleSwitch(4)} color='#ed2415' />

                        </View>


                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            When disabled, others cannot save your posts.                                   </Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Enable others to comment on my posts</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[5]} onValueChange={() => onToggleSwitch(5)} color='#ed2415' />

                        </View>


                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            When disabled, others cannot comment on your posts                                </Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Allow screenshots or screen recording of my live content</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[6]} onValueChange={() => onToggleSwitch(6)} color='#ed2415' />

                        </View>


                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            After closing, others cannot take screenshots or record any of your live content                                    </Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <View style={{ flexDirection: 'row', width: width * 0.7 }}>
                            <Text style={[styles.textwraper, { paddingLeft: height * 0.01, }]}>Allow to set my LINE status public</Text>

                        </View>
                        <View style={{ width: width * 0.25, }}>
                            <Switch value={switchStates[7]} onValueChange={() => onToggleSwitch(7)} color='#ed2415' />

                        </View>


                    </View>
                    <View style={{ marginLeft: width * 0.022,width:width*0.7 }}>
                        <Text>
                            After close, nobody can know your LINE status outside the LIVE room                                       </Text>
                    </View>
                </View>

            </ScrollView>
        </View >
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    main_conatainer: {
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    },
    toptext: {
        // backgroundColor:'red',
        marginTop: height * 0.02
    },
    textwraper: {
        fontSize: 15,
        color: '#000000',
        // fontWeight: '500',
        fontFamily: 'Roboto',

    },
    topcontainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
         padding: 5, 
         marginTop: height * 0.027
    },
    bottomcontainer: {
        width: width * .9,
        // backgroundColor: 'red',
        flexDirection: 'row',
        marginTop: height * 0.011,
        padding: 3,
        marginTop: height * 0.030
    },
    textstyle:{
        fontSize: 16,  
        color: '#000'
    },
    innercontainer:{
        width:width*0.7,
    }

})