import React from 'react';
import {View , StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {CATEGORIES } from '../../data/dummy-data'
import MealList from "../../components/MealLIst"
import DefaultText from '../../components/DefaultText';


const CategoriesMealScreen = props => {


  const catId = props.navigation.getParam('categoryId')
  console.log( 'cat id'+ catId)
// get state from reducer key name then which initial state
  const availableMeals= useSelector(state => state.meals.filteredMeals)

const displayMeals = availableMeals.filter(
  (meal)=>meal.categoryId.indexOf(catId)>=0)

  if(displayMeals.length ===0){
    return<View style= {styles.content}>
      <DefaultText> No meals found !</DefaultText>
    </View>
  }


  return (
  <MealList listData={displayMeals} navigation={props.navigation}/>
  );
}

//it can be proprtey or function 
CategoriesMealScreen.navigationOptions =navigatorData =>{
 
  const catId = navigatorData.navigation.getParam('categoryId');
  
  const selectedCategory =CATEGORIES.find(cat => cat.id === catId)
  
  return{
    headerTitle:selectedCategory.title,
  }
}

const styles=StyleSheet.create({
  content:{
    flex:1,
 alignItems: 'center',
 justifyContent: 'center',
    
    
  }
 })

export default CategoriesMealScreen;