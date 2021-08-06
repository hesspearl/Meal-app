import React from "react";
import{Platform}from 'react-native'
import { createAppContainer
 } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator}from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator} from 'react-navigation-drawer'
import { Ionicons } from "@expo/vector-icons";
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButtons'

import CategoriesScreen from "../screens/MainScreens/CategoriesScreen";
import CategoriesMealScreen from "../screens/MainScreens/CategoriesMealsScreen";
import MealsDetailsScreens from "../screens/SubScreens/MealsDetails";
import FavoriteScreen from "../screens/SubScreens/Favorite";
import FilterScreen from "../screens/SubScreens/Filter";
import Colors from "../constant/Colors";


const defaultStackOptions={
   //can be over written
  
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    
    headerTitleStyle:{
      fontFamily: 'open-sans-bold',
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }


const MealsNavigation = createStackNavigator(
  
   { // the top options
    CategoriesScreen: 
     { screen: CategoriesScreen,
      navigationOptions:{
        headerTitle:'Meal Categories'
      }
    } 
    ,
    CategoriesMeals: CategoriesMealScreen,
    MealsDetails: MealsDetailsScreens}
  ,

 { defaultNavigationOptions: defaultStackOptions}



);

const favNavigator=createStackNavigator
( { FavoriteScreen:{
    screen:FavoriteScreen,
    navigationOptions:{
      headerTitle:'Your Favorite'
    }},
  MealsDetails:MealsDetailsScreens}
,
{
  defaultNavigationOptions: defaultStackOptions
})

// hold meal nav + fav nav
const tabScreenConfig=  {
    Meals: {
      screen: MealsNavigation,
      navigationOptions: {
        tabBarIcon: icon => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={icon.tintColor} />
          );
        },
        tabBarColor:Colors.primaryColor
      }
    },
    Favorite: {
      screen: favNavigator,
      navigationOptions: {
        tabBarIcon: icon => {
          return <Ionicons name="ios-star" size={25} color={icon.tintColor} />;
        },
        tabBarColor:Colors.accentColor
        
      }
    }
  },


  // its hold navigators inside
 MealFavTab =Platform.OS==='android'? createMaterialBottomTabNavigator (
    tabScreenConfig ,
    {
        activeColor:'white',
        shifting:true,
    
    }
): createBottomTabNavigator(
  tabScreenConfig,
  {
    tabBarOptions: {
      labelStyle:{
        fontFamily: 'open-sans',
      },
      activeTintColor: Colors.accentColor
    }
  },
);

const FilterNavigator= createStackNavigator({
  Filters:{ screen:FilterScreen,
    navigationOptions:{
      headerTitle:'Filters',

 }
    }
    
     
    },
    
    

    
    {defaultNavigationOptions: defaultStackOptions}
)



const mainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen:MealFavTab,
    navigationOptions:{
      drawerLabel:'Meals',
     
      
    },
    
  },
  Filter:FilterNavigator

},
{
  
  drawerType:'front',
  contentOptions:{
    inactiveTintColor:Colors.accentColor,
    activeTintColor:'white',
    activeBackgroundColor:Colors.primaryColor,
    labelStyle:{

    fontFamily: 'open-sans',
    }
  }
  
}
)

//react navigator need container

export default createAppContainer(mainNavigator);
