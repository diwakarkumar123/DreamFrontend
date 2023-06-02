import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { ARROW_BACK_IOS_ICON, QUESTION_MARK } from '../../configs/source'
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Slider } from '@miblanchard/react-native-slider';


const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}



const PromoteScreen = () => {
    const [audience, setAudience] = useState(true)
    const [budget, setBuget] = useState(1)
    const [promotion_time, setPromotion_time] = useState(1)

    const handleBudgetChange = (value) => {
        setBuget(value)
    };

    const handleTimeChange = (value) => {
        setPromotion_time(value)
    };

    return (
        <View style={styles.main_containers}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: window.width * 0.9, marginTop: 10, borderBottomWidth: 1, paddingBottom: 10, paddingHorizontal: window.width * 0.05, borderColor: 'rgba(0, 0, 0, 0.4)' }}>
                <Image source={ARROW_BACK_IOS_ICON} />
                <Text style={{ fontSize: 20, color: '#000000' }}>Promote</Text>
                <Image source={QUESTION_MARK} />
            </View>

            <View style={{ width: window.width * 0.9, marginTop: window.height * 0.02 }} >
                <Text style={{ color: '#000000', fontSize: 16 }}>Define Your audience</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: window.height * 0.01 }}>
                    <Text>
                        Default audience (Dream app choose for you)
                    </Text>
                    <RadioButton
                        status={audience ? 'checked' : 'unchecked'}
                        onPress={() => { setAudience(pre => !pre) }}
                        color='#FA3E60'
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: window.height * 0.01 }}>
                    <Text>Custom</Text>
                    <TouchableOpacity>
                        <Image source={ARROW_BACK_IOS_ICON} style={{ width: 20, height: 20, transform: [{ rotate: '180deg' }] }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ width: window.width * 0.9, marginTop: window.height * 0.02 }}>
                <Text style={{ color: '#000000', fontSize: 16 }}>Buget and duration</Text>


                <View>

                </View>


                <View style={{ marginTop: window.height * 0.02 }}>
                    <Text style={{ fontSize: 16 }}>What is your total budget?</Text>
                    <Slider
                        value={budget}
                        onValueChange={handleBudgetChange}
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        minimumTrackTintColor="#FA3E60"
                        maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
                        thumbTintColor="#C9B5B5"
                    // renderThumbComponent={()=>{
                    //     <Text>{budget}</Text>
                    // }}
                    />
                </View>

                <View style={{ marginTop: window.height * 0.02 }}>
                    <Text style={{ fontSize: 16 }}>How long would you like to promote?</Text>
                    <Slider
                        value={promotion_time}
                        onValueChange={handleTimeChange}
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        minimumTrackTintColor="#FA3E60"
                        maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
                        thumbTintColor="#C9B5B5"
                    />
                </View>
            </View>

        </View>
    )
}

export default PromoteScreen

const styles = StyleSheet.create({
    main_containers: {
        backgroundColor: '#ffffff',
        width: window.width * 1,
        height: window.height * 0.7,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    }
})