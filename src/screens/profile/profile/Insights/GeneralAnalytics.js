import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const GeneralAnalytics = () => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  const User_video = [
    {
      id: '1',
      uppertitle: 'Total Shares',

      bottomtitle: '130',

      onPress: (onPress = () => {}),
    },
    {
      id: '2',
      uppertitle: 'Total Like',
      bottomtitle: '920',
      onPress: (onPress = () => {}),
    },
    {
      id: '3',
      uppertitle: 'Total followers',
      bottomtitle: '6',
      onPress: (onPress = () => {}),
    },
    {
      id: '4',
      uppertitle: 'Usage time',

      bottomtitle: '2:6 hr',
      onPress: (onPress = () => {}),
    },
    {
      id: '5',
      uppertitle: 'Total comments',

      bottomtitle: '55',
      onPress: (onPress = () => {}),
    },
    {
      id: '6',
      uppertitle: 'Total Coins',
      bottomtitle: '120',
      onPress: (onPress = () => {}),
    },
    {
      id: '7',
      uppertitle: '----',

      bottomtitle: '----',
      onPress: (onPress = () => {}),
    },
    {
      id: '8',
      uppertitle: 'Total ticket purchase',
      middletitle: 'Luckwheel',
      bottomtitle: '600',
      onPress: (onPress = () => {}),
    },
  ];

  const User_live = [
    {
      id: '9',
      uppertitle: 'Total Shares',

      bottomtitle: '130',

      onPress: (onPress = () => {}),
    },
    {
      id: '10',
      uppertitle: 'Total Like',
      bottomtitle: '920',
      onPress: (onPress = () => {}),
    },
    {
      id: '11',
      uppertitle: 'Total followers',
      bottomtitle: '6',
      onPress: (onPress = () => {}),
    },
    {
      id: '12',
      uppertitle: 'Usage time',

      bottomtitle: '2:6 hr',
      onPress: (onPress = () => {}),
    },
    {
      id: '13',
      uppertitle: 'Total comments',

      bottomtitle: '55',
      onPress: (onPress = () => {}),
    },
    {
      id: '14',
      uppertitle: 'Total Coins',
      bottomtitle: '120',
      onPress: (onPress = () => {}),
    },
    {
      id: '15',
      uppertitle: 'Total coins from',
      middletitle: 'wheel box',
      bottomtitle: '9900',
      onPress: (onPress = () => {}),
    },
    {
      id: '16',
      uppertitle: 'Total ticket purchase',
      middletitle: 'Luckwheel',
      bottomtitle: '600',
      onPress: (onPress = () => {}),
    },
  ];
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => setSelectedId(item.id === selectedId ? null : item.id)}>
        <View
          style={{
            backgroundColor: item.id === selectedId ? 'red' : 'white',

            width: width * 0.4,
            height: height * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.2)',
            margin: 12,
          }}>
          <Text>{item.uppertitle}</Text>
          <Text>{item.middletitle}</Text>
          <Text>{item.bottomtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
    
  const  renderliveItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => setSelected(item.id === selected ? null : item.id)}>
        <View
          style={{
            backgroundColor: item.id === selected ? 'red' : 'white',

            width: width * 0.4,
            height: height * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.2)',
            margin: 12,
          }}>
          <Text>{item.uppertitle}</Text>
          <Text>{item.middletitle}</Text>
          <Text>{item.bottomtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );





  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginLeft: width * 0.05,
          marginRight: width * 0.05,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: width * 0.45,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: 500}}>User Use video</Text>
          <FlatList
            data={User_video}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
          />
        </View>

        <View
          style={{
            // backgroundColor: '#b88a7d',
            width: width * 0.45,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: 500}}>User Use Live</Text>
          <FlatList
            data={User_live}
            renderItem={renderliveItem}
            keyExtractor={item => item.id}
            
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default GeneralAnalytics;
const styles = StyleSheet.create({
  box: {
    width: width * 0.42,
    height: height * 0.09,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  txt: {
    fontSize: 14,
    color: '#000',
  },
});