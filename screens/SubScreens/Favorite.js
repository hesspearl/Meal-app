import React from "react";
import { View , StyleSheet} from 'react-native'
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButtons'
import MealList from "../../components/MealLIst";
import{useSelector} from "react-redux"
import DefaultText from "../../components/DefaultText";

const FavScreen = props => {

  const favMeals = useSelector(state=> state.meals.favoriteMeals)
console.log("favorite Meals" + favMeals)

if (favMeals.length ===0 || !favMeals ){
  return<View style= {styles.content}>
    <DefaultText>No favorite meals found </DefaultText>
  </View>
}
 
  return <MealList listData={favMeals} navigation={props.navigation}/>;
};


FavScreen.navigationOptions=(navData)=>{
  return {headerLeft:
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title='menu' iconName='menu-unfold' 
        onPress={()=> navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>}
  }

const styles=StyleSheet.create({
 content:{
   flex:1,
alignItems: 'center',
justifyContent: 'center',
   
   
 }
})

export default FavScreen;
