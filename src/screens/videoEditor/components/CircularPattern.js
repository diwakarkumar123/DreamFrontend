import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Music from 'react-native-vector-icons/FontAwesome';
import Layer from 'react-native-vector-icons/Entypo';
import Play from 'react-native-vector-icons/AntDesign';
import Store from 'react-native-vector-icons/FontAwesome5';
import Layeranimation from './Layeranimation';
import Animation from './Animation';
import LeftIcon from './LeftIcon';

const CircularPattern = ({ setVideo_path, video_path, openHandler_modal, setShow_media }) => {
  const navigation = useNavigation();



  const [layer, setLayer] = useState(false);
  // const [show_media, setshow_media] = useState(false);


  const handleLayer = () => {
    setLayer(!layer);
  };

  const numItems = 5; // Number of items to display
  const radius = 95; // Radius of the circular arrangement
  const angleIncrement = (Math.PI) / 7; // Angle increment for each item

  const getItemPosition = (index) => {
    const angle = index * angleIncrement;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const getItemTextPosition = (index) => {
    const radius = 140;
    const angle = index * angleIncrement;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };




  return (
    <>
      <View style={styles.container}>


{/* 
        <View style={[styles.circle]}>
          {Array.from({ length: numItems }, (_, index) => (
            <View
              key={index}
              style={[
                styles.item,
                {
                  left: getItemTextPosition(index).x,
                  top: getItemTextPosition(index).y,
                },
              ]}
            >
              <Text style={styles.text}>shu</Text>
            </View>
          ))}
        </View>


        <View style={styles.circle}>
          {Array.from({ length: numItems }, (_, index) => (
            <View
              key={index}
              style={[
                styles.item,
                {
                  left: getItemPosition(index).x,
                  top: getItemPosition(index).y,
                },
              ]}
            >
              <Text style={styles.text}>sh</Text>
            </View>
          ))}
        </View> */}








        <View style={styles.import}>





          <Layer
            name="share-alternative"
            style={{ fontSize: 20, color: 'white' }}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.layerbutton}>
            {/* {layer && <Layeranimation layerHandler />} */}

          </View>

          <View style={styles.outerCircle}>
            <View style={{ marginBottom: 5 }}>

              <TouchableOpacity
                style={styles.icon_style}
                onPress={() => { setShow_media(p => !p) }}>
                <Icon
                  name="perm-media"
                  style={{ fontSize: 25, color: 'white', marginLeft: 3 }}
                />
                <Text style={{ fontSize: 10, color: 'white' }}>Media</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 5,
              paddingHorizontal: 8
            }}>

              <TouchableOpacity onPress={handleLayer}>
                <View style={styles.icon_style}>
                  <Layer
                    name="layers"
                    style={{
                      fontSize: 25,
                      color: 'white',
                      marginTop: 9,
                      marginLeft: 3,
                    }}
                  />
                  <Text style={{ fontSize: 10, color: 'white' }}>Layer</Text>
                </View>
              </TouchableOpacity>


              <View style={styles.camera}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Animation', {
                      setVideo_path,
                      video_path,
                    })}>
                  <Icon
                    name="camera"
                    style={{ fontSize: 25, color: 'white' }}
                  />
                </TouchableOpacity>
              </View>

              <View style={[styles.icon_style, { marginBottom: 5 }]}>
                <Music
                  name="music"
                  style={{
                    fontSize: 25,
                    color: 'white',
                    marginTop: 9,
                    marginLeft: 6,
                  }}
                />
                <Text style={{ fontSize: 10, color: 'white' }}>Audio</Text>
              </View>

            </View>

            <View style={styles.icon_style}>
              <Music
                name="microphone"
                style={{ fontSize: 25, color: 'white', marginLeft: 3 }}
              />
              <Text style={{ fontSize: 10, color: 'white' }}>Rec</Text>
            </View>

          </View>
        </View>
        <View style={styles.play}>
          <Store name="store" style={{ fontSize: 20, color: 'white' }} />
          <Play
            name="play"
            style={{ fontSize: 23, color: 'white', marginBottom: 10 }}
          />
        </View>
      </View>
      {/* </ScrollView> */}
      {/* {display_red_area && <Animation />} */}
      {/* display_red_area && <Animation display_red_area={animationHandler} />} */}
      {/* <View style={styles.circle}>
      
    </View> */}

    </>
  );
};

export default CircularPattern;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    height: 220,
    width: 250,
  },
  outerCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 80
  },

  camera: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#f24470',
    borderWidth: 2,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  import: {
    marginLeft: 185,
    top: 20,
  },
  play: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,

    bottom: 80,
  },
  icon_style: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 2 * 50,
    height: 2 * 50,
    borderRadius: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    transform: [{ rotate: '130deg' }],
    left: 40
  },
  item: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },

});