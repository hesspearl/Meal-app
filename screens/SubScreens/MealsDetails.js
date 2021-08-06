import React ,{useEffect , useCallback} from "react";
import {  ScrollView , Image, StyleSheet, Text, View } from "react-native";
import {useSelector , useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../../components/HeaderButtons'
import {toggleFavorite} from '../../store/actions/meals'
import DefaultText from '../../components/DefaultText'

const ListItem = props=>{
   return <View style={styles.listItem}>

    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealsDetails = props => {

  const availableMeals = useSelector(state=>state.meals.meals)

  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  // to use action
 const dispatch = useDispatch()

const toggleFavHandler=useCallback(
  () => {
    dispatch(toggleFavorite ( mealId))
    
  },
  [dispatch , mealId],
)

useEffect(() => {
 props.navigation.setParams({ toggleFav: toggleFavHandler})

}, [toggleFavHandler])





  return (
    <ScrollView>
    <Image source={{uri:selectedMeal.imageUrl}}
    style={styles.img} />
    <View style={styles.details}>
    <DefaultText>{selectedMeal.duration}m</DefaultText>
  <DefaultText>{selectedMeal.complexity}</DefaultText>
  <DefaultText>{selectedMeal.affordability}</DefaultText>
    </View>
    <Text  style={styles.title}>Ingredients</Text>
    {selectedMeal.ingredients.map( ingredient=> 
    <ListItem key={ingredient}>{ingredient}</ListItem>)}
    <Text style={styles.title}>steps</Text>
    {selectedMeal.steps.map(step=> 
    <ListItem key= {step}>{step}</ListItem>)}
  
    </ScrollView>
  );
};

//navigation function

MealsDetails.navigationOptions = navigationData => {
const toggleFav= navigationData.navigation.getParam('toggleFav')
// const mealID = navigationData.navigation.getParam("mealID");
const mealTitle = navigationData.navigation.getParam("mealTitle")
const isFavorite = navigationData.navigation.getParam("isFav")
console.log(isFavorite)
  //const selectedMeal = MEALS.find(meal => meal.id === mealID);

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons  HeaderButtonComponent={HeaderButton}>
        <Item title="fav"
         iconName={isFavorite? "star" : "staro"}
         onPress={toggleFav} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
img:{
  width:"100%",
  height:200,
},
details:{
  flexDirection:'row',
  padding:15,
  justifyContent:'space-around'
},
title:{
  fontFamily:'open-sans-bold',
  fontSize:22,
  textAlign:'center'
},
listItem:{
  marginVertical:10,
  marginHorizontal:10,
  borderColor:'#ccc',
  borderWidth:1,
  padding:10,
}
});

export default MealsDetails;
