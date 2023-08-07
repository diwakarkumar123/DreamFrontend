import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const PremiumModal = ({setModalVisible, premiumHandler}) => {
    return (
        <>
            <TouchableOpacity
                style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.60)' }}
                onPressIn={() => {
                    setModalVisible(false);
                }}
            />
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{ fontSize: 18, fontWeight: 500, color: '#000' }}>
                        Message user with Premium
                    </Text>
                </View>
                <View
                    style={{
                        width: width * 0.9,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: height * 0.03,
                        alignSelf: 'center',
                    }}>
                    <Text style={{ fontWeight: 500 }}>
                        For Messaging! please ensure that user is following you either go
                        for premium option.
                    </Text>
                </View>
                <View style={{ marginTop: height * 0.06 }}>
                    <Pressable style={styles.premium} onPress={premiumHandler}>
                        <Text style={{ color: '#FFF', fontSize: 16 }}>Try Premium</Text>
                    </Pressable>
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                    <TouchableOpacity
                        onPress={premiumHandler}
                        style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>See Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default PremiumModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: width,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.38,
        position: 'absolute',
        bottom: 0,
      },
      modalContent: {
        height: height * 0.07,
        alignItems: 'center',
        marginTop: height * 0.03,
        padding: 5,
        borderBottomWidth:.5,
      },
      closeButton: {
       
        padding:5,
       
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButtonText: {
        color: 'red',
        fontSize: 15,
      },
      premium: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.07,
        borderRadius: 25,
        width: width * 0.9,
        alignSelf: 'center',
      },
})