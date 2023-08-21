import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo'


const DATA = [
  {
    id: '1',
    uppertitle: '30.960',
    middletitle: 'coins purchase',
    bottomtitle: 'VIDEO',

    onPress: onPress = () => {

    }


  },
  {
    id: '2',
    uppertitle: '30.960',
    middletitle: 'coins win',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '3',
    uppertitle: '30.960',
    middletitle: 'coins Loss',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '4',
    uppertitle: '30.960',
    middletitle: 'coins purchase',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '5',
    uppertitle: '30.960',
    middletitle: 'coins purchase',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '6',
    uppertitle: '30.960',
    middletitle: 'coins purchase',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '7',
    uppertitle: '100.109',
    middletitle: 'coins purchase',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '8',
    uppertitle: '30.960',
    middletitle: 'coins win',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '9',
    uppertitle: '30.960',
    middletitle: 'coins Loss',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '10',
    uppertitle: '500',
    middletitle: 'Share send me',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '11',
    uppertitle: '500',
    middletitle: 'share i send',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '12',
    uppertitle: '500',
    middletitle: 'Share new user send',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '13',
    uppertitle: '500',
    middletitle: 'Share send me',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '14',
    uppertitle: '500',
    middletitle: 'share i send',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '15',
    uppertitle: '500',
    middletitle: 'Share new user send',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '16',
    uppertitle: '500',
    middletitle: 'Share send me',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '17',
    uppertitle: '500',
    middletitle: 'share i send',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '18',
    uppertitle: '500',
    middletitle: 'Share new user send',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '19',
    uppertitle: '600',
    middletitle: 'Like send me',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '20',
    uppertitle: '600',
    middletitle: 'Like i send',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '21',
    uppertitle: '600',
    middletitle: 'Like new user send',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '22',
    uppertitle: '600',
    middletitle: 'Like send me',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '23',
    uppertitle: '600',
    middletitle: 'Like i send',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '24',
    uppertitle: '600',
    middletitle: 'Like new user send',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '25',
    uppertitle: '700',
    middletitle: 'Comments send me',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '23',
    uppertitle: '600',
    middletitle: 'Comments i send',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '24',
    uppertitle: '700',
    middletitle: 'Comments new user ',
    bottomtitle: 'send Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '25',
    uppertitle: '700',
    middletitle: 'Comments send me',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '26',
    uppertitle: '700',
    middletitle: 'Comments i send',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '27',
    uppertitle: '700',
    middletitle: 'Comments New user ',
    bottomtitle: 'Send VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '28',
    uppertitle: '800',
    middletitle: 'Followers me',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '29',
    uppertitle: '800',
    middletitle: 'I Following',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '30',
    uppertitle: '800',
    middletitle: 'Followers New ',
    bottomtitle: 'LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '31',
    uppertitle: '800',
    middletitle: 'Followers me',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '32',
    uppertitle: '800',
    middletitle: 'I Following',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '33',
    uppertitle: '800',
    middletitle: 'Followers New ',
    bottomtitle: 'VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '34',
    uppertitle: '800',
    middletitle: 'Followers me',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '35',
    uppertitle: '800',
    middletitle: 'I Following',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '36',
    uppertitle: '800',
    middletitle: 'Followers New ',
    bottomtitle: 'Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '37',
    uppertitle: '900',
    middletitle: 'I sent Users',
    bottomtitle: 'Wheel coins LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '38',
    uppertitle: '900',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '39',
    uppertitle: '900',
    middletitle: 'New Users Sent',
    bottomtitle: 'Wheel Coins LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '40',
    uppertitle: '900',
    middletitle: 'I sent Users',
    bottomtitle: 'Wheel coins Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '41',
    uppertitle: '900',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '42',
    uppertitle: '900',
    middletitle: 'New Users Sent',
    bottomtitle: 'Wheel Coins Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '43',
    uppertitle: '900',
    middletitle: 'I sent Users',
    bottomtitle: 'Wheel coins VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '44',
    uppertitle: '900',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '45',
    uppertitle: '900',
    middletitle: 'New Users Sent',
    bottomtitle: 'Wheel Coins VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '46',
    uppertitle: '6 hour',
    middletitle: 'I stay Time on the',
    bottomtitle: 'Users Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '47',
    uppertitle: '6 hour',
    middletitle: 'Follower Stay time',
    bottomtitle: 'Me Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '48',
    uppertitle: '6 hour',
    middletitle: 'New Followers stay',
    bottomtitle: 'time Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '49',
    uppertitle: '6 hour',
    middletitle: 'I stay Time on the',
    bottomtitle: 'Users LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '50',
    uppertitle: '6 hour',
    middletitle: 'Follower Stay time',
    bottomtitle: 'Me LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '51',
    uppertitle: '6 hour',
    middletitle: 'New Followers stay',
    bottomtitle: 'time LIVE',
    onPress: onPress = () => {

    }

  },

  {
    id: '52',
    uppertitle: '6 hour',
    middletitle: 'I stay Time on the',
    bottomtitle: 'Users VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '53',
    uppertitle: '6 hour',
    middletitle: 'Follower Stay time',
    bottomtitle: 'Me VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '54',
    uppertitle: '6 hour',
    middletitle: 'New Followers stay',
    bottomtitle: 'time VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '55',
    uppertitle: '1.000 coins',
    middletitle: 'I sent users',
    bottomtitle: 'Wheel Luck Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '56',
    uppertitle: '1.000',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '57',
    uppertitle: '1.000',
    middletitle: 'New users sent',
    bottomtitle: 'Wheel Coins Games',
    onPress: onPress = () => {

    }

  },
  {
    id: '58',
    uppertitle: '1.000 coins',
    middletitle: 'I sent users',
    bottomtitle: 'Wheel Luck LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '59',
    uppertitle: '1.000',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '60',
    uppertitle: '1.000',
    middletitle: 'New users sent',
    bottomtitle: 'Wheel Coins LIVE',
    onPress: onPress = () => {

    }

  },
  {
    id: '61',
    uppertitle: '1.000 coins',
    middletitle: 'I sent users',
    bottomtitle: 'Wheel Luck VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '62',
    uppertitle: '1.000',
    middletitle: 'Users sent me',
    bottomtitle: 'Wheel Coins VIDEO',
    onPress: onPress = () => {

    }

  },
  {
    id: '63',
    uppertitle: '1.000',
    middletitle: 'New users sent',
    bottomtitle: 'Wheel Coins VIDEO',
    onPress: onPress = () => {

    }

  },



];

const MeAnalytics = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => (
    <View >
      <TouchableOpacity
        onPress={() => setSelectedId(item.id === selectedId ? null : item.id)}
      >
        <View
          style={{
            backgroundColor: item.id === selectedId ? 'red' : 'white',


            width: width * 0.4,
            height: height * 0.1,
            justifyContent: "center",
            alignItems: 'center',
            borderWidth: 2,
            borderColor: "rgba(0,0,0,0.2)",
            margin: 12

          }}
        >
          <Text>{item.uppertitle}</Text>
          <Text>{item.middletitle}</Text>
          <Text>{item.bottomtitle}</Text>
        </View>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View style={{

        paddingHorizontal: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        padding: 5,
        // backgroundColor:'pink'
      }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity >
            <Text style={{ fontSize: 15, fontWeight: 300, color: '#000', opacity: 0.3 }} >Aug 07 - Aug 13</Text>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginRight: width * 0.03, fontSize: 17, fontWeight: 500, color: '#000' }}>Filter:</Text>
          <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#d4d5d6' }}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: '#000' }}> Last 1 days</Text>
            <Entypo name='chevron-small-down' size={27} />

          </View>

        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}

        />

      </View>

    </View>
  )
}

export default MeAnalytics;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

})