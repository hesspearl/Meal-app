import React from "react";
import {
  StyleSheet,

  FlatList,
 
} from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButtons'
import CategoryGridItems from "../../components/CategoryGridItems";


const CategoriesScreen = props => {
 console.log(CategoriesScreen.navigationOptions);
  
  const renderGridItem = itemData => {
    return (
      <CategoryGridItems
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: {
              categoryId: itemData.item.id
            }
          })
        }
      />
    );
  };

CategoriesScreen.navigationOptions=(navData)=>{
  return{ }
    
 
}

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions= navData =>{
  return{  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
   <Item title='Menu'
   iconName='menu-unfold' 
   onPress={()=>{navData.navigation.toggleDrawer()}}
   />
 </HeaderButtons>}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
