import React, { useState } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen')





const BusinessAccountCategories = () => {
  const [data, setData] = useState([
    { id: 1, label: 'Art & Crafts' },
    { id: 2, label: 'Automotive & Transportation' },
    { id: 3, label: 'Baby' },
    { id: 4, label: 'Beauty' },
    { id: 5, label: 'Clothing& Accessories' },
    { id: 6, label: 'Education and Traning' },
    { id: 7, label: 'Electronics' },
    { id: 8, label: 'Finance and Investment' },
    { id: 9, label: 'Food & Beverage' },
    { id: 10, label: 'Gaming' },
    { id: 11, label: 'Health & insurance' },
    { id: 12, label: 'Home,Furniture & Appliances' },
    { id: 13, label: 'Machinery & Equipment' },
    { id: 14, label: 'Personal Blog' },
    { id: 15, label: 'Professional Services' },
    { id: 16, label: 'Public Administration' },
    { id: 17, label: 'Real Estate' },
    { id: 18, label: 'Restaurant & Bars' },
    { id: 19, label: 'Shopping & Apps' },
    { id: 20, label: 'Software & Apps' },
    { id: 21, label: 'Sports,Fitness & outdoors' },
    { id: 22, label: 'Travel & tourism' },
    { id: 23, label: 'Others' },
  ]);
  const navigation = useNavigation()
  const [selected_item, setSelected_item] = useState()

  console.log(selected_item)

  const renderItem = ({ item, index }) => {

    const handleSelect = () => {
      if (selected_item) {
        setSelected_item('')
      } else {
        setSelected_item(item)
      }
    }


    return (
      <Pressable style={styles.list_view} onPress={handleSelect}>
        <Text style={{ color: "black", fontWeight: '500' }}>{item?.label}</Text>

        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 2,
              marginRight: 12,
              borderColor: selected_item?.id == index + 1 ? 'red' : 'gray'
            }}>
            {selected_item?.id == index + 1 && (
              <View
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 8.5,
                  backgroundColor: 'red',
                  top: 1.5,
                  left: 1.5,
                }} />)}
          </View>
        </View>
      </Pressable>
    )
  }



  const ListHeader = () => {
    return (
      <View style={{ marginLeft: 20, paddingBottom: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            paddingBottom: 10,
            paddingTop: 10,
            color: "black"
          }}>
          Choose a category
        </Text>
        <Text style={{ fontSize: 12, color: '#a2a6a3', fontWeight: '500' }}>
          Select the Category the best describes your business account . This
          Category won't be displayed Publicy{' '}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main_container}>
      <Header headertext={'Business Account'} />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
      {selected_item && (
        <TouchableOpacity style={styles.next_button} onPress={() => { navigation.navigate('BusinessAccount1') }}>
          <Text style={{ color: '#fff' }}>Next</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default BusinessAccountCategories;

const styles = StyleSheet.create({
  list_view: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 0.5,
    paddingTop: 15
  },
  label_line: {
    width: '90%',
    height: 1,
    backgroundColor: '#7e827f',
    marginLeft: 10,
  },
  main_container: {
    backgroundColor: '#fff',
    flex: 1
  },
  next_button: {
    position: 'absolute',
    bottom: 70,
    right: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});