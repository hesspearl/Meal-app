import React from 'react';
import { StyleSheet,  View , FlatList } from 'react-native';
import {useSelector} from 'react-redux'

import MealItem from "./MealItem"


const MealList = props => {
 const favoriteMeals= useSelector(state => state.meals.favoriteMeals)

    const renderMealItems= itemData=>{

      const isFavorite = favoriteMeals.some(meal=>meal.id === itemData.item.id)

        return<MealItem 
        title ={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
          onSelectMeal={()=>{
            props.navigation.navigate({routeName:'MealsDetails', params :{
              mealId:itemData.item.id ,
               mealTitle:itemData.item.title,
               isFav:isFavorite
            }})
          }}
        />
      }


  return (
    <View style={styles.container}>
      
      <FlatList 
       data={props.listData}
      keyExtractor={(item,index)=> item.id}
      renderItem={renderMealItems}
      style={{width:'100%'}}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealList;