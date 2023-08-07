import { Dimensions, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParsedText from 'react-native-parsed-text';



const {width, height} = Dimensions.get('screen')

const Rose = () => {


    const handleUrlPress = (url,)=>{
       Linking.openURL(url)
       .then((r)=>{console.log(r)})
       .catch((r)=>{console.log(r)})

    }

    const handlePhonePress = ()=>{

    }
    const handleEmailPress = ()=>{

    }
    const handleNamePress = ()=>{

    }
    





  return (
    <View style={styles.main_container}>
        <ParsedText
          style={styles.text}
          parse={
            [
              {type: 'url',                       style: styles.url, onPress: handleUrlPress},
              {type: 'phone',                     style: styles.phone, onPress: handlePhonePress},
              {type: 'email',                     style: styles.email, onPress: handleEmailPress},
              {pattern: /Bob|David/,              style: styles.name, onPress: handleNamePress},
              {pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: handleNamePress, renderText: this.renderText},
              {pattern: /42/,                     style: styles.magicNumber},
              {pattern: /#(\w+)/,                 style: styles.hashTag},
            ]
          }
          childrenProps={{allowFontScaling: false}}
        >
          Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
          But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
          And the magic number is 42! @shubham  https://play.google.com/apps/internaltest/4701470419174609209
          #react #react-native
        </ParsedText>
      
    </View>
  )
}

export default Rose

const styles = StyleSheet.create({
    main_container: {
        width: width,
        height: 325,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    
      url: {
        color: 'red',
        textDecorationLine: 'underline',
      },
    
      email: {
        textDecorationLine: 'underline',
      },
    
      text: {
        color: 'black',
        fontSize: 15,
      },
    
      phone: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
    
      name: {
        color: 'red',
      },
    
      username: {
        color: 'green',
        fontWeight: 'bold'
      },
    
      magicNumber: {
        fontSize: 42,
        color: 'pink',
      },
    
      hashTag: {
        fontStyle: 'italic',
      },
})