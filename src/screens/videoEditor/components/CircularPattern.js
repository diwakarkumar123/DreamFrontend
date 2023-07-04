import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Music from 'react-native-vector-icons/FontAwesome';
  import Layer from 'react-native-vector-icons/Entypo';
  import Play from 'react-native-vector-icons/AntDesign';
  import Store from 'react-native-vector-icons/FontAwesome5';
  import Layeranimation from './Layeranimation';
  import Animation from './Animation';
  
  const CircularPattern = ({setVideo_path, video_path,openHandler_modal}) => {
    const navigation = useNavigation();
  
    //  console.log(video_path)
  
    // const [display_red_area, setDisplay_red_area] = React.useState(false);
  
    const [layer, setLayer] = useState(false);
    const [show_media, setshow_media] = useState(false);
  
   
  
    // const animationHandler = () => {
    //   setDisplay_red_area(!display_red_area);
    // };
    const handleLayer = () => {
      setLayer(!layer);
    };
  
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.import}>
              <Layer
                name="share-alternative"
                style={{fontSize: 20, color: 'white'}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.layerbutton}>
                {layer && <Layeranimation layerHandler />}
              </View>
              <View style={styles.outerCircle}>
                <View style={{marginBottom: 7, marginLeft: 5}}>
                  <TouchableOpacity
                   onPress={()=>{{
                    openHandler_modal(true)
                   }}}>
                   
                    <Icon
                      name="perm-media"
                      style={{fontSize: 25, color: 'white', marginLeft: 3}}
                    />
                    <Text style={{fontSize: 10, color: 'white'}}>Media</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={handleLayer}>
                    <View>
                      <Layer
                        name="layers"
                        style={{
                          fontSize: 25,
                          color: 'white',
                          marginTop: 9,
                          marginLeft: 3,
                        }}
                      />
                      <Text style={{fontSize: 10, color: 'white'}}>Layer</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.camera}>
                    <TouchableOpacity
                      //  onPress={()=>setDisplay_red_area(true)}
                      // setDisplay_red_area(true);
                      onPress={() =>
                        navigation.navigate('Animation', {
                          setVideo_path,
                          video_path,
                        })
                      }>
                      <Icon
                        name="camera"
                        style={{fontSize: 25, color: 'white'}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Music
                      name="music"
                      style={{
                        fontSize: 25,
                        color: 'white',
                        marginTop: 9,
                        marginLeft: 6,
                      }}
                    />
                    <Text style={{fontSize: 10, color: 'white'}}>Audio</Text>
                  </View>
                </View>
                <View style={{marginTop: 7, marginLeft: -2}}>
                  <Music
                    name="microphone"
                    style={{fontSize: 25, color: 'white', marginLeft: 3}}
                  />
                  <Text style={{fontSize: 10, color: 'white'}}>Rec</Text>
                </View>
              </View>
            </View>
            <View style={styles.play}>
              <Store name="store" style={{fontSize: 20, color: 'white'}} />
              <Play
                name="play"
                style={{fontSize: 23, color: 'white', marginBottom: 10}}
              />
            </View>
          </View>
        </ScrollView>
        {/* {display_red_area && <Animation />} */}
        {/* display_red_area && <Animation display_red_area={animationHandler} />} */}
      </>
    );
  };
  
  export default CircularPattern;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'green',
      alignItems: 'center',
      height: 250,
      width: 260,
      flexDirection: 'column',
    },
    outerCircle: {
      width: 160,
      height: 160,
      borderRadius: 80,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      marginLeft: 20,
      top: 10,
      marginRight: 20,
      marginBottom: 100,
    },
  
    camera: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 18,
      marginTop: 5,
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
    layerbutton: {},
  });