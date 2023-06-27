import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Body from '../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';


const { width, height } = Dimensions.get('window')

const InterestScreen = () => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState('');
  const [selected_country, setSelected_country] = useState(['s'])


  const hobbies = [
    { id: 1, name: "Reading" },
    { id: 2, name: "Playing sports" },
    { id: 3, name: "Painting" },
    { id: 4, name: "Cooking" },
    { id: 5, name: "Gardening" },
    { id: 6, name: "Photography" },
    { id: 7, name: "Hiking" },
    { id: 8, name: "Writing" },
    { id: 9, name: "Playing musical instruments" },
    { id: 10, name: "Dancing" },
    { id: 11, name: "Singing" },
    { id: 12, name: "Swimming" },
    { id: 13, name: "Traveling" },
    { id: 14, name: "Chess" },
    { id: 15, name: "Yoga" },
    { id: 16, name: "Knitting" },
    { id: 17, name: "Birdwatching" },
    { id: 18, name: "Running" },
    { id: 19, name: "Fishing" },
    { id: 20, name: "Collecting stamps" },
    { id: 21, name: "Cycling" },
    { id: 22, name: "Watching movies" },
    { id: 23, name: "Pottery" },
    { id: 24, name: "Calligraphy" },
    { id: 25, name: "Origami" },
    { id: 26, name: "Camping" },
    { id: 27, name: "Playing video games" },
    { id: 28, name: "Woodworking" },
    { id: 29, name: "Embroidery" },
    { id: 30, name: "Sculpting" },
    { id: 31, name: "Sewing" },
    { id: 32, name: "Playing board games" },
    { id: 33, name: "Learning languages" },
    { id: 34, name: "Meditation" },
    { id: 35, name: "Playing chess" },
    { id: 36, name: "Singing karaoke" },
    { id: 37, name: "Mountain climbing" },
    { id: 38, name: "Playing tennis" },
    { id: 39, name: "Surfing" },
    { id: 40, name: "Writing poetry" },
    { id: 41, name: "Cooking/baking" },
    { id: 42, name: "Painting miniatures" },
    { id: 43, name: "Astronomy" },
    { id: 44, name: "Playing card games" },
    { id: 45, name: "Writing songs" },
    { id: 46, name: "Archery" },
    { id: 47, name: "Interior design" },
    { id: 48, name: "Home brewing" },
    { id: 49, name: "DIY crafts" },
    { id: 50, name: "Volunteering" },
    { id: 51, name: "Playing darts" },
    { id: 52, name: "Stand-up comedy" },
    { id: 53, name: "Wine tasting" },
    { id: 54, name: "Magic tricks" },
    { id: 55, name: "Geocaching" },
    { id: 56, name: "Parkour" },
    { id: 57, name: "Beekeeping" },
    { id: 58, name: "Playing the drums" },
    { id: 59, name: "Martial arts" },
    { id: 60, name: "Geology" },
    { id: 61, name: "Yoga" },
    { id: 62, name: "Salsa dancing" },
    { id: 63, name: "Playing the piano" },
    { id: 64, name: "Rock climbing" },
    { id: 65, name: "Collecting coins" },
    { id: 66, name: "Astrology" },
    { id: 67, name: "Scrapbooking" },
    { id: 68, name: "Kayaking" },
    { id: 69, name: "Learning magic" },
    { id: 70, name: "Acting" },
    { id: 71, name: "Writing fiction" },
    { id: 72, name: "Skydiving" },
    { id: 73, name: "Floral arranging" },
    { id: 74, name: "Car restoration" },
    { id: 75, name: "Surfing" },
    { id: 76, name: "Ghost hunting" },
    { id: 77, name: "Beekeeping" },
    { id: 78, name: "Genealogy" },
    { id: 79, name: "Playing the guitar" },
    { id: 80, name: "Wine making" },
    { id: 81, name: "Stand-up paddleboarding" },
    { id: 82, name: "Crossword puzzles" },
    { id: 83, name: "Geocaching" },
    { id: 84, name: "Photography" },
    { id: 85, name: "Writing letters" },
    { id: 86, name: "Karate" },
    { id: 87, name: "Canoeing" },
    { id: 88, name: "Painting landscapes" },
    { id: 89, name: "Reading biographies" },
    { id: 90, name: "Table tennis" },
    { id: 91, name: "Playing poker" },
    { id: 92, name: "Learning a new programming language" },
    { id: 93, name: "Horseback riding" },
    { id: 94, name: "Collecting seashells" },
    { id: 95, name: "Astronomy" },
    { id: 96, name: "Ice skating" },
    { id: 97, name: "Archery" },
    { id: 98, name: "Stand-up paddleboarding" },
    { id: 99, name: "Writing a journal" },
    { id: 100, name: "Doing crossword puzzles" },
    { id: 101, name: "Learning to code" },
    { id: 102, name: "Skateboarding" },
    { id: 103, name: "Beer tasting" },
    { id: 104, name: "Quilting" }
  ]


  const Country_card = ({ item, index }) => {

    const includesObject = (array, object) => {
      for (const item of array) {
        if (typeof item === "object" && JSON.stringify(item) === JSON.stringify(object)) {
          return true;
        }
      }
      return false;
    };



    const toggle_switch = (val) => {

      if (includesObject(selected_country, item)) {
        console.log('true')
        setSelected_country(selected_country.filter(it => it.id !== item.id));
      } else {

        setSelected_country([...selected_country, item]);
      }
    }



    return (
      <View style={styles.cities_card}>
        <Text>{item.name}</Text>
        <CheckBox
          onValueChange={toggle_switch}
          value={includesObject(selected_country, item) ? true : false}
          tintColors={{ true: 'red', false: 'black' }}

        />
      </View>
    )
  }

  // console.log(selected_country)

  const handleSearch = (text) => {
    setSearchText(text);

    const filteredData = hobbie.filter((user) =>
      user.name.toLowerCase().startsWith(text.toLowerCase())
    );

    setFilteredUsers(filteredData);
  };


  const handleConfirm = () => {

  }

  return (
    <Body>
      <Body applyPadding={false} style={styles.header}>
        <Body applyPadding={false} style={styles.leftHeader}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <AntDesign name='arrowleft' size={20} />
          </TouchableOpacity>

          <TextInput
            placeholder='Search'
            onChangeText={handleSearch}
            style={{
              width: '100%',
              marginLeft: 10,
              width: width * 0.6
            }}
          />

        </Body>
        <TouchableOpacity
          onPress={handleConfirm}
        >
          <Text style={[styles.headerText, { color: 'rgba(26, 148, 236, 1)' }]}>Compl...</Text>
        </TouchableOpacity>
      </Body>


      <View style={styles.countries}>
        <View style={{
          width: width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.1,
          marginTop: 10
        }}>
          <Text>Select All</Text>
          <CheckBox
            value={selected_country.length === hobbies.length ? true : false}
            tintColors={{ true: 'red', false: 'black' }}
            onValueChange={() => {
              if (selected_country.length === hobbies.length) {
                setSelected_country([])
              } else {
                setSelected_country(hobbies)
              }
            }}
          />
        </View>
        <FlatList
          data={filteredUsers ? filteredUsers : hobbies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Country_card item={item} index={index} />
          )}
        />

      </View>

    </Body>
  )
}

export default InterestScreen

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 7,
    borderColor: 'rgba(217, 217, 217, 0.4)',
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
    alignItems: 'center'
  },
  countries: {
    width: width,
    height: height,
    alignItems: 'center'
  },
  cities_card: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.1
  }
})