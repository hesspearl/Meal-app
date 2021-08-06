import React from 'react';
import {View , Text ,StyleSheet , TouchableOpacity , ImageBackground} from 'react-native'
import DefaultText from '../components/DefaultText';



const MealItem = props =>{

  return(
      <View style={styles.mealItem}>
  <TouchableOpacity onPress={props.onSelectMeal}>
  <View>
  <View style={{...styles.mealRow , ...styles.mealHeader}}>
  <ImageBackground
      source={{uri:props.image}}
      style={styles.bgimg}
  >
  <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
  </ImageBackground>
  </View>
  </View>
  <View style={{...styles.mealRow , ...styles.mealDetail}}>
  <DefaultText>{props.duration}m</DefaultText>
  <DefaultText>{props.complexity}</DefaultText>
  <DefaultText>{props.affordability}</DefaultText>
  </View>
</TouchableOpacity>
</View>
  )
}


styles=StyleSheet.create({
    mealItem:{
        height:200,
        width:'98%',
        backgroundColor:'#F5F5F5',
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        overflow:'hidden',
        margin: 2,
        
    },

mealRow:{
    flexDirection:'row'

},

mealHeader:{
    height:'90%'
},
mealDetail:{
paddingHorizontal:10,
justifyContent:'space-between',
alignItems:'center',
paddingBottom:20,
height:'10%'
},
title:{
    fontFamily: 'open-sans-bold',
    fontSize:22,
    color:'white',
    backgroundColor:'rgba(0,0,0,5)',
    paddingHorizontal:12,
    paddingVertical:5 ,
},
bgimg:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
}
})
export default MealItem;
