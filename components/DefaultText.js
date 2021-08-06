import React from 'react';
import {View , Text ,StyleSheet  } from 'react-native'



const DefaultText = props =>{

  return(
      <Text style={styles.text}>{props.children}</Text>
 )}


styles=StyleSheet.create({
    text:{
        fontFamily:'open-sans',

    }
})


export default DefaultText;
